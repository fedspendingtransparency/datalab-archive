import '../../../node_modules/normalize-css/normalize.css';
import '../sass/receipts.scss';
import { establishContainer } from '../../utils';
import { trendView } from './trend-view';
import { getSummary } from './trendData';


const data = getSummary(),
    svg = establishContainer();

svg.attr('height', 1200)

trendView(data, svg);