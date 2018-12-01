import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { chartWidth } from "./widthManager";
import { dotConstants, dotsPerRow } from "./dotConstants";
import { translator } from '../../utils';

const stateManager = {},
    duration = 800,
    idMap = {
        gdp: '#gdp-facts',
        revenue: '#revenue-facts'
    },
    d3 = { select, selectAll, transition };

export function compareOn(id) {
    stateManager[id] = true;
}

export function compareOff(id) {
    stateManager[id] = false;
}

export function generateOverlay(count, container, className) {
    const rows = Math.floor(count / dotsPerRow),
        remainder = count % dotsPerRow,
        spacing = dotConstants.offset.y - (dotConstants.radius * 2),
        mainRectHeight = (rows * dotConstants.offset.y) - spacing / 2,
        secondaryRectHeight = (dotConstants.radius * 2) + spacing / 2,
        overlayHeight = mainRectHeight + secondaryRectHeight,
        rectColor = '#222';

    let overlayLayer = container.append('g')
        .attr('data-rect-height', overlayHeight)
        .classed(className, true);

    overlayLayer.attr('opacity', 0);

    overlayLayer.append('rect')
        .attr('width', dotsPerRow * dotConstants.offset.x)
        .attr('height', mainRectHeight)
        .attr('fill', rectColor)
        .attr('opacity', 0.5);

    overlayLayer.append('rect')
        .attr('width', remainder * dotConstants.offset.x)
        .attr('y', mainRectHeight)
        .attr('height', secondaryRectHeight)
        .attr('fill', rectColor)
        .attr('opacity', 0.5)

    return overlayLayer;
}

export function revealCompare() {
    setTimeout(() => {
        d3.select('.facts')
        .classed('facts--hidden', null);
    }, 500)
}