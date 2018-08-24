import { select, selectAll } from 'd3-selection';
import { line } from 'd3-shape';
import { getElementBox, translator, simplifyNumber } from '../../utils';
import { receiptsConstants } from './receipts-utils';
import { section2_2_init, showDetail } from './section2-2';
import { getDataByYear } from './section2-data';

const d3 = { select, selectAll, line },
    categoryData = getDataByYear(2017),
    topCategories = categoryData.filter((d, i) => {
        return i < 3;
    });

let dotContainer,
    incomeContainer,
    dotBoxSize,
    incomeContainerSize,
    addedSegments;

function widthCalculator(d) {
    return dotBoxSize.width * d / 100;
}

function showZoomTrigger() {
    const g = d3.select('svg').append('g')
        .attr('transform', translator(930, 375))

    g.append('rect')
        .attr('width', 160)
        .attr('height', 72)
        .attr('fill', '#49A5B6')
        .attr('x', 0)
        .attr('y', 0)

    g.append('text')
        .text('zoom to view')
        .attr('style', 'fill:white')
        .attr('font-size', 14)
        .attr('x', 10)
        .attr('y', 30)

    g.append('text')
        .text('7 additional categories')
        .attr('style', 'fill:white')
        .attr('font-size', 14)
        .attr('x', 10)
        .attr('dy', 50)

    g.on('click', function () {
        g.remove();
        const c = d3.select('.dot-container');

        c.selectAll('circle').remove();
        c.selectAll('path').remove();

        c.transition()
            .duration(1000)
            .attr('transform', 'scale(15, 1) ' + translator(-940, 160))
    })
}

function addDetails() {
    const line = d3.line(),
        detailsGroup = dotContainer
            .append('g')
            .attr('opacity', 0);

    let texts,
        textPosition = 0;

    texts = detailsGroup.selectAll('g')
        .data(topCategories)
        .enter()
        .append('g')
        .attr('transform', function (d, i) {
            const x = textPosition + (widthCalculator(d.percent_total) / 2),
                y = (i < 2) ? (incomeContainerSize.height / 2) - 30 : ((i - 1) * -70) - 20;

            textPosition += widthCalculator(d.percent_total);

            return translator(x, y);
        })
        .append('text')
        .attr('text-anchor', function (d, i) {
            return (i < 2) ? 'middle' : 'end';
        })
        .attr('style', function (d, i) {
            return (i < 2) ? 'fill:white' : null;
        })

    texts.append('tspan')
        .text(function (d) {
            return d.percent_total + '%';
        })
        .attr('x', 0)
        .attr('dy', 20)

    texts.append('tspan')
        .text(function (d) {
            return d.activity;
        })
        .attr('x', 0)
        .attr('dy', 20)
        .attr('style', 'font-weight: bold')

    texts.append('tspan')
        .text(function (d) {
            return simplifyNumber(d.amount);
        })
        .attr('x', 0)
        .attr('dy', 20)

    detailsGroup.append('path')
        .attr('stroke', '#4a4a4a')
        .attr('stroke-width', 1)
        .attr('d', function () {
            const x = widthCalculator(topCategories.slice(0, 3).map(d => d.percent_total).reduce((a, c) => a + c, 0)) - widthCalculator(topCategories[2].percent_total) / 2,
                y = -20,
                points = [
                    [x, -2],
                    [x, y]
                ];

            return line(points);
        });

    detailsGroup.transition()
        .duration(500)
        .attr('opacity', 1)
        .on('end', showZoomTrigger)
        .ease()

    section2_2_init(dotContainer);
}

function moveBarGroup(d, i) {
    const re = /(\d)+/g
    const originalTransform = dotContainer.attr('transform').match(re);

    dotContainer.transition()
        .duration(1000)
        .attr('transform', translator(Number(originalTransform[0]), 220 + Number(originalTransform[1])))
        .on('end', addDetails)
        .ease()
}

function addSegments() {
    const duration = 1000;

    let shaderContainer,
        accumulator = 0;

    dotContainer = d3.select('.' + receiptsConstants.dotContainerClass);
    incomeContainer = d3.select('.' + receiptsConstants.incomeContainerClass);
    shaderContainer = dotContainer.append('g').classed(receiptsConstants.shaderContainerClass, true);
    addedSegments = true;
    dotBoxSize = getElementBox(dotContainer);
    incomeContainerSize = getElementBox(incomeContainer);

    shaderContainer.selectAll('rect')
        .data(topCategories)
        .enter()
        .append('rect')
        .attr('x', function (d) {
            const x = accumulator;

            accumulator += widthCalculator(d.percent_total);

            return x;
        })
        .attr('y', -2)
        .attr('width', function (d) {
            return widthCalculator(d.percent_total);
        })
        .attr('height', incomeContainerSize.height + 5)
        .attr('fill', '#49A5B6')
        .attr('opactity', 0)
        .on('click', showDetail)
        .transition()
        .duration(1000)
        .attr('opacity', function (d, i) {
            return (i) ? 0.8 - i / 7 : 0.8;
        })
        .ease()

    setTimeout(moveBarGroup, duration)
}

function remove() {
    d3.select(this).remove();

    if (!d3.selectAll('.reset').size() && !addedSegments) {
        addSegments();
    }
}

function reset() {
    const duration = 500

    d3.selectAll('.reset')
        .transition()
        .duration(duration)
        .attr('opacity', 0)
        .on('end', function () {
            d3.select(this).remove();
        })
        .ease();

    setTimeout(addSegments, duration)
}

export function section2_1() {
    const dotContainer = d3.select('g.' + receiptsConstants.dotContainerClass),
        prevTransform = dotContainer.attr('transform').slice(0, 20);

    d3.selectAll('.gdp-legend').remove();
    d3.selectAll('.box-group').remove();

    dotContainer.transition()
        .duration(1000)
        .attr('transform', prevTransform)
        .on('end', reset);
}