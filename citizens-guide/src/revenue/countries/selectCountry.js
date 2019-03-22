import './selectCountry.scss';
import { select } from 'd3-selection';
import { establishContainer } from '../../utils';
import { countryList, refreshData } from './chart';
import { addXIcon, addButtonIcon, addSearchIcon } from './iconGenerators';
import { selectedCountries } from './selectedCountryManager';
import { translate } from '../../utils';
import { getCountryList } from './data';

const d3 = { select }

let parentDiv,
    input,
    listDiv,
    trigger,
    isMobileInd;

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
                    }, 10);

                    return true;
                }
            });
            adjustHeightToSVG();
        });

    trigger.node().innerText = "Add/Remove Countries";

    svg = trigger.append('svg')
        .attr('width', 20)
        .attr('height', 20);

    addButtonIcon(svg);
}

function adjustHeightToSVG(){
    const svg = d3.select('svg.main'),
        listDiv = d3.select('#viz').select('.list-div'),
        svgDimensions = svg.node().getBoundingClientRect(),
        maxIterations = 10;

    let listDivDimensions = listDiv.node().getBoundingClientRect(),
        availableListDivs = listDiv.selectAll('.available:not(hidden)'),
        iterator = 0;

    while(++iterator <= maxIterations && availableListDivs.size() && listDivDimensions.height > svgDimensions.height){
        d3.select(availableListDivs._groups[0][availableListDivs.size() - 1]).classed('hidden', true);
        availableListDivs = listDiv.selectAll('.available:not(.hidden)');
        listDivDimensions = listDiv.node().getBoundingClientRect();
    }
}

function establishInput() {
    const wrapper = listDiv.append('div').classed('search-wrapper', true);
    let icon;

    input = wrapper.append('input')
        .attr('placeholder', 'search for a country')
        .on('input', function () {
            listAvailableCountries(this.value);
        });

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
            this.innerText = d.display;
        });

    svg = items.append('svg');

    addXIcon(svg);
}

function sortDisplayName(objA, objB){
    const a = objA.display,
        b = objB.display;

    if(a < b){
        return -1;
    } else if(a > b){
        return 1;
    }
    return 0;
}

function getAvailableCountries(filterStr) {
    if (filterStr) {
        filterStr = filterStr.toLowerCase();
    }

    return getCountryList().filter(c => {
        if(!c){
          return false;
        }
        const plainName = c.plainName,
            displayName = c.display;
        // The first check makes sure to exclude any countries we already have selected, the second checks both the "plain name"
        // of each country so that any countries with special characters for letters can be searched for with a normal keyboard or copying and pasting
        // the name with its respective special characters.
        return (displayName && selectedCountries.list.filter(d => d.display.match(displayName)).length === 0)
            && (!filterStr || plainName.toLowerCase().indexOf(filterStr) !== -1 || displayName.toLowerCase().indexOf(filterStr) !== -1)
    }).sort(sortDisplayName);
}

function addCountry(d) {
    selectedCountries.add(d);
    onListUpdated(isMobileInd);
}

function removeCountry(d) {
    selectedCountries.remove(d);
    onListUpdated(isMobileInd);
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
            this.innerText = d.display;

            d3.select(this).append('button')
                .classed('add-button', true)
                .node()
                .innerText = 'add';
        });

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
    establishInput();
    listDiv.append('div').classed('available-container', true)

    listselectedCountries();
    listAvailableCountries();
}

function onListUpdated(isMobileInd) {
    parentDiv.classed('active', false);
    input.node().value = null;
    listselectedCountries();
    listAvailableCountries();
    refreshData(null, true, isMobileInd);
}

export function selectCountryInit(_isMobileInd) {
    isMobileInd = _isMobileInd;
    const svg = establishContainer();

    parentDiv = document.createElement('div');

    svg.node().parentNode.insertBefore(parentDiv, svg.node());

    parentDiv = d3.select(parentDiv).classed('select-country', true);

    createTrigger();
    createListDiv();
}