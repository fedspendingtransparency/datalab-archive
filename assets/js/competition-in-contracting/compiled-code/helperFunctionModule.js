"use strict";

var helperFunctionModule = function () {
  var formatPercent = d3.format(",.0%");
  var formatActions = d3.format(",");
  var formatDollars = d3.format("$,");
  var formatDollarsText = d3.format(".2s");

  function formatNumber(type, number) {
    switch (type) {
      case "percent":
        return formatPercent(number);
      case "actions":
        return formatActions(number);
      case "dollars":
        return formatDollars(Math.round(number));
      case "dollars text":
        return "$" + formatDollarsText(Math.round(number)).replace("k", " thousand").replace("M", " million").replace("G", " billion").replace("T", " trillion");
    }
  }

  return { formatNumber: formatNumber };
}();
