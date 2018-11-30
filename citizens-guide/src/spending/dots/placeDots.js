import { select, selectAll } from 'd3-selection';
import { dotConstants, dotsPerRow} from './dotConstants';
import { establishContainer, translator } from "../../utils";
import { initRevenueOverlay } from './compareRevenue';
import { initGdp } from './compareGdp';
import { chartWidth } from './widthManager';

const d3 = { select, selectAll };

let svg,
    rowCount;

function dotFactory(container, x, y, color) {
    color = color || 'blue';

    container.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 2)
        .style('fill', color)
}

function readyDots() {
    const dotContainer = svg.append('g')
        .classed('main-container', true)
        .attr('transform', translator(0, 30))
        .append('g')
        .classed('spending-dots', true);
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
    svg = establishContainer();

    readyDots();
    initRevenueOverlay();
    initGdp();
}