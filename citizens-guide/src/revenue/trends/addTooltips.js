import { select, selectAll } from 'd3-selection';
import {translator, simplifyNumber, getElementBox, getTransform} from '../../utils';
import colors from '../../colors.scss';
import textColors from '../../bigPicture/scss/_bpVars.scss';

const d3 = { select, selectAll },
    dataDisc = 'data-disc',
    tooltipGroup = 'tooltip-group';

function destroyTooltip() {
    const tips = d3.selectAll('.' + tooltipGroup).remove();
    blankAllDiscs();
}

function blankAllDiscs() {
    d3.selectAll('.' + dataDisc).attr('fill', 'white')
}

function showTooltip(containerOffset) {
    const g = d3.select(this),
        tooltip = d3.select('.main').append('g').classed(tooltipGroup, true).attr('opacity', 0),
        svgBoxAttributes = getElementBox(d3.select('svg.main')),
        gElementBox = getElementBox(g),
        gTransform = getTransform(g),
        padding = { top: 30, left: 14 },
        height = 120,
        width = 140;

    blankAllDiscs();

    g.raise()

    console.log('colors.colorSpendingTrendCircles:', colors.colorPrimaryDarker);
    g.select('circle')
        .attr('fill', colors.colorPrimaryDarker)

    tooltip.append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('fill', 'white');

    tooltip.append('text')
        .data(g.data())
        .text(function (d) {
            return 'FY ' + d.year;
        })
        .attr('fill', colors.textColorParagraph)        
        .attr('font-weight', 'bold')
        .attr('font-size', 18)
        .attr('dy', padding.top)
        .attr('dx', padding.left)

    tooltip.append('line')
        .attr('x1', padding.left)
        .attr('y1', 45)
        .attr('x2', width - padding.left)
        .attr('y2', 45)
        .attr('stroke', '#aaa')
        .attr('stroke-width', 1)

    tooltip.append('text')
        .text('Value')
        .attr('fill', textColors.colorRevenueText)
        .attr('font-weight', 'bold')
        .attr('font-size', 15)
        .attr('dy', 70)
        .attr('dx', padding.left);

    tooltip.append('text')
        .data(g.data())
        .text(function (d) {
            return simplifyNumber(d.amount);
        })
        .attr('fill', colors.textColorParagraph)        
        .attr('font-weight', 'bold')
        .attr('font-size', 18)
        .attr('dy', 100)
        .attr('dx', padding.left)

    const finalOffset = {
        x: gTransform.x + containerOffset.x + padding.left,
        y: gTransform.y + containerOffset.y + 10
    };

    tooltip.attr('transform', function () {
        const distanceToRightEdge = svgBoxAttributes.right - (gElementBox.right + padding.left + width);
        if (distanceToRightEdge < 0) {
            // We need to take the finalOffset and subtract the amount it crosses over the edge of the svg.
            // Since distanceToRightEdge is negative, we'll just add it to finalOffset.x.
            return translator(finalOffset.x + distanceToRightEdge, finalOffset.y)
        } else {
            return translator(finalOffset.x, finalOffset.y)
        }
    });

    tooltip.transition().duration(200).attr('opacity', 1);

    document.addEventListener('click', destroyTooltip, {
        once: true,
        capture: true
    })
};

function dataReducer(accumulator, d) {
    return accumulator.concat(d.values.map(v => {
        return {
            year: v.year,
            amount: v.amount,
            name: d.name,
            officialName: d.officialName
        }
    }))
};

function rescale(globals, duration) {
    const dataDots = this;

    dataDots.transition()
        .duration(duration)
        .attr('transform', function (d) {
            return translator(globals.scales.x(d.year), globals.scales.y(d.amount));
        })
        .ease();

    dataDots.selectAll('circle').transition()
        .duration(duration)
        .style('opacity', function (d, i) {
            if (globals.noZoom || globals.zoomState === 'in' || d.amount > globals.zoomThreshold) {
                return 1;
            }

            return 0;
        })
        .ease();
}

export function addTooltips(globals, containerOffset) {
    const dataDots = globals.chart.selectAll('g.dataDots')
        .data(globals.data.reduce(dataReducer, []))
        .enter()
        .append('g')
        .classed('dataDots', true)
        .attr('transform', function (d) {
            return translator(globals.scales.x(d.year), globals.scales.y(0));
        })
        .on('click', function(d, i){
            if (globals.noDrilldown) {
                globals.trendLines.deEmphasize(d.name, globals, 'on')
            }
            
            showTooltip.bind(this)(containerOffset)
        })
        .on('mouseover', function(d, i){
            if (globals.noDrilldown) {
                globals.trendLines.deEmphasize(d.name, globals, 'on')
                globals.labels.setLabelActive(d.name)
            }
            
            showTooltip.bind(this)(containerOffset)
        })
        .on('mouseout', function(d, i){
            if (globals.noDrilldown) {
                globals.trendLines.deEmphasize(d.name, globals, 'off')
                globals.labels.setLabelInactive(d.name, 'tooltip')                
            }
            
            destroyTooltip.bind(this)()
        })

    dataDots.append('circle')
        .attr('stroke', colors.colorPrimaryDarker)
        .classed(dataDisc, true)
        .attr('fill', 'white')
        .attr('r', 4)
        .attr('cx', 0)
        .attr('cy', 0)
        .classed('pointer', true)
        .style('opacity', function (d, i) {
            if (globals.noZoom || d.amount > globals.zoomThreshold) {
                return 1;
            }

            return 0;
        })

    dataDots.append('circle')
        .classed('ghost-disc', true)
        .attr('fill', 'transparent')
        .attr('r', 8)
        .attr('cx', 0)
        .attr('cy', 0)
        .classed('pointer', true)
        .style('opacity', function (d, i) {
            if (globals.noZoom || d.amount > globals.zoomThreshold) {
                return 1;
            }

            return 0;
        })

    rescale.bind(dataDots)(globals, 1000);

    return {
        rescale: rescale.bind(dataDots)
    }
}

