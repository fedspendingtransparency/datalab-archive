"use strict";

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

$(function() {
  var barchartModuleDraw = barchartModule().draw;
  var tooltipModuleDraw = tooltipModule().draw;
  var tooltipModuleRemove = tooltipModule().remove;
  var tooltipModuleMove = tooltipModule().move;

  var settings = {
    logScale: false,
    xAxisUnit: "actions",
    xAxisScale: "quantity"
  };

  var helpers = {
    tooltipModuleDraw: tooltipModuleDraw,
    tooltipModuleRemove: tooltipModuleRemove,
    tooltipModuleMove: tooltipModuleMove,
    handleYAxisCheckboxChange: handleYAxisCheckboxChange
  };

  function handleYAxisCheckboxChange(id, checked) {
    dataModule.mem.cicData = dataModule.mem.cicData.map(function(c) {
      if (c.id === id) {
        return _extends({}, c, {
          displayed: checked
        });
      } else {
        return c;
      }
    });

    barchartModuleDraw(dataModule.mem.cicData, settings, helpers);
  }

  dataModule.loadCicData(function(cicData) {
    barchartModuleDraw(cicData, settings, helpers);
  });

  $("#barchartToolbar").change(function(e) {
    e.preventDefault();

    var data = dataModule.mem.cicData;

    var xAxisUnit = $("#xAxisUnitDropdown")
      .find(":selected")
      .val();
    var xAxisScale = $("#xAxisScaleDropdown")
      .find(":selected")
      .val();

    settings.xAxisScale = xAxisScale;
    settings.xAxisUnit = xAxisUnit;

    barchartModuleDraw(data, settings, helpers);
  });
});
