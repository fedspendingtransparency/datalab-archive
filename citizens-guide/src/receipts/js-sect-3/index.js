import '../../../node_modules/normalize-css/normalize.css';
import '../sass/receipts.scss';
import { establishContainer, initDropShadow } from '../../utils';
import { trendView } from './trendView';
import { getSummary } from './trendData';

const data = getSummary(),
    svg = establishContainer();

svg.attr('height', 1200);

initDropShadow();

trendView(data, svg);