import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { dotConstants, dotsPerRow} from './dotConstants';
import { establishContainer, translator } from "../../utils";
import { initRevenueOverlay } from './compareRevenue';
import { initGdp } from './compareGdp';
import { chartWidth } from './widthManager';
import { revealCompare } from './compareManager';
import colors from '../../colors.scss';

const d3 = { select, selectAll };

let svg,
    rowCount;

function dotFactory(container, x, y, color) {
    color = color || colors.colorSpendingPrimary;

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
        .classed('spending-dots', true)
        .attr('opacity', 0);

    let i = 0,
        spendingTrillion = 4100,
        x = dotConstants.radius,
        y = 2;

    for (i; i < spendingTrillion; i++) {
        dotFactory(dotContainer, x, y);
        x += dotConstants.offset.x;

        if ((i + 1) % dotsPerRow === 0) {
            y += dotConstants.offset.y;
            x = dotConstants.radius;
        }
    }

    dotContainer.transition()
        .delay(1000)
        .duration(1000)
        .attr('opacity', 1)
        .on('end', revealCompare)
        .ease();
}

export function placeDots() {
    d3.select('.main-container').remove();

    svg = establishContainer();

    readyDots();
    initRevenueOverlay();
    initGdp();
}