---
---
d3.json('../../../data-lab-data/contracts-over-time/panel7.json', function (data) {

    console.log("data ", data);

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
      svgMargin2 = {top: 405, right: 0, bottom: 30, left: 40},
      width = $("#svg-2").width(),
      height = $("#svg-2").height() - svgMargin.top - svgMargin.bottom - 55,
      height2 = 80,
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
      .attr("transform", "translate(0,0)")
      .attr("clip-path", "url(#clip)");

    var focus = svg.append("g")
      .attr("class", "focus")
      .attr("transform", "translate(0,0)");

    var context = svg.append("g")
      .attr("class", "context")
      .attr("transform", "translate(0," + (svgMargin2.top + 70) + ")");

    var brush = d3.brushX()
      .extent([[0, 0], [width, height2]])
      .on("brush", brushed);

    var zoom = d3.zoom()
      .scaleExtent([1, Infinity])
      .translateExtent([[0, 0], [width, height]])
      .extent([[0, 0], [width, height]]);
   
    var verticalLineColor = d3
      .scaleOrdinal()
      .range(["#FF7C7E","#6F6F6F"])
      .domain([0, Object.keys(data.verticalLineData).length - 1]);

    context.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis2);

    // context.append("text")             
    //   .attr("transform","translate(" + (width/2) + " , 125)")
    //   .style("text-anchor", "middle")
    //   .style("font-size","15px")
    //   .attr("dx", "0vw")
    //   .text("X Axis Text");

    context.append("g")
      .attr("class", "brush")
      .call(brush)
      .call(brush.move, x.range());
    
    focus.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    function handleMouseOver(d, title) {
      tooltipModule.draw("#tooltip", title, {
        Value: chartModule.formatNumberAsText(d.val)
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
            .attr("y2", d => d.val)
            .each(function(d) {
                d.totalLength = this.getTotalLength();
            })
            .style("stroke-dasharray", ("3,3"))
            .attr("stroke-dashoffset", d => d.totalLength)
            .style("stroke-width","1px")
            .style("stroke-opacity",".6")
            .transition()
            .duration(0)
            .attr("stroke-dashoffset", "0");
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
        .style("stroke","#FF7C7E")
        .attr("x1", d => x(d.parsedDate))
        .attr("y1", height2)
        .attr("x2", d => x(d.parsedDate))
        .attr("y2", d => d.val*.177)
        .each(function(d) {
            d.totalLength = this.getTotalLength();
        })
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
        .each(function(d) {
            d.totalLength = this.getTotalLength();
        })
        .style("stroke-dasharray", ("3,3"))
        .attr("stroke-dashoffset",80)
        .style("stroke-width","1px")
        .style("stroke-opacity",".6")
        .transition()
        .duration(0)
        .attr("stroke-dashoffset", "0");

    // draw gridlines
    chartModule.drawYAxisGridlines(svg, y, width, 10);

  function brushed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
    var s = d3.event.selection || x2.range();
    x.domain(s.map(x2.invert, x2));
    // LineChart.selectAll('.line').remove();
    d3.selectAll("#svg-2 > g > g:nth-child(2) > g").remove();
    // DrawLines(0);
    DrawVerticalLines(0);
    focus.select(".axis--x").call(xAxis);
    svg.select(".zoom").call(zoom.transform, d3.zoomIdentity
        .scale(width / (s[1] - s[0]))
        .translate(-s[0], 0));
    // LineChart.selectAll('.data-point').remove();
    // DrawPoints(0);
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
        d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(2) > line").style("stroke-width","0px");
    }else if(d === "Budget Legislation"){
        d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(2) > line").style("stroke-width","1px");
        d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(1) > line").style("stroke-width","0px");
    }
  })
  .on("mouseout",() => {
      d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(1) > line").style("stroke-width","1px");
      d3.selectAll("#svg-2 > g > g:nth-child(2) > g:nth-child(2) > line").style("stroke-width","1px");
    }); 

});
    
