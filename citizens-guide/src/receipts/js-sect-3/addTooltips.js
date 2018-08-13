import { select } from 'd3-selection';

const d3 = { select };

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

    globals.dataDots = globals.chart.selectAll('circle')
        .data(globals.data.reduce(dataReducer, []))
        .enter()
        .append('circle')
        .attr('stroke', function (d) {
            return d.color;
        })
        .attr('fill', 'white')
        .attr('r', 3)
        .attr('cx', function (d) {
            return globals.x(d.year)
        })
        .attr('cy', function (d) {
            return globals.y(0)
        })
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
        .attr('cy', function (d) {
            return globals.y(d.amount)
        })
        .style('opacity', function (d, i) {
            if (globals.simple || globals.zoomState === 'in' || d.amount > globals.zoomThreshold) {
                return 1;
            }

            return 0;
        })
}