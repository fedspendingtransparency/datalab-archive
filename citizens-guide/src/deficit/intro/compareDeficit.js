import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { establishContainer, translator } from '../../utils';
import { setChartWidth, chartWidth } from './widthManager';
import { setDotsPerRow } from './dotConstants';
import { generateOverlay } from './compareManager';

const d3 = { select, selectAll, transition },
    duration = 1500,
    scaleFactor = 0.6,
    billion = 1000000000;

let config, svg;

function placeRevenue() {
    const svg = establishContainer(),
        compareCount = Math.ceil(config.revenueAmount / billion);

    let revenueLayer = generateOverlay(compareCount, svg.select('.deficit-group'), `revenue-layer`, config.revenueColor);

    revenueLayer.transition().duration(duration).attr('opacity', 0.5).ease();
}

function placeSpending() {
    const svg = establishContainer(),
        compareCount = Math.ceil(config.spendingAmount / billion);

    let spendingLayer = generateOverlay(compareCount, svg.select('.deficit-group'), `spending-layer`, config.spendingColor);

    spendingLayer.transition().delay(duration).duration(duration).attr('opacity', 0.3).ease();
}

function placeDeficit() {

}

export function compareDeficit(c) {
    let svg;

    config = c || config;

    setChartWidth();
    setDotsPerRow();

    svg = establishContainer(1000, chartWidth);

    svg.append('g').classed('deficit-group', true).attr('transform', translator(chartWidth * 0.25, 0) + ` scale(${scaleFactor})`);

    placeRevenue();
    placeSpending();
}