import { select } from 'd3-selection';
import { getSources } from './data';

const d3 = { select };

function addLink(source, i, list) {
    const hint = this,
        length = list.length,
        a = hint.append('a')
            .attr('href', source.url);

    a.node().innerText = source.name;

    if (i === length - 2) {
        hint.node().innerHTML += ' and ';
    } else if (i < length - 2) {
        hint.node().innerHTML += ' ';
    }
}

export function showSources() {
    const sources = getSources(),
        hint = d3.select('.hint');

    if (!sources.length) {
        return;
    }

    hint.node().innerText += ' from ';

    sources.forEach(addLink, hint);
}