import { selectAll } from 'd3-selection';
import { tourButton } from '../tourButton/tourButton';

const d3 = { selectAll },
    tour = location.search.includes('tour'),
    factBox = d3.selectAll('.fact-box');

let tourStage2;

function initTour() {
    factBox.classed('sr-only', false);

    setTimeout(function () {
        factBox.classed('fact-box--out-right', false)
    }, 1000)
}

export function setTourStage2() {
    if (tourStage2) {
        return;
    }

    tourStage2 = true;

    factBox.html("<strong>When you're done here</strong>, next you'll discover how the United States compares to other countries in terms of income and GDP.");

    tourButton(factBox.node(), './country-comparison.html', 'Country Comparison', true);
}

(function init() {
    if (tour) {
        initTour();
    } else {
        factBox.remove();
    }
})()