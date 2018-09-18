import { selectedCountries } from './selectedCountryManager';
import CountryData from '../../../public/csv/income-debt-spending-by-country.csv';

const masterData = {
    indexed: {},
    countryList: []
};

let config,
    activeSortFn,
    activeSortField,
    activeSortDirection = 'desc';

function flipSortDirection() {
    activeSortDirection = (activeSortDirection === 'desc') ? 'asc' : 'desc';
}

function setSort(sortField) {
    if (sortField === activeSortField) {
        flipSortDirection();
    } else {
        activeSortField = sortField || activeSortField;
        activeSortDirection = 'desc';
    }

    if (activeSortDirection === 'asc') {
        activeSortFn = function (a, b) {
            return a[activeSortField] - b[activeSortField];
        }
    } else {
        activeSortFn = function (a, b) {
            return b[activeSortField] - a[activeSortField];
        }
    }
}

export function getCountryList() {
    return masterData.countryList;
}

export function prepareData(_config) {
    config = _config;

    activeSortField = config.amountField,

        CountryData.forEach(r => {
            masterData.countryList.push(r.country);

            masterData.indexed[r.country] = r;
        });

    return setData();
}

export function setData(sortField) {
    setSort(sortField);

    return selectedCountries.list.map(c => {
        if (masterData.indexed[c]) {
            return masterData.indexed[c];
        } else {
            console.warn('no data for ' + c);
        }
    }).sort(activeSortFn);
};

export function getActiveSort() {
    return {
        activeSortField: activeSortField,
        activeSortDirection: activeSortDirection
    }
}