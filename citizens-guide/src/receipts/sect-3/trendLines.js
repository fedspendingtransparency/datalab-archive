import { selectAll } from 'd3-selection';
import { line } from 'd3-shape';
import { max } from 'd3-array';

const d3 = { selectAll, line, max },
    colors = [
        '#2E8540',
        '#49A5B6',
        '#F5A623',
        '#852E6C',
        '#853F2E',
        '#D0021B',
        '#2E8540',
        '#49A5B6',
        '#F5A623',
        '#852E6C',
        '#853F2E',
        '#D0021B'
    ];

function lineFn(d, globals) {
    return d3.line()
        .x(function (d) { return globals.scales.x(d.year); })
        .y(function (d) { return globals.scales.y(d.amount); })(d);
}

function rescale(globals, duration) {
    this.transition()
        .duration(duration)
        .attr('d', function (d) { return lineFn(d.values, globals); })
        .style('stroke', function (d, i) {
            if (globals.zoomState === 'in' || d3.max(d.values, r => r.amount) > globals.zoomThreshold) {
                return d.color;
            }

            return '#ddd';
        })
        .ease()
}

export function trendLines(globals) {
    const trendLines = globals.chart.selectAll('.line')
        .data(globals.data)
        .enter()
        .append('path')
        .attr('class', 'line')
        .attr('d', function (d) {
            return lineFn(d.values.map(r => {
                return {
                    year: r.year,
                    amount: 0
                }
            }), globals);
        })
        .style('fill', 'none')
        .style('stroke', function (d, i) {
            d.color = colors[i];
            return (globals.simple || d3.max(d.values, r => r.amount) > globals.zoomThreshold) ? d.color : '#ddd';
        })
        .attr('stroke-width', 2)

    rescale.bind(trendLines)(globals, 1000);

    return {
        rescale: rescale.bind(trendLines)
    }
}