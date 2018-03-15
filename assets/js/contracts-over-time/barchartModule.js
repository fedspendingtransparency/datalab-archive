const barchartModule = (function() {
  function draw(data) {
    var margin = { top: 20, right: 20, bottom: 30, left: 80 },
      width = 800 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;

    var x = d3
      .scaleBand()
      .range([0, width])
      .padding(0.1);
    var y = d3.scaleLinear().range([height, 0]);

    var svg = d3
      .select("#svg-1")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var formatmillions = d3.format(".2s");
    var formatnumber = d3.format(".2f");

    data.forEach(d => (d.totalbyyear = +d.totalbyyear));
    x.domain(data.map(d => d.fiscalyear));
    y.domain([0, d3.max(data, d => d.totalbyyear)]);

    const bar = svg.selectAll(".bar").data(data);

    bar
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.fiscalyear))
      .attr("width", x.bandwidth())
      .attr("y", d => y(d.totalbyyear))
      .attr("height", d => height - y(d.totalbyyear))
      .style("opacity", 0);

    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .style("opacity", 0);

    svg
      .append("g")
      .attr("class", "axis")
      .call(
        d3
          .axisLeft(y)
          .tickFormat(d => formatmillions(d).replace("G", " billion"))
      )
      .style("opacity", 0);

    svg
      .selectAll("*")
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
