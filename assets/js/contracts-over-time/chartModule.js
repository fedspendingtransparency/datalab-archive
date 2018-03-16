const chartModule = (function() {
  function drawYAxisGridlines(svg, y, width, ticks) {
    svg
      .append("g")
      .attr("class", "grid")
      .call(
        d3
          .axisLeft(y)
          .ticks(ticks)
          .tickSize(-width)
          .tickFormat("")
      );
  }

  function drawXAxisGridlines(svg, x, height, ticks) {
    svg
      .append("g")
      .attr("class", "grid")
      .attr("transform", "translate(0," + height + ")")
      .call(
        d3
          .axisBottom(x)
          .ticks(ticks)
          .tickSize(-height)
          .tickFormat("")
      );
  }

  var parseTime = d3.timeParse("%Y-%m-%d");

  const formatNumberAsText = d =>
    d3
      .format(".2s")(d)
      .replace("G", "billion")
      .replace("M", "million");

  return {
    drawXAxisGridlines,
    drawYAxisGridlines,
    parseTime,
    formatNumberAsText
  };
})();
