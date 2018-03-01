"use strict";

var dataModule = function () {
  var mem = {};

  function loadCicData(cb) {
    d3.json("/data-lab-data/cicData.json", function (error, data) {
      if (error) throw error;
      mem.cicData = data;
      cb(data);
    });
  }

  return {
    loadCicData: loadCicData,
    mem: mem
  };
}();
