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
    rowCount,
    config = {};

function dotFactory(container, x, y) {
    const color = config.sectionColor;

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
        .attr('opacity', 0),
        oneBillion = 1000000000;

    let i = 0,
        dotRectHeight,
        sectionAmountInBillions = config.sectionAmount / oneBillion,
        x = dotConstants.radius,
        y = 2;

    for (i; i < sectionAmountInBillions; i++) {
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

    dotRectHeight = d3.select('g.spending-dots').node().getBoundingClientRect().height;

    dotContainer.attr('data-rect-height', dotRectHeight);

    setTimeout(function(){
        svg.attr('height', dotRectHeight + 50);
    }, 1000)
}

export function placeDots(_config) {
    d3.select('.main-container').remove();
    config = _config || config;
    svg = establishContainer();

    readyDots();
    initRevenueOverlay(config);
    initGdp(config);
}