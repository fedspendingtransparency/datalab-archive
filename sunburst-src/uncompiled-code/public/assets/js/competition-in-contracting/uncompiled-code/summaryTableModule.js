const summartTableModule = (function() {
  function draw(data) {
    const { formatNumber } = helperFunctionModule;

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
        <td>${c[0] === "% Competed"
          ? formatNumber("percent", c[1].Actions)
          : formatNumber("actions", c[1].Actions)}</td>
        <td>${c[0] === "% Competed"
          ? formatNumber("percent", c[1].Dollars)
          : formatNumber("dollars", c[1].Dollars)}</td>
      </tr>
      `;
        return a;
      },
      `<th></th>
    <th>Actions</th>
    <th>Dollars</th>`
    );

    d3.select("#summaryTable").html(summaryTableHtml);
  }

  return { draw };
})();
