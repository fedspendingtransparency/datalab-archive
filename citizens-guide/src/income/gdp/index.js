import { select } from 'd3-selection';
import { transition } from 'd3-transition';
import { section1_1 } from './section1-1';
import { section1_2 } from './section1-2';
import { establishContainer, translator } from '../../utils';
import colors from '../../colors.scss';

const d3 = { select },
    svg = establishContainer(),
    largeDot = svg.append('g')
        .attr('transform', translator(600 - 182, 40)),
    radius = 75;

function phaseTwo() {
    largeDot.selectAll('text')
        .transition()
        .duration(500)
        .attr('opacity', 0)        
        .on('end', function () {
            d3.select(this).remove();
        })
        .ease();

    largeDot.select('circle')
        .attr('opacity', 1)
        .transition()
        .delay(300)
        .duration(1500)
        .attr('opacity', 0)
        .attr('transform', 'scale(0)')
        .on('end', function(){
            d3.select(this).remove();
        })
        .ease()
}

function addText() {
    const explanation = this.largeDot.append('text')
        .attr('y', 54)
        .attr('opacity', 0)
        .attr('transform', translator(radius * 2 + 20, 0))
        .attr('fill', colors.textColorParagraph)

    explanation.append('tspan')
        .attr('x', 0)
        .attr('font-size', 18)
        .text('In this analysis')

    explanation.append('tspan')
        .attr('x', 0)
        .attr('dy', 28)
        .attr('font-size', 24)
        .attr('font-weight', 'bold')
        .text('This Dot')

    explanation.append('tspan')
        .attr('font-size', 24)
        .text(' represents')

    explanation.append('tspan')
        .attr('x', 0)
        .attr('font-size', 24)
        .attr('font-weight', 'bold')
        .attr('dy', 30)
        .text('One Billion Dollars')

    this.largeDot.append('text')
        .text('$1,000,000,000')
        .attr('text-anchor', 'middle')
        .attr('font-size', 18)
        .attr('x', this.radius)
        .attr('y', this.radius + 7)
        .attr('fill', 'white')
        .attr('opacity', 0);

    this.largeDot.selectAll('text')
        .transition()
        .duration(500)
        .attr('opacity', 1)
        .ease();
}

function init() {
    largeDot.append('circle')
        .attr('cx', radius)
        .attr('cy', radius)
        .attr('r', 1)
        .attr('fill', colors.income)
        .transition()
        .duration(1500)
        .attr('r', radius)
        .on('end', addText.bind({
            largeDot: largeDot,
            radius: radius
        }))
        .ease();
}

init();

setTimeout(phaseTwo, 3000);




