import { select, selectAll } from 'd3-selection';
import { line } from 'd3-shape';
import { establishContainer, translator, simplifyNumber } from '../../utils';
import { dotConstants } from './dotConstants';
import { compareOn, compareOff, generateOverlay, registerLayer } from './compareManager';
import colors from '../../colors.scss';

const d3 = { select, selectAll, line };

let revenueLayer;

function placeLegend(g) {
    const legendContainer = g.append('g')
        .classed('revenue-step-two', true)
        .attr('opacity', 0),
        textX = -50,
        height = Number(revenueLayer.attr('data-rect-height')),
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
            .attr('y', -10)
            .style('font-size', 24);

    legendContainer.append('path')
        .attr('d', line(lineData))
        .attr('fill', 'none')
        .attr('stroke', '#aaa')
        .attr('stroke-width', 2);

    text.append('tspan')
        .text('Federal Revenue')
        .style('font-weight', '600')
        .attr('x', textX)
        .attr('dy', height / 2);

    text.append('tspan')
        .text(simplifyNumber(3300000000000))
        .attr('x', textX)
        .attr('dy', 30);
}

export function initRevenueOverlay() {
    const svg = establishContainer(),
        revenueCount = 3400;

    revenueLayer = generateOverlay(revenueCount, svg.select('.main-container'), 'revenue-layer', colors.colorPrimary);

    if (document.documentElement.clientWidth > 959) {
        placeLegend(revenueLayer);
    }

    registerLayer('revenue', revenueLayer);
}