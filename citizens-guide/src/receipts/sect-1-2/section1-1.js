import { select } from 'd3-selection';
import { transition } from 'd3-transition';
import { getElementBox, translator, simplifyNumber } from '../../utils';
import { dotFactory, receiptsConstants, dotPositionAccessor } from './receipts-utils';
import { establishContainer } from '../../utils';
import { sectionOneData } from './section1-data';

const d3 = { select },
    xStart = receiptsConstants.xStart,
    dotsPerRow = receiptsConstants.dotsPerRow,
    dotOffset = receiptsConstants.dotOffset;

let svg,
    dotContainer,
    dotsWidth;

function setIncomeDots() {
    const incomeContainer = dotContainer.append('g')
        .classed(receiptsConstants.incomeContainerClass, true)
        .attr('transform', 'scale(1.3)');

    let i = 0,
        top = 3400,
        x = xStart,
        y = 2;

    for (i; i < top; i++) {
        dotFactory(incomeContainer, x, y);
        x += dotOffset.x;

        if ((i + 1) % dotsPerRow === 0) {
            y += dotOffset.y;
            x = xStart;
        }
    }

    dotPositionAccessor.set([x, y], i % dotsPerRow);

    incomeContainer.transition()
        .duration(1000)
        .attr('transform', 'scale(1)')
        .ease()
}

function buildHeader() {
    const text = svg.append('text')
        .attr('class', 'total-gov-revenue')
        .attr('text-anchor', 'middle')
        .style('font-size', '18px')

    text.append('tspan')
        .text('Total Government Revenue')
        .style('font-weight', 'bold')
        .attr('y', 20)
        .attr('x', 600)
        .attr('transform', 'translate(0, 20)')

    text.append('tspan')
        .text(simplifyNumber(sectionOneData.receipts))
        .attr('y', 40)
        .attr('x', 600)
}

function buildLegend() {
    const g = svg.append('g').classed('reset', true);
    let w, xOffset;

    dotFactory(g, 0, 0);

    g.append('text')
        .text('= 1 Billion Dollar')
        .style('font-size', 16)
        .attr('y', 6)
        .attr('x', 7)

    w = getElementBox(g).width;

    xOffset = dotsWidth - w + ((1200 - dotsWidth) / 2);

    g.attr('transform', translator(xOffset, 30))
}

function setDotContainer() {
    let xOffset;

    dotsWidth = (dotsPerRow * dotOffset.x) + xStart;
    xOffset = (1200 - dotsWidth) / 2;

    dotContainer = svg.append('g')
        .classed(receiptsConstants.dotContainerClass, true)
        .classed('reset', true)
        .attr('transform', translator(xOffset, receiptsConstants.headingHeight));
}

function init() {
    buildHeader();
    setDotContainer();
    setIncomeDots();
    buildLegend();
}

export function section1_1() {
    const duration = 300,
        svgHeight = 250;

    let existing;

    svg = establishContainer(300);

    existing = svg.selectAll('*');

    if (existing.size()) {
        existing.transition()
            .duration(duration)
            .attr('opacity', 0)
            .on('end', function () {
                d3.select(this).remove();
            });

        svg.transition()
            .duration(duration)
            .attr('height', svgHeight);

        setTimeout(init, duration)

    } else {
        svg.attr('height', svgHeight);
        init();
    }
}