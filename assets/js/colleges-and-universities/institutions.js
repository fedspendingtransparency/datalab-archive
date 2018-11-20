/*
--------------------------------------------------------------------------------------------------------------------
*   declarations
*--------------------------------------------------------------------------------------------------------------------
*/
const mapContainer = document.getElementById('collegesMap');


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

  var svg = d3.select(container).append("svg")
    .attr("width", width)
    .attr("height", height);


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
     */
    d3.csv("../data-lab-data/EDU_v2_base_data.csv", function (error, data) {
      if (error) throw error;

      // just need Lat and Long for now
      //let LatLongObj = [];
      //data.forEach(row => {
      //let obj = { latitude: row.LATITUDE, longitude: row.LONGITUDE }
      //LatLongObj.push(parseFloat(obj));
      //console.log(LatLongObj); // need these as numbers not strings
      //});

      map.selectAll("circle")
        .data(data)
        .enter()
        .append("svg:circle")
        .attr("transform", function (d) {
          let long = parseFloat(d.LONGITUDE);
          let lat = parseFloat(d.LATITUDE);
          return "translate(" + projection([d.LONGITUDE, d.LATITUDE]) + ")";
        })
        .attr('r', 4)
        //      .attr("cx", function (d) {
        //        console.log(d);
        //let long = parseFloat(d.LONGITUDE);
        //let lat = parseFloat(d.LATITUDE);
        //return projection(long, lat);
        //})
        //      .attr("cy", function (d) {
        //      let long = parseFloat(d.LONGITUDE);
        //    let lat = parseFloat(d.LATITUDE);
        //return projection(long, lat);
        //})
        //.attr("r", function (d) {
        //let total = parseFloat(d.Total)
        //if (isNaN(parseFloat(total))) { total = 0; } // have NaN's in data.. make them 0's for nothin.
        //console.log(total);
        //return "translate(" + projection([])
        //        return Math.sqrt(total) * .1;
        //})
        .style("fill", "rgb(217,91,67)")
        .style("opacity", 0.85)


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

} // end main wrapper 

/*
--------------------------------------------------------------------------------------------------------------------
*   Main Method
*--------------------------------------------------------------------------------------------------------------------
*/

drawMap(mapContainer);
