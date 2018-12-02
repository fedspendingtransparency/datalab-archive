import { select, selectAll } from 'd3-selection';
import { establishContainer } from '../../utils';
import { dotConstants } from './dotConstants';
import { compareOn, compareOff, generateOverlay, registerLayer } from './compareManager';

const d3 = { select, selectAll };

let revenueLayer;

export function initRevenueOverlay() {
    const svg = establishContainer(),
        revenueCount = 3400;

    revenueLayer = generateOverlay(revenueCount, svg.select('.main-container'), 'revenue-layer');

    registerLayer('revenue', revenueLayer);
}