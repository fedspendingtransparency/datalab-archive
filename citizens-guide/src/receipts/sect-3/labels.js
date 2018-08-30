import { select, selectAll } from 'd3-selection';
import { max } from 'd3-array';
import { getElementBox, translator, wordWrap } from '../../utils';

const d3 = { select, selectAll, max };

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

function deselectOthers(labelGroups) {
    labelGroups.filter('.selected')
        .classed('selected', false)
        .each(setLabelInactive);
}

function setLabelActive() {
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

function setLabelInactive() {
    const g = d3.select(this);

    pendingTransitionParent = this;
    pendingInactive = setTimeout(_setInactive, 200, g);
}

function sortByFirstYear(a, b) {
    a = a.values[0].amount;
    b = b.values[0].amount;

    if (a > b) { return -1 }
    if (a < b) { return 1 }
    return 0;
}

function placeLabels(globals) {
    const labelContainer = globals.chart.append('g')
        .classed('labels', true);

    let runningY = 0,
        labelGroups;

    labelGroups = labelContainer.selectAll('g')
        .data(globals.data.sort(sortByFirstYear))
        .enter()
        .append('g')
        .attr('opacity', function (d) {
            if (globals.simple || d3.max(d.values, r => r.amount) > globals.zoomThreshold) {
                return 1;
            }

            return 0;
        });

    labelGroups.append('text')
        .text(function (d) {
            return d.name;
        })
        .attr('text-anchor', 'end')
        .each(function (d) {
            const t = d3.select(this);

            wordWrap(t, globals.labelWidth);
        });


    // color bar
    labelGroups.append('rect')
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
    if (!globals.simple) {
        labelGroups.append('rect')
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

    labelGroups.attr('transform', function (d) {
        const box = getElementBox(d3.select(this));

        let yTranslate;

        d.y0 = globals.scales.y(d.values[0].amount);
        d.y1 = globals.scales.y(d.values[d.values.length - 1].amount);

        if (d.y0 - box.height < runningY) {
            yTranslate = runningY + box.height;
        } else {
            yTranslate = d.y0
        }

        runningY = yTranslate;

        return translator(-globals.labelPadding, yTranslate);
    });

    return labelGroups;
}

function enableDrilldown(labelGroups, globals) {
    labelGroups.attr('style', 'cursor:pointer')
        .on('click', function (d) {
            deselectOthers(labelGroups);

            this.classList.add('selected');

            globals.onDrilldown(d);
        })
        .on('mouseover', setLabelActive)
        .on('mouseout', function () {
            if (!d3.select(this).classed('selected')) {
                setLabelInactive.bind(this)();
            }
        });

    nudge(labelGroups);
}

function nudge(labelGroups) {
    labelGroups.sort(function (a, b) {
        a = a.values[0].amount;
        b = b.values[0].amount;

        if (a < b) {
            return 1;
        }

        if (a > b) {
            return -1;
        }

        return 0;
    })
        .each(function (d, i) {
            const self = this,
                initialPause = 2000;

            setTimeout(function () {
                setLabelActive.bind(self)();
            }, initialPause + i * 150)

            setTimeout(function () {
                setLabelInactive.bind(self)();
            }, initialPause + i * 150)
        })
}

function rescale(globals, duration) {
    this.transition()
        .duration(duration)
        .attr('opacity', function (d) {
            if (globals.simple || globals.zoomState === 'in' || d3.max(d.values, r => r.amount) > globals.zoomThreshold) {
                return 1;
            }

            return 0;
        })
        .attr('transform', function (d) {
            return translator(-globals.labelPadding, globals.scales.y(d.values[0].amount));
        });
}

export function renderLabels(globals) {
    const labels = placeLabels(globals);

    if (!globals.simple) {
        enableDrilldown(labels, globals);
    }

    return {
        rescale: rescale.bind(labels)
    }
}