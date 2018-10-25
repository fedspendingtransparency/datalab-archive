import { select, selectAll } from 'd3-selection';
import { establishContainer, initDropShadow, stripBr } from '../../utils';
import { trendView } from './trendView';
import { trendData } from './trendData';
import { initTwoPartTour } from '../tour';

const data = trendData(),
    d3 = { select, selectAll },
    tour = location.search.indexOf('tour') !== -1,
    factBox = d3.selectAll('.fact-box'),
    svg = establishContainer(780);

initDropShadow();

trendView(data, svg, {
    width: 500
});

initTwoPartTour();