---
---

function draw(data) {

    const svgMargin = {top: 0, right: 20, bottom: 30, left: 75},
      width = 300 - svgMargin.left - svgMargin.right,
      height = 80 - svgMargin.top - svgMargin.bottom;

    var parseDate = d3.timeParse("%Y-%m-%d");
    const dollarFormatter = d => d3.format("$,.2s")(d).replace(/G/,"B");
    // const dateFormatter = d3.timeFormat("%B %e, %Y");

    // Add SVG
    var svg = d3.select(".dtsm-img").append("svg")
        .attr("width", width + svgMargin.left + svgMargin.right)
        .attr("height", height + svgMargin.top + svgMargin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + svgMargin.left + "," + svgMargin.top + ")");

    data.forEach(function(d){
        d.parsedDate = parseDate(d.date)
        d.val = +d.Totals * 1000000
    });

    console.log("data for each: ",data)

    // const data = Object.entries(data).reduce((a, c) => {
    //     const a2 = [...a, ...c[1]];
    //     return a2;
    // }, []);

    // line value ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // define the lines
    var totalspend = d3
        .line()
        .x(d => x(d.parsedDate))
        .y(d => y(d.val));
    
    // Scale the domains
    x.domain(d3.extent(data, d => d.parsedDate));
    y.domain([0, d3.max(data, d => d.val)]);

    let xAxis = d3.axisBottom(x)
    .tickFormat(d3.timeFormat("%B"))
    .ticks(2);

    let yAxis = d3.axisLeft(y)
    .tickFormat(dollarFormatter)
    .ticks(3)
    .tickPadding(6);

    svg.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis.tickFormat(d3.timeFormat("%B")).ticks(2));

    svg.append("g")
      .attr("class", "axis axis--y")
      .call(yAxis.tickFormat(dollarFormatter).ticks(3).tickPadding(6));   

    // draw lines
    svg
        .append("g")
        .attr("class", "line-paths")
        .selectAll(".line")
        .data([data])
        .enter()
        .append("path")
        .attr("class", "line")
        .style("stroke", "#027693")
        .style("stroke-width", "2px")
        .attr("d", totalspend)
        // .each(function(d) {
        //     d.totalLength = this.length();
        //     console.log(d.totalLength)
        // })
        // .attr("stroke-dasharray", d => d.totalLength)
        // .attr("stroke-dashoffset", d => d.totalLength)
        // .attr("stroke-dashoffset", "0");
    };


d3.csv("/data-lab-data/dts/recent_30.csv", function(error, data) {
  if (error) throw error;
  console.log("data: ",data)
  draw(data);

});