---
---

const barchartModule = (function() {
  function draw(data) {
    const margin = { top: 10, right: 10, bottom: 30, left: 100 },
      width = 1000 - margin.left - margin.right,
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

    x.domain(data.map(d => d.fiscalYear));
    y.domain([0, d3.max(data, d => d.val)]);

    const bar = svg.selectAll(".bar").data(data);

    bar
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.fiscalYear))
      .attr("width", x.bandwidth())
      .attr("y", height)
      .attr("height", 0)
      .style("opacity", 0)
      .transition()
      .duration(800)
      .style("opacity", 1)
      .attr("y", d => y(d.val))
      .attr("height", d => height - y(d.val));

    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .style("opacity", 0)
      .transition()
      .duration(800)
      .style("opacity", 1);

    svg
      .append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y).tickFormat(chartModule.formatNumberAsText))
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
