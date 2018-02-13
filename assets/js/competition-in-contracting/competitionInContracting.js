$(function() {
  const barchartModuleDraw = barchartModule().draw;
  const tooltipModuleDraw = tooltipModule().draw;
  const tooltipModuleRemove = tooltipModule().remove;
  const tooltipModuleMove = tooltipModule().move;
  const formatNumber = helperFunctionModule().formatNumber;

  const settings = {
    logScale: false,
    xAxisUnit: "actions",
    xAxisScale: "quantity"
  };

  const helpers = {
    tooltipModuleDraw,
    tooltipModuleRemove,
    tooltipModuleMove,
    handleYAxisCheckboxChange,
    formatNumber
  };

  function handleYAxisCheckboxChange(id, checked) {
    dataModule.mem.cicData = dataModule.mem.cicData.map(c => {
      if (c.id === id) {
        return {
          ...c,
          displayed: checked
        };
      } else {
        return c;
      }
    });

    barchartModuleDraw(dataModule.mem.cicData, settings, helpers);
  }

  dataModule.loadCicData(cicData => {
    barchartModuleDraw(cicData, settings, helpers);
  });

  $("#barchartToolbar").change(e => {
    e.preventDefault();

    const data = dataModule.mem.cicData;

    const xAxisUnit = $("#xAxisUnitDropdown")
      .find(":selected")
      .val();
    const xAxisScale = $("#xAxisScaleDropdown")
      .find(":selected")
      .val();

    console.log({ xAxisScale, xAxisUnit });

    settings.xAxisScale = xAxisScale;
    settings.xAxisUnit = xAxisUnit;

    barchartModuleDraw(data, settings, helpers);
  });
});
