---
---

(function () {
  const searchData = [];
  
  let parentSection, searchContainer, inputWrapper, input, list, mobileList, mobileSearchContainer, mobileInputWrapper, mobileInput;
  let buttons = d3.select('#bubble-function-buttons');

  function initDom() {
    parentSection = d3.select('#bubble-search');
    mobileSearchContainer = d3.select('#mobile-search--bubble');
    searchContainer = parentSection.append('div').classed('bubble-search', true);
    inputWrapper = searchContainer.append('div').classed('bubble-search__input-wrapper', true);
    mobileInputWrapper = mobileSearchContainer.append('div').classed('bubble-search__input-wrapper', true);
    list = searchContainer.append('ul').style('height', (bubble.chartHeight * .7) + 'px').classed('bubble-search__list', true);
    mobileList = mobileSearchContainer.append('ul').classed('bubble-search__list--mobile', true);
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
    const mobilefilterVal = mobileInput.property('value').toLowerCase();

    displayList(searchData.filter(filterFn.bind(filterValue)));
    displayMobileList(searchData.filter(filterFn.bind(mobilefilterVal)));
  }

  function initInput() {
    input = inputWrapper
      .append('input')
      .classed('bubble-search__input', true)
      .attr('placeholder', 'Search Agencies...')
      .on('input', filterData);

    mobileInput = mobileInputWrapper
      .append('input')
      .classed('bubble-search__input', true)
      .attr('placeholder', 'Search Agencies...')
      .on('input', filterData);
  }

  function initSearch() {
    initDom();
    initInput();
  }

  function selectItem(d) {
    if (d.zeroLength) {
      return;
    }

    bubble.selectSubAgency(d);
  }

  function prependParent(d) {
    d3.select(this)
      .append('span')
      .text(d => {if (d.parent) return d.parent.name })
      .classed('bubble-search__parent-name', true);
  }

  function displayMobileList(filtered) {
    mobileList.selectAll('li').remove();
    
    if (!filtered.length) {
      filtered.push({
        name: 'no items matched your search',
        zeroLength: true
      });
    }

    mobileList.selectAll('li')
      .data(filtered)
      .enter()
      .append('li')
      .classed('bubble-search__item', true)
      .each(prependParent)
      .on('click', selectItem)
      .append('span')
      .text(d => d.name);
  };

  function displayList(filtered) {
    list.selectAll('li').remove();

    if (!filtered.length) {
      filtered.push({
        name: 'no items matched your search',
        zeroLength: true
      });
    }

    list.selectAll('li')
      .data(filtered)
      .enter()
      .append('li')
      .classed('bubble-search__item', true)
      .each(prependParent)
      .on('click', selectItem)
      .append('span')
      .text(d => d.name);
  }

  function flattenData(data) {
    data.children.forEach(child => {

      if (child.depth !== 1) {
        searchData.push(child);
      };

      if (child.children && child.children.length >= 1) {
        flattenData(child);
      }
    });

    searchData.sort((a, b) => {
      return a.name - b.name;
    });
  }

  function setSearchData(data) {
    flattenData(data);

    searchData.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });

    initSearch();
    displayList(searchData);
    displayMobileList(searchData);
  }

  $(document).ready(function() {
    $('#mobile-search--bubble > .bubble-search__input-wrapper').click(function(){
      console.log('bubble keydown mobile');
      $('#mobile-search--bubble ul').css('display','block');
    });

    $('#mobile-search--bubble').click(function() {
      console.log('testing dev');
      $('#mobile-search--bubble ul').css('display','block');
    });

    $('#mobile-search--bubble > div').click(function() {
      console.log('testing dev');
      $('#mobile-search--bubble ul').css('display','block');
    });

    $('input.bubble-search__input').click(function() {
      console.log('testing dev');
      $('#mobile-search--bubble ul').css('display','block');
    });

    $('#bubble-keydown').focus(function() {
      $('#mobile-search--bubble ul').css('display', 'block');
    });
    
    // hide on "clickout" of element
    $(document).click(function (e) {
      if ($(e.target).parents("#mobile-search--bubble").length === 0) {
	$("#mobile-search--bubble ul").css('display', 'none');
      }
    });

  });

  bubble.setSearchData = setSearchData;
})();
