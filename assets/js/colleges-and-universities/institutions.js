/*
  --------------------------------------------------------------------------------------------------------------------
  *   declarations
  *--------------------------------------------------------------------------------------------------------------------
  */
const mapContainer = document.getElementById('collegesMap');
const publicCheck = document.getElementById('publicCheck');
const privateCheck = document.getElementById('privateCheck');
const fourYearCheck = document.getElementById('fourYearCheck');
const twoYearCheck = document.getElementById('twoYearcheck');

const sectionFourtableBtn = document.getElementById('sectionFourTableBtn');
const sectionFourmapBtn = document.getElementById('sectionFourMapBtn');
const sectionFourtreemapBtn = document.getElementById('sectionFourTreemapBtn');


/*
 --------------------------------------------------------------------------------------------------------------------
 *   functions
 *--------------------------------------------------------------------------------------------------------------------
 */

function createTable(container, columns) {
  d3.csv("/data-lab-data/Edu_PSC.csv", function (error, data) {

    let tableData = data;

    /**
     * Table START
     */
    let sortAscending = true;
    let table = d3.select(container).append('table')
        .attr('class', 'display compact')
        .attr('id', 'sectionFourCatTable'); // id given to table for Datatables.js

    let titles = ['State', '% of Total', 'Investment Amount'];

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
      $('#sectionFourCatTablen').DataTable({
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


  }); 
}; // end function


/*
  purpose : draws map and appends to given container
*/
const drawMap = (container) => {

  var width = 1920,
      height = 1000,
      centered;

  var projection = d3.geoAlbersUsa()
      .scale(1500) // was 1500
      .translate([width / 2, height / 2]);

  var path = d3.geoPath()
      .projection(projection);

  // D3-tip Tooltip
  let toolTip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
        return "School: <span style='color:blue'>" + d.Recipient + "</span>" + "<br>"
          + d.INSTURL + "<br>" + "Students: " + d.Total;
      });

  var svg = d3.select(container).append("svg")
      .attr("width", width)
      .attr("height", height);

  svg.call(toolTip); // add tooltip

  //  svg.append("rect")
  //.attr("class", "background")
  //.attr("width", width)
  //.attr("height", height)
  //.on("click", clicked);


  // what our map element is drawn on 
  let g = svg.append("g");

  /**
   * us-states holds the mapping in data.features (us.features)
   * simply for helping draw the visual
   */
  d3.json("../data-lab-data/us-states.json", function (error, us) {
    if (error) throw error;

    let map = g.append("g")
        .attr("id", "states")
        .selectAll("path")
        .data(us.features)
        .enter().append("path")
        .attr("d", path)
        .style("stroke", "#fff")
        .style("stroke-width", "1.5")
        .on("click", clicked);

    let circles = map.append("svg:g")
        .attr("id", "circles");


    /**
     * EDU Data Section
     * 
     */
    d3.csv("../data-lab-data/EDU_v2_base_data.csv", function (error, data) {
      if (error) throw error;

      /**
       * Filter Boxes
       */
      let public = d3.select(publicCheck);
      let private = d3.select(privateCheck);
      let fouryear = d3.select(fourYearCheck);
      let twoyear = d3.select(twoYearCheck);
      let filterClearBtn = d3.select('.clearfilter');
      //      filterClearBtn

      // Dropdown Box
      let dropDown = d3.select("#filtersDiv").append("select")
          .attr("name", "college-list")
          .attr('id', 'college-dropdown')
          .style('width', '200px');

      let options = dropDown.selectAll("option")
          .data(data)
          .enter()
          .append("option");

      options.text(function (d) { return d.Recipient; })
        .attr("value", function (d) { return d.Recipient; });

      // Clear Filter Box
      let clearfilter = d3.select('#filtersDiv').append('button')
          .attr('name', 'clearBtn')
          .attr('id', 'clearnBtn')
          .text('Clear Filter')
          .on('click', function(d) {
            svg.selectAll('circle').remove();
            
            
            // redrawing map ! 
            svg.selectAll("circle")
              .data(data)
              .enter()
              .append("svg:circle")
              .attr("transform", function (d) {
                
                let long = parseFloat(d.LONGITUDE);
                let lat = parseFloat(d.LATITUDE);
                if (isNaN(long || lat)) { long = 0, lat = 0; }
                //console.log(long, lat);
                return "translate(" + projection([long, lat]) + ")";
              })
              .attr('r', 20)
              .style("fill", "rgb(217,91,67)")
              .style("opacity", 0.85)
              .on('mouseover', toolTip.show)
              .on('mouseout', toolTip.hide);
            
          });

      svg.selectAll("circle")
        .data(data)
        .enter()
        .append("svg:circle")
        .attr("transform", function (d) {

          let long = parseFloat(d.LONGITUDE);
          let lat = parseFloat(d.LATITUDE);
          if (isNaN(long || lat)) { long = 0, lat = 0; }
          //console.log(long, lat);
          return "translate(" + projection([long, lat]) + ")";
        })
        .attr('r', 5)
        .style("fill", "rgb(217,91,67)")
        .style("opacity", 0.85)
        .on('mouseover', toolTip.show)
        .on('mouseout', toolTip.hide);


      dropDown.on("change", function () {
        let selected = this.value;
        let displayOthers = this.checked ? "inline" : "none";
        let display = this.checked ? "none" : "inline";

        svg.selectAll("circle")
          .filter(function (d) { return selected != d.Recipient; })
          .attr("display", displayOthers);

        svg.selectAll("circle")
          .filter(function (d) { return selected == d.Recipient; })
          .attr("display", display);
      });

      //publicCheck.on('change', updateCheck); // on change event
      //public.on('change', console.log('clicked'));
      //private.on('change', console.log('checked private'));

      //update(); // run checkbox state check

      /**
       * Section to check for checkbox state
       */
      function updateCheck() {
        if (d3.select(public).property('checked')) {
          svg.selectAll('circle')
            .filter(function (d) {
              console.log('okok' + d.INST_TYPE);
              return 'Public 2-year' == d.INST_TYPE;
            });
        } else {
          svg.selectAll("circle")
            .data(data)
            .enter()
            .append("svg:circle")
            .attr("transform", function (d) {
              let long = parseFloat(d.LONGITUDE);
              let lat = parseFloat(d.LATITUDE);
              if (isNaN(long || lat)) { long = 0, lat = 0; }
              return "translate(" + projection([long, lat]) + ")";
            })
            .attr('r', 5);
        }
      }

      //console.log(data['LONGITUDE'], data["LATITUDE"][0]);

      //console.log(LatLongObj);

    });
  }); // end of double d3 zone 


  function clicked(d) {
    var x, y, k;

    if (d && centered !== d) {
      var centroid = path.centroid(d);
      x = centroid[0];
      y = centroid[1];
      k = 4;
      centered = d;
    } else {
      x = width / 2;
      y = height / 2;
      k = 1;
      centered = null;
    }

    g.selectAll("path")
      .classed("active", centered && function (d) { return d === centered; });

    g.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
  }

}; // end main wrapper 

/*
  --------------------------------------------------------------------------------------------------------------------
  *   Main Method
  *--------------------------------------------------------------------------------------------------------------------
  */

drawMap(mapContainer);

/*
  Event Handlers
*/
$(sectionFourtableBtn).click(function() {
  console.log('clicking table button!');
  $('#sectionFourTableContainerDiv').css('display', 'flex'); // our table!
  $('#sectionFourTreemapContainerDiv').css('display', 'none'); // treemap
  $('#mapContainerDiv').css('display', 'none'); // donut 
//  $('#categoriesPanel').css('display', 'none'); // donut 
//  $('#investmentCategories_panel_chart').css('display', 'none'); // donut 
//  $('#investmentCategories_panel_back_btn').css('display', 'none'); // donut 
//  $('#categoriesChartContainer').css('display', 'none'); // donut 
});

$(sectionFourmapBtn).click(function() {
  console.log('clicking map button!');
  $('#categoriesPanel').css('display', 'inline-block'); // donut! (set to inline-block from before)
  $('#investmentCategories_panel_chart').css('display', 'inline-block'); // donut 
  $('#investmentCategories_panel_back_btn').css('display', 'inline-block'); // donut 
  $('#categoriesChartContainer').css('display', 'none'); // donut 
  $('#tableContainerDiv').css('display', 'none'); // table
  $('#treemapContainerDiv').css('display', 'none'); // treemap
});

$(sectionFourtreemapBtn).click(function() {
  console.log('clicking treemap button!');
  $('#treemapContainerDiv').css('display', 'flex'); // tree
  $('#tableContainerDiv').css('display', 'none'); // table 
  $('#categoriesPanel').css('display', 'none'); // donut
  $('#investmentCategories_panel_chart').css('display', 'none'); // donut 
  $('#investmentCategories_panel_back_btn').css('display', 'none'); // donut 
  $('#categoriesChartContainer').css('display', 'none'); // donut 
});






