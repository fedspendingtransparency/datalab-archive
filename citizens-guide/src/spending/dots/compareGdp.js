import { select, selectAll } from 'd3-selection';
import { establishContainer } from '../../utils';
import { dotConstants } from './dotConstants';
import { compareOn, compareOff, generateOverlay } from './compareManager';

const d3 = { select, selectAll };

let gdpLayer, active;

function setOn() {
    gdpLayer.attr('opacity', 1)
    active = true;
    compareOn('gdp');
}

function setOff() {
    gdpLayer.attr('opacity', 0);
    active = false;
    compareOff('gdp')
}

function toggleOverlay() {
    active ? setOff() : setOn();
}

function resizeSvg() {
    const height = gdpLayer.attr('data-rect-height');

    establishContainer().attr('height', height + 40);
}

export function initGdp() {
    const svg = establishContainer(),
        gdpCount = 19500;

    gdpLayer = generateOverlay(gdpCount, svg.select('.main-container'), 'gdp-layer');

    resizeSvg();
}

d3.select('#overlay-gdp').on('click', toggleOverlay);