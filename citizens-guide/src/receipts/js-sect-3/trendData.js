import { trendCsv } from './trendCsv';
import { csvParse } from 'd3-dsv';
import 'babel-polyfill';

const d3 = { csvParse },
    data = d3.csvParse(trendCsv);

function cleanData() {
    const keys = Object.keys(data[0]),
        inflationKeys = keys.filter(k => k.includes('_inflation_'));

    data.forEach(row => {
        inflationKeys.forEach(k => delete row[k]);

        Object.keys(data[0]).forEach(k => {
            if (k.includes('activity')) {
                return;
            }

            row[k] = Number(row[k]);
        })
    })
}

cleanData();

function sortFn(a, b) {
    a = a.values[0].amount;
    b = b.values[0].amount;

    if (a > b) {
        return -1;
    }

    if (a < b) {
        return 1;
    }

    return 0;
}

export function getSummary() {
    const d = data.filter(row => !row.sub_activity);

    d.forEach(r => {
        r.name = r.activity
    })

    return d;
}

export function getByCategory(cateogry) {
    const d = data.filter(row => row.activity === cateogry && row.sub_activity)

    d.forEach(r => {
        r.name = r.sub_activity;
    })

    return d;
}

export function processDataForChart(_data) {
    const valueKeys = Object.keys(_data[0]).filter(k => {
        return k.includes('fy') && !k.includes('percent')
    });
    
    let data = _data.map(row => {
            return {
                name: row.name,
                values: valueKeys.map(k => {
                    if (isNaN(row[k])) {
                        return;
                    }
                    
                    return {
                        year: Number(k.replace('fy', '20')),
                        amount: row[k]
                    }
                })
            }
        })

    data.forEach(r => {
        r.values = r.values.filter(v => v);
    })

    

    return data.sort(sortFn);
}