import { select, selectAll } from 'd3-selection';
import './showHide.scss';
import { renderChart } from '.';

const d3 = { select, selectAll };

let data,
    activeArr = [];

d3.select('#activate-show-hide')
    .on('click', function () {
        const isTrayOpenInd = d3.select('#show-hide-tray')
            .classed('active');

        if (isTrayOpenInd) {
            resetFilters();
            activeArr.length = 0;
        } else {
            d3.select('#show-hide-list').selectAll('button').each(function(d,i){
                activeArr[i] = d3.select(this).classed('active');
            });
        }

        d3.select('#show-hide-tray').classed('active', !isTrayOpenInd);
    });

d3.select('#select-all')
    .on('click', function () {
        d3.select('#show-hide-list').selectAll('button')
            .classed('active', function (d) {
                d.active = true;
                return true;
            })
    });

d3.select('#select-none')
    .on('click', function () {
        d3.select('#show-hide-list').selectAll('button')
            .classed('active', function (d) {
                d.active = null;
                return null;
            })
    });

d3.select('#reset-filters-button')
    .on('click', function () {
        resetFilters();
    });

d3.select('#save-filters-button')
    .on('click', function () {
        d3.select('#show-hide-tray')
            .classed('active', null);

        renderChart(filterForActiveData())
    });

function resetFilters(){
    if (activeArr.length) {
        console.log('activeArr:', activeArr);
        const showHideListData = d3.select('#show-hide-list').selectAll('button');
        showHideListData.each(function(d, i){
            const curEl = d3.select(this);
            if(curEl.classed('active') !== activeArr[i]){
                toggleActive(curEl, d);
            }
        });
    }
}

function toggleActive(button, d) {
    const setToThis = d.active ? null : true;

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
        .on('click', function(d,i){
            const curEl = d3.select(this);
            toggleActive(curEl, d)
        })
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