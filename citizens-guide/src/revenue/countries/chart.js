import { select, selectAll } from 'd3-selection';
import { min, max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import {translator, simplifyNumber, establishContainer, wordWrap, getElementBox} from '../../utils';
import { axisBottom } from 'd3-axis';
import { transition } from 'd3-transition';
import { ink, placeHorizontalStripes } from './ink';
import { selectCountryInit } from './selectCountry'
import { selectedCountries } from './selectedCountryManager';
import { createDonut } from "../donut";
import colors from '../../colors.scss';
import { setData, prepareData } from './data';
import { renderSortIcon, updateIcons } from './sortIcon';

const d3 = { select, selectAll, min, max, scaleLinear, axisBottom, transition },
    dimensions = {
        chartWidth: 800,
        rowHeight: 72,
        barHeight: 22,
        countryColumnWidth: 210,
        gdpColumnWidth: 140,
        header: 50,
        barYOffset: 3
    },
    addRemoveDuration = 1000,
    scales = {},
    containers = {},
    sortIcons = {};

let xAxis, data, sortFunction, amountIcon, gdpIcon, config, primaryColor;

dimensions.dataWidth = dimensions.chartWidth - dimensions.countryColumnWidth - dimensions.gdpColumnWidth;

function establishContainers() {
    const svg = establishContainer();

    d3.select('#viz').classed('country', true);

    dimensions.totalHeight = dimensions.rowHeight * data.length;
    sizeSvg(800);
    svg.attr('width', dimensions.chartWidth);
    containers.chart = svg.append('g').attr('class', 'master');
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
    const barFadeTime = 1000,
        groups = containers.data.selectAll('g.bar-group')
            .data(data, function (d) { return d.country });

    let enterGroups;

    if (groups.size()) {
        groups.transition()
            .duration(addRemoveDuration)
            .attr('transform', function (d, i) {
                return translator(0, (i * dimensions.rowHeight))
            })
            .ease();
    }

    groups.exit().remove();

    enterGroups = groups.enter()
        .append('g')
        .classed('bar-group', true)
        .attr('transform', function (d, i) {
            return translator(0, i * dimensions.rowHeight)
        })

    if (!enterGroups.size()) {
        return;
    }

    enterGroups.append('rect')
        .attr('width', scales.x(0))
        .attr('height', dimensions.barHeight)
        .attr('x', 0)
        .attr('y', dimensions.rowHeight / 2 - dimensions.barHeight / 2)
        .attr('fill', primaryColor)
        .attr('fill-opacity', 0.5)
        .attr('stroke', primaryColor)
        .attr('stroke-width', 1)
        .transition()
        .duration(barFadeTime)
        .attr('width', function (d) {
            return scales.x(d[config.amountField]);
        })
        .ease();

    enterGroups.append('text')
        .text(function (d) {
            return simplifyNumber(d[config.amountField])
        })
        .attr('font-size', 12)
        .attr('x', function (d) {
            return scales.x(d[config.amountField]) + 10;
        })
        .attr('y', function (d, i) {
            return (dimensions.rowHeight / 2 + dimensions.barHeight / 2 - 8);
        })
        .attr('opacity', 0)
        .transition()
        .delay(barFadeTime)
        .duration(500)
        .attr('opacity', 1)
        .ease();
}

function setScales() {
    const amountVals = data.map(r => r[config.amountField]),
        min = d3.min([0, d3.min(amountVals)]),
        max = d3.max(amountVals) * 1.1;

    scales.x = d3.scaleLinear()
        .domain([min, max]).nice()
        .range([0, dimensions.dataWidth]);
}

function placeCountryLabels() {
    const countryLabels = containers.country.selectAll('text')
        .data(data, function (d) { return d.country });
    const countryBoxWidth = containers.country.select('.drop-shadow-base').attr('width') - 40;

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
        const textHeight = 16; //16 pixel height
        countryLabels.enter()
            .append('text')
            .attr('transform', function (d, i) {
                return translator(0, i * dimensions.rowHeight)
            })
            .text(d => d.country)
            .attr('y', dimensions.rowHeight / 2 + dimensions.barHeight / 2 - 6)
            .attr('x', 20)
            .attr('font-size', textHeight)
            .attr('width', function (d) {
                d.barX1 = d3.max([scales.x(d.amount), scales.x(0)]);
            })
            .each(function (d) {
                const max = countryBoxWidth - d.barX1,
                    selection = d3.select(this),
                    textWidth = getElementBox(selection).width;

                let x, y;
                if (textWidth > max) {
                    x = selection.attr('x');
                    y = selection.attr('y') - textHeight / 2;
                    wordWrap(selection, max);
                    selection.selectAll('tspan').attr('x', x).attr('y',y);
                }
            });
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
                createDonut(d3.select(this), d[config.gdpField] / 100, donutRadius * 2, primaryColor);
            });
    }, timeoutForAdd);
}

function sort() {
    const g = d3.select(this),
        type = g.attr('data-type');

    refreshData(type);

    updateIcons();
}

function placeLegends(config) {
    const labelXPadding = 12;

    containers.legends.append('g')
        .attr('transform', translator(dimensions.countryColumnWidth, 0))
        .classed('legend', true)
        .attr('data-type', config.amountField)
        .append('text')
        .text(config.amountLabel)
        .attr('font-weight', 600)
        .attr('y', 38)
        .attr('x', labelXPadding)
        .attr('font-size', 14);

    containers.legends.append('g')
        .attr('transform', translator(dimensions.countryColumnWidth + dimensions.dataWidth, 0))
        .classed('legend', true)
        .attr('data-type', config.gdpField)
        .append('text')
        .attr('x', labelXPadding)
        .attr('y', 24)
        .attr('font-weight', 600)
        .text(config.amountLabel + ' as')
        .attr('font-size', 14)
        .append('tspan')
        .text('Percent of GDP')
        .attr('dy', 14)
        .attr('x', labelXPadding)

    containers.legends.selectAll('g.legend')
        .on('click', sort)
        .attr('style', 'cursor:pointer')
        .each(function () {
            renderSortIcon(this, null, primaryColor);
        })

    updateIcons();
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
                labels = group.selectAll('text'),
                bars = group.selectAll('rect');

            bars.transition()
                .duration(addRemoveDuration)
                .attr('width', function (d) {
                    return scales.x(d[config.amountField]);
                })
                .ease();

            labels.transition()
                .duration(addRemoveDuration)
                .attr('x', function (d) {
                    return scales.x(d[config.amountField]) + 20;
                })
        });

    return true;
}

export function refreshData(sortField, countriesUpdated) {
    const action = selectedCountries.lastUpdate.action;

    let duration = addRemoveDuration;

    data = setData(sortField, countriesUpdated);
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

export function chartInit(_config) {
    config = _config;

    primaryColor = config.chapter === 'spending' ? colors.colorSpendingPrimary : colors.income;

    selectedCountries.set(config.defaultCountries);
    data = prepareData(config);
    establishContainers();
    ink(containers, dimensions, data.length);
    setScales();
    addBarGroups();
    placeCountryLabels();
    placeGdpFigures();
    placeLegends(config);
    selectCountryInit();
}