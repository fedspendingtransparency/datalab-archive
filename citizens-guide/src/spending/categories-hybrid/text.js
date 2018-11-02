import { select, selectAll } from 'd3-selection';
import { translator, simplifyNumber, getElementBox, wordWrap } from '../../utils';
import { line } from 'd3-shape';
import { drawChart } from './chart';

const d3 = { select, selectAll };

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

export function placeLabels(containers, config) {
    const x = config.barWidth + 10, 
    text = containers.append('text')
        .text(function (d) {
            return d.activity;
        })
        .attr('x', x)
        .attr('y', 20)
        .attr('font-size', 16)
        .attr('font-weight', '600')
        .attr('fill', 'black')
        .on('click', function (d) {
            if (!d.subcategories) {
                return;
            }

            drawChart(d.subcategories, d.activity, true)
        })

    text.append('tspan')
        .attr('font-size', 16)
        .classed('details', true)
        .attr('dy', 20)
        .attr('x', x)
        .text(function (d, i) {
            let p = parseInt(d.percent_total);

            if (Math.abs(p) < 1) {
                p = '<1'
            }

            return simplifyNumber(d.amount) + ' (' + p + '%)';
        })
}