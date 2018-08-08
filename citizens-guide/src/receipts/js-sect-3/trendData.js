import { trendCsv } from './trendCsv';
import { csvParse } from 'd3-dsv';

const d3 = { csvParse },
    data = d3.csvParse(trendCsv);

function cleanData(){
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

export function getSummary(){
    return data.filter(row => !row.sub_activity)
}