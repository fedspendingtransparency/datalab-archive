import { select, selectAll } from 'd3-selection';
import { establishContainer } from '../../utils';
import './dots.scss';
import { placeDots } from "./placeDots";
import { startLegendAnimation } from './legend';
import { setChartWidth, chartWidth } from './widthManager';
import { setDotsPerRow } from './dotConstants';
import { resetForResize } from './compareManager';

const d3 = { select, selectAll };

let debounce;

function initChart() {
    d3.select('#viz').selectAll('*').remove();
    
    setChartWidth();
    setDotsPerRow();
    
    establishContainer(500, chartWidth);

    startLegendAnimation();
}

function resizeChart() {
    setChartWidth();
    setDotsPerRow();
    resetForResize();
    d3.select('svg.main').attr('width', chartWidth);
    placeDots();
}

initChart();

window.addEventListener('resize', function () {
    if (debounce) {
        clearTimeout(debounce);
    }

    debounce = setTimeout(resizeChart, 100);
});