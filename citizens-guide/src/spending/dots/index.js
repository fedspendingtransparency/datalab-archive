import { select, selectAll } from 'd3-selection';
import { establishContainer } from '../../utils';
import './dots.scss';
import { placeDots } from "./placeDots";
import { startLegendAnimation } from './legend';
import { setChartWidth, chartWidth } from './widthManager';
import { setDotsPerRow } from './dotConstants';

const d3 = { select, selectAll };

function init() {
    setChartWidth();
    setDotsPerRow();
    
    establishContainer(500, chartWidth);

    startLegendAnimation();
}

init();