import { select, selectAll } from 'd3-selection';
import 'd3-transition';
import { layers } from './createLayers';
import { translator, establishContainer } from '../../utils';
import { chartWidth } from './widthManager';
import { vizHeight } from './debtDots';

const d3 = { select, selectAll },
    scaleFactor = 0.6,
    duration = 1000;

let activeCompare;

function revealHiddenElements() {
    d3.selectAll('.intro-hidden').classed('intro-hidden', null);
    resizeSvg();
}

function resizeSvg() {
    const h = (activeCompare) ? vizHeight * scaleFactor + 40 : vizHeight;
    
    establishContainer().transition().duration(duration).attr('height', h);
}

function zoom(out) {
    const yOffset = 35;

    if (out) {
        layers.master.transition()
            .duration(duration)
            .attr('transform', translator((chartWidth - chartWidth * scaleFactor) / 2, yOffset) + ` scale(${scaleFactor})`)
            .ease();
    } else {
        layers.master.transition()
            .duration(duration)
            .attr('transform', translator(0, yOffset) + ` scale(1)`)
            .ease();
    }
}

function showHideMath() {
    d3.selectAll('.intro-math').classed('intro-math--hidden', activeCompare);
}

function toggleLayer() {
    const clicked = d3.select(this),
        id = clicked.attr('data-trigger-id');

    d3.selectAll('.facts__trigger').classed('facts__trigger--active', false);

    if (id === activeCompare) {
        activeCompare = null;
        zoom();
    } else {
        zoom('out')
        clicked.classed('facts__trigger--active', true);
        activeCompare = id;
    }

    transitionLayers();
    toggleFacts();
    resizeSvg();
    showHideMath();
}

function toggleFacts() {
    const targetSection = d3.select(`#${activeCompare}-facts`),
        sectionActive = 'facts__section--active';

    d3.selectAll('.facts__section').classed(sectionActive, null);

    if (targetSection.size()) {
        targetSection.classed(sectionActive, true);
    }
}

function transitionLayers() {
    layers.deficit.transition()
        .duration(duration)
        .attr('opacity', function(){
            return activeCompare === 'deficit' ? 1 : 0;
        })
        .ease();

    layers.gdp.transition()
        .duration(duration)
        .attr('opacity', function(){
            return activeCompare === 'gdp' ? 1 : 0;
        })
        .ease();
}

function showDebt() {
    layers.debt.transition()
        .duration(duration)
        .attr('opacity', 1)
        .ease();
}

export function layersInit() {
    d3.selectAll('.facts__trigger').on('click', toggleLayer);
    zoom();
    showDebt();
    setTimeout(showHideMath, duration * 2);
    setTimeout(revealHiddenElements, duration);
}