import { select } from 'd3-selection';
import { getElementBox } from '../../utils';

const d3 = { select };

let pendingTransitionParent,
    pendingInactive;

function _setInactive(g) {
    const bar = g.select('.color-bar');

    g.classed('active', false)

    bar.transition()
        .duration(700)
        .attr('width', 10)
        .attr('x', 5)
        .attr('opacity', 1)      
        .ease()
}

export function setLabelActive() {
    const g = d3.select(this),
        bar = g.select('.color-bar'),
        targetWidth = getElementBox(g).width;

    if (pendingTransitionParent === this && pendingInactive) {
        clearTimeout(pendingInactive);
    }

    if (g.classed('active')) {
        return;
    }

    g.classed('active', true)

    bar.transition()
        .duration(300)
        .attr('width', targetWidth)
        .attr('x', 15 - targetWidth)
        .attr('opacity', 0.3)
        .ease()
}

export function setLabelInactive() {
    const g = d3.select(this);

    pendingTransitionParent = this;
    pendingInactive = setTimeout(_setInactive, 200, g);
}