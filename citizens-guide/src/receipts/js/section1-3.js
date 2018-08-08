import { select } from 'd3-selection';
import { createDonut } from './donut';
import { getElementBox, translator } from '../../utils';
import { receiptsConstants } from './receipts-utils';
import { establishContainer } from '../../utils';

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

let svg, boxGroup,
    boxOne,
    boxTwo,
    boxThree;

function setInactive(container) {
    const id = container.attr('data-box-id'),
        text = container.selectAll('text'),
        thisOriginalTranslate = originalTranslate[id];

    container.transition()
        .duration(duration)
        .attr('opacity', 0.8)
        .attr('transform', translator(thisOriginalTranslate.x, thisOriginalTranslate.y) + ' scale(1)')

    if (text.size() > 0) {
        container.selectAll('text').transition()
            .duration(duration)
            .attr('opacity', 0.5)
            .ease();
    }
}

function setActive(number) {
    const boxes = [
        boxOne,
        boxTwo,
        boxThree
    ],
        active = boxes[number - 1],
        inactive = boxes.filter((box, i) => { return i !== number - 1 }),
        thisOriginalTranslate = originalTranslate[number],
        xOffset = boxWidth * -0.2 / 2,
        yOffset = boxHeight * -0.2 / 2;

    active.transition()
        .duration(duration)
        .attr('opacity', 1)
        .attr('transform', translator(thisOriginalTranslate.x + xOffset, thisOriginalTranslate.y + yOffset) + ' scale(1.2)')
        .ease();

    active.selectAll('text').transition()
        .duration(duration)
        .attr('opacity', 1)
        .ease();

    inactive.forEach(setInactive);
}

function initTextElement(container) {
    return container.append('text')
        .attr('x', boxMargin.side)
        .attr('y', boxMargin.top)
        .attr('opacity', 0.5)
        .style('font-size', '25px');
}

function buildRoundedRectangle(container) {
    container.append('rect')
        .attr('rx', 5)
        .attr('ry', 5)
        .attr('width', boxWidth)
        .attr('height', boxHeight)
        .attr('fill', 'white')
        .attr('stroke', 'none')
}

function createBoxOne() {
    let text;

    boxOne = boxGroup.append('g')
        .attr('data-box-id', '1');

    setInactive(boxOne);
    buildRoundedRectangle(boxOne);

    text = initTextElement(boxOne);

    text
        .append('tspan')
        .attr('x', boxMargin.side)
        .attr('y', boxMargin.top)
        .text('In FY 2017, the Total Gross Domestic')

    text
        .append('tspan')
        .attr('x', boxMargin.side)
        .attr('dy', 30)
        .text('Product was ')

    text
        .append('tspan')
        .style('font-weight', 'bold')
        .text('$19.6 Trillion')
}

function createBoxTwo() {
    let text, donutBox;

    originalTranslate[2] = {
        x: 0,
        y: boxHeight + boxSpacing
    };

    boxTwo = boxGroup.append('g')
        .attr('data-box-id', '2')
        .attr('transform', translator(originalTranslate[2].x, originalTranslate[2].y));

    setInactive(boxTwo);
    buildRoundedRectangle(boxTwo);

    donutBox = boxTwo.append('g')
        .attr('transform', translator(62, 45));
    createDonut(donutBox, 17.4, 60);

    text = initTextElement(boxTwo);

    text
        .append('tspan')
        .attr('x', boxMargin.side + 70)
        .attr('y', boxMargin.top)
        .text('Total Government Revenue is')

    text
        .append('tspan')
        .attr('x', boxMargin.side + 70)
        .attr('dy', 30)
        .style('font-weight', 'bold')
        .text('17.4 % of Gross Domestic Product.')

}

function createBoxThree() {
    let text;

    originalTranslate[3] = {
        x: 0,
        y: (boxHeight + boxSpacing) * 2
    };

    boxThree = boxGroup.append('g')
        .attr('data-box-id', '3')
        .attr('transform', translator(originalTranslate[3].x, originalTranslate[3].y));

    setInactive(boxThree);
    buildRoundedRectangle(boxThree);

    text = initTextElement(boxThree);

    text
        .append('tspan')
        .attr('x', boxMargin.side)
        .attr('y', boxMargin.top)
        .text(`Let's inspect `)

    text
        .append('tspan')
        .style('font-weight', 'bold')
        .text('Government Revenue')

    text
        .append('tspan')
        .attr('x', boxMargin.side)
        .attr('dy', 30)
        .text('deeper into ')

    text
        .append('tspan')
        .style('font-weight', 'bold')
        .text('Cateogories')
}

export function section1_3() {
    svg = establishContainer();
    boxGroup = svg.append('g')
        .classed('reset', true)
        .attr('transform', translator(600 - (boxWidth / 2), 100))
        .attr('opacity', 0);

    boxGroup.transition()
        .duration(1000)
        .attr('opacity', 1)
        .ease()

    createBoxOne();
    createBoxTwo();
    createBoxThree();

    setTimeout(setActive, 500, 1);

    return [
        function(){
            setActive(2);
        },
        function(){
            setActive(3);
        }
    ];
}