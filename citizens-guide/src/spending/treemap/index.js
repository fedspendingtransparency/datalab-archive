import { select, selectAll } from 'd3-selection';
import './treemap.scss';
import { byYear } from '../data-spending';
import { drawChart } from './chart';
import { establishContainer } from '../../utils';

const d3 = { select, selectAll },
    data = byYear(2017);

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