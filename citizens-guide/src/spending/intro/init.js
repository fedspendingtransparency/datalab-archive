import { select, selectAll } from 'd3-selection';
import { establishContainer } from '../../utils';
import { placeDots } from "./placeDots";
import { startLegendAnimation } from './legend';
import { setChartWidth, chartWidth } from './widthManager';
import { setDotsPerRow } from './dotConstants';
import { resetForResize } from './compareManager';

const d3 = { select, selectAll };

let debounce,
    previousWidth,
    config;

export function initChart(_config) {
    d3.select('#viz').selectAll('*').remove();
    config = _config || config;

    setChartWidth();
    setDotsPerRow();
    
    establishContainer(500, chartWidth, config.accessibilityAttrs.default);

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