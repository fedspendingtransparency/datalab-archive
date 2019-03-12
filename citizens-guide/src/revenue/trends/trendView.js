import { select, selectAll } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { min, max, range } from 'd3-array';
import { line } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { transition } from 'd3-transition';
import { translator, getTransform } from '../../utils';
import { renderLabels } from './labels';
import { showDetail, destroyDetailPane } from './detailPane';
import { zoomTrigger } from './zoomTrigger';
import { ink } from './ink'
import { addTooltips } from './addTooltips';
import { xAxis } from './xAxis';
import { yAxis } from './yAxis';
import { trendLines } from './trendLines';

const d3 = { select, selectAll, scaleLinear, min, max, range, line, axisBottom, axisLeft, transition },
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
    const duration = 1000;

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

function onSelect(d, reset) {
    if (reset) {
        this.activeDrilldown = null;
        this.trendLines.deEmphasize(null, this);
    } else {
        this.activeDrilldown = d.name;
        this.trendLines.deEmphasize(d.name, this);
    }

    if (reset && !this.noDrilldown) {
        destroyDetailPane();
        transformChart(this, reset);
    } else if (!this.noDrilldown) {
        showDetail(d, this.scales.y(d.values[d.values.length - 1].amount) + 48);
        transformChart(this, reset);
    }
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
    globals.originalWidth = (globals.noDrilldown) ? 240 : 1200 - (globals.labelWidth + globals.labelPadding) * 2;
    globals.widthOnDrilldown = 360,
        globals.width = globals.originalWidth,
        globals.zoomThreshold = globals.zoomThreshold || 180000000000;
    globals.zoomState = 'out';
    globals.totalWidth = globals.labelWidth + globals.labelPadding + globals.width;
    globals.baseXTranslate = globals.labelWidth + globals.labelPadding + 35;

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
        containerOffset = getTransform(globals.chart);

    // The main level trend-chart only needs the first level offset from globals.chart, the sub-level has
    // two additional g tags that are sandwiched around globals.chart which we need their offsets.
    if (parentEl.node().nodeName !== 'svg') {
        const childEl = parentEl.select('g.trend-chart');
        parentEl = d3.select(parentEl.node().parentNode);

        const parentOffset = getTransform(parentEl);
        const childOffset = getTransform(childEl);
        containerOffset.x = containerOffset.x + parentOffset.x + childOffset.x;
        containerOffset.y = containerOffset.y + parentOffset.y + childOffset.y;
    }

    return containerOffset;
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

    const containerOffset = calculateContainerOffset(globals, container);
    globals.dataDots = addTooltips(globals, containerOffset);
}