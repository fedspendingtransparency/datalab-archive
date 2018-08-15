import { select, selectAll } from 'd3-selection';
import { min, max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { translator, simplifyNumber } from '../../utils';
import { axisBottom } from 'd3-axis';
import { transition } from 'd3-transition';
import { ink } from './ink';

const d3 = { select, selectAll, min, max, scaleLinear, axisBottom, transition },
    dimensions = {
        rowHeight: 72,
        barHeight: 16,
        countryColumnWidth: 210,
        gdpColumnWidth: 130,
        header: 50
    },
    scales = {},
    containers = {},
    map = {
        income: {
            data: 'receipts',
            class: 'receipts',
            stroke: '#2E8540',
            fill: 'rgba(46,133,64,0.5)',
            yOffset: 3,
            legend: 'Income'
        },
        gdp: {
            data: 'gdp',
            class: 'gdp',
            stroke: '#4A90E2',
            fill: 'rgba(74,144,226,0.5)',
            yOffset: 0 - dimensions.barHeight - 3,
            legend: 'GDP - Gross Domestic Product'
        }
    };

let data;

dimensions.dataWidth = 1200 - dimensions.countryColumnWidth - dimensions.gdpColumnWidth;

function establishContainers(container) {
    containers.chart = container.append('g');
    containers.data = containers.chart.append('g').attr('transform', translator(dimensions.countryColumnWidth, dimensions.header));
    containers.country = containers.chart.append('g').attr('transform', translator(0, dimensions.header));
    containers.gdp = containers.chart.append('g').attr('transform', translator(dimensions.countryColumnWidth + dimensions.dataWidth, dimensions.header));
    containers.legends = containers.chart.append('g');
}

function addText() {
    const props = this,
        text = containers.data.selectAll('text' + props.class)
            .data(data)
            .enter()
            .append('text')
            .classed(props.class, true)
            .text(function (d) {
                return simplifyNumber(d[props.data])
            })
            .attr('font-size', 12)
            .attr('x', function (d) {
                return scales.x(d[props.data]) + 20;
            })
            .attr('y', function (d, i) {
                return i * dimensions.rowHeight + dimensions.rowHeight / 2 + props.yOffset + 12;
            })
            .attr('opacity', 0)

    text.transition()
        .duration(500)
        .attr('opacity', 1)
        .ease();
}

function drawBars(which) {
    const props = map[which],
        transitionDuration = 1000,
        bars = containers.data.selectAll('rect.' + props.class)
            .data(data)
            .enter()
            .append('rect')
            .classed(props.class, true)
            .attr('width', scales.x(0))
            .attr('height', dimensions.barHeight)
            .attr('x', 0)
            .attr('y', function (d, i) {
                return i * dimensions.rowHeight + dimensions.rowHeight / 2 + props.yOffset;
            })
            .attr('fill', props.fill)
            .attr('stroke', props.stroke);

    bars.transition()
        .duration(transitionDuration)
        .attr('width', function (d) {
            return scales.x(d[props.data])
        })
        .ease();

    setTimeout(addText.bind(props), transitionDuration);
}

function setScales() {
    const receiptsVals = data.map(r => r.receipts),
        gdpVals = data.map(r => r.gdp),
        min = d3.min([0, d3.min(receiptsVals.concat(gdpVals))]),
        max = d3.max(receiptsVals.concat(gdpVals)) + 2000000000000;

    scales.x = d3.scaleLinear()
        .domain([min, max]).nice()
        .range([0, dimensions.dataWidth]);
}

function drawXAxis() {
    const xAxis = d3.axisBottom(scales.x)
        // .tickValues(yTicks)
        .tickFormat(function (n) {
            if (n === 0) {
                return 0
            } else {
                return simplifyNumber(n);
            }
        })

    let axisGroup = containers.data.append('g')
        .attr('transform', translator(0, dimensions.totalHeight))
        .call(xAxis);

    axisGroup.selectAll('.tick line')
        .attr('y1', 0 - dimensions.totalHeight)
        .attr('stroke', '#eee');

    axisGroup.selectAll('.domain').remove();
}

function placeCountryLabels() {
    containers.country.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .text(function (d) {
            return d.country;
        })
        .attr('y', function (d, i) {
            return i * dimensions.rowHeight + dimensions.rowHeight / 2 + 8;
        })
        .attr('x', 20)
        .attr('font-size', 16)
}

function placeGdpFigures() {
    containers.gdp.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .text(function (d) {
            return d.receipts_gdp * 100 + ' %';
        })
        .attr('y', function (d, i) {
            return i * dimensions.rowHeight + dimensions.rowHeight / 2 + 8;
        })
        .attr('x', 50)
        .attr('font-size', 16)
}

function placeLegends() {
    const keys = Object.keys(map).sort(),
        legendSpacing = 240;

    containers.legends.selectAll('rect.legend')
        .data(keys)
        .enter()
        .append('rect')
        .classed('legend', true)
        .attr('width', dimensions.barHeight)
        .attr('height', dimensions.barHeight)
        .attr('x', function (d, i) {
            return dimensions.countryColumnWidth + 20 + i * legendSpacing;
        })
        .attr('y', 15)
        .attr('stroke', function (d) {
            return map[d].stroke;
        })
        .attr('fill', function (d) {
            return map[d].fill;
        })

    containers.legends.selectAll('text.legend')
        .data(keys)
        .enter()
        .append('text')
        .text(function (d) {
            return map[d].legend;
        })
        .attr('font-size', 12)
        .classed('legend', true)
        .attr('x', function (d, i) {
            return dimensions.countryColumnWidth + dimensions.barHeight + 30 + i * legendSpacing;
        })
        .attr('y', 27)

    containers.legends.append('text')
        .text('Federal Income as')
        .attr('text-anchor', 'middle')
        .attr('x', 1200 - dimensions.gdpColumnWidth / 2)
        .attr('y', 26)
        .attr('font-size', 12)        
        .append('tspan')
        .text('Percent of GDP')
        .attr('dy', 12)
        .attr('x', 1200 - dimensions.gdpColumnWidth / 2)
}

export function chartInit(_data, container) {
    data = _data;

    dimensions.totalHeight = dimensions.rowHeight * data.length;

    console.log(data);

    establishContainers(container);
    ink(containers, dimensions, data.length);
    setScales();
    drawXAxis();
    drawBars('income');
    drawBars('gdp');
    placeCountryLabels();
    placeGdpFigures();
    placeLegends();
}