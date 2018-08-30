import { axisBottom } from 'd3-axis';
import { scaleLinear } from 'd3-scale';

const d3 = { axisBottom, scaleLinear }

function init(globals) {
    globals.scales.x = d3.scaleLinear()
        .range([0, globals.width])
        .domain([2013, 2017]);
}

function render(globals) {
    const x = {};
    
    x.xAxis = d3.axisBottom(globals.scales.x)
        .tickValues([2013, 2014, 2015, 2016, 2017])
        .tickFormat(t => parseInt(t))

    x.xAxisDom = globals.chart.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + globals.height + ')')
        .call(x.xAxis);

    x.xAxisDom.selectAll('text')
        .attr('font-size', 16)
        .attr('dy', 20)

    x.xAxisDom.selectAll('.tick line').remove();

    return x;
}

function rescale(globals, duration) {
    const x = this;

    x.xAxisDom.transition()
        .duration(duration)
        .call(x.xAxis)
        .ease();
}

export function xAxis(globals) {
    let x;
    
    init(globals);
    
    x = render(globals);
    
    return {
        rescale: rescale.bind(x)
    }
}