import { select } from 'd3-selection';
import { max } from 'd3-array';
import { getElementBox, translator, wordWrap } from '../../utils';

const d3 = { select, max };

let pendingTransitionParent,
    pendingInactive;

function _setInactive(g) {
    const bar = g.select('.color-bar');

    g.classed('active', false)

    bar.transition()
        .duration(700)
        .attr('width', 3)
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
        .attr('x', 8 - targetWidth)
        .attr('opacity', 0.3)
        .ease()
}

export function setLabelInactive() {
    const g = d3.select(this);

    pendingTransitionParent = this;
    pendingInactive = setTimeout(_setInactive, 200, g);
}

export function placeLabels(globals) {
    const labelContainer = globals.chart.append('g')
        .classed('labels', true);

    globals.labelGroups = labelContainer.selectAll('g')
        .data(globals.data)
        .enter()
        .append('g')
        .attr('opacity', function (d) {
            if (globals.simple || d3.max(d.values, r => r.amount) > globals.zoomThreshold) {
                return 1;
            }

            return 0;
        })
        .attr('transform', function (d) {
            d.y0 = globals.y(d.values[0].amount);
            d.y1 = globals.y(d.values[d.values.length-1].amount);
            return translator(-globals.labelPadding, d.y0);
        });

    globals.labelGroups.append('text')
        .text(function (d) {
            return d.name;
        })
        .attr('text-anchor', 'end')
        .each(function (d) {
            const t = d3.select(this);

            wordWrap(t, globals.labelWidth);
        });


    // color bar
    globals.labelGroups.append('rect')
        .classed('color-bar', true)
        .attr('width', 3)
        .attr('height', function () {
            return this.previousSibling.getBoundingClientRect().height + 10;
        })
        .attr('x', 5)
        .attr('y', -20)
        .attr('fill', function (d) {
            return d.color;
        })
        .attr('opacity', 1)
        .each(function () {
            d3.select(this).lower();
        })

    // ghost rectangle
    if (!globals.simple){
        globals.labelGroups.append('rect')
        .attr('width', function () {
            return this.previousSibling.getBoundingClientRect().width + 10;
        })
        .attr('height', function () {
            return this.previousSibling.getBoundingClientRect().height + 10;
        })
        .attr('x', function () {
            return 0 - this.previousSibling.getBoundingClientRect().width - 5;
        })
        .attr('y', function () {
            return - 20;
        })
        .attr('fill', function (d) {
            return 'white';
        })
        .each(function () {
            d3.select(this).lower();
        })
    }
}