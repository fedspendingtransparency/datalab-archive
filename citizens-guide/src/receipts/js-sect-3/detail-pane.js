import '../sass/income/detail-pane.scss';
import { select } from 'd3-selection';
import { establishContainer, translator } from '../../utils';
import { getByCategory } from './trendData';
import { trendView } from './trend-view';

const d3 = { select };

const svg = establishContainer();

let data,
    pane,
    callout,
    chartContainer,
    container;

function buildDString(yPos) {
    const radius = 6,
        triangle = { height: 20, width: 30 },
        width = 600,
        height = 700,
        leg = height - yPos;

    return `M 0,${radius}
        q 0,-${radius} ${radius},-${radius} 
        l ${width},0
        q ${radius},0 ${radius},${radius}
        l 0,${height}
        q 0,${radius} -${radius},${radius}
        l -${width},0
        q -${radius},0 -${radius},-${radius}
        l 0,-${leg}
        l -${triangle.width},-${triangle.height}
        l ${triangle.width},-${triangle.height}
        Z`;
}

function modifyRect(sourceY) {
    const dString = buildDString(sourceY);

    if (callout) {
        callout.transition()
            .duration(500)
            .attr('d', dString)
            .ease();
    } else {
        callout = container.append('path')
            .attr('stroke', '#ddd')
            .attr('stroke-width', 1)
            .attr('fill', 'white')
            .attr('d', dString)

        callout.lower()
    }
}

function init(sourceY) {
    const config = {
        height: 400,
        width: 200,
        noDrillown: true
    };

    modifyRect(Math.round(sourceY));

    trendView(data, chartContainer, config);

    chartContainer.transition()
        .duration(300)
        .attr('opacity', 1)
}

export function showDetail(name, sourceY) {
    data = getByCategory(name);

    if (container) {
        chartContainer.transition()
            .duration(300)
            .attr('opacity', 0)
            .on('end', function () {
                chartContainer.selectAll('*').remove();
                init(sourceY);
            })
    } else {
        container = svg.append('g').attr('transform', translator(660, 0));
        chartContainer = container.append('g').attr('opacity', 0).attr('transform',translator(0,10));

        init(sourceY);
    }
}