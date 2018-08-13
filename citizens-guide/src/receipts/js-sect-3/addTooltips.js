import { select, selectAll } from 'd3-selection';
import { translator, simplifyNumber, getElementBox } from '../../utils';

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

function showTooltip(d) {
    const g = d3.select(this),
        tooltip = g.append('g').classed(tooltipGroup, true).attr('opacity', 0),
        padding = { top: 30, left: 14 },
        height = 100,
        width = 140;

    blankAllDiscs();

    g.raise()

    g.select('circle')
        .attr('fill', function (d) {
            return d.color;
        })

    tooltip.append('rect')
        .attr('width', width)
        .attr('height', 100)
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('fill', 'white');

    tooltip.append('text')
        .text(function (d) {
            return 'FY ' + d.year;
        })
        .attr('font-weight', 'bold')
        .attr('font-size', 18)
        .attr('dy', padding.top)
        .attr('dx', padding.left)

    tooltip.append('line')
        .attr('x1', padding.left)
        .attr('y1', 40)
        .attr('x2', width - padding.left)
        .attr('y2', 40)
        .attr('stroke', '#aaa')
        .attr('stroke-width', 1)

    tooltip.append('text')
        .text('Value')
        .attr('style', 'fill:#4A90E2')
        .attr('font-weight', 'bold')
        .attr('font-size', 12)
        .attr('dy', 60)
        .attr('dx', padding.left);

    tooltip.append('text')
        .text(function (d) {
            return simplifyNumber(d.amount);
        })
        .attr('font-weight', 'bold')
        .attr('font-size', 18)
        .attr('dy', 80)
        .attr('dx', padding.left)

    tooltip.attr('transform', function () {

        if (getElementBox(tooltip).right > getElementBox(d3.select('svg')).right) {
            return translator(getElementBox(d3.select('svg')).right - getElementBox(tooltip).right, 0)
        } else {
            return translator(10, 0)
        }
    })

    tooltip.transition().duration(200).attr('opacity', 1);
    
    document.addEventListener('click', destroyTooltip, {
        once: true,
        capture: true
    })
}

export function addTooltips(globals) {
    function dataReducer(accumulator, d) {
        return accumulator.concat(d.values.map(v => {
            return {
                year: v.year,
                amount: v.amount,
                color: d.color
            }
        }))
    }

    globals.dataDots = globals.chart.selectAll('g.dataDots')
        .data(globals.data.reduce(dataReducer, []))
        .enter()
        .append('g')
        .classed('dataDots', true)
        .attr('transform', function (d) {
            return translator(globals.x(d.year), globals.y(0));
        })
        .on('click', showTooltip);

    globals.dataDots.append('circle')
        .attr('stroke', function (d) {
            return d.color;
        })
        .classed(dataDisc, true)        
        .attr('fill', 'white')
        .attr('r', 3)
        .attr('cx', 0)
        .attr('cy', 0)
        .classed('pointer', true)
        .style('opacity', function (d, i) {
            if (globals.simple || d.amount > globals.zoomThreshold) {
                return 1;
            }

            return 0;
        })

    repositionDataDots(1000, globals);
}

export function repositionDataDots(duration, globals) {
    globals.dataDots.transition()
        .duration(duration)
        .attr('transform', function (d) {
            return translator(globals.x(d.year), globals.y(d.amount));
        })
        .ease();

    globals.dataDots.selectAll('circle').transition()
        .duration(duration)
        .style('opacity', function (d, i) {
            if (globals.simple || globals.zoomState === 'in' || d.amount > globals.zoomThreshold) {
                return 1;
            }

            return 0;
        })
        .ease();
}