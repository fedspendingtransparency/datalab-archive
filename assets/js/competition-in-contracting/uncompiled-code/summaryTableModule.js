const summaryTableModule = (function() {
  function draw(data) {
    const { formatNumber } = helperFunctionModule;

    const summaryData = data.reduce(
      (a, c) => {
        if (c.displayed) {
          a["Competed"] += c.competedDollars;
          a["Not Competed"] += c.notCompetedDollars;
        }
        return a;
      },
      {
        Competed: 0,
        "Not Competed": 0
      }
    );

    d3
      .select("#competed-dollars")
      .text(formatNumber("dollars text", summaryData.Competed));

    d3
      .select("#not-competed-dollars")
      .text(formatNumber("dollars text", summaryData["Not Competed"]));
  }

  return { draw };
})();
