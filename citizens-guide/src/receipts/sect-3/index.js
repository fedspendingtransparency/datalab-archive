import { establishContainer, initDropShadow } from '../../utils';
import { trendView } from './trendView';
import { trendData } from './trendData';

const data = trendData(),
    svg = establishContainer();

svg.attr('height', 1200);

initDropShadow();

trendView(data, svg, {
    width: 500
});