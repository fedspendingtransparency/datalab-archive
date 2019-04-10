import { select, selectAll } from 'd3-selection';

const d3 = { select, selectAll },
    openClass = 'facts__section--open';

function toggleVisibility() {
    const section = d3.select(this);

    section.classed(openClass, !section.classed(openClass));
}

function init() {
    const facts = d3.selectAll('.facts__section'),
        masks = facts.append('div').classed('facts__section-mask', true);

    masks.append('button').append('i').classed('fas fa-caret-down', true);

    facts.on('click', toggleVisibility);
}

init();