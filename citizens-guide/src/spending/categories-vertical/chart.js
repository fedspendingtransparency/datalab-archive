import { select, selectAll } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import { establishContainer, translator } from "../../utils";
import { placeLabels } from './text';

const d3 = { select, selectAll, scaleLinear, extent },
    height = 1400,
    baseWidth = 400,
    scales = {};

let svg,
    mainG,
    categoryGroups,
    data;

function setScales() {
    const domain = [
        data[data.length - 1].stack1,
        data[0].stack0
    ];

    scales.y = d3.scaleLinear()
        .range([0, height])
        .domain(domain);
}

function placeCategories() {
    let positives = data.filter(r => r.amount >= 0).length,
        negatives = data.filter(r => r.amount < 0).length;

    mainG = svg.append('g');

    categoryGroups = mainG.selectAll('g.category')
        .data(data)
        .enter()
        .append('g')
        .attr('transform', function (d) {
            return translator(0, scales.y(d.stack1));
        })
        .classed('category', true);

    categoryGroups.append('rect')
        .attr('width', baseWidth)
        .attr('height', function (d) {
            return scales.y(d.stack0) - scales.y(d.stack1);
        })
        .attr('fill', function (d) {
            return d.amount < 0 ? '#333' : 'steelblue';
        })
        .attr('opacity', function (d, i) {
            return 1 - (0.03 * i);
        })
}

export function drawChart(_data) {
    svg = establishContainer(height);
    data = _data;

    setScales();
    placeCategories();
    placeLabels(svg, data, scales.y, baseWidth, height);
}