import { select, selectAll } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import { simplifyNumber } from "../../utils";
import { placeLabels } from './text';
import colors from '../../colors.scss';
import { initZoomTrigger } from './zoom';
import { createDonut } from '../../income/donut';

const d3 = { select, selectAll, scaleLinear, extent };

function placeCategories(config) {
    const donutDiameter = 50,
        categories = config.svg.selectAll('section.category')
            .data(config.data)
            .enter()
            .append('section')
            .classed('category', true);

    let contents;

    categories.append('svg')
        .attr('height', donutDiameter)
        .attr('width', donutDiameter)
        .each(function (d) {
            createDonut(d3.select(this), d.percent_total / 100, donutDiameter)
        })

    contents = categories.append('div')
        .classed('contents', true)

    contents.append('h1')
        .text(function(d){
            return d.activity;
        })

    contents.append('p').text(function(d){
        return simplifyNumber(d.amount);        
    })
}

function establishDetailContainer(height, type) {
    const viz = d3.select('#detail');

    viz.select('h2').text(type);

    viz.select('button')
        .on('click', null)
        .on('click', function () {
            viz.classed('active', null)
            viz.selectAll('svg').remove();
        })

    viz.selectAll('svg').remove();

    viz.classed('active', true);

    return viz.append('svg')
        .attr('shape-rendering', 'geometricPrecision')
        .attr('height', height)
        .attr('transform', 'scale(0.8)')
        .attr('width', 900);
}

export function drawChart(data, type, detail) {
    const config = {};

    //svg = detail ? establishDetailContainer(height, type) : establishContainer(height);

    config.data = data;
    config.svg = d3.select('#viz');

    placeCategories(config);
}