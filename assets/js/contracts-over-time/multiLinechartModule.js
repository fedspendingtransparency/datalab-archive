---
---

const multiLinechartModule = (function() {
  function draw(data, xAxisFormat) {
    const svgMargin = { top: 10, right: 10, bottom: 30, left: 100 },
      width = $("#svg-1").width() - svgMargin.left - svgMargin.right,
      height = $("#svg-1").height() - svgMargin.top - svgMargin.bottom;

    // add parse date and y-axis formatting functions
    var parseDate = d3.timeParse("%Y-%m-%d");
    // var formatAsMillions = d3.format(".2s");

    // line value ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // define the lines
    var totalspend = d3
      .line()
      .x(d => x(d.parsedDate))
      .y(d => y(d.val));

    // Add SVG
    var svg = d3
      .select("#svg-1")
      .append("g")
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

    // Scale the domains
    x.domain(d3.extent(combinedLineData, d => d.parsedDate));
    y.domain([0, d3.max(combinedLineData, d => d.val)]);

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

    // draw lines
    svg
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

    // draw vertical lines
    Object.entries(data.verticalLineData).forEach((l, i) => {
      svg
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
        .transition()
        .duration(4000)
        .attr("stroke-dashoffset", "0");
    });

    // draw gridlines
    chartModule.drawYAxisGridlines(svg, y, width, 10);

    // Add X Axis
    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(
        xAxisFormat === "week"
          ? d3.axisBottom(x).tickFormat(d3.timeFormat("%B"))
          : d3.axisBottom(x).tickFormat(d3.timeFormat("%Y"))
      );

    // Add Y axis
    svg
      .append("g")
      .attr("class", "axis")
      .call(
        d3
          .axisLeft(y)
          .ticks(10)
          .tickFormat(chartModule.formatNumberAsText)
      );

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
        .text(d => d);

      const legendDims = legend.node().getBBox();

      legendBackground
        .attr("width", legendDims.width)
        .attr("height", legendDims.height + 20)
        .attr("x", position === "right" ? -legendDims.width : 0)
        .attr("y", -10);
    }

    addLegend("legend-1", Object.keys(data.lineData), lineColor, "right");
    addLegend(
      "legend-2",
      Object.keys(data.verticalLineData),
      verticalLineColor,
      "left"
    );
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
