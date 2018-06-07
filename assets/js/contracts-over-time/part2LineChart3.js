---
---

d3.json('../../../data-lab-data/contracts-over-time/panel8.json', (data) => {

    function setDimsOfSvg(id) {
        const windowWidth = $(window).width();
        const windowHeight = $(window).height();
        const windowMargin = 50;
    
        const svgHeight = windowHeight - windowMargin;
        const svgWidth = windowWidth - 4 * windowMargin;
    
        $(id)
          .attr("height", svgHeight)
          .attr("width", svgWidth);
    
        $("<style>")
        .prop("type", "text/css")
        .html(`
          .fixed {top: ${windowMargin}px;}
          .left {height: ${svgHeight}px;}
        `)
        .appendTo("head");
      }
    
    setDimsOfSvg("#svg-5");

    const svgMargin = { top: 20, right: 0, bottom: 80, left: 200 },
      height = $("#svg-5").height() - svgMargin.top - svgMargin.bottom - 55,
      height2 = 80,
      svgMargin2 = {top: (height+20), right: 0, bottom: "auto", left: 200},
      width = $("#svg-5").width() - svgMargin.right - svgMargin.left,
      legendHeight = 50;

    var parseDate = d3.timeParse("%Y-%m-%d");

    // Add SVG
    var svg = d3
      .select("#svg-5")
      .html('<defs><clipPath id="clipPath3"><rect x="0" y="0" width="1024" height="495"></rect></clipPath></defs>')
      .append("g")
      .attr('class','frame')
      .attr('max-width','70%')
      .attr("transform", `translate(${svgMargin.left},${svgMargin.top})`);

    Object.entries(data.lineData).forEach(d =>
      d[1].forEach(e => (e.parsedDate = parseDate(e.date)))
    );
    Object.entries(data.verticalLineData).forEach(d =>
      d[1].forEach(e => (e.parsedDate = parseDate(e.date)))
    );

    const combinedLineData = Object.entries(data.lineData).reduce((a, c) => {
      const a2 = [...a, ...c[1]];
      return a2;
    }, []);

    // line value ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);
    var x2 = d3.scaleTime().range([0, width]);
    var y2 = d3.scaleLinear().range([height2, 0]);

    // define the lines
    var line = d3
      .line()
      .x(d => x(d.parsedDate))
      .y(d => y(d.val));
    
    var line2 = d3
      .line()
      .x(d => x2(d.parsedDate))
      .y(d => y2(d.val));

    // Scale the domains
    x.domain(d3.extent(combinedLineData, d => d.parsedDate));
    y.domain([0, d3.max(combinedLineData, d => d.val)]);
    x2.domain(x.domain());
    y2.domain(y.domain());

    let xAxis = d3.axisBottom(x);

    let xAxis2 = d3.axisBottom(x2);

    let yAxis = d3.axisLeft(y)
      .ticks(10)
      .tickFormat(chartModule.formatNumberAsText);

    var LineChart = svg.append("g")
      .attr("class", "focus")
      .attr("transform", "translate(0,0)")
      .style("clip-path", "url(#clipPath3)");

    var focus = svg.append("g")
      .attr("class", "focus")
      .attr("transform", "translate(0,0)");

    var context = svg.append("g")
      .attr("class", "context")
      .attr("transform", "translate(0," + svgMargin2.top + ")");

    var brush = d3.brushX()
      .extent([[0, 0], [width, height2]])
      .on("brush", brushed);

    var zoom = d3.zoom()
      .scaleExtent([1, Infinity])
      .translateExtent([[0, 0], [width, height]])
      .extent([[0, 0], [width, height]]);
    
    var lineColor = d3
        .scaleOrdinal()
        .range(["#009292","#9C27B0","#FF7043","#E91E63"])
        .domain([0, Object.keys(data.lineData).length - 1]);

    var verticalLineColor = d3
      .scaleOrdinal()
      .range(["#FF7C7E","#6F6F6F"])
      .domain([0, Object.keys(data.verticalLineData).length - 1]);

    context.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis2);

    context.append("text")             
      .attr("transform","translate(" + (width/2) + " , 125)")
      .style("text-anchor", "middle")
      .style("font-size","15px")
      .attr("dx", "0vw")
      .text("Fiscal Year 2007 - 2017");

    context.append("g")
      .attr("class", "brush")
      .call(brush)
      .call(brush.move, x.range());
    
    focus.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    focus.append("g")
      .attr("class", "axis axis--y")
      .call(yAxis);

    focus.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y",'-110px')
      .attr("x",0 - (height / 2))
      .attr("dy", "0vw")
      .style("font-size","15px")
      .style("text-anchor", "middle")
      .text("Total Obligations");     

    // draw lines
    function DrawLines(){
      return LineChart
        .append("g")
        .attr("class", "line-paths")
        .selectAll(".line")
        .data(Object.entries(data.lineData))
        .enter()
        .append("path")
        .attr("class", "line")
        .style("stroke", (d, i) => lineColor(i))
        .attr("d", d => line(d[1]))
        .each(function(d) {
          d.totalLength = this.getTotalLength();
        })
        .attr("stroke-dasharray", d => d.totalLength)
        .attr("stroke-dashoffset", d => d.totalLength)
        .transition()
        .duration(0)
        .attr("stroke-dashoffset", "0");
      };

    context
      .append("g")
      .attr("class", "line-paths")
      .selectAll(".line")
      .data(Object.entries(data.lineData))
      .enter()
      .append("path")
      .attr("class", "line")
      .style("stroke", (d, i) => lineColor(i))
      .attr("d", d => line2(d[1]))
      .each(function(d) {
        d.totalLength = this.getTotalLength();
      })
      .attr("stroke-dasharray", d => d.totalLength)
      .attr("stroke-dashoffset", d => d.totalLength)
      .transition()
      .duration(0)
      .attr("stroke-dashoffset", "0");

    // draw data points
    function DrawPoints(){
      Object.entries(data.lineData).forEach((l, i) => {
          
        LineChart
          .append("g")
          .attr("class", "data-points")
          .selectAll(".data-point")
          .data(l[1])
          .enter()
          .append("circle")
          .attr("class", "data-point")
          .style("stroke", (d, i) => lineColor(i))
          .attr("cx", d => x(d.parsedDate))
          .attr("cy", d => y(d.val))
          .attr("r", 2)
          .attr("opacity", "0")
          .on("mouseover", d => handleMouseOver(d, l[0]))
          .on("mouseout", handleMouseOut)
          .on("mousemove", handleMouseMove);
      });
    }

    var TooltipFormatNumberAsText = d =>
      d3.format("$.2s")(d)
        .replace("G", " Billion")
        .replace("M", " Million");

    function handleMouseOver(d, title) {
      tooltipModule.draw("#tooltip", title, {
        Value: TooltipFormatNumberAsText(d.val)
      });
    }

    function handleMouseOut() {
      tooltipModule.remove("#tooltip");
    }

    function handleMouseMove() {
      tooltipModule.move("#tooltip");
    }

    function DrawVerticalLines(){
        // draw vertical lines
        Object.entries(data.verticalLineData).forEach((l, i) => {
            LineChart
            .append("g")
            .attr("class", "vertical-line-paths")
            .selectAll(`.vertical-line-${i}`)
            .data(l[1])
            .enter()
            .append("line")
            .attr("class", `.vertical-line-${i}`)
            .style("stroke", () => verticalLineColor(i))
            .attr("x1", d => x(d.parsedDate))
            .attr("y1", height)
            .attr("x2", d => x(d.parsedDate))
            .attr("y2", 0)
            .style("stroke-dasharray", ("3,3"))
            .attr("stroke-dashoffset", d => d.totalLength)
            .style("stroke-width","1px")
            .style("stroke-opacity",".6")
            .transition()
            .duration(0)
            .attr("stroke-dashoffset", "0");
        });
    }
  
  if(data.verticalLineData["Budget Legislation"]){
    
    context
        .append("g")
        .attr("class", "vertical-line-paths")
        .selectAll('.vertical-line-0')
        .data(data.verticalLineData["Budget Legislation"])
        .enter()
        .append("line")
        .attr("class", '.vertical-line-0')
        .style("stroke","#FF7C7E")
        .attr("x1", d => x(d.parsedDate))
        .attr("y1", height2)
        .attr("x2", d => x(d.parsedDate))
        .attr("y2", d => d.val*.177)
        .style("stroke-dasharray", ("3,3"))
        .attr("stroke-dashoffset",80)
        .style("stroke-width","1px")
        .style("stroke-opacity",".6")
        .transition()
        .duration(0)
        .attr("stroke-dashoffset", "0");

    context
        .append("g")
        .attr("class", "vertical-line-paths")
        .selectAll('.vertical-line-1')
        .data(data.verticalLineData["Continuing Resolution"])
        .enter()
        .append("line")
        .attr("class", '.vertical-line-1')
        .style("stroke","#6F6F6F")
        .attr("x1", d => x(d.parsedDate))
        .attr("y1", height2)
        .attr("x2", d => x(d.parsedDate))
        .attr("y2", d => d.val*.177)
        .style("stroke-dasharray", ("3,3"))
        .attr("stroke-dashoffset",80)
        .style("stroke-width","1px")
        .style("stroke-opacity",".6")
        .transition()
        .duration(0)
        .attr("stroke-dashoffset", "0");
  }

    // draw gridlines
    chartModule.drawYAxisGridlines(svg, y, width, 10);

  function brushed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
    var s = d3.event.selection || x2.range();
    x.domain(s.map(x2.invert, x2));
    LineChart.selectAll('.line').remove();
    d3.selectAll("#svg-5 > g > g:nth-child(1) > g").remove();
    DrawLines(0);
    DrawVerticalLines(0);
    focus.select(".axis--x").call(xAxis);
    svg.select(".zoom").call(zoom.transform, d3.zoomIdentity
        .scale(width / (s[1] - s[0]))
        .translate(-s[0], 0));
    LineChart.selectAll('.data-point').remove();
    DrawPoints(0);
  }

  var legendVals = Object.keys(data.lineData);
  var legendVals2 = Object.keys(data.verticalLineData);

  var legend = d3.select('.part2legend3').selectAll("legends")
    .data(legendVals)
    .enter().append("div")
    .attr("class","legends");
  
  var p = legend.append("p").attr("class","title")
  p.append("span").attr("class","key-dot").style("background",function(d,i) { return lineColor(i) } );
  p.insert("text").attr("class","title").text(function(d,i) { return d } );

  var legendWidth = 200;

  $(".part2legend3 > div > label > input:checkbox").on("click", (e) => {
    var checkedVals = [];
     checkedVals = $('.box3:checkbox:checked').map(function () {
        return this.value;
    }).get();

    console.log("checked vals: ", checkedVals);
    if(checkedVals.length===2){
        d3.selectAll("#svg-5 > g > g:nth-child(1) > g:nth-child(3) > line").style("stroke-width","1px");
        d3.selectAll("#svg-5 > g > g:nth-child(1) > g:nth-child(2) > line").style("stroke-width","1px");
    }else if(checkedVals[0]==="resolution"){
        d3.selectAll("#svg-5 > g > g:nth-child(1) > g:nth-child(2) > line").style("stroke-width","1px");
        d3.selectAll("#svg-5 > g > g:nth-child(1) > g:nth-child(3) > line").style("stroke-width","0px");
    }else if(checkedVals[0]==="budget"){
        d3.selectAll("#svg-5 > g > g:nth-child(1) > g:nth-child(3) > line").style("stroke-width","1px");
        d3.selectAll("#svg-5 > g > g:nth-child(1) > g:nth-child(2) > line").style("stroke-width","0px");
    }else{
        d3.selectAll("#svg-5 > g > g:nth-child(1) > g:nth-child(3) > line").style("stroke-width","0px");
        d3.selectAll("#svg-5 > g > g:nth-child(1) > g:nth-child(2) > line").style("stroke-width","0px");
    }
});
  
  p.on("mouseover",(d) => {
    if (d === "Equipment/Facilities/Construction/Vehicles"){
      d3.selectAll("#svg-5 > g > g > g.line-paths > path").style("stroke-width","0px");
      d3.select("#svg-5 > g > g > g.line-paths > path:nth-child(1)").style("stroke-width","1px");
      d3.selectAll("#svg-5 > g > g.context > g.line-paths > path").style("stroke-width","0px");
      d3.select("#svg-5 > g > g.context > g.line-paths > path:nth-child(1)").style("stroke-width","1px");
    }else if (d === "Professional Services"){
      d3.selectAll("#svg-5 > g > g > g.line-paths > path").style("stroke-width","0px");
      d3.select("#svg-5 > g > g > g.line-paths > path:nth-child(2)").style("stroke-width","1px");
      d3.selectAll("#svg-5 > g > g.context > g.line-paths > path").style("stroke-width","0px");
      d3.select("#svg-5 > g > g.context > g.line-paths > path:nth-child(2)").style("stroke-width","1px");
    }else if (d === "Telecomm & IT"){
      d3.selectAll("#svg-5 > g > g > g.line-paths > path").style("stroke-width","0px");
      d3.select("#svg-5 > g > g > g.line-paths > path:nth-child(3)").style("stroke-width","1px");
      d3.selectAll("#svg-5 > g > g.context > g.line-paths > path").style("stroke-width","0px");
      d3.select("#svg-5 > g > g.context > g.line-paths > path:nth-child(3)").style("stroke-width","1px");
    }else if (d === "Weapons"){
      d3.selectAll("#svg-5 > g > g > g.line-paths > path").style("stroke-width","0px");
      d3.select("#svg-5 > g > g > g.line-paths > path:nth-child(4)").style("stroke-width","1px");
      d3.selectAll("#svg-5 > g > g.context > g.line-paths > path").style("stroke-width","0px");
      d3.select("#svg-5 > g > g.context > g.line-paths > path:nth-child(4)").style("stroke-width","1px");
    }
  })
  .on("mouseout",() => d3.selectAll("#svg-5 > g > g > g.line-paths > path").style("stroke-width","1px"));
});
