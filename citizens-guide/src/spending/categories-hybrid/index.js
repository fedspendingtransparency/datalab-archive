import { select, selectAll } from 'd3-selection';
import './categories.scss';
import { byYear } from '../data-spending';
import { drawChart as barChart } from './bar/chart';
import { drawChart as treemap } from './tree/chart';
import { establishContainer } from '../../utils';

const d3 = { select, selectAll },
    chartTitle = d3.select('h2.chart-title .title-text'),
    selectBudgetFunction = d3.select('#select-budget-function'),
    selectAgency = d3.select('#select-agency'),
    vizBars = d3.select('#viz-bars'),
    vizTree = d3.select('#viz-tree'),
    barControls = d3.select('#bar-controls'),
    data = byYear(2017);

let svg,
    debounce,
    chartType = 'bar',
    type = 'function';

function initChart(filteredData) {
    const chartData = filteredData || data[type];

    d3.selectAll('svg').remove();

    if (chartType === 'bar') {
        barChart(chartData, type);
    } else {
        treemap(chartData);
    }
}

selectBudgetFunction
    .on('click', function () {
        type = 'function';
        chartTitle.text('Spending By Budget Function')
        selectAgency.attr('style', 'display:inline')
        selectBudgetFunction.attr('style', 'display:none')
        initChart();
    })

selectAgency
    .on('click', function () {
        type = 'agency';
        chartTitle.text('Spending By Agency')
        selectBudgetFunction.attr('style', 'display:inline')
        selectAgency.attr('style', 'display:none')
        initChart();
    })

vizBars
    .on('click', function () {
        chartType = 'bar';
        barControls.attr('style', 'display:block')
        initChart()
    })

vizTree
    .on('click', function () {
        chartType = 'tree';
        barControls.attr('style', 'display:none')
        initChart()
    })

d3.select('#filter-by-name')
    .on('input', function () {
        const v = this.value.toLowerCase(),
            filtered = data[type].filter(r => {
                return (r.activity.toLowerCase().indexOf(v) !== -1);
            })

        initChart(filtered)
    })

initChart();

window.addEventListener('resize', function () {
    if (debounce) {
        clearTimeout(debounce);
    }

    debounce = setTimeout(initChart, 100);
})
