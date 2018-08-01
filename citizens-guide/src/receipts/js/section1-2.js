import { select, create } from 'd3-selection';
import { line } from 'd3-shape';
import { getElementBox, translator } from '../../utils';
import { dotFactory, establishContainer, receiptsConstants, dotPositionAccessor } from './receipts-utils';

const d3 = { select, line, create };
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
            { x: 0, y: 0 },
            { x: 3, y: 0 },
            { x: 3, y: height },
            { x: 0, y: height }
        ],
        text = legendBox.append('text')
            .classed('reset', true)
            .attr('text-anchor', 'middle')
            .attr('y', height / 2)
            .style('font-size', '18px')

    legendBox.attr('transform', translator(1200 - margin + 5, receiptsConstants.headingHeight))

    legendBox.append('path')
        .classed('reset', true)
        .attr('d', line(lineData))
        .attr('fill', 'none')
        .attr('stroke', '#aaa')
        .attr('stroke-width', 1);

    text.append('tspan')
        .text('Total GDP')
        .style('font-weight', 'bold')
        .attr('x', 45)
        .attr('dy', -20)

    text.append('tspan')
        .text('$19.4 T')
        .attr('x', 45)
        .attr('dy', 20)
}

function setGdpDots() {
    const incomeHeightOffset = getElementBox(d3.select('g.' + receiptsConstants.incomeContainerClass)).height + 5,
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
        dotFactory(gdpContainer, x, y, i, gdpDotColor);
        x += receiptsConstants.dotOffset.x;

        rowPosition += 1;
    }

    // first full row

    x = 2;

    for (r; r < receiptsConstants.dotsPerRow; r++) {
        dotFactory(rowOne, x, 2, r, gdpDotColor);
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
        dotFactory(lastRow, x, 2, i, gdpDotColor);
        x += receiptsConstants.dotOffset.x;
    }

    gdpContainer.transition()
        .duration(1000)
        .attr('transform', 'scale(1)')
        .on('end', addLegend)
        .ease();
}

export function section1_2() {
    svg = establishContainer();

    svg.transition()
        .duration(200)
        .attr('height', '1000px')

    dotContainer = d3.select('g.' + receiptsConstants.dotContainerClass)
    setGdpDots();
}