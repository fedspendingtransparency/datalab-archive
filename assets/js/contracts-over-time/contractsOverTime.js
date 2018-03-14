$(function() {
  const {
    orientParallaxSection,
    findParallaxStatus,
    findAndOriendParallax
  } = parallaxModule;

  const {
    loadAwardsByYear,
    loadWeeklyTotals,
    loadWeeklyAverages,
    mem
  } = dataModule;

  // orient the parallax panel on page load
  findAndOriendParallax();

  // load dataset 1 and draw barchart
  loadAwardsByYear(barchartModule.draw);

  // metadata on each panel
  const panels = [
    {
      id: "panel-1",
      module: barchartModule,
      datasetLoader: loadAwardsByYear,
      dataset: "awardsByYear"
    },
    {
      id: "panel-2",
      module: linechartModule,
      datasetLoader: loadWeeklyTotals,
      dataset: "weeklyTotals"
    },
    {
      id: "panel-3",
      module: linechartModule,
      datasetLoader: loadWeeklyAverages,
      dataset: "weeklyAverages"
    }
    // {
    //   id: "panel-4",
    //   module: linechartModule,
    //   datasetLoader: loadAwardsByYear
    // },
    // {
    //   id: "panel-5",
    //   module: linechartModule,
    //   datasetLoader: loadAwardsByYear
    // },
    // {
    //   id: "panel-6",
    //   module: linechartModule,
    //   datasetLoader: loadAwardsByYear
    // }
  ];

  // load remaining datasets
  panels.forEach(p => p.datasetLoader());

  // handle scroll events
  $(window).scroll(() => {
    const onChangeCB = (preChange, postChange) => {
      // console.log({ preChange, postChange });
      if (preChange.activePanel.id === postChange.activePanel.id) return;

      const postChangePanel = panels.find(
        p => p.id === postChange.activePanel.id
      );

      if (!postChangePanel) return;

      const { module, dataset } = postChangePanel;

      d3
        .select("#svg-1")
        .selectAll("*")
        .remove();

      module.draw(mem[dataset]);
    };

    // parallax variables
    findParallaxStatus(onChangeCB);
    const { parallaxStatus, activePanel } = mem;

    // orient the parallax panel
    orientParallaxSection(parallaxStatus, activePanel);
  });
});
