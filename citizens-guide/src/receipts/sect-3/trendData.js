import CategoryData from '../../../public/csv/fy13_fy17_sept_mts_receipts.csv';

export function trendData(){
    const indexed = {};

    let arr;

    CategoryData.forEach(r => {
        if (isNaN(r.income)) {
            return;
        }
        
        indexed[r.activity_plain] = indexed[r.activity_plain] || {
            name: r.activity_plain,
            officialName: r.activity,
            values: [],
            subcategories: {}
        };

        if (r.sub_activity) {
            indexed[r.activity_plain].subcategories[r.sub_activity_plain] = indexed[r.activity_plain].subcategories[r.sub_activity_plain] || {
                name: r.sub_activity_plain,
                officialName: r.sub_activity,
                values: [],
            };

            indexed[r.activity_plain].subcategories[r.sub_activity_plain].values.push({
                year: r.fiscal_year,
                amount: r.income
            })
        } else {
            indexed[r.activity_plain].values.push({
                year: r.fiscal_year,
                amount: r.income
            })
        }
    })

    return Object.keys(indexed).map(c => {
        indexed[c].subcategories = Object.keys(indexed[c].subcategories).map(s => indexed[c].subcategories[s]);
        
        return indexed[c];
    })
}