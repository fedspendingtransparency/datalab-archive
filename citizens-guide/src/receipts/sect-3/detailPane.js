import { select } from 'd3-selection';
import { establishContainer, translator, getElementBox } from '../../utils';
import { trendView } from './trendView';

const d3 = { select },
    svg = establishContainer(),
    h = 600,
    zoomThresholds = {
        'Employment and General Retirement': 7000000000,
        'Excise Taxes': 1000000000,
        'Unemployment Insurance': 300000000
    }

let pane,
    callout,
    chartContainer,
    container;

function buildDString(yPos, _height) {

    const radius = 6,
        triangle = { height: 15, width: 18 },
        width = 530,
        defaultHeight = h + 100,
        height = (_height > defaultHeight) ? _height : defaultHeight,
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

function modifyRect(sourceY, height) {
    const dString = buildDString(sourceY, height);

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
            .attr('filter', 'url(#drop1)')

        callout.lower()
    }
}

function init(d, sourceY) {
    const config = {
        height: h,
        noDrilldown: true
    };
    
    let title;

    container.selectAll('.detail-pane-title')
        .remove();

    title = container.append('text')
        .classed('detail-pane-title', true)
        .text('View subcategories found within')
        .attr('font-size', 14)
        .attr('x', 20)
        .attr('y', 30);

    title.append('tspan')
        .text(d.name)
        .attr('font-size', 20)
        .attr('font-weight', 'bold')
        .attr('x', 20)
        .attr('dy', 24);

    config.zoomThreshold = zoomThresholds[d.officialName];

    if (!config.zoomThreshold) {
        config.noZoom = true;
    }

    trendView(d.subcategories, chartContainer, config);

    chartContainer.transition()
        .duration(300)
        .attr('opacity', 1)

    modifyRect(Math.round(sourceY), 750);
}

export function destroyDetailPane() {
    if (!chartContainer) {
        return;
    }

    chartContainer.transition()
        .duration(300)
        .attr('opacity', 0)
        .on('end', function () {
            if (container) {
                container.remove();
            }
            container = null;
            callout = null;
        })
}

export function showDetail(data, sourceY) {
    if (container) {
        chartContainer.transition()
            .duration(300)
            .attr('opacity', 0)
            .on('end', function () {
                chartContainer.selectAll('*').remove();
                init(data, sourceY);
            })
    } else {
        container = svg.append('g')
            .attr('transform', translator(400, 5))
            .attr('opacity', 0)
            
        container.transition()
            .duration(1000)
            .attr('transform', translator(640, 5))
            .attr('opacity', 1)
                        
        chartContainer = container.append('g').attr('opacity', 0).attr('transform', translator(10, 40));

        //container.lower();

        init(data, sourceY);
    }
}