import 'babel-polyfill';
import SpendingData from '../../../csv/spending_categories.csv';

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