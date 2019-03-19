import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { establishContainer, translator, fadeAndRemove } from '../../utils';
import colors from '../../colors.scss';
import { chartWidth } from './widthManager';
import { triggerInfoBox } from '../../infoBox';

const d3 = { select, selectAll },
    introWidth = 365,
    radius = 75;

let svg, 
    largeDot, 
    billion, 
    explanation,
    callback, 
    config = {};

function buildLegend() {
    const g = d3.select('.income-dot-legend'),
        duration = 2000,
        w = 126,
        xOffset = 4;

    fadeAndRemove(explanation, 1000);
    fadeAndRemove(billion, 500);

    setTimeout(callback, 1000);

    g.transition()
        .duration(duration)
        .attr('transform', translator(xOffset, 14));

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
        .attr('xlink:href', '/assets/ffg/icons/anecdote.svg')
        .attr('style', 'cursor:pointer')
        .on('click', triggerInfoBox)
        .transition()
        .delay(duration * 0.7)
        .duration(duration / 2)
        .attr('opacity', 1)
        .ease();
}

function addText() {
    const duration = 500;

    explanation = this.largeDot.append('text')
        .attr('y', 54)
        .attr('opacity', 0)
        .attr('transform', translator(this.radius * 2 + 20, 0))
        .attr('fill', colors.textColorParagraph)

    explanation.append('tspan')
        .attr('x', 0)
        .attr('font-size', 18)
        .text('In this analysis')

    explanation.append('tspan')
        .attr('x', 0)
        .attr('dy', 28)
        .attr('font-size', 24)
        .attr('font-weight', '600')
        .text('One Dot')

    explanation.append('tspan')
        .attr('font-size', 24)
        .text(' represents')

    explanation.append('tspan')
        .attr('x', 0)
        .attr('font-size', 24)
        .attr('font-weight', '600')
        .attr('dy', 30)
        .text('One Billion Dollars')

    billion = this.largeDot.append('text')
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


    setTimeout(buildLegend, 2000);
}

function initDot() {
    largeDot.append('circle')
        .attr('cx', radius)
        .attr('cy', radius)
        .attr('r', 1)
        .attr('fill', config.deficitColor)
        .transition()
        .duration(1500)
        .attr('r', radius)
        .on('end', addText.bind({
            largeDot: largeDot,
            radius: radius
        }))
        .ease();
}

export function startLegendAnimation(_config, _callback) {
    const introX = chartWidth < introWidth ? 0 : (chartWidth / 2) - (introWidth / 2);

    config = _config || config;
    svg = establishContainer();
    callback = _callback;
    largeDot = svg.append('g')
        .classed('income-dot-legend', true)
        .attr('transform', translator(introX, 40));

    initDot();
}