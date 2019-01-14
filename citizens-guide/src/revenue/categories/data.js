import CategoryData from '../../../public/csv/revenue_source_fy14_fy18.csv';
import { min, max } from 'd3-array';

const d3 = { min, max };

function enrichData(data) {
    
    
<<<<<<< HEAD
    let negativeValuesArray = data.filter(function(d) {
            return d.percent_total < 0
        }),
        tracker = 0;

    if(negativeValuesArray.length){
        tracker = negativeValuesArray.reduce(function(a, b){
            // Using reduce on an array of objects means we need to return an object with the field name of what
            // we are returning. Otherwise, returning a.percent_total + b.percent_total results in NaN.
            return {percent_total: a.percent_total + b.percent_total};
        }).percent_total; // Just grab the field name from what we returned above.
    }
=======
    let tracker = d3.min([data[0].percent_total, 0]);
>>>>>>> make-it-mesh

    data.forEach(d => {
        d.start = tracker;
        d.end = (tracker * 100 + d3.max([Math.abs(d.percent_total), 0.01]) * 100) / 100;

        tracker = d.end;
<<<<<<< HEAD
    });
=======
    })
>>>>>>> make-it-mesh
}

function sortSubcategories(a, b) {
    a = a.percent_total;
    b = b.percent_total;

<<<<<<< HEAD
    if (a < 0 && b < 0) {
        return a - b;
    }

    return b - a;
=======
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
>>>>>>> make-it-mesh
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
        amount: r.revenue_adjusted,
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