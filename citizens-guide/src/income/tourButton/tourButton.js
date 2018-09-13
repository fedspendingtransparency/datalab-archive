import { select } from 'd3-selection';
import './tourButton.scss';

const d3 = { select };

function dString() {
    return 'M0,2 Q0,0 2,1 L10,8 Q13,10 10,12 L2,19 Q0,20 0,18 Z'
}

export function tourButton(elem, url, linkText, fadeIn) {
    let e = d3.select(elem),
        buttonContainer;

    if (fadeIn) {
        e = buttonContainer = e.append('div').attr('id', 'tour-container');
    }

    if (url) {
        e = e.append('a')
            .attr('href', url + '?tour')
            .classed('tour-link', true);
    } else {
        e = e.append('button')
            .classed('tour-link', true);
    }

    e.append('svg')
        .attr('width', 14)
        .attr('height', 20)
        .attr('transform', 'scale(1.4)')
        .append('path')
        .attr('stroke', 'none')
        .attr('fill', 'white')
        .attr('d', dString());

    e.append('div')
        .text('Continue')
        .classed('tour-link__continue', true)

    if (linkText) {
        e.append('div')
            .text('to ' + linkText)
            .classed('tour-link__link-text', true)
    }

    if (fadeIn) {
        setTimeout(function(){
            buttonContainer.classed('in', true);
        },1000);
    }

    return e;
}