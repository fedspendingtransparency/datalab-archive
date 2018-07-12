var fs = require("fs");
var _ = require("lodash");
var moment = require("moment");
const util = require("util");
const d3 = require("d3");

/********************** import **********************/
let panel1 = JSON.parse(
  fs.readFileSync("data/1/1_TotalContractAwardsbyYear.json")
);
let panel2 = JSON.parse(fs.readFileSync("data/1/2_WeeklyAverageSpending.json"));
let panel3 = JSON.parse(fs.readFileSync("data/1/3_WeeklyDataTotals.json"));
let panel4 = JSON.parse(
  fs.readFileSync("data/1/4_ContractDatabyCategoryofContract.json")
);
let panel5 = JSON.parse(
  fs.readFileSync("data/1/5_PSCCategoriesContractsData.json")
);
let panel6_l1 = JSON.parse(
  fs.readFileSync("data/2/6_WeeklyContractSpendwithBudgetDates.json")
);
let panel6_v1 = JSON.parse(
  fs.readFileSync("data/2/6_Continuing_Resolutions.json")
);
let panel6_v2 = JSON.parse(fs.readFileSync("data/2/6_Budget_Legislation.json"));

/* end import */
/********************** logic **********************/

const multiLinechartDataTemplate = {
  verticalLineData: {
    // vDataset1: [],
    // vDataset2: []
  },
  lineData: {
    // lDataset1: [],
    // lDataset2: []
  }
};

panel1_ = panel1.map(c => ({ fiscalYear: c.fiscalyear, val: c.totalbyyear }));

panel2_ = _.cloneDeep(multiLinechartDataTemplate);
panel2_.lineData["Weekly Average Spending"] = panel2
  .map(c => {
    let date;
    if (c.week >= 39)
      date = moment()
        .day("Monday")
        .week(c.week + 1)
        .year(2016)
        .format("YYYY-MM-DD");
    else
      date = moment()
        .day("Monday")
        .week(c.week + 1)
        .year(2017)
        .format("YYYY-MM-DD");

    return { date, val: c.contractdollars };
  })
  .sort((a, b) => new Date(a.date) - new Date(b.date));

panel3_ = _.cloneDeep(multiLinechartDataTemplate);
panel3_.lineData["Weekly Totals"] = panel3.map(c => ({
  date: c.date,
  val: c.contractdollars
}));

panel4_ = _.cloneDeep(multiLinechartDataTemplate);
d3
  .nest()
  .key(d => d.category)
  .entries(panel4)
  .forEach(d => {
    panel4_.lineData[d.key] = d.values.map(c => ({
      date: c.date,
      val: c.contractdollars
    }));
  });

panel5_ = _.cloneDeep(multiLinechartDataTemplate);
d3
  .nest()
  .key(d => d.category)
  .entries(panel5)
  .forEach(d => {
    panel5_.lineData[d.key] = d.values.map(c => ({
      date: c.date,
      val: c.contractdollars
    }));
  });

panel6_ = _.cloneDeep(multiLinechartDataTemplate);
panel6_.lineData["Weekly Totals"] = panel6_l1.map(c => ({
  date: c.date,
  val: c.contractdollars
}));
panel6_.verticalLineData["New Appropriations"] = panel6_v1.map(c => ({
  date: c.date
}));
panel6_.verticalLineData["Continuing Resolution"] = panel6_v2.map(c => ({
  date: c.date
}));

// console.log(util.inspect(panel6_, false, null));

/* end logic */
/********************** export **********************/
[
  {
    fileName: "panel1",
    var: panel1_
  },
  {
    fileName: "panel2",
    var: panel2_
  },
  {
    fileName: "panel3",
    var: panel3_
  },
  {
    fileName: "panel4",
    var: panel4_
  },
  {
    fileName: "panel5",
    var: panel5_
  },
  {
    fileName: "panel6",
    var: panel6_
  }
].forEach((e, i) => {
  fs.writeFile(
    `./exports/${e.fileName}.json`,
    JSON.stringify(e.var, null, 2),
    "utf8",
    () => console.log(`${e.fileName} written to file`)
  );
});
/* end export */
