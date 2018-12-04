import { select, selectAll } from 'd3-selection';
import { byYear } from '../data-spending';
import { drawChart as barChart } from './bar/chart';
import { establishContainer } from '../../utils';

const d3 = { select, selectAll },
    chartTitle = d3.select('h2.chart-title .title-text'),
    selectBudgetFunction = d3.select('#select-budget-function'),
    selectAgency = d3.select('#select-agency'),
    barControls = d3.select('#bar-controls'),
    data = byYear(2017),
    chartSectionTextStr = 'Click to see deeper categories';

let svg,
    debounce,
    top10 = true,
    chartType = 'bar',
    type = 'function';

function initSection() {
    const vizSection = d3.select('#viz');
    vizSection.select('#vizChartSectionText').remove();
    vizSection.append('div')
        .attr('id', 'vizChartSectionText')
        .text(chartSectionTextStr);

    initChart();
}

function initChart(filteredData, showAll) {
    const d = filteredData || data[type],
        chartData = top10 ? d.slice(0,9) : d;

    d3.selectAll('svg').remove();
    barChart(chartData, type);
}

function showMore() {
    top10 = !top10;

    this.innerText = top10 ? 'Show More' : 'Show Less';  
    
    initChart()
}

d3.select('.link-button__div')
    .on('click', function () {
        const sectionToLoad = d3.select('.link-button__div').selectAll('.hidden');
        const buttonId = sectionToLoad.attr('id');
        const isAgencyLoadingInd = buttonId.search('agency') > 0;

        if (isAgencyLoadingInd) {
            type = 'agency';
            selectAgency.classed('hidden', false);
            selectBudgetFunction.classed('hidden', true);
        } else {
            type = 'function';
            selectAgency.classed('hidden', true);
            selectBudgetFunction.classed('hidden', false);
        }
        initChart();
    });

d3.select('#filter-by-name')
    .on('input', function () {
        const v = this.value.toLowerCase(),
            filtered = data[type].filter(r => {
                return (r.activity.toLowerCase().indexOf(v) !== -1);
            });

        initChart(filtered)
    });

d3.select('#show-more-button')
    .on('click', showMore);

initSection();

window.addEventListener('resize', function () {
    if (debounce) {
        clearTimeout(debounce);
    }

    debounce = setTimeout(initChart, 100);
});
