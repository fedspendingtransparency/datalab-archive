import { select } from 'd3-selection';
import { createDonut } from './donut';
import { getElementBox, translator, simplifyNumber, fractionToPercent, getTransform, initDropShadow } from '../../utils';
import { receiptsConstants } from './receipts-utils';
import { establishContainer } from '../../utils';
import { sectionOneData } from './section1-data';

const d3 = { select },
    boxHeight = 100,
    boxSpacing = 20,
    boxMargin = {
        top: 35,
        side: 30
    },
    originalTranslate = {
        1: { x: 0, y: 0 }
    },
    duration = 500,
    boxWidth = 550;

let svg, dotContainer, boxGroup, dotsRect, fact1, fact2, fact3;

function initFactBox() {
    const transform = getTransform(dotContainer);

    boxGroup = svg.append('g')
        .classed('reset box-group', true)
        .attr('transform', translator(transform.x, transform.y) + ' scale(0.5)')
        .attr('opacity', 0);

    boxGroup.append('rect')
        .attr('x', 0)
        .attr('y', 65)
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('width', 555)
        .attr('height', 360)
        .attr('stroke', '#ccc')
        .attr('fill', 'white')
        .attr('filter', 'url(#drop1)');

    boxGroup.append('text')
        .text(`What's GDP?`)
        .attr('font-size', 20)
        .attr('font-weight', 'bold')
        .attr('x', 20)
        .attr('y', 100);

    boxGroup.transition()
        .duration(2000)
        .attr('transform', translator(550, -5) + ' scale(1)')
        .attr('opacity', 1);
}

function text1() {
    const words = fact1.split(' '),
        gdp = words.slice(0, 3).join(' '),
        continuing1 = words.slice(3, 12).join(' '),
        continuing2 = words.slice(12, 27).join(' '),
        continuing3 = words.slice(27, 39).join(' '),
        continuing4 = words.slice(39).join(' '),
        text = boxGroup.append('text')
            .attr('font-size', 16)
            .attr('x', 20)
            .attr('y', 140);

    text.append('tspan')
        .text(gdp)
        .attr('x', 20)
        .attr('font-weight', 'bold');

    text.append('tspan')
        .text(' ' + continuing1);

    text.append('tspan')
        .text(' ' + continuing2)
        .attr('dy', 20)
        .attr('x', 20);

    text.append('tspan')
        .text(' ' + continuing3)
        .attr('dy', 20)
        .attr('x', 20);

    text.append('tspan')
        .text(' ' + continuing4)
        .attr('dy', 20)
        .attr('x', 20);

    return getElementBox(text).height;
}

function text2(y) {
    let t;

    boxGroup.append('text')
        .text(fact2)
        .attr('y', y + 10)
        .attr('x', 120)
        .attr('font-size', 18)
        .attr('font-weight', 'bold');

    t = boxGroup.append('text')
        .attr('y', y + 50)
        .attr('x', 120)
        .attr('font-size', 16)

    t.append('tspan')
        .text(fact3.split(' ').slice(0, 8).join(' '));

    t.append('tspan')
        .text(fact3.split(' ').slice(8).join(' '))
        .attr('dy', 20)
        .attr('x', 120)
}

function text3(y) {
    const t = boxGroup.append('text')
        .attr('font-size', 16)
        .attr('text-anchor', 'middle')
        .attr('y', y + 10)
        .attr('x', boxWidth/2)

    t.append('tspan')
        .text(`Now, let's explore the different `)

    t.append('tspan')
        .text('categories')
        .attr('font-weight', 'bold')

    t.append('tspan')
        .attr('dy', 20)
        .attr('x', boxWidth/2)
        .text('that make up ')

    t.append('tspan')
        .attr('font-weight', 'bold')
        .text('Federal Government Revenue')


}

function drawLine(y) {
    boxGroup.append('line')
        .attr('stroke', '#ddd')
        .attr('x1', 20)
        .attr('y1', y)
        .attr('x2', boxWidth - 20)
        .attr('y2', y)
}

function drawDonut(y) {
    const donutGroup = boxGroup.append('g')
        .attr('transform', translator(60, y + 36));

    createDonut(donutGroup, .174, 90);
}

export function section1_3() {
    let text1Height;

    dotContainer = d3.select('g.' + receiptsConstants.dotContainerClass);

    dotsRect = getElementBox(dotContainer);

    svg = establishContainer();

    initDropShadow();

    initFactBox();

    text1Height = text1();

    drawLine(text1Height + 190);

    drawDonut(text1Height + 210);

    text2(text1Height + 210);

    drawLine(text1Height + 300);

    text3(text1Height + 330);
}

function scrapeFact(selector) {
    const dom = d3.select(selector),
        t = dom.text();

    dom.remove();

    return t;
}

(function scrapeFacts() {
    fact1 = scrapeFact('#gdp-fact-one');
    fact2 = scrapeFact('#gdp-fact-two');
    fact3 = scrapeFact('#gdp-fact-three');
})();
