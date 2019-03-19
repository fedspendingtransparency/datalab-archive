import { select, selectAll } from 'd3-selection';
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
            returnListOfShowHideButtons().each(function(d,i){
                activeArr[i] = d3.select(this).classed('active');
            });
        }

        d3.select('#show-hide-tray').classed('active', !isTrayOpenInd);
    });

d3.select('#select-all')
    .on('click', function () {
        returnListOfShowHideButtons()
            .classed('active', function (d) {
                d.active = true;
                return true;
            })
    });

d3.select('#select-none')
    .on('click', function () {
        returnListOfShowHideButtons()
            .classed('active', function (d) {
                d.active = null;
                return null;
            })
    });

d3.select('#reset-filters-button')
    .on('click', function () {
        returnListOfShowHideButtons()
            .each(function(d,i) {
                const isActiveInd = initActiveFunction(i);
                d3.select(this).classed('active', isActiveInd);
                d.active = isActiveInd;
            });
    });

d3.select('#save-filters-button')
    .on('click', function () {
        d3.select('#show-hide-tray')
            .classed('active', null);

        renderChart(filterForActiveData())
    });

function returnListOfShowHideButtons(){
    return d3.select('#show-hide-list').selectAll('button');
}

function resetFilters(){
    if (activeArr.length) {
        const showHideListData = returnListOfShowHideButtons();
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

function initActiveFunction(input){
    const numValsToShow = 5;
    return input < numValsToShow;
}

export function showHideInit(data) {
    d3.select('#show-hide-list').selectAll('*').remove();

    data.forEach((r, i) => {
        r.active = initActiveFunction(i);
    });

    placeControls(data);

    return filterForActiveData(data);
}