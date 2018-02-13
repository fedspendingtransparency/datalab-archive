const dataModule = (function() {
  const mem = {};

  function loadCicData(cb) {
    d3.csv("/data-lab-data/cicData.csv", function(error, data2) {
      d3.json("/data-lab-data/cicData.json", function(error, data1) {
        // if (error) throw error;
        const formattedData = [...data2].map(c => ({
          ...c,
          competedActions: +c.competedActions,
          competedDollars: +c.competedDollars,
          id: +c.id,
          notCompetedActions: +c.notCompetedActions,
          notCompetedDollars: +c.notCompetedDollars,
          percentActionsCompeted: +c.percentActionsCompeted,
          percentDollarsCompeted: +c.percentDollarsCompeted,
          totalActions: +c.totalActions,
          totalDollars: +c.totalDollars,
          cfo: c.cfo === "true",
          displayed: c.displayed === "true"
        }));
        mem.cicData = formattedData;
        cb(formattedData);
      });
    });
  }

  return {
    loadCicData,
    mem
  };
})();
