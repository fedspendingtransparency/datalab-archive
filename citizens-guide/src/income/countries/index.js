import './selectCountry.scss';
import { prepareData } from './data';
import { establishContainer } from '../../utils';
import { chartInit } from './chart';
import { selectedCountries } from './selectedCountryManager';

const incomeConfig = {
    amountField: 'income_usd',
    gdpField: 'income_gdp',
    amountLabel: 'Income',
    sourceFields: ['income_source','gdp_source'],
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

chartInit(incomeConfig);