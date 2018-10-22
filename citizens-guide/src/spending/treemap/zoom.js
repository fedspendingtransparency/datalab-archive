import { select, selectAll } from 'd3-selection';
import { fadeAndRemove } from '../../utils';
import { transition } from 'd3-transition';
import { drawChart } from './chart';

const d3 = { select, selectAll, transition };

function loadNewLayer(d, leaf) {
    leaf.attr('opacity', 1)
        .transition()
        .delay(1000)
        .duration(500)
        .attr('opacity', 0);

    drawChart(d.data.subcategories, true);
}

function drilldown(d, leaf, height, width) {
    const rect = leaf.select('rect'),
        duration = 1000;

    leaf.transition()
        .duration(duration)
        .attr('transform', 'translate(0,0)');

    rect.transition()
        .duration(duration)
        .attr('width', width)
        .attr('height', height)

    setTimeout(loadNewLayer, duration, d, leaf);
}

export function zoom(index, leaves, height, width) {
    leaves.each(function (d, i) {
        const leaf = d3.select(this);

        if (i !== index) {
            fadeAndRemove(leaf.attr('opacity', 1), 1000);
        } else {
            setTimeout(drilldown, 500, d, leaf, height, width);
        }
    })
}