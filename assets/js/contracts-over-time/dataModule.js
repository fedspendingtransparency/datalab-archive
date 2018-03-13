const dataModule = (function() {
  const mem = {};

  function loadAwardsByYear(cb) {
    d3.json(
      "../../../data-lab-data/contracts-over-time/1_TotalContractAwardsbyYear.json",
      function(error, data) {
        if (error) throw error;
        mem.awardsByYear = data;
        cb(data);
      }
    );
  }

  return {
    loadAwardsByYear,
    mem
  };
})();
