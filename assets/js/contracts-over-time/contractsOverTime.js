$(function() {
  const {
    orientParallaxSection,
    findParallaxStatus,
    findAndOriendParallax
  } = parallaxModule;

  const { loadAwardsByYear, loadWeeklyTotals, loadWeeklyAverages } = dataModule;

  findAndOriendParallax();

  $(window).scroll(findAndOriendParallax);

  // load dataset 1 and draw barchart
  loadAwardsByYear(barchartModule.draw);

  const panels = [
    {
      id: "panel-1",
      module: barchartModule,
      datasetLoader: loadAwardsByYear
    },
    {
      id: "panel-2",
      type: linechartModule,
      datasetLoader: loadWeeklyTotals
    },
    {
      id: "panel-3",
      type: linechartModule,
      datasetLoader: loadWeeklyAverages
    }
    // {
    //   id: "panel-4",
    //   type: linechartModule,
    //   datasetLoader: loadAwardsByYear
    // },
    // {
    //   id: "panel-5",
    //   type: linechartModule,
    //   datasetLoader: loadAwardsByYear
    // },
    // {
    //   id: "panel-6",
    //   type: linechartModule,
    //   datasetLoader: loadAwardsByYear
    // }
  ];

  // load remaining datasets
  panels.slice(1).forEach(p => p.datasetLoader());

  $(window).scroll(() => {
    const { activePanel } = findParallaxStatus();
  });
});
