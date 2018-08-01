import { select } from 'd3-selection';
import { transition } from 'd3-transition';
import { getElementBox, translator } from '../../utils';
import { dotFactory, establishContainer, receiptsConstants, dotPositionAccessor } from './receipts-utils';

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
        dotFactory(incomeContainer, x, y, i, '#49A5B6');
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
        .attr('text-anchor', 'middle')
        .style('font-size', '18px')
    
    text.append('tspan')
        .text('Total Government Revenue')
        .style('font-weight', 'bold')
        .attr('y', 20)
        .attr('x', 600)
        .attr('transform', 'translate(0, 20)')
    
    text.append('tspan')
        .text('$3.4 T')
        .attr('y', 40)
        .attr('x', 600)
}

function buildLegend(){
    const g = svg.append('g');
    let w, xOffset;

    g.append('circle')
        .attr('r', 4.5)
        .attr('cx', 5)
        .attr('cy', 11)
        .attr('stroke', '#979797')
        .attr('fill', '#d8d8d8');

    g.append('text')
        .text('= 1 Billion Dollar')
        .style('font-size', '16px')        
        .attr('y', '16px')
        .attr('x', '15px')

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
        .attr('transform', translator(xOffset,receiptsConstants.headingHeight));
}

export function section1_1() {
    svg = establishContainer();
    buildHeader();
    setDotContainer();
    setIncomeDots();
    buildLegend();
}