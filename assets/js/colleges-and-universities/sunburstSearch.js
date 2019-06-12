---
---

(function () {
    let searchData, parentSection, searchContainer, inputWrapper, input, list, isInit;
    let buttons = d3.select('#sunburst-function-buttons');

    function initDom() {
        parentSection = d3.select('#investment-categories .function-buttons');
        searchContainer = parentSection.append('div').classed('bubble-search', true);
        inputWrapper = searchContainer.append('div').classed('bubble-search__input-wrapper', true);
        list = searchContainer.append('ul').style('height', (bubble.chartHeight * .7) + 'px').classed('bubble-search__list', true);
    }

    function filterFn(row) {
        if (row.name.toLowerCase().indexOf(this) !== -1) {
            return true;
        }

        if (row.parent.name.toLowerCase().indexOf(this) !== -1) {
            return true;
        }

        return;
    }

    function filterData() {
        const filterValue = input.property('value').toLowerCase();

        displayList(searchData.filter(filterFn.bind(filterValue)));
    }

    function initInput() {
        input = inputWrapper
            .append('input')
            .classed('bubble-search__input', true)
            .attr('placeholder', 'Search Agencies')
            .on('input', filterData)
    }
    
    function initSearch() {
        if (isInit) return;

        isInit = true;
        
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

    function prependParent(d) {
        if (d.depth === 2) {
            d3.select(this)
            .append('span')
            .text(d => {if (d.parent) return d.parent.name})
            .classed('bubble-search__parent-name', true)
        }
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
            .classed('bubble-search__item', true)
            .each(prependParent)
            .on('click', selectItem)
            .append('span')
            .text(d => d.name)
    }

    function setSearchData(data) {
        searchData = data.filter(r => r.depth);

        initSearch();
        displayList(searchData);
    }

    sunburst.setSearchData = setSearchData;
    sunburst.init = initSearch;
})()
