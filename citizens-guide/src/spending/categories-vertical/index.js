import { select, selectAll } from 'd3-selection';
import './categories.scss';
import { stackedByYear } from '../data-spending';
import { drawChart } from './chart';
import { establishContainer } from '../../utils';

const d3 = { select, selectAll },
    data = stackedByYear(2017);

let svg;

function initChart(type) {
    d3.selectAll('svg').remove();
    drawChart(data[type], type);
}


d3.select('#select-budget-function')
    .on('click', function () {
        initChart('function');
    })

d3.select('#select-agency')
    .on('click', function () {
        initChart('agency');
    })

initChart('function')