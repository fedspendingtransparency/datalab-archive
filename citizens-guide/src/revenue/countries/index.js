import { loadSourceData } from './data';
import { chartInit } from './chart';
import CountryData from '../../../../assets/ffg/data/revenue_country_comparison.csv';
import colors from '../../globalSass/colors.scss';
import Mapping from '../../../../_data/object_mapping.yml';

let otherCountriesData = {};

function getCountriesDataFromCsv(CountryData) {
    CountryData.forEach(r => {
        if (r.country === "China") {
            otherCountriesData.china_revenue_usd = r.revenue_usd;
            otherCountriesData.china_revenue_gdp = r.revenue_gdp;
        }
        if (r.country === "Japan") {
            otherCountriesData.japan_revenue_usd = r.revenue_usd;
            otherCountriesData.japan_revenue_gdp = r.revenue_gdp;
        }
        if (r.country === "Germany") {
            otherCountriesData.germany_revenue_usd = r.revenue_usd;
            otherCountriesData.germany_revenue_gdp = r.revenue_gdp;
        }
        if (r.country === "France") {
            otherCountriesData.france_revenue_usd = r.revenue_usd;
            otherCountriesData.france_revenue_gdp = r.revenue_gdp;
        }
    })
}

getCountriesDataFromCsv(CountryData);
console.log('otherCountriesData', otherCountriesData);

const incomeConfig = {
    amountField: 'revenue_usd',
    gdpField: 'revenue_gdp',
    amountLabel: 'Revenue',
    sourceFields: ['revenue_source','gdp_source'],
    chapter: 'revenue',
    primaryColor: colors.revenuePrimary,
    defaultCountries: [{
        display: 'United States',
        plainName: 'United States'
    },{
        display: 'China',
        plainName: 'China'
    },{
        display: 'Japan',
        plainName: 'Japan'
    },{
        display: 'Germany',
        plainName: 'Germany'
    },{
        display: 'United Kingdom',
        plainName: 'United Kingdom'
    },{
        display: 'India',
        plainName: 'India'
    },{
        display: 'France',
        plainName: 'France'
    }],
    accessibilityAttrs : {
        title: 'Federal Revenue Country Comparison',
        desc: `The top five countries in terms of federal revenue in ${Mapping.country_compare_year.value} were the United States with ${Mapping.current_fy_revenue.value} (${Mapping.compare_us_revenue_gdp.value} of its gross domestic product), China with ${otherCountriesData.china_revenue_usd} (${otherCountriesData.china_revenue_gdp}%), Japan with $1.7 trillion (34%), Germany with $1.6 trillion (43%), and France with $1.4 trillion (56%).`
    }
};

console.log('incomeConfig.accessibilityAttrs.desc: ', incomeConfig.accessibilityAttrs.desc);

loadSourceData(CountryData);
chartInit(incomeConfig);
