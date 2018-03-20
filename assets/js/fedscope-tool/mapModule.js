---
---

const mapModule = (function() {
  function draw(data, { states }) {
    let filteredData = [...data];

    const initialStateData = Object.keys(states).reduce((a, c) => {
      a[c] = 0;
      return a;
    }, {});

    const dataByState = filteredData.reduce((a, c) => {
      a[c.stateAbbreviation] = a[c.stateAbbreviation] + c.employeeCount;
      return a;
    }, initialStateData);

    var color = d3
      .scaleLinear()
      .domain([1, d3.max(Object.values(dataByState), d => d)])
      .range(["#f2f1f8", "#3f3c7d"])
      .interpolate(d3.interpolateRgb);

    function handleMouseOver(d) {
      const formatNumber = d3.format(",d");
      tooltipModule.draw("#tooltip", d.name, {
        Employees: formatNumber(dataByState[d.abbreviation])
      });
      d3.select(this).style("fill", "#D334BA");
    }

    function handleMouseOut() {
      tooltipModule.remove("#tooltip");
      d3.select(this).style("fill", d => color(dataByState[d.abbreviation]));
    }

    function handleMouseMove() {
      tooltipModule.move("#tooltip");
    }

    d3
      .select("#mapSvg")
      .append("g")
      .attr("transform", "scale(.9375)")
      .selectAll(".state")
      .data(Object.values(states))
      .enter()
      .append("path")
      .attr("class", "state")
      .attr("d", d => d.path)
      .style("fill", d => color(dataByState[d.abbreviation]))
      .on("mouseover", handleMouseOver)
      .on("mousemove", handleMouseMove)
      .on("mouseout", handleMouseOut);
  }
  return { draw };
})();
