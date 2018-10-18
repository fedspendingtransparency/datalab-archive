import { select, selectAll } from 'd3-selection';
import { translator, simplifyNumber, getElementBox, wordWrap } from '../../utils';
import { line } from 'd3-shape';

const fitThreshold = 50;

let width,
    height,
    scaleY,
    tracker;

function getBoxHeight(d) {
    return scaleY(d.stack0) - scaleY(d.stack1);
}

function setTranslate(d) {
    const boxHeight = getBoxHeight(d);

    let x = width / 2,
        y = scaleY(d.stack1 + (d.stack0 - d.stack1) / 2 - 40);

    if (boxHeight < fitThreshold) {
        x = width + 150;
        y = height - tracker * fitThreshold;

        tracker += 1;
    }

    return translator(x, y);
}

export function placeLabels(mainG, data, _scaleY, _width, _height) {
    width = _width;
    height = _height;
    scaleY = _scaleY;

    tracker = 1;

    const textGroups = mainG.append('g')
        .selectAll('g.text-elements')
        .data(data)
        .enter()
        .append('g')
        .classed('text-elements', true)
        .attr('transform', setTranslate);

    const textElements = textGroups.append('text')
        .text(function (d) {
            return d.activity; f
        })
        .attr('font-size', 16)
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
}