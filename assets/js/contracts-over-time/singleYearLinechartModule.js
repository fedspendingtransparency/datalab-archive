---
---

const singleYearLinechartModule = (function() {
  function draw(data,axisText,id) {
    $('.subTitleDiv').empty();
    $('.legend').empty();
    $("#svg-1").empty();

    const svgMargin = { top: 0, right: 0, bottom: 30, left: 0 },
      width = 816,
      height = 530,
      legendHeight = 33;

    var parseDate = d3.timeParse("%Y-%m-%d");

    // Add SVG
    var svg = d3
        .select("#svg-1")
        .append("g")
        .attr("transform", `translate(${svgMargin.left},${svgMargin.top})`);

    Object.entries(data.lineData).forEach(d =>
        d[1].forEach(e => (e.parsedDate = parseDate(e.date)))
    );

    const combinedLineData = Object.entries(data.lineData).reduce((a, c) => {
        const a2 = [...a, ...c[1]];
        return a2;
    }, []);

    // line value ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // define the lines
    var totalspend = d3
        .line()
        .x(d => x(d.parsedDate))
        .y(d => y(d.val));

    // Scale the domains
    x.domain(d3.extent(combinedLineData, d => d.parsedDate));
    y.domain([0, d3.max(combinedLineData, d => d.val)]);

    let xAxis = d3.axisBottom(x);

    let yAxis = d3.axisLeft(y)
    .ticks(10)
    .tickFormat(chartModule.formatNumberAsText);

    svg.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "axis axis--y")
      .call(yAxis);   

    var lineColor = d3
      .scaleLinear()
      .range(["#027693"])
      .domain([0, Object.keys(data.lineData).length - 1])
      .interpolate(d3.interpolateHcl);

    // draw lines
    svg
        .append("g")
        .attr("class", "line-paths")
        .selectAll(".line")
        .data(Object.entries(data.lineData))
        .enter()
        .append("path")
        .attr("class", "line")
        .style("stroke", (d, i) => lineColor(i))
        .attr("d", d => totalspend(d[1]))
        .each(function(d) {
        d.totalLength = this.getTotalLength();
        })
        .attr("stroke-dasharray", d => d.totalLength)
        .attr("stroke-dashoffset", d => d.totalLength)
        .transition()
        .duration(4000)
        .attr("stroke-dashoffset", "0");

    // draw data points
    Object.entries(data.lineData).forEach((l, i) => { 
    svg
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

    var TooltipFormatNumberAsText = d =>
      d3.format("$.2s")(d)
        .replace("G", " Billion")
        .replace("M", " Million");

    function handleMouseOver(d, title) {
      tooltipModule.draw("#tooltip", title, {
        Value: TooltipFormatNumberAsText(d.val)
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
  
    var legendVals = Object.keys(data.lineData);
    // legendVals.sort((a, b) => b.length - a.length);

    var subTitle = d3.select('.subTitleDiv')
        .append("div")
        .attr("class","subTitle")
        .text("Average Value of Contracts Awarded");

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
