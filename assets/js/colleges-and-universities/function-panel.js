---
---

function panelClick (id) {
  let panel = d3.select('#' + id);
  panel.classed('active', !panel.classed('active'));
}

console.log('here');