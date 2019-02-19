import { select, selectAll } from 'd3-selection';

const d3 = { select, selectAll };

function toggleState() {
    const card = d3.select(this);

    card.classed('card--flipped', !card.classed('card--flipped'));
}

function buildCover() {
    const card = d3.select(this),
        heading = card.select('.card__heading').clone(true).remove(),
        cover = card.append('div').classed('card__cover', true);

    heading.each(function () {
        cover.node().appendChild(this)
        // ?cover.node().innerHTML = this;
    })
}

export function initCards() {
    const cards = d3.selectAll('.card');

    cards.each(buildCover);

    cards.on('click', toggleState);
}