import { select } from 'd3-selection';
import { transition } from 'd3-transition';
import { getElementBox, translator, simplifyNumber } from '../../utils';
import { dotFactory, receiptsConstants, dotPositionAccessor } from '../receipts-utils';
import { establishContainer } from '../../utils';
import { sectionOneData } from './data';
import colors from '../../colors.scss';
import { initGdpDots } from './gdpDots';
import { triggerInfoBox } from '../../infoBox';
import { revealHwcta } from '../reveal-hwcta';

const d3 = { select },
    xStart = receiptsConstants.xStart,
    dotsPerRow = receiptsConstants.dotsPerRow,
    dotOffset = receiptsConstants.dotOffset;

let svg,
    factBox,
    incomeContainer,
    dotContainer,
    dotsWidth;

function readyIncomeDots() {
    incomeContainer = dotContainer.append('g')
        .attr('opacity', 0)
        .classed(receiptsConstants.incomeContainerClass, true)
        .attr('transform', 'translate(-100, -50), scale(2)');

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
}

function buildHeader() {
    const text = svg.append('text')
        .attr('opacity', 0)
        .attr('fill', colors.textColorParagraph)
        .attr('class', 'total-gov-revenue')
        .attr('text-anchor', 'middle')
        .style('font-size', '18px')

    text.append('tspan')
        .text('U.S. Government Revenue')
        .style('font-weight', '600')
        .attr('y', 20)
        .attr('x', 600)
        .attr('transform', 'translate(0, 20)')

    text.append('tspan')
        .text(simplifyNumber(sectionOneData.income))
        .attr('y', 40)
        .attr('x', 600)

    text.transition()
        .duration(400)
        .attr('opacity', 1)
}

function buildLegend() {
    const g = d3.select('.income-dot-legend'),
        duration = 2000,
        w = 126,
        xOffset = dotsWidth - w + ((1200 - dotsWidth) / 2);

    g.transition()
        .duration(duration)
        .attr('transform', translator(xOffset, 35));

    g.select('circle')
        .attr('opacity', 1)
        .transition()
        .duration(duration)
        .attr('r', 3)
        .attr('cx', 0)
        .attr('cy', 0)
        .ease()

    g.append('text')
        .text('= 1 Billion Dollars')
        .attr('fill', colors.textColorParagraph)
        .attr('opacity', 0)
        .style('font-size', 16)
        .attr('y', 5)
        .attr('x', 7)
        .transition()
        .delay(duration * 0.7)
        .duration(duration / 2)
        .attr('opacity', 1)
        .ease();

    g.append('image')
        .attr('height', 16)
        .attr('width', 20)
        .attr('x', 122)
        .attr('y', -14)
        .attr('opacity', 0)        
        .attr('data-box-id', 'billion-dollars')
        .attr('xlink:href', '/assets/cg/icons/anecdote.svg')
        .attr('style', 'cursor:pointer')
        .on('click', triggerInfoBox)
        .transition()
        .delay(duration * 0.7)
        .duration(duration / 2)
        .attr('opacity', 1)
        .ease();
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

function showText() {
    svg.attr('height', 180);

    factBox = d3.select('#income-facts')
        .classed('temporary-hide--show', true);

    d3.select('.footnote').classed('temporary-hide', null)
        .attr('style', 'clear:both')

    revealHwcta();
}

function initContinueButton() {
    const button = d3.select('#tour-continue');

    button.on('click', function () {
        factBox.classed('temporary-hide--show', null);

        setTimeout(function () {
            factBox.remove();
        }, 1000)

        initGdpDots();
    });
}

export function enterIncomeDots() {
    incomeContainer.transition()
        .delay(1000)
        .duration(700)
        .attr('opacity', 1)
        .attr('transform', 'translate(0,0), scale(1)')
        .on('end', function () {
            buildHeader();
        })
        .ease();

    buildLegend();

    setTimeout(showText, 2000);
}

export function initIncomeDots() {
    svg = establishContainer();
    initContinueButton();
    setDotContainer();
    readyIncomeDots();
}