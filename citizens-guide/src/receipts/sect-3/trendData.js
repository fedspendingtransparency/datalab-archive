import CategoryData from '../../../public/csv/receipts.csv';

export function trendData(){
    const indexed = {};

    let arr;

    CategoryData.forEach(r => {
        if (isNaN(r.amount)) {
            return;
        }
        
        indexed[r.activity] = indexed[r.activity] || {
            name: r.activity,
            values: [],
            subcategories: {}
        };

        if (r.sub_activity) {
            indexed[r.activity].subcategories[r.sub_activity] = indexed[r.activity].subcategories[r.sub_activity] || {
                name: r.sub_activity,
                values: [],
            };

            indexed[r.activity].subcategories[r.sub_activity].values.push({
                year: r.fiscal_year,
                amount: r.amount
            })
        } else {
            indexed[r.activity].values.push({
                year: r.fiscal_year,
                amount: r.amount
            })
        }
    })

    return Object.keys(indexed).map(c => {
        indexed[c].subcategories = Object.keys(indexed[c].subcategories).map(s => indexed[c].subcategories[s]);
        
        return indexed[c];
    })
}