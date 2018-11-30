import { select, selectAll } from 'd3-selection';
import { dotConstants } from './dotConstants';
import { establishContainer } from "../../utils";
import { placeOverlay } from './overlayRevenue';

const d3 = { select, selectAll };

let svg,
    width,
    rowCount,
    dotsPerRow;

function dotFactory(container, x, y, color) {
    color = color || 'blue';

    container.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 2)
        .style('fill', color)
}

function setDotsPerRow() {
    const workingWidth = width - dotConstants.radius;

    dotsPerRow = Math.floor(workingWidth / dotConstants.offset.x);
}

function readyDots() {
    const dotContainer = svg.append('g');
        // .attr('opacity', 0)
        // .classed(receiptsConstants.incomeContainerClass, true)
        // .attr('transform', 'translate(-100, -50), scale(2)');

    let i = 0,
        top = 4000,
        x = dotConstants.radius,
        y = 2;

    for (i; i < top; i++) {
        dotFactory(dotContainer, x, y);
        x += dotConstants.offset.x;

        if ((i + 1) % dotsPerRow === 0) {
            y += dotConstants.offset.y;
            x = dotConstants.radius;
        }
    }
}

export function placeDots() {
    width = d3.select('#viz').node().getBoundingClientRect().width;

    svg = establishContainer(500, width);

    setDotsPerRow();
    readyDots();
    placeOverlay(dotsPerRow);
}