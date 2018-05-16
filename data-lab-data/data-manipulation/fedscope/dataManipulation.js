/**
 * [x] - states
 * [x] - occupationCategories
 * [x] - agencies
 * [x] - employees
 * [ ] - employeeSalaries
 */

var fs = require("fs");
var _ = require("lodash");
var changeCase = require("change-case");

/********************** import **********************/
let states_ = JSON.parse(fs.readFileSync("data/constants/states_.json"));
let occupationCategories_ = JSON.parse(
  fs.readFileSync("data/constants/occupationCategories_.json")
);

let agencyIndex = JSON.parse(fs.readFileSync("data/fromMatt/AgencyIndex.json"));
let agencyTotals = JSON.parse(
  fs.readFileSync("./data/fromMatt/AgencyTotals.json")
);
let finalEmploymentDataset = JSON.parse(
  fs.readFileSync("./data/fromMatt/Final Employment Dataset.json")
);
let personnelSpendingData = JSON.parse(
  fs.readFileSync("./data/fromMatt/PersonnelSpendingData_CFOAgencies.json")
);
let stateIndex = JSON.parse(fs.readFileSync("./data/fromMatt/StateIndex.json"));

/* end import */
/********************** logic **********************/

const agencies_ = _.keyBy(
  agencyIndex.map(a => ({
    id: a.agency_id,
    name: a.reporting_agency,
    abbreviation: a.abbreviation
  })),
  "id"
);

const employees_ = finalEmploymentDataset.filter(d => d.unitedstates).map(d => {
  const occupationCategoryId = Object.values(occupationCategories_).find(
    oc => oc.name === changeCase.titleCase(d.occupation_code)
  ).id;

  return {
    stateAbbreviation: d.stateabbreviation,
    agencyId: d.agency_id,
    occupationType: d.OCCTYPT,
    employmentType: d.WSTYPT,
    employeeCount: d.count,
    occupationCategoryId
  };
});

const employeeSalaries_ = {
  agencyId: 0,
  children: personnelSpendingData.map(d => ({
    agencyId: d.agency_id,
    obligations: d.totalobligations
  }))
};
/* end logic */
/********************** export **********************/
[
  {
    fileName: "agencies",
    var: agencies_
  },
  {
    fileName: "states",
    var: states_
  },
  {
    fileName: "occupationCategories",
    var: occupationCategories_
  },
  {
    fileName: "employees",
    var: employees_
  },
  {
    fileName: "employeeSalaries",
    var: employeeSalaries_
  }
].forEach((e, i) => {
  fs.writeFile(
    `./exports/${e.fileName}.json`,
    JSON.stringify(e.var),
    "utf8",
    () => console.log(`${e.fileName} written to file`)
  );
});
/* end export */
