import { getSubCategoriesByYear } from './receipts-data';
import { max } from 'd3-array';

const d3 = { max };

function enrichData(data) {
    let tracker = data[0].percent;

    data.forEach(d => {
        d.start = tracker;
        d.end = (tracker * 100 + d3.max([Math.abs(d.percent), 0.01]) * 100) / 100;

        tracker = d.end;
    })
}

function sortData(data) {
    data.sort((a, b) => {
        a = a.percent;
        b = b.percent;

        if (a < 0) {
            if (a < b) {
                return -1
            }

            if (a > b) {
                return 1;
            }
        }

        if (b < 0) {
            return 1;
        }

        if (a > b) {
            return -1;
        }

        if (a < b) {
            return 1;
        }

        return 0;
    });
}

export function getData(i) {
    const map = [
        'Individual Income Taxes',
        'Employment and General Retirement',
        'Corporation Income Taxes',
        'Miscellaneous Receipts',
        'Other Revenues'
    ];

    let data = getSubCategoriesByYear('fy17');

    data = data.categories[map[i]].subcategories;

    sortData(data);
    enrichData(data);

    return data;
}