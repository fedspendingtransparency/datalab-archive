Array.prototype.first = function () {
  return this[0];
};

const dollarFormatter = d => d3.format("$,.3s")(d).replace(/G/,"B");
const dateFormatter = d3.timeFormat("%B %e, %Y");

var margin = {top: 0, right: 20, bottom: 30, left: 75},
    width = 300 - margin.left - margin.right,
    height = 80 - margin.top - margin.bottom;

// parse the date / time
var parseTime = d3.timeParse("%Y-%m-%d");

var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

var valueline = d3.line()
    .x(d => x(d.date))
    .y(d => y(d.value));

var svg = d3.select(".dtsm-img").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

d3.csv("/data-lab-data/dts/dts.csv", function(error, data) {
  if (error) throw error;
  data.reverse();

  let groupByDate = d3.nest().key(function(d){
    return d.date;
  }).rollup(function(v) {
    return d3.sum(v, function(d) {
      return d.today;
    });
  }).entries(data);
  
  x.domain(d3.extent(data, function(d) { return groupByDate.key; }));
  y.domain([0, d3.max(data, function(d) { return groupByDate.value; })]);

  let latestDate = groupByDate[0].key;
  let latestValue = groupByDate[0].value;
  console.log(latestDate, latestValue);

  svg.append("path")
    .data([data])
    .attr("class", "line")
    .attr("d", valueline);

  let yAxis = d3.axisLeft(y).ticks(3).tickFormat(dollarFormatter);

  svg.append("g")
    .call(yAxis)
    .attr("transform", "translate(-10)");

  svg.append("circle")
    .attr("r", 7)
    .attr("stroke-width", 1)
    .attr("transform", "translate(" + (x(latestDate)) + "," + (y(latestValue)) + ")");

  d3.select(".dtsm-dollars").text(dollarFormatter(latestValue));
  d3.select(".dtsm-tas-subheader").text(dateFormatter(latestDate));
});

//function type(d) {
//p  d.date = parseTime(d.date);
//  //  d.Totals = +d.Totals * 1000000; // is this wrong? should it be fytd, mtd, and today instead? also multiply?
//  return d;
//}
