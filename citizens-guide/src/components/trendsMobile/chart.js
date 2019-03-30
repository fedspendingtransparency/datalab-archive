import { max, min, extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { line } from 'd3-shape';
import { getElementBox, translator } from '../../utils';

const d3 = { max, min, extent, scaleLinear, line },
    idealHeight = 800,
    margin = [5, 7, 20, 7],
    scaleX = d3.scaleLinear(),
    scaleY = d3.scaleLinear().range([idealHeight, 0]);

let chartWidth, containerScope;

function lineFn(d) {
    return d3.line()
        .x(function (d) { return scaleX(d.year); })
        .y(function (d) { return scaleY(d.amount); })(d);
}

function setYScale(data) {
    const extent = d3.extent(data.map(r => {
        return r.values.map(v => v.amount)
    }).reduce((a, c) => a.concat(c), []));

    if (extent[0] > 0) {
        extent[0] = 0;
    }

    scaleY.domain(extent);
}

function setXScale() {
    chartWidth = getElementBox(containerScope.select('.chart-row__chart')).width;

    scaleX.range([0, chartWidth - margin[1] - margin[3]])
        .domain([2014, 2018]);
}

function createSvg(container, d) {
    const dataExtent = d3.extent(d.map(r => r.amount)),
        chartHeight = Math.ceil(scaleY(dataExtent[0]) - scaleY(dataExtent[1]));

    return container.append('svg')
        .attr('width', chartWidth)
        .attr('height', chartHeight + margin[0] + margin[2]);
}

function drawLine(svg, d, config) {
    const max = d3.max(d.map(r => r.amount)),
        shift = scaleY(scaleY.domain()[1]) - scaleY(max),
        lineG = svg.append('g').attr('transform', translator(margin[3], shift + margin[0]));

    lineG.append('path')
        .attr('class', 'trend-line')
        .attr('d', function (d) {
            return lineFn(d.values);
        })
        .style('fill', 'none')
        .style('stroke', config.baseColor)
        .attr('stroke-width', 2);

    placeDots(lineG, config);
    drawAxis(lineG)
}

function placeDots(lineG, config) {
    const d = lineG.data()[0].values;

    lineG.selectAll('circle')
        .data(d)
        .enter()
        .append('circle')
        .attr('stroke', config.baseColor)
        .attr('fill', 'white')
        .attr('r', 4)
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('transform', function (d) {
            return translator(scaleX(d.year), scaleY(d.amount));
        })
}

function drawAxis(g) {
    const d = g.data()[0].values,
        min = d3.min(d.map(r => r.amount));

    g.append('line')
        .attr('stroke', '#ccc')
        .attr('stroke-width', '1')
        .attr('x1', scaleX(2014))
        .attr('y1', scaleY(min) + 9)
        .attr('x2', scaleX(2018))
        .attr('y2', scaleY(min) + 9)
}

export function drawChart(container, d, config) {
    let svg;

    if (!chartWidth) {
        setXScale();
    }

    svg = createSvg(container, d);

    drawLine(svg, d, config);
}

export function initScale(data, container) {
    containerScope = container;

    setYScale(data);
}