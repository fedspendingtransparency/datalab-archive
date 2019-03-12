import { select, selectAll } from 'd3-selection';
import { max, min } from 'd3-array';

const d3 = { select, selectAll, max, min },
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

function renderInstructions(cover) {
    const button = cover.append('button');

    button.classed('card__flipper', true);
    
    button.append('i').classed('fas fa-exchange-alt card__flip-icon', true);

    button.append('span').text('click to learn more');
}

function buildCover() {
    const card = d3.select(this),
        heading = card.select('.card__heading').clone(true).remove(),
        cover = card.append('div').classed('card__cover', true);

    heading.each(function () {
        cover.node().appendChild(this)
    })

    renderInstructions(cover);
}

export function initCards() {
    cards.each(buildCover);
    cards.on('click', toggleState);
}

window.addEventListener('resize', function () {
    if (debounce) {
        clearTimeout(debounce);
    }
});