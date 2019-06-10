---
---

(function () {
    let searchData, parentSection, searchContainer, inputWrapper, input, list;
    let buttons = d3.select('#sunburst-function-buttons');

    function initDom() {
        parentSection = d3.select('#investment-categories .function-buttons');
        searchContainer = parentSection.append('div').classed('bubble-search', true);
        inputWrapper = searchContainer.append('div').classed('bubble-search__input-wrapper', true);
        list = searchContainer.append('ul').style('height', (bubble.chartHeight * .7) + 'px').classed('bubble-search__list', true);
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

        sunburst.onSearchSelect(d);
        parentSection.classed('active', false);
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

    function setSearchData(data) {
        searchData = data;
        
        initSearch();
        displayList(searchData);
    }

    sunburst.setSearchData = setSearchData;
})()
