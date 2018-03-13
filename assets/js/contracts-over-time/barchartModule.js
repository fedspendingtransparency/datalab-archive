const barchartModule = (function() {
  function draw(data) {
    var margin = { top: 20, right: 20, bottom: 30, left: 140 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    var x = d3
      .scaleBand()
      .range([0, width])
      .padding(0.1);
    var y = d3.scaleLinear().range([height, 0]);

    var svg = d3
      .select("#svg-1")
      // .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var formatmillions = d3.format(".2s");
    var formatnumber = d3.format(".2f");

    // d3.json("TotalContractAwardsbyYear.json", function(error, data) {
    // if (error) throw error;
    data.forEach(function(d) {
      d.totalbyyear = +d.totalbyyear;
      // return console.log(d);
    });
    x.domain(
      data.map(function(d) {
        return d.fiscalyear;
      })
    );
    y.domain([
      0,
      d3.max(data, function(d) {
        return d.totalbyyear;
      })
    ]);

    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function(d) {
        return x(d.fiscalyear);
      })
      .attr("width", x.bandwidth())
      .attr("y", function(d) {
        return y(d.totalbyyear);
      })
      .attr("height", function(d) {
        return height - y(d.totalbyyear);
      });
    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
    svg
      .append("g")
      .attr("class", "axis")
      .call(
        d3.axisLeft(y).tickFormat(function(d) {
          return formatmillions(d).replace("G", " billion");
        })
      );
    // console.log("svg", svg);
    // });
  }

  return { draw };
})();
