import { translator } from '../../utils';
import { select } from 'd3-selection';
const d3 = { select };

export const receiptsConstants = {
    dotOffset: {
        x: 5,
        y: 8
    },
    xStart: 2,
    headingHeight: 70,
    dotsPerRow: 170,
    dotContainerClass: 'dot-container',
    incomeContainerClass: 'income-container'
}

export function dotFactory(container, x, y, i, color) {
    const c = container.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 1.5)
        .style('fill', color)
}

export function establishContainer() {
    const viz = d3.select('#viz');

    let svg = viz.select('svg');

    if (svg.size() === 0) {
        return viz.append('svg')
            .attr('shape-rendering', 'geometricPrecision')
            .attr('height', '400px')
            .attr('width', '1200px');
    } else {
        return svg;
    }
}