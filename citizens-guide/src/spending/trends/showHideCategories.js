import { select, selectAll } from 'd3-selection';
import './showHide.scss';
import { renderChart } from '.';

const d3 = { select, selectAll };

let data;

d3.select('#activate-show-hide')
    .on('click', function () {
        d3.select('#show-hide-tray')
            .classed('active', true)
    })

d3.select('#select-all')
    .on('click', function () {
        d3.select('#show-hide-list').selectAll('button')
            .classed('active', function (d) {
                d.active = true;
                return true;
            })
    })

d3.select('#select-none')
    .on('click', function () {
        d3.select('#show-hide-list').selectAll('button')
            .classed('active', function (d) {
                d.active = null;
                return null;
            })
    })

d3.select('#show-hide-done')
    .on('click', function () {
        d3.select('#show-hide-tray')
            .classed('active', null);

        renderChart(filterForActiveData())

    })

function toggleActive(d) {
    const button = d3.select(this),
        setToThis = d.active ? null : true;

    d.active = setToThis;
    button.classed('active', setToThis);
}

function placeControls(_data) {
    data = _data;

    d3.select('#show-hide-list').selectAll('button')
        .data(data)
        .enter()
        .append('button')
        .classed('active', function (d) {
            return d.active ? true : null;
        })
        .text(function (d) {
            return d.name;
        })
        .on('click', toggleActive)
}

function filterForActiveData() {
    return data.filter(r => r.active);
}

export function showHideInit(data) {
    d3.select('#show-hide-list').selectAll('*').remove();

    data.forEach((r, i) => {
        r.active = (i < 5);
    });

    placeControls(data);

    return filterForActiveData(data);
}