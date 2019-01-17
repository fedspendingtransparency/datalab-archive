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
        title: 'Graph representing 2018 spending (in USD) amounts across multiple countries',
        desc: '2018 spending data comparison between multiple countries (including the U.S.) as well as the ratio of spending to that country\'s GDP'
    }
};

loadSourceData(CountryData);
chartInit(spendingConfig);