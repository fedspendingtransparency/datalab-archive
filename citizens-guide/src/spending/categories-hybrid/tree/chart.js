import { select, selectAll } from 'd3-selection';
import { treemap, hierarchy } from 'd3-hierarchy';
import { transition } from 'd3-transition';
import { establishContainer, getElementBox } from '../../../utils';
import { displayNegatives } from './showNegatives';
import { placeText } from './text';
import { zoom } from './zoom';
import { optimizeWidth } from '../bar/optimize-width';

const d3 = { select, selectAll, treemap, hierarchy, transition },
    height = 1200;

let width;

function drawTreemap(config) {
    const svg = establishContainer(height, width),
        layer = svg.append('g')
            .attr('opacity', 0)
            .classed('layer', true);

    const leaf = layer.selectAll("g")
        .data(config.data.leaves())
        .classed('leaf', true)
        .enter().append("g")
        .attr("transform", d => `translate(${d.x0},${d.y0})`);

    leaf.append("rect")
        .attr('fill', '#ccc')
        .attr("fill-opacity", 0.6)
        .attr("width", d => d.x1 - d.x0)
        .attr("height", d => d.y1 - d.y0);

    leaf.each(placeText);

    if (!config.drilldown) {
        leaf.on('click', function (d, i) {
            zoom(i, leaf, height, width)
        })
            .attr('style', 'cursor:pointer');
    }

    layer.transition()
        .duration(1000)
        .attr('opacity', 1);
}

function prepareData(data) {
    const treemap = d3.treemap()
        .size([width, height])
        .padding(1)
        .round(true);

    let hierarchy;

    data.forEach(r => {
        r.value = r.amount
    });

    hierarchy = d3.hierarchy({
        name: 'spending',
        children: data
    }).sum(d => d.amount);

    return treemap(hierarchy);
}

export function drawChart(data, drilldown) {
    const config = {},
        negativeData = data.filter(r => r.amount <= 0);

    width = getElementBox(d3.select('#viz')).width;

    config.drilldown = drilldown;
    config.data = prepareData(data.filter(r => r.amount > 0));

    displayNegatives(negativeData);

    drawTreemap(config);
}