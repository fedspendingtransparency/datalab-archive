import { select, selectAll } from 'd3-selection';
import { max } from 'd3-array';

const d3 = { select, selectAll, max },
    flippedClass = 'card--flipped',
    containerActiveClass = 'cards--flipped',
    cardContainer = d3.select('.cards'),
    cards = d3.selectAll('.card');

let debounce;

function toggleState() {
    const card = d3.select(this);

    if (card.classed(flippedClass)) {
        cardContainer.classed(containerActiveClass, false);
        cards.classed(flippedClass, false);
    } else {
        cards.classed(flippedClass, false);
        card.classed(flippedClass, true);
        cardContainer.classed(containerActiveClass, true);
    }
}

function fixHeight() {
    const heights = [];

    let max;

    d3.selectAll('.card__contents').each(function () {
        const height = Math.ceil(this.getBoundingClientRect().height);

        console.log(height)

        heights.push(Math.ceil(this.getBoundingClientRect().height));
    })

    max = d3.max(heights) * 1.35;

    cardContainer.attr('style', `height: ${max}px`);
}

function buildCover() {
    const card = d3.select(this),
        heading = card.select('.card__heading').clone(true).remove(),
        cover = card.append('div').classed('card__cover', true);

    heading.each(function () {
        cover.node().appendChild(this)
    })
}

export function initCards() {
    cards.each(buildCover);
    cards.on('click', toggleState);
    fixHeight();
}

window.addEventListener('resize', function () {
    if (debounce) {
        clearTimeout(debounce);
    }

    debounce = setTimeout(fixHeight, 100);
});