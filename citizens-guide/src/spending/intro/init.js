import { select, selectAll } from 'd3-selection';
import { establishContainer } from '../../utils';
import { placeDots } from "./placeDots";
import { startLegendAnimation } from './legend';
import { setChartWidth, chartWidth } from './widthManager';
import { setDotsPerRow } from './dotConstants';
import { resetForResize } from './compareManager';

const d3 = { select, selectAll },
    accessibilityAttrs = {
        title: 'Graph representing 2018 US Federal Spending',
        desc: '2018 US federal spending graph with comparison to 2018 federal Revenue and U.S. GDP. All graphs are visualized by dots where each dot represents 1 billion USD'
    };

let debounce,
    previousWidth,
    config;

export function initChart(_config) {
    d3.select('#viz').selectAll('*').remove();
    config = _config || config;

    setChartWidth();
    setDotsPerRow();
    
    establishContainer(500, chartWidth, accessibilityAttrs);

    startLegendAnimation(config);
}

function resizeChart() {
    setChartWidth();
    setDotsPerRow();
    resetForResize();
    d3.select('svg.main').attr('width', chartWidth);
    placeDots(config);
}

window.addEventListener('resize', function () {
    if (debounce) {
        clearTimeout(debounce);
    }

    if(previousWidth === window.innerWidth){
        return;
    }
    previousWidth = window.innerWidth;
    debounce = setTimeout(resizeChart, 100);
});