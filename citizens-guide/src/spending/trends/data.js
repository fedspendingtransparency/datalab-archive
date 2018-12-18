import 'babel-polyfill';
import SpendingData from '../../../public/csv/spending_categories.csv';

function getByYear(yyyy) {
    return SpendingData.filter(r => r.fiscal_year === yyyy)
}

export function indexByYear(yyyy) {
    const indexed = {};
    
    getByYear(2017).forEach(r => {
        let tempChildren;
        
        indexed[r.category] = indexed[r.category] || {};

        if (r.child) {
            // child rows
            indexed[r.category][r.parent] = indexed[r.category][r.parent] || {
                children: {}
            }

            indexed[r.category][r.parent].children[r.child] = {
                name: r.child,
                amount: r.spending_adjusted,
                percent: r.percent_total
            }
        } else {
            // parent rows
            tempChildren = (indexed[r.category][r.parent]) ? indexed[r.category][r.parent].children : {};

            indexed[r.category][r.parent] = {
                name: r.parent,
                amount: r.spending_adjusted,
                percent: r.percent_total,
                children: tempChildren
            }
        }
    });

    return indexed;
}