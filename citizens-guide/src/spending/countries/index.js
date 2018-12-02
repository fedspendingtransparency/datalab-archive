import '../../revenue/countries/selectCountry.scss';
import { loadSourceData } from '../../revenue/countries/data';
import CountryData from '../../../public/csv/spending_gdp_by_country.csv';

import { establishContainer } from '../../utils';
import { chartInit } from '../../revenue/countries/chart';
import { selectedCountries } from '../../revenue/countries/selectedCountryManager';

const spendingConfig = {
    amountField: 'spending_usd',
    gdpField: 'spending_gdp',
    amountLabel: 'Spending',
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
};

loadSourceData(CountryData);
chartInit(spendingConfig);