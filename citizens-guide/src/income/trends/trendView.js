import { select, selectAll } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { min, max, range } from 'd3-array';
import { line } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { transition } from 'd3-transition';
import { translator, getElementBox } from '../../utils';
import { renderLabels } from './labels';
import { showDetail, destroyDetailPane } from './detailPane';
import { zoomTrigger } from './zoomTrigger';
import { ink } from './ink'
import { processDataForChart } from './trendData';
import { addTooltips, repositionDataDots } from './addTooltips';
import { xAxis } from './xAxis';
import { yAxis } from './yAxis';
import { trendLines } from './trendLines';

const d3 = { select, selectAll, scaleLinear, min, max, range, line, axisBottom, axisLeft },
    margin = {
        left: 400,
        top: 40
    };

function toggleZoom(globals) {
    const duration = 1000,
        yMin = globals.scales.y.domain()[0],
        yMax = (globals.scales.y.domain()[1] >= globals.domainMax) ? globals.zoomThreshold : globals.domainMax;

    globals.scales.y.domain([yMin, yMax]);
    globals.zoomState = (globals.zoomState === 'out') ? 'in' : 'out';

    globals.yAxis.rescale(globals, duration);
    globals.trendLines.rescale(globals, duration);
    globals.dataDots.rescale(globals, duration);
    globals.labels.rescale(globals, duration);
}

function transformChart(globals, reset) {
    const duration = 1000,
        xTranslate = (reset) ? globals.centeredXTranslate : globals.baseXTranslate;

    globals.width = (reset) ? globals.originalWidth : globals.widthOnDrilldown;
    globals.scales.x.range([0, globals.width]);

    globals.yAxis.rescale(globals, duration);
    globals.xAxis.rescale(globals, duration);
    globals.dataDots.rescale(globals, duration);
    globals.ink.rescale(globals, duration);
    globals.trendLines.rescale(globals, duration);
    globals.zoomTrigger.rescale(globals, duration);

    globals.chart.transition()
        .duration(duration)
        .attr('transform', translator(globals.baseXTranslate, margin.top));
}

function onDrilldown(d, reset) {
    if (reset) {
        this.activeDrilldown = null;
        this.trendLines.deEmphasize(null, this);
        destroyDetailPane();
    } else {
        this.activeDrilldown = d.name;        
        this.trendLines.deEmphasize(d.name, this);
        showDetail(d, this.scales.y(d.values[d.values.length - 1].amount) + 48);
    }

    transformChart(this, reset);
    
}

function onZoom() {
    this.activeDrilldown = null;
    this.trendLines.deEmphasize(null, this);    
    toggleZoom(this);


    if (!this.noDrilldown) {
        transformChart(this, 'reset');        
        destroyDetailPane();
    }
}

function initGlobals(config) {
    const globals = config || {};

    globals.scales = globals.scales || {};
    globals.height = globals.height || 650;
    globals.labelWidth = 160;
    globals.labelPadding = 60;
    globals.originalWidth = (globals.noDrilldown) ? 240 : 1200 - (globals.labelWidth + globals.labelPadding)*2;
    globals.widthOnDrilldown = 360,
    globals.width = globals.originalWidth,
    globals.zoomThreshold = globals.zoomThreshold || 180000000000;
    globals.zoomState = 'out';
    globals.totalWidth = globals.labelWidth + globals.labelPadding + globals.width;
    globals.baseXTranslate = globals.labelWidth + globals.labelPadding + 35;

    globals.zoomState = 'out';

    globals.onDrilldown = onDrilldown.bind(globals);
    globals.onZoom = onZoom.bind(globals);

    return globals;
}

export function trendView(_data, container, config) {
    const globals = initGlobals(config);

    globals.data = _data;
    globals.domainMax = d3.max(globals.data.map(row => d3.max(row.values.map(v => v.amount))));

    globals.chart = container.append('g')
        .classed('trend-chart', true)
        .attr('transform', translator(globals.baseXTranslate, margin.top));

    // draw the chart
    globals.xAxis = xAxis(globals);
    globals.ink = ink(globals);
    globals.xAxis.render(globals);
    globals.yAxis = yAxis(globals);
    globals.trendLines = trendLines(globals);
    globals.labels = renderLabels(globals);
    
    if (!globals.noZoom) {
        globals.zoomTrigger = zoomTrigger(globals);
    }
    
    globals.dataDots = addTooltips(globals);
}