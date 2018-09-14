import { select, selectAll } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { min } from 'd3-array';
import { transition } from 'd3-transition';
import { getElementBox, translator, simplifyNumber, stripBr } from '../../utils';
import { receiptsConstants } from '../receipts-utils';
import { getDataByYear } from './data';
import { stack } from 'd3-shape';
import { establishContainer } from '../../utils';
import { zoomInit } from './zoom';
import { addTextElements } from './textElements';
import colors from '../../colors.scss';
import { showDetail, section2_2_init, clearDetails } from './showDetails';
import '../factBox.scss';
import '../header.scss';
import { tourButton } from '../tourButton/tourButton';

const d3 = { select, selectAll, scaleLinear, min, stack, transition },
    tour = location.search.includes('tour'),
    factBox = d3.selectAll('.fact-box'),
    categoryData = getDataByYear(2017),
    indexed = categoryData.reduce((a, c) => {
        a[c.activity] = c;
        return a;
    }, {}),
    baseTranslate = { x: 91, y: 40 },
    baseDimensions = { width: 1014, height: 100 },
    topAmount = categoryData.slice(0, 3).reduce((a, c) => a += c.amount, 0),
    xScale = d3.scaleLinear(),
    totalAmount = categoryData.reduce((a, c) => a += c.amount, 0);

let svg,
    tourStage2,
    baseContainer,
    shaderContainer,
    detailsGroup,
    zoomComponent,
    textElements,
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

function zoomShaders(state, textFade, zoom) {
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
            if (state === 'in') {
                i -= 3;
            }

            if (state === 'in' && i < 0) {
                return 0;
            } else {
                return (i) ? 1 - i / 7 : 1;
            }
        })
        .attr('fill', colors.colorPrimaryDarker);
}

function zoomToMoreCategories(state) {
    const textFade = 500,
        more = (state === 'in'),
        zoom = 1000;

    rescale(state);
    clearDetails();

    detailsGroup.transition()
        .duration(textFade)
        .attr('opacity', 0)
        .on('end', function () {
            detailsGroup.selectAll('*').remove();
        })

    zoomShaders(state, textFade, zoom);

    setTimeout(function () {
        detailsGroup.attr('opacity', 1);
        addDetails(state)
    }, textFade + zoom)
}

function rescale(state) {
    const low = (state === 'in') ? topAmount : 0;

    xScale.domain([low, totalAmount]);
}

function addDetails(state) {
    textElements = addTextElements(categoryData, detailsGroup, xScale, baseDimensions, state);

    textElements
        .attr('style', 'cursor:pointer')
        .on('click', function (d, i) {
            const n = (state) ? i + 3 : i,
                rect = shaders.filter(function (d, j) { return j === n }).node();

            setTourStep2();
            showDetail.bind(rect)(d);
        });

    if (!zoomComponent) {
        zoomComponent = zoomInit(baseContainer, baseDimensions, xScale(categoryData[3].x0), zoomToMoreCategories);
    }

    section2_2_init(baseContainer, indexed);
}

function moveBarGroup(d, i) {
    baseContainer.transition()
        .duration(1000)
        .attr('transform', translator(baseTranslate.x, baseTranslate.y + 100))
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
        .attr('y', 0)
        .attr('x', function (d) {
            return xScale(d.x0)
        })
        .attr('width', function (d) {
            return xScale(d.amount);
        })
        .attr('height', baseDimensions.height)
        .attr('fill', function (d, i) {
            return (i < 3) ? colors.colorPrimaryDarker : '#ccc';
        })
        .attr('opactity', 0)
        .on('click', function(d){
            setTourStep2();
            showDetail.bind(this)(d);
        });



    shaders.transition()
        .duration(1000)
        .attr('opacity', function (d, i) {
            if (i > 3) {
                i = 3;
            }

            return (i) ? 1 - i / 7 : 1;
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
        .attr('style', 'cursor:pointer')
        .classed(receiptsConstants.shaderContainerClass, true);

    detailsGroup = baseContainer.append('g')
        .attr('opacity', 0);

    xScale.range([0, baseDimensions.width])

    rescale();
}

function setTourStep2(){
    if (tourStage2) {
        return;
    }

    tourStage2 = true;

    factBox.html("<strong>When you're done here</strong>, next you'll discover how these values change over time.");

    tourButton(factBox.node(), 'trends-categories.html', 'Trends Over Time', true);
}

function initTour() {
    factBox.classed('sr-only', false);

    setTimeout(function () {
        factBox.classed('fact-box--out-right', false)
    },1000)
}

function init() {
    stripBr();
    stackData(categoryData);
    svg = establishContainer(700);
    setContainers();
    addSegments();

    if (tour) {
        initTour();
    } else {
        factBox.remove();
    }
}

init();