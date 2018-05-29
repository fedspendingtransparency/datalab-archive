---
---
d3.json('../../../data-lab-data/contracts-over-time/panel7.json', function (data) {

    $("#svg-2").empty();

    function setDimsOfSvg(id) {
        const windowWidth = $(window).width();
        const windowHeight = $(window).height();
        const windowMargin = 50;
    
        const svgHeight = windowHeight - 2 * windowMargin;
        const svgWidth = windowWidth - 2 * windowMargin;
    
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
    
      setDimsOfSvg("#svg-2");

    const svgMargin = { top: 20, right: 0, bottom: 80, left: 40 },
      height = $("#svg-2").height() - svgMargin.top - svgMargin.bottom - 55,
      height2 = 80,
      svgMargin2 = {top: (height+20), right: 0, bottom: "auto", left: 40},
      width = $("#svg-2").width(),
      legendHeight = 50;

    var parseDate = d3.timeParse("%Y-%m-%d");

    // Add SVG
    var svg = d3
      .select("#svg-2")
      .append("g")
      .attr('class','frame')
      .attr('max-width','70%')
      .attr("transform", `translate(0,${svgMargin.top})`);

    d3.select(".timelineContainer").attr("transform", 'translate(-300,0)');
    d3.select(".timleine").attr("transform", 'translate(225,200)');

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

    // Scale the domains
    x.domain(d3.extent(combinedLineData, d => d.parsedDate));
    y.domain([0, d3.max(combinedLineData, d => d.val)]);
    x2.domain(x.domain());
    y2.domain(y.domain());

    let xAxis = d3.axisBottom(x);

    let xAxis2 = d3.axisBottom(x2);

    var clip = svg.append("defs").append("svg:clipPath")
      .attr("id", "clip")
      .append("svg:rect")
      .attr("width", width)
      .attr("height", height)
      .attr("x", 0)
      .attr("y", 0); 

    var LineChart = svg.append("g")
      .attr("class", "focus")
      .attr("transform", "translate(0,0)");

    var focus = svg.append("g")
      .attr("class", "focus")
      .attr("transform", "translate(0,0)");

    var context = svg.append("g")
      .attr("class", "context")
      .attr("transform", "translate(0," + svgMargin2.top + ")");

    var brush = d3.brushX()
      .extent([[0, 0], [width, height2]])
      .on("brush", brushed);
   
    var verticalLineColor = d3
      .scaleOrdinal()
      .range(["#FF7C7E","#6F6F6F"])
      .domain([0, Object.keys(data.verticalLineData).length - 1]);

    context.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis2);

    context.append("g")
      .attr("class", "brush")
      .call(brush)
      .call(brush.move, x.range());
    
    focus.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

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
            .attr("y2", d => d.val)
            .style("stroke-dasharray", ("3,3"))
            .attr("stroke-dashoffset", d => d.totalLength)
            .style("stroke-width","1px")
            .style("stroke-opacity","1")
            .transition()
            .duration(0)
            .attr("stroke-dashoffset", "0");

           LineChart
            .append("g")
            .attr("class", "vertical-line-tags")
            .selectAll(`.vertical-line-tag${i}`)
            .data(l[1])
            .enter()
            .append("rect")
                .attr("class", `.vertical-line-tag${i}`)
                .style("fill", () => verticalLineColor(i))
                .attr("x", d => x(d.parsedDate))
                .attr("y", d => d.val-(height*.1))
                .attr("height", (height*.1)+"px")
                .attr("width",(width*.2)+"px");

            LineChart
              .append("g")
              .attr("class", ".vertical-line-text")
              .selectAll(`.vertical-line-text${i}`)
              .data(l[1])
              .enter()
              .append("text")
                .attr("class", `.vertical-line-text${i}`)
                .attr("x", d => x(d.parsedDate)+10)
                .attr("y", d => d.val-(height*.065))
                .attr("height", (height*.1)+"px")
                .attr("width",(width*.15)+"px")
                .text(() => ` ${l[1][i]["date"]}`);

            LineChart
              .append("g")
              .attr("class", ".vertical-line-title")
              .selectAll(`.vertical-line-title${i}`)
              .data(l[1])
              .enter()
              .append("text")
                .attr("class", `.vertical-line-title${i}`)
                .attr("x", d => x(d.parsedDate)+10)
                .attr("y", d => d.val-(height*.025))
                .attr("height", (height*.1)+"px")
                .attr("width",(width*.15)+"px")
                .text(() => `${l[0]}`);
        });
    }

    // draw data points
    function DrawPoints(){
      Object.entries(data.verticalLineData).forEach((l, i) => {
          console.log("i ",i);
        LineChart
          .append("g")
          .attr("class", "data-points")
          .selectAll(".data-point")
          .data(l[1])
          .enter()
          .append("circle")
          .attr("class", "data-point")
          .style("stroke", () => verticalLineColor(i))
          .style("fill", () => verticalLineColor(i))
          .attr("cx", d => x(d.parsedDate))
          .attr("cy", (height*.99))
          .attr("r", 5);

      });
    }

    context
        .append("g")
        .attr("class", "vertical-line-paths")
        .selectAll('.vertical-line-0')
        .data(data.verticalLineData["Budget Legislation"])
        .enter()
        .append("line")
        .attr("class", '.vertical-line-0')
        .style("stroke","#6F6F6F")
        .attr("x1", d => x(d.parsedDate))
        .attr("y1", height2)
        .attr("x2", d => x(d.parsedDate))
        .attr("y2", d => d.val*.177)
        .style("stroke-dasharray", ("3,3"))
        .attr("stroke-dashoffset",80)
        .style("stroke-width","1px")
        .style("stroke-opacity",".6");
    
    context
        .append("g")
        .attr("class", "vertical-line-paths")
        .selectAll('.vertical-line-1')
        .data(data.verticalLineData["Continuing Resolution"])
        .enter()
        .append("line")
        .attr("class", '.vertical-line-1')
        .style("stroke","#FF7C7E")
        .attr("x1", d => x(d.parsedDate))
        .attr("y1", height2)
        .attr("x2", d => x(d.parsedDate))
        .attr("y2", d => d.val*.177)
        .style("stroke-dasharray", ("3,3"))
        .attr("stroke-dashoffset",80)
        .style("stroke-width","1px")
        .style("stroke-opacity","1");

    context
        .append("g")
        .attr("class", "vertical-line-tags")
        .selectAll(`.vertical-line-tag0`)
        .data(data.verticalLineData["Budget Legislation"])
        .enter()
        .append("rect")
            .attr("class", `.vertical-line-tag0`)
            .style("fill", "#6F6F6F")
            .attr("x", d => x(d.parsedDate))
            .attr("y", d => d.val*.177-(height2*.1))
            .attr("height", (height2*.1)+"px")
            .attr("width",(width*.025)+"px")
            .style("border-radius", "25px")
            .style("stroke-width","1px")
            .style("fill-opacity","1");

    context
        .append("g")
        .attr("class", "vertical-line-tags")
        .selectAll(`.vertical-line-tag1`)
        .data(data.verticalLineData["Continuing Resolution"])
        .enter()
        .append("rect")
            .attr("class", `.vertical-line-tag1`)
            .style("fill", "#FF7C7E")
            .attr("x", d => x(d.parsedDate))
            .attr("y", d => d.val*.177-(height2*.1))
            .attr("height", (height2*.1)+"px")
            .attr("width",(width*.025)+"px")
            .style("border-radius", "25px")
            .style("stroke-width","1px")
            .style("opacity","1")
            .style("z-index","999");

    // draw gridlines
    // chartModule.drawYAxisGridlines(svg, y, width, 10);

    

  function brushed() {
    var s = d3.event.selection || x2.range();
    x.domain(s.map(x2.invert, x2));
    // LineChart.selectAll('.line').remove();
    d3.selectAll("#svg-2 > g > g:nth-child(2) > g").remove();
    // DrawLines(0);
    DrawVerticalLines();
    focus.select(".axis--x").call(xAxis);
    LineChart.selectAll('.data-point').remove();
    DrawPoints();
  }
  
  var legendVals2 = Object.keys(data.verticalLineData);

  var legend2 = d3.select('.timelineLegend').selectAll("tlegends")
    .data(legendVals2)
    .enter().append("div")
    .attr("class","tlegends");
  
  var k = legend2.append("p").attr("class","title");

  k.append("span").attr("class","key-dot").style("background",function(d,i) {
    return d === "Continuing Resolution" ? "#FF7C7E" : "#6F6F6F"; 
  });

  k.insert("text").attr("class","title").text(function(d,i) { return d } );

  k.on("mouseover",(d) => {
      console.log(d);
    if(d === "Continuing Resolution"){
        d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(1) > line").style("stroke-width","1px");
        d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(5) > line").style("stroke-width","0px");
        d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(6) > rect").style("opacity","0");
        d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(10) > circle").style("opacity","0");
    }else if(d === "Budget Legislation"){
        d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(5) > line").style("stroke-width","1px");
        d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(1) > line").style("stroke-width","0px");
        d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(2) > rect").style("opacity","0");
        d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(9) > circle").style("opacity","0");
    }
  })
  .on("mouseout",() => {
      d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(1) > line").style("stroke-width","1px");
      d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(5) > line").style("stroke-width","1px");
      d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(6) > rect").style("opacity","1");
      d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(2) > rect").style("opacity","1");
      d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(10) > circle").style("opacity","1");
      d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(9) > circle").style("opacity","1");
    }); 

});
    
