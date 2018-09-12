import './selectCountry.scss';
import CountryData from '../../../public/csv/income-debt-spending-by-country.csv';
import { prepareData } from './data';
import { establishContainer } from '../../utils';
import { chartInit } from './chart';
import { selectedCountries } from './selectedCountryManager';

export const masterData = prepareData(CountryData),
    svg = establishContainer(),
    defaultCountries = [
        'United States',
        'China',
        'Japan',
        'Germany',
        'United Kingdom',
        'India',
        'France'
    ];

selectedCountries.set(defaultCountries);

chartInit(svg);