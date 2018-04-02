---
---

const dataModule = {
  mem: {
    awardsByYear: null,
    weeklyTotals: null,
    weeklyAverages: null,
    parallaxStatus: "pre", // "pre" || "post" || "active"
    activePanel: { id: null }
  },

  loadPanelData: (panel, cb) => {
    d3.json(
      `../../../data-lab-data/contracts-over-time/${panel}.json`,
      function(error, data) {
        if (error) throw error;
        dataModule.mem[panel] = data;
        if (cb) cb(data);
      }
    );
  }
};
