import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { translator } from '../../../utils';

const d3 = { select, selectAll, transition };

let config;

function sort(by) {
    if (by === 'name') {
        config.data.sort((a, b) => {
            if (b.activity < a.activity) {
                return 1;
            }

            if (b.activity > a.activity) {
                return -1;
            }

            return 0;
        })
    } else {
        config.data.sort((a, b) => {
            return b.amount - a.amount
        })
    }

    d3.selectAll('g.row')
        .transition()
        .duration(1000)
        .attr('transform', function(d){
            const position = config.data.indexOf(d);
            return translator(0, position * config.rowHeight);
        })
        .ease()
}

d3.select('#sort-amount')
    .on('click', function () {
        sort('amount');
    })

d3.select('#sort-name')
    .on('click', function () {
        sort('name');
    })

export function initSort(_config) {
    config = _config
}