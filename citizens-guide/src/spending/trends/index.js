import { select, selectAll } from 'd3-selection';
import { establishContainer, initDropShadow, stripBr } from '../../utils';
import { trendView } from './trendView';
import { trendData } from './trendData';
import { initTwoPartTour } from '../../income/tour';

const data = trendData(),
    d3 = { select, selectAll },
    svg = establishContainer(780);

initDropShadow();

trendView(data, svg, {
    width: 500
});
