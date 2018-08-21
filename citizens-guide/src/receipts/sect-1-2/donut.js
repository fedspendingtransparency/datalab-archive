import { select } from 'd3-selection';
import { arc, pie } from 'd3-shape';

const d3 = { select, arc, pie };

var radius = 100;

var arcFn = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 70);

var pieFn = d3.pie()
    .sort(null)
    .value(function (d) { return d; });

export function createDonut(container, percent, diameter) {
    const data = [percent, 100 - percent];

    var g = container.selectAll(".arc")
        .data(pieFn(data))
        .enter()
        .append("g")
            .attr("class", "arc")
            .attr('transform', `scale(${diameter/200})`)

    g.append("path")
        .attr("d", arcFn)
        .style("fill", function(d, i){
            return (i === 0) ? '#dd6666' : '#dddddd'
        });
}