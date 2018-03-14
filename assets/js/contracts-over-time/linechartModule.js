const linechartModule = (function() {
  function draw(data) {
    // set the dimensions and margins of the graph
    var margin = { top: 20, right: 50, bottom: 30, left: 100 },
      width = 800 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;

    // parse the date / time
    var parseTime = d3.timeParse("%Y-%m-%d");

    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);
    var formatAsMillions = d3.format(".2s");

    var valueline = d3
      .line()
      .x(d => x(d.parsedDate))
      .y(d => y(d.contractdollars));

    var svg = d3
      .select("#svg-1")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // format the data
    data.forEach(function(d) {
      d.parsedDate = parseTime(d.date);
      d.contractdollars = +d.contractdollars;
    });

    console.log(data.slice(0, 10));

    // Scale the range of the data
    x.domain(d3.extent(data, d => d.parsedDate));
    y.domain([0, d3.max(data, d => d.contractdollars)]);

    // Add the valueline path.
    svg
      .append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline);

    // Add the X Axis
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add the Y Axis
    svg
      .append("g")
      .call(
        d3
          .axisLeft(y)
          .tickFormat(d => formatAsMillions(d).replace("G", " billion"))
      );
  }

  return { draw };
})();
