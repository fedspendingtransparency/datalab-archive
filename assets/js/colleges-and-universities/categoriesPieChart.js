/*
  --------------------------------------------------------------------------------------------------------------------
  *   declarations
  *--------------------------------------------------------------------------------------------------------------------
  */
const graphContainer = document.getElementById('categoriesChartContainer');
const panelBack = document.getElementById('categories_panel_back_btn');
const panel = document.getElementById('categoriesPanel');
const panelChartContainer = document.getElementById('investmentCategories_panel_chart');
const pageTurnRt = document.getElementById('cat_rt_pg_turn');
const pageTurnLt = document.getElementById('cat_lt_pg_turn');
const categoriesTable = document.getElementById('tableDiv'); // Table View

const tableBtn = document.getElementById('tableBtn'); // table toggle btn 
const graphBtn = document.getElementById('donutBtn'); // graph toggle btn (we'll replace with svg or w/e)
const pageSize = 10;

let currPage = 1;
let categoriesData = {};

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
  var multiplier = Math.pow(10, precision || 0);
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

    nodeDiv.onclick = () => {
      if (panel.style.display === 'none' || panel.style.display === "") {

        while (panelChartContainer.firstChild) {
          panelChartContainer.removeChild(panelChartContainer.firstChild);
        }

        drawGraph(panelChartContainer, nodeData, { height: 300, width: 300 }, false);
        panel.style.minWidth = '350px';
        panel.style.display = 'inline-block';
      }
    };
  }

  var width = size.width,
    height = size.height,
    radius = Math.min(width, height) / 2;

  var pie = d3.layout.pie()
    .sort(null)
    .value(function (d) {
      return d.value;
    });

  //set Inner and out arc redius of the donut chart
  var arc = d3.svg.arc()
    .outerRadius(radius * 0.85)
    .innerRadius(radius * 0.75);

  svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var key = function (d) { return d.data.label; };

  var color = d3.scale.ordinal()
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

    var legend = svg.selectAll('.legend')
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
        return (d.label === "" ? `${categoriesSpendingFormat(nodeData.total)}`
          : (nodeData.percentage * 100 >= 0.1 ? `${round(nodeData.percentage * 100, 1)}%` : '0.1% >'));
      })
      .attr("class", d => {
        return (d.label === "" ? 'catDollarClass' : 'catPercentageClass');
      })
      .attr("x", d => {
        return (d.label === "" ? '20' : '55');
      });

  };

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
panelBack.onclick = () => { hideElement(panel) };

pageTurnRt.onclick = () => { turnPage(1) };

pageTurnLt.onclick = () => { turnPage(-1) };

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
    //console.log(total);

    //    console.log(tableData);

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
//      .attr('data-aos', 'fade-left')
//      .attr('data-aos-delay', '500')
//      .attr('data-aos-offset', '300')
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
        $(container).prependTo('#tablerowClickContainer');
        //$("#tableDiv").css('width', '100px');
//        $(container).css('display', 'inline-block');
//        $('#tablerowClickContainer').css('display', 'inline-block');
        // add second region (secondaryTable)
        console.log(d);
        createSecondaryTableView('#tablerowClickContainer', d); // going to pass in the row value
      });

    rows.selectAll('td')
      .data(function (row) {
        return columns.map(function (column) {
          return { column: column, value: row[column] }
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
      })

    // use DataTables JS and attach in D3 callback - DOM problems begone
    $(document).ready(function () {
      $('#catTable').DataTable({
        searching: true,
        paging: true,
        scrollY: true,
        columnDefs: [{
          className: 'mdl-data-table__cell--non-numeric'
        }]
      })
    })
  });
};

/**
 * 
 * @param {*} container 
 * Secondary Table (Investment) for Click event on table row
 * Need to grab different data than "tableData" in last table draw
 */
function createSecondaryTableView(container, row) {
  d3.csv("/data-lab-data/Edu_PSC.csv", function (error, data) {
    console.log(data);
    
    let secondaryTableData = data.filter(function(rowdata) {
      return rowdata.name === data.parent_name;
    });
    
    console.log(secondaryTableData);np

    
    //secondaryTableData.shift();

    /**
     * Winter Cleaning...
     */
//    secondaryTableData.forEach(n => { n.percentage = ((n.total / total) * 100) + "%" }); // changing to percent 
    //tableData.forEach(n => { n.percentage = (n.total / total) });
//    secondaryTableData.sort((a, b) => { return b.percentage - a.percentage });
    //secondaryTableData.forEach(n => delete n.abbrv); // get rid of abbrev name, we dont need it     

    if (error) throw error;

    /**
     * Create Secondary Table (Investment Types Table)
     */
    let subTableDiv = d3.select(container).append('div')
    .attr('id', 'subTableDiv');
    let subTableHeaderText = subTableDiv.append('h3').html(row.name); //replace with data TR name...
    subTableHeaderText.append('hr'); 
    let subTable = subTableDiv.append('table');

    let titles = ['Type', 'Awarded Amount', '% of Total']; 

    let headers = subTable.append('thead').append('tr')
      .selectAll('th')
      .data(titles).enter()
      .append('th')
      .text(function (d) {
        return d;
      });



  })
}

/*
  --------------------------------------------------------------------------------------------------------------------
  *   Main Method
  *--------------------------------------------------------------------------------------------------------------------
  */
d3.csv("/data-lab-data/Edu_PSC.csv", (data) => {    //read in education data to data files

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
        abbrv: b.parent

      });
    }

    a[0].total += parseFloat(b.obligation);             //add on to total
    return a;
  }, [{ total: 0 }]);

  let total = categoriesData[0].total;
  //console.log(categoriesData); 

  categoriesData.shift();

  categoriesData.forEach(n => { n.percentage = (n.total / total) });
  categoriesData.sort((a, b) => { return b.percentage - a.percentage });

  paginate(categoriesData, pageSize, currPage)
    .forEach(n => { drawGraph(graphContainer, n, { height: 200, width: 200 }, true); });             //draw donut chart in charts container

  /**
   * Adding on.. he does everything in a "main method"... will follow...
    */

  // Table View!
  //$(tableBtn).click(function () {
  //    createTable(categoriesTable, ['name', 'total', 'percentage']);
  //$(categoriesTable).toggle(); // toggle show hide
  //$(graphContainer).toggle(); // hide graph when show table
  //});
  createTable(categoriesTable, ['name', 'percentage', 'total']); // table testing

  // Graph View (Donut)
  $(graphBtn).click(function () {
    console.log('toggle');
    $(graphContainer).toggle(); // hide graph when show table
  });

});
