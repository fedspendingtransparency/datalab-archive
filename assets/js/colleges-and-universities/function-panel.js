---
---

function panelClick (id) {
  // fade all buttons in id's set, then darken active one
  let panelButtons = d3.selectAll('#' + id + ' button');
  panelButtons.style('opacity', null);
  document.activeElement.style.opacity = 1;
}

function searchClick (id) {
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