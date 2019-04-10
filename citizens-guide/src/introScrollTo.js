import { select } from 'd3-selection';

const d3 = { select };

export function introScrollTo() {
    const factBox = d3.select('.facts.sidebar').attr('style', 'position:relative');

    let scrollTarget = factBox.select('.facts__target');

    if (!scrollTarget.size()) {
        scrollTarget = factBox.append('div')
            .classed('facts__target', true)
            .attr('style', 'height: 0; width: 100%; position: absolute; top: -110px')
    }

    scrollTarget.node().scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}