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

d3.select('#filter-by-name-icon')
    .on('click', function(){
       d3.select('#filter-by-name').node().focus();
    });

d3.select('#sort-amount')
    .on('click', function () {
        const isThisAlreadySortedInd = d3.select('#sort-amount').classed('active');

        if(!isThisAlreadySortedInd){
            d3.select('#bar-controls').select('button.active').classed('active', false);
            d3.select('#sort-amount').classed('active', true);
        }

        sort('amount', isThisAlreadySortedInd);
    });

d3.select('#sort-name')
    .on('click', function () {
        d3.select('#bar-controls').select('button.active').classed('active', false);
        d3.select('#sort-name').classed('active', true);
        sort('name');
    });

export function initSort(_config) {
    config = _config
}