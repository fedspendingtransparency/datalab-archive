import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { line } from 'd3-shape';
import { dotsPerRow, dotConstants } from "./dotConstants";
import { labelMaker, deficitLabel } from './layerLegends';
import { initDeficitDots } from './deficitDots';
import { translator } from '../../utils';
import { chartWidth } from './widthManager';
import colors from '../../colors.scss';

const d3 = { select, selectAll, transition, line },
    duration = 1500,
    billion = 1000000000;

export const layers = {};

let config, deficitStartPosition, deficitRemainder, deficitY1;

function generateOverlay(number, id, label, rectColor) {
    const amount = (id === 'debt') ? number - config.deficitAmount : number,
        labelAmount = (id === 'debt') ? config.debtBalance : amount,
        count = Math.ceil(amount / billion),
        debtRowOne = (id === 'debt') ? dotsPerRow - deficitRemainder : 0,
        rows = Math.floor((count - debtRowOne) / dotsPerRow),
        remainder = (count - debtRowOne) % dotsPerRow,
        spacing = dotConstants.offset.y - (dotConstants.radius * 2),
        mainRectHeight = (rows * dotConstants.offset.y) - spacing / 2,
        secondaryRectHeight = (dotConstants.radius * 2) + spacing / 2;

    let overlayLayer = config.mainContainer.append('g').classed(id + '-layer', true),
        overlayHeight = mainRectHeight + secondaryRectHeight,
        mainY = 0,
        secondaryY = mainRectHeight;

    overlayLayer.attr('opacity', 0);

    if (id === 'debt') {
        mainY += secondaryRectHeight + deficitY1;
        secondaryY += secondaryRectHeight + deficitY1;
        overlayHeight += secondaryRectHeight + deficitY1;

        overlayLayer.append('rect')
            .attr('width', debtRowOne * dotConstants.offset.x)
            .attr('x', dotsPerRow * dotConstants.offset.x - debtRowOne * dotConstants.offset.x)
            .attr('y', deficitY1)
            .attr('height', secondaryRectHeight)
            .attr('fill', rectColor)
            .attr('opacity', 0.5);
    }

    overlayLayer.append('rect')
        .attr('width', dotsPerRow * dotConstants.offset.x)
        .attr('y', mainY)
        .attr('height', mainRectHeight)
        .attr('fill', rectColor)
        .attr('opacity', 0.5);

    overlayLayer.append('rect')
        .attr('width', remainder * dotConstants.offset.x)
        .attr('y', secondaryY)
        .attr('height', secondaryRectHeight)
        .attr('fill', rectColor)
        .attr('opacity', 0.5)

    if (id === 'revenue') {
        deficitStartPosition = {
            remainder: remainder,
            y: mainRectHeight
        }
    }

    labelMaker(overlayLayer, overlayHeight, label, labelAmount);

    overlayLayer.attr('data-height', overlayHeight);

    layers[id] = overlayLayer;
}

function addDebtLabel() {
    const yOffset = 50 + deficitY1;

    layers.debt.append('rect')
        .attr('width', 300)
        .attr('height', 60)
        .attr('fill', 'white')
        .attr('opacity', 0.7)
        .attr('y', yOffset)
        .attr('x', (dotsPerRow * dotConstants.offset.x - 300) / 2);

    layers.debt.append('text')
        .text('Prior year debt balance')
        .attr('fill', colors.textColorParagraph)
        .attr('text-anchor', 'middle')
        .attr('y', yOffset + 37)
        .attr('x', (dotsPerRow * dotConstants.offset.x) / 2)
        .style('font-size', 24)
}

function createRevenue() {
    generateOverlay(config.revenueAmount, 'revenue', 'Revenue', config.revenueColor);
}

function createSpending() {
    generateOverlay(config.spendingAmount, 'spending', 'Spending', config.spendingColor);
}

function createDebt() {
    generateOverlay(config.debtBalance, 'debt', 'Federal Debt', config.debtColor);
    addDebtLabel();
    layers.debt.attr('transform', translator(0, 100))
}

function createDeficitDots() {
    const deficitDots = initDeficitDots(config, deficitStartPosition);

    layers.master = config.mainContainer;
    layers.deficit = deficitDots.layer.attr('data-y', deficitStartPosition.y);
    layers.deficitCompareDots = deficitDots.deficitCompareDots;
    layers.debtCompareDots = deficitDots.debtCompareDots;

    deficitRemainder = deficitDots.remainder;
    deficitY1 = deficitDots.y - 2;

    deficitLabel(deficitDots.y, layers.deficit, config.reportedDeficitAmount)
}

export function createLayers(c) {
    config = c;

    createRevenue();
    createSpending();
    createDeficitDots();
    createDebt();
}