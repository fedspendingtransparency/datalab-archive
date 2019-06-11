---
---

function panelClick (id) {
  let panel = d3.select('#' + id);
  panel.classed('active', !panel.classed('active'));
}

function switchView (section, show) {
  if (section === 'investment') {
    if (show === 'chart') {
      $('#investment-sunburst').show();
      $('#investment-table').hide();
    } else if (show === 'table') {
      $('#investment-sunburst').hide();
      $('#investment-table').show();
    }
  }
}