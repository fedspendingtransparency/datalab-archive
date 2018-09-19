import '../../income/countries/selectCountry.scss';
import { prepareData } from '../../income/countries/data';
import { establishContainer } from '../../utils';
import { chartInit } from '../../income/countries/chart';
import { selectedCountries } from '../../income/countries/selectedCountryManager';

const incomeConfig = {
    amountField: 'spending_usd',
    gdpField: 'spending_gdp',
    amountLabel: 'Income',
    sourceFields: ['spending_source','gdp_source'],    
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