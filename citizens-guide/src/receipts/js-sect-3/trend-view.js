import { select, selectAll, create } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { min, max, range } from 'd3-array';
import { line } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { transition } from 'd3-transition';
import { translator, simplifyBillions, getElementBox } from '../../utils';
import { setLabelActive, setLabelInactive, placeLabels } from './labels';
import { showDetail, destroyDetailPane } from './detail-pane';
import { trigger } from './zoomTrigger';
import { addHorizontalGridlines, addVerticalShading } from './ink'
import { processDataForChart } from './trendData';

const d3 = { select, selectAll, create, scaleLinear, min, max, range, line, axisBottom, axisLeft },
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
        top: 40
    };

function setScales(globals) {
    globals.x = d3.scaleLinear().range([0, globals.width])

    globals.y = d3.scaleLinear().range([globals.height, 0]);

    globals.x.domain([2013, 2017]);

    globals.domainMax = d3.max(globals.data.map(row => d3.max(row.values.map(v => v.amount))));

    globals.y.domain([
        d3.min([0, d3.min(globals.data.map(row => d3.min(row.values.map(v => v.amount))))]),
        globals.domainMax,
    ]).nice()
}

function renderScales(globals) {
    const yTicks = d3.range(0, globals.y.domain()[1], 100000000000),
        xAxis = globals.chart.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + globals.height + ')')
            .call(d3.axisBottom(globals.x).tickValues([2013, 2014, 2015, 2016, 2017]).tickFormat(t => parseInt(t)));

    yTicks.push(globals.y.domain()[1]);

    globals.yAxis = d3.axisLeft(globals.y)
        .tickValues(yTicks)
        .tickFormat(simplifyBillions)

    globals.yAxisDom = globals.chart.append('g')
        .attr('class', 'axis axis--y')
        .call(globals.yAxis);

    xAxis.selectAll('text')
        .attr('font-size', 16)
        .attr('dy', 20)

    xAxis.selectAll('.tick line').remove();

    globals.yAxisDom.selectAll('.tick text')
        .attr('style', function (d, i) {
            return (d % 200000000000) ? 'fill:#eee' : 'fill:#666';
        })

    globals.yAxisDom.selectAll('.tick line')
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

    globals.yAxisDom.select('.domain').raise();
}

function lineFn(d, globals) {
    return d3.line()
        .x(function (d) { return globals.x(d.year); })
        .y(function (d) { return globals.y(d.amount); })(d);
}

function renderLines(globals) {
    globals.lines = globals.chart.selectAll('.line')
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

    globals.lines.transition()
        .duration(1000)
        .attr('d', function (d) { return lineFn(d.values, globals); })
        .ease()
}

function nudge() {
    d3.selectAll('.labels > g')
        .sort(function (a, b) {
            a = a.values[0].amount;
            b = b.values[0].amount;

            if (a < b) {
                return 1;
            }

            if (a > b) {
                return -1;
            }

            return 0;
        })
        .each(function (d, i) {
            const self = this,
                initialPause = 2000;

            setTimeout(function () {
                setLabelActive.bind(self)();
            }, initialPause + i * 150)

            setTimeout(function () {
                setLabelInactive.bind(self)();
            }, initialPause + i * 150)
        })
}

function toggleZoom(globals) {
    const duration = 1000,
        yMax = (globals.y.domain()[1] >= globals.domainMax) ? globals.zoomThreshold : globals.domainMax;

    globals.y.domain([0, yMax]);

    globals.yAxisDom.transition()
        .duration(duration)
        .call(globals.yAxis)
        .ease()

    globals.lines.transition()
        .duration(1000)
        .attr('d', function (d) { return lineFn(d.values, globals); })
        .style('stroke', function (d, i) {
            if (yMax === globals.zoomThreshold || d3.max(d.values, r => r.amount) > globals.zoomThreshold) {
                return d.color;
            }

            return '#ddd';
        })
        .ease()

    globals.labelGroups
        .transition()
        .duration(duration)
        .attr('opacity', function (d) {
            if (globals.simple || yMax === globals.zoomThreshold || d3.max(d.values, r => r.amount) > globals.zoomThreshold) {
                return 1;
            }

            return 0;
        })
        .attr('transform', function (d) {
            return translator(-globals.labelPadding, globals.y(d.values[0].amount));
        });
}

function addZoomTrigger(globals) {
    const zoomTrigger = trigger.init(globals);

    zoomTrigger
        .on('click', function () {
            trigger.toggle();
            toggleZoom(globals);
            destroyDetailPane();
        })
}

export function trendView(_data, container, config) {
    const globals = config || {};

    let chartXTranslate;


    globals.height = globals.height || 650;
    globals.width = globals.width || 300;
    globals.labelWidth = 200;
    globals.labelPadding = 60;
    globals.zoomThreshold = 200000000000;
    globals.data = processDataForChart(_data);
    globals.chart = container
        .append('g')
        .classed('trend-chart', true);

    chartXTranslate = globals.labelWidth + globals.labelPadding;

    if (!globals.simple) {
        chartXTranslate += 35; // leave room for the zoom trigger in 'zoomed in' state;
    }

    globals.chart
        .attr('transform', translator(chartXTranslate, margin.top));

    setScales(globals);
    addVerticalShading(globals);
    addHorizontalGridlines(globals);
    renderScales(globals);
    renderLines(globals);
    placeLabels(globals);

    if (!globals.simple) {
        globals.labelGroups
            .attr('style', 'cursor:pointer')
            .on('click', function (d) {
                showDetail(d.name, globals.y(d.values[d.values.length-1].amount) + 48)
            })
            .on('mouseover', setLabelActive)
            .on('mouseout', setLabelInactive);

        nudge();
        addZoomTrigger(globals);
    }
}