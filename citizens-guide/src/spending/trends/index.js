import { select, selectAll } from 'd3-selection';
import { establishContainer, isMobileDevice } from '../../utils';
import { trendData } from './trendData';
import { showHideInit } from './showHideCategories';
import { setThreshold } from "./setThreshold";
import { trendDesktop } from '../../components/trends/chart';
import { manualThresholds } from './manualThresholds';
import { trendMobile } from '../../components/trendsMobile';
import colors from '../../colors.scss';
import {initChart} from "../categories/init";

const d3 = { select, selectAll },
    accessibilityAttrs = {
        title: '2018 Federal Spending Trends by Category and Agency over Time',
        desc: 'Each spending category has seen its own trends develop over the last five years. Social Security has increased from $851 billion in 2014 to $988 billion in 2018. National Defense spending in 2014 was $634 billion and $665 billion in 2018. Medicare spending has increased in the past five years from $512 billion in 2014 to $589 billion in 2018. Health spending over the past five years has also increased from $380 billion to $519 billion. Income Security has remained relatively stable from 2014 to 2018, with $514 billion and $496 billion respectively. Net Interest from Debt, Trust Funds, and Other Investments has increased significantly since 2014 from $228 billion to $325 billion. Spending related to the Department of Health and Human Services has increased over the last five years from $936 billion to $1.1 trillion. The Social Security Administration has seen similar increases from $906 billion in 2014 to $1 trillion in 2018. Department of the Treasury spending has increased from $447 billion to $629 billion, mainly due to the increased spending on interest on the federal debt. Department of Defense – Military Programs spending has remained steady over the past five years, from $578 billion to $601 billion. Spending related to the Department of Veterans Affairs has increased from $149 billion in 2014 to $179 billion in 2018.'
    },
    selectBudgetFunction = d3.select('#select-budget-function'),
    selectAgency = d3.select('#select-agency'),
    data = showHideInit(setData('function'), renderChart);

let svg;

renderChart(data);
changeDataTypeClickFunctions();

function sortByLatestYear(a, b) {
    return b.values[b.values.length - 1].amount - a.values[a.values.length - 1].amount;
}

function setData(type) {
    return trendData(type).sort(sortByLatestYear);
}

function renderChart(data) {
    const zoomThreshold = setThreshold(data),
        config = {
            chapter: 'spending',
            baseColor: colors.colorSpendingTrends,
            secondaryColor: '#00766C',
            zoomThreshold,
            subcategoryThresholds: manualThresholds
        }

    let container;

    if (isMobileDevice()) {
        container = d3.select('#viz')
        container.selectAll('*').remove();
        container.append('div').classed('trend-mobile', true)
        trendMobile(data, container, config);
    } else {
        svg = svg || establishContainer(930, null, accessibilityAttrs)
        svg.selectAll('*').remove();
        container = establishContainer(930, null, accessibilityAttrs);
        trendDesktop(data, svg, config);
    }
}

function changeDataTypeClickFunctions(){
    d3.select('#toggle-spending-data-type')
        .on('click', function () {
            const dataController = d3.select("#spending-chart-toggle"),
                curData = dataController.attr('data-active');

            let dataType = curData === 'function' ? 'agency' : 'function';
            changeDataType(dataType);
        });

    d3.select('.spending-chart-toggle__label--categories')
        .on('click', function(){
            const dataType = 'function';
            changeDataType(dataType);
        });
    d3.select('.spending-chart-toggle__label--agency')
        .on('click', function(){
            const dataType = 'agency';
            changeDataType(dataType);
        });
}

function changeDataType(dataType){
    const dataController = d3.select("#spending-chart-toggle"),
        curData = dataController.attr('data-active');

    if(dataType === curData){
        return;
    }

    const data = showHideInit(setData(dataType));

    dataController.attr('data-active', dataType);
    renderChart(data);
}
