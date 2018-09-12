import { select } from 'd3-selection';
import './tourButton.scss';

const d3 = { select };

function dString() {
    return 'M0,2 Q0,0 2,1 L10,8 Q13,10 10,12 L2,19 Q0,20 0,18 Z'
}

export function tourButton(elem, url, linkText) {
    const anchor = d3.select(elem).append('a')
        .attr('href', url + '?tour')
        .classed('tour-link', true);

    anchor.append('svg')
        .attr('width', 14)
        .attr('height', 20)
        .attr('transform', 'scale(1.4)')
        .append('path')
        .attr('stroke', 'none')
        .attr('fill', 'white')
        .attr('d', dString());

    anchor.append('div')
        .text('Continue')
        .classed('tour-link__continue', true)

    anchor.append('div')
        .text('to ' + linkText)
        .classed('tour-link__link-text', true)

}