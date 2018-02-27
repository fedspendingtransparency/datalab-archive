"use strict";

var barchartModule = function barchartModule() {
  var svg = d3.select("#barchartSvg"),
    margin = { top: 60, right: 40, bottom: 100, left: 350 },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

  var g = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  function draw(data, settings, helpers) {
    var tooltipModuleDraw = helpers.tooltipModuleDraw,
      tooltipModuleRemove = helpers.tooltipModuleRemove,
      tooltipModuleMove = helpers.tooltipModuleMove,
      handleYAxisCheckboxChange = helpers.handleYAxisCheckboxChange;
    var _helperFunctionModule = helperFunctionModule,
      formatNumber = _helperFunctionModule.formatNumber;

    summaryTableModule.draw(data);

    g.selectAll("*").remove();

    // sort data
    var sortedData = void 0;
    if (settings.xAxisUnit === "actions") {
      if (settings.xAxisScale === "quantity") {
        sortedData = data.sort(function(a, b) {
          return b.totalActions - a.totalActions;
        });
      } else {
        sortedData = data.sort(function(a, b) {
          return b.percentActionsCompeted - a.percentActionsCompeted;
        });
      }
      sortedData = sortedData.map(function(c) {
        return {
          name: c.name,
          total: c.totalActions,
          competed: c.competedActions,
          notCompeted: c.notCompetedActions,
          percentCompeted: c.percentActionsCompeted,
          percentNotCompeted: 1 - c.percentActionsCompeted,
          id: c.id,
          displayed: c.displayed
        };
      });
    } else {
      if (settings.xAxisScale === "quantity") {
        sortedData = data.sort(function(a, b) {
          return b.totalDollars - a.totalDollars;
        });
      } else {
        sortedData = data.sort(function(a, b) {
          return b.percentDollarsCompeted - a.percentDollarsCompeted;
        });
      }
      sortedData = data.map(function(c) {
        return {
          name: c.name,
          total: c.totalDollars,
          competed: c.competedDollars,
          notCompeted: c.notCompetedDollars,
          percentCompeted: c.percentDollarsCompeted,
          percentNotCompeted: 1 - c.percentDollarsCompeted,
          id: c.id,
          displayed: c.displayed
        };
      });
    }

    // x scale
    var x = void 0;
    if (settings.xAxisScale === "quantity") {
      x = d3.scale.linear().domain([
        0,
        d3.max(sortedData, function(d) {
          return d.displayed ? d.total : 0;
        })
      ]);
    } else {
      x = d3.scale.linear().domain([0, 1]);
    }
    x.range([0, width]);

    // y scale
    var y = d3.scale
      .ordinal()
      .rangeRoundBands([0, height], 0.1)
      // .padding(0.1)
      .domain(
        sortedData.map(function(d) {
          return d.name;
        })
      );

    // z scale (color)
    var z = d3.scale.ordinal().range(["#0071bc", "#D334BA"]);
    var keys =
      settings.xAxisScale === "quantity"
        ? ["competed", "notCompeted"]
        : ["percentCompeted", "percentNotCompeted"];

    // x axis
    var tickFormat = void 0;
    if (settings.xAxisScale === "percent") {
      tickFormat = ",.0%";
    } else {
      if (settings.xAxisUnit === "actions") {
        tickFormat = ",";
      } else {
        tickFormat = "$,";
      }
    }
    var ticklength = 525;
    g
      .append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + (height - ticklength) + ")")
      .call(
        d3.svg
          .axis()
          .scale(x)
          .orient("bottom")
          // .ticks(10)
          .tickFormat(d3.format(tickFormat))
          .tickSize(ticklength)
      )
      .attr("class", "xTick")
      .selectAll("text")
      .style("text-anchor", "end")
      .style("font-size", "12px")
      .attr("transform", "rotate(-35) translate(-295,-95)")
      .attr("dx", "-.8em")
      // .attr("dy", ".35em")
      .attr("pointer-events", "none");

    // y axis
    g
      .append("g")
      .attr("transform", "translate(-12,0)")
      .attr("class", "axis axis--y")
      .call(
        d3.svg
          .axis()
          .orient("left")
          .scale(y)
      )
      .selectAll(".tick")
      .attr("class", "yTick")
      .selectAll("text")
      .style("font-size", "12px");

    // y axis checkboxes
    g
      .append("g")
      .attr("class", "axis axis--y")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .append("foreignObject")
      .attr("transform", "translate(-21,0)")
      .attr("width", 100)
      .attr("height", 1000)
      .append("xhtml:body")
      .append("form")
      .attr("id", "yAxisCheckboxes")
      .selectAll(".yAxisCheckbox")
      .data(sortedData)
      .enter()
      .append("div")
      .style("height", "21px")
      .style('width', '25px')
      .style("background", "white")
      .append("input")
      .attr("type", "checkbox")
      .attr("checked", function(d) {
        return d.displayed ? true : null;
      })
      .attr("class", ".yAxisCheckbox")
      .attr("id", function(d) {
        return "checkbox" + d.id;
      })
      .on("click", function(d, i) {
        var id = d.id;

        var checked = svg.select("#checkbox" + id).node().checked;
        handleYAxisCheckboxChange(id, checked);
      });

    var stackedDataset = d3.layout.stack()(
      keys.map(function(key) {
        return sortedData.map(function(d) {
          return {
            y: d[key],
            x: d.name,
            displayed: d.displayed,
            data: d
          };
        });
      })
    );

    // bars
    g
      .append("g")
      .selectAll(".barGroup")
      .data(stackedDataset)
      .enter()
      .append("g")
      .attr("fill", function(d, i) {
        return z(keys[i]);
      })
      .attr("class", "barGroup")
      .selectAll(".bar")
      .data(function(d) {
        return d;
      })
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function(d) {
        return x(d.y0);
      })
      .attr("y", function(d) {
        return y(d.x);
      })
      .attr("height", y.rangeBand())
      .attr("width", function(d) {
        if (!d.displayed) return 0;
        return x(d.y0 + d.y) - x(d.y0);
      })
      .on("mouseover", handleMouseOver)
      .on("mousemove", handleMouseMove)
      .on("mouseout", handleMouseOut);

    // legend
    var options = ["Competed", "Not Competed"];
    var legend = g
      .append("g")
      .attr("transform", "translate(0,-50)")
      .selectAll(".legend")
      .data(options)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) {
        return "translate(0," + i * 20 + ")";
      });

    legend
      .append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", z);

    legend
      .append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .style("font-size", "12px")
      .text(function(d) {
        return d;
      });

    function handleMouseOver(d) {
      tooltipModuleDraw(d.data.name, {
        Competed:
          settings.xAxisUnit === "dollars"
            ? formatNumber("dollars", d.data.competed)
            : formatNumber("actions", d.data.competed),
        "Not Competed":
          settings.xAxisUnit === "dollars"
            ? formatNumber("dollars", d.data.notCompeted)
            : formatNumber("actions", d.data.notCompeted),
        "Percent Competed": formatNumber("percent", d.data.percentCompeted)
      });
    }

    function handleMouseOut() {
      tooltipModuleRemove();
    }

    function handleMouseMove() {
      tooltipModuleMove();
    }
  }

  return { draw: draw };
};
