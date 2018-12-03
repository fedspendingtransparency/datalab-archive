import { select, selectAll } from 'd3-selection';
import { max } from 'd3-array';
import { getElementBox } from '../../../utils';

const d3 = { select, selectAll, max },
    parent = d3.select('#viz'),
    parentWidth = getElementBox(parent).width;

export function optimizeWidth(tree) {
    const min = tree ? 700 : 400;

    return d3.max([parentWidth, min]);
}

export function scaleToFit(svg) {
    const svgWidth = svg.attr('width');

    if (svgWidth > parentWidth) {
        svg.attr('transform', 'scale(0.8) translate(-60,-120)')
    }
}