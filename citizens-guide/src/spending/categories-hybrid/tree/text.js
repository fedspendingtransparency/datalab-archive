import { select, selectAll } from 'd3-selection';
import { simplifyNumber, getElementBox, wordWrap } from '../../../utils';

const d3 = { select, selectAll },
    padding = 10,
    lineHeight = 20;

function tryWordWrap(d, textGroup, box) {
    const activity = textGroup.select('.activity'),
        details = textGroup.select('.details');

    let height, textGroupBox;

    wordWrap(activity, box.width);

    details.attr('y', getElementBox(activity).height + lineHeight + 10);

    textGroupBox = getElementBox(textGroup);

    if (box.height < textGroupBox.height || box.width < textGroupBox.width) {
        textGroup.remove();
    } else {
        textGroup.select('.activity').selectAll('tspan').attr('x', padding);
    }
}

function checkFit(d, group) {
    const textGroup = d3.select(group),
        textGroupBox = getElementBox(textGroup),
        box = {
            width: d.x1 - d.x0 - padding * 2,
            height: d.y1 - d.y0 - padding * 2
        };

    if (box.height < textGroupBox.height) {
        textGroup.remove();
    } else if (box.width < textGroupBox.width) {
        tryWordWrap(d, textGroup, box)
    }
}

export function placeText(d) {
    const textGroup = d3.select(this).append('g');

    textGroup.append('text')
        .text(function (d) {
            return d.data.activity;
        })
        .attr('font-size', 16)
        .classed('activity', true)
        .attr('x', padding)
        .attr('y', padding + lineHeight)
        .attr('font-weight', '600');

    textGroup.append('text')
        .attr('font-size', 16)
        .classed('details', true)
        .attr('x', padding)
        .attr('y', 50)
        .text(function (d, i) {
            return simplifyNumber(d.data.amount);
        })

    textGroup.each(function (d) {
        checkFit(d, this);
    });
}