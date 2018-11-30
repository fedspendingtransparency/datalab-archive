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

let scaleFactor = 0.6;

function showFacts(id) {
    d3.select('g.main-container').transition()
        .duration(duration)
        .attr('transform', translator(0, 0) + ` scale(${scaleFactor})`)
        .ease();

    d3.select('svg.main')
        .transition()
        .duration(duration)
        .attr('width', chartWidth * scaleFactor);

    d3.select('#viz').classed('facts-open', true);
}

function hideFacts(id) {
    d3.select('g.main-container').transition()
        .duration(duration)
        .attr('transform', translator(0, 30) + ' scale(1)')
        .ease();

    d3.select('svg.main')
        .transition()
        .duration(duration)
        .attr('width', chartWidth);

    d3.select('#viz').classed('facts-open', null);
}

export function compareOn(id) {
    stateManager[id] = true;

    d3.select(idMap[id]).classed('temporary-hide--show', true)    

    showFacts();
}

export function compareOff(id) {
    stateManager[id] = false;

    d3.select(idMap[id]).classed('temporary-hide--show', null);
    
    if (!stateManager.gdp && !stateManager.revenue) {
        hideFacts();
    }

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