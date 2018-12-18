import { select, selectAll } from 'd3-selection';
import { establishContainer, initDropShadow, stripBr } from '../../utils';
import { trendView } from './chart';
import { trendData } from './trendData';
import { showHideInit } from './showHideCategories';
import { initTwoPartTour } from './tour';
import { setThreshold} from "./setThreshold";

const d3 = { select, selectAll },
    svg = establishContainer(780),
    selectBudgetFunction = d3.select('#select-budget-function'),
    selectAgency = d3.select('#select-agency');
let zoomThreshold;

function sortByLatestYear(a, b) {
    return b.values[b.values.length - 1].amount - a.values[a.values.length - 1].amount;
}

function setData(type) {
    return trendData(type).sort(sortByLatestYear);
}


export function renderChart(data) {
    svg.selectAll('*').remove();

    initDropShadow();

    zoomThreshold = setThreshold(data);
    trendView(data, svg, {
        width: 500,
        zoomThreshold
    });
}

d3.select('.link-button__div')
    .on('click', function(){
        const sectionToLoad = d3.select('.link-button__div').selectAll('.hidden'),
            buttonId = sectionToLoad.attr('id'),
            isAgencyLoadingInd = buttonId.search('agency') > 0,
            type = isAgencyLoadingInd ? 'agency' : 'function',
            data = showHideInit(setData(type));

        if(isAgencyLoadingInd){
            selectAgency.classed('hidden', false);
            selectBudgetFunction.classed('hidden', true);
        } else {
            selectAgency.classed('hidden', true);
            selectBudgetFunction.classed('hidden', false);
        }
        renderChart(data);
    });

(function init() {
    const data = showHideInit(setData('function'));
    zoomThreshold = setThreshold(setData('function'));
    renderChart(data);
    initTwoPartTour();
})();
