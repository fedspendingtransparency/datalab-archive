import {establishContainer, getElementBox, simplifyNumber, translator, wordWrap} from "../../utils";
import { select, selectAll } from 'd3-selection';
import { min, max, range } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { axisBottom } from 'd3-axis';
import { transition } from 'd3-transition';
import { renderSortIcon, updateIcons } from './sortIcon';
import {refreshData} from "./chart";
import {selectCountryInit} from "./selectCountry";
import { initDropShadow } from './dropShadow';
import {selectedCountries} from "./selectedCountryManager";
import {createDonut} from "../donut";

const d3 = { select, selectAll, min, max, scaleLinear, axisBottom, transition, range }

const mobileDimensions = {
        minChartWidth: 320,
        totalHeight : 0,
        minRowHeight: 60,
        rowHeight: 50,
        barHeight: 16,
        countryColumnWidth: 220,
        gdpColumnWidth: 100,
        header: 50,
        barYOffset: 3
    },
    donutOffset = 5,
    donutRadius = mobileDimensions.rowHeight / 2 - donutOffset,
    scales = {
        x : 0
    },
    scrollbarWidth = 20,
    addRemoveDuration = 1000,
    barFadeTime = 1000,
    fontSize = parseFloat(getComputedStyle(document.body).fontSize),
    maskClass = 'drop-shadow-mask';

let config, data, svg, primaryColor;

function buildCountryBoxDropShadow(dataLength) {
    const dropShadow = svg.select('.drop-shadow-base');

    if(dropShadow.size()){
        dropShadow.attr('height', mobileDimensions.rowHeight * dataLength)
        return;
    }

    svg.insert('rect', ':first-child')
        .attr('class', 'drop-shadow-base')
        .attr('width', mobileDimensions.chartWidth)
        .attr('height', mobileDimensions.rowHeight * dataLength)
        .attr('transform', translator(3, mobileDimensions.header + 4))
        .attr('fill', 'white')
        .attr('stroke', '#eee')
        .style('filter', 'url(#drop-shadow)');
}

function placeHorizontalStripes(dataLength) {
    let stripes, stripesContainer;
    const chartWidth = (mobileDimensions && mobileDimensions.chartWidth) ? mobileDimensions.chartWidth : 1200;

    stripesContainer = svg.select('.cg-stripes-container');
    stripes = stripesContainer.selectAll('line')
        .data(d3.range(dataLength + 1), function(d){ return d; });

    stripes.exit().remove();

    stripes.enter()
        .append('line')
        .attr('x1', 0)
        .attr('y1', function(d){
            return d * mobileDimensions.rowHeight + mobileDimensions.header + 3;
        })
        .attr('x2', chartWidth)
        .attr('y2', function(d){
            return d * mobileDimensions.rowHeight + mobileDimensions.header + 3;
        })
        .attr('stroke', 'rgba(100,100,100,0.1)')
        .attr('stroke-width', 1)
}

function placeMask() {
    // clip the drop shadow

    if (svg.selectAll('rect.' + maskClass).size()) {
        return;
    }

    svg.insert('rect', '.cg-stripes-container')
        .classed(maskClass, true)
        .attr('width', mobileDimensions.chartWidth + 4)
        .attr('height', mobileDimensions.header + 4)
        .attr('stroke', 'none')
        .attr('fill', 'white')
}

function ink(){
    buildCountryBoxDropShadow(data.length);
    placeHorizontalStripes(data.length);
    placeMask();
}

function barTransition(selection, data) {
    selection.transition()
        .duration(barFadeTime)
        .attr('x', function (d) {
            d = d || data;
            if (d[config.amountField] < 0) {
                return scales.x(d[config.amountField]);
            }

            return scales.x(0);
        })
        .attr('width', function (d) {
            d = d || data;
            return Math.abs(scales.x(d[config.amountField]) - scales.x(0));
        })
        .ease();
}

function barLabelPosition(d) {
    if (d[config.amountField] < 0) {
        return scales.x(0) + 10;
    }

    return scales.x(d[config.amountField]) + 10;
}

function setScales() {
    const amountVals = data.map(r => r[config.amountField]),
        min = d3.min([0, d3.min(amountVals)]),
        max = d3.max(amountVals);

    scales.x = d3.scaleLinear()
        .domain([min, max]).nice()
        .range([0, mobileDimensions.countryColumnWidth]);
}

function sort() {
    const g = d3.select(this),
        type = g.attr('data-type'),
        isMobileInd = true;

    refreshData(type, null, isMobileInd);

    updateIcons();
}

function placeLegend(){
    const labelXPadding = 12;

    const percentLabelOffset = Math.min(mobileDimensions.countryColumnWidth + mobileDimensions.gdpColumnWidth / 2 + 10 - fontSize, document.body.clientWidth - 160);

    svg.append('g')
        .classed('legend', true)
        .attr('data-type', config.amountField)
        .append('text')
        .attr('transform', translator(- labelXPadding / 2, 0))
        .text(config.amountLabel)
        .attr('font-weight', 600)
        .attr('x', labelXPadding)
        .attr('y', 38)
        .attr('font-size', 14);

    svg.append('g')
        .attr('transform', translator(percentLabelOffset, 0))
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
        .attr('x', labelXPadding);

    svg.selectAll('g.legend')
        .on('click', sort)
        .attr('style', 'cursor:pointer')
        .each(function () {
            renderSortIcon(this, null, primaryColor);
        });

    updateIcons();
}

function addDGPIcon(row, d){
    const dataRows = row.append('g')
            .attr('class', 'donut-container')
            .attr('transform', translator(mobileDimensions.countryColumnWidth + mobileDimensions.gdpColumnWidth / 2, donutOffset * 1.5)),
        timeoutForAdd = 500;

    setTimeout(function () {
        dataRows.each(function () {
            createDonut(d3.select(this), d[config.gdpField] / 100, donutRadius * 2, primaryColor);
        })
    }, timeoutForAdd);
}

function redraw(){
    d3.select('#viz').selectAll('*').remove();
    const isMobileInd = true;

    setMobileChartSVG();
    setScales();
    placeLegend();
    createMobileChart();
    initDropShadow();
    ink();
    selectCountryInit(isMobileInd);
}

function buildRow(d,i){
    const row = d3.select(this);

    row.append('text').text(function(d){
        return d.country;
    })
      .attr('y', 16);

    row.transition()
        .attr('transform', translator(0, i * mobileDimensions.rowHeight))
        .ease();

    addMobileBarGroups(row, d);
    addDGPIcon(row, d);
}

function buildRows(rows){
    svg.attr('height', data.length * mobileDimensions.rowHeight + mobileDimensions.header + 20);
    const dataRows = rows.selectAll('g.cg-data-row')
        .data(data, function (d) { return d.country });

    dataRows.exit().remove();

    dataRows.enter()
        .append('g')
        .classed('cg-data-row',true)
        .each(buildRow);

    ink();
}

function sortRows(){
    svg.selectAll('g.cg-data-row')
        .data(data, function (d) { return d.country })
        .each(sortRow);

    // sortRow(rows);
}

function sortRow(d, i){
    const row = d3.select(this);
    row.transition()
        .duration(addRemoveDuration)
        .attr('transform', translator(0, (i * mobileDimensions.rowHeight)))
        .ease();
}

function createMobileChart(){
    const rows = svg.append('g').classed('cg-country-comparison-rows', true)
        .attr('transform', translator(5, mobileDimensions.header));
    buildRows(rows);
    sortRows();
}

function setMobileChartSVG(){
    const accessibilityAttrs = null || config.accessibilityAttrs,
        parentWidth = getElementBox(d3.select('#viz')).width;

    svg = establishContainer(null, parentWidth, accessibilityAttrs)
        .classed('country', true)
        .attr('y', 20);
    svg.append('g').classed('cg-stripes-container',true);
}

function addMobileBarGroups(row, d) {
    const barElement = row.append('g')
        .classed('bar-group', true)
        .attr('transform', function (d, i) {
            return translator(0, i * mobileDimensions.rowHeight + 10)
        });

    if (!barElement.size()) {
        return;
    }

    if (scales.x.domain()[0] < 0) {
        barElement.append('line')
            .attr('stroke', primaryColor)
            .attr('x1', scales.x(0))
            .attr('y1', mobileDimensions.rowHeight / 2 - mobileDimensions.barHeight / 2 - 5)
            .attr('x2', scales.x(0))
            .attr('y2', mobileDimensions.rowHeight / 2 - mobileDimensions.barHeight / 2 + mobileDimensions.barHeight + 5)
    }

    barElement.append('rect')
        .attr('width', 0)
        .attr('height', mobileDimensions.barHeight)
        .attr('x', scales.x(0))
        .attr('y', mobileDimensions.rowHeight / 2 - mobileDimensions.barHeight / 2)
        .attr('fill', primaryColor)
        .attr('fill-opacity', 0.5)
        .attr('stroke', primaryColor)
        .attr('stroke-width', 1)
        .call(barTransition, d);

    barElement.append('text')
        .text(function () {
            return simplifyNumber(d[config.amountField])
        })
        .attr('font-size', 12)
        .attr('x', barLabelPosition(d))
        .attr('y', function (d, i) {
            return (mobileDimensions.rowHeight / 2 + mobileDimensions.barHeight / 2 - 4);
        })
        .attr('opacity', 0)
        .transition()
        .delay(barFadeTime)
        .duration(500)
        .attr('opacity', 1)
        .ease();
}

export function updateMobileTableList(_data, action){
    data = _data;
    const rows = svg.select('.cg-country-comparison-rows');
    buildRows(rows);
    sortRows();
}

export function sortMobileTable(_data){
    data = _data;
    sortRows();
}

export function redrawMobile(_config, _data){
    config = _config;
    data = _data;

    primaryColor = config.primaryColor || '#EEE';

    const ffgWrapper = d3.select('.ffg-wrapper');

    let pagePadding = ffgWrapper.style('padding-left');
    pagePadding = pagePadding ? parseInt(pagePadding,10) : 0;
    mobileDimensions.totalHeight = 0;
    // todo - calculate these after the establishContainer, use the svg width
    mobileDimensions.chartWidth = Math.max(mobileDimensions.minChartWidth, window.innerWidth) - pagePadding * 2 - scrollbarWidth;
    mobileDimensions.gdpColumnWidth = Math.max(Math.min(mobileDimensions.chartWidth * 0.2, 130), donutRadius + 4*fontSize);
    mobileDimensions.countryColumnWidth = mobileDimensions.chartWidth - mobileDimensions.gdpColumnWidth - fontSize;
    console.log('chartWidth:', mobileDimensions.chartWidth);
    console.log('gdpColumnWidth:', mobileDimensions.gdpColumnWidth);
    console.log('countryColumnWidth:', mobileDimensions.countryColumnWidth);
    console.log('donutRadius:', donutRadius);
    redraw();
    d3.select('#cgCountryGraphDropShadow').attr('height', 504);
}