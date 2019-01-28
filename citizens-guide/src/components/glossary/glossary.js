import glossaryData from '../../../../assets/ffg/components/glossary/glossary.csv';

function categorizeGlossaryData(){
    const categorizedData = [];
    let hashChar = '';

    glossaryData.forEach(function(d){
        hashChar = d.term.substring(0,1);
        if(!categorizedData[hashChar]){
            categorizedData[hashChar] = [];
        }
        return categorizedData[hashChar].push(d);
    });

    return categorizedData;
}

function createTermHTMLElements(terms){
    const termListDiv = $('#cg-glossary-term-list-div'),
        termResultList = termListDiv.find('.cg-glossary-search-results');

        let hashSection = null,
            hashTitle,
            hashDivider,
            groupItems,
            termGroup,
            term,
            termButton;

       Object.keys(terms).forEach(function(t){
           termGroup = terms[t];
           console.log(t, termGroup);

           hashSection = document.createElement('div');
           hashSection.className = 'cg-glossary-result-group';

           hashTitle = document.createElement('h2');
           hashTitle.className = 'cg-group-title';
           hashTitle.innerText = t;

           hashDivider = document.createElement('hr');
           hashDivider.className = 'cg-group-divider';

           groupItems = document.createElement('ul');
           groupItems.className = 'cg-group-items';

           termResultList.append(hashSection);
           hashSection.appendChild(hashTitle);
           hashSection.appendChild(hashDivider);
           hashSection.appendChild(groupItems);

           termGroup.forEach(function(t1){
               term = document.createElement('li');
               termButton = document.createElement('button');
               termButton.setAttribute('hashMap', t);
               termButton.className = 'cg-glossary-link';
               termButton.innerText = t1.term;

               term.appendChild(termButton);
               groupItems.appendChild(term);
           })
        });
}

function showIndividualTerm(definitionWrapper, term){
    definitionWrapper.append(`<h2 class="cg-glossary-term">${term.term}</h2>`);

    const definition = term.definition;
    if(definition.match('• ')){
        let definitionParts = definition.split('• ');
        const paragraphDefinition = definitionParts.shift();

        definitionWrapper.append(`<div class="cg-definition-content"><p>${paragraphDefinition}</p><ul><li>${definitionParts.join('</li><li>')}</li></ul></div>`);

    } else {
        definitionWrapper.append(`<div class="cg-definition-content"><p>${term.definition}</p></div>`);
    }

    if(term.url_path){
        definitionWrapper.append(`<div class="cg-glossary-resources"><h3 class="cg-glossary-resources-title">More Resources</h3>`,
            `<hr><div><p class="cg-glossary-resources-text">Learn More: <a href="${term.url_path}" target="_blank" rel="noopener noreferrer">${term.url_display}</a></p></div>`);
    }
}

function toggleActiveStatus(glossaryWrapper) {
    const openClass = 'active';

    glossaryWrapper.toggleClass(openClass);
}

function toggleTermListView(){
    const searchResultsClass = '.cg-glossary-search-results',
        glossaryDefinitionClass = '.cg-glossary-definition',
        searchResultsDiv = $(searchResultsClass),
        glossaryDefinitionDiv = $(glossaryDefinitionClass);

    searchResultsDiv.toggleClass('hidden');
    glossaryDefinitionDiv.toggleClass('hidden');
}

function resizeTermListDiv(){
    const termListDiv = $('#cg-glossary-term-list-div');

    if(termListDiv){
        const parentDiv = termListDiv.get(0).parentNode,
            siblingDiv = parentDiv.getElementsByClassName('cg-glossary-header-wrapper')[0];

        termListDiv.css('height',(parentDiv.clientHeight - siblingDiv.clientHeight) + 'px');
    }
}

function init(){
    const glossaryButton = $('#cg-glossary-btn'),
     glossaryWrapper = $('#cg-glossary-wrapper'),
     terms = categorizeGlossaryData();


    let debounce, previousHeight;

    if(glossaryButton.length && glossaryWrapper.length){
        createTermHTMLElements(terms);
        glossaryButton.on('click', function(){
            toggleActiveStatus(glossaryWrapper);
        });
        glossaryWrapper.on('click', '#cg-glossary-close-button', function(){
            toggleActiveStatus(glossaryWrapper);
        });
        glossaryWrapper.on('click', '.cg-glossary-link', function(el){
            const curElement = el.target,
                termDisplay = curElement.innerText;

            let term = terms[curElement.getAttribute('hashMap')].filter(function(d){
                    return d.term === termDisplay;
                });
            if(term.length){
                const glossaryDefinitionWrapper = '#cg-definition-wrapper',
                    glossaryDefinitionWrapperDiv = $(glossaryDefinitionWrapper);
                term = term[0];

                glossaryDefinitionWrapperDiv.empty();
                showIndividualTerm(glossaryDefinitionWrapperDiv, term);
                toggleTermListView();
            }
        });
        $('.cg-glossary-back').on('click', function(){
            toggleTermListView();
        });
        window.addEventListener('resize', function(e){
            if (debounce) {
                clearTimeout(debounce);
            }

            if(previousHeight === window.innerHeight){
                return;
            }
            previousHeight = window.innerWidth;
            debounce = setTimeout(resizeTermListDiv, 100);
        });
        setTimeout(function(){
            resizeTermListDiv();
        },0);
    }
}

setTimeout(function(){
    init();
},0);