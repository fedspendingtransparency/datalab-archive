// add those back for IE 11 support
//---
//---

const mapContainer = document.getElementById('collegesMap');
const sectFourTableContainer = document.getElementById('sectionFourtableContainerDiv');

const publicCheck = document.getElementById('publicCheck');
const privateCheck = document.getElementById('privateCheck');
const fourYearCheck = document.getElementById('fourYearCheck');
const twoYearCheck = document.getElementById('twoYearcheck');

const sectionFourtableBtn = document.getElementById('sectionFourTableBtn');
const sectionFourmapBtn = document.getElementById('sectionFourMapBtn');

function createSectFourTable(container, columns) {
  d3.csv('../data-lab-data/EDU_v2_base_data.csv', function(err, data) {

    if (err) { return err; }

    /**
     * Table START
     */
    let sortAscending = true;
    let table = d3.select(container).append('table')
    //        .attr('class', '')
        .attr('id', 'sectFourTable'); // id given to table for Datatables.js

    let titles = ['Recipient', 'State', 'Total Students', 'Total Federal Investment'];

    let rows = table.append('tbody')
        .selectAll('tr')
        .data(data).enter()
        .append('tr')
        .on('click', function (d) {
	  // secondary table view
	  //          createSecondaryTableView(d.name, ['Type', 'Awarded Amount', '% of Total']); // going to pass in the row value and columns we want
        });


    let headers = table.append('thead').append('tr')
        .selectAll('th')
        .data(titles).enter()
        .append('th')
        .text(function (d) {
          return d;
        });
    // .on('click', function (d) {
    //   headers.attr('class', 'header');

    //   if (sortAscending) {
    //     rows.sort(function (a, b) { return b[d] < a[d]; });
    //     sortAscending = false;
    //     this.className = 'aes';
    //   } else {
    //     rows.sort(function (a, b) { return b[d] > a[d]; });
    //     sortAscending = true;
    //     this.className = 'des';
    //   }
    // });


    rows.selectAll('td')
      .data(function (row) {
        return columns.map(function (column) {
          return { column: column, value: row[column] };
        });
      }).enter()
      .append('td')
      .classed('name', function (d) {
        return d.column == 'Recipient';
      })
      .classed('percentage', function (d) {
        return d.column == 'State';
      })
      .classed('total', function (d) {
        return d.column == 'Total';
      })
      .text(function (d) {
        return d.value;
      })
      .attr('data-th', function (d) {
        return d.name;
      });


    // datatable start
    let dTable = $('#sectFourTable').dataTable();
  });
};


/*
  purpose : draws map and appends to given container
*/
const drawMap = (container) => {

  var width = 1200,
      height = 800,
      centered,
      active = d3.select(null);

  var projection = d3.geoAlbersUsa()
      .scale(1500) // was 1500
      .translate([width / 2, height / 2]);

  var path = d3.geoPath()
      .projection(projection)
      .pointRadius(1);

  // D3-tip Tooltip
  let stateToolTip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
	return "Count: " + d.value.length;
      });

  let allToolTip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
	return "School: " + d.Recipient + "<br>"
	  + d.INSTURL + "<br>" + "Students: " + d.Total;
      });

  let svg = d3.select(container).append("svg")
      .attr("width", width)
      .attr("height", height);

  // add tooltips to map
  svg.call(stateToolTip); 
  svg.call(allToolTip);

  // what our map element is drawn on 
  let g = svg.append("g");

  /**
   * us-states holds the mapping in data.features (us.features) !
   * simply for helping draw the visual
   */
  d3.json("../data-lab-data/us-states.json", function (error, us) {
    if (error) throw error;

    /**
     * EDU Data Section
     * Work done here..
     */
    d3.csv("../data-lab-data/EDU_v2_base_data.csv", function (error, data) {
      if (error) throw error;

      let filteredBoxData;

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

      d3.selectAll("input[name=instcheck]").on("change", function() {
	function getCheckedBoxes(chkboxName) {
	  let checkboxes = document.getElementsByName(chkboxName);
	  let checkboxesChecked = [];
	  for (let i=0; i < checkboxes.length; i++) {
	    if (checkboxes[i].checked) {
	      checkboxesChecked.push(checkboxes[i].defaultValue);
	    }
	  }
	  return checkboxesChecked.length > 0 ? checkboxesChecked : " ";
	}
	
	let checkedBoxes = getCheckedBoxes('instcheck');
	console.log(checkedBoxes);
      });

//      let publicBox = d3.select("#publicBox").on('change', update);
//      let privateBox = d3.select("#privateBox").on('change', update);
//      let twoBox = d3.select("#twoBox").on('change', update);
//     let fourBox = d3.select("#fourBox").on('change', update);
//      update(); 

      // function update() {
      // 	if (d3.select('#myonoffswitch').property('checked')) {
      // 	  filteredBoxData = data.filter(function(d, i){
      // 	    console.log("data on toggle", d);
      // 	  });
      // 	} 
      // }

      // Dropdown Box
      let dropDown = d3.select("#college-dropdown").append("datalist")
          .attr('id', 'college-dropdown');

      let options = dropDown.selectAll("option")
          .data(data)
          .enter()
          .append("option");

      options.text(function (d) { return d.Recipient; })
        .attr("value", function (d) { return d.Recipient; });

      let schools = data.filter(d => d.Recipient);
      d3.select("#college-dropdown-list").on('change', change);
      function change() {
	let value = this.value;
	console.log(value);
	let schoolsFiltered = schools.filter(function(d){
	  return d.Recipient === value;
	});
	g.selectAll('circle').remove(); // remove then add just the single school..
	drawAllCirclesBig(schoolsFiltered);
      }

      // Clear Filter Box
      let clearfilter = d3.select('#filtersDiv').append('button')
          .attr('name', 'clearBtn')
          .attr('id', 'clearBtn')
          .text('Clear Filter')
          .on('click', function(d) {
            g.selectAll('circle').remove(); // remove whatever is on the map currently
	    drawAllCircles(data);
          });

      let stateCheck = d3.nest()
	  .key(function(d){
	    return d.State;
	  }).rollup(function(leaves) {
	    return {
	      ...leaves, // old object plus..
	      stateTotal: d3.sum(leaves, function(d){ return d.Total_Federal_Investment; }),
	      length: leaves.length
	    };
	  }).entries(data);

      // ! This is where we draw the circles on the map (working!)
      drawStateCircles(stateCheck); // drawing all on map..

    });
  }); // end of double d3 zone 

  function drawAllCirclesBig(d) {
    g.selectAll("circle")
      .data(d)
      .enter()
      .append("svg:circle")
      .attr("transform", function (d) {
        let long = parseFloat(d.LONGITUDE);
        let lat = parseFloat(d.LATITUDE);
        if (isNaN(long || lat)) { long = 0, lat = 0; }
	if (long && lat == undefined) { long = 0, lat = 0; }
        return "translate(" + projection([long, lat]) + ")";
      })
      .attr('r', 5)
      .style("fill", "rgb(217,91,67)")
      .style("opacity", 0.85)
      .on('mouseover', allToolTip.show)
      .on('mouseout', allToolTip.hide);
  }

  function drawAllCircles(d) {
    g.selectAll("circle")
      .data(d)
      .enter()
      .append("svg:circle")
      .attr("transform", function (d) {
        let long = parseFloat(d.LONGITUDE);
        let lat = parseFloat(d.LATITUDE);
        if (isNaN(long || lat)) { long = 0, lat = 0; }
	if (long && lat == undefined) { long = 0, lat = 0; }
        return "translate(" + projection([long, lat]) + ")";
      })
      .attr('r', 1.5)
      .style("fill", "rgb(217,91,67)")
      .style("opacity", 0.85)
      .on('mouseover', allToolTip.show)
      .on('mouseout', allToolTip.hide);
  }

  function drawStateCircles(d) {
    g.selectAll("circle")
      .data(d)
      .enter()
      .append("svg:circle")
      .attr("transform", function (d) {
        let long = parseFloat(d.value[0].LONGITUDE); // pick random state to put the bubble on.. look into putting into center of state itself.
        let lat = parseFloat(d.value[0].LATITUDE);
        if (isNaN(long || lat)) { long = 0, lat = 0; }
	if (long && lat == undefined) { long = 0, lat = 0; }
        return "translate(" + projection([long, lat]) + ")";
      })
      .attr('r', 18)
      .style('fill', function(d){
	if (d.value.stateTotal > 2067321200) { // random big number to test against. (subject to change)
	  return "Red";
	} else {
	  return "Orange";
	}
      })
      .style("opacity", 0.85)
      .text(function(d) {
	return d.value.length;
      })
      .on('mouseover', stateToolTip.show)
      .on('mouseout', stateToolTip.hide);

    g.selectAll('circle')
      .data(d)
      .enter()
      .append('svg:circle')
      .append('text')
      .text(function(d){
	return d.value.length;
      });
  }

  function reset() {
    g.selectAll('circle').remove(); // remove first.. then reset transition()
    active.classed("active", false);
    active = d3.select(null);

    g.transition()
      .duration(750)
      .style("stroke-width", "1.5px")
      .attr("transform", "");

    d3.csv("../data-lab-data/EDU_v2_base_data.csv", function (error, data) {
      let stateFilter = d3.nest()
	  .key(function(d){
	    return d.State;
	  }).rollup(function(leaves) {
	    return {
	      ...leaves, // old object plus..
	      stateTotal: d3.sum(leaves, function(d){ return d.Total_Federal_Investment; }),
	      length: leaves.length
	    };
	  }).entries(data);

      drawStateCircles(stateFilter);

    });
  }

  function clicked(d) {
    if (active.node() === this) return reset();
    active.classed("active", false);
    active = d3.select(this).classed("active", true);

    let x, y, k;

    if (d && centered !== d) {
      let centroid = path.centroid(d);
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

    replot();

    function replot() {
      g.selectAll('circle').remove(); // remove all first..
      d3.csv("../data-lab-data/EDU_v2_base_data.csv", function (error, data) {
	drawAllCircles(data);
      });
    }; 
  };

}; // end main wrapper (draw Map function)

/*
  --------------------------------------------------------------------------------------------------------------------
  *   Main Method
  *--------------------------------------------------------------------------------------------------------------------
  */

drawMap(mapContainer); // section 4 USA map
createSectFourTable(sectFourTableContainer, ['Recipient', 'State', 'Total', 'Total_Federal_Investment']);

/*
  Event Handlers
*/
$(sectionFourtableBtn).click(function() {
  $('#sectionFourtableContainerDiv').css('display', 'block'); // our table!
  $('#collegesMap').css('display', 'none');
});

$(sectionFourmapBtn).click(function() {
  $('#collegesMap').css('display', 'flex'); 
  $('#sectionFourtableContainerDiv').css('display', 'none');
});

$("#sectionFourSearchBtn").click(function(){
  console.log('search btn');
  $('#mapContainer__searchBox').toggle();
});



