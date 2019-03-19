import { select, selectAll } from 'd3-selection';
import { line } from 'd3-shape';
import { establishContainer, translator, simplifyNumber } from '../../utils';
import { dotConstants } from './dotConstants';
import { compareOn, compareOff, generateOverlay, registerLayer } from './compareManager';
import { createDonut } from '../../revenue/donut';
import colors from '../../colors.scss';
import { chartWidth } from './widthManager';

const d3 = { select, selectAll, line };

let gdpLayer,
    config = {};

function getNewSvgHeight() {
    return Number(gdpLayer.attr('data-rect-height'));
}

function placeLegend(g) {
    const legendContainer = g.append('g')
        .classed('gdp-step-two', true)
        .attr('opacity', 0),
        textX = -50,
        height = getNewSvgHeight(),
        gdpAmount = config.gdpAmount,
        line = d3.line()
            .x(function (d) { return d.x; })
            .y(function (d) { return d.y; }),
        lineData = [
            { x: textX + 30, y: 0 },
            { x: textX + 20, y: 0 },
            { x: textX + 20, y: height },
            { x: textX + 30, y: height }
        ],
        text = legendContainer.append('text')
            .classed('reset', true)
            .attr('fill', colors.textColorParagraph)
            .attr('text-anchor', 'end')
            .attr('y', (height / 2) - 50)
            .style('font-size', 24);

    legendContainer.append('path')
        .attr('d', line(lineData))
        .attr('fill', 'none')
        .attr('stroke', '#aaa')
        .attr('stroke-width', 2);

    text.append('tspan')
        .text('U.S.')
        .style('font-weight', '600')
        .attr('x', textX)
        .attr('dy', 0);

    text.append('tspan')
        .text('Gross')
        .style('font-weight', '600')
        .attr('x', textX)
        .attr('dy', 20);

    text.append('tspan')
        .text('Domestic')
        .style('font-weight', '600')
        .attr('x', textX)
        .attr('dy', 20);

    text.append('tspan')
        .text('Product')
        .style('font-weight', '600')
        .attr('x', textX)
        .attr('dy', 20);

    text.append('tspan')
        .text(simplifyNumber(gdpAmount))
        .attr('x', textX)
        .attr('dy', 25);
}

function placeDonut(g) {
    const y = d3.select('.spending-dots').attr('data-rect-height'),
        r = 50,
        x = chartWidth - (r + 25) * 1.2,
        donutContainer = g.append('g')
            .classed('gdp-step-two', true)
            .attr('opacity', 0)
            .attr('transform', translator(x, y - r * 2 + 5) + ' scale(1.67)');

    donutContainer.append('circle')
        .attr('fill', 'white')
        .attr('opacity', 0.85)
        .attr('r', r + 10)
        .attr('cx', r)
        .attr('cy', r);

    createDonut(donutContainer, config.gdpPercent / 100, r * 2, config.sectionColor);
}

export function initGdp(_config) {
    config = _config || config;
    const svg = establishContainer(),
        gdpCount = 20700;

    gdpLayer = generateOverlay(gdpCount, svg.select('.main-container'), 'gdp-layer');

    if (document.documentElement.clientWidth > 959) {
        placeDonut(gdpLayer);
        placeLegend(gdpLayer);
    }

    registerLayer('gdp', gdpLayer, getNewSvgHeight());
}