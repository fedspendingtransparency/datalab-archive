import { select, selectAll } from 'd3-selection';
import { translator, simplifyNumber, getElementBox, wordWrap } from '../../../utils';
import { line } from 'd3-shape';
import { drawChart } from './chart';

const d3 = { select, selectAll };

let maxTextWidth;

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

function findMaxWidth() {
    const thisWidth = getElementBox(d3.select(this)).width;

    maxTextWidth = (thisWidth > maxTextWidth) ? thisWidth : maxTextWidth;
}

export function placeLabels(containers, config) {
    const text = containers.append('text')
        .text(function (d) {
            return d.activity;
        })
        .attr('x', function (d) {
            return d.barX1 + 20;
        })
        .attr('y', 20)
        .attr('font-size', 14)
        .attr('font-weight', '600')
        .attr('fill', 'black');

    let xOffset;

    maxTextWidth = 0;

    text.append('tspan')
        .attr('font-size', 14)
        .classed('details', true)
        .attr('dy', 20)
        .attr('font-weight', '300')        
        .attr('x', function (d) {
            return d.barX1 + 20;
        })
        .text(function (d, i) {
            let p = parseInt(d.percent_total);

            if (Math.abs(p) < 1) {
                p = '<1'
            }

            return simplifyNumber(d.amount) + ' (' + p + '%)';
        })

    text.each(findMaxWidth);

    //xOffset = config.width - maxTextWidth;

    // text.attr('x', xOffset);
    // text.selectAll('tspan').attr('x', xOffset);

    //return xOffset - 10;
}