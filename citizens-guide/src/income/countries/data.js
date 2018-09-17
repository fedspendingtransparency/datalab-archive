import { masterData } from '.';
import { config } from './incomeCountryConfig.js';
import { selectedCountries } from './selectedCountryManager';

let activeSortFn,
    activeSortField = config.amountField,
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

export function prepareData(_data) {
    const data = {
        indexed: {},
        countryList: []
    }

    _data.forEach(r => {
        data.countryList.push(r.country);

        data.indexed[r.country] = r;
    });

    return data;
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