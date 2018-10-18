import { select, selectAll } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import { establishContainer, translator } from "../../utils";
import { placeLabels } from './text';
import colors from '../../colors.scss';
import { initZoomTrigger } from './zoom';

const d3 = { select, selectAll, scaleLinear, extent },
    height = 1400,
    baseWidth = 400,
    scales = {},
    zoomItemsMap = {
        agency: 16
    },
    config = {
        height: height,
        baseWidth: baseWidth,
        scales: scales
    };

let svg,
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

export function drawChart(_data, type) {
    svg = establishContainer(height);
    data = _data;

    config.data = data;
    config.svg = svg;
    config.zoomItems = zoomItemsMap[type] || 8;

    setScales();
    placeCategories();
    initZoomTrigger(config);
    placeLabels(config);
}