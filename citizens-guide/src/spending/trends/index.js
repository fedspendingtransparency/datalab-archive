import { select, selectAll } from 'd3-selection';
import { establishContainer, initDropShadow, stripBr } from '../../utils';
import { trendView } from './chart';
import { trendData } from './trendData';
import { initTwoPartTour } from '../../income/tour';
import { showHideInit } from './showHideCategories';

const d3 = { select, selectAll },
    svg = establishContainer(780);

function sortByLatestYear(a, b) {
    return b.values[b.values.length - 1].amount - a.values[a.values.length - 1].amount;
}

function setData(type) {
    return trendData(type).sort(sortByLatestYear);
}

initDropShadow();

export function renderChart(data) {
    svg.selectAll('*').remove();

    trendView(data, svg, {
        width: 500
    });
}

d3.select('#select-budget-function')
    .on('click', function () {
        const data = showHideInit(setData('function'));
        renderChart(data);
    })

d3.select('#select-agency')
    .on('click', function () {
        const data = showHideInit(setData('agency'));
        renderChart(data);
    });

(function init() {
    const data = showHideInit(setData('function'));
    renderChart(data);
})();
