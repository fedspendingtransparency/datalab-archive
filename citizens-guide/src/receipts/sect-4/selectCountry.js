import { select } from 'd3-selection';
import { establishContainer } from '../../utils';
import './selectCountry.scss';
import { countryList } from './chart';
import { masterData } from '.';

const d3 = { select }

let activeCountries,
    parentDiv,
    listDiv,
    trigger;

function addButtonIcon(svg) {
    svg.append('circle')
        .attr('r', 9)
        .attr('stroke', 'white')
        .attr('stroke-width', 1)
        .attr('fill', 'none')
        .attr('cx', 10)
        .attr('cy', 10)

    svg.append('line')
        .attr('x1', 5)
        .attr('x2', 15)
        .attr('y1', 10)
        .attr('y2', 10)
        .attr('stroke', 'white')
        .attr('stroke-width', 1)

    svg.append('line')
        .attr('x1', 10)
        .attr('x2', 10)
        .attr('y1', 5)
        .attr('y2', 15)
        .attr('stroke', 'white')
        .attr('stroke-width', 1)
}

function createTrigger() {
    let svg;

    trigger = parentDiv.append('button')
        .classed('trigger-button', true)
        .on('click', function () {
            parentDiv.classed('active', function () {
                return !parentDiv.classed('active');
            })
        })

    trigger.node().innerText = "Add/Remove Countries";

    svg = trigger.append('svg')
        .attr('width', 20)
        .attr('height', 20);

    addButtonIcon(svg);
}

function establishInupt() {
    listDiv.append('input')
}

function listActiveCountries() {
    activeCountries = countryList.get();

    listDiv.append('ul').selectAll('li')
        .data(activeCountries)
        .enter()
        .append('li')
        .each(function (d) {
            this.innerText = d.country;
        })
}

function getAvailableCountries() {
    const activeList = activeCountries.map(r => r.country);

    return masterData.countryList.filter(c => {
        return activeList.indexOf(c) === -1;
    }).sort();
}

function listAvailableCountries() {
    const list = getAvailableCountries(),
        max = 10;

    let more, remainder;

    if (list.length > max) {
        more = true;
        remainder = list.length - max;
        list.length = max;
    }

    listDiv.selectAll('div.available')
        .data(list)
        .enter()
        .append('div')
        .classed('available', true)
        .each(function(d){
            this.innerText = d;
        })

    if (more) {
        listDiv.append('div')
            .classed('see-more', true)
            .each(function(){
                this.innerText = `${remainder} more countries are available. Search to find more.`;
            })
    }
}

function createListDiv() {
    listDiv = parentDiv.append('div')
        .classed('list-div', true);

    establishInupt();
    listActiveCountries();

    listDiv.append('hr')

    listAvailableCountries();
}

export function selectCountryInit() {
    const svg = establishContainer();

    parentDiv = document.createElement('div');

    svg.node().parentNode.insertBefore(parentDiv, svg.node());

    parentDiv = d3.select(parentDiv).classed('select-country', true);

    createTrigger();
    createListDiv();
}