import { line } from 'd3-shape';
import { range } from 'd3-array';

const d3 = { line, range };

export function addVerticalShading(globals) {
    const ctrl = [2014, 2016];

    globals.chart.selectAll('.shading')
        .data(ctrl)
        .enter()
        .append('rect')
        .attr('x', function (d) { return globals.x(d) })
        .attr('y', 0)
        .attr('width', globals.width / 4)
        .attr('height', globals.height)
        .attr('fill', '#FAFAFA')
}

export function addHorizontalGridlines(globals) {
    const ctrl = d3.range(0, globals.y.domain()[1], 200000000000).map(d => {
        return [
            [globals.x(2013), globals.y(d)],
            [globals.x(2017), globals.y(d)]
        ]
    })

    globals.chart.append('g').selectAll('path')
        .data(ctrl)
        .enter()
        .append('path')
        .attr('d', d3.line())
        .attr('stroke', '#ddd')
        .attr('stroke-width', 1)
}