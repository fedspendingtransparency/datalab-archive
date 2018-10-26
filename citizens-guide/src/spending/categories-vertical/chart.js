import { select, selectAll } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { establishContainer, translator } from "../../utils";
import { placeLabels } from './text';
import colors from '../../colors.scss';
import { initZoomTrigger } from './zoom';

const d3 = { select, selectAll, scaleLinear },
    baseWidth = 400,
    scales = {},
    zoomItemsMap = {
        agency: 16
    },
    config = {
        baseWidth: baseWidth,
        scales: scales
    };

let svg,
    height,
    mainG,
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
    let categoryGroups;

    mainG = svg.append('g')
        .classed('main', true);

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
            return d.amount < 0 ? 'black' : colors.colorPrimary;
        })
        .attr('opacity', 0.1);

    categoryGroups.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', baseWidth)
        .attr('y2', 0)
        .attr('stroke', colors.colorPrimary)
        .attr('stroke-width', 0.5)
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

export function drawChart(_data, type, detail) {
    data = _data;
    height = detail ? 900 : 1400;
    svg = detail ? establishDetailContainer(height, type) : establishContainer(height);

    config.height = height;
    config.data = data;
    config.svg = svg;
    config.zoomItems = zoomItemsMap[type] || 8;

    setScales();
    placeCategories();
    initZoomTrigger(config);
    placeLabels(config);
}