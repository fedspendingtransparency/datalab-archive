(function () {
    const searchData = [];

    let parentSection, searchContainer, inputWrapper, input, list;

    function initDom() {
        parentSection = d3.select('#section-three');
        searchContainer = parentSection.insert('div', ':first-child').classed('bubble-search', true);
        inputWrapper = searchContainer.append('div').classed('bubble-search__input-wrapper', true);
        list = searchContainer.append('ul').classed('bubble-search__list', true)
    }

    function filterData() {
        const filterValue = input.property('value').toLowerCase();

        displayList(searchData.filter(agency => agency.name.toLowerCase().indexOf(filterValue) !== -1));
    }

    function initInput() {
        input = inputWrapper
            .append('input')
            .classed('bubble-search__input', true)
            .attr('placeholder', 'Search Agencies')
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

        bubble.zoom(d);
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
            .classed('bubble-search__item', true)
            .on('click', selectItem)
    }

    function flattenData(data) {
        data.children.forEach(child => {
            searchData.push(child);

            if (child.children && child.children.length > 1) {
                flattenData(child)
            }
        })

        searchData.sort((a, b) => {
            return a.name - b.name;
        })
    }

    function setSearchData(data) {
        flattenData(data)

        searchData.sort((a, b) => {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        })

        initSearch();
        displayList(searchData);
    }

    bubble.setSearchData = setSearchData;
})()
