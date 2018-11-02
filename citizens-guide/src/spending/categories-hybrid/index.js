import { select, selectAll } from 'd3-selection';
import './categories.scss';
import { byYear } from '../data-spending';
import { drawChart } from './chart';
import { establishContainer } from '../../utils';

const d3 = { select, selectAll },
    data = byYear(2017);

let svg,
    type = 'function';

function initChart(filteredData) {
    const chartData = filteredData || data[type];
    
    d3.selectAll('svg').remove();
    drawChart(chartData, type);
}

d3.select('#select-budget-function')
    .on('click', function () {
        type = 'function';
        initChart();
    })

d3.select('#select-agency')
    .on('click', function () {
        type = 'agency';
        initChart();
    })

d3.select('#filter-by-name')
    .on('input', function () {
        const v = this.value.toLowerCase(),
            filtered = data[type].filter(r => {
                return (r.activity.toLowerCase().indexOf(v) !== -1);
            })

        initChart(filtered)
    })

initChart()