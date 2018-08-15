import '../../../node_modules/normalize-css/normalize.css';
import '../sass/receipts.scss';
import CountryData from '../../../public/csv/income-country-comparison.csv';
import { prepareData } from './data';
import { establishContainer } from '../../utils';
import { chartInit } from './chart';

const masterData = prepareData(CountryData),
    svg = establishContainer(600),
    defaultCountries = [
        'United States',
        'China',
        'Japan',
        'Germany',
        'United Kingdom',
        'India',
        'France'
    ];

function filterData(list) {
    const data = [];
    
    list = list || defaultCountries;

    return list.map(c => {
        if (masterData.indexed[c]) {
            return masterData.indexed[c];
        } else {
            console.warn('no data for ' + c);
        }
    }).filter(r => r);
}

chartInit(filterData(), svg);