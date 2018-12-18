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
    defaultCountries: [
        'United States',
        'China',
        'Japan',
        'Germany',
        'United Kingdom',
        'India',
        'France'
    ]
}

loadSourceData(CountryData);
chartInit(incomeConfig);