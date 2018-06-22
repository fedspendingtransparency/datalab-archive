---
---

const barchartModule = (function() {
  function draw(data) {

    $('.subTitleDiv').empty();
    $('.legend').empty();
    $("#svg-1").empty();

    const margin = { top: 0, right: 0, bottom: 30, left: 0 },
      width = $("#svg-1").width() - margin.left - margin.right,
      height = $("#svg-1").height() - margin.top - margin.bottom - 50,
      legendHeight = 33;

    var x = d3
      .scaleBand()
      .range([0, width])
      .padding(0.1);
    var y = d3.scaleLinear().range([height, 0]);

    var svg = d3
      .select("#svg-1")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var svgDefs = svg.append('defs');

    var mainGradient = svgDefs.append('linearGradient')
        .attr('id', 'mainGradient')
        .attr('x1', "0%")
        .attr('y1', "0%")
        .attr('x2',"100%")
        .attr('y2',"100%")
        .attr('spreadMethod', "pad");

    // Create the stops of the main gradient. Each stop will be assigned
    // a class to style the stop using CSS.
    mainGradient.append('stop')
        .attr('class', 'stop-top')
        .attr('offset', '0%');

    mainGradient.append('stop')
        .attr('class', 'stop-bottom')
        .attr('offset', '100%');

    x.domain(data.map(d => d.fiscalYear));
    y.domain([0, d3.max(data, d => d.val)]);

    const bar = svg.selectAll(".bar").data(data);

    bar
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.fiscalYear))
      .attr("width", x.bandwidth())
      .attr("y", height)
      .attr("height", 0)
      .style("opacity", 0)
      .on("mouseover",function(d){
        d3.selectAll('#svg-1 > g > rect')
          .classed('active',true);
        d3.select(this)
          .classed('active',false);
        handleMouseOver(d);
      })
      .on("mouseout", function(){
        d3.selectAll('#svg-1 > g > rect')
        .classed('active',false);
        handleMouseOut();
      })
      .on("mousemove", handleMouseMove)
      .transition()
      .duration(800)
      .style("opacity", 1)
      .attr("y", d => y(d.val))
      .attr("height", d => height - y(d.val));

      var TooltipFormatNumberAsText = d =>
      d3.format("$.2s")(d)
        .replace("G", " Billion")
        .replace("M", " Million");

      function handleMouseOver(d) {
        tooltipModule.draw("#tooltip", d.fiscalYear, {
          "Total Contract Spending Value": TooltipFormatNumberAsText(d.val)
        });
      }

      function handleMouseOut() {
        tooltipModule.remove("#tooltip");
      }

      function handleMouseMove() {
        tooltipModule.move("#tooltip");
      }

    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .style("opacity", 0)
      .transition()
      .duration(800)
      .style("opacity", 1);

    svg
      .append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y).tickFormat(chartModule.formatNumberAsText))
      .style("opacity", 0)
      .transition()
      .duration(800)
      .style("opacity", 1);

    var subTitle = d3.select('.subTitleDiv')
      .append("div")
      .attr("class","subTitle")
      .attr("height","25px")
      .attr("width","100%")
      .text("How does spending on federal contracts change over the past 10 years?");

    var legendVals = ["Total Contract Spending"];

    var legend = d3.select('.legend').selectAll("legends")
      .data(legendVals)
      .enter().append("div")
      .attr("class","legends");

    var p = legend.append("p").attr("class","title")
    p.append("span").attr("class","key-dot").style("background","#1A8FBF");
    p.insert("text").attr("class","title").text(function(d,i) { return d } );

    }

  function remove(cb) {
    d3
      .select("#svg-1")
      .selectAll("*")
      .transition()
      .duration(400)
      .style("opacity", 0)
      .remove();

    $('.legend').empty();
    $('.subTitleDiv').empty();

    setTimeout(cb, 400);
  }

  return { draw, remove };
})();
