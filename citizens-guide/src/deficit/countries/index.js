import '../../revenue/countries/selectCountry.scss';
import { loadSourceData } from '../../revenue/countries/data';
import CountryData from '../../../public/csv/surplus_deficit_gdp_by_country.csv';
import { chartInit } from '../../revenue/countries/chart';
import colors from '../../colors.scss';

const spendingConfig = {
    accessibilityAttrs : {
        title: 'Graph representing 2018 deficit (in USD) amounts across multiple countries',
        desc: '2018 deficit data comparison between multiple countries (including the U.S.) as well as the ratio of deficit to that country\'s GDP'
    },
    amountField: 'surplus_deficit',
    amountInverse: true,
    gdpField: 'surplus_deficit_gdp',
    amountLabel: 'Deficit',
    sourceFields: ['spending_source', 'gdp_source'],
    primaryColor: colors.colorDeficitPrimary,
    chapter: 'deficit',
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
    }]
};

loadSourceData(CountryData);
chartInit(spendingConfig);