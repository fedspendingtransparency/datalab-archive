import { extent } from 'd3-array';

const d3 = { extent };

let extent;

export function initScale(data) {
    extent = d3.extent(data.map(r => {
        return r.values.map(v => v.amount)
    }).reduce((a, c) => a.concat(c), []));

    console.log('e', extent)
}