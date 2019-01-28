import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { establishContainer, translator } from '../../utils';
import { setChartWidth, chartWidth } from './widthManager';
import { setDotsPerRow, dotsPerRow, dotConstants } from './dotConstants';
import { generateOverlay } from './compareManager';

const d3 = { select, selectAll, transition },
    duration = 1500,
    scaleFactor = 0.6,
    billion = 1000000000;

let config, svg;

export function generateDebtOverlay(count, container, className, color) {
    const rows = Math.floor(count / dotsPerRow),
        remainder = count % dotsPerRow,
        spacing = dotConstants.offset.y - (dotConstants.radius * 2),
        mainRectHeight = (rows * dotConstants.offset.y) - spacing / 2,
        secondaryRectHeight = (dotConstants.radius * 2) + spacing / 2,
        overlayHeight = mainRectHeight + secondaryRectHeight,
        rectColor = color || '#ccc';

    let overlayLayer = container.append('g')
        .attr('data-rect-height', overlayHeight)
        .classed(className, true);

    overlayLayer.attr('opacity', 0);

    overlayLayer.append('rect')
        .attr('y', secondaryRectHeight)
        .attr('width', dotsPerRow * dotConstants.offset.x)
        .attr('height', mainRectHeight)
        .attr('fill', rectColor)
        .attr('opacity', 0.8);

    overlayLayer.append('rect')
        .attr('width', remainder * dotConstants.offset.x)
        .attr('x', dotsPerRow * dotConstants.offset.x - remainder * dotConstants.offset.x)
        .attr('height', secondaryRectHeight)
        .attr('fill', rectColor)
        .attr('opacity', 0.8)

    return overlayLayer;
}

function placeDebt() {
    const svg = establishContainer(),
        debtGroup = svg.append('g').classed('debt-group', true).attr('opacity', 0).attr('transform', translator(chartWidth * 0.25, 0) + ` scale(${scaleFactor})`),
        compareCount = Math.ceil(config.debtBalance / billion);

    let debtLayer = generateDebtOverlay(compareCount, debtGroup, `debt-layer`, '#ccc');

    debtLayer.attr('opacity', 1).attr('transform', translator(0, 80));
}

function placeDeficit() {

}

export function compareDebt(c) {
    config = c || config;

    placeDebt();
}