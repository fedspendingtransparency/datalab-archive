import { select, selectAll } from 'd3-selection';
import { translator, simplifyNumber, getElementBox, wordWrap } from '../../utils';
import { line } from 'd3-shape';
import { drawChart } from './chart';

const d3 = { select, selectAll}, 
    fitThreshold = 50,
    noFitXOffset = 150;

let width,
    height,
    mainG,
    data,
    scaleY,
    tracker;

function getBoxHeight(d) {
    return scaleY(d.stack0) - scaleY(d.stack1);
}

function setConnectorY1(d) {
    return scaleY(d.stack1 + (d.stack0 - d.stack1) / 2);
}

function setTextTranslate(d, zoom) {
    const boxHeight = getBoxHeight(d),
        noFit = boxHeight < fitThreshold;

    let x = width / 2,
        y = scaleY(d.stack1 + (d.stack0 - d.stack1) / 2) - 5;

    d.offsetTextY = null; // reset for zoom

    if ((noFit && !d.markForZoom) || noFit && zoom) {
        x = width + noFitXOffset;
        y = height - tracker * fitThreshold;

        d.offsetTextY = y;

        tracker += 1;
    }

    return translator(x, y);
}

function placeText(zoom) {
    const textGroups = mainG.append('g')
        .classed('text-group', true)
        .selectAll('g.text-elements')
        .data(data)
        .enter()
        .append('g')
        .classed('text-elements', true)
        .attr('transform', function (d) {
            return setTextTranslate(d, zoom)
        })
        .on('click', function(d){
            if (!d.subcategories) {
                return;
            }

            drawChart(d.subcategories, d.activity, true)
        })

    const textElements = textGroups.append('text')
        .text(function (d) {
            return d.activity; f
        })
        .attr('font-size', 16)
        .attr('opacity', function (d) {
            return (d.markForZoom && !zoom) ? 0 : 1;
        })
        .classed('activity', true)
        .attr('text-anchor', function (d) {
            if (getBoxHeight(d) < fitThreshold) {
                return 'start';
            }

            return 'middle';
        })
        .attr('font-weight', '600')
        .attr('fill', 'black');

    textElements.append('tspan')
        .attr('font-size', 16)
        .classed('details', true)
        .attr('dy', 20)
        .attr('x', 0)
        .text(function (d, i) {
            let p = parseInt(d.percent_total);

            if (Math.abs(p) < 1) {
                p = '<1'
            }

            return simplifyNumber(d.amount) + ' (' + p + '%)';
        })

    // remove hidden labels when zoomed out
    if (zoom) return;

    textGroups.each(function(d) {
        if (d.markForZoom) {
            d3.select(this).remove();
        }
    })
}

function drawConnectors() {
    mainG.append('g')
        .classed('connectors', true)
        .selectAll('line')
        .data(data)
        .enter()
        .append('line')
        .attr('stroke', function (d) {
            return d.offsetTextY ? 'black' : 'none';
        })
        .attr('stroke-width', 0.5)
        .attr('x1', width)
        .attr('x2', width + noFitXOffset - 5)
        .attr('y1', setConnectorY1)
        .attr('y2', function (d) {
            return d.offsetTextY || 0;
        })
}

export function placeLabels(config, zoomData) {
    width = config.baseWidth;
    height = config.height;
    scaleY = zoomData ? config.scales.yZoom : config.scales.y;
    mainG = config.svg;
    data = zoomData || config.data;

    tracker = 1;

    placeText(zoomData);
    drawConnectors(zoomData);
}