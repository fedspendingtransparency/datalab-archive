import CategoryData from '../../../public/csv/income_categories_2013_2017.csv';
import { min, max } from 'd3-array';

const d3 = { min, max };

function enrichData(data) {
    
    
    let tracker = d3.min([data[0].percent_total, 0]);

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
        return (r.fiscal_year === 2017 && r.sub_activity && r.activity_plain === categoryRow.activity)
    }).map(dataMapper).sort(sortSubcategories);
    
    enrichData(categoryRow.subcategories);
}

function dataMapper(r) {
    return {
        activity: r.activity_plain,
        sub_activity: r.sub_activity_plain,
        amount: r.income_adjusted,
        percent_total: r.percent_total
    }
}

export function getDataByYear(year) {
    const categories = CategoryData.filter(r => {
        return (r.fiscal_year === 2017 && !r.sub_activity)
    }).map(dataMapper).sort(sortByAmount);

    categories.forEach(addSubcategories);

    return categories;
}