import { select, selectAll } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { min, max, range } from 'd3-array';
import { line } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { transition } from 'd3-transition';
import { translator, simplifyBillions, wordWrap, getElementBox } from '../../utils';
import { setLabelActive, setLabelInactive } from './labelStates';

const d3 = { select, selectAll, scaleLinear, min, max, range, line, axisBottom, axisLeft },
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
    ],
    margin = {
        left: 400,
        top: 10
    },
    height = 700,
    width = 300,
    x = d3.scaleLinear().range([0, width]),
    y = d3.scaleLinear().range([height, 0]),
    lineFn = d3.line()
        .x(function (d) { return x(d.year); })
        .y(function (d) { return y(d.amount); });

const threshold = 200000000000;

let g,
    yTicks,
    data;

function setScales() {
    x.domain([2013, 2017]);

    y.domain([
        d3.min([0, d3.min(data.map(row => d3.min(row.values.map(v => v.amount))))]),
        d3.max(data.map(row => d3.max(row.values.map(v => v.amount)))),
    ]).nice()
}

function processData(_data) {
    const valueKeys = Object.keys(_data[0]).filter(k => {
        return k.includes('fy') && !k.includes('percent')
    });

    data = _data.map(row => {
        return {
            name: row.activity,
            values: valueKeys.map(k => {
                return {
                    year: Number(k.replace('fy', '20')),
                    amount: row[k]
                }
            })
        }
    })
}

function renderScales() {
    const yTicks = d3.range(0, y.domain()[1], 100000000000),
        xAxis = g.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + height + ')')
            .call(d3.axisBottom(x).tickValues([2013, 2014, 2015, 2016, 2017]).tickFormat(t => parseInt(t)));

    yTicks.push(y.domain()[1]);

    const yAxis = g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(y)
            .tickValues(yTicks)
            .tickFormat(simplifyBillions)
        );

    xAxis.selectAll('text')
        .attr('font-size', 16)
        .attr('dy', 20)

    xAxis.selectAll('.tick line').remove();

    yAxis.selectAll('.tick text')
        .attr('style', function (d, i) {
            return (d % 200000000000) ? 'fill:#eee' : 'fill:#666';
        })

    yAxis.selectAll('.tick line')
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

    yAxis.select('.domain').raise();
}

function addVerticalShading() {
    const ctrl = [2014, 2016];

    g.selectAll('.shading')
        .data(ctrl)
        .enter()
        .append('rect')
        .attr('x', function (d) { return x(d) })
        .attr('y', 0)
        .attr('width', width / 4)
        .attr('height', height)
        .attr('fill', '#FAFAFA')
}

function addHorizontalGridlines() {
    const ctrl = d3.range(0, y.domain()[1], 200000000000).map(d => {
        return [
            [x(2013), y(d)],
            [x(2017), y(d)]
        ]
    })

    g.append('g').selectAll('path')
        .data(ctrl)
        .enter()
        .append('path')
        .attr('d', d3.line())
        .attr('stroke', '#ddd')
        .attr('stroke-width', 1)
}

function renderLines() {
    const city = g.selectAll('.lines')
        .data(data)
        .enter().append('g')
        .attr('class', 'lines');

    const lines = city.append('path')
        .attr('class', 'line')
        .attr('d', function (d) {
            return lineFn(d.values.map(r => {
                return {
                    year: r.year,
                    amount: 0
                }
            }));
        })
        .style('fill', 'none')
        .style('stroke', function (d, i) {
            d.color = colors[i];
            return (d3.max(d.values, r => r.amount) < threshold) ? '#ddd' : colors[i];
        })
        .attr('stroke-width', 2)

    lines.transition()
        .duration(1000)
        .attr('d', function (d) { return lineFn(d.values); })
        .ease()
}

function placeLabels() {
    const filteredData = data.filter(d => (d3.max(d.values, r => r.amount) > threshold));

    const labelGroups = g.append('g')
        .classed('labels', true)
        .selectAll('g')
        .data(filteredData)
        .enter()
        .append('g')
        .attr('style', 'cursor:pointer')
        .attr('transform', function (d) {
            return translator(-80, y(d.values[0].amount));
        })

    labelGroups.append('text')
        .text(function (d) {
            return d.name;
        })
        .attr('text-anchor', 'end')
        .each(function (d) {
            const t = d3.select(this);

            wordWrap(t, 200);
        })

    labelGroups
        .on('mouseover', setLabelActive)
        .on('mouseout', setLabelInactive);


    // color bar
    labelGroups.append('rect')
        .classed('color-bar', true)
        .attr('width', 10)
        .attr('height', function () {
            return this.previousSibling.getBoundingClientRect().height + 20;
        })
        .attr('x', 5)
        .attr('y', -25)
        .attr('fill', function (d) {
            return d.color;
        })
        .each(function () {
            d3.select(this).lower();
        })

    // ghost rectangle
    labelGroups.append('rect')
        .attr('width', function () {
            return this.previousSibling.getBoundingClientRect().width + 30;
        })
        .attr('height', function () {
            return this.previousSibling.getBoundingClientRect().height + 20;
        })
        .attr('x', function () {
            return 0 - this.previousSibling.getBoundingClientRect().width - 15;
        })
        .attr('y', function () {
            return - 25;
        })
        .attr('fill', function (d) {
            return 'white';
        })
        .each(function () {
            d3.select(this).lower();
        })
}


export function trendView(_data, container, config) {
    g = container.append('g').attr('transform', translator(margin.left, margin.top));

    processData(_data);
    setScales();
    addVerticalShading();
    addHorizontalGridlines();
    renderScales();
    renderLines();
    placeLabels();

    console.log('trend view data', data)
}