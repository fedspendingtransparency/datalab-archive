import { select, selectAll } from 'd3-selection';
import { getElementBox } from '../../utils';

const d3 = { select, selectAll };

export function optimizeWidth() {
    const parent = d3.select('#viz'),
        parentWidth = getElementBox(parent).width;

    return parentWidth;
}