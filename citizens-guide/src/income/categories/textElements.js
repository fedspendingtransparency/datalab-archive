import { select, selectAll } from 'd3-selection';
import { line } from 'd3-shape';
import { translator, simplifyNumber, getElementBox, wordWrap, getTransform } from '../../utils';
import colors from '../../colors.scss';

const d3 = { select, selectAll, line },
    noFitOffset = 50;

function processNoFits(d, elem, config) {
    const textGroup = d3.select(elem),
        lookahead = textGroup.classed('lookahead'),
        noFit = textGroup.classed('no-fit');

    let prevTranslate;

    if (!noFit) {
        config.noFitClimb = (config.state === 'details') ? 280 : 14 - noFitOffset;
        return;
    }

    if (lookahead) {
        config.noFitClimb = 280 + (noFitOffset * (config.lookaheadCount -1 ));
        config.lookaheadCount -= 1;
    }
    
    prevTranslate = getTransform(textGroup);

    textGroup.selectAll('text').attr('text-anchor', function () {
        return (textGroup.classed('lookahead')) ? 'start' : 'end';
    })

    textGroup.attr('transform', translator(prevTranslate.x, config.noFitClimb))

    if (config.state === 'details') {
        config.noFitClimb += noFitOffset;
    } else {
        config.noFitClimb -= noFitOffset;
    }

    textGroup.append('path')
        .attr('stroke', colors.textColorParagraph)
        .attr('stroke-width', 1)
        .attr('d', function () {
            const mainPoints = [
                [0, 22],
                [0, Math.abs(config.noFitClimb) - 50]
            ],
                detailPoints = [
                    [0,-20],
                    [0,-config.noFitClimb + 300]
                ],
                points = (config.state === 'details') ? detailPoints : mainPoints;

            return d3.line()(points);
        });
}

function acceptWordWrap(textGroup) {
    const activity = textGroup.select('.activity'),
        details = textGroup.select('.details');

    activity.attr('y', -10);
    details.attr('y', 28);
}

function tryWrappingActivity(dom, d, boxWidth, config) {
    const textGroup = d3.select(dom),
        activity = textGroup.select('.activity');

    let tSpanSize;

    wordWrap(activity, boxWidth);

    tSpanSize = activity.selectAll('tspan').size();

    if (getElementBox(textGroup).width > boxWidth || tSpanSize > 2) {
        activity.selectAll('*').remove();
        activity.text(function (d) {
            return (config.state === 'details') ? d.sub_activity : d.activity;
        })
        textGroup.classed('no-fit', true);
        textGroup.classed('lookahead', function(){
            return (!config.foundFit);
        })
        textGroup.selectAll('text').attr('style', null);
    } else {
        config.foundFit = true;
        acceptWordWrap(textGroup);
    }
}

function checkFit(d, elem, xScale, config) {
    const x1 = d.x0 + d.amount,
        boxWidth = (config.state === 'details') ? d.width : xScale(x1) - xScale(d.x0),
        textWidth = elem.getBoundingClientRect().width;

    if (boxWidth > textWidth) {
        config.foundFit = true;
        return;
    }

    tryWrappingActivity(elem, d, boxWidth, config);

}

export function addTextElements(data, detailsGroup, xScale, baseDimensions, state) {
    const line = d3.line(),
        noFitClimb = (state === 'details') ? 280 : 14 - noFitOffset,
        config = {
            noFitClimb: noFitClimb,
            state: state
        };

    let t, textGroup, details;

    if (state === 'out' || !state) {
        details = data.slice(0, 3);
    } else if (state === 'in') {
        details = data.slice(3);
    } else {
        details = data;
    }

    textGroup = detailsGroup.selectAll('g')
        .data(details)
        .enter()
        .append('g')
        .attr('transform', function (d, i) {
            const x1 = d.x0 + d.amount,
                width = xScale(x1) - xScale(d.x0),
                x = xScale(d.x0) + width / 2,
                y = baseDimensions.height / 2;

            if (state === 'details') {
                return translator(d.xStart + d.width / 2, 202)
            }

            return translator(x, y);
        })

    textGroup.append('text')
        .text(function (d) {
            return (state === 'details') ? d.sub_activity : d.activity;
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
            let p = parseInt(d.percent_total);

            if (p < 1) {
                p = '<1'
            }
            
            return simplifyNumber(d.amount) + ' (' + p + '%)';
        })

    textGroup.each(function (d) {
        checkFit(d, this, xScale, config);
    });

    config.lookaheadCount = detailsGroup.selectAll('.lookahead').size();

    textGroup.each(function (d) {
        processNoFits(d, this, config)
    })

    detailsGroup.transition()
        .duration(500)
        .attr('opacity', 1)
        .ease()

    return textGroup;
}