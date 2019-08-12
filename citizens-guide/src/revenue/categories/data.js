// import CategoryData from '../../../public/csv/revenue_source_fy14_fy18.csv';
// this comment is to ge the IDE to show changes to commit
import CategoryData from '../../../assets/ffg/federal_revenue_categories.csv';
import { min, max } from 'd3-array';

const d3 = { min, max };

function enrichData(data) {
    let tracker = 0,
        negativeValuesArr = data.filter(function(d){
            return d.percent_total < 0;
        });
    negativeValuesArr.forEach(d => {
        tracker += d.percent_total;
    });

    data.forEach(d => {
        d.start = tracker;
        d.end = (tracker * 100 + d3.max([Math.abs(d.percent_total), 0.01]) * 100) / 100;

        tracker = d.end;
    });
}

function sortSubcategories(a, b) {
    a = a.percent_total;
    b = b.percent_total;

    return b - a;
}

function sortByAmount(a, b) {
    a = a.amount;
    b = b.amount;

    if (a < b) { return 1 }
    if (a > b) { return -1 }
    return 0;
}

function addSubcategories(categoryRow) {
    //'this' argument expects a year
    
    categoryRow.subcategories = CategoryData.filter(r => {
        return (r.fiscal_year === this && r.sub_activity && r.activity_plain === categoryRow.activity)
    }).map(dataMapper).sort(sortSubcategories);
    
    enrichData(categoryRow.subcategories);
}

function dataMapper(r) {
    return {
        activity: r.activity_plain,
        sub_activity: r.sub_activity_plain,
        amount: r.revenue_adjusted,
        percent_total: r.percent_total
    }
}

export function getDataByYear(year) {
    const categories = CategoryData.filter(r => {
        return (r.fiscal_year === year && !r.sub_activity)
    }).map(dataMapper).sort(sortByAmount);

    categories.forEach(addSubcategories, year);

    return categories;
}