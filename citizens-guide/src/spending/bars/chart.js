import { select, selectAll } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';
import { establishContainer, translator } from "../../utils";
import { placeLabels } from './text';
import colors from '../../colors.scss';

const d3 = { select, selectAll, scaleLinear, extent, transition },
    rowHeight = 50;

function setScales(config) {
    config.scaleX = d3.scaleLinear()
        .range([0, config.barWidth])
        .domain(d3.extent(config.data, r => r.amount));
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

function drawBars(containers, config) {
    const g = containers.append('g');

    g.append('line')
        .attr('stroke', 'black')
        .attr('stroke-width', 0.5)
        .attr('x1', config.scaleX(0))
        .attr('x2', config.scaleX(0))
        .attr('y1', rowHeight / 4 - 4)
        .attr('y2', rowHeight *0.75 + 4)

    g.append('rect')
        .attr('height', rowHeight / 2)
        .attr('fill', function (d) {
            if (d.amount < 0) {
                return 'gray';
            }

            return colors.colorPrimary;
        })
        .attr('y', rowHeight / 4)
        .attr('x', config.scaleX(0))
        .attr('width', 0)
        .transition()
        .duration(1000)
        .attr('x', function (d) {
            if (d.amount < 0) {
                return config.scaleX(d.amount)
            }

            return config.scaleX(0);
        })
        .attr('width', function (d) {
            return config.scaleX(Math.abs(d.amount)) - config.scaleX(0);
        })
        .ease();
}

function placeContainers(config) {
    const containers = config.svg.selectAll('g')
        .data(config.data)
        .enter()
        .append('g')
        .attr('transform', function (d, i) {
            return translator(0, i * rowHeight);
        })

    drawBars(containers, config);
    placeLabels(containers, config);
}

export function drawChart(data, type, detail) {
    const config = {};

    config.height = detail ? 900 : 1400;
    config.barWidth = 200;
    config.data = data;
    config.svg = detail ? establishDetailContainer(config.height, type) : establishContainer(config.height);

    setScales(config);

    placeContainers(config);
}