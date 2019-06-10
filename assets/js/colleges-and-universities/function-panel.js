---
---

function panelClick (id) {
  let panel = d3.select('#' + id);
  panel.classed('active', !panel.classed('active'));
}

function switchView (section, show) {
  if (section === 'investment') {
    if (show === 'chart') {
      d3.select('#investment-chart').show();
      d3.select('#investment-table').hide();
    }
  }
}