---
---

$(function() {
  const barchartModuleDraw = barchartModule().draw;

  const settings = {
    xAxisUnit: "dollars",
    xAxisScale: "quantity"
  };

  const helpers = {
    handleYAxisCheckboxChange
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

    const xAxisUnit = $('input[name="xAxisUnit"]:checked').val();
    const xAxisScale = $('input[name="xAxisScale"]:checked').val();

    settings.xAxisScale = xAxisScale;
    settings.xAxisUnit = xAxisUnit;

    barchartModuleDraw(data, settings, helpers);
  });

  $("#button1").click(e => {
    let data = dataModule.mem.cicData;

    data = data.map(c => {
      return {
        ...c,
        displayed: true
      };
    });

    settings.xAxisUnit = "dollars";
    settings.xAxisScale = "quantity";

    $('input[name="xAxisUnit"]')[0].checked = true;
    $('input[name="xAxisScale"]')[0].checked = true;

    barchartModuleDraw(data, settings, helpers);
  });
});
