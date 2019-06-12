---
---

(function () {
    const searchData = [];

    let parentSection, searchContainer, inputWrapper, input, list;
    let buttons = d3.select('#bubble-function-buttons');

    function initDom() {
        parentSection = d3.select('#bubble-search');
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
        initDom();
        initInput();
    }

    function selectItem(d) {
        if (d.zeroLength) {
            return;
        }

        bubble.zoom(d.parent);
    }

    function prependParent(d) {
        d3.select(this)
            .append('span')
            .text(d => {if (d.parent) return d.parent.name})
            .classed('bubble-search__parent-name', true)
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

    function flattenData(data) {
        data.children.forEach(child => {

            if (child.depth !== 1) {
                searchData.push(child);
            };

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
