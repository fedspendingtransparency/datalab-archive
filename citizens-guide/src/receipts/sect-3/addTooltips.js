import { select, selectAll } from 'd3-selection';
import { translator, simplifyNumber, getElementBox } from '../../utils';
import colors from '../../colors.scss';

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

function showTooltip(d, i) {
    const g = d3.select(this),
        tooltip = g.append('g').classed(tooltipGroup, true).attr('opacity', 0),
        padding = { top: 30, left: 14 },
        height = 100,
        width = 140;

    blankAllDiscs();

    g.raise()

    g.select('circle')
        .attr('fill', colors.colorPrimaryDarker)

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
            return translator(getElementBox(d3.select('svg')).right - getElementBox(tooltip).right, 10)
        } else {
            return translator(10, 0)
        }
    })

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

export function addTooltips(globals) {
    const dataDots = globals.chart.selectAll('g.dataDots')
        .data(globals.data.reduce(dataReducer, []))
        .enter()
        .append('g')
        .classed('dataDots', true)
        .attr('transform', function (d) {
            return translator(globals.scales.x(d.year), globals.scales.y(0));
        })
        .on('click', showTooltip)
        .on('mouseover', showTooltip)
        .on('mouseout', destroyTooltip)

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

