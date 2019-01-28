import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { chartWidth } from "./widthManager";
import { dotConstants, dotsPerRow } from "./dotConstants";
import { translator } from '../../utils';
import { setDeficitStartPosition } from './deficitDots';

const stateManager = {},
    layers = {},
    duration = 500,
    idMap = {
        gdp: '#gdp-facts',
        revenue: '#revenue-facts'
    },
    sectionActive = 'facts__section--active',
    buttonActive = 'facts__trigger--active',
    d3 = { select, selectAll, transition };

let gdpHeight, originalHeight, config = {};

function setLayerOpacity(layer, active) {
    layer.transition()
        .duration(duration)
        .attr('opacity', function () {
            return active ? 1 : 0;
        });
}

function toggleLayer() {
    const id = d3.select(this).attr('data-trigger-id'),
        debtGroup = d3.select('.debt-group'),
        deficitGroup = d3.select('.deficit-group');

    if (id === 'deficit') {
        setLayerOpacity(deficitGroup, true);
        setLayerOpacity(debtGroup);
    } else {
        setLayerOpacity(deficitGroup);
        setLayerOpacity(debtGroup, true);
    }
}
 
export function generateOverlay(count, container, className, color) {
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
        .attr('width', dotsPerRow * dotConstants.offset.x)
        .attr('height', mainRectHeight)
        .attr('fill', rectColor)
        .attr('opacity', 0.8);

    overlayLayer.append('rect')
        .attr('width', remainder * dotConstants.offset.x)
        .attr('y', mainRectHeight)
        .attr('height', secondaryRectHeight)
        .attr('fill', rectColor)
        .attr('opacity', 0.8)

    if (className === 'revenue-layer') {
        setDeficitStartPosition(remainder, mainRectHeight)
    }

    return overlayLayer;
}

d3.selectAll('.facts__trigger').on('click', toggleLayer);