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
    loadContractDataByCategory,
    mem
  } = dataModule;

  // metadata on each panel
  const panels = [
    {
      id: "panel-1",
      module: barchartModule,
      datasetLoader: loadAwardsByYear,
      dataset: "awardsByYear",
      xAxis: "year"
    },
    {
      id: "panel-2",
      module: linechartModule,
      datasetLoader: loadWeeklyAverages,
      dataset: "weeklyAverages",
      xAxis: "week"
    },
    {
      id: "panel-3",
      module: linechartModule,
      datasetLoader: loadWeeklyTotals,
      dataset: "weeklyTotals",
      xAxis: "year"
    },
    {
      id: "panel-4",
      module: multiLinechartModule,
      datasetLoader: loadContractDataByCategory,
      dataset: "contractDataByCategory"
    }
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

  // orient the parallax panel on page load
  findAndOriendParallax();

  // load dataset 1 and draw barchart
  loadAwardsByYear(barchartModule.draw);

  // load remaining datasets
  panels.forEach(p => p.datasetLoader());

  // handle scroll events
  $(window).scroll(() => {
    const onChangeCB = (preChange, postChange) => {
      if (preChange.activePanel.id === postChange.activePanel.id) return;

      const postChangePanel = panels.find(
        p => p.id === postChange.activePanel.id
      );
      const preChangePanel = panels.find(
        p => p.id === preChange.activePanel.id
      );

      if (!postChangePanel || !preChangePanel) return;

      const { module, dataset, xAxis } = postChangePanel;

      preChangePanel.module.remove(() => module.draw(mem[dataset], xAxis));
    };

    // parallax variables
    findParallaxStatus(onChangeCB);
    const { parallaxStatus, activePanel } = mem;

    // orient the parallax panel
    orientParallaxSection(parallaxStatus, activePanel);
  });
});
