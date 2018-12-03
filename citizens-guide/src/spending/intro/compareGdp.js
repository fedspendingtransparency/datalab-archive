import { select, selectAll } from 'd3-selection';
import { establishContainer, translator } from '../../utils';
import { dotConstants } from './dotConstants';
import { compareOn, compareOff, generateOverlay, registerLayer } from './compareManager';
import { createDonut } from '../../revenue/donut';
import colors from '../../colors.scss';
import { chartWidth } from './widthManager';

const d3 = { select, selectAll };

let gdpLayer;

function getNewSvgHeight() {
    return Number(gdpLayer.attr('data-rect-height'));
}

function placeDonut(g) {
    const y = d3.select('.spending-dots').attr('data-rect-height'),
        r = 50,
        x = chartWidth - 40 - r * 2,
        donutContainer = g.append('g')
            .attr('transform', translator(x, y - 50));

    donutContainer.append('circle')
        .attr('fill', 'white')
        .attr('opacity', 0.85)
        .attr('r', r + 10)
        .attr('cx', r)
        .attr('cy', r);

    createDonut(donutContainer, .200, r * 2, colors.colorSpendingPrimary);
}

export function initGdp() {
    const svg = establishContainer(),
        gdpCount = 20700;

    gdpLayer = generateOverlay(gdpCount, svg.select('.main-container'), 'gdp-layer');

    if (document.documentElement.clientWidth > 959) {
        placeDonut(gdpLayer)
    }

    registerLayer('gdp', gdpLayer, getNewSvgHeight());
}