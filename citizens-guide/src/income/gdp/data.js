import BigNumbers from '../../../csv/mts_mspd_rod_debt.csv';

let source;

BigNumbers.every(r => {
    if (r.year === 2017) {
        source = r;
        return false;
    }

    return true;
})

export const sectionOneData = source;