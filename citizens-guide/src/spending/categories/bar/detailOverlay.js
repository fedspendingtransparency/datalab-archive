import { select, selectAll, mouse } from 'd3-selection';
import { transition } from 'd3-transition';
import { translator, fadeAndRemove, getElementBox, establishContainer } from '../../../utils';
import colors from '../../../colors.scss';
import { closeDetail } from './sort';

const d3 = { select, selectAll, mouse },
    overlayPadding = 20;

let originalSvgHeight;

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

    closeDetail();

    resizeSvg();
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
        parentBox = getElementBox(establishContainer());

    parent.append('rect')
        .classed('mask', true)
        .attr('fill', 'black')
        .attr('opacity', 0.3)
        .attr('height', parentBox.height)
        .attr('width', parentBox.width)
        .on('click', closeOverlay)
}

function setOverlayY(clickY, overlayHeight) {
    const ideal = clickY - overlayHeight / 2,
        svgHeight = getElementBox(d3.select('svg.main')).height;

    if (ideal < 5) {
        return 5;
    }

    if (ideal + overlayHeight > svgHeight) {
        return svgHeight - overlayHeight - 5;
    }

    return ideal;
}

function resizeSvg(finalRectHeight) {
    const mainSvg = establishContainer(),
        svgHeight = getElementBox(mainSvg).height;

    let previousHeight,
        detailHeightWithPadding,
        newHeight = previousHeight;

    if (finalRectHeight) {
        previousHeight = svgHeight;
        detailHeightWithPadding = finalRectHeight + 20;
        newHeight = detailHeightWithPadding > previousHeight ? detailHeightWithPadding : previousHeight;
    }

    if (newHeight === svgHeight) {
        return;
    }

    d3.select('.mask').attr('height', newHeight);

    mainSvg.transition()
        .duration(500)
        .attr('height', newHeight)
        .ease();
}

export function initOverlay(title, config, callback) {
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

    finalRectHeight = detailLayerYOffset + config.data.length * config.rowHeight + overlayPadding;

    rect.attr('height', finalRectHeight);

    resizeSvg(finalRectHeight);

    config.svg = detailLayer.append('g')
        .attr('transform', translator(overlayPadding, detailLayerYOffset))
        .classed('detail-chart', true);

    //match current sort if needed
    if (d3.select('#sort-name').classed('active')) {
        config.data.sort((a, b) => {
            if (b.activity < a.activity) {
                return 1;
            }

            if (b.activity > a.activity) {
                return -1;
            }

            return 0;
        })
    }

    detailLayer.transition()
        .duration(750)
        .attr('transform', translator(5, setOverlayY(startCoords[1], finalRectHeight)) + ' scale(1)')
        .on('end', function () {
            console.log(config.data)
            callback(config, true)
        })
        .ease();
}