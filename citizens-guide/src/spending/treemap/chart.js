import { treemap, hierarchy } from 'd3-hierarchy';
import { establishContainer } from '../../utils';
import { displayNegatives } from './showNegatives';
import { placeText } from './text';

const d3 = { treemap, hierarchy },
    height = 700,
    width = 900;

function drawTreemap(data) {
    const svg = establishContainer(height);

    const leaf = svg.selectAll("g")
        .data(data.leaves())
        .enter().append("g")
        .attr("transform", d => `translate(${d.x0},${d.y0})`);

    leaf.append("rect")
        //.attr("id", d => (d.leafUid = DOM.uid("leaf")).id)
        // .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data.name); })
        .attr('fill', '#ccc')
        .attr("fill-opacity", 0.6)
        .attr("width", d => d.x1 - d.x0)
        .attr("height", d => d.y1 - d.y0);

    leaf.each(placeText);
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

export function drawChart(data) {
    const config = {};

    config.data = prepareData(data.filter(r => r.amount > 0));
    config.negativeData = data.filter(r => r.amount <= 0);

    displayNegatives(config.negativeData);

    drawTreemap(config.data);
}