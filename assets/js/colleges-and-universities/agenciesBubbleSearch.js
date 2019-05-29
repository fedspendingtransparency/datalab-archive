(function(){
    let parentSection, searchContainer, inputWrapper, input, list;

    function initDom() {
        parentSection = d3.select('#section-three');
        searchContainer = parentSection.insert('div', ':first-child').classed('bubble-search', true);
        inputWrapper = searchContainer.append('div').classed('bubble-search__input-wrapper', true);
        list = searchContainer.append('ul').classed('bubble-search__list', true)
    }

    function initInput() {
        input = inputWrapper.append('input')
    }
    
    function initSearch() {
        console.log('init search')
        initDom();
        initInput();
    }

    function displayList(filtered) {
        console.log('filtered', filtered)
        list.selectAll('li')
            .data(filtered)
            .enter()
            .append('li')
                .text(d => d.name)

    }
    
    function setAgencies(agencies) {
        bubble.agencies = agencies;
        initSearch();
        displayList(bubble.agencies);
    }

    bubble.setAgencies = setAgencies;
})()
