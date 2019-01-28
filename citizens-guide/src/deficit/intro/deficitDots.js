import { transition } from 'd3-transition';
import { dotsPerRow, dotConstants } from "./dotConstants";
import { establishContainer, translator } from "../../utils";
import { chartWidth } from './widthManager';

const startPosition = {},
    scaleFactor = 0.6;

let config, dotColor, deficitDots;

function dotFactory(x, y) {
    deficitDots.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 2)
        .style('fill', dotColor)
}

function makeDotRow(start, max, y) {
    let i = 0,
        x = start;
    
    for (i; i < max; i++) {
        dotFactory(x, y);
        x += dotConstants.offset.x;

        if ((i + 1) % dotsPerRow === 0) {
            y += dotConstants.offset.y;
            x = dotConstants.radius;
        }
    }
}

function placeDotsDeficit() {
    const deficitInBillions = config.deficitAmount/1000000000,
        rowOneCount = dotsPerRow - startPosition.xOffset,
        fullRows = Math.floor((deficitInBillions - rowOneCount) / dotsPerRow),
        remainder = deficitInBillions - rowOneCount - (fullRows * dotsPerRow);

    let i = 0,
        y = 2 + dotConstants.offset.y;

    makeDotRow(startPosition.xOffset * dotConstants.offset.x, rowOneCount, 2);

    for (i; i < fullRows; i++) {
        makeDotRow(2, dotsPerRow, y)
        y += dotConstants.offset.y;
    }

    makeDotRow(2, remainder, y);
}

export function setDeficitStartPosition(xOffset, y) {
    startPosition.xOffset = xOffset;
    startPosition.y = y;

    deficitDots = establishContainer().append('g')
        .classed('deficit-dots', true)
        .attr('opacity', 0)
        .attr('transform', translator(chartWidth * 0.25, y * scaleFactor) + ` scale(${scaleFactor})`);
    
    deficitDots.lower();

    placeDotsDeficit();

    deficitDots.transition()
        .delay(3000)
        .duration(1000)
        .attr('opacity', 1)
        .ease();
}

export function initDeficitDots(c) {
    config = c;
    dotColor = config.deficitColor;
}