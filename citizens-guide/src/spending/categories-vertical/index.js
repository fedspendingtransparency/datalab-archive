import { select, selectAll } from 'd3-selection';
import './categories.scss';
import { stackedByYear } from '../data-spending';
import { drawChart } from './chart';
import { establishContainer } from '../../utils';

const d3 = { select, selectAll },
    data = stackedByYear(2017);

let svg;

drawChart(data['function']);

d3.select('#select-budget-function')
    .on('click', function () {
        d3.selectAll('svg').remove();
        drawChart(data['function']);
    })

d3.select('#select-agency')
    .on('click', function () {
        d3.selectAll('svg').remove();
        drawChart(data['agency']);
    })