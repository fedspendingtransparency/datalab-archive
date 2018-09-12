import './pager.scss';
import { select, selectAll } from 'd3-selection';

const d3 = { select, selectAll },
    prevButtonClass = 'pager__prev',
    nextButtonClass = 'pager__next',
    maxPages = 3;

function setPage(pager) {
    const params = new URLSearchParams;

    pager.select('.page-text').text(`page ${pager.page} of ${maxPages}`);

    pager.selectAll('button').attr('disabled', null)

    if (pager.page === 1) {
        pager.select('.' + prevButtonClass).attr('disabled', true)
    }

    if (pager.page === maxPages) {
        pager.select('.' + nextButtonClass).attr('disabled', true)        
    }
}

function createPager(next, prev) {
    let pager,
        buttons;

    pager = d3.select('#pager');

    pager.page = 1;

    buttons = pager.append('div').classed('buttons', true);

    buttons.append('button')
        .classed(prevButtonClass, true)
        .on('click', function () {
            pager.page -= 1;
            setPage(pager);
            prev(pager.page);
        })
        .append('img')
        .attr('src', 'assets/icons/arrow-up.svg')
        .attr('alt', 'previous page');

    buttons.append('button')
        .classed(nextButtonClass, true)
        .on('click', function () {
            pager.page += 1;
            setPage(pager);
            next(pager.page);
        })
        .append('img')
        .attr('src', 'assets/icons/arrow-down.svg')
        .attr('alt', 'next page')

    pager.append('div')
        .classed('page-text', true);

    setPage(pager);

    return pager;
}

export function pagerInit(next, prev) {
    let pager = createPager(next, prev);

    document.body.onkeyup = function (e) {
        if (e.keyCode === 32 || e.key === 32) {
            pager.page += 1;
            setPage(pager, i);
            next(i);
        }
    }
}