import { receiptsCsv } from './receipts-data-const';
import { csvParse } from 'd3-dsv';

const d3 = { csvParse },
    data = d3.csvParse(receiptsCsv);

function percentToHundredth(part, whole) {
    return Math.round(part / whole * 10000) / 100;
}

function simplifyValue(n) {
    const trillion = 1000000000000,
        billion = 1000000000,
        million = 1000000;

    if (n >= trillion) {
        return `$${Math.round(n / trillion * 10)/10} T`;
    } else {
        return `$${Math.round(n / billion * 10)/10} B`;
    }
    //  else {
    //     return `$${Math.round(n / million * 10)/10} M`;
    // }
}

function mergeCategories(categories) {

}

export function getSubCategoriesByYear(column) {
    const obj = {
        categories: {},
        annualTotal: 0
    };

    data.forEach(row => {
        obj.categories[row.activity] = obj.categories[row.activity] || {
            subcategories: [],
            categoryTotal: 0
        };

        obj.categories[row.activity].subcategories.push({
            name: row.sub_activity,
            value: Number(row[column]),
            valueStr: simplifyValue(Number(row[column]))
        })

        obj.categories[row.activity].categoryTotal += Number(row[column]);
        obj.annualTotal += Number(row[column]);
    })
    
    obj.annualTotalStr = simplifyValue(obj.annualTotal);

    // calculate percents
    Object.keys(obj.categories).forEach(c => {
        obj.categories[c].categoryTotalStr = simplifyValue(obj.categories[c].categoryTotal);
        obj.categories[c].percent = percentToHundredth(obj.categories[c].categoryTotal, obj.annualTotal);

        obj.categories[c].subcategories.forEach(subcategory => {
            const p = percentToHundredth(subcategory.value, obj.categories[c].categoryTotal);
            subcategory.percent = p;
            subcategory.percentStr = (p) ? `${p}%` : `< 0.01%`;
        })
    })

    return obj;
}