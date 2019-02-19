import { select, selectAll } from 'd3-selection';

const d3 = { select, selectAll },
    flippedClass = 'card--flipped',
    containerActiveClass = 'cards--flipped',
    cardContainer = d3.select('.cards'),
    cards = d3.selectAll('.card');

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
}