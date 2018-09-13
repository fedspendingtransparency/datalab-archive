import { select } from 'd3-selection';
import { arc, pie } from 'd3-shape';
import { fractionToPercent, translator } from '../utils';

const d3 = { select, arc, pie },
    radius = 45,
    arcFn = d3.arc(),
    pieFn = d3.pie()
        .sort(null)
        .value(function (d) { return d; });

function setArcRadius(radius) {
    arcFn.outerRadius(radius)
        .innerRadius((radius) * .8)
}

export function createDonut(container, percent, diameter, fillColor) {
    const data = [percent * 100, 100 - percent * 100],
        g = container.append('g')
            .attr('transform', translator(diameter / 2, diameter / 2));

    setArcRadius(diameter / 2);

    var pie = g.selectAll(".arc")
        .data(pieFn(data))
        .enter()
        .append("g")
        .attr("class", "arc")

    var donut = pie.append("path")
        .attr("d", arcFn);

    donut.style("fill", function (d, i) {
        const shadedColor = fillColor || '#dd6666';
        return (i === 0) ? shadedColor : '#dddddd'
    });

    g.append('text')
        .text(fractionToPercent(percent))
        .attr('text-anchor', 'middle')
        .attr('font-weight', 'bold')
        .attr('y', 4);
}