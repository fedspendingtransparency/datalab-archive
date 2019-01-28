import { transition } from 'd3-transition';
import { dotsPerRow, dotConstants } from "./dotConstants";
import { establishContainer, translator } from "../../utils";
import { chartWidth } from './widthManager';

const startPosition = {},
    scaleFactor = 0.6;

let config, dotColor, deficitDots, y1, layerX, deficitY, deficitCompareDots, debtCompareDots;

function dotFactory(x, y) {
    return deficitDots.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 2)
        .style('fill', dotColor)
}

function makeDotRow(start, max, y, debtOffset) {
    let i = 0,
        dot,
        x = start;
    
    for (i; i < max; i++) {
        dot = dotFactory(x, y);
        x += dotConstants.offset.x;

        if ((i + 1) % dotsPerRow === 0) {
            y += dotConstants.offset.y;
            x = dotConstants.radius;
        }

        if (debtOffset && i < debtOffset) {
            dot.attr('data-debt-only', true)
                .attr('opacity', 0)
        }
    }
}

function markDeficitOnly() {
    const circles = deficitDots.selectAll('circle'),
        size = circles.size(),
        start = size - startPosition.xOffset;

    deficitCompareDots = circles.filter((d, i) => i > start).attr('data-deficit-only', true);
    debtCompareDots = circles.filter('[data-debt-only]');
}

function placeDotsDeficit() {
    const deficitInBillions = config.deficitAmount/1000000000,
        rowOneCount = dotsPerRow - startPosition.xOffset,
        fullRows = Math.floor((deficitInBillions - rowOneCount) / dotsPerRow),
        remainder = deficitInBillions - rowOneCount - (fullRows * dotsPerRow);

    let i = 0,
        y = 2;

    // first row with offset
    makeDotRow(2, dotsPerRow, y, startPosition.xOffset);

    y += dotConstants.offset.y;    

    for (i; i < fullRows; i++) {
        makeDotRow(2, dotsPerRow, y)
        y += dotConstants.offset.y;
    }

    makeDotRow(2, remainder, y);

    y1 = y;

    markDeficitOnly();
}

export function switchCompareMode(mode, duration) {
    const layerY = (mode === 'debt') ? 0 : deficitY;

    duration = duration * 1.5;

    deficitDots.transition()
        .duration(duration)
        .attr('transform', translator(layerX, layerY) + ` scale(${scaleFactor})`)
        .ease();

    deficitCompareDots.transition()
        .duration(duration)
        .attr('opacity', (mode === 'debt') ? 0 : 1)
        .ease();

    debtCompareDots.transition()
        .duration(duration)
        .attr('opacity', (mode === 'debt') ? 1 : 0)
        .ease();
}

export function setDeficitStartPosition(xOffset, y) {
    startPosition.xOffset = xOffset;

    layerX = (chartWidth - chartWidth * scaleFactor) / 2;
    deficitY = y * scaleFactor

    deficitDots = config.mainContainer.append('g')
        .classed('deficit-dots', true)
        .attr('opacity', 0)
        .attr('data-y0', y)
        .attr('transform', translator(layerX, deficitY) + ` scale(${scaleFactor})`);
    
    deficitDots.lower();

    placeDotsDeficit();

    deficitDots.attr('data-y1', y1 + y);
}

export function initDeficitDots(c) {
    config = c;
    dotColor = config.deficitColor;
}