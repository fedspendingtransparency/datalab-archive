import CategoryData from '../../../../assets/ffg/data/federal_revenue_categories.csv';

export function trendData(){
    const indexed = {};

    let arr;

    CategoryData.forEach(r => {
        if (isNaN(r.federal_revenue)) {
            return;
        }
        
        indexed[r.parent_plain] = indexed[r.parent_plain] || {
            name: r.parent_plain,
            officialName: r.parent,
            values: [],
            subcategories: {}
        };

        if (r.child) {
            indexed[r.parent_plain].subcategories[r.child_plain] = indexed[r.parent_plain].subcategories[r.child_plain] || {
                name: r.child_plain,
                officialName: r.child,
                values: [],
            };

            indexed[r.parent_plain].subcategories[r.child_plain].values.push({
                year: r.fiscal_year,
                amount: r.federal_revenue
            })
        } else {
            indexed[r.parent_plain].values.push({
                year: r.fiscal_year,
                amount: r.federal_revenue
            })
        }
    })

    return Object.keys(indexed).map(c => {
        indexed[c].subcategories = Object.keys(indexed[c].subcategories).map(s => indexed[c].subcategories[s]);
        
        return indexed[c];
    })
}