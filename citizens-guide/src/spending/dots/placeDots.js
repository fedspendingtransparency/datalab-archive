import { select, selectAll } from 'd3-selection';
import { establishContainer } from "../../utils";

const d3 = { select, selectAll };

const dotOffset = {
    x: 5,
    y: 6
};

let svg,
    width;

function dotFactory(container, x, y, color) {
    color = color || 'blue';

    container.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 2)
        .style('fill', color)
}

export function placeDots() {
    width = d3.select('#viz').node().getBoundingClientRect().width;

    console.log(width)
    
    svg = establishContainer(500, width);
}