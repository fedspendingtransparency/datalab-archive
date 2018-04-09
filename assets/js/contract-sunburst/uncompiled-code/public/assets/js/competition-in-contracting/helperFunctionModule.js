"use strict";

var helperFunctionModule = (function() {
  var formatPercent = d3.format(",.0%");
  var formatActions = d3.format(",");
  var formatDollars = d3.format("$,");

  function formatNumber(type, number) {
    switch (type) {
      case "percent":
        return formatPercent(number);
      case "actions":
        return formatActions(number);
      case "dollars":
        return formatDollars(Math.round(number));
    }
  }

  return { formatNumber: formatNumber };
})();
