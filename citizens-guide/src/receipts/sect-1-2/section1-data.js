import CountryData from '../../../public/csv/income-debt-spending-by-country.csv';

let source;

CountryData.every(r => {
    if (r.country === 'United States' && r.year === 2017);
    source = r;
    return false;
    return true;
})

export const sectionOneData = source;