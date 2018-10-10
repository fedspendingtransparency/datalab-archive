import { select, selectAll } from 'd3-selection';
import { establishContainer, initDropShadow, stripBr } from '../../utils';
import { trendView } from './trendView';
import { trendData } from './trendData';
import { initTwoPartTour } from '../../income/tour';

const d3 = { select, selectAll },
    svg = establishContainer(780);

let data = trendData('function');

initDropShadow();

trendView(data, svg, {
    width: 500
});

d3.select('#select-budget-function')
    .on('click', function () {
        data = trendData('function');

        svg.selectAll('*').remove();

        trendView(data, svg, {
            width: 500
        });
    })

d3.select('#select-agency')
    .on('click', function () {
        data = trendData('agency');

        svg.selectAll('*').remove();

        trendView(data, svg, {
            width: 500
        });
    })
