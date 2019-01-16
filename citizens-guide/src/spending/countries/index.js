import '../../revenue/countries/selectCountry.scss';
import { loadSourceData } from '../../revenue/countries/data';
import CountryData from '../../../public/csv/spending_gdp_by_country.csv';
import { chartInit } from '../../revenue/countries/chart';

const spendingConfig = {
    amountField: 'spending_usd',
    gdpField: 'spending_gdp',
    amountLabel: 'Spending',
    sourceFields: ['spending_source', 'gdp_source'],
    chapter: 'spending',
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
        title: 'Graph representing 2018 US Federal Spending',
        desc: '2018 US federal spending graph with comparison to 2018 federal Revenue and U.S. GDP. All graphs are visualized by dots where each dot represents 1 billion USD'
    }
};

loadSourceData(CountryData);
chartInit(spendingConfig);