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

//import { select, selectAll } from 'd3-selection';


/*
  --------------------------------------------------------------------------------------------------------------------
  *   functions
  *--------------------------------------------------------------------------------------------------------------------
  */

/*

  purporse : draws map and appends to given container
*/
const drawMap = (container) => {

  var width = 1920,
      height = 1000,
      centered;

  var projection = d3.geo.albersUsa()
      .scale(1500) // was 1500
      .translate([width / 2, height / 2]);

  var path = d3.geo.path()
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
                if (isNaN(long || lat)) { long = 0, lat = 0 }
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
          if (isNaN(long || lat)) { long = 0, lat = 0 }
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
              if (isNaN(long || lat)) { long = 0, lat = 0 }
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
