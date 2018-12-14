/*
  --------------------------------------------------------------------------------------------------------------------
  *   declarations
  *--------------------------------------------------------------------------------------------------------------------
  */
const graphContainer = document.getElementById('categoriesChartContainer');
const panelBack = document.getElementById('categories_panel_back_btn');
const panel = document.getElementById('categoriesPanel');
const childrenPanel = document.getElementById('childrenPanel');
//const childrenPanel = document.getElementById('')
const panelChartContainer = document.getElementById('investmentCategories_panel_chart');
const pageTurnRt = document.getElementById('cat_rt_pg_turn');
const pageTurnLt = document.getElementById('cat_lt_pg_turn');
const categoriesTable = document.getElementById('tableDiv'); // Table View

const tableBtn = document.getElementById('tableViewButton'); // table toggle btn 
const donutBtn = document.getElementById('donutViewButton'); // graph toggle btn (we'll replace with svg or w/e)
const treemapBtn = document.getElementById('treemapViewButton');
const pageSize = 10;

let currPage = 1;
let categoriesData = {};
let parentdonutData = {};

// Finally see how he does it - going to follow his method to dupe the 
// pie chart into a table view.
let tableData = {};


/*
  --------------------------------------------------------------------------------------------------------------------
  *   functions
  *--------------------------------------------------------------------------------------------------------------------
  */
const categoriesSpendingFormat = (num) => {

  // Nine Zeroes for Billions
  return Math.abs(Number(num)) >= 1.0e+9

    ? `$${round((Math.abs(Number(num)) / 1.0e+9), 1)} Billion`
  // Six Zeroes for Millions 
    : round((Math.abs(Number(num)) >= 1.0e+6), 1)

    ? `$${round((Math.abs(Number(num)) / 1.0e+6), 1)} Million`
  // Three Zeroes for Thousands
    : round((Math.abs(Number(num)) >= 1.0e+3), 1)

    ? `$${round((Math.abs(Number(num)) / 1.0e+3), 1)} Thousand`

    : Math.abs(Number(num));

};

/*
  purpose: given an array, page siz , and number
  this function returns a subset array of the given page number
*/
const paginate = (array, page_size, page_number) => {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
};

/*
  purpose: rounds a number to a given percentage
*/
const round = (value, precision) => {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

/*
  purporse : hide given element
*/
const hideElement = (element) => {
  element.style.minWidth = '0px';
  $(element).animate({ width: 'toggle' });
};

let pscs = {}; // holds names for table...

d3.json("/data-lab-data/pscskv.json", function (data) {
  pscs = data;
});

/*
  purporse : creates graph for infomation passed 
  and append the graph to the passed in element
*/
const drawGraph = (container, nodeData, size, clickable) => {
  let svgIcon = pscs[nodeData.name];

  let nodeDiv = document.createElement("div");
  nodeDiv.style.cursor = 'pointer';

  // Right side panel being created
  // ^^ could have just used d3 to create elements.. making things confusing ): oh well
  //let childPanel = d3.select(childrenPanel)
  //.append('div')
  //.text('hi')
  //.attr('class', 'childrenNodeDiv')
  //.style('display', 'inline-block')
  //.style('width', '500px')
  //.on('click', function(e) {
  //    childrenPanelData(nodeData.name); // testing
  //  });

  var svg = d3.select(nodeDiv)
      .append("svg")
      .style("width", `${size.width}px`)
      .style("height", `${size.height}px`)
      .append("g");

  svg.append("g")
    .attr("class", "slices");
  svg.append("g")
    .attr("class", "labels");
  svg.append("g")
    .attr("class", "lines");

  svg.append("svg:image")
    .attr('x', -25)
    .attr('y', -55)
    .attr('width', 50)
    .attr('height', 50)
    .attr("xlink:href", "/images/psc-svgs/" + svgIcon);

  if (clickable) {

    nodeDiv.className = 'categoriesParent';
    //childrenPanel.className = 'childrenPanel';

    nodeDiv.onclick = () => {
      if (panel.style.display === 'none' || panel.style.display === "") {

        while (panelChartContainer.firstChild) {
          panelChartContainer.removeChild(panelChartContainer.firstChild);
        }

        childrenPanelData(nodeData); // draw child panel 
        drawGraph(panelChartContainer, nodeData, { height: 300, width: 300 }, false);
        //drawChildGraph(childrenPanel, nodeData, { height: 300, width: 300});
        panel.style.minWidth = '350px';
        panel.style.display = 'inline-block';
        childrenPanel.style.minWidth = '600px';
        childrenPanel.style.display = 'inline-block';
        //childPanel.style.width = '500px';
        //childPanel.style.margin = '500px 0 0 0'
      }

    };
  }

  var width = size.width,
      height = size.height,
      radius = Math.min(width, height) / 2;

  var pie = d3.pie()
      .sort(null)
      .value(function (d) {
        return d.value;
      });

  //set Inner and out arc redius of the donut chart
  var arc = d3.arc()
      .outerRadius(radius * 0.85)
      .innerRadius(radius * 0.75);

  svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var key = function (d) { return d.data.label; };

  var color = d3.scaleOrdinal()
      .domain(["", " "])
      .range(["#C3DBB5", "#F6F6F6"]);

  change([
    { label: "", value: nodeData.percentage },
    { label: " ", value: 1 - nodeData.percentage }
  ]);

  function change(data) {

    /*------- PIE SLICES -------*/
    var slice = svg.select(".slices").selectAll("path.slice")
        .data(pie(data), key);

    slice.enter()
      .insert("path")
      .style("fill", function (d) { return color(d.data.label); })
      .attr("class", "slice");

    slice
      .transition().duration(1000)
      .attrTween("d", function (d) {
        this._current = this._current || d;
        var interpolate = d3.interpolate(this._current, d);
        this._current = interpolate(0);
        return function (t) {
          return arc(interpolate(t));
        };
      });

    slice.exit()
      .remove();

    /*---------- Legend ----------------------*/
    let legendRectSize = 20;
    let legendSpacing = 7;
    let legendHeight = legendRectSize + legendSpacing;

    let legend = svg.selectAll('.legend')
        .data(data)
        .enter()
        .append('g')
        .attr({
          class: 'legend',
          transform: function (d, i) {
            //Just a calculation for x & y position
            return 'translate(-80,' + ((i * legendHeight) + 10) + ')';
          }
        });

////// THIS BROKE IN v4, go back and fix this
//    legend.append('text')
//      .attr({
//        x: 30,
//        y: 15}) 
//
//      .text(d => {
//        return (d.label === "" ? `${categoriesSpendingFormat(nodeData.total)}`
//                : (nodeData.percentage * 100 >= 0.1 ? `${round(nodeData.percentage * 100, 1)}%` : '0.1% >'));
//      })
//      .attr("class", d => {
//        return (d.label === "" ? 'catDollarClass' : 'catPercentageClass');
//      })
//      .attr("x", d => {
//        return (d.label === "" ? '20' : '55');
//      });

}; // end data function 

  let title = document.createElement('p');
  title.innerText = nodeData.name;

  nodeDiv.appendChild(title);

  container.appendChild(nodeDiv);
};

/*
  purpose: take a page direction and moves the categories to the new page
*/
const turnPage = (turnDirection) => {

  currPage = currPage + turnDirection;    //updated current page

  clearCharts(graphContainer);          //clear all charts before appending next page

  paginate(categoriesData, pageSize, currPage)        //redraw graphs
    .forEach(n => { drawGraph(graphContainer, n, { height: 200, width: 200 }, true); });

};

/*
  purpose clear all chart from categories contanier
*/
const clearCharts = (container) => {

  let children = [];

  container.childNodes.forEach(child => {
    if (child.className === 'categoriesParent') {
      //container.removeChild(child)
      children.push(child);
    }
  });

  children.forEach(child => {
    container.removeChild(child);
  });
};


/*
  --------------------------------------------------------------------------------------------------------------------
  *   EVENT LISTENERS
  *--------------------------------------------------------------------------------------------------------------------
  */
panelBack.onclick = () => { hideElement(panel); hideElement(childrenPanel); };

pageTurnRt.onclick = () => { turnPage(1); };

pageTurnLt.onclick = () => { turnPage(-1); };

//categoriesTable.onclick = () => { showTable() }; // show the table

// Create our "Table View"
/**
 * 
 * @param {*} container - container element to attach table to
 * @param {*} columns - array to pass in to map to columns
 */
function createTable(container, columns) {
  d3.csv("/data-lab-data/Edu_PSC.csv", function (error, data) {
    tableData = data.reduce((a, b) => {     //reduce data to categories data sum(obligation) of each parent

      if (!(a.reduce((accumBool, node) => {
        if (b.parent_name === node.name) {
          node.total += parseFloat(b.obligation);
          accumBool = true;
        }
        return accumBool;
      }, false))) {
        a.push({
          name: b.parent_name,
          total: parseFloat(b.obligation),
          abbrv: b.parent

        });
      }

      a[0].total += parseFloat(b.obligation);             //add on to total
      return a;
    }, [{ total: 0 }]);

    let total = tableData[0].total;

    tableData.shift();

    /**
     * Winter Cleaning...
     */
    tableData.forEach(n => { n.percentage = ((n.total / total) * 100) + "%" }); // changing to percent 
    //tableData.forEach(n => { n.percentage = (n.total / total) });
    tableData.sort((a, b) => { return b.percentage - a.percentage });
    tableData.forEach(n => delete n.abbrv); // get rid of abbrev name, we dont need it     

    if (error) throw error;

    /**
     * Table START
     */
    let sortAscending = true;
    let table = d3.select(container).append('table')
        .attr('class', 'display compact')
        .attr('id', 'catTable'); // id given to table for Datatables.js

    let titles = ['PSC Name', '% of Total', 'Investment Amount']; // header array (will add Rank and Count of Awards later.. not sure what they are)

    let headers = table.append('thead').append('tr')
        .selectAll('th')
        .data(titles).enter()
        .append('th')
        .text(function (d) {
          return d;
        })
        .on('click', function (d) {
          headers.attr('class', 'header');

          if (sortAscending) {
            rows.sort(function (a, b) { return b[d] < a[d]; });
            sortAscending = false;
            this.className = 'aes';
          } else {
            rows.sort(function (a, b) { return b[d] > a[d]; });
            sortAscending = true;
            this.className = 'des';
          }
        });

    let rows = table.append('tbody')
        .selectAll('tr')
        .data(tableData).enter()
        .append('tr')
        .on('click', function (d) {
          createSecondaryTableView(d.name, ['Type', 'Awarded Amount', '% of Total']); // going to pass in the row value and columns we want
        });

    rows.selectAll('td')
      .data(function (row) {
        return columns.map(function (column) {
          return { column: column, value: row[column] };
        });
      }).enter()
      .append('td')
      .classed('name', function (d) {
        return d.column == 'name';
      })
      .classed('percentage', function (d) {
        return d.column == 'percentage';
      })
      .classed('total', function (d) {
        return d.column == 'total';
      })
      .text(function (d) {
        return d.value;
      })
      .attr('data-th', function (d) {
        return d.name;
      });

    // use DataTables JS and attach in D3 callback - DOM problems begone
    $(document).ready(function () {
      $('#catTable').DataTable({
        searching: true,
        paging: true,
        scrollY: true,
        columnDefs: [{
          className: 'mdl-data-table__cell--non-numeric'
        }]
      });
    });
  });
};

/**
 * 
 * @param {*} parentName - name to search by
 * Secondary Table (Investment) for Click event on table row
 * Need to grab different data than "tableData" in last table draw
 */
function createSecondaryTableView(parentName, columns) {
  d3.csv("/data-lab-data/Edu_PSC.csv", function (error, data) {

    let secondaryTableData = data.filter(function (d) {
      return d.parent_name == parentName;
    });

    //console.log(secondaryTableData);

    if (error) throw error;

    d3.select('#sidebarTable').remove(); // remove on click data 

    /**
     * Create Secondary Table (Investment Types Table)
     */
    let subTableDiv = d3.select('#tableContainerDiv').append('div')
        .attr('id', 'sidebarTable');
    let subTableHeaderText = subTableDiv.append('h4').html(parentName); //replace with data TR name...
    subTableHeaderText.append('hr')
      .style('width', '60%');
    subTableHeaderText.append('p').html('Investment Types').attr('class', 'investmenth4');
    let subTable = subTableDiv.append('table')
        .attr('class', 'subTableData')
        .attr('align', 'center');


    let titles = ['Type', 'Awarded Amount  ', '  % of Total'];
    let mockData = [
      { "Type": "Grant: Student", "Awarded Amount": "$1000", "% of Total": "20%" },
      { "Type": "Grant: Student", "Awarded Amount": "$1000", "% of Total": "20%" },
      { "Type": "Grant: Student", "Awarded Amount": "$1000", "% of Total": "20%" },
      { "Type": "Grant: Student", "Awarded Amount": "$1000", "% of Total": "20%" },
      { "Type": "Grant: Student", "Awarded Amount": "$1000", "% of Total": "20%" },
    ];

    let headers = subTable.append('thead').append('tr')
        .selectAll('th')
        .data(titles).enter()
        .append('th')
        .text(function (d) {
          return d;
        });

    let rows = subTable.append('tbody')
        .selectAll('tr')
        .data(mockData).enter()
        .append('tr');

    rows.selectAll('td')
      .data(function (row) {
        return columns.map(function (column) {
          return { column: column, value: row[column] };
        });
      }).enter()
      .append('td')
      .text(function (d) {
        return d.value;
      })
      .attr('data-th', function (d) {
        return d.name;
      });
  });
}

/**
 * Create First TreeMap (could be reusable later)
 * for Section2 Table/view Toggle
 */
function treeMap(categoriesData) {
  d3.csv('/data-lab-data/Edu_PSC.csv', (data) => {


    let parentNames = data.map(d => d.parent_name);
    let filteredNames = parentNames.filter(function(item, index){
      return parentNames.indexOf(item) >= index;
    });

    //console.log(data); // whole data listout again

    // Going to do Sidebar Data first.
    // Just a simple list
    let sidebarList = d3.select('#treemapSidebar')
        .append('ul').attr('class', 'sidebarList');

    sidebarList.selectAll('li')
      .data(filteredNames)
      .enter()
      .append('li')
      .attr('class', 'sidebarListElement')
      .html(String);

    ///////////////////////
    // start Treemappin' // 
    let width = 2000,
        height = 600;

    let color = d3.scaleOrdinal()
        .range(d3.schemeCategory10
               .map(function(c) { c = d3.rgb(c); c.opacity = 0.6; return c; }));

    let format = d3.format(",d");

    let treeMappy = d3.treemap()
        .size([width, height])
        .round(true)
        .padding(1);
//    (d3.hierarchy(categoriesData)
//     .sum(d => d.total)
//     .sort((a, b) => b.height - a.height || b.total - a.total));

    let bigTotal = categoriesData.map(i => i.total).reduce((a,b) => a + b);
    categoriesSpendingFormat(bigTotal); // convert
    categoriesData.forEach(function(i) { i.parent = "rootNode"; }); // add parent property to each child of root node

    let rootNode = {
      abbrev: "root",
      name: 'rootNode',
      total: bigTotal,
      parent: "",
    };

    categoriesData.unshift(rootNode); // add root node to beginning of array
//    console.log(categoriesData);

    let stratify = d3.stratify()
        .id(function(d) {
          console.log(d);
          return d.name; })
        .parentId(function(d) { return d.parent; });

    let root = stratify(categoriesData)
      .sum(function(d) { return d.total; })
      .sort(function(a, b) { return b.height - a.height || b.total - a.total; });

    let treeMapContainer = d3.select('#sectiontwoTreemap')
        .append('svg')
        .style('width', width)
        .style('height', height);
//        .style('position', 'relative');

    treeMappy(root); // stratify and get the root ready

    let leaf = treeMapContainer
        .selectAll('g')
        .data(root.leaves())
        .enter().append('g')
        .attr("transform", d => `translate(${d.x0},${d.y0})`);

    leaf.append('text')
      .attr('x', function(d) {return d.x0; })
      .attr('y', function(d) {return d.y0; })
      .text(d => {
        return d.id + "\n" + format(d.value);
      });
        

    leaf.append("rect")
      .attr("id", d => d.id)
      .attr("fill", function(d) { var a = d.ancestors(); return color(a[a.length - 2].id); })
      .attr("fill-opacity", 0.6)
      .attr("width", d => d.x1 - d.x0)
      .attr("height", d => d.y1 - d.y0);



    // leaves now..
//    treeMapContainer
//    .selectAll(".node")
//    .data(root.leaves())
//    .enter().append("div")
//      .attr("class", "node")
//      .attr("title", function(d) { return d.name + "\n" + d.total; })
//      .style("left", function(d) { return d.x0 + "px"; })
//      .style("top", function(d) { return d.y0 + "px"; })
//      .style("width", function(d) { return d.x1 - d.x0 + "px"; })
//      .style("height", function(d) { return d.y1 - d.y0 + "px"; })
//      .style("background", function(d) { while (d.depth > 1) d = d.parent; return color(d.name); })
//    .append("div")
//      .attr("class", "node-label")
//      .text(function(d) { return d.name; })
//    .append("div")
//      .attr("class", "node-value")
//      .text(function(d) { return d.total; });
    


  }); 
}; // end function


/**
 * Parent to Child 
 * Donut View
 */
function childrenPanelData(clickedElement) {

  d3.csv('/data-lab-data/Edu_PSC.csv', (data) => {
    //console.log(data);

    parentdonutData = data.filter(function (d) {
      return d.parent_name == clickedElement.name; // clickedElement.name 
    }); // filter for children based on clicked element in parent view.
    //console.log(parentdonutData);
    
    let svgIcon = pscs[clickedElement.name]; // has name property already

    let svg = d3.select('#childrenPanel')
        .append("svg")
        .style("width", `300px`)
        .style("height", `300px`)
        .append("g");

    svg.append("g")
      .attr("class", "slices");
    svg.append("g")
      .attr("class", "labels");
    svg.append("g")
      .attr("class", "lines");

    svg.append("svg:image")
      .attr('x', -25)
      .attr('y', -55)
      .attr('width', 50)
      .attr('height', 50)
      .attr("xlink:href", "/images/psc-svgs/" + svgIcon);
    
    let width = 300;
    let height = 300;
    let radius = Math.min(width, height) / 2;

    var pie = d3.layout.pie()
        .sort(null)
        .value(function (d) {
          //console.log(d.value);
          return d.value;
        });
    
    //set Inner and out arc redius of the donut chart
    var arc = d3.svg.arc()
        .outerRadius(radius * 0.85)
        .innerRadius(radius * 0.75);
    
    svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
    var key = function (d) { 
      return d.data.label; 
    };
    
    var color = d3.scale.ordinal()
        .domain(["", " "])
        .range(["#C3DBB5", "#F6F6F6"]);
    
    change([
      { label: "", value: clickedElement.percentage },
      { label: " ", value: 1 - clickedElement.percentage }
    ]);
    
    function change(data) {
      
      /*------- PIE SLICES -------*/
      var slice = svg.select(".slices").selectAll("path.slice")
          .data(pie(data), key);
      
      slice.enter()
        .insert("path")
        .style("fill", function (d) { return color(d.data.label); })
        .attr("class", "slice");
      
      slice
        .transition().duration(1000)
        .attrTween("d", function (d) {
          this._current = this._current || d;
          var interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            return arc(interpolate(t));
          };
        });
      
      slice.exit()
        .remove();
      
      /*---------- Legend ----------------------*/
      let legendRectSize = 20;
      let legendSpacing = 7;
      let legendHeight = legendRectSize + legendSpacing;
      
      let legend = svg.selectAll('.legend')
          .data(data)
          .enter()
          .append('g')
          .attr({
            class: 'legend',
            transform: function (d, i) {
              //Just a calculation for x & y position
              return 'translate(-80,' + ((i * legendHeight) + 10) + ')';
            }
          });
      
      legend.append('text')
        .attr({
          x: 30,
          y: 15
        })
        .text(d => {
          return (d.label === "" ? `${categoriesSpendingFormat(clickedElement.obligation)}`
                  : (clickedElement.percentage * 100 >= 0.1 ? `${round(clickedElement.percentage * 100, 1)}%` : '0.1% >'));
        })
        .attr("class", d => {
          return (d.label === "" ? 'catDollarClass' : 'catPercentageClass');
        })
        .attr("x", d => {
          return (d.label === "" ? '20' : '55');
        });
      
    } // end inner data funct



  });
}
/*
  --------------------------------------------------------------------------------------------------------------------
  *   Main Method
  *--------------------------------------------------------------------------------------------------------------------
  */
d3.csv("/data-lab-data/Edu_PSC.csv",(data) => { 

  categoriesData = data.reduce((a, b) => {     //reduce data to categories data sum(obligation) of each parent

    if (!(a.reduce((accumBool, node) => {
      if (b.parent_name === node.name) {
        node.total += parseFloat(b.obligation);
        accumBool = true;
      }
      return accumBool;
    }, false))) {
      a.push({
        name: b.parent_name,
        total: parseFloat(b.obligation),
        abbrv: b.parent,
        obligation: parseFloat(b.obligation),
        product: b.product_and_service_description,
        recipient: b.Recipient
      });
    }

    a[0].total += parseFloat(b.obligation);             //add on to total
    return a;
  }, [{ total: 0 }]);

  let total = categoriesData[0].total;
  //console.log(categoriesData); 

  categoriesData.shift();

  categoriesData.forEach(n => { n.percentage = (n.total / total); });
  categoriesData.sort((a, b) => { return b.percentage - a.percentage; });

  paginate(categoriesData, pageSize, currPage)
    .forEach(n => { drawGraph(graphContainer, n, { height: 200, width: 200 }, true); });             //draw donut chart in charts container

  //paginate(parentdonutData, pageSize, currPage)
  //    .forEach(n => { drawChildGraph(childrenPanel, n, { height: 200, width: 200}); });

  /**
   * Adding on.. he does everything in a "main method"... will follow...
   */


  createTable(categoriesTable, ['name', 'percentage', 'total']); // table view
  treeMap(categoriesData); // testing for now, will put on SVG button click
  
  //childrenPanelData(); // test

///// JQUERY EVENT HANDLERS, WOO //////
  $(tableBtn).click(function() {
    console.log('clicking table button!');
    $('#tableContainerDiv').css('display', 'flex'); // our table!
    $('#treemapContainerDiv').css('display', 'none'); // treemap
    $('#categoriesPanel').css('display', 'none'); // donut 
    $('#investmentCategories_panel_chart').css('display', 'none'); // donut 
    $('#investmentCategories_panel_back_btn').css('display', 'none'); // donut 
    $('#categoriesChartContainer').css('display', 'none'); // donut 
  });

  $(donutBtn).click(function() {
    console.log('clicking donut button!');
    $('#categoriesPanel').css('display', 'inline-block'); // donut! (set to inline-block from before)
    $('#investmentCategories_panel_chart').css('display', 'inline-block'); // donut 
    $('#investmentCategories_panel_back_btn').css('display', 'inline-block'); // donut 
    $('#categoriesChartContainer').css('display', 'none'); // donut 
    $('#tableContainerDiv').css('display', 'none'); // table
    $('#treemapContainerDiv').css('display', 'none'); // treemap
  });

  $(treemapBtn).click(function() {
    console.log('clicking treemap button!');
    $('#treemapContainerDiv').css('display', 'flex'); // tree
    $('#tableContainerDiv').css('display', 'none'); // table 
    $('#categoriesPanel').css('display', 'none'); // donut
    $('#investmentCategories_panel_chart').css('display', 'none'); // donut 
    $('#investmentCategories_panel_back_btn').css('display', 'none'); // donut 
    $('#categoriesChartContainer').css('display', 'none'); // donut 
  });



  // Graph View (Donut)
//  $(graphBtn).click(function () {
//    console.log('toggle');
//    $(graphContainer).toggle(); // hide graph when show table
//  });

});
