const helperFunctionModule = function() {
  const formatPercent = d3.format(",.0%");
  const formatActions = d3.format(",");
  const formatDollars = d3.format("$,");

  function formatNumber(type, number) {
    switch (type) {
      case "percent":
        return formatPercent(number);
      case "actions":
        return formatActions(number);
      case "dollars":
        return formatDollars(number);
    }
  }

  return { formatNumber };
};
