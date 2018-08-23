import { select, selectAll } from 'd3-selection';
import { line, linkVertical } from 'd3-shape';
import { getElementBox, translator } from '../../utils';
import { receiptsConstants } from './receipts-utils';
import { section2_2_init, showDetail } from './section2-2';

const d3 = { select, selectAll, line, linkVertical },
    data = [
        [47.88, 'Individual Income Taxes', '$1.6 T'],
        [33.54, 'Employment and General Retirement', '$1.1 T'],
        [8.96, 'Corporation Income Taxes', '$297 B'],
        [3.85, 'Miscellaneous Receipts', '$127.7 B'],
        [5.77, 'Other Revenues', '$196.2 B']
    ];

let dotContainer,
    incomeContainer,
    dotBoxSize,
    addedSegments;

function widthCalculator(d) {
    return dotBoxSize.width * d[0] / 100;
}

function linkTest() {
    const line = d3.line();
    var link = d3.linkVertical();

    var line1 = link({
        source: [0, 0],
        target: [200, 300]
    });

    var line2 = link({
        source: [100, 0],
        target: [400, 300]
    });

    var bottom = line([
        [200, 300],
        [400, 300]
    ]);

    var top = line([
        [0, 0],
        [100, 0]
    ]);


    dotContainer.append('path')
        .attr('d', 'M 10,10 C 20,200 -50,250 -100,300 H 150 C 300,200 300,10 300,10 Z')
        .style('fill', 'green')
        .style('stroke', 'blue')
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

    g.on('click', function(){
        g.remove();
        const c = d3.select('.dot-container');

        c.selectAll('circle').remove();
        c.selectAll('path').remove();

        c.transition()
            .duration(1000)
            .attr('transform', 'scale(15, 1) ' + translator(-940,160))
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
        .data(data.filter((d, i) => i < 4))
        .enter()
        .append('g')
        .attr('transform', function (d, i) {
            const x = textPosition + (widthCalculator(d) / 2),
                y = (i < 2) ? (dotBoxSize.height / 2) - 30 : ((i - 1) * -70) - 20;

            textPosition += widthCalculator(d);

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
            return d[0] + '%';
        })
        .attr('x', 0)
        .attr('dy', 20)

    texts.append('tspan')
        .text(function (d) {
            return d[1];
        })
        .attr('x', 0)
        .attr('dy', 20)
        .attr('style', 'font-weight: bold')

    texts.append('tspan')
        .text(function (d) {
            return d[2];
        })
        .attr('x', 0)
        .attr('dy', 20)

    detailsGroup.selectAll('path')
        .data(data.slice(2))
        .enter()
        .append('path')
        .attr('stroke', '#4a4a4a')
        .attr('stroke-width', 1)
        .attr('d', function (d, i) {
            if (i > 1) { return }

            const prev = data.slice(0, i + 2).reduce((accumulator, row, i) => {
                return accumulator + row[0];
            }, 0),
                x = dotBoxSize.width * (prev + (d[0] / 2)) / 100,
                y = -70 * (i + 1) + 50;

            const points = [
                [x, 0],
                [x, y]
            ];

            return line(points)
        })

    detailsGroup.transition()
        .duration(500)
        .attr('opacity', 1)
        .on('end', showZoomTrigger)
        .ease()

    section2_2_init(dotContainer);
}

function moveBarGroup(d, i) {
    if (i !== data.length - 1) {
        return;
    }

    const re = /(\d)+/g
    const originalTransform = dotContainer.attr('transform').match(re);

    dotContainer.transition()
        .duration(1000)
        .attr('transform', translator(Number(originalTransform[0]), 220 + Number(originalTransform[1])))
        .on('end', addDetails)
        .ease()
}

function addSegments() {
    dotContainer = d3.select('.' + receiptsConstants.dotContainerClass),
        incomeContainer = d3.select('.' + receiptsConstants.incomeContainerClass);

    const shaderContainer = dotContainer.append('g').classed(receiptsConstants.shaderContainerClass, true);

    let accumulator = 0;

    addedSegments = true;
    dotBoxSize = getElementBox(dotContainer);

    shaderContainer.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', function (d) {
            const x = accumulator;

            accumulator += widthCalculator(d);

            return x;
        })
        .attr('y', -2)
        .attr('width', widthCalculator)
        .attr('height', dotBoxSize.height + 5)
        .attr('fill', '#49A5B6')
        .attr('opactity', 0)
        .on('click', function (d, i) {
            showDetail(i);
        })
        .transition()
        .duration(1000)
        .on('end', moveBarGroup)
        .attr('opacity', function (d, i) {
            return (i) ? 0.8 - i / 7 : 0.8;
        })
        .ease()
}

function remove() {
    d3.select(this).remove();

    if (!d3.selectAll('.reset').size() && !addedSegments) {
        addSegments();
    }
}

function reset() {
    d3.selectAll('.reset')
        .transition()
        .duration(500)
        .attr('opacity', 0)
        .on('end', remove)
        .ease();
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