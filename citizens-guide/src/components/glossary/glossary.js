import glossaryData from '../../../../assets/ffg/data/glossary.csv';
import { select, selectAll } from 'd3-selection';

const d3 = { select, selectAll };

let origCategorizedTerms = [], filteredData, termSelected;

let glossaryWrapper, glossaryLaunchedEl;

function categorizeGlossaryData(data) {
    const categorizedData = [];
    let hashChar = '';

    data.forEach(function (d) {
        if (!d.term) return;

        hashChar = d.term.substring(0, 1);
        if (!categorizedData[hashChar]) {
            categorizedData[hashChar] = [];
        }
        return categorizedData[hashChar].push(d);
    });

    return categorizedData;
}

function createSVGElements() {
    const closeButton = d3.select('#cg-glossary-close-button'),
        searchBox = d3.select('#cg-search-button'),
        backButton = d3.select('.cg-glossary-back__content');

    // Remove the svg tags if they exist for each icon.
    closeButton.select('svg').remove();
    searchBox.select('svg').remove();
    backButton.select('svg').remove();

    // Add the svg tags for each icon.
    const closeButtonSvg = closeButton.append('svg')
        .classed('cg-icon-close', true)
        .attr('viewBox', '0 0 512 512')
        .attr('aria-label', 'Close Glossary 123'),
        searchBoxSvg = searchBox.append('svg')
            .classed('cg-icon-search', true)
            .attr('viewBox', '0 0 512 512')
            .attr('aria-label', 'search'),
        backButtonSvg = backButton.append('svg').classed('cg-glossary-angle-left', true)
            .attr('viewBox', '0 0 512 512')
            .attr('aria-label', 'Back');

    //The following code appends the correct elements to the dom and adds the attributes to draw the "X" symbol for the close button.
    closeButtonSvg.append('title')
        .text('Close Glossary');
    closeButtonSvg.append('g').append('path')
        .attr('d', 'M256 212L50 6 6 50l206 206L6 462l44 44 206-206 206 206 44-44-206-206L506 50 462 6');

    //The following code appends the correct elements to the dom and adds the attributes to draw the magnifying glass symbol for the search icon.
    searchBoxSvg.append('title')
        .text('Search');
    searchBoxSvg.append('g').append('path')
        .attr('d', 'M337.8 208.3c0-36.5-12-66.8-37.4-92-25.3-25.4-55.7-37.6-92-37.6-35.5 0-66 12.2-91.2 37.5-25.3 25.3-38.5 55.6-38.5 92 0 35.5 13.2 66 38.5 91.2 25.3 25.3 55.7 38.4 91 38.4 36.5 0 67-13 92.2-38.4 25.3-25.3 37.4-55.7 37.4-91zM453.5 506L327 379.5c-34.6 24.4-73.3 36.7-116 36.7-27.6 0-54-5-79.6-16.3-25.5-12-47-26-65.3-44-18-19-32-40-43-66-11-25-17-52-17-79 0-29 6-55 16.8-80C33.8 106 48 83.2 66 65c18.6-18.3 40-32.6 65.5-44 25.5-9.8 52-15 79.5-15 28.4 0 55 5 80.4 15.3 24.5 11.2 47 25.5 65.3 44 18.3 18.2 32.6 40.7 43.8 66.2 10.2 24.5 16.3 51 16.3 79.6 0 43-12.2 82-36.7 117l126 126-52 53z');

    //The following code appends the correct elements to the dom and adds the attributes to draw the "<" symbol for the back button.
    backButtonSvg.append('title')
        .text('Back');
    backButtonSvg.append('g').append('path')
        .attr('d', 'M368.5 77.2L208 255l160.2 179.7.4 71.3-225.2-250.5L368 6');
}
function createTermHTMLElements(terms, searchTerm) {
    const termListDiv = $('#cg-glossary-term-list-div'),
        termResultList = termListDiv.find('.cg-glossary-search-results');

    termResultList.empty();

    let filteredTerms = {},
        hashSection = null,
        hashTitle,
        hashDivider,
        groupItems,
        termGroup,
        term,
        termButton;

    if (searchTerm) {
        filteredTerms = filteredData.filter(function (t) {
            const upperCaseSearchTerm = searchTerm.toUpperCase();
            return t.term.toUpperCase().match(upperCaseSearchTerm);
        });
        filteredTerms = categorizeGlossaryData(filteredTerms);
    } else {
        filteredTerms = origCategorizedTerms;
    }

    Object.keys(filteredTerms).forEach(function (t) {
        termGroup = filteredTerms[t];

        hashSection = $('<div class="cg-glossary-result-group"></div>');

        hashTitle = $(`<h2 class="cg-group-title">${t}</h2>`);

        hashDivider = $('<hr class="cg-group-divider"/>');

        groupItems = $('<ul class="cg-group-items"></ul>');

        termResultList.append(hashSection);
        hashSection.append(hashTitle, hashDivider, groupItems);

        termGroup.forEach(function (t1) {
            term = $('<li></li>');
            termButton = $(`<button hashMap="${t}" class="cg-glossary-link">${t1.term}</button>`);

            term.append(termButton);
            groupItems.append(term);
        })
    });
}

function showIndividualTerm(termsArr, termDisplay) {
    const definitionWrapperId = '#cg-definition-wrapper',
        definitionWrapper = $(definitionWrapperId),
        showListResultsInd = false;

    let term = {};

    if (termsArr && termDisplay) {
        /*
         * It may seem like a fragile idea to use the term display to perform the filter considering the csv has ids.
         * The problem is that if a term is added/removed to the glossary.csv, this will change the ids on all of the terms
         * following the term that changed. When we have the ability to click on text in the document to launch the glossary and view
         * that term, that means the ids need to be placed on all of the actionable text in the document AND that any updates to the
         * glossary means updating the ids on all actionable text pieces throughout CG (an absolute nightmare).
         */
        term = termsArr.filter(function (d) {
            return d.term.toUpperCase() === termDisplay.toUpperCase();
        });
        if (!term.length) {
            return;
        }
        term = term[0];
    }

    definitionWrapper.empty();
    definitionWrapper.append(`<h2 class="cg-glossary-term">${term.term}</h2>`);

    const definition = term.definition;
    if (definition.match('• ')) {
        let definitionParts = definition.split('• ');
        const paragraphDefinition = definitionParts.shift();

        definitionWrapper.append(`<div class="cg-definition-content"><p>${paragraphDefinition}</p><ul><li>${definitionParts.join('</li><li>')}</li></ul></div>`);

    } else {
        definitionWrapper.append(`<div class="cg-definition-content"><p>${term.definition}</p></div>`);
    }

    if (term.url_path) {
        definitionWrapper.append(`<div class="cg-glossary-resources"><h3 class="cg-glossary-resources-title">More Resources</h3>`,
            `<hr><div><p class="cg-glossary-resources-text">Learn More: <a href="${term.url_path}" target="_blank" rel="noopener noreferrer">${term.url_display}</a></p></div>`);
    }
    setTermListView(showListResultsInd);
}

function setActiveStatus(glossaryWrapper, activeInd) {
    const openClass = 'active';

    if (activeInd) {
        glossaryWrapper.addClass(openClass);
    } else {
        glossaryWrapper.removeClass(openClass);
    }
}

function setTermListView(showListResultsInd) {
    const searchResultsClass = '.cg-glossary-search-results',
        glossaryDefinitionClass = '.cg-glossary-definition',
        searchResultsDiv = $(searchResultsClass),
        glossaryDefinitionDiv = $(glossaryDefinitionClass)

    if (showListResultsInd) {
        termSelected = false;
        searchResultsDiv.removeClass('hidden');
        glossaryDefinitionDiv.addClass('hidden');
    } else {
        termSelected = true;
        searchResultsDiv.addClass('hidden');
        glossaryDefinitionDiv.removeClass('hidden');
    }
}

function resizeTermListDiv() {
    const termListDiv = $('#cg-glossary-term-list-div');
    if (termListDiv.length) {
        // Most (if not all) CG pages have a window event which refreshes the screen, so since we only create the SVG elements
        // on init, we must also create them on resize.
        createSVGElements();
        const parentDiv = termListDiv.get(0).parentNode,
            siblingDiv = parentDiv.getElementsByClassName('cg-glossary-header-wrapper')[0];

        termListDiv.css('height', (parentDiv.clientHeight - siblingDiv.clientHeight) + 'px');
    }
}

function onFfgPage() {
    if (window.location.pathname.indexOf('americas-finance-guide') === -1) {
        return false;
    }

    return true;
}

function showGlossary(el) {
    const activeInd = true,
        onOpenInd = true,
        showListResultsInd = true;

    if(el && el.target){
        glossaryLaunchedEl = d3.select(el.target);
    } else {
        glossaryLaunchedEl = document.activeElement;
    }

    if (!onFfgPage()) {
        window.location = 'https://' + window.location.host + '/americas-finance-guide/index.html?glossary';
        return;
    }

    setActiveStatus(glossaryWrapper, activeInd);
    setTermListView(showListResultsInd);

    setDocumentFocus(onOpenInd);
}

function setDocumentFocus(onOpenInd){
    let elementToSetFocus = glossaryLaunchedEl,
        timeoutTime = 0;

    if(onOpenInd){
        elementToSetFocus = document.getElementById('cg-glossary-close-button');
        timeoutTime = 500;
    }

    if(!elementToSetFocus){
        return;
    }

    setTimeout(function(){
        elementToSetFocus.focus();
    },timeoutTime);
}

function addGlossaryEvents(terms) {
    const searchForm = $('.cg-glossary-search-bar form'),
        searchTextBox = $('#cg-search-text-box'),
        actionableTextEntries = $('.cg-glossary-actionable-text');

    let debounce, previousHeight, previousSearchStr, glossaryButtonHiddenInd = true;

    // The following button will exist in the Datalab header
    d3.select('#ffg-glossary-trigger').on('click', showGlossary);
    // The following button exists at the bottom-right of the screen when the user scrolls down the page
    d3.select('#afg-floating-glossary-button').on('click', showGlossary);

    glossaryWrapper.on('click', '#cg-glossary-close-button', function () {
        const activeInd = false;
        setActiveStatus(glossaryWrapper, activeInd);
        setDocumentFocus();
        glossaryLaunchedEl = null;
    });
    glossaryWrapper.on('click', '.cg-glossary-link', function (el) {
        const curElement = el.target,
            termsArr = terms[curElement.getAttribute('hashMap')],
            termDisplay = curElement.innerText;

        glossaryLaunchedEl = d3.select(curElement);

        showIndividualTerm(termsArr, termDisplay);
    });
    $('.cg-glossary-back').on('click', function () {
        const showListResultsInd = true;
        setTermListView(showListResultsInd);
    });
    searchTextBox.bind("propertychange change click keyup input paste", function (event) {
        if (debounce) {
            clearTimeout(debounce);
        }

        const searchStr = $(this).val();
        const showListResultsInd = true;

        if (previousSearchStr === searchStr) {
            return;
        }

        debounce = setTimeout(function () {
            if (termSelected) {
                return;
            };
            createTermHTMLElements(null, searchStr);
            setTermListView(showListResultsInd);
        }, 400);
    });
    searchForm.on('submit', function (e) {
        const searchStr = searchTextBox.val();
        const showListResultsInd = true;
        createTermHTMLElements(null, searchStr);
        setTermListView(showListResultsInd);

    });
    actionableTextEntries.on('click', function () {
        const glossaryTerm = $(this).attr('glossaryTerm'),
            activeInd = true;

        setActiveStatus(glossaryWrapper, activeInd);

        if (glossaryTerm) {
            showIndividualTerm(filteredData, glossaryTerm);
        }

    });
    window.addEventListener('resize', function (e) {
        if (debounce) {
            clearTimeout(debounce);
        }

        if (previousHeight === window.innerHeight) {
            return;
        }
        previousHeight = window.innerWidth;
        debounce = setTimeout(resizeTermListDiv, 100);
    });
    window.addEventListener('scroll', function (e){
        const scrollPos = document.documentElement.scrollTop,
            glossaryButton = d3.select('#afg-launch-glossary-div');

        let glossaryButtonHiddenInd = glossaryButton.classed('hidden');
        if(scrollPos === 0){
            if(glossaryButtonHiddenInd === false) {
                glossaryButton.classed('hidden', true);
            }
        } else if(glossaryButtonHiddenInd === true){
            glossaryButton.classed('hidden', false);
        }
    });
    setTimeout(function () {
        resizeTermListDiv();
    }, 0);
}

function init() {
    glossaryWrapper = $('#cg-glossary-wrapper');

    filteredData = glossaryData.filter(r => r.term); //remove blank rows

    origCategorizedTerms = categorizeGlossaryData(filteredData);

    createTermHTMLElements(origCategorizedTerms);
    createSVGElements();
    addGlossaryEvents(origCategorizedTerms);

    if (window.location.search.indexOf('glossary') !== -1) {
        showGlossary();
    }
}

setTimeout(function () {
    init();
}, 0);