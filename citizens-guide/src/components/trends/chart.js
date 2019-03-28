import { select, selectAll } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { min, max, range } from 'd3-array';
import { line } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { translator, getTransform, getElementBox } from '../../utils';
import { renderLabels } from './labels';
// import { showDetail, destroyDetailPane } from './detailPane';
import { zoomTrigger } from './zoomTrigger';
import { ink } from './ink'
import { addTooltips } from './addTooltips';
import { xAxis } from './xAxis';
import { yAxis } from './yAxis';
import { trendLines } from './trendLines';
import { dataRange, setThreshold } from './setThreshold';
import { initOverlay } from './detailOverlay';

const d3 = { select, selectAll, scaleLinear, min, max, range, line, axisBottom, axisLeft },
    margin = {
        left: 400,
        top: 40
    };

let zoomThreshold;

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

    if (!globals.noZoom) {
        globals.zoomTrigger.rescale(globals, duration);
    }

    globals.chart.transition()
        .duration(duration)
        .attr('transform', translator(globals.baseXTranslate, margin.top));
}

function onSelect(d, reset) {
    if (reset) {
        this.activeDrilldown = null;
        this.trendLines.deEmphasize(null, this);
    } else {
        this.activeDrilldown = d.name;
        this.trendLines.deEmphasize(d.name, this);
    }

    if (reset && !this.noDrilldown) {
        //destroyDetailPane();
        //transformChart(this, reset);
    } else if (!this.noDrilldown) {
        initOverlay(d)
        //transformChart(this, reset);
    }
}

function onZoom() {
    this.activeDrilldown = null;
    this.trendLines.deEmphasize(null, this);
    toggleZoom(this);

    // if (!this.noDrilldown) {
    //     transformChart(this, 'reset');
    //     destroyDetailPane();
    // }
}

function setNoZoom(g) {
    g.zoomThreshold = setThreshold(g.data) || 100000000000;

    if (g.noDrilldown) {
        return;
    }

    if (dataRange[0] > g.zoomThreshold || dataRange[1] < g.zoomThreshold) {
        g.noZoom = true;
    }
}

function initGlobals(config, data) {
    const globals = config || {},
        w = getContainerWidth();

    globals.data = data;

    setNoZoom(config);

    globals.scales = globals.scales || {};
    globals.height = globals.height || 650;
    globals.labelWidth = 160;
    globals.labelPadding = 60;
    globals.labelWidth = globals.labelWidth + globals.labelPadding + 35;
    globals.width = w - globals.labelWidth - 35;

    globals.zoomState = 'out';
    globals.onSelect = onSelect.bind(globals);
    globals.onZoom = onZoom.bind(globals);

    return globals;
}

/**
 * We need to capture all of the offsets required to make the tooltip appear where we'd like it to as it's attached as
 * a direct child of the svg.main element so that its visibility is in front of the graphs.
 * @param globals - globals const for rendering the graph.
 * @param container - The main container of the data points we're providing tooltips for.
 * @returns {{x, y}} - x and y offset for the container offset.
 */
function calculateContainerOffset(globals, container) {
    let parentEl = container,
        parentOffset = { x: 0, y: 0 },
        containerOffset = getTransform(globals.chart),
        initialTranslateLeft = containerOffset.x;

    // The main level trend-chart only needs the first level offset from globals.chart, the sub-level has
    // two additional g tags that are sandwiched around globals.chart which we need their offsets.
    if (parentEl.node().nodeName !== 'svg') {
        const childEl = parentEl.select('g.trend-chart');

        parentEl = d3.select(parentEl.node().parentNode);
        parentOffset = getTransform(parentEl);

        const childOffset = getTransform(childEl);

        containerOffset.x = containerOffset.x + parentOffset.x + childOffset.x;
        containerOffset.y = containerOffset.y + parentOffset.y + childOffset.y;
    }

    return containerOffset;
}

function getContainerWidth() {
    const w = getElementBox(d3.select('#viz')).width;

    d3.select('svg.main').attr('width', w);

    return w;
}

export function trendDesktop(_data, container, config) {
    const globals = initGlobals(config, _data);

    globals.domainMax = d3.max(globals.data.map(row => d3.max(row.values.map(v => v.amount))));

    globals.chart = container.append('g')
        .classed('trend-chart', true)
        .attr('transform', translator(globals.labelWidth, margin.top));

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

    const containerOffset = calculateContainerOffset(globals, container);
    globals.dataDots = addTooltips(globals, containerOffset);
}