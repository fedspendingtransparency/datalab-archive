const multiLinechartModule = (function() {
  function draw(data, xAxisFormat) {
    // set chart dimensions
    const margin = { top: 10, right: 10, bottom: 30, left: 100 },
      width = 1000 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;

    // add parse date and y-axis formatting functions
    var parseDate = d3.timeParse("%Y-%m-%d");
    var formatAsMillions = d3.format(".2s");

    // line value ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // define the lines
    var totalspend = d3
      .line()
      .x(d => x(d.parsedDate))
      .y(d => y(+d.contractdollars));

    // Add SVG
    var svg = d3
      .select("#svg-1")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    data.forEach(d => (d.parsedDate = parseDate(d.date)));

    // Scale the range for WeeklyDataTotals
    x.domain(d3.extent(data, d => d.parsedDate));
    y.domain([0, d3.max(data, d => d.contractdollars)]);

    // Organize data
    var dataNest = d3
      .nest()
      .key(d => d.category)
      .entries(data);

    var color = d3.scaleOrdinal(d3.schemeCategory10);

    const path = svg
      .selectAll("path")
      .data(dataNest)
      .enter()
      .append("path")
      .attr("class", "line")
      .style("stroke", d => (d.color = color(d.key)))
      .attr("d", d => totalspend(d.values))
      .each(function(d) {
        d.totalLength = this.getTotalLength();
      })
      .attr("stroke-dasharray", d => d.totalLength)
      .attr("stroke-dashoffset", d => d.totalLength)
      .transition()
      .duration(4000)
      .attr("stroke-dashoffset", "0");

    // draw gridlines
    chartModule.drawYAxisGridlines(svg, y, width, 10);

    // Add X Axis
    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(
        xAxisFormat === "week"
          ? d3
              .axisBottom(x)
              // .ticks(6)
              .tickFormat(d3.timeFormat("%B"))
          : d3
              .axisBottom(x)
              // .ticks(3)
              .tickFormat(d3.timeFormat("%Y"))
      );

    // Add Y axis
    svg
      .append("g")
      .attr("class", "axis")
      .call(
        d3
          .axisLeft(y)
          .ticks(10)
          .tickFormat(d => formatAsMillions(d).replace("G", " billion"))
      );

    const legendSpace = 10;
    const legendRectHeight = 2;
    const legendRectWidth = 30;

    svg
      .selectAll(".legend")
      .data(dataNest)
      .enter()
      .append("text")
      .attr("class", "legend")
      .attr("id", "legend-text-" + i)
      .attr("x", width)
      .attr("y", (d, i) => legendSpace * i * 2 + margin.top / 2)
      .style("fill", d => (d.color = color(d.key)))
      .style("font-size", "12px")
      .style("font-family", "sans-serif")
      .style("text-anchor", "end")
      .style("alignment-baseline", "hanging")
      .text(d => d.key);
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
