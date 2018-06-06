---
---

window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

$(function() {

  const {
    orientParallaxSection,
    findParallaxStatus,
    findAndOriendParallax
  } = parallaxModule;

  const {
    loadPanelData,
    mem
  } = dataModule;

  // metadata on each panel
  const panels = [
    {
    id: "svg-3",
    module: multiLinechartModuleNoDots,
    dataset: "panel6",
    xAxis: "Fiscal Year 2007 - 2017"
    },
    {
    id: "svg-4",
    module: multiLinechartModuleNoDots,
    dataset: "panel9",
    xAxis: "Fiscal Year 2007 - 2017"
    },
    {
    id: "svg-5",
    module: multiLinechartModuleNoDots,
    dataset: "panel8",
    xAxis: "Fiscal Year 2007 - 2017"
    }
  ];
    

  function setDimsOfSvg(id) {
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();
    const windowMargin = 50;

    const svgHeight = windowHeight - 2 * windowMargin;
    const svgWidth = windowWidth - 2 * windowMargin;

    $(id)
      .attr("height", svgHeight)
      .attr("width", svgWidth);

    $("<style>")
    .prop("type", "text/css")
    .html(`
      .fixed {top: ${windowMargin}px;}
      .left {height: ${svgHeight}px;}
    `)
    .appendTo("head");
  }

  setDimsOfSvg("#svg-3");

//   // orient the parallax panel on page load
//   findAndOriendParallax();

  // load dataset 1 and draw barchart
  loadPanelData("panel6", multiLinechartModuleNoDots.draw);

  // load remaining datasets
  panels.forEach(p => loadPanelData(p.dataset));

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

      $('.subTitleDiv').empty();
      $('.legend').empty();

      d3
        .select("#svg-1")
        .selectAll("*")
        .transition()
        .style("opacity", 0)
        .remove();

      setTimeout(() => module.draw(mem[dataset], xAxis, postChangePanel.id, 400));
    };


    // parallax variables
    findParallaxStatus(onChangeCB);
    const { parallaxStatus, activePanel } = mem;

    // orient the parallax panel
    orientParallaxSection(parallaxStatus, activePanel);
  });
});
