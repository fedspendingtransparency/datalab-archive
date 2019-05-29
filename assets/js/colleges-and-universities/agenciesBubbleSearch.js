(function(){
    let parentSection, searchContainer, inputWrapper, input, list;

    function initDom() {
        parentSection = d3.select('#section-three');
        searchContainer = parentSection.insert('div', ':first-child').classed('bubble-search', true);
        inputWrapper = searchContainer.append('div').classed('bubble-search__input-wrapper', true);
        list = searchContainer.append('ul').classed('bubble-search__list', true)
    }

    function filterData() {
        const filterValue = input.property('value').toLowerCase();

        displayList(bubble.agencies.filter(agency => agency.name.toLowerCase().indexOf(filterValue) !== -1));
    }

    function initInput() {
        input = inputWrapper.append('input')
            .on('input', filterData)
    }
    
    function initSearch() {
        initDom();
        initInput();
    }

    function selectItem(d) {
        if (d.zeroLength) {
            return;
        }

        console.log(`do something with ${d.name}`);
    }

    function displayList(filtered) {
        list.selectAll('li').remove();

        if (!filtered.length) {
            filtered.push({
                name: 'no items matched your search',
                zeroLength: true
            })
        }

        list.selectAll('li')
            .data(filtered)
            .enter()
            .append('li')
                .text(d => d.name)
                .on('click', selectItem)
    }
    
    function setAgencies(agencies) {
        bubble.agencies = agencies;
        initSearch();
        displayList(bubble.agencies);
    }

    bubble.setAgencies = setAgencies;
})()
