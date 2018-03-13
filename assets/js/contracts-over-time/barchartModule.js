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

    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.fiscalyear))
      .attr("width", x.bandwidth())
      .attr("y", d => y(d.totalbyyear))
      .attr("height", d => height - y(d.totalbyyear));

    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
    svg
      .append("g")
      .attr("class", "axis")
      .call(
        d3
          .axisLeft(y)
          .tickFormat(d => formatmillions(d).replace("G", " billion"))
      );
  }

  return { draw };
})();
