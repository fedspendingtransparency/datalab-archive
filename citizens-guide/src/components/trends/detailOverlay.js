import { select, selectAll, mouse } from 'd3-selection';
import { translator, fadeAndRemove, getElementBox, establishContainer, wordWrap } from '../../utils';
import { trendDesktop } from './chart';
// import { closeDetail } from './sort';

const d3 = { select, selectAll, mouse },
    overlayPadding = 20;

let previousHeight;

function closeOverlay() {
    const detailLayer = d3.select('.detail-layer'),
        mask = d3.select('rect.mask');

    fadeAndRemove(detailLayer, 300);
    fadeAndRemove(mask, 300);

    // closeDetail();

    resizeSvg();
}

function placeCloseButton(container, detailLayer, innerWidth) {
    const closeButtonWidth = 30,
        closeGroup = container.append('g')
            .classed('pointer', true)
            .on('click', closeOverlay)
            .attr('transform', translator(innerWidth + overlayPadding - closeButtonWidth, 0));

    closeGroup.append('rect')
        .attr('fill', '#fff')
        .attr('stroke', '#fff')
        .attr('height', 20)
        .attr('width', closeButtonWidth)

    closeGroup.append('text')
        .html('&#215;')
        .attr('stroke', '#ccc')
        .attr('font-size', 24)
        .attr('text-anchor', 'middle')
        .attr('x', closeButtonWidth / 2)
        .attr('y', 20)
}

function renderHeader(detailLayer, d, innerWidth) {
    const headerTextMaxWidth = innerWidth - 60,
        title = d.officialName,
        header = detailLayer.append('g')
        .attr('transform', translator(0, overlayPadding));

    let headerText, calculatedHeaderHeight;

    headerText = header.append('text')
        .text(title)
        .attr('x', overlayPadding)
        .attr('y', 20)
        .attr('font-size', function() {
            const svgWidth = document.getElementById('viz').getBoundingClientRect().width;

            return svgWidth < 500 ? 16 : 20;
        });

    wordWrap(headerText, headerTextMaxWidth)

    headerText.attr('transform', translator(20, 0))

    placeCloseButton(header, detailLayer, innerWidth);

    calculatedHeaderHeight = header.selectAll('tspan').size() * 20;

    return calculatedHeaderHeight;
}

function renderMask() {
    const parent = d3.select('svg.main'),
        parentBox = getElementBox(establishContainer());

    parent.append('rect')
        .classed('mask', true)
        .attr('fill', 'black')
        .attr('opacity', 0.3)
        .attr('height', parentBox.height)
        .attr('width', parentBox.width)
        .on('click', closeOverlay)
}

function setOverlayY(overlayHeight) {
    const ideal = overlayHeight / 2,
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
        svgBox = getElementBox(mainSvg),
        svgHeight = svgBox.height;
        // newWidth = getElementBox(mainSvg.select('.pan-listen')).width;

    let detailHeightWithPadding,
        newHeight = previousHeight;

    if (finalRectHeight) {
        previousHeight = svgHeight;
        detailHeightWithPadding = finalRectHeight + 20;
        newHeight = detailHeightWithPadding > previousHeight ? detailHeightWithPadding : previousHeight;
    }

    d3.select('.mask')
        // .attr('width', newWidth)
        .attr('height', newHeight);

    mainSvg.transition()
        .duration(500)
        .attr('height', newHeight)
        .ease();
}

function placeChart(d, chartContainer, parentConfig) {
    trendDesktop(d.subcategories, chartContainer, parentConfig, 'drilldown')
}

export function initOverlay(d, parentConfig) {
    const config = {};

    let headerHeight, detailLayerYOffset, rect, detailLayer, finalRectHeight, chartContainer;

    renderMask();

    detailLayer = d3.select('svg.main').append('g')
        .classed('detail-layer', true)
        .attr('transform', translator(0,0) + ' scale(0)')
        .attr('opacity', 1);

    config.width = d3.select('svg.main').attr('width') - 20 - overlayPadding * 2;
    config.data = d.subcategories;

    rect = detailLayer.append('rect')
        .classed('detail-background', true)
        .attr('fill', 'white')
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('width', config.width + overlayPadding * 2)
        .attr('rx', 10)
        .attr('ry', 10);

    headerHeight = renderHeader(detailLayer, d, config.width);

    detailLayerYOffset = headerHeight + overlayPadding + overlayPadding;

    console.log(d)

    finalRectHeight = detailLayerYOffset + 720 + overlayPadding;

    rect.attr('height', finalRectHeight);

    //resizeSvg(finalRectHeight);

    chartContainer = detailLayer.append('g')
        .attr('transform', translator(overlayPadding, detailLayerYOffset))
        .classed('detail-chart', true);

    detailLayer.transition()
        .duration(750)
        .attr('transform', translator(5, setOverlayY(0, finalRectHeight)) + ' scale(1)')
        .on('end', function () {
            placeChart(d, chartContainer, parentConfig)
        })
        .ease();
}