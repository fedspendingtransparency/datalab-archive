import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { scaleLinear } from 'd3-scale';
import { fadeAndRemove, translator } from '../../utils';
import { placeLabels } from './text';

const d3 = { select, selectAll, transition, scaleLinear };

function zoom(rect, config, maskedData) {
    const categoryGroups = d3.selectAll('g.category'),
        mask = d3.select(rect),
        topItemPosition = maskedData[config.zoomItems - 1].stack1,
        duration = 1000;

    let rectHeight, rectTop;

    fadeAndRemove(d3.select('g.text-group'))
    fadeAndRemove(d3.select('g.connectors'))

    config.scales.yZoom = d3.scaleLinear()
        .range([0, config.height])
        .domain([topItemPosition, 0]);

    rectHeight = config.scales.yZoom(0) - config.scales.yZoom(topItemPosition);
    rectTop = config.scales.yZoom(topItemPosition);

    categoryGroups.transition()
        .duration(duration)
        .attr('transform', function (d) {
            return translator(0, config.scales.yZoom(d.stack1));
        })
        .ease();

    categoryGroups.selectAll('rect').transition()
        .duration(duration)
        .attr('height', function (d) {
            return config.scales.yZoom(d.stack0) - config.scales.yZoom(d.stack1);
        })
        .ease();

    mask.transition()
        .duration(duration)
        .attr('y', rectTop)
        .attr('height', rectHeight)
        .attr('opacity', 0)
        .on('end', function(){
            mask.remove();
        })
        .ease()

    setTimeout(placeLabels, duration, config, maskedData);
}

function dataToMask(config) {
    const positives = config.data.filter(r => r.amount >= 0);

    if (positives.length > config.zoomItems) {
        positives.length = config.zoomItems;
    }

    positives.forEach(r => r.markForZoom = true);

    return positives;
}

function placeMask(config) {
    const maskedData = dataToMask(config),
        topItemPosition = maskedData[maskedData.length - 1].stack1,
        rectHeight = config.scales.y(0) - config.scales.y(topItemPosition),
        rectTop = config.scales.y(topItemPosition),
        zoomLayer = config.svg.append('g').classed('zoom-layer', true);

    zoomLayer.append('rect')
        .attr('width', config.baseWidth)
        .attr('height', rectHeight)
        .attr('y', rectTop)
        .attr('fill', '#000')
        .attr('opacity', 0.5)
        .attr('style', 'cursor:pointer')
        .on('click', function () {
            zoom(this, config, maskedData)
        });
};

export function initZoomTrigger(config) {
    if (config.data.length < config.zoomItems * 1.5) {
        console.log(config.data, config.data.length, config.zoomItems)
        return;
    }
    
    placeMask(config);
}