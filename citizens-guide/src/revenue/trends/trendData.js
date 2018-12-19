import CategoryData from '../../../public/csv/revenue_source_fy14_fy18.csv';

export function trendData(){
    const indexed = {};

    let arr;

    CategoryData.forEach(r => {
        if (isNaN(r.revenue)) {
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
                amount: r.revenue
            })
        } else {
            indexed[r.activity_plain].values.push({
                year: r.fiscal_year,
                amount: r.revenue
            })
        }
    })

    return Object.keys(indexed).map(c => {
        indexed[c].subcategories = Object.keys(indexed[c].subcategories).map(s => indexed[c].subcategories[s]);
        
        return indexed[c];
    })
}