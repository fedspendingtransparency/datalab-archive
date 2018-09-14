import { select, selectAll } from 'd3-selection';
import { min, max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { translator, simplifyNumber, establishContainer } from '../../utils';
import { axisBottom } from 'd3-axis';
import { transition } from 'd3-transition';
import { ink, placeHorizontalStripes } from './ink';
import { selectCountryInit } from './selectCountry'
import { selectedCountries } from './selectedCountryManager';
import { createDonut } from "../donut";
import colors from '../../colors.scss';
import { setData } from './data';
import { config } from './incomeCountryConfig.js';

const d3 = { select, selectAll, min, max, scaleLinear, axisBottom, transition },
    dimensions = {
        chartWidth: 800,
        rowHeight: 72,
        barHeight: 22,
        countryColumnWidth: 210,
        gdpColumnWidth: 130,
        header: 50,
        barYOffset: 3
    },
    addRemoveDuration = 1000,
    scales = {},
    containers = {},
    chartedData = [
        {
            key: 'income',
            config: {
                data: 'income_usd',
                class: 'receipts',
                stroke: colors.income,
                fill: colors.income,
                yOffset: 3
            }
        }
    ];

let xAxis, data, sortFunction;

dimensions.dataWidth = dimensions.chartWidth - dimensions.countryColumnWidth - dimensions.gdpColumnWidth;

function establishContainers(container) {
    containers.chart = container.append('g').attr('class', 'master');
    containers.data = containers.chart.append('g').attr('transform', translator(dimensions.countryColumnWidth, dimensions.header));
    containers.country = containers.chart.append('g').attr('transform', translator(0, dimensions.header));
    containers.gdp = containers.chart.append('g').attr('transform', translator(dimensions.countryColumnWidth + dimensions.dataWidth, dimensions.header));
    containers.legends = containers.chart.append('g').classed('legends', true);
}

function addBarLabels(g, data, keys) {
    const text = g.selectAll('text')
        .data(keys.map(k => k.config.data))
        .enter()
        .append('text')
        .text(function (d) {
            return simplifyNumber(data[d])
        })
        .attr('font-size', 12)
        .attr('x', function (d) {
            return scales.x(data[d]) + 10;
        })
        .attr('y', function (d, i) {
            return (dimensions.rowHeight / 2 + dimensions.barHeight / 2 - 8);
        })
        .attr('opacity', 0)

    text.transition()
        .duration(500)
        .attr('opacity', 1)
        .ease();
}

function addBarGroups() {
    const groups = containers.data.selectAll('g.bar-group')
        .data(data, function (d) { return d.country });

    if (groups.size()) {
        groups.transition()
            .duration(addRemoveDuration)
            .attr('transform', function (d, i) {
                return translator(0, (i * dimensions.rowHeight))
            })
            .ease();
    }

    groups.exit().remove();

    groups.enter()
        .append('g')
        .classed('bar-group', true)
        .attr('transform', function (d, i) {
            return translator(0, i * dimensions.rowHeight)
        })
        .each(drawBars)
}

function drawBars(data) {
    const transitionDuration = 1000,
        group = d3.select(this),
        keys = chartedData,
        bars = group.selectAll('rect')
            .data(keys)
            .enter()
            .append('rect')
            .attr('width', scales.x(0))
            .attr('height', dimensions.barHeight)
            .attr('x', 0)
            .attr('y', function (d, i) {
                return dimensions.rowHeight / 2 - dimensions.barHeight / 2;
            })
            .attr('fill', function (d) {
                return d.config.fill;
            })
            .attr('fill-opacity', 0.5)
            .attr('stroke', function (d) {
                return d.config.stroke;
            })
            .attr('stroke-width', 1);

    bars.transition()
        .duration(transitionDuration)
        .attr('width', function (d) {
            return scales.x(data[d.config.data]);
        })
        .ease();

    setTimeout(function () {
        addBarLabels(group, data, keys);
    }, transitionDuration);
}

function setScales() {
    const receiptsVals = data.map(r => r.income_usd),
        gdpVals = data.map(r => r.gdp),
        min = d3.min([0, d3.min(receiptsVals)]),
        max = d3.max(receiptsVals) * 1.1;

    scales.x = d3.scaleLinear()
        .domain([min, max]).nice()
        .range([0, dimensions.dataWidth]);
}

function placeCountryLabels() {
    const countryLabels = containers.country.selectAll('text')
        .data(data, function (d) { return d.country });

    let timeoutForAdd = 0;

    if (countryLabels.size()) {
        timeoutForAdd = 500;

        countryLabels.transition()
            .duration(addRemoveDuration)
            .attr('transform', function (d, i) {
                return translator(0, (i * dimensions.rowHeight))
            })
            .ease();
    }

    countryLabels.exit().remove();

    setTimeout(function () {
        countryLabels.enter()
            .append('text')
            .attr('transform', function (d, i) {
                return translator(0, i * dimensions.rowHeight)
            })
            .text(d => d.country)
            .attr('y', dimensions.rowHeight / 2 + dimensions.barHeight / 2 - 6)
            .attr('x', 20)
            .attr('font-size', 16);
    }, timeoutForAdd)

}
function placeGdpFigures() {
    const donutRadius = dimensions.rowHeight / 2 - 10,
        gdpG = containers.gdp.selectAll('.donut-container')
            .data(data, function (d) {
                return d.country
            });

    let timeoutForAdd = 0;

    if (gdpG.size()) {
        timeoutForAdd = 500;

        gdpG.transition()
            .duration(addRemoveDuration)
            .attr('transform', function (d, i) {
                return translator(dimensions.gdpColumnWidth / 2 - donutRadius, i * dimensions.rowHeight + dimensions.rowHeight / 2 - donutRadius);
            })
            .ease();

    }

    gdpG.exit().remove();

    setTimeout(function () {
        gdpG.enter()
            .append('g')
            .attr('class', 'donut-container')
            .attr('transform', function (d, i) {
                return translator(dimensions.gdpColumnWidth / 2 - donutRadius, i * dimensions.rowHeight + dimensions.rowHeight / 2 - donutRadius);
            })
            .each(function (d) {
                createDonut(d3.select(this), d.income_gdp, donutRadius * 2, colors.colorPrimary);
            });
    }, timeoutForAdd);
}

function sort() {
    const g = d3.select(this),
        type = g.attr('data-type')

    refreshData(type);
}

function placeLegends() {
    const labelXPadding = 12;

    containers.legends.append('g')
        .attr('transform', translator(dimensions.countryColumnWidth, 0))
        .classed('legend', true)
        .attr('data-type', config.amountField)
        .append('text')
        .text('Income')
        .attr('font-weight', 'bold')
        .attr('y', 36)
        .attr('x', labelXPadding)
        .attr('font-size', 12);

    containers.legends.append('g')
        .attr('transform', translator(dimensions.countryColumnWidth + dimensions.dataWidth, 0))
        .classed('legend', true)
        .attr('data-type', config.gdpField)
        .append('text')
        .attr('x', labelXPadding)
        .attr('y', 26)
        .attr('font-weight', 'bold')
        .text('Income as')
        .attr('font-size', 12)
        .append('tspan')
        .text('Percent of GDP')
        .attr('dy', 12)
        .attr('x', labelXPadding);

    containers.legends.selectAll('g.legend')
        .on('click', sort)
        .attr('style', 'cursor:pointer')
}

function sizeSvg(transitionTime, delay) {
    delay = delay || 0;
    establishContainer().transition().delay(delay).duration(transitionTime).attr('height', dimensions.header + data.length * dimensions.rowHeight + 30);
}

function repositionXAxis() {
    containers.chart.selectAll('.drop-shadow-base').transition()
        .duration(addRemoveDuration)
        .attr('height', dimensions.totalHeight);
}

function rescale() {
    const previousMax = scales.x.domain()[1];

    setScales();

    if (previousMax === scales.x.domain()[1]) {
        return;
    }

    containers.data.selectAll('g.bar-group')
        .each(function (data) {
            const group = d3.select(this),
                keys = chartedData.map(d => d.key).sort(),
                labels = group.selectAll('text'),
                bars = group.selectAll('rect');

            bars.transition()
                .duration(addRemoveDuration)
                .attr('width', function (d) {
                    return scales.x(data[d.config.data]);
                })
                .ease();

            labels.transition()
                .duration(addRemoveDuration)
                .attr('x', function (d) {
                    return scales.x(data[d]) + 20;
                })
        });

    return true;
}

export function refreshData(sortField) {
    const action = selectedCountries.lastUpdate.action;

    let duration = addRemoveDuration;

    data = setData(sortField);
    dimensions.totalHeight = dimensions.rowHeight * data.length;


    if (action === 'add') {
        sizeSvg(addRemoveDuration);
        duration = (rescale()) ? duration : 0;

        setTimeout(function () {
            repositionXAxis();
            addBarGroups();
            placeCountryLabels();
            placeGdpFigures();
            placeHorizontalStripes(data.length, dimensions);
        }, duration)
    } else {
        addBarGroups();
        placeCountryLabels();
        placeGdpFigures();

        duration = (rescale()) ? duration : 0;

        setTimeout(function () {
            sizeSvg(300, addRemoveDuration);
            repositionXAxis();
            placeHorizontalStripes(data.length, dimensions);
        }, duration)
    }
}

export function chartInit(container) {
    container.attr('width', dimensions.chartWidth);

    data = setData();
    dimensions.totalHeight = dimensions.rowHeight * data.length;
    sizeSvg(800);
    establishContainers(container);
    ink(containers, dimensions, data.length);
    setScales();
    addBarGroups();
    placeCountryLabels();
    placeGdpFigures();
    placeLegends();
    selectCountryInit();
}