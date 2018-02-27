"use strict";

var summaryTableModule = (function() {
  function draw(data) {
    var _helperFunctionModule = helperFunctionModule,
      formatNumber = _helperFunctionModule.formatNumber;

    var summaryData = data.reduce(
      function(a, c) {
        if (c.displayed) {
          a["Competed"] += c.competedDollars;
          a["Not Competed"] += c.notCompetedDollars;
          a["Actions"] = c.competedActions;
          a["NC Actions"] = c.notCompetedActions;
        }
        return a;
      },
      {
        Competed: 0,
        "Not Competed": 0,
        "Actions":0,
        "NC Actions":0
      }
    );
    console.log("data: ",summaryData)
    d3
      .select("#competed-dollars")
      .text(formatNumber("dollars text", summaryData.Competed));

    d3
      .select("#competed-actions")
      .text(formatNumber("actions", summaryData["Actions"]));

    d3
      .select("#not-competed-dollars")
      .text(formatNumber("dollars text", summaryData["Not Competed"]));

    d3
      .select("#not-competed-actions")
      .text(formatNumber("actions", summaryData["NC Actions"]));
  }

  return { draw: draw };
})();
