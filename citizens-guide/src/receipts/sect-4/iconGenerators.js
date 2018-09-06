
import { select } from 'd3-selection';

const d3 = { select }

export function addButtonIcon(svg) {
    svg.append('circle')
        .attr('r', 9)
        .attr('stroke', 'white')
        .attr('stroke-width', 1)
        .attr('fill', 'none')
        .attr('cx', 10)
        .attr('cy', 10)

    svg.append('line')
        .attr('x1', 5)
        .attr('x2', 15)
        .attr('y1', 10)
        .attr('y2', 10)
        .attr('stroke', 'white')
        .attr('stroke-width', 1)

    svg.append('line')
        .attr('x1', 10)
        .attr('x2', 10)
        .attr('y1', 5)
        .attr('y2', 15)
        .attr('stroke', 'white')
        .attr('stroke-width', 1)
}

export function addXIcon(svg) {
    svg.attr('width', 10)
        .attr('height', 10)

    svg.append('line')
        .attr('x1', 0)
        .attr('x2', 10)
        .attr('y1', 0)
        .attr('y2', 10)
        .attr('stroke', 'white')
        .attr('stroke-width', 1)

    svg.append('line')
        .attr('x1', 0)
        .attr('x2', 10)
        .attr('y1', 10)
        .attr('y2', 0)
        .attr('stroke', 'white')
        .attr('stroke-width', 1)
}

export function addSearchIcon(svg) {
    const lineColor = '#555';

    svg.attr('width', 20)
        .attr('height', 20)

    svg.append('circle')
        .attr('r', 7)
        .attr('stroke', lineColor)
        .attr('stroke-width', 1)
        .attr('fill', 'none')
        .attr('cx', 8)
        .attr('cy', 8)

    svg.append('line')
        .attr('x1', 13)
        .attr('x2', 19)
        .attr('y1', 13)
        .attr('y2', 19)
        .attr('stroke', 'white')
        .attr('stroke-width', 1)
}

export function addCaretIcon(svg) {
    const lineColor = 'white';
    svg.append('line')
        .attr('x1', 0)
        .attr('y1', 5)
        .attr('x2', 8)
        .attr('y2', 11)
        .attr('stroke', lineColor)
        .attr('stroke-width', 1);

    svg.append('line')
        .attr('x1', 8)
        .attr('y1', 11)
        .attr('x2', 16)
        .attr('y2', 5)
        .attr('stroke', lineColor)
        .attr('stroke-width', 1)
}

export function adjustCaretIcon(svg, direction) {
    var lines = svg.selectAll('line');
    lines.exit().remove();
    if (direction === 'up') {
        lines.each(function(d,i,j){
            const curLine = d3.select(j[i]);
            if(i === 0){
            curLine.transition()
            .duration(500)
            .attr('x1', 0)
            .attr('y1', 11)
            .attr('x2', 8)
            .attr('y2', 6)
            }
            else {
                curLine.transition()
                .duration(500)
                .attr('x1', 8)
                .attr('y1', 6)
                .attr('x2', 16)
                .attr('y2', 11);
            }
        });
    } else {
        lines.each(function(d,i,j){
            const curLine = d3.select(this);
            if(i === 1){
                curLine.transition()
                .duration(500)
                .attr('x1', 8)
                .attr('y1', 11)
                .attr('x2', 16)
                .attr('y2', 6);
                
            }
            else {
                curLine.transition()
                .duration(500)
                .attr('x1', 0)
                .attr('y1', 6)
                .attr('x2', 8)
                .attr('y2', 11)
            }
        });
    }
}