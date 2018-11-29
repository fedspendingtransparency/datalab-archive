import { select, selectAll, mouse } from 'd3-selection';
import { transition } from 'd3-transition';
import { translator, fadeAndRemove, getElementBox } from '../../../utils';
import colors from '../../../colors.scss';

const d3 = { select, selectAll, mouse },
    overlayPadding = 20;

function closeOverlay() {
    const detailLayer = d3.select('.detail-layer'),
        mask = d3.select('rect.mask');

    fadeAndRemove(detailLayer, 300);
    fadeAndRemove(mask, 300);

    d3.select('g.pan-apply')
    .transition()
    .duration(500)
    .attr("transform", translator(0, 0))
    .ease();
}

function placeCloseButton(container, detailLayer, innerWidth) {
    const closeButtonWidth = 30,
        closeGroup = container.append('g')
            .classed('pointer', true)
            .on('click', closeOverlay)
            .attr('transform', translator(innerWidth + overlayPadding - closeButtonWidth, 0));

    closeGroup.append('rect')
        .attr('fill', '#ddd')
        .attr('stroke', '#888')
        .attr('height', 20)
        .attr('width', closeButtonWidth)

    closeGroup.append('text')
        .text('x')
        .attr('text-anchor', 'middle')
        .attr('x', closeButtonWidth / 2)
        .attr('y', 14)
}

function renderHeader(detailLayer, title, innerWidth) {
    const header = detailLayer.append('g')
        .attr('transform', translator(0, overlayPadding));

    header.append('text')
        .text(title)
        .attr('x', overlayPadding)
        .attr('y', 20)
        .attr('font-size', 20);

    placeCloseButton(header, detailLayer, innerWidth);

    return getElementBox(header).height + 20;
}

function renderMask() {
    const parent = d3.select('g.pan-apply'),
        parentBox = getElementBox(parent);

    parent.append('rect')
        .classed('mask', true)
        .attr('fill', 'black')
        .attr('opacity', 0.3)
        .attr('height', parentBox.height)
        .attr('width', parentBox.width)
        .on('click', closeOverlay)
}

function setOverlayY(clickY, overlayHeight) {
    const ideal = clickY - overlayHeight/2,
        svgHeight = getElementBox(d3.select('svg.main')).height;

    if (ideal < 5 ) {
        return 5;
    }

    if (ideal + overlayHeight > svgHeight) {
        return svgHeight - overlayHeight - 5;
    }

    return ideal;
}

export function initOverlay(title, config, callback, defaultDataSize) {
    const startCoords = d3.mouse(d3.select('svg.main').node());

    let headerHeight, detailLayerYOffset, rect, detailLayer, finalRectHeight;
    
    renderMask();

    detailLayer = d3.select('g.pan-apply').append('g')
        .classed('detail-layer', true)
        .attr('transform', translator(startCoords[0], startCoords[1]) + ' scale(0)')
        .attr('opacity', 1);


    config.width = config.width - 10 - overlayPadding * 2;

    rect = detailLayer.append('rect')
        .attr('fill', 'white')
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('width', config.width + overlayPadding * 2)
        .attr('rx', 10)
        .attr('ry', 10);

    headerHeight = renderHeader(detailLayer, title, config.width);

    detailLayerYOffset = headerHeight + overlayPadding + overlayPadding;

    console.log('defaultDataSize:', defaultDataSize);
    finalRectHeight = detailLayerYOffset + config.data.length * config.rowHeight + overlayPadding;

    //finalRectHeight = Math.min(defaultDataSize, finalRectHeight);
    rect.attr('height', finalRectHeight);

    config.svg = detailLayer.append('g')
        .attr('transform', translator(overlayPadding, detailLayerYOffset))
        .classed('detail-chart', true);

    detailLayer.transition()
        .duration(750)
        .attr('transform', translator(5, setOverlayY(startCoords[1], finalRectHeight)) + ' scale(1)')
        .on('end', function () {
            callback(config, true)
        })
        .ease();
}