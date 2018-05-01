console.log("start data import");

["PSC_by_Recip", "awards_contracts", "details", "others"].forEach(f => {
  d3.csv(`data/csv/${f}.csv`, data => {
    console.log(f, data);
  });
});
