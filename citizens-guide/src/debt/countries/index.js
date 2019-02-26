import '../../revenue/countries/selectCountry.scss';
import { loadSourceData } from '../../revenue/countries/data';
import CountryData from '../../../public/csv/debt_gdp_by_country.csv';
import { chartInit } from '../../revenue/countries/chart';
import colors from '../../colors.scss';

const spendingConfig = {
    amountField: 'debt_usd',
    gdpField: 'debt_gdp',
    amountLabel: 'Debt',
    sourceFields: ['spending_source', 'gdp_source'],
    primaryColor: colors.colorDebtPrimary,
    chapter: 'debt',
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
        title: 'Graph representing 2018 deficit (in USD) amounts across multiple countries',
        desc: '2018 debt data comparison between multiple countries (including the U.S.) as well as the ratio of debt to that country\'s GDP'
    }
};

loadSourceData(CountryData);
chartInit(spendingConfig);