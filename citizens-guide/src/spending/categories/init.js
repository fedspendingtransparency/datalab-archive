import { select, selectAll } from 'd3-selection';
import { byYear } from '../data-spending';
import { drawChart as barChart } from './bar/chart';
import colors from '../../colors.scss';
import { establishContainer } from '../../utils';

const d3 = { select, selectAll },
    chartTitle = d3.select('h2.chart-title .title-text'),
    selectBudgetFunction = d3.select('#select-budget-function'),
    selectAgency = d3.select('#select-agency'),
    barControls = d3.select('#bar-controls'),
    chartSectionTextStr = 'Click to see sub-categories';

let svg,
    config = {
        data: byYear(2017),
        sectionColor: colors.colorSpendingPrimary,
        dataType: 'function'
    },
    debounce,
    top10 = true,
    chartType = 'bar';

function initSection() {
    const vizSection = d3.select('#viz');
    vizSection.select('#vizChartSectionText').remove();
    vizSection.append('div')
        .attr('id', 'vizChartSectionText')
        .text(chartSectionTextStr);

    initChart();
}

export function initChart(filteredData, showAll) {
    const configData = config.dataType ? config.data[config.dataType] : config.data;

    const d = filteredData || configData,
        chartData = top10 ? d.slice(0,9) : d;

    d3.selectAll('svg').remove();
    barChart(chartData, config.dataType, config);
}

function showMore() {
    top10 = !top10;

    this.innerText = top10 ? 'Show More' : 'Show Less';

    initChart()
}

function spendingIndexClickFunctions() {

    d3.select('.link-button__div')
        .on('click', function () {
            const sectionToLoad = d3.select('.link-button__div').selectAll('.hidden');
            const buttonId = sectionToLoad.attr('id');
            const isAgencyLoadingInd = buttonId.search('agency') > 0;

            if (isAgencyLoadingInd) {
                config.dataType = 'agency';
                selectAgency.classed('hidden', false);
                selectBudgetFunction.classed('hidden', true);
            } else {
                config.dataType = 'function';
                selectAgency.classed('hidden', true);
                selectBudgetFunction.classed('hidden', false);
            }
            initChart();
        });

    d3.select('#filter-by-name')
        .on('input', function () {
            const v = this.value.toLowerCase(),
                filtered = data[config.dataType].filter(r => {
                    return (r.activity.toLowerCase().indexOf(v) !== -1);
                });

            initChart(filtered)
        });

    d3.select('#show-more-button')
        .on('click', showMore);
}

export function init(_config){
    config = _config || config;
    console.log('config:', config);
    console.log('_config:', _config);
    if(config.dataType){
        spendingIndexClickFunctions();
    }
    initSection();
}