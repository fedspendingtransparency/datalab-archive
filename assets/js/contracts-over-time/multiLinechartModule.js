---
---
// 
// 
// 
// 
// 
// 
// 
const multiLinechartModule = (function() {
  function draw(data,axisText,id) {

    $('.subTitleDiv').empty();
    $('.legend').empty();
    $("#svg-1").empty();

    const svgMargin = { top: 20, right: 0, bottom: 80, left: 40 },
      svgMargin2 = {top: 405, right: 0, bottom: 30, left: 40},
      width = $("#svg-1").width(),
      height = $("#svg-1").height() - svgMargin.top - svgMargin.bottom - 55,
      height2 = 80,
      legendHeight = 50;

    var parseDate = d3.timeParse("%Y-%m-%d");

    // Add SVG
    var svg = d3
      .select("#svg-1")
      .append("g")
      .attr('class','frame')
      .attr('max-width','70%')
      .attr("transform", `translate(${svgMargin.left},${svgMargin.top})`);

    Object.entries(data.lineData).forEach(d =>
      d[1].forEach(e => (e.parsedDate = parseDate(e.date)))
    );
    Object.entries(data.verticalLineData).forEach(d =>
      d[1].forEach(e => (e.parsedDate = parseDate(e.date)))
    );

    const combinedLineData = Object.entries(data.lineData).reduce((a, c) => {
      const a2 = [...a, ...c[1]];
      return a2;
    }, []);

    // line value ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);
    var x2 = d3.scaleTime().range([0, width]);
    var y2 = d3.scaleLinear().range([height2, 0]);

    // define the lines
    var line = d3
      .line()
      .x(d => x(d.parsedDate))
      .y(d => y(d.val));
    
    var line2 = d3
      .line()
      .x(d => x2(d.parsedDate))
      .y(d => y2(d.val));

    // Scale the domains
    x.domain(d3.extent(combinedLineData, d => d.parsedDate));
    y.domain([0, d3.max(combinedLineData, d => d.val)]);
    x2.domain(x.domain());
    y2.domain(y.domain());

    let xAxis = d3.axisBottom(x);

    let xAxis2 = d3.axisBottom(x2);

    let yAxis = d3.axisLeft(y)
      .ticks(10)
      .tickFormat(chartModule.formatNumberAsText);

    var clip = svg.append("defs").append("svg:clipPath")
      .attr("id", "clip")
      .append("svg:rect")
      .attr("width", width)
      .attr("height", height)
      .attr("x", 0)
      .attr("y", 0); 

    var LineChart = svg.append("g")
      .attr("class", "focus")
      .attr("transform", "translate(0,0)")
      .attr("clip-path", "url(#clip)");

    var focus = svg.append("g")
      .attr("class", "focus")
      .attr("transform", "translate(0,0)");

    var context = svg.append("g")
      .attr("class", "context")
      .attr("transform", "translate(0," + (svgMargin2.top + 70) + ")");

    var brush = d3.brushX()
      .extent([[0, 0], [width, height2]])
      .on("brush", brushed);

    var zoom = d3.zoom()
      .scaleExtent([1, Infinity])
      .translateExtent([[0, 0], [width, height]])
      .extent([[0, 0], [width, height]]);
    
    var lineColor = d3
      .scaleLinear()
      .range(["#027693", "#db5000", "#FFC8BA", "#B5D8EB"])
      .domain([0, Object.keys(data.lineData).length - 1])
      .interpolate(d3.interpolateHcl);

    context.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis2);

    context.append("text")             
      .attr("transform","translate(" + (width/2) + " , 125)")
      .style("text-anchor", "middle")
      .style("font-size","15px")
      .attr("dx", "0vw")
      .text(axisText);

    context.append("g")
      .attr("class", "brush")
      .call(brush)
      .call(brush.move, x.range());
    
    focus.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    focus.append("g")
      .attr("class", "axis axis--y")
      .call(yAxis);

    focus.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y",'-110px')
      .attr("x",0 - (height / 2))
      .attr("dy", "0vw")
      .style("font-size","15px")
      .style("text-anchor", "middle")
      .text("Total Obligations");     

    // draw lines
    function DrawLines(t){
      return LineChart
        .append("g")
        .attr("class", "line-paths")
        .selectAll(".line")
        .data(Object.entries(data.lineData))
        .enter()
        .append("path")
        .attr("class", "line")
        .style("stroke", (d, i) => lineColor(i))
        .attr("d", d => line(d[1]))
        .each(function(d) {
          d.totalLength = this.getTotalLength();
        })
        .attr("stroke-dasharray", d => d.totalLength)
        .attr("stroke-dashoffset", d => d.totalLength)
        .transition()
        .duration(0)
        .attr("stroke-dashoffset", "0");
      };

    context
      .append("g")
      .attr("class", "line-paths")
      .selectAll(".line")
      .data(Object.entries(data.lineData))
      .enter()
      .append("path")
      .attr("class", "line")
      .style("stroke", (d, i) => lineColor(i))
      .attr("d", d => line2(d[1]))
      .each(function(d) {
        d.totalLength = this.getTotalLength();
      })
      .attr("stroke-dasharray", d => d.totalLength)
      .attr("stroke-dashoffset", d => d.totalLength)
      .transition()
      .duration(0)
      .attr("stroke-dashoffset", "0");

    // draw data points
    function DrawPoints(){
      Object.entries(data.lineData).forEach((l, i) => {
          
        LineChart
          .append("g")
          .attr("class", "data-points")
          .selectAll(".data-point")
          .data(l[1])
          .enter()
          .append("circle")
          .attr("class", "data-point")
          .style("stroke", (d, i) => lineColor(i))
          .style("fill","#fff")
          .attr("cx", d => x(d.parsedDate))
          .attr("cy", d => y(d.val))
          .attr("r", 3)
          // .attr("fill-opacity", "")
          .on("mouseover", d => handleMouseOver(d, l[0]))
          .on("mouseout", handleMouseOut)
          .on("mousemove", handleMouseMove);
      });
    }

    function handleMouseOver(d, title) {
      tooltipModule.draw("#tooltip", title, {
        Value: chartModule.formatNumberAsText(d.val)
      });
    }

    function handleMouseOut() {
      tooltipModule.remove("#tooltip");
    }

    function handleMouseMove() {
      tooltipModule.move("#tooltip");
    }

    // draw gridlines
    chartModule.drawYAxisGridlines(svg, y, width, 10);

  function brushed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
    var s = d3.event.selection || x2.range();
    x.domain(s.map(x2.invert, x2));
    LineChart.selectAll('.line').remove();
    DrawLines(0);
    focus.select(".axis--x").call(xAxis);
    svg.select(".zoom").call(zoom.transform, d3.zoomIdentity
        .scale(width / (s[1] - s[0]))
        .translate(-s[0], 0));
    LineChart.selectAll('.data-point').remove();
    DrawPoints();
  }

  function getSubTitle(id){
    if(id === "panel-2"){
      return "How does spending on federal contracts vary within a year?";
    }
    else if(id === "panel-3" | id === "panel-4"){
      return "Do end-of-year spikes occur reliably every year?";
    }else if(id === "panel-5"){
      return "Are spending patterns different depending on the type of good or service purchased?";
    }else if(id === "panel-6"){
      return "Do congressional budget actions affect how agencies spend money on contracts?";
    }
    return "";
  }
  
  var legendVals = Object.keys(data.lineData);
  // legendVals.sort((a, b) => b.length - a.length);

  var subTitle = d3.select('.subTitleDiv')
    .append("div")
    .attr("class","subTitle")
    .text(getSubTitle(id));

  var legend = d3.select('.legend').selectAll("legends")
    .data(legendVals)
    .enter().append("div")
    .attr("class","legends");
  
  var p = legend.append("p").attr("class","title")
  p.append("span").attr("class","key-dot").style("background",function(d,i) { return lineColor(i) } );
  p.insert("text").attr("class","title").text(function(d,i) { return d } );

  }

  function remove(cb) {
    d3
      .select("#svg-1")
      .selectAll("*")
      .transition()
      .duration(400)
      .style("opacity", 0)
      .remove();

    $('.legend').empty();
    $('.subTitleDiv').empty();

    setTimeout(cb, 400);
  }

  return { draw, remove };
})();
