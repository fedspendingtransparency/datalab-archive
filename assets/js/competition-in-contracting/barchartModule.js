const barchartModule = function() {
  var svg = d3.select("#barchartSvg"),
    margin = { top: 60, right: 40, bottom: 150, left: 350 },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

  var g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  function draw(data, settings, helpers) {
    const {
      tooltipModuleDraw,
      tooltipModuleRemove,
      tooltipModuleMove,
      handleYAxisCheckboxChange,
      formatNumber
    } = helpers;

    const summaryData = data.reduce(
      (a, c) => {
        if (c.displayed) {
          a.Competed.Actions += c.competedActions;
          a.Competed.Dollars += c.competedDollars;
          a["Not Competed"].Actions += c.notCompetedActions;
          a["Not Competed"].Dollars += c.notCompetedDollars;
          a.Total.Actions += c.totalActions;
          a.Total.Dollars += c.totalDollars;
        }
        return a;
      },
      {
        Competed: {
          Actions: 0,
          Dollars: 0
        },
        "Not Competed": {
          Actions: 0,
          Dollars: 0
        },
        Total: {
          Actions: 0,
          Dollars: 0
        }
      }
    );

    summaryData["% Competed"] = {
      Actions: summaryData.Competed.Actions / summaryData.Total.Actions,
      Dollars: summaryData.Competed.Dollars / summaryData.Total.Dollars
    };

    const summaryTableHtml = Object.entries(summaryData).reduce(
      (a, c) => {
        a += `
      <tr>
        <td>${c[0]}</td>
        <td>${
          c[0] === "% Competed"
            ? formatNumber("percent", c[1].Actions)
            : formatNumber("actions", c[1].Actions)
        }</td>
        <td>${
          c[0] === "% Competed"
            ? formatNumber("percent", c[1].Dollars)
            : formatNumber("dollars", c[1].Dollars)
        }</td>
      </tr>
      `;
        return a;
      },
      `<th></th>
    <th>Actions</th>
    <th>Dollars</th>`
    );

    d3.select("#summaryTable").html(summaryTableHtml);

    g.selectAll("*").remove();

    // sort data
    let sortedData;
    if (settings.xAxisUnit === "actions") {
      if (settings.xAxisScale === "quantity") {
        sortedData = data.sort((a, b) => b.totalActions - a.totalActions);
      } else {
        sortedData = data.sort(
          (a, b) => b.percentActionsCompeted - a.percentActionsCompeted
        );
      }
      sortedData = sortedData.map(c => {
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
        sortedData = data.sort((a, b) => b.totalDollars - a.totalDollars);
      } else {
        sortedData = data.sort(
          (a, b) => b.percentDollarsCompeted - a.percentDollarsCompeted
        );
      }
      sortedData = data.map(c => {
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
    let x;
    if (settings.xAxisScale === "quantity") {
      x = d3
        .scaleLinear()
        .domain([0, d3.max(sortedData, d => (d.displayed ? d.total : 0))]);
    } else {
      x = d3.scaleLinear().domain([0, 1]);
    }
    x.range([0, width]);

    // y scale
    const y = d3
      .scaleBand()
      .rangeRound([0, height])
      .padding(0.1)
      .domain(sortedData.map(d => d.name));

    // z scale (color)
    const z = d3.scaleOrdinal().range(["#2a5da8", "#f0ca4d"]);
    const keys =
      settings.xAxisScale === "quantity"
        ? ["competed", "notCompeted"]
        : ["percentCompeted", "percentNotCompeted"];

    // title
    g
      .append("text")
      .attr("x", width / 2)
      .attr("y", 0 - margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("text-decoration", "underline")
      .text("FY17 Competition Report");

    // x axis
    let tickFormat;
    if (settings.xAxisScale === "percent") {
      tickFormat = ",.0%";
    } else {
      if (settings.xAxisUnit === "actions") {
        tickFormat = ",";
      } else {
        tickFormat = "$,";
      }
    }
    g
      .append("g")
      .attr("class", "axis axis--x")
      .attr("transform", `translate(0,${height})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(10)
          .tickFormat(d3.format(tickFormat))
      )
      .attr("class", "xTick")
      .selectAll("text")
      .style("text-anchor", "start")
      .attr("dx", ".8em")
      .attr("dy", "-.6em")
      .attr("transform", "rotate(90)")
      .attr("pointer-events", "none");

    // y axis
    g
      .append("g")
      .attr("transform", `translate(-10,0)`)
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y))
      .selectAll(".tick")
      .attr("class", "yTick");

    // y axis checkboxes
    g
      .append("g")
      .attr("class", "axis axis--y")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .append("foreignObject")
      .attr("transform", "translate(-16.5,5)")
      .attr("width", 100)
      .attr("height", 1000)
      .append("xhtml:body")
      .append("form")
      .attr("id", "yAxisCheckboxes")
      .selectAll(".yAxisCheckbox")
      .data(sortedData)
      .enter()
      .append("div")
      .style("height", "19px")
      .style("background", "white")
      .append("input")
      .attr("type", "checkbox")
      .attr("checked", d => (d.displayed ? true : null))
      .attr("class", ".yAxisCheckbox")
      .attr("id", d => `checkbox${d.id}`)
      .on("click", function(d, i) {
        const { id } = d;
        const checked = svg.select(`#checkbox${id}`).node().checked;
        handleYAxisCheckboxChange(id, checked);
      });

    // bars
    g
      .append("g")
      .selectAll(".barGroup")
      .data(d3.stack().keys(keys)(sortedData))
      .enter()
      .append("g")
      .attr("fill", d => z(d.key))
      .attr("class", "barGroup")
      .selectAll(".bar")
      .data(d => d)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d[0]))
      .attr("y", d => y(d.data.name))
      .attr("height", y.bandwidth())
      .attr("width", d => {
        if (!d.data.displayed) return 0;
        return x(d[1]) - x(d[0]);
      })
      .on("mouseover", handleMouseOver)
      .on("mousemove", handleMouseMove)
      .on("mouseout", handleMouseOut);

    // legend
    const options = ["Competed", "Not Competed"];
    var legend = g
      .append("g")
      .attr("transform", "translate(0,-50)")
      .selectAll(".legend")
      .data(options.slice())
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

  return { draw };
};
