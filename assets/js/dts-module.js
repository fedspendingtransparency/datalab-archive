"use strict";

(function () {

  const dateFormatter = d3.timeFormat("%B %e, %Y"),
    parseTime = d3.timeParse("%Y-%m-%d"),
    dollarFormatter = function dollarFormatter(d) {
      return d3.format("$,.2s")(d).replace(/G/, "B");
    };

  let svg,
    data,
    debounce,
    containerWidth,
    margin,
    width,
    aspect,
    x,
    y,
    valueline,
    height;

  function setDimensions() {
    containerWidth = document.getElementsByClassName('dtsm-img')[0].getBoundingClientRect().width;

    margin = { top: 0, right: 20, bottom: 30, left: 50 };
    width = containerWidth - margin.left - margin.right;
    aspect = d3.max([width * .36, 90]);
    height = aspect - margin.top - margin.bottom;
  }

  function setSvg() {
    d3.select('.dtsm-img').selectAll('*').remove();

    svg = d3.select(".dtsm-img").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    x = d3.scaleTime().range([0, width]);
    y = d3.scaleLinear().range([height, 0]);

    valueline = d3.line().x(function (d) {
      return x(d.date);
    }).y(function (d) {
      return y(d.Totals);
    });
  }

  function drawYAxisGridlines(svg, y, width, ticks) {
    svg
      .append("g")
      .attr("class", "grid")
      .call(
        d3
          .axisLeft(y)
          .ticks(2)
          .tickSize(-width)
          .tickFormat("")
      );
  }

  function type(d) {
    d.date = parseTime(d.date);
    d.Totals = +d.Totals * 1000000; // is this wrong? should it be fytd, mtd, and today instead? also multiply?
    return d;
  }

  function redraw() {
    setDimensions();
    setSvg();

    x.domain(d3.extent(data, function (d) { return d.date; }));
    y.domain([0, d3.max(data, function (d) { return d.Totals; })]);

    let lastEntry = data[data.length - 1];
    let lastDate = lastEntry.date;
    let lastValue = lastEntry.Totals;

    svg.append("g")
      .attr("class", "dts_Yaxis")
      .attr("transform", "translate(-10)")
      .style("stroke", "#757575")
      .style("font-family", "Source Sans Pro")
      .style("font-size", "11")
      .style("line-height", "20px")
      .style("font-weight", "100")
      .call(d3.axisLeft(y).ticks(2)
        .tickFormat(dollarFormatter)
        .tickSize(0));

    svg.append("g")
      .attr("class", "dts_Xaxis")
      .attr("transform", "translate(0," + height + ")")
      .style("stroke", "#757575")
      .style("font-size", "11")
      .style("font-family", "Source Sans Pro")
      .style("line-height", "20px")
      .style("font-weight", "100")
      .call(d3.axisBottom(x).ticks(2)
        .tickFormat(d3.timeFormat("%d %b"))
        .tickSize(0));

    svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline);

    drawYAxisGridlines(svg, y, width, 10);

    svg.append("circle")
      .attr("r", 7)
      .attr("stroke-width", 1)
      .attr("transform", "translate(" + (x(lastDate)) + "," + (y(lastValue)) + ")");

    d3.select(".dtsm-dollars").text(dollarFormatter(lastValue));
    d3.select(".side-dts__date").text("Updated " + dateFormatter(lastDate));
  }

  d3.csv("/data-lab-data/dts/recent_30.csv", type, function (error, _data) {
    if (error) throw error;

    data = _data;

    redraw();
  });

  window.addEventListener('resize', function () {
    if (debounce) {
      clearTimeout(debounce);
    }

    debounce = setTimeout(redraw, 100);
  });
})();