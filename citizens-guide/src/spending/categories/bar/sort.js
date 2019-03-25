import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { translator } from '../../../utils';

const d3 = { select, selectAll, transition },
    sortManager = {};

let config;

function sort(by, config, dir) {
    if (by === 'name') {
        if(dir === 'default'){
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
            config.data.sort((b, a) => {
                if (b.activity < a.activity) {
                    return 1;
                }

                if (b.activity > a.activity) {
                    return -1;
                }

                return 0;
            })
        }
    } else {
        if(dir === 'default') {
            config.data.sort((a, b) => {
                return b.amount - a.amount
            });
        } else {
            config.data.sort((b, a) => {
                return b.amount - a.amount
            });
        }
    }

    config.svg.selectAll('g.row')
        .transition()
        .duration(1000)
        .attr('transform', function(d){
            const position = config.data.indexOf(d);
            return translator(0, position * config.rowHeight);
        })
        .ease()
}

function doSort(name, direction) {
    sort(name, sortManager.main, direction);

    if (sortManager.detail) {
        sort(name, sortManager.detail, direction);
    }
}

function updateSortIcon(containerId, sortId, sortDefaultClass, sortReverseClass){
    const isThisAlreadySortedInd = d3.select(`#${sortId}`).classed('active');

    let sortDir = 'default';

    if(!isThisAlreadySortedInd){
        resetSortingButtons();
        d3.select(`#${containerId}`).select('button.active').classed('active', false);
        d3.select(`#${sortId}`).classed('active', true);
    } else {
        const sortIcon = d3.select(`#${sortId} i`),
            sortDefaultInd = sortIcon.classed(sortDefaultClass);

        if(sortDefaultInd){
            sortIcon.classed(sortDefaultClass, false).classed(sortReverseClass, true);
            sortDir = 'reverse';
        } else {
            sortIcon.classed(sortDefaultClass, true).classed(sortReverseClass, false);
        }
    }

    return sortDir;
}

function resetSortingButtons(){
    const sortNameBtn = d3.select('#sort-name i'),
        sortAmountBtn = d3.select('#sort-amount i');

    sortNameBtn.classed('fa-sort-alpha-up', false).classed('fa-sort-alpha-down', true);
    sortAmountBtn.classed('fa-sort-amount-up', false).classed('fa-sort-amount-down', true);
}

d3.select('#filter-by-name-icon')
    .on('click', function(){
       d3.select('#filter-by-name').node().focus();
    });

d3.select('#sort-amount')
    .on('click', function () {
        const containerId = 'bar-controls',
            sortId = 'sort-amount',
            sortDefaultClass = 'fa-sort-amount-down',
            sortReverseClass = 'fa-sort-amount-up',
            sortDir = updateSortIcon(containerId, sortId, sortDefaultClass, sortReverseClass);

        doSort('amount', sortDir);
    });

d3.select('#sort-name')
    .on('click', function () {
        const containerId = 'bar-controls',
            sortId = 'sort-name',
            sortDefaultClass = 'fa-sort-alpha-down',
            sortReverseClass = 'fa-sort-alpha-up',
            sortDir = updateSortIcon(containerId, sortId, sortDefaultClass, sortReverseClass);

        doSort('name', sortDir);
    });

function initHighlightedButton(){
    d3.select('#bar-controls').select('button.active').classed('active', false);
    d3.select('#sort-amount').classed('active', true);
}

export function initSort(config) {
    if (config.detail) {
        sortManager.detail = config;
    } else {
        resetSortingButtons();
        initHighlightedButton();
        sortManager.main = config;
    }
}

export function closeDetail() {
    sortManager.detail = null;
}