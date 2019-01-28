import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { line } from 'd3-shape';
import { establishContainer, translator, simplifyNumber } from '../../utils';
import { setChartWidth, chartWidth } from './widthManager';
import { setDotsPerRow } from './dotConstants';
import { generateOverlay } from './compareManager';
import colors from '../../colors.scss';

const d3 = { select, selectAll, transition, line },
    duration = 1500,
    scaleFactor = 0.6,
    billion = 1000000000,
    lineFn = d3.line()
        .x(function (d) { return d.x; })
        .y(function (d) { return d.y; });

let config, spendingLayer, svg;

function labelMaker(height, label, amount, spending) {
    const lineData = [
        { x: -20, y: 0 },
        { x: -30, y: 0 },
        { x: -30, y: height },
        { x: -20, y: height }
    ],
        layer = svg.select('.deficit-group').append('g').attr('opacity', 0),
        textX = spending ? chartWidth + 40 : -40,
        text = layer.append('text')
            .attr('fill', colors.textColorParagraph)
            .attr('text-anchor', 'end')
            .attr('y', height / 2 + 15)
            .style('font-size', 24);

    if (spending) {
        lineData.forEach((r, i) => {
            r.x = (i === 0 || i === 3) ? chartWidth + 20 : chartWidth + 30;
        })

        text.attr('text-anchor', 'start');
    }

    layer.append('path')
        .attr('d', lineFn(lineData))
        .attr('fill', 'none')
        .attr('stroke', '#aaa')
        .attr('stroke-width', 2);

    text.append('tspan')
        .text(label)
        .style('font-weight', '600')
        .attr('x', textX)
        .attr('dy', -24);

    text.append('tspan')
        .text(simplifyNumber(amount))
        .attr('x', textX)
        .attr('dy', 24);

    layer.transition().duration(duration * 1.5).attr('opacity', 1);
}

function placeRevenueLabel(height, layer) {
    labelMaker(height, 'Revenue', config.revenueAmount)
}

function placeSpendingLabel(height, layer) {
    setTimeout(function () {
        labelMaker(height, 'Spending', config.spendingAmount, true)
    }, duration)
}

function placeDeficitLabel(y0, y1) {
    const mid = y0 + ((y1 - y0) / 2),
        lineData = [
            { x: -20, y: mid },
            { x: -30, y: mid },
            { x: -30, y: mid + y1 - y0 }
        ],
        layer = svg.select('.deficit-group').append('g').attr('opacity', 0),
        textX = -30,
        text = layer.append('text')
            .attr('fill', colors.textColorParagraph)
            .attr('text-anchor', 'middle')
            .attr('y', lineData[2].y + 24)
            .style('font-size', 24);

    layer.append('path')
        .attr('d', lineFn(lineData))
        .attr('fill', 'none')
        .attr('stroke', '#aaa')
        .attr('stroke-width', 2);

    text.append('tspan')
        .text('Deficit')
        .style('font-weight', '600')
        .attr('x', textX)
        .attr('dy', 0);

    text.append('tspan')
        .text(simplifyNumber(config.reportedDeficitAmount))
        .attr('x', textX)
        .attr('dy', 24);

    layer.transition().duration(duration * 1.5).attr('opacity', 1);
}

function placeRevenue() {
    const svg = establishContainer(),
        compareCount = Math.ceil(config.revenueAmount / billion);

    let revenueLayer = generateOverlay(compareCount, svg.select('.deficit-group'), `revenue-layer`, config.revenueColor);

    revenueLayer.transition().duration(duration).attr('opacity', 0.5).ease();

    placeRevenueLabel(revenueLayer.attr('data-rect-height'), revenueLayer);
}

function placeSpending() {
    const svg = establishContainer(),
        compareCount = Math.ceil(config.spendingAmount / billion);

    spendingLayer = generateOverlay(compareCount, svg.select('.deficit-group'), `spending-layer`, config.spendingColor);

    spendingLayer.transition().delay(duration).duration(duration).attr('opacity', 0.3).ease();

    placeSpendingLabel(spendingLayer.attr('data-rect-height'), spendingLayer);
}

function placeDeficit() {
    const dotLayer = d3.select('.deficit-dots'),
        y0 = Number(dotLayer.attr('data-y0')),
        y1 = Number(dotLayer.attr('data-y1'));
    
    dotLayer.transition()
        .duration(duration)
        .attr('opacity', 1)
        .ease();

    spendingLayer.transition()
        .duration(duration)
        .attr('opacity', 0)
        .ease();

    placeDeficitLabel(y0, y1);
}

export function compareDeficit(c) {
    config = c || config;

    setChartWidth();
    setDotsPerRow();

    svg = establishContainer(1000, chartWidth);

    config.mainContainer.append('g').classed('deficit-group', true).attr('transform', translator((chartWidth - chartWidth * scaleFactor) / 2, 0) + ` scale(${scaleFactor})`);

    placeRevenue();
    placeSpending();
    setTimeout(placeDeficit, duration * 2)
}