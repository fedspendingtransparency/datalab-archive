import 'babel-polyfill';
import SpendingData from '../../public/csv/spending_categories.csv';
import { min } from 'd3-array';

const d3 = { min };

function stackData(series) {
    let tracker;

    series.forEach((r, i) => {
        if (i === 0) {
            tracker = d3.min([0, series.filter(r => r.amount < 0).reduce((a, c) => a += c.amount, 0)]);
        }

        r.stack0 = tracker;
        r.stack1 = tracker + Math.abs(r.amount);

        tracker += Math.abs(r.amount);

        if (r.subcategories) {
            stackData(r.subcategories)
        }

    })
}

function objectToArray(obj) {
    return Object.keys(obj).map(k => obj[k]);
}

function sortData(a, b) {
    return a.amount - b.amount;
}

function generateArrayByDataType(dataObj) {
    const currentYearData = objectToArray(dataObj);

    currentYearData.forEach(r => {
        r.subcategories = objectToArray(r.subcategories)
    })

    currentYearData.sort(sortData)

    stackData(currentYearData);

    return currentYearData;
}

function getByYear(yyyy) {
    return SpendingData.filter(r => r.fiscal_year === yyyy)
}

function formatPercent(n) {
    return n * 100;
}

export function indexByYear(yyyy) {
    const indexed = {};

    getByYear(2017).forEach(r => {
        let tempChildren;

        indexed[r.category] = indexed[r.category] || {};

        if (r.child) {
            // child rows
            indexed[r.category][r.parent] = indexed[r.category][r.parent] || {
                subcategories: {}
            }

            indexed[r.category][r.parent].subcategories[r.child] = {
                activity: r.child_plain,
                amount: r.spending_adjusted,
                percent_total: formatPercent(r.percent_total)
            }
        } else {
            // parent rows
            tempChildren = (indexed[r.category][r.parent]) ? indexed[r.category][r.parent].subcategories : {};

            indexed[r.category][r.parent] = {
                activity: r.parent_plain,
                amount: r.spending_adjusted,
                percent_total: formatPercent(r.percent_total),
                subcategories: tempChildren
            }
        }
    });

    return indexed;
}

export function stackedByYear(yyyy) {
    const dataTypes = [
        'agency',
        'function'
    ],
        currentYear = indexByYear(2017),
        result = {};

    dataTypes.forEach(t => {
        result[t] = generateArrayByDataType(currentYear[t])
    });

    return result;
}