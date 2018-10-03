import { select, selectAll, create } from 'd3-selection';
import { line } from 'd3-shape';
import { getElementBox, translator, simplifyNumber } from '../../utils';
import { dotFactory, receiptsConstants, dotPositionAccessor } from '../receipts-utils';
import { establishContainer } from '../../utils';
import { sectionOneData } from './data';
import { createDonut } from '../donut';
import { tourButton } from '../tourButton/tourButton';
import colors from '../../colors.scss';

const d3 = { select, selectAll, line, create };
let svg, dotContainer;

function addLegend() {
    const dotBox = d3.select('g.' + receiptsConstants.dotContainerClass),
        legendBox = svg.append('g').classed('gdp-legend reset', true),
        height = getElementBox(dotBox).height,
        margin = (1200 - getElementBox(dotBox).width) / 2,
        line = d3.line()
            .x(function (d) { return d.x; })
            .y(function (d) { return d.y; }),
        lineData = [
            { x: 87, y: 0 },
            { x: 84, y: 0 },
            { x: 84, y: height },
            { x: 87, y: height }
        ],
        dotsRect = getElementBox(dotContainer),
        text = legendBox.append('text')
            .classed('reset', true)
            .attr('fill', colors.textColorParagraph)
            .attr('text-anchor', 'middle')
            .attr('y', 0)
            .style('font-size', '16px');

    legendBox.append('path')
        .classed('reset', true)
        .attr('d', line(lineData))
        .attr('fill', 'none')
        .attr('stroke', '#aaa')
        .attr('stroke-width', 1);

    text.append('tspan')
        .text('Total GDP')
        .style('font-weight', '600')
        .attr('x', 40)
        .attr('dy', height / 2);

    text.append('tspan')
        .text(simplifyNumber(sectionOneData.gdp))
        .attr('x', 40)
        .attr('dy', 20);
}

function setGdpDots() {
    const incomeHeightOffset = 100,
        gdpDotCount = 16000,
        gdpDotColor = 'rgba(200,200,200,1)',
        dotPositionStart = dotPositionAccessor.get(),
        firstRowCount = receiptsConstants.dotsPerRow - dotPositionStart.startIndex,
        fullRows = Math.floor(gdpDotCount / receiptsConstants.dotsPerRow),
        lastRowCount = gdpDotCount - dotPositionStart.startIndex - (fullRows * receiptsConstants.dotsPerRow),
        gdpContainer = dotContainer.append('g')
            .classed('gdp reset', true)
            .attr('transform', 'scale(1.3)'),
        rowOne = gdpContainer.append('g')
            .attr('transform', function () {
                return translator(0, incomeHeightOffset)
            });

    let i = 0,
        r = 0,
        rowCount = 1,
        rowPosition = dotPositionStart.startIndex,
        x = dotPositionStart.x,
        y = dotPositionStart.y;

    // first row

    for (i; i < firstRowCount; i++) {
        dotFactory(gdpContainer, x, y, gdpDotColor);
        x += receiptsConstants.dotOffset.x;

        rowPosition += 1;
    }

    // first full row

    x = 2;

    for (r; r < receiptsConstants.dotsPerRow; r++) {
        dotFactory(rowOne, x, -1, gdpDotColor);
        x += receiptsConstants.dotOffset.x;
    }

    // clone rows

    for (rowCount; rowCount < (fullRows); rowCount++) {
        rowOne.clone(true)
            .attr('transform', translator(0, (rowCount * receiptsConstants.dotOffset.y) + incomeHeightOffset))
    }

    // final row

    i = 0;
    x = 2;

    const lastRow = gdpContainer.append('g')
        .classed('last-row', true)
        .attr('transform', translator(0, (rowCount * receiptsConstants.dotOffset.y) + incomeHeightOffset));

    for (i; i < lastRowCount; i++) {
        dotFactory(lastRow, x, -1, gdpDotColor);
        x += receiptsConstants.dotOffset.x;
    }

    gdpContainer.transition()
        .duration(1000)
        .attr('transform', 'scale(1)')
        .ease();
}

function enableFactBox() {
    const factBox = d3.select('#gdp-facts')
        .classed('temporary-hide--show', true);

    svg.attr('width', 670);
    svg.attr('height', 300);

    d3.select('#viz').attr('style', 'float:left');
}

function animationNext() {
    addLegend();
    enableFactBox();
}

function zoomOutDots() {
    const prevTransform = dotContainer.attr('transform'),
        zoomDuration = 2000;

    d3.select('.total-gov-revenue').transition()
        .duration(500)
        .attr('opacity', 0)
        .on('end', function () {
            d3.select(this).remove();
        })
        .ease();

    d3.select('.income-dot-legend').transition()
        .duration(500)
        .attr('opacity', 0)
        .on('end', function () {
            d3.select(this).remove();
        })
        .ease();

    dotContainer.transition()
        .duration(zoomDuration)
        .attr('transform', translator(92, 0) + ' scale(0.5)')
        .on('end', animationNext)
        .ease()
}

function enterDonut() {
    const r = 120,
        donutGroup = dotContainer.append('g');

    let donutContainer;

    donutGroup.append('circle')
        .attr('fill', 'white')
        .attr('opacity', 0.85)
        .attr('r', r)
        .attr('cx', r)
        .attr('cy', r);

    donutGroup
        .attr('transform', 'scale(1.5) ' + translator(600, 0))
        .attr('opacity', 0)

    donutContainer = donutGroup.append('g')
        .attr('transform', translator(20, 20));

    createDonut(donutContainer, .174, 200, colors.income);

    donutGroup.transition()
        .delay(2500)
        .duration(1500)
        .attr('opacity', 1)
        .attr('transform', 'scale(1) ' + translator(900, 100))
        .ease();
}

export function initGdpDots() {
    svg = establishContainer();

    svg.transition()
        .duration(1000)
        .attr('height', 450)

    dotContainer = d3.select('g.' + receiptsConstants.dotContainerClass)
    zoomOutDots();
    setGdpDots();
    enterDonut();
}