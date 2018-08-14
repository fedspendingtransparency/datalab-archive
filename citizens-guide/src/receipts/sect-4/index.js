import '../../../node_modules/normalize-css/normalize.css';
import '../sass/receipts.scss';
import CountryData from '../../../public/csv/income-country-comparison.csv';
import { prepareData } from './data';

const data = prepareData(CountryData);