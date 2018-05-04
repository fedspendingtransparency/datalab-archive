---
---

const multiLinechartModule = (function() {
  function draw(data, xAxisFormat) {
    const svgMargin = { top: 0, right: 0, bottom: 90, left: 40 },
      svgMargin2 = {top: 405, right: 0, bottom: 30, left: 40},
      width = $("#svg-1").width() - svgMargin.left - svgMargin.right,
      height = $("#svg-1").height() - svgMargin.top - svgMargin.bottom - 70,
      height2 = $("#svg-1").height() - svgMargin2.top - svgMargin2.bottom - 70;

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

    let xAxis = d3.axisBottom(x)
      .tickFormat(xAxisFormat === "week" ? d3.timeFormat("%B") : d3.timeFormat("%Y"));

    let xAxis2 = d3.axisBottom(x2)
      .tickFormat(xAxisFormat === "week" ? d3.timeFormat("%B") : d3.timeFormat("%Y"));

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
      .attr("transform", "translate(0," + (svgMargin2.top+60) + ")");

    var brush = d3.brushX()
      .extent([[0, 0], [width, height2]])
      .on("brush", brushed);

    var zoom = d3.zoom()
      .scaleExtent([1, Infinity])
      .translateExtent([[0, 0], [width, height]])
      .extent([[0, 0], [width, height]])
      .on("zoom", zoomed);
    
    var lineColor = d3
      .scaleLinear()
      .range(["#93DFB8", "#E3AAD6", "#FFC8BA", "#B5D8EB"])
      .domain([0, Object.keys(data.lineData).length - 1])
      .interpolate(d3.interpolateHcl);

    var verticalLineColor = d3
      .scaleLinear()
      .range(["#69D2E7", "#D1F2A5", "#E8BF56", "#EF746F"])
      .domain([0, Object.keys(data.verticalLineData).length - 1])
      .interpolate(d3.interpolateHcl);

    context.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis2);

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

    // draw lines
    function DrawLines(t){
      console.log(t)
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
        .duration(t)
        .attr("stroke-dashoffset", "0");
      };

    DrawLines(4000);

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
      .duration(4000)
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
          .attr("cx", d => x(d.parsedDate))
          .attr("cy", d => y(d.val))
          .attr("r", 10)
          .attr("fill-opacity", "0")
          .on("mouseover", d => handleMouseOver(d, l[0]))
          .on("mouseout", handleMouseOut)
          .on("mousemove", handleMouseMove);
      });
    }
    DrawPoints();

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

    // draw vertical lines
    Object.entries(data.verticalLineData).forEach((l, i) => {
      svg
        .append("g")
        .attr("class", "vertical-line-paths")
        .selectAll(`.vertical-line-${i}`)
        .data(l[1])
        .enter()
        .append("line")
        .attr("class", `.vertical-line-${i}`)
        .style("stroke", () => verticalLineColor(i))
        .attr("x1", d => x(d.parsedDate))
        .attr("y1", height)
        .attr("x2", d => x(d.parsedDate))
        .attr("y2", 0)
        .each(function(d) {
          d.totalLength = this.getTotalLength();
        })
        .attr("stroke-dasharray", d => d.totalLength)
        .attr("stroke-dashoffset", d => d.totalLength)
        .style("stroke-width","1px")
        .style("stroke-opacity",".6")
        .transition()
        .duration(4000)
        .attr("stroke-dashoffset", "0");
    });

    // draw gridlines
    chartModule.drawYAxisGridlines(svg, y, (width+50), 10);

    function addLegend(legendName, legendData, colorScale, position) {
      const legendSpace = 10;

      const legend = svg
        .append("g")
        .attr("class", `legend ${legendName}`)
        .attr("transform", `translate(${position === "right" ? width : 0},0)`);

      const legendBackground = legend
        .append("rect")
        .attr("fill", "#333333")
        .attr("class", `${legendName}-background`);

      legend
        .append("g")
        .attr("class", `legend-items ${legendName}-items`)
        .selectAll(`.${legendName}-item`)
        .data(legendData)
        .enter()
        .append("text")
        .attr("class", `legend-item ${legendName}-item`)
        .attr("x", 0)
        .attr("y", (d, i) => legendSpace * i * 2 + svgMargin.top / 2)
        .style("fill", (d, i) => colorScale(i))
        .style("font-size", "12px")
        .style("font-family", "sans-serif")
        .style("text-anchor", position === "right" ? "end" : "start")
        .style("alignment-baseline", "hanging")
        .text(d => d)
        .on("mouseover",(d) => {
          if(d === "Contract Modification"){
            d3.select("#svg-1 > g > g > g.line-paths > path:nth-child(1)").style("stroke-width","1px");
            d3.select("#svg-1 > g > g > g.line-paths > path:nth-child(2)").style("stroke-width","0px");
            d3.select("#svg-1 > g > g.context > g.line-paths > path:nth-child(1)").style("stroke-width","1px");
            d3.select("#svg-1 > g > g.context > g.line-paths > path:nth-child(2)").style("stroke-width","0px");
          }else if (d === "New Contract"){
            d3.select("#svg-1 > g > g > g.line-paths > path:nth-child(1)").style("stroke-width","0px");
            d3.select("#svg-1 > g > g > g.line-paths > path:nth-child(2)").style("stroke-width","1px");
            d3.select("#svg-1 > g > g.context > g.line-paths > path:nth-child(1)").style("stroke-width","0px");
            d3.select("#svg-1 > g > g.context > g.line-paths > path:nth-child(2)").style("stroke-width","1px");
          }else if (d === "Equipment/Facilities/Construction/Vehicles"){
            d3.selectAll("#svg-1 > g > g > g.line-paths > path").style("stroke-width","0px");
            d3.select("#svg-1 > g > g > g.line-paths > path:nth-child(1)").style("stroke-width","1px");
            d3.selectAll("#svg-1 > g > g.context > g.line-paths > path").style("stroke-width","0px");
            d3.select("#svg-1 > g > g.context > g.line-paths > path:nth-child(1)").style("stroke-width","1px");
          }else if (d === "Miscellaneous"){
            d3.selectAll("#svg-1 > g > g > g.line-paths > path").style("stroke-width","0px");
            d3.select("#svg-1 > g > g > g.line-paths > path:nth-child(2)").style("stroke-width","1px");
            d3.selectAll("#svg-1 > g > g.context > g.line-paths > path").style("stroke-width","0px");
            d3.select("#svg-1 > g > g.context > g.line-paths > path:nth-child(2)").style("stroke-width","1px");
          }else if (d === "Professional Services"){
            d3.selectAll("#svg-1 > g > g > g.line-paths > path").style("stroke-width","0px");
            d3.select("#svg-1 > g > g > g.line-paths > path:nth-child(3)").style("stroke-width","1px");
            d3.selectAll("#svg-1 > g > g.context > g.line-paths > path").style("stroke-width","0px");
            d3.select("#svg-1 > g > g.context > g.line-paths > path:nth-child(3)").style("stroke-width","1px");
          }else if (d === "Telecomm & IT"){
            d3.selectAll("#svg-1 > g > g > g.line-paths > path").style("stroke-width","0px");
            d3.select("#svg-1 > g > g > g.line-paths > path:nth-child(4)").style("stroke-width","1px");
            d3.selectAll("#svg-1 > g > g.context > g.line-paths > path").style("stroke-width","0px");
            d3.select("#svg-1 > g > g.context > g.line-paths > path:nth-child(4)").style("stroke-width","1px");
          }else if (d === "Weapons"){
            d3.selectAll("#svg-1 > g > g > g.line-paths > path").style("stroke-width","0px");
            d3.select("#svg-1 > g > g > g.line-paths > path:nth-child(5)").style("stroke-width","1px");
            d3.selectAll("#svg-1 > g > g.context > g.line-paths > path").style("stroke-width","0px");
            d3.select("#svg-1 > g > g.context > g.line-paths > path:nth-child(5)").style("stroke-width","1px");
          }
        })
        .on("mouseout",() => d3.selectAll("#svg-1 > g > g > g.line-paths > path").style("stroke-width","1px"));

      const legendDims = legend.node().getBBox();

      legendBackground
        .attr("width", legendDims.width)
        .attr("height", legendDims.height + 20)
        .attr("x", position === "right" ? -legendDims.width : -40)
        .attr("y", -20);
    }

    addLegend(
      "legend-1", 
      Object.keys(data.lineData), 
      lineColor, 
      "right"
    );

    addLegend(
      "legend-2",
      Object.keys(data.verticalLineData),
      verticalLineColor,
      "left"
    );

    function brushed() {
      console.log("in brushed")
      if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
      var s = d3.event.selection || x2.range();
      x.domain(s.map(x2.invert, x2));
      LineChart.selectAll('.line').remove();
      DrawLines(0);
      // LineChart.selectAll(".line").attr("d", d => line(d[1]));
      // LineChart.selectAll(".data-point").attr("d", d => d[1]);
      focus.select(".axis--x").call(xAxis);
      svg.select(".zoom").call(zoom.transform, d3.zoomIdentity
          .scale(width / (s[1] - s[0]))
          .translate(-s[0], 0));
      LineChart.selectAll('.data-point').remove();
      DrawPoints();
    }
    
    function zoomed() {
      if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
      var t = d3.event.transform;
      x.domain(t.rescaleX(x2).domain());
      LineChart.selectAll(".line").attr("d", d => line(d[1]));
      focus.select(".axis--x").call(xAxis);
      context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
    }
  }

  function remove(cb) {
    d3
      .select("#svg-1")
      .selectAll("*")
      .transition()
      .duration(400)
      .style("opacity", 0)
      .remove();

    setTimeout(cb, 400);
  }

  return { draw, remove };
})();
