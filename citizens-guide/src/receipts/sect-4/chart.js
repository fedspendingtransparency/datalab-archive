import { select, selectAll } from 'd3-selection';
import { min, max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { translator, simplifyNumber, establishContainer } from '../../utils';
import { axisBottom } from 'd3-axis';
import { transition } from 'd3-transition';
import { ink } from './ink';
import { selectCountryInit } from './selectCountry'
import { masterData } from '.';
import { selectedCountries } from './selectedCountryManager';

const d3 = { select, selectAll, min, max, scaleLinear, axisBottom, transition },
    dimensions = {
        rowHeight: 72,
        barHeight: 16,
        countryColumnWidth: 210,
        gdpColumnWidth: 130,
        header: 50,
        barYOffset: 3
    },
    scales = {},
    containers = {},
    addRemoveDuration = 1000,
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
    containers.legends = containers.chart.append('g').classed('legends', true);
}

function addText(g, data, keys) {
    const text = g.selectAll('text')
        .data(keys.map(k => map[k].data))
        .enter()
        .append('text')
        .text(function (d) {
            return simplifyNumber(data[d])
        })
        .attr('font-size', 12)
        .attr('x', function (d) {
            return scales.x(data[d]) + 20;
        })
        .attr('y', function (d, i) {
            return (dimensions.rowHeight / 2 - dimensions.barHeight - dimensions.barYOffset) + i * (dimensions.barYOffset * 2 + dimensions.barHeight) + 12;
        })
        .attr('opacity', 0)

    text.transition()
        .duration(500)
        .attr('opacity', 1)
        .ease();
}

function addBarGroups() {
    containers.data.selectAll('g.bar-group')
        .data(data)
        .enter()
        .append('g')
        .classed('bar-group', true)
        .attr('transform', function (d, i) {
            return translator(0, (i * dimensions.rowHeight))
        })
        .each(drawBars);
}

function drawBars(data, i) {
    const transitionDuration = 1000,
        group = d3.select(this),
        keys = ['gdp', 'income'],
        bars = group.selectAll('rect')
            .data(keys)
            .enter()
            .append('rect')
            .attr('width', scales.x(0))
            .attr('height', dimensions.barHeight)
            .attr('x', 0)
            .attr('y', function (d, i) {
                return (dimensions.rowHeight / 2 - dimensions.barHeight - dimensions.barYOffset) + i * (dimensions.barYOffset * 2 + dimensions.barHeight);
            })
            .attr('fill', function (d) {
                return map[d].fill;
            })
            .attr('stroke', function (d) {
                return map[d].stroke;
            })

    bars.transition()
        .duration(transitionDuration)
        .attr('width', function (d) {
            return scales.x(data[map[d].data]);
        })
        .ease();

    setTimeout(function () {
        addText(group, data, keys);
    }, transitionDuration);
}

function setScales() {
    const receiptsVals = data.map(r => r.receipts),
        gdpVals = data.map(r => r.gdp),
        min = d3.min([0, d3.min(receiptsVals.concat(gdpVals))]),
        max = d3.max(receiptsVals.concat(gdpVals)) * 1.1;

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

    containers.axisGroup = containers.data.append('g')
        .attr('transform', translator(0, dimensions.totalHeight))
        .call(xAxis);

    containers.axisGroup.selectAll('.tick line')
        .attr('y1', 0 - dimensions.totalHeight)
        .attr('stroke', '#eee');

    containers.axisGroup.selectAll('.domain').remove();
}

function createCountryText(d, i) {
    const index = i;

    d3.select(this)
        .text(d.country)
        .attr('y', dimensions.rowHeight / 2 + 8)
        .attr('transform', translator(0, index * dimensions.rowHeight))
        .attr('x', 20)
        .attr('font-size', 16)
}

function placeCountryLabels() {
    containers.country.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .each(createCountryText)
}

function createGdpText(d, i) {
    const index = i;

    d3.select(this)
        .text(d.receipts_gdp)
        .attr('y', dimensions.rowHeight / 2 + 8)
        .attr('transform', translator(0, index * dimensions.rowHeight))
        .attr('x', 50)
        .attr('font-size', 16)
}

function placeGdpFigures() {
    containers.gdp.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .each(createGdpText)
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

function sizeSvg(transitionTime) {
    establishContainer(transitionTime).transition().duration(500).attr('height', dimensions.header + data.length * dimensions.rowHeight + 30);
}

function setData() {
    data = selectedCountries.list.map(c => {
        if (masterData.indexed[c]) {
            return masterData.indexed[c];
        } else {
            console.warn('no data for ' + c);
        }
    }).filter(r => r);

    dimensions.totalHeight = dimensions.rowHeight * data.length;
}

function reposition(dom, i, delay) {
    delay = delay || 0;

    d3.select(dom)
        .transition()
        .duration(1000)
        .delay(delay)
        .attr('transform', translator(0, i * dimensions.rowHeight))
        .ease();
}

function repositionXAxis() {
    containers.axisGroup.transition()
        .duration(addRemoveDuration)
        .attr('transform', translator(0, dimensions.totalHeight))
        .ease();

    containers.axisGroup.selectAll('.tick line').transition()
        .duration(addRemoveDuration)
        .attr('y1', 0 - dimensions.totalHeight);

    containers.chart.selectAll('.drop-shadow-base').transition()
        .duration(addRemoveDuration)
        .attr('height', dimensions.totalHeight);
}

function removeHandler(d, i, position) {
    if (i === -1) {
        d3.select(this)
            .transition()
            .duration(200)
            .attr('opacity', 0)
            .on('end', function () {
                d3.select(this).remove();
            })
    } else {
        d = d || { country: d3.select(this).attr('data-country')};
        reposition(this, getPosition(d.country), 500);
    }
}

function removeRow(country) {
    const position = data.map(r => r.country).indexOf(country),
        countryText = containers.country.selectAll('text'),
        gdpText = containers.gdp.selectAll('text'),
        barGroups = d3.selectAll('g.bar-group');

    barGroups.each(function (d) {
        d = d || { country: d3.select(this).attr('data-country')};
        const i = getPosition(d.country);
        removeHandler.bind(this)(d, i, position);
    });

    countryText.each(function (d) {
        d = d || { country: d3.select(this).attr('data-country')};
        const i = getPosition(d.country);
        removeHandler.bind(this)(d, i, position);
    });

    gdpText.each(function (d) {
        d = d || { country: d3.select(this).attr('data-country')};
        const i = getPosition(d.country);
        removeHandler.bind(this)(d, i, position);
    });

    setTimeout(function () {
        setData()
        repositionXAxis();
    }, 500);

    setTimeout(sizeSvg, 1500);
}

function getPosition(country){
    return selectedCountries.list.indexOf(country);
}

function addRow(country) {
    const countryText = containers.country.selectAll('text'),
        gdpText = containers.gdp.selectAll('text'),
        barGroups = d3.selectAll('g.bar-group');

    let position;

    setData();

    position = data.map(r => r.country).indexOf(country);

    barGroups.each(function (d, i) {
        d = d || { country: d3.select(this).attr('data-country')};
        reposition(this, getPosition(d.country))
    })

    gdpText.each(function (d, i) {
        d = d || { country: d3.select(this).attr('data-country')};
        reposition(this, getPosition(d.country))
    })

    countryText.each(function (d, i) {
        d = d || { country: d3.select(this).attr('data-country')};
        reposition(this, getPosition(d.country))
    })

    sizeSvg();
    repositionXAxis();

    setTimeout(function () {
        containers.data.append('g').classed('bar-group', true)
            .attr('data-country', data[position].country)
            .attr('transform', translator(0, (position * dimensions.rowHeight)))
            .call(function (dom) {
                drawBars.bind(dom.node())(data[position], position)
            })

        containers.country.append('text')
        .attr('data-country', data[position].country)
        .call(function (dom) {
            createCountryText.bind(dom.node())(data[position], position);
        })

        containers.gdp.append('text')
        .attr('data-country', data[position].country)
        .call(function (dom) {
            createGdpText.bind(dom.node())(data[position], position);
        })

        createGdpText(data[position], position);
    }, 1000)

}

export function refreshData() {
    const lastUpdate = selectedCountries.lastUpdate;

    const actions = {
        remove: removeRow,
        add: addRow
    }

    actions[lastUpdate.action](lastUpdate.country);
}

export function chartInit(container) {
    setData();
    sizeSvg(800);
    establishContainers(container);
    ink(containers, dimensions, data.length);
    setScales();
    drawXAxis();

    addBarGroups();
    placeCountryLabels();
    placeGdpFigures();

    placeLegends();
    selectCountryInit();
}