import './selectCountry.scss';
import { prepareData, loadSourceData } from './data';
import { establishContainer } from '../../utils';
import { chartInit } from './chart';
import { selectedCountries } from './selectedCountryManager';
import { renderSortIcon } from './sortIcon';
import CountryData from '../../../public/csv/revenue_gdp_by_country.csv';

const incomeConfig = {
    amountField: 'revenue_usd',
    gdpField: 'revenue_gdp',
    amountLabel: 'Revenue',
    sourceFields: ['revenue_source','gdp_source'],
    chapter: 'revenue',
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
        title: 'Graph representing 2018 revenue (in USD) amounts across multiple countries',
        desc: '2018 revenue data comparison between multiple countries (including the U.S.) as well as the ratio of revenue to that country\'s GDP'
    }
};

loadSourceData(CountryData);
chartInit(incomeConfig);