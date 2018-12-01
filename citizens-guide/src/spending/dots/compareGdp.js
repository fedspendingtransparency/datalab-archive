import { select, selectAll } from 'd3-selection';
import { establishContainer } from '../../utils';
import { dotConstants } from './dotConstants';
import { compareOn, compareOff, generateOverlay, registerLayer } from './compareManager';

const d3 = { select, selectAll };

let gdpLayer;

function resizeSvg() {
    const height = Number(gdpLayer.attr('data-rect-height'));

    establishContainer().attr('height', height + 40);
}

export function initGdp() {
    const svg = establishContainer(),
        gdpCount = 19500;

    gdpLayer = generateOverlay(gdpCount, svg.select('.main-container'), 'gdp-layer');

    resizeSvg();

    registerLayer('gdp', gdpLayer);
}