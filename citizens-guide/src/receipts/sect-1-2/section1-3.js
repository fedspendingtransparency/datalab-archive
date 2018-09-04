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
        .attr('height', 400)
        .attr('stroke', '#ccc')
        .attr('fill', 'white')
        .attr('filter', 'url(#drop1)');        

    boxGroup.transition()
        .duration(2000)
        .attr('transform', translator(550, -5) + ' scale(1)')        
        .attr('opacity', 1)
    }

export function section1_3() {
    dotContainer = d3.select('g.' + receiptsConstants.dotContainerClass);
    
    dotsRect = getElementBox(dotContainer);

    svg = establishContainer();

    initDropShadow();

    initFactBox();
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
