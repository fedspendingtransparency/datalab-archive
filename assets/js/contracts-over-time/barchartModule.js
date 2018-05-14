---
---

const barchartModule = (function() {
  function draw(data) {

    $("#svg-1").empty();

    const margin = { top: 10, right: 10, bottom: 30, left: 100 },
      width = $("#svg-1").width() - margin.left - margin.right,
      height = $("#svg-1").height() - margin.top - margin.bottom - 50;
    
    var x = d3
      .scaleBand()
      .range([0, width])
      .padding(0.1);
    var y = d3.scaleLinear().range([height, 0]);

    var svg = d3
      .select("#svg-1")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

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
      .transition()
      .duration(800)
      .style("opacity", 1)
      .attr("y", d => y(d.val))
      .attr("height", d => height - y(d.val));

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
      .style("font-size","10px")   
      .text("year");

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y",'-110px')
      .attr("x",0 - (height / 2))
      .attr("dy", "0vw")
      .style("font-size","10px")
      .style("text-anchor", "middle")
      .text("Total Obligations");     
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
