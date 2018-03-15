const linechartModule = (function() {
  function draw(data, xAxis) {
    var margin = { top: 10, right: 10, bottom: 30, left: 100 },
      width = 800 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;

    // parse the date / time
    var parseTime = d3.timeParse("%Y-%m-%d");

    // set the ranges
    var x =
      xAxis === "year"
        ? d3.scaleTime().range([0, width])
        : d3
            .scaleBand()
            .rangeRound([0, width])
            .padding(0.5);
    var y = d3.scaleLinear().range([height, 0]);
    var formatAsMillions = d3.format(".2s");

    var valueline =
      xAxis === "year"
        ? d3
            .line()
            .x(d => x(d.parsedDate))
            .y(d => y(d.contractdollars))
        : d3
            .line()
            .x(function(d) {
              return x(d.week);
            })
            .y(function(d) {
              return y(d.contractdollars);
            });

    var svg = d3
      .select("#svg-1")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // format the data
    if (xAxis === "year") {
      data.forEach(d => {
        d.parsedDate = parseTime(d.date);
        d.contractdollars = +d.contractdollars;
      });
    }

    // Scale the range of the data
    if (xAxis === "year") x.domain(d3.extent(data, d => d.parsedDate));
    else
      x.domain(
        data.map(function(d) {
          return d.week;
        })
      );

    y.domain([0, d3.max(data, d => d.contractdollars)]);

    // Add the valueline path.
    const path = svg
      .append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline);

    var totalLength = path.node().getTotalLength();

    path
      .attr("stroke-dasharray", totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(4000)
      .attr("stroke-dashoffset", "0");

    // Add the X Axis
    if (xAxis === "year") {
      svg
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .style("opacity", 0)
        .transition()
        .duration(800)
        .style("opacity", 1);
    } else {
      svg
        .append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + height + ")")
        .call(
          d3.axisBottom(x).tickValues(
            x.domain().filter(function(d, i) {
              return !(i % 2);
            })
          )
        )
        .style("opacity", 0)
        .transition()
        .duration(800)
        .style("opacity", 1);
    }

    // Add the Y Axis
    svg
      .append("g")
      .call(
        d3.axisLeft(y).tickFormat(d =>
          formatAsMillions(d)
            .replace("G", "billion")
            .replace("M", "million")
        )
      )
      .style("opacity", 0)
      .transition()
      .duration(800)
      .style("opacity", 1);
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
