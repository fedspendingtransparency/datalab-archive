import { select, selectAll } from 'd3-selection';
import { establishContainer, initDropShadow, stripBr } from '../../utils';
import { trendView } from './trendView';
import { trendData } from './trendData';
import { initTwoPartTour } from '../tour';

const data = trendData(),
    d3 = { select, selectAll },
    tour = location.search.indexOf('tour') !== -1,
    factBox = d3.selectAll('.fact-box'),
    accessibilityAttrs = {
        title: 'Graph representing U.S. revenue trend lines for the past 5 years.',
        desc: 'U.S. revenue trend lines for the past 5 years broken down by category and further broken down at the sub-category level.'
    };

const svg = establishContainer(780, null, accessibilityAttrs);
initDropShadow();

trendView(data, svg, {
    width: 500
});

initTwoPartTour();