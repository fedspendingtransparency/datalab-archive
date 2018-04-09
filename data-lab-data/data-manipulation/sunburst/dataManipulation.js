/**
 * [x] - agencies_
 * [x] - subagencies_
 * [x] - recipients_
 * [x] - awards_contracts_
 * [x] - PSCs_
 * [x] - others_
 * [x] - PSC_by_Recip_
 * [x] - colors_
 */

var fs = require("fs");

/********************** import/export *********ser*************/
let PSC_by_Recip = JSON.parse(fs.readFileSync("data/json/PSC_by_Recip.json"));
let awards_contracts = JSON.parse(
  fs.readFileSync("data/json/awards_contracts.json")
);
let details = JSON.parse(fs.readFileSync("data/json/details.json"));
let others = JSON.parse(fs.readFileSync("data/json/others.json"));
let colors = JSON.parse(fs.readFileSync("data/constants/colors.json"));
/********************** logic **********************/

function reduceArraysToObject(arrays, category) {
  return [
    ...arrays.reduce((categorySet, array) => {
      return array.reduce((a, c) => {
        a.add(c[category]);
        return a;
      }, categorySet);
    }, new Set())
  ]
    .sort()
    .reduce((a, c, i) => {
      a[i] = c;
      return a;
    }, {});
}

function swapKeyValues(obj) {
  var ret = {};
  for (var key in obj) {
    ret[obj[key]] = key;
  }
  return ret;
}

const agencies_ = reduceArraysToObject([awards_contracts], "agen");
const agencies_r = swapKeyValues(agencies_);

const subagencies_ = reduceArraysToObject(
  [awards_contracts, PSC_by_Recip, others],
  "sub"
);
const subagencies_r = swapKeyValues(subagencies_);

const recipients_ = reduceArraysToObject(
  [PSC_by_Recip, awards_contracts, details, others],
  "recip"
);
const recipients_r = swapKeyValues(recipients_);

const awards_contracts_ = awards_contracts
  .map(c => ({
    agen: +agencies_r[c.agen],
    sub: +subagencies_r[c.sub],
    recip: +recipients_r[c.recip],
    val: +c.val
  }))
  .sort((a, b) => b.val - a.val);

awards_contracts_recipients_ = [
  ...awards_contracts_.reduce((a, c) => {
    a.add(c.recip);
    return a;
  }, new Set())
].map(c => recipients_[c]);

awards_contracts_agencies_ = [
  ...awards_contracts_.reduce((a, c) => {
    a.add(c.agen);
    return a;
  }, new Set())
].map(c => agencies_[c]);

awards_contracts_subagencies_ = [
  ...awards_contracts_.reduce((a, c) => {
    a.add(c.sub);
    return a;
  }, new Set())
].map(c => subagencies_[c]);

const deletWords = ["NA", "undefined", "Other"];

awards_contracts_agencies_subagencies_ = [
  ...new Set([...awards_contracts_agencies_, ...awards_contracts_subagencies_])
];

// console.log(
//   awards_contracts_recipients_,
//   awards_contracts_agencies_subagencies_
// );

const colors_ = Object.entries(
  awards_contracts_.reduce((a, c) => {
    if (!a[c.agen]) a[c.agen] = c.val;
    else a[c.agen] += c.val;
    return a;
  }, {})
)
  .sort((a, b) => b[1] - a[1])
  .reduce((a, c, i) => {
    if (i < colors.length) {
      a[c[0]] = {
        val: c[1],
        color: colors[i]
      };
    } else {
      a[c[0]] = {
        val: c[1],
        color: colors[colors.length - 1]
      };
    }
    return a;
  }, {});

const others_ = others
  .map(c => ({
    sub: +subagencies_r[c.sub],
    recip: +recipients_r[c.recip],
    val: +c.val
  }))
  .sort((a, b) => b.val - a.val);

const PSCs_name_to_file = PSC_by_Recip.reduce((a, c) => {
  if (a[c.psc]) return a;
  a[c.psc] = c.file;
  return a;
}, {});

const PSCs_ = Object.entries(PSCs_name_to_file)
  .sort((a, b) => b[1] - a[1])
  .reduce((a, c, i) => {
    a[i] = {
      name: c[0],
      file: c[1]
    };
    return a;
  }, {});

PSCs_name_to_key = Object.entries(PSCs_).reduce((a, c) => {
  a[c[1].name] = c[0];
  return a;
}, {});

const PSC_by_Recip_ = PSC_by_Recip.reduce((a, c) => {
  const recip = recipients_r[c.recip];
  const sub = subagencies_r[c.sub];
  const key = `${recip}-${sub}`;

  const arr = [PSCs_name_to_key[c.psc], +c.val];

  if (!a[key]) a[key] = [];
  a[key].push(arr);

  return a;
}, {});

/* end logic */

[
  {
    fileName: "agencies_",
    var: agencies_
  },
  {
    fileName: "subagencies_",
    var: subagencies_
  },
  {
    fileName: "recipients_",
    var: recipients_
  },
  {
    fileName: "awards_contracts_",
    var: awards_contracts_
  },
  {
    fileName: "PSCs_",
    var: PSCs_
  },
  {
    fileName: "others_",
    var: others_
  },
  {
    fileName: "PSC_by_Recip_",
    var: PSC_by_Recip_
  },
  {
    fileName: "colors_",
    var: colors_
  },
  {
    fileName: "awards_contracts_recipients_",
    var: awards_contracts_recipients_
  },
  {
    fileName: "awards_contracts_agencies_subagencies_",
    var: awards_contracts_agencies_subagencies_
  }
].forEach((e, i) => {
  fs.writeFile(
    `exports/${e.fileName}.json`,
    JSON.stringify(e.var),
    "utf8",
    () => console.log(`${e.fileName} written to file`)
  );
});
