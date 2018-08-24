import CategoryData from '../../../public/csv/receipts.csv';
import { max } from 'd3-array';

const d3 = { max };

function enrichData(data) {
    let tracker = data[0].percent_total;

    data.forEach(d => {
        d.start = tracker;
        d.end = (tracker * 100 + d3.max([Math.abs(d.percent_total), 0.01]) * 100) / 100;

        tracker = d.end;
    })
}

function sortSubcategories(a, b) {
        a = a.percent_total;
        b = b.percent_total;

        if (a < 0) {
            if (a < b) {
                return -1
            }

            if (a > b) {
                return 1;
            }
        }

        if (b < 0) {
            return 1;
        }

        if (a > b) {
            return -1;
        }

        if (a < b) {
            return 1;
        }

        return 0;
}

function sortByAmount(a, b) {
    a = a.amount;
    b = b.amount;

    if (a < b) { return 1 }
    if (a > b) { return -1 }
    return 0;
}

function addSubcategories(categoryRow) {
    categoryRow.subcategories = CategoryData.filter(r => {
        return (r.fiscal_year === 2017 && r.sub_activity && r.activity === categoryRow.activity)
    }).sort(sortSubcategories);

    enrichData(categoryRow.subcategories);
}

export function getDataByYear(year) {
    const categories = CategoryData.filter(r => {
        return (r.fiscal_year === 2017 && !r.sub_activity)
    }).sort(sortByAmount);

    categories.forEach(addSubcategories)

    return categories;
}