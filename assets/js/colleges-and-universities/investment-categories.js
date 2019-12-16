---
---

// add legend
d3.select('#legend_scaleKey').append('circle')
  .attr('r', 25)
  .attr('class', 'legend_scaleKeyCircle')
  .attr('cx', 60)
  .attr('cy', 65);
d3.select('#legend_scaleKey').append('circle')
  .attr('r', 35)
  .attr('class', 'legend_scaleKeyCircle')
  .attr('cx', 60)
  .attr('cy', 65);
d3.select('#legend_scaleKey').append('circle')
  .attr('r', 45)
  .attr('class', 'legend_scaleKeyCircle')
  .attr('cx', 60)
  .attr('cy', 65);

let chartData; // ref to current data parent (only for center label) 
let categoryLabel; // text to show in center
let dataType; // text to show in center
let catCalculatedWidth, catMaxHeight, catWidth, catHeight, radius, xScale, yScale, svg;
let scopedData;
let _categoryState;

function setCategoryState(d) {
    _categoryState = d;
}

function getCategoryState() {
    return _categoryState;
}

function radioChange() {
  $('#categories input[type=radio]').change(function() {
    let selectedVal = $("input[name='category']:checked").val();
    if ($('#investment-sunburst-viz').css('display') == 'none') {
      if (selectedVal === 'contracts') {
        $('#investment-table--grants').hide();
        $('#investment-table--contracts').show();
        $('#investment-table--research').hide();
      } else if (selectedVal === 'grants') {
        $('#investment-table--contracts').hide();
        $('#investment-table--research').hide();
        $('#investment-table--grants').show();
      } else if (selectedVal === 'research') {
        $('#investment-table--contracts').hide();
        $('#investment-table--grants').hide();
        $('#investment-table--research').show();
      }
    };
  });
};

function changeCategory(category) {

  if (category.value === 'contracts') {
    scopedData = contractsChartArray;
    categoryLabel = 'Contract';
    dataType = 'PSC';
    if ($('#investment-sunburst-viz').css('display') == 'none') {
      revealTable('contracts');
    }
  } else if (category.value === 'grants') {
    scopedData = grantsChartArray;
    categoryLabel = 'Grant';
    dataType = 'CFDA';
    if ($('#investment-sunburst-viz').css('display') == 'none') {
      revealTable('grants');
    }
  } else if (category.value === 'research') {
    scopedData = researchGrantsChartArray;
    categoryLabel = 'Research Grant';
    dataType = 'CFDA';
    if ($('#investment-sunburst-viz').css('display') == 'none') {
      revealTable('research');
    }
  }

  chartData = scopedData[0];

  refreshData(scopedData);

  // enable search/filter
  if (!sunburst.setSearchData) {
    console.warn('bubble method not available');
  } else {
    sunburst.setSearchData(scopedData);
    sunburst.onSearchSelect = click;
  }
}

function revealTable(category) {
  if (category.value === 'contracts') {
    $('#investment-table--grants').hide();
    $('#investment-table--contracts').show();
    $('#investment-table--research').hide();
  } else if (category.value === 'grants') {
    $('#investment-table--contracts').hide();
    $('#investment-table--research').hide();
    $('#investment-table--grants').show();
  } else if (category.value === 'research') {
    $('#investment-table--contracts').hide();
    $('#investment-table--grants').hide();
    $('#investment-table--research').show();
  }
}

function downloadData() {
  switch (categoryLabel) {
    case 'Contract':
      window.open('data-lab-data/CU/updated_CU_data/Investment_Section_Contracts_Download_V2.csv');
      break;
    case 'Grant':
      window.open('data-lab-data/CU/updated_CU_data/Investment_Section_Grants_Download_V2.csv');
      break;
    case 'Research Grant':
      window.open('data-lab-data/CU/updated_CU_data/Investment_Section_Research_Grants_Download_V2.csv');
      break;
    }
}

function isMobile() {
    const maxThreshold = 768;
    return window.innerWidth <= maxThreshold;
}

function isTablet() {
    const minThreshold = 769;
    const maxThreshold = 1199;

   return (minThreshold <= window.innerWidth && window.innerWidth <= maxThreshold);

}

const formatNumber = d3.format('$,.0f');
let centerGroup;

function updateCenter(d) {
  d3.select('text#tab').remove();
    const boundingBox = innerRadius * 2/Math.sqrt(2);

    const dataTypeLabel = dataType === 'CFDA' ? '' : dataType + ' ';

    let labelFontSize = 1;
    const lineHeight = 1.1;
    const doubleSpace = 2;
    const mediumText = 1.25;
    const largeText = 1.75;
    const exLargeText = 2;

    let wordWrapMultiplier = isMobile() ? 5.5 : isTablet() ? 3 : 2;
    let smWordWrapMultiplier = isMobile() ? 3 : isTablet() ? 2 : 1;

  if (d.depth === 0) {

    centerGroup = svg.append('svg:text')
      .attr('id', 'tab');

    centerGroup.append('tspan')
      .attr('x', '0')
      .attr('text-anchor', 'middle')
      .text('Total FY2018 ' + categoryLabel  + ' Funding')
      .attr('class', 'center-heading')
      .style('font-size', function() {
        return labelFontSize * mediumText + "em";
      })
      .attr('dy', '0')
    ;

    centerGroup.append('tspan')
      .attr('dy', lineHeight + "em")
      .attr('x', '0')
      .attr('text-anchor', 'middle')
      .text(formatNumber(d.value))
      .attr('class', 'center-amount')
      .style('font-size', labelFontSize * largeText + "em")
    ;


  } else if (d.depth === 1) {
      centerGroup = svg.append('svg:text')
      .attr('id', 'tab');

      // category
    centerGroup.append('tspan')
      .attr('x', '0')
      .attr('text-anchor', 'middle')
      .text(dataTypeLabel + 'Category')
      .attr('class', 'center-heading')
      .style('font-size', labelFontSize + "em")
      .attr('dy', '0')
    ;

    centerGroup.append('tspan')
      .attr('dy', lineHeight + "em")
      .attr('x', '0')
      .attr('text-anchor', 'middle')
      .text(d.name)
      .attr('class', 'center-title')
      .style('font-size', labelFontSize * mediumText + "em")
      .call(wordWrap, boundingBox * smWordWrapMultiplier)

    ;

    centerGroup.append('tspan')
      .attr('dy', lineHeight * doubleSpace + "em")
      .attr('x', '0')
      .attr('text-anchor', 'middle')
      .text('Total FY2018 Funding')
      .attr('class', 'center-heading')
      .style('font-size', labelFontSize + "em")
    ;

    centerGroup.append('tspan')
      .attr('dy', lineHeight + "em")
      .attr('x', '0')
      .attr('text-anchor', 'middle')
      .text(formatNumber(d.value))
      .attr('class', 'center-amount')
      .style('font-size', labelFontSize * largeText + "em")
    ;

  } else {
      centerGroup = svg.append('svg:text')
        .attr('id', 'tab');

      centerGroup.append('tspan')
        .attr('x', '0')
        .attr('text-anchor', 'middle')
        .text(dataTypeLabel + 'Category')
        .attr('class', 'center-heading')
        .style('font-size', labelFontSize * mediumText + "em")
        .attr('dy', '0')
      ;

      centerGroup.append('tspan')
        .attr('dy', lineHeight + "em")
        .attr('x', '0')
        .attr('text-anchor', 'middle')
        .text(d.parent.name)
        .attr('class', 'center-title')
        .style('font-size', labelFontSize * largeText + "em")
        .call(wordWrap, boundingBox * smWordWrapMultiplier)

      ;

      centerGroup.append('tspan')
        .attr('dy', lineHeight * 2 + "em")
        .attr('x', '0')
        .attr('text-anchor', 'middle')
        .text(dataTypeLabel + 'Sub-Category')
        .attr('class', 'center-heading')
        .style('font-size', labelFontSize * mediumText + "em")
      ;


      centerGroup.append('tspan')
        .attr('dy', lineHeight + "em")
        .attr('x', '0')
        .attr('text-anchor', 'middle')
        .text(d.name)
        .attr('class', 'center-title')
        .style('font-size', labelFontSize * largeText + "em")
        .call(wordWrap, innerRadius * wordWrapMultiplier)
      ;

      centerGroup.append('tspan')
        .attr('dy', lineHeight * 2 + "em")
        .attr('x', '0')
        .attr('text-anchor', 'middle')
        .text(formatNumber(d.value))
        .attr('class', 'center-amount')
        .style('font-size', labelFontSize * exLargeText + "em")
      ;
  }

  /* Scale text to fit */
  const bbox = centerGroup.node().getBBox();
  const maxHeight = bbox.height;
  const maxWidth = bbox.width;
  let scale = 1;

  if(maxHeight >= maxWidth) {
      if (maxHeight > boundingBox) {
        scale = boundingBox / maxHeight;
        centerGroup.attr("transform", "scale(" + scale + ")");
      }

  } else {
      if(maxWidth > boundingBox) {
        scale = boundingBox / maxWidth;
        centerGroup.attr("transform", "scale(" + scale + ")");
      }
  }

  const padding = 16 * scale; // 1em = 16px
    
  centerGroup.style('cursor', 'pointer')
    .attr('y', -maxHeight / 2 + padding)
    .on('click', function() {
        click(chartData);
    })
  ;

}

const centerColor = 'rgba(0, 0, 0, 0)'; //transparent to show #center
const wedgeColors = ['#881e3d', '#daa200', '#D25d15', '#082344', '#004c40'];
function getWedgeColor(d) {
  if (d.depth === 0) {
    return centerColor;
  }
  while (d.depth > 1) { //fill with colorIndex color (or ancestors')
    d = d.parent;
  }
  return wedgeColors[d.colorIndex];
}

let innerRadius;
const arc = d3.svg.arc()
  .startAngle(d => Math.max(0, Math.min(2 * Math.PI, xScale(d.x))))
  .endAngle(d => Math.max(0, Math.min(2 * Math.PI, xScale(d.x + d.dx))))
  .innerRadius(function(d) {
      if(d.depth === 1 && (!innerRadius || innerRadius > 0)) {
          innerRadius = Math.max(0, yScale(d.y));
      }
      return Math.max(0, yScale(d.y));
  })
  .outerRadius(d => Math.max(0, yScale(d.y + d.dy)))
;

function drawChart(data) {
  createChart();
  refreshData(data);
}

function createChart() {
  const widthPercentage = .7;
  catCalculatedWidth = window.innerWidth * widthPercentage;
  catMaxHeight = document.getElementById("sunburst").clientHeight;
  catWidth = catCalculatedWidth < catMaxHeight ? catCalculatedWidth : catMaxHeight;
  catHeight = catWidth;
  radius = Math.min(catWidth, catHeight) / 2;
  xScale = d3.scale.linear().range([0, 2 * Math.PI]);
  yScale = d3.scale.sqrt().range([0, radius]);

  d3.select("#sunburst").selectAll("*").remove();

  svg = d3.select('#sunburst')
    .attr('style', `width: ${catWidth}px; height: ${catHeight}px`)
    .append('svg')
    .attr('width', catWidth)
    .attr('height', catHeight)
    .append('g')
    .attr('transform', 'translate(' + (catWidth / 2) + ',' + (catHeight / 2) + ')');
}

function refreshData(data) {
  svg.selectAll('path').remove();
  const paths = svg.selectAll('path').data(data);
  paths.enter().append('path')
    .attr('d', arc)
    .attr('class', d => 'depth' + d.depth)
    .attr('fill', d => getWedgeColor(d))
    // .on('mouseover', hover)
    .on('click', click)
    .append('title').text(function(d) {
      const name = d.name.replace(/CFDA/i, '').replace(/PSC/i, '').trim();
      return name;
    });
  ;
  
  click(data[0]); // simulate clicking center to reset zoom
}

function click(d) {
  setCategoryState(d);
  updateCenter(d);
  svg.transition()
    .duration(750)
    .tween('scale', () => {

      // adjust xScale domain values to expand/contract selected sector (no changes to radii (y))
      const i = d3.interpolateArray(xScale.domain(), [d.x, d.x + d.dx]);
      return t => {
        xScale.domain(i(t));
      };
    })
    .selectAll('path')
    .attrTween('d', d => function () {
      return arc(d);
    })
  ;

  sunburst.activateDetail(d);
}

function buildDataHierarchy(title, dataArray) {
  const data = { name: title, children: [] };
  const levels = ['family', 'Program_Title'];

  dataArray.forEach(d => {
    // Keep this as a reference to the current level
    let depthCursor = data.children;
    // Go down one level at a time
    levels.forEach((property, depth) => {

      // Look to see if a branch has already been created
      let index;
      depthCursor.forEach((child, i) => {
        if (d[property] == child.name) {
          index = i;
        }
      });
      // Add a branch if it isn't there
      if (isNaN(index)) {
        depthCursor.push({ 'name': d[property], 'children': [] });
        index = depthCursor.length - 1;
      }
      // Now reference the new child array as we go deeper into the tree
      depthCursor = depthCursor[index].children;
      // This is a leaf, so add the last element to the specified branch
      if (depth === levels.length - 1) {
        depthCursor.push({ 'name': d.Recipient, 'size': d.Obligation });
      }
    });
  });
  return data;
}

function createContractsTable() {
  d3.csv('data-lab-data/CU/updated_CU_data/InvestmentSectionContractsV2.csv', function(contractData) {

    let table = d3.select('#investment-table--contracts').append('table')
      .attr('id', 'investment-table-datatable');

    let titles = ['Family', 'Program Title', 'Agency', 'Subagency', 'Recipient', 'Obligation'];
    
    table.append('thead').append('tr')
      .selectAll('th')
      .data(titles).enter()
      .append('th')
      .text(function (d) {
        return d;
      })
    ;

    $('#investment-table-datatable').dataTable({
      data: contractData,
      columns: [
        {'data': 'family'},
        {'data': 'Program_Title'},
        {'data': 'Agency'},
        {'data': 'Subagency'},
        {'data': 'Recipient'},
        {'data': 'Obligation',
        'render': $.fn.dataTable.render.number(',', '.', 0, '$'),
        'className': 'dt-right'
        },
      ],
      deferRender:    true,
      responsive: true,
      scrollCollapse: true,
      scroller:       true
    });
  });
};

function createGrantsTable() {
  d3.csv('data-lab-data/CU/updated_CU_data/InvestmentSectionGrantsV2.csv', function(err, data) {
    if (err) { return err; }

    let table = d3.select('#investment-table--grants').append('table')
      .attr('id', 'investment-table-datatable--grants');

    let titles = ['Family', 'Program Title', 'Agency', 'Subagency', 'Recipient', 'Obligation'];
    
    table.append('thead').append('tr')
      .selectAll('th')
      .data(titles).enter()
      .append('th')
      .text(function (d) {
        return d;
      })
    ;

    // datatable start
    $('#investment-table-datatable--grants').dataTable({
      data: data,
      columns: [
        {'data': 'family'},
        {'data': 'Program_Title'},
        {'data': 'Agency'},
        {'data': 'Subagency'},
        {'data': 'Recipient'},
        {'data': 'Obligation',
          'render': $.fn.dataTable.render.number(',', '.', 0, '$'),
          'className': 'dt-right'
         },
      ],
      deferRender:    true,
      responsive: true,
      scrollCollapse: true,
      scroller:       true
    });
  }); // start datatable
};

function createResearchTable() {
  d3.csv('data-lab-data/CU/updated_CU_data/InvestmentSectionGrantsV2.csv', function(err, data) {
    if (err) { return err; }

    let researchData = data.filter(d => d.Research);
    
    let table = d3.select('#investment-table--research').append('table')
      .attr('id', 'investment-table-datatable--research')
    ;

    let titles = ['Family', 'Program Title', 'Agency', 'Subagency', 'Recipient', 'Obligation'];
    
    table.append('thead').append('tr')
      .selectAll('th')
      .data(titles).enter()
      .append('th')
      .text(function (d) {
        return d;
      })
    ;

    // datatable start
    $('#investment-table-datatable--research').dataTable({
      data: researchData,
      columns: [
        {'data': 'family'},
        {'data': 'Program_Title'},
        {'data': 'Agency'},
        {'data': 'Subagency'},
        {'data': 'Recipient'},
        {'data': 'Obligation',
          'render': $.fn.dataTable.render.number(',', '.', 0, '$'),
          'className': 'dt-right'
         },
      ],
      deferRender:    true,
      responsive: true,
      scrollCollapse: true,
      scroller:       true
    });
  }); // start datatable
};


const partition = d3.layout.partition().value(d => d.size);

let grantsHierarchy, grantsChartArray;
let researchGrantsHierarchy, researchGrantsChartArray;
d3.csv('data-lab-data/CU/updated_CU_data/InvestmentSectionGrantsV2.csv', (error, grantData) => {
    if (error) { console.log(error); }
  // create hierarchy (which sorts by total value), then add colorIndex to 1st level nodes
  grantsHierarchy = buildDataHierarchy('Grants CFDA', grantData);
  grantsChartArray = partition.nodes(grantsHierarchy)
    .filter(d => d.depth < 3); // leave off recipients
  grantsHierarchy.children.forEach((node, index) => {
    node.colorIndex = index % wedgeColors.length;
  });

  chartData = grantsChartArray[0];

  categoryLabel = 'Grant';
  dataType = 'CFDA';
  drawChart(grantsChartArray); // default chart is all grants

  // enable search/filter
  if (sunburst) {
    sunburst.onSearchSelect = click;
    sunburst.init();
    sunburst.setSearchData(grantsChartArray);
  }

  // now do it all again with only research grants
  researchGrantsHierarchy = buildDataHierarchy('Research Grants CFDA', grantData.filter(c => c.Research));
  researchGrantsChartArray = partition.nodes(researchGrantsHierarchy)
    .filter(d => d.depth < 3); // leave off recipients
  researchGrantsHierarchy.children.forEach((node, index) => {
    node.colorIndex = index % wedgeColors.length;
  });
});

let contractsHierarchy, contractsChartArray;
d3.csv('data-lab-data/CU/updated_CU_data/InvestmentSectionContractsV2.csv', (error, contractData) => {
  // create hierarchy (which sorts by total value), then add colorIndex to 1st level nodes
  contractsHierarchy = buildDataHierarchy('Contracts PSC', contractData);
  contractsChartArray = partition.nodes(contractsHierarchy)
    .filter(d => d.depth < 3); // leave off recipients
  contractsHierarchy.children.forEach((node, index) => {
    node.colorIndex = index % wedgeColors.length;
  });
});

d3.select(self.frameElement).style('height', catHeight + 'px');

function wordWrap(text, maxWidth) {
  var words = text.text().split(/\s+/).reverse(),
    word,
    line = [],
    lineHeight = 1.1,
    tspan;

  tspan = text.text(null)
    .append("tspan")
    .attr("x", 0);

  while (words.length > 0) {
    word = words.pop();
    line.push(word);
    tspan.text(line.join(" "));
    if (tspan.node().getComputedTextLength() >= maxWidth) {
      line.pop();
      tspan.text(line.join(" "));
      line = [word];
      tspan = text.append("tspan")
        .attr("x", 0)
        .attr("dy", lineHeight + "em")
        .text(word);
    }
  }
}

// Redraw based on the new size whenever the browser window is resized.
window.addEventListener("resize", function() {
  catCalculatedWidth = window.innerWidth * widthPercentage;
  catMaxHeight = document.getElementById("sunburst").clientHeight;
  catWidth = catCalculatedWidth < catMaxHeight ? catCalculatedWidth : catMaxHeight;
  catHeight = catWidth;
  radius = Math.min(catWidth, catHeight) / 2;
  xScale = d3.scale.linear().range([0, 2 * Math.PI]);
  yScale = d3.scale.sqrt().range([0, radius]);

  const state = getCategoryState();

  if (grantsChartArray) {
    drawChart (grantsChartArray);
  } else if (scopedData) {
    drawChart (scopedData);
  }

  if (state) click(state);
});

function filterSearch() {
  $('#sunburst-search__input').keyup(function() {

    var input, filter, ul, li, i, txtValue;
    input = document.getElementById('sunburst-search__input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("sunburst-search__list--mobile");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      txtValue = li[i].innerHTML;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
    	li[i].style.display = "";
      } else {
    	li[i].style.display = "none";
      }
    }
  });
};

$(document).ready(function(){
  createGrantsTable(grantsChartArray);
  createContractsTable(contractsChartArray);
  createResearchTable(researchGrantsChartArray);
  radioChange();
  filterSearch();
});

// TODO: Add debouncing
