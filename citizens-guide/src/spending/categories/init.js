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
        dataType: 'function',
        accessibilityAttrs : {
            title: 'Bar graph representing 2018 US Federal Spending by spending type and agency',
            desc: '2018 US federal spending bar graph separated by spending types and agency'
        }
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

function changeDataTypeClickFunction(){
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
}

function spendingIndexClickFunctions() {

    d3.select('#filter-by-name')
        .on('input', function () {
            const v = this.value.toLowerCase(),
                curData = config.dataType ? config.data[config.dataType] : config.data,
                filtered = curData.filter(r => {
                    return (r.activity.toLowerCase().indexOf(v) !== -1);
                });

            initChart(filtered)
        });

    d3.select('#show-more-button')
        .on('click', showMore);
}

function displayShowMoreSection(showMoreInd){
    d3.selectAll('.categories__show-more').classed('hidden', !showMoreInd);
}

export function init(_config){
    config = _config || config;

    /*
     * The following seems odd in the since that it's an init function; however, revenue currently uses the same
     * html file and swaps between a bargraph and sankey. It's not out of the question that data could change between
     * calling this init function, so we have to set the top10 and hide/show the "Show More" button section as a result.
     */

    if(config.data.length <= 10){
        top10 = false;
        displayShowMoreSection(top10);
    } else {
        top10 = true;
        displayShowMoreSection(top10);
    }

    spendingIndexClickFunctions();
    if(config.dataType){
        changeDataTypeClickFunction();
    }
    initSection();
}