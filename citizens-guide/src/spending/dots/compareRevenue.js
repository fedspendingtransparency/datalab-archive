import { select, selectAll } from 'd3-selection';
import { establishContainer } from '../../utils';
import { dotConstants } from './dotConstants';
import { compareOn, compareOff, generateOverlay } from './compareManager';

const d3 = { select, selectAll };

let revenueLayer, active;

function setOn() {
    revenueLayer.attr('opacity', 1)
    active = true;
    compareOn('revenue');
}

function setOff() {
    revenueLayer.attr('opacity', 0);
    active = false;
    compareOff('revenue')
}

function toggleOverlay() {
    active ? setOff() : setOn();
}

export function initRevenueOverlay() {
    const svg = establishContainer(),
        revenueCount = 3400;

    revenueLayer = generateOverlay(revenueCount, svg.select('.main-container'), 'revenue-layer');
}

d3.select('#overlay-revenue').on('click', toggleOverlay);