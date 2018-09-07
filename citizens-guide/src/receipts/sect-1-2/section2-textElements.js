import { select, selectAll } from 'd3-selection';
import { line } from 'd3-shape';
import { translator, simplifyNumber, getElementBox, wordWrap, getTransform } from '../../utils';

const d3 = { select, selectAll, line },
    noFitOffset = 50;

// let noFitClimb,
//     foundFit;

function resetNoFits() {
    noFitClimb = 14 - noFitOffset,
        foundFit = false;
}

function processNoFits(d, elem, config) {
    const textGroup = d3.select(elem),
        noFit = textGroup.classed('no-fit');

    let prevTranslate;

    if (!noFit) {
        config.foundFit = true;
        return;
    }

    prevTranslate = getTransform(textGroup);

    textGroup.selectAll('text').attr('text-anchor', function () {
        return (config.foundFit) ? 'end' : 'start';
    })

    textGroup.attr('transform', translator(prevTranslate.x, config.noFitClimb))

    config.noFitClimb -= noFitOffset;

    textGroup.append('path')
        .attr('stroke', '#4a4a4a')
        .attr('stroke-width', 1)
        .attr('d', function () {
            const points = [
                [0, 22],
                [0, Math.abs(config.noFitClimb) - 50]
            ];

            return d3.line()(points);
        });
}

function acceptWordWrap(textGroup) {
    const activity = textGroup.select('.activity'),
        details = textGroup.select('.details');

    activity.attr('y', -10);
    details.attr('y', 28);
}

function tryWrappingActivity(dom, d, boxWidth) {
    const textGroup = d3.select(dom),
        activity = textGroup.select('.activity');

    wordWrap(activity, boxWidth);

    if (getElementBox(textGroup).width > boxWidth) {
        activity.selectAll('*').remove();
        activity.text(d.activity);
        textGroup.classed('no-fit', true);
        textGroup.selectAll('text').attr('style', null);
    } else {
        acceptWordWrap(textGroup);
    }
}

function checkFit(d, elem, xScale) {
    const x1 = d.x0 + d.amount,
        boxWidth = xScale(x1) - xScale(d.x0),
    textWidth = elem.getBoundingClientRect().width;

    if (boxWidth > textWidth) {
        return;
    }

    tryWrappingActivity(elem, d, boxWidth);

}

export function addTextElements(categoryData, detailsGroup, xScale, baseDimensions, more) {
    const line = d3.line(),
        details = (more) ? categoryData.slice(3) : categoryData.slice(0, 3),
        noFitConfig = {
            noFitClimb: 14 - noFitOffset
        };

    let t, textGroup;

    textGroup = detailsGroup.selectAll('g')
        .data(details)
        .enter()
        .append('g')
        .attr('transform', function (d, i) {
            const x1 = d.x0 + d.amount,
                width = xScale(x1) - xScale(d.x0),
                x = xScale(d.x0) + width / 2,
                y = baseDimensions.height / 2;

            return translator(x, y);
        })

    textGroup.append('text')
        .text(function (d) {
            return d.activity;
        })
        .attr('font-weight', 'bold')        
        .classed('activity', true)
        .attr('text-anchor', 'middle')
        .attr('style', 'font-weight: bold')
        .attr('style', 'fill:white');

    textGroup.append('text')
        .classed('details', true)
        .attr('text-anchor', 'middle')
        .attr('style', 'fill:white')
        .attr('y', 20)
        .text(function (d, i) {
            return simplifyNumber(d.amount) + ' / ' + d.percent_total + '%';
        })

    textGroup.each(function(d) {
        checkFit(d, this, xScale);
    });

    textGroup.each(function(d) {
        processNoFits(d, this, noFitConfig)
    })

    detailsGroup.transition()
        .duration(500)
        .attr('opacity', 1)
        .ease()
}