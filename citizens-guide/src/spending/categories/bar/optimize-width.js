import { select, selectAll } from 'd3-selection';
import { max } from 'd3-array';
import { getElementBox } from '../../../utils';

const d3 = { select, selectAll, max },
    parent = d3.select('#viz'),
    parentWidth = getElementBox(parent).width;

export function optimizeWidth() {
    return getElementBox(parent).width;
}

// export function scaleToFit(svg) {
//     const svgWidth = svg.attr('width');
//
//     if (svgWidth > parentWidth) {
//         svg.attr('transform', 'scale(0.8) translate(-60,-120)')
//     }
// }