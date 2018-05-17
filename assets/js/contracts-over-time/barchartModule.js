---
---

const barchartModule = (function() {
  function draw(data) {

    $('.legend').empty();
    $("#svg-1").empty();

    const margin = { top: 0, right: 0, bottom: 30, left: 40 },
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

      function handleMouseOver(d) {
        tooltipModule.draw("#tooltip", d.fiscalYear, {
          "Average Spending Value": chartModule.formatNumberAsText(d.val)
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

    svg.append("text")             
      .attr("transform","translate(" + (width/2) + " ," + (height+50) + ")")
      .style("text-anchor", "middle")
      .attr("dx", "0vw")
      .style("font-size","15px")   
      .text("year");

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y",'-110px')
      .attr("x",0 - (height / 2))
      .attr("dy", "0vw")
      .style("font-size","15px")
      .style("text-anchor", "middle")
      .text("Total Obligations");     

    var svgLegned = d3.select(".legend").append("svg")
      .attr("width", width)
      .attr("height", legendHeight)
      .style("overflow","visible");
  
    var dataL = 0;
    var offset = 125;

    var legendVals = ["Yearly Average Spending"];
    
    var legend = svgLegned.selectAll('.legend')
        .data(legendVals)
        .enter().append('g')
        .attr("class", "legends")
        .attr("transform", function (d, i) {
          if (i === 0) {
            dataL = d.length + offset - 63;
            return "translate(" + (width/2 - dataL) +", 10)"
        } else { 
          var newdataL = dataL;
          dataL +=  d.length + offset;
          return "translate(" + (width/2 - dataL) + ", 10)"
        }
    })
    
    legend.append('rect')
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", "url(#mainGradient)")
    
    legend.append('text')
        .attr("x", 20)
        .attr("y", 10)
        .text(function (d, i) {
          return d
      })
        .attr("class", "textselected")
        .style("text-anchor", "start")
        .style("font-size", "10px")
    
    }

  function remove(cb) {
    d3
      .select("#svg-1")
      .selectAll("*")
      .transition()
      .duration(400)
      .style("opacity", 0)
      .remove();

    setTimeout(cb, 400);
  }

  return { draw, remove };
})();
