---
---

(function () {
  const searchContainer = d3.select('#investment-categories .function-buttons').append('div').classed('bubble-search', true);
  const mobileInput = d3.select('#sunburst-search__input');
  const mobileList = d3.select('#sunburst-search__list--mobile');
  let searchData, inputWrapper, input, list, isInit;

  function initDom() {
    inputWrapper = searchContainer.append('div').classed('bubble-search__input-wrapper', true);
    list = searchContainer.append('ul').style('height', (bubble.chartHeight * .7) + 'px').classed('bubble-search__list', true);
  };

  function filterFn(row) {
    if (row.name.toLowerCase().indexOf(this) !== -1 || row.parent.name.toLowerCase().indexOf(this) !== -1) {
      return true;
    }
  }

  function filterData() {
    const filterValue = input.property('value').toLowerCase();
    const filterMobileValue = mobileInput.property('value').toLowerCase();

    displayList(searchData.filter(filterFn.bind(filterValue)));
    displayMobileList(searchData.filter(filterFn.bind(filterMobileValue)));
  };

  function initInput() {
    mobileInput.on('input', filterData);
    input = inputWrapper
      .append('input')
      .classed('bubble-search__input', true)
      .attr('placeholder', 'Search Categories')
      .on('input', filterData)
    ;
  };
  
  function initSearch() {
    if (isInit) return;
    isInit = true;
    initDom();
    initInput();
  };

  function selectItem(d) {
    if (d.zeroLength) {
      return;
    }
    $("#sunburst-search__list--mobile").hide();
    sunburst.onSearchSelect(d);
  };

  function prependParent(d) {
    if (d.depth === 2) {
      d3.select(this)
        .append('span')
        .text(d => {if (d.parent) return d.parent.name})
        .classed('bubble-search__parent-name', true)
      ;
    };
  };

  function displayList(filtered) {
    list.selectAll('li').remove();

    if (!filtered.length) {
      filtered.push({
        name: 'no items matched your search',
        zeroLength: true
      });
    };

    list.selectAll('li')
      .data(filtered)
      .enter()
      .append('li')
      .classed('bubble-search__item', true)
      .each(prependParent)
      .on('click', selectItem)
      .append('span')
      .text(d => d.name)
    ;
  }

  function displayMobileList(filtered) {
    mobileList.selectAll('li').remove();

    if (!filtered.length) {
      filtered.push({
        name: 'no items matched your search',
        zeroLength: true
      });
    };

    mobileList.selectAll('li')
      .data(filtered)
      .enter()
      .append('li')
      .classed('bubble-search__item', true)
      .each(prependParent)
      .on('click', selectItem)
      .append('span')
      .text(d => d.name)
    ;
  }

  function setSearchData(data) {
    searchData = data.filter(r => r.depth);
    initSearch();
    displayList(searchData);
    displayMobileList(searchData);
  };

  $(document).ready(function() {
    $('#sunburst-search__input').click(function() {
      $('#mobile-search--sunburst ul').show();
    });

    // hide on "clickout" of element
    $(document).click(function (e) {
      if ($(e.target).parents("#mobile-search--sunburst").length === 0) {
	      $("#mobile-search--sunburst ul").hide();
      }
    });
  });
  
  sunburst.setSearchData = setSearchData;
  sunburst.init = initSearch;
})();
