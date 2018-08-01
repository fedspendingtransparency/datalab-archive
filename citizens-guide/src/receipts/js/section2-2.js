import 'babel-polyfill';
import { select, selectAll } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { line } from 'd3-shape';
import { dotFactory, establishContainer, receiptsConstants } from './receipts-utils';
import { getElementBox, translator } from '../../utils';

const d3 = { select, selectAll, scaleLinear, max, line },
    svg = establishContainer(),
    detailBoxHeight = 100,
    data = [
        [-16.49, 'Individual Income Taxes Refunds', '$-261.7 B'],
        [82.49, 'Individual Income Taxes Withheld', '$1.3 T'],
        [33.99, 'Other Individual Income Taxes', '$539.5 B'],
        [0.0017, 'Presidential Election Campaign Fund', '$26.81 M'],
    ],
    x = d3.scaleLinear()
        .domain([data[0][0], 100 + -data[0][0]])
        .range([0, 1200]);

let resolver,
    enrichedData,
    dotContainer,
    detailContainer,
    dotContainerBox;

function widthCalculator(d) {
    return dotContainerBox.width * d[0] / 100;
}

function addDetails() {
    const line = d3.line(),
        textContainer = detailContainer
            .append('g')
    // .attr('opacity', 0);

    let texts = textContainer
        .attr('transform', translator(0, 150))
        .selectAll('g')
        .data(enrichedData)
        .enter()
        .append('g')
        .attr('transform', function (d, i) {
            const xPos = x(d.start) + (x(d.end) - x(d.start)) / 2;
            
            let yPos = 15;

            if (i === 0 || i === 3) {
                yPos = 150;
            }

            return translator(xPos, yPos);
        })
        .append('text')
        .attr('text-anchor', function (d, i) {
            const settings = [
                'start',
                'middle',
                'middle',
                'end'
            ];

            return settings[i];
        })
        .attr('style', function (d, i) {
            return (i === 1 || i === 2) ? 'fill:white' : null;
        })

    texts.append('tspan')
        .text(function (d) {
            return d.percent + '%';
        })
        .attr('x', 0)
        .attr('dy', 20)

    texts.append('tspan')
        .text(function (d) {
            return d.title;
        })
        .attr('x', 0)
        .attr('dy', 20)
        .attr('style', 'font-weight: bold')

    texts.append('tspan')
        .text(function (d) {
            return d.amount;
        })
        .attr('x', 0)
        .attr('dy', 20)

    textContainer.selectAll('path')
        .data(enrichedData.filter((d, i) => {
            return (i === 0 || i === 3);
        }))
        .enter()
        .append('path')
        .attr('stroke', '#4a4a4a')
        .attr('stroke-width', 1)
        .attr('d', function (d, i) {
            const xPos = x(d.start) + (x(d.end) - x(d.start)) / 2,
                yPos = 50; 

            const points = [
                [xPos, detailBoxHeight],
                [xPos, detailBoxHeight + 50]
            ];

            return line(points)
        })

    // detailsGroup.transition()
    //     .duration(500)
    //     .attr('opacity', 1)
    //     // .on('end', linkTest)
    //     .ease()

}

function renderDetailBoxes() {
    let tracker = data[0][0];

    enrichedData = data.map((d) => {
        const obj = {};

        obj.percent = d[0];
        obj.title = d[1];
        obj.amount = d[2];
        obj.start = tracker;
        obj.end = (tracker * 100 + d3.max([Math.abs(d[0]), 0.01]) * 100) / 100;

        tracker = obj.end;

        return obj;
    })

    detailContainer.append('g').attr('transform', translator(0, 150)).selectAll('rect')
        .data(enrichedData)
        .enter()
        .append('rect')
        .attr('height', detailBoxHeight)
        .attr('fill', function (d) {
            return (d.percent < 0) ? 'rgba(227,28,61,0.3)' : 'rgba(46,133,64,0.5)'
        })
        .attr('x', function (d) {
            return x(d.start)
        })
        .attr('width', function (d) {
            return x(d.end) - x(d.start);
        })

    addDetails();
}

function renderDetail() {
    dotContainerBox = getElementBox(dotContainer);
    detailContainer = svg.append('g')
        .classed('detail-container', true)
        .attr('opacity', 0)
        .attr('transform', translator(174, dotContainerBox.height) + ' scale(0.33)');

    renderDetailBoxes();

    detailContainer.transition()
        .duration(1000)
        .attr('opacity', 1)
        .attr('transform', translator(0, 500) + ' scale(1)')
        .ease();
}

let waitForReady = new Promise(resolve => {
    resolver = resolve;
})

export function section2_2_init(_dotContainer) {
    dotContainer = _dotContainer;

    resolver();
}

export function section2_2() {
    if (dotContainer) {
        renderDetail()
    } else {
        waitForReady.then(renderDetail)
    }

};