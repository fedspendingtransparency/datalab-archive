"use strict";

var summartTableModule = (function() {
  function draw(data) {
    var _helperFunctionModule = helperFunctionModule,
      formatNumber = _helperFunctionModule.formatNumber;

    var summaryData = data.reduce(
      function(a, c) {
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

    var summaryTableHtml = Object.entries(summaryData).reduce(function(a, c) {
      a +=
        "\n      <tr>\n        <td>" +
        c[0] +
        "</td>\n        <td>" +
        (c[0] === "% Competed"
          ? formatNumber("percent", c[1].Actions)
          : formatNumber("actions", c[1].Actions)) +
        "</td>\n        <td>" +
        (c[0] === "% Competed"
          ? formatNumber("percent", c[1].Dollars)
          : formatNumber("dollars", c[1].Dollars)) +
        "</td>\n      </tr>\n      ";
      return a;
    }, "<th></th>\n    <th>Actions</th>\n    <th>Dollars</th>");

    d3.select("#summaryTable").html(summaryTableHtml);
  }

  return { draw: draw };
})();
