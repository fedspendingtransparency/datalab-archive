import { select, selectAll } from 'd3-selection';
import { line } from 'd3-shape';
import { scaleLinear } from 'd3-scale';
import { min } from 'd3-array';
import { getElementBox, translator, simplifyNumber } from '../../utils';
import { receiptsConstants } from './receipts-utils';
import { section2_2_init, showDetail, clearDetails } from './section2-2';
import { getDataByYear } from './section2-data';
import { stack } from 'd3-shape';
import { establishContainer } from '../../utils';

const d3 = { select, selectAll, line, scaleLinear, min, stack },
    categoryData = getDataByYear(2017),
    indexed = categoryData.reduce((a, c) => {
        a[c.activity] = c;
        return a;
    }, {}),
    baseTranslate = { x: 91, y: 70 },
    baseDimensions = { width: 1014, height: 100 },
    topAmount = categoryData.slice(0, 3).reduce((a, c) => a += c.amount, 0),
    xScale = d3.scaleLinear(),
    totalAmount = categoryData.reduce((a, c) => a += c.amount, 0);

let svg,
    baseContainer,
    shaderContainer,
    detailsGroup,
    shaders;

function stackData(series) {
    let tracker;

    series.forEach((r, i) => {
        if (i === 0) {
            tracker = d3.min([0, series.filter(r => r.amount < 0).reduce((a, c) => a += c.amount, 0)]);
        }

        r.x0 = tracker;

        tracker += Math.abs(r.amount);

        if (r.subcategories) {
            stackData(r.subcategories)
        }

    })
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

        zoomToMoreCategories();
    })
}

function zoomToMoreCategories() {
    const textFade = 500,
        zoom = 1000;

    rescale('in');
    clearDetails();

    detailsGroup.transition()
        .duration(textFade)
        .attr('opacity', 0)
        .on('end', function () {
            detailsGroup.selectAll('*').remove();
        })

    shaders.transition()
        .delay(textFade)
        .duration(zoom)
        .attr('x', function (d) {
            return xScale(d.x0)
        })
        .attr('width', function (d) {
            const x1 = d.x0 + d.amount,
                width = xScale(x1) - xScale(d.x0);

            return width;
        })
        .attr('opacity', function (d, i) {
            if (i < 3) {
                return 0;
            } else {
                i -= 3;
                return 0.8 - i / 7;
            }
        })
        .attr('fill', '#49A5B6');

    setTimeout(function () {
        detailsGroup.attr('opacity', 1);
        addDetails('more')
    }, textFade + zoom)
}

function rescale(zoomIn) {
    const low = (zoomIn) ? topAmount : 0;

    xScale.domain([low, totalAmount]);
}

function addDetails(more) {
    const line = d3.line(),
        details = (more) ? categoryData.slice(3) : categoryData.slice(0, 3);

    let t, textGroup;

    textGroup = detailsGroup.selectAll('g')
        .data(details)
        .enter()
        .append('g')
        .attr('transform', function (d, i) {
            const x1 = d.x0 + d.amount,
                width = xScale(x1) - xScale(d.x0),
                x = xScale(d.x0) + width / 2,
                y = (i < 2) ? (baseDimensions.height / 2) - 30 : ((i - 1) * -50) - 20;

            return translator(x, y);
        })

    t = textGroup.append('text')
        .attr('text-anchor', function (d, i) {
            return (i < 2) ? 'middle' : 'end';
        })
        .attr('style', function (d, i) {
            return (i < 2) ? 'fill:white' : null;
        })

    t.append('tspan')
        .text(function (d, i) {
            if (i < 2) {
                return d.percent_total + '%';
            }
        })
        .attr('x', 0)
        .attr('dy', 20)

    t.append('tspan')
        .text(function (d) {
            return d.activity;
        })
        .attr('x', 0)
        .attr('dy', 20)
        .attr('style', 'font-weight: bold')

    t.append('tspan')
        .text(function (d, i) {
            if (i < 2) {
                return simplifyNumber(d.amount);
            } else {
                return simplifyNumber(d.amount) + ' | ' + d.percent_total + '%';
            }
        })
        .attr('x', 0)
        .attr('dy', 20)

    textGroup.append('path')
        .attr('stroke', '#4a4a4a')
        .attr('stroke-width', 1)
        .attr('d', function (d, i) {
            const x1 = d.x0 + d.amount,
                y = ((i - 1) * 50) + 18,
                points = [
                    [0, 44],
                    [0, y]
                ];

            if (i < 2) { return }

            return line(points);
        });

    detailsGroup.transition()
        .duration(500)
        .attr('opacity', 1)
        .on('end', showZoomTrigger)
        .ease()

    section2_2_init(baseContainer, indexed);
}

function moveBarGroup(d, i) {
    baseContainer.transition()
        .duration(1000)
        .attr('transform', translator(baseTranslate.x, baseTranslate.y))
        .on('end', addDetails)
        .ease()
}

function buildStack(data) {
    const keys = data.map(r => r.activity);

    let reduced;

    keys.push('more');

    reduced = keys.reduce((a, c, i) => {
        a[c] = (c === 'more') ? moreAmount : data[i].amount;
        return a;
    }, {});

    return d3.stack()
        .keys(keys)([reduced]);
}

function addSegments(more) {
    const duration = 1000;

    shaders = shaderContainer.selectAll('rect')
        .data(categoryData)
        .enter()
        .append('rect')
        .attr('y', function (d, i) {
            return -2;
        })
        .attr('x', function (d) {
            return xScale(d.x0)
        })
        .attr('width', function (d) {
            return xScale(d.amount);
        })
        .attr('height', baseDimensions.height + 5)
        .attr('fill', function (d, i) {
            return (i < 3) ? '#49A5B6' : '#ccc';
        })
        .attr('opactity', 0)
        .on('click', showDetail);

    shaders.transition()
        .duration(1000)
        .attr('opacity', function (d, i) {
            if (i > 3) {
                i = 3;
            }

            return (i) ? 0.8 - i / 7 : 0.8;
        })
        .ease()

    if (!more) {
        setTimeout(moveBarGroup, duration)
    }
}

function remove() {
    d3.select(this).remove();
}

function setContainers() {
    baseContainer = svg.append('g')
        .classed('base-category-container', true)
        .attr('transform', translator(baseTranslate.x, baseTranslate.y));

    shaderContainer = baseContainer.append('g')
        .classed(receiptsConstants.shaderContainerClass, true);

    detailsGroup = baseContainer.append('g')
        .attr('opacity', 0);

    xScale.range([0, baseDimensions.width])

    rescale();
}

function init() {
    setContainers();
    addSegments();
}

function reset() {
    d3.selectAll('.reset')
        .attr('opacity', 1)
        .transition()
        .delay(1000)
        .duration(1000)
        .attr('opacity', 0)
        .on('end', function () {
            d3.select(this).remove();
        })
        .ease();
}

export function section2_1() {
    const dotContainer = d3.select('g.' + receiptsConstants.dotContainerClass);

    svg = establishContainer();

    svg.transition()
        .duration(500)
        .attr('height', 700)

    stackData(categoryData);

    d3.selectAll('.gdp-legend').remove();
    d3.selectAll('.box-group').remove();

    if (dotContainer.size()) {
        dotContainer.transition()
            .duration(700)
            .attr('transform', translator(baseTranslate.x, baseTranslate.y))
            .on('end', function(){
                init();
                reset();
            });

        dotContainer.select('.gdp').transition()
            .duration(500)
            .attr('opacity', 0)
            .on('end', function(){
                d3.select(this).remove();
            })
        } else {
        init();
    }
}