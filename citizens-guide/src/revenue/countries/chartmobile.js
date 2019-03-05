import {establishContainer, getElementBox, simplifyNumber, translator, wordWrap} from "../../utils";
import { select, selectAll } from 'd3-selection';
import { min, max, range } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { axisBottom } from 'd3-axis';
import { transition } from 'd3-transition';
import { renderSortIcon, updateIcons } from './sortIcon';
import {refreshData} from "./chart";

const d3 = { select, selectAll, min, max, scaleLinear, axisBottom, transition }

const mobileDimensions = {
        minChartWidth: 320,
        totalHeight : 0,
        minRowHeight: 60,
        rowHeight: 40,
        barHeight: 16,
        countryColumnWidth: 220,
        gdpColumnWidth: 100,
        header: 50,
        barYOffset: 3
    },
    scales = {
        x : 0
    },
    addRemoveDuration = 1000,
    barFadeTime = 1000;

let config, data, svg, primaryColor;

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

    svg.append('g')
        .classed('legend', true)
        .attr('data-type', config.amountField)
        .append('text')
        .text(config.amountLabel)
        .attr('font-weight', 600)
        .attr('y', 38)
        .attr('x', labelXPadding)
        .attr('font-size', 14);

    svg.append('g')
        .attr('transform', translator(mobileDimensions.countryColumnWidth + 20, 0))
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

    svg.selectAll('g.legend')
        .on('click', sort)
        .attr('style', 'cursor:pointer')
        .each(function () {
            renderSortIcon(this, null, primaryColor);
        });

    updateIcons();
}

function redraw(){
    d3.select('#viz').selectAll('*').remove();

    setMobileChartSVG();
    setScales();
    placeLegend();
    createMobileChart();

    // establishContainers();
    // ink(containers, mobileDimensions, data.length);
    // setScales();
    // addBarGroups();
    // placeCountryLabels();
    // placeGdpFigures();
    // placeLegends(config);
    // selectCountryInit();
}

function buildRow(d,i){
    const row = d3.select(this);

    row.append('text').text(function(d){
        return d.country;
    })
      .attr('y', 16);

    row.transition()
        .duration(addRemoveDuration)
        .attr('transform', translator(0, i * mobileDimensions.rowHeight))
        .ease();

    addMobileBarGroups(row, d);
}

function buildRows(rows){
    console.log(rows, data);
    rows.selectAll('g')
        .data(data)
        .enter()
        .append('g')
        .classed('cg-data-row',true)
        .each(buildRow);
}

function sortRows(){
    d3.select('.cg-country-comparison-rows').selectAll('g')
        .data(data, function (d) { return d.country })
        .each(sortRow);
}

function sortRow(d,i){
    const row = d3.select(this);
    row.transition()
        .duration(addRemoveDuration)
        .attr('transform', translator(0, i * mobileDimensions.rowHeight))
        .ease();
}

function createMobileChart(){
    const rows = svg.append('g').classed('cg-country-comparison-rows', true)
        .attr('transform', translator(0, 50));
    buildRows(rows);
}

function setMobileChartSVG(){
    const accessibilityAttrs = null || config.accessibilityAttrs,
        parentWidth = getElementBox(d3.select('#viz')).width;

    svg = establishContainer(null, parentWidth, accessibilityAttrs)
        .classed('country', true);
}

function addMobileBarGroups(row, d) {
    const groups = row;

    let enterGroups;

    groups.append('g');

    enterGroups = groups.selectAll('g')
        .classed('bar-group', true)
        .attr('transform', function (d, i) {
            return translator(0, i * mobileDimensions.rowHeight + 10)
        });

    if (!enterGroups.size()) {
        return;
    }

    if (scales.x.domain()[0] < 0) {
        enterGroups.append('line')
            .attr('stroke', primaryColor)
            .attr('x1', scales.x(0))
            .attr('y1', mobileDimensions.rowHeight / 2 - mobileDimensions.barHeight / 2 - 5)
            .attr('x2', scales.x(0))
            .attr('y2', mobileDimensions.rowHeight / 2 - mobileDimensions.barHeight / 2 + mobileDimensions.barHeight + 5)
    }

    enterGroups.append('rect')
        .attr('width', 0)
        .attr('height', mobileDimensions.barHeight)
        .attr('x', scales.x(0))
        .attr('y', mobileDimensions.rowHeight / 2 - mobileDimensions.barHeight / 2)
        .attr('fill', primaryColor)
        .attr('fill-opacity', 0.5)
        .attr('stroke', primaryColor)
        .attr('stroke-width', 1)
        .call(barTransition, d);

    enterGroups.append('text')
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

export function updateMobileTableList(_data){
    data = _data;
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
    mobileDimensions.chartWidth = Math.max(mobileDimensions.minChartWidth, window.innerWidth) - pagePadding * 2;
    mobileDimensions.countryColumnWidth = mobileDimensions.chartWidth * 0.7 - 5;
    mobileDimensions.gdpColumnWidth = mobileDimensions.chartWidth * 0.3 + 5;
    console.log('chartWidth:', mobileDimensions.chartWidth);
    console.log('countryColumnWidth:', mobileDimensions.countryColumnWidth);
    console.log('gdpColumnWidth:', mobileDimensions.gdpColumnWidth);
    redraw();
    d3.select('#cgCountryGraphDropShadow').attr('height', 504);
}