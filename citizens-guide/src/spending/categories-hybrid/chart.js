import { select, selectAll } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';
import { establishContainer, translator } from "../../utils";
import { placeLabels } from './text';
import colors from '../../colors.scss';
import { initSort } from './sort';
import { initOverlay } from './detailOverlay';
import { optimizeWidth } from './optimize-width';

const d3 = { select, selectAll, scaleLinear, extent, transition },
    barAnimationTime = 1000,
    hoverDuration = 200,
    rowHeight = 50;

function setScales(config) {
    const extent = d3.extent(config.data, r => r.amount);

    extent[0] = (extent[0] > 0) ? 0 : extent[0];

    config.scaleX = d3.scaleLinear()
        .range([0, config.barWidth])
        .domain(extent);
}

function drawBars(containers, config) {
    const g = containers.append('g');

    g.append('line')
        .attr('stroke', 'black')
        .attr('stroke-width', 0.5)
        .attr('x1', config.scaleX(0))
        .attr('x2', config.scaleX(0))
        .attr('y1', rowHeight / 4 - 4)
        .attr('y2', rowHeight * 0.75 + 4)

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
        .classed('bar', true)
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

function onMouseover() {
    const row = d3.select(this);

    row.selectAll('rect.bar').transition()
        .duration(hoverDuration)
        .attr('fill', colors.income)
        .ease()

    row.selectAll('text').transition()
        .duration(hoverDuration)
        .attr('fill', '#888')
        .ease()
}

function onMouseout() {
    const row = d3.select(this);

    row.selectAll('rect.bar').transition()
        .duration(300)
        .attr('fill', function (d) {
            if (d.amount < 0) {
                return 'gray';
            }

            return colors.colorPrimary;
        })
        .ease()

    row.selectAll('text').transition()
        .duration(300)
        .attr('fill', 'black')
        .ease()
}

function placeContainers(config, detail) {
    const containers = config.svg.selectAll('g.row')
        .data(config.data)
        .enter()
        .append('g')
        .classed('pointer', !config.detail)
        .classed('row', true)
        .attr('transform', function (d, i) {
            return translator(0, i * rowHeight);
        })

    config.barWidth = placeLabels(containers, config);

    setScales(config);

    drawBars(containers, config);

    if (!detail) {
        containers.on('click', function (d) {
            if (!d.subcategories) {
                return;
            }

            drawChart(d.subcategories, d.activity, true, config.width)
        })

        setTimeout(function () {
            containers.on('mouseover', onMouseover)
            containers.on('mouseout', onMouseout)
        }, barAnimationTime)
    }
}

function chartInit() {

}

export function drawChart(data, type, detail, parentWidth) {
    const config = {};

    if (!data.length) {
        return;
    }

    config.height = data.length * rowHeight;
    config.width = parentWidth || optimizeWidth();
    config.data = data;
    config.rowHeight = rowHeight;
    config.detail = detail;

    initSort(config);

    if (detail) {
        initOverlay(type, config, placeContainers);
    } else {
        config.svg = establishContainer(config.height, config.width);
        placeContainers(config, detail);
    }
}