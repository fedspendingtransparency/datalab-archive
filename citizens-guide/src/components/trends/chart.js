import { select, selectAll } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { min, max, range } from 'd3-array';
import { line } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';
import { translator, getTransform, getElementBox } from '../../utils';
import { renderLabels } from './labels';
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

let originalConfig, activeDrilldownData;

function toggleZoom(globals, reset) {
    const duration = 1000,
        yMin = globals.scales.y.domain()[0],
        yMax = (globals.scales.y.domain()[1] >= globals.domainMax) ? globals.zoomThreshold : globals.domainMax;

    globals.scales.y.domain([yMin, yMax]);
    globals.zoomState = (globals.zoomState === 'out') ? 'in' : 'out';

    if (reset) {
        globals.zoomState = 'out';
    }

    globals.yAxis.rescale(globals, duration);
    globals.trendLines.rescale(globals, duration);
    globals.dataDots.rescale(globals, duration);
    globals.labels.rescale(globals, duration);
}

// function transformChart(globals, reset) {
//     const duration = 1000,
//         xTranslate = (reset) ? globals.centeredXTranslate : globals.baseXTranslate;

//     globals.width = (reset) ? globals.originalWidth : globals.widthOnDrilldown;
//     globals.scales.x.range([0, globals.width]);

//     globals.yAxis.rescale(globals, duration);
//     globals.xAxis.rescale(globals, duration);
//     globals.dataDots.rescale(globals, duration);
//     globals.ink.rescale(globals, duration);
//     globals.trendLines.rescale(globals, duration);

//     if (!globals.noZoom) {
//         globals.zoomTrigger.rescale(globals, duration);
//     }

//     globals.chart.transition()
//         .duration(duration)
//         .attr('transform', translator(globals.baseXTranslate, margin.top));
// }

function onSelect(d, reset) {
    if (reset) {
        this.activeDrilldown = null;
    }
    
    this.trendLines.deEmphasize(null, this);
    
    if (reset && !this.noDrilldown) {
        //destroyDetailPane();
        //transformChart(this, reset);
    } else if (!this.noDrilldown) {
        initOverlay(d, originalConfig)
        activeDrilldownData = d;
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

function setGlobalWidth(globals, w, resetSvgWidth) {
    if (resetSvgWidth) {
        d3.select('svg.main').attr('width', w);
    }

    globals.width = w - globals.labelWidth - 35;
}

function initGlobals(config, data, drilldown) {
    const globals = config || {};

    let w = getContainerWidth();

    if (drilldown) {
        w -= 30;
    }

    globals.data = data;
    globals.domainMax = d3.max(globals.data.map(row => d3.max(row.values.map(v => v.amount))));

    setNoZoom(config);

    globals.scales = globals.scales || {};
    globals.height = globals.height || 750;
    globals.labelWidth = 160;
    globals.labelPadding = 60;
    globals.labelWidth = globals.labelWidth + globals.labelPadding + 35;

    setGlobalWidth(globals, w, !drilldown);

    globals.zoomState = 'out';
    globals.onSelect = onSelect.bind(globals);
    globals.onZoom = onZoom.bind(globals);

    if (drilldown) {
        globals.noDrilldown = true;
    }

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
    return getElementBox(d3.select('#viz')).width;
}

function drawChart(globals, container) {
    let containerOffset;

    globals.chart = container.append('g')
        .classed('trend-chart', true)
        .attr('transform', translator(globals.labelWidth, margin.top));

    globals.xAxis = xAxis(globals);
    globals.ink = ink(globals);
    globals.xAxis.render(globals);
    globals.yAxis = yAxis(globals);
    globals.trendLines = trendLines(globals);
    globals.labels = renderLabels(globals);

    if (!globals.noZoom) {
        globals.zoomTrigger = zoomTrigger(globals);
    }

    containerOffset = calculateContainerOffset(globals, container);
    globals.dataDots = addTooltips(globals, containerOffset);
}

function optimizeHeight() {

}

function redraw(globals, container) {
    const doDrilldown = d3.selectAll('rect.mask').size();
    
    d3.selectAll('svg.main g').remove();
    d3.selectAll('rect.mask').remove();

    toggleZoom(globals, 'reset');

    setGlobalWidth(globals, getContainerWidth(), true);
    drawChart(globals, container);

    if (doDrilldown) {
        initOverlay(activeDrilldownData, originalConfig);
    }
}

export function trendDesktop(_data, container, config, drilldown) {
    let globals, previousWidth, debounce;

    originalConfig = Object.assign({}, config);

    globals = initGlobals(config, _data, drilldown);

    drawChart(globals, container);

    if (!drilldown) {
        window.addEventListener('resize', function () {
            if (debounce) {
                clearTimeout(debounce);
            }

            if (previousWidth === window.innerWidth) {
                return;
            }

            previousWidth = window.innerWidth;

            debounce = setTimeout(redraw, 100, globals, container);
        });
    }
}

/*
    TODO:
    all will be handled when implemented on spending
    resize height when needed on detail overlay
    add zoom thresholds to config
    make it work on spending
*/