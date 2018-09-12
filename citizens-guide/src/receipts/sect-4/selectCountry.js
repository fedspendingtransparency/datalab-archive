import './selectCountry.scss';
import { select } from 'd3-selection';
import { establishContainer } from '../../utils';
import { countryList, refreshData } from './chart';
import { masterData } from '.';
import { addXIcon, addButtonIcon, addSearchIcon } from './iconGenerators';
import { selectedCountries } from './selectedCountryManager';
import { translate } from '../../utils';

const d3 = { select }

let parentDiv,
    input,
    listDiv,
    trigger;

function createTrigger() {
    let svg;

    trigger = parentDiv.append('button')
        .classed('trigger-button', true)
        .on('click', function () {
            parentDiv.classed('active', function () {
                if (parentDiv.classed('active')) {
                    return false;
                } else {
                    setTimeout(function () {
                        input.node().focus()
                    }, 10)
                    return true;
                }
            })
        })

    trigger.node().innerText = "Add/Remove Countries";

    svg = trigger.append('svg')
        .attr('width', 20)
        .attr('height', 20);

    addButtonIcon(svg);
}

function establishInupt() {
    const wrapper = listDiv.append('div').classed('search-wrapper', true);
    let icon;

    input = wrapper.append('input')
        .attr('placeholder', 'search for a country')
        .on('input', function () {
            listAvailableCountries(this.value);
        })

    icon = wrapper.append('svg');

    addSearchIcon(icon);
}

function listselectedCountries() {
    const ul = listDiv.select('ul');

    let items, svg;

    ul.selectAll('*').remove();

    items = ul.selectAll('li')
        .data(selectedCountries.list)
        .enter()
        .append('li')
        .on('click', removeCountry)
        .each(function (d) {
            this.innerText = d;
        })

    svg = items.append('svg');

    addXIcon(svg);
}

function getAvailableCountries(filterStr) {
    if (filterStr) {
        filterStr = filterStr.toLowerCase();
    }

    return masterData.countryList.filter(c => {
        return (c && selectedCountries.list.indexOf(c) === -1 && (!filterStr || c.toLowerCase().indexOf(filterStr) !== -1))
    }).sort();
}

function addCountry(d) {
    selectedCountries.add(d);
    onListUpdated();
}

function removeCountry(d) {
    selectedCountries.remove(d);
    onListUpdated();
}

function listAvailableCountries(filterStr) {
    const list = getAvailableCountries(filterStr),
        availableContainer = listDiv.select('.available-container'),
        max = 10;

    let more, remainder;

    if (list.length > max) {
        more = true;
        remainder = list.length - max;
        list.length = max;
    }

    availableContainer.selectAll('*').remove();

    availableContainer.selectAll('div.available')
        .data(list)
        .enter()
        .append('div')
        .classed('available', true)
        .on('click', addCountry)
        .each(function (d) {
            this.innerText = d;

            d3.select(this).append('button')
                .classed('add-button', true)
                .node()
                .innerText = 'add';
        })

    if (more) {
        availableContainer.append('div')
            .classed('see-more', true)
            .each(function () {
                this.innerText = `${remainder} more countries are available. Search to find more.`;
            })
    }
}

function createListDiv() {
    listDiv = parentDiv.append('div')
        .classed('list-div', true);

    listDiv.append('ul');
    listDiv.append('hr');
    establishInupt();
    listDiv.append('div').classed('available-container', true)

    listselectedCountries();
    listAvailableCountries();
}

function onListUpdated() {
    parentDiv.classed('active', false);
    input.node().value = null;
    listselectedCountries();
    listAvailableCountries();
    refreshData();
}

export function selectCountryInit() {
    const svg = establishContainer();

    parentDiv = document.createElement('div');

    svg.node().parentNode.insertBefore(parentDiv, svg.node());

    parentDiv = d3.select(parentDiv).classed('select-country', true);

    createTrigger();
    createListDiv();
}