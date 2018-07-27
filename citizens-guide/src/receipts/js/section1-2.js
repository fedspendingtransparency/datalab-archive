import { select } from 'd3-selection';
import { line } from 'd3-shape';
import { getElementBox, translator } from '../../utils';
import { dotFactory, establishContainer, receiptsConstants } from './receipts-utils';

const d3 = { select, line };
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
            {x: 0, y: 0},
            {x: 3, y: 0},
            {x: 3, y: height},
            {x: 0, y: height}
        ],
        text = legendBox.append('text')
            .classed('reset', true)
            .attr('text-anchor', 'middle')
            .attr('y', height/2)
            .style('font-size', '18px')

    legendBox.attr('transform', translator(1200 - margin + 5, 70))

    legendBox.append('path')
            .classed('reset', true)
            .attr('d', line(lineData))
            .attr('fill', 'none')
              .attr('stroke', '#dddddd')
              .attr('stroke-width', 1);

    text.append('tspan')
        .text('Total GDP')
        .style('font-weight', 'bold')
        .attr('x', 50)
        .attr('dy', -20)
    
    text.append('tspan')
        .text('$19.4 T')
        .attr('x', 50)
        .attr('dy', 20)
        

}

function setGdpDots() {
    const IncomeHeightOffset = getElementBox(d3.select('g.' + receiptsConstants.incomeContainerClass)).height + 5;

    const gdpContainer = dotContainer.append('g')
        .classed('gdp reset', true)
        .attr('transform', translator(0, IncomeHeightOffset) + ' scale(1.3)')

    let i = 0,
        top = 16000,
        x = receiptsConstants.xStart,
        y = 2;

    for (i; i < top; i++) {
        dotFactory(gdpContainer, x, y, i, 'rgba(214,214,214,0.5)');
        x += receiptsConstants.dotOffset.x;

        if ((i + 1) % receiptsConstants.dotsPerRow === 0) {
            y += receiptsConstants.dotOffset.y;
            x = receiptsConstants.xStart;
        }
    }

    gdpContainer.transition()
        .duration(1000)
        .attr('transform', translator(0, IncomeHeightOffset) + ' scale(1)')
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