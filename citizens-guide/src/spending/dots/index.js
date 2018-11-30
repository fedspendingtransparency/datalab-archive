import { select, selectAll } from 'd3-selection';
import { establishContainer } from '../../utils';
import './dots.scss';
import { placeDots } from "./placeDots";
import { startLegendAnimation } from './legend';

const d3 = { select, selectAll };

function init() {
    const width = d3.select('#viz').node().getBoundingClientRect().width;
    
    establishContainer(500, width);

    startLegendAnimation(width);
}

init();