const multiLinechartModule = (function() {
  function draw(data) {
    // set chart dimensions
    const margin = { top: 10, right: 10, bottom: 30, left: 100 },
      width = 800 - margin.left - margin.right,
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
      .x(function(d) {
        return x(d.parsedDate);
      })
      .y(function(d) {
        return y(+d.contractdollars);
      });

    // Add SVG Canvas
    var svg = d3
      .select("#svg-1")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    data.forEach(function(d) {
      d.parsedDate = parseDate(d.date);
    });

    // Scale the range for WeeklyDataTotals
    x.domain(
      d3.extent(data, function(d) {
        return d.parsedDate;
      })
    );
    y.domain([
      0,
      d3.max(data, function(d) {
        return d.contractdollars;
      })
    ]);

    // Nest the lines by contract type "type"
    var dataNest = d3
      .nest()
      .key(function(d) {
        return d.category;
      })
      .entries(data);
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    // Add spacing specification for the legend
    var legendSpace = 10;
    var legendRectHeight = 2;
    var legendRectWidth = 30;

    // Loop through each Type
    dataNest.forEach(function(d, i) {
      svg
        .append("path")
        .attr("class", "line")
        .style("stroke", function() {
          return (d.color = color(d.key));
        })
        .attr("d", totalspend(d.values));
      // Add legend
      svg
        .append("text")
        .attr("class", "legend")
        .attr("id", "legend-text-" + i)
        .attr("x", width - 7 * margin.right)
        .attr("y", legendSpace * i * 2 + margin.top / 2)
        .style("fill", function() {
          return (d.color = color(d.key));
        })
        .style("font-size", "12px")
        .style("font-family", "sans-serif")
        .text(d.key);
    });
    // Add Axis
    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
    // Add Y axis
    svg
      .append("g")
      .attr("class", "axis")
      .call(
        d3.axisLeft(y).tickFormat(function(d) {
          return formatAsMillions(d).replace("G", " billion");
        })
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
