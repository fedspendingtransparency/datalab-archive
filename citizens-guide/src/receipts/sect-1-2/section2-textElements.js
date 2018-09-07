import { select, selectAll } from 'd3-selection';
import { line } from 'd3-shape';
import { translator, simplifyNumber, getElementBox, wordWrap, getTransform } from '../../utils';

const d3 = { select, selectAll, line },
    noFitOffset = 50;

let xScale,
    noFitClimb,
    foundFit;

function resetNoFits() {
    noFitClimb = 14 - noFitOffset,
        foundFit = false;
}

function processNoFits(d, i) {
    const textGroup = d3.select(this),
        noFit = textGroup.classed('no-fit');

    let prevTranslate;

    if (!noFit) {
        foundFit = true;
        return;
    }

    prevTranslate = getTransform(textGroup);

    textGroup.selectAll('text').attr('text-anchor', function () {
        return (foundFit) ? 'end' : 'start';
    })

    textGroup.attr('transform', translator(prevTranslate.x, noFitClimb))

    noFitClimb -= noFitOffset;

    textGroup.append('path')
        .attr('stroke', '#4a4a4a')
        .attr('stroke-width', 1)
        .attr('d', function () {
            const points = [
                [0, 22],
                [0, Math.abs(noFitClimb) - 50]
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

function checkFit(d) {
    const x1 = d.x0 + d.amount,
        boxWidth = xScale(x1) - xScale(d.x0),
    textWidth = this.getBoundingClientRect().width;

    if (boxWidth > textWidth) {
        return;
    }

    tryWrappingActivity(this, d, boxWidth);

}

export function addTextElements(categoryData, detailsGroup, _xScale, baseDimensions, more) {
    const line = d3.line(),
        details = (more) ? categoryData.slice(3) : categoryData.slice(0, 3);

    let t, textGroup;


    resetNoFits();

    xScale = _xScale;

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

    textGroup.each(checkFit);

    foundFit = false;

    textGroup.each(processNoFits)

    detailsGroup.transition()
        .duration(500)
        .attr('opacity', 1)
        .ease()
}