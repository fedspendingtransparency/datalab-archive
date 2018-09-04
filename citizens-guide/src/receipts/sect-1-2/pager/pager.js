import './pager.scss';
import { select } from 'd3-selection';

const d3 = { select };

function setPage(i) {
    this.select('.page-text').text(`page ${i} of 5`)
}

function createPager(next, prev) {
    let pager, buttons;

    pager = d3.select('#pager');

    buttons = pager.append('div').classed('buttons', true);

    buttons.append('button')
        .append('img')
        .attr('src', 'assets/icons/arrow-up.svg')
        .attr('alt', 'previous page')
        .on('click', prev);

    buttons.append('button')
        .append('img')
        .attr('src', 'assets/icons/arrow-down.svg')
        .attr('alt', 'next page')
        .on('click', next);        

    pager.append('div')
        .classed('page-text', true);

    pager.setPage = setPage;

    pager.setPage(1);

    return pager;
}

export function pagerInit(next, prev) {
    let pager = createPager(next, prev)

}