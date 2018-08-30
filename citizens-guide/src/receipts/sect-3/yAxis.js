import { select, selectAll } from 'd3-selection';
import { axisLeft } from 'd3-axis';
import { min, range } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { simplifyBillions } from '../../utils';

const d3 = { select, selectAll, axisLeft, min, range, scaleLinear };

function init(globals) {
    globals.scales.y = d3.scaleLinear().range([globals.height, 0]);

    globals.scales.y.domain([
        d3.min([0, d3.min(globals.data.map(row => d3.min(row.values.map(v => v.amount))))]),
        globals.domainMax,
    ]).nice();
}

function render(globals) {
    const y = {},
        yTicks = d3.range(0, globals.scales.y.domain()[1], 100000000000);

    yTicks.push(globals.scales.y.domain()[1]);

    y.yAxis = d3.axisLeft(globals.scales.y)
        .tickValues(yTicks)
        .tickFormat(simplifyBillions)

    y.yAxisDom = globals.chart.append('g')
        .attr('class', 'axis axis--y')
        .call(y.yAxis);

    y.yAxisDom.selectAll('.tick text')
        .attr('style', function (d, i) {
            return (d % 200000000000) ? 'fill:#eee' : 'fill:#666';
        })

    y.yAxisDom.selectAll('.tick line')
        .attr('stroke-width', 1)
        .attr('stroke', function (d, i) {
            return (d % 200000000000) ? '#ddd' : '#666';
        })
        .attr('x1', -5)
        .attr('x2', 5)
        .each(function (d) {
            if (d % 200000000000 === 0) {
                d3.select(this).remove();
            }
        })

    y.yAxisDom.select('.domain').raise();

    return y;
}

function rescale(duration) {
    this.yAxisDom.transition()
        .duration(duration)
        .call(this.yAxis)
        .ease()
}

export function yAxis(globals) {
    let y;

    init(globals);

    y = render(globals);

    return {
        rescale: rescale.bind(y)
    }
}