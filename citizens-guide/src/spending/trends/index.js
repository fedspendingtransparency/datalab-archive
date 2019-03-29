import { select, selectAll } from 'd3-selection';
import { establishContainer } from '../../utils';
import { trendData } from './trendData';
import { showHideInit } from './showHideCategories';
import { setThreshold } from "./setThreshold";
import { trendDesktop } from '../../components/trends/chart';
import colors from '../../colors.scss';
import { manualThresholds } from './manualThresholds';

const d3 = { select, selectAll },
    accessibilityAttrs = {
        title: '2018 Federal Spending Trends by Category and Agency over Time',
        desc: 'Each spending category has seen its own trends develop over the last five years. Social Security has increased from $851 billion in 2014 to $988 billion in 2018. National Defense spending in 2014 was $634 billion and $665 billion in 2018. Medicare spending has increased in the past five years from $512 billion in 2014 to $589 billion in 2018. Health spending over the past five years has also increased from $380 billion to $519 billion. Income Security has remained relatively stable from 2014 to 2018, with $514 billion and $496 billion respectively. Net Interest from Debt, Trust Funds, and Other Investments has increased significantly since 2014 from $228 billion to $325 billion. Spending related to the Department of Health and Human Services has increased over the last five years from $936 billion to $1.1 trillion. The Social Security Administration has seen similar increases from $906 billion in 2014 to $1 trillion in 2018. Department of the Treasury spending has increased from $447 billion to $629 billion, mainly due to the increased spending on interest on the federal debt. Department of Defense – Military Programs spending has remained steady over the past five years, from $578 billion to $601 billion. Spending related to the Department of Veterans Affairs has increased from $149 billion in 2014 to $179 billion in 2018.'
    },
    svg = establishContainer(930, null, accessibilityAttrs),
    selectBudgetFunction = d3.select('#select-budget-function'),
    selectAgency = d3.select('#select-agency'),
    data = showHideInit(setData('function'), renderChart);
    renderChart(data);

let zoomThreshold;

function sortByLatestYear(a, b) {
    return b.values[b.values.length - 1].amount - a.values[a.values.length - 1].amount;
}

function setData(type) {
    return trendData(type).sort(sortByLatestYear);
}

function renderChart(data) {
    svg.selectAll('*').remove();
    
    zoomThreshold = setThreshold(data);
    
    trendDesktop(data, svg, {
        chapter: 'revenue',
        baseColor: colors.colorSpendingTrends,
        secondaryColor: '#00766C',
        zoomThreshold,
        subcategoryThresholds: manualThresholds
    });
}

function onSelectDataType() {
    const sectionToLoad = d3.select('.link-button__div').selectAll('.hidden'),
        buttonId = sectionToLoad.attr('id'),
        isAgencyLoadingInd = buttonId.search('agency') > 0,
        type = isAgencyLoadingInd ? 'agency' : 'function',
        data = showHideInit(setData(type));

    if (isAgencyLoadingInd) {
        selectAgency.classed('hidden', false);
        selectBudgetFunction.classed('hidden', true);
    } else {
        selectAgency.classed('hidden', true);
        selectBudgetFunction.classed('hidden', false);
    }

    renderChart(data);
}

d3.select('.link-button__div').on('click', onSelectDataType);

(function init() {
    
})();
