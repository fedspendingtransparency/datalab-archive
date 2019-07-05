---
---

function panelClick (id) {
  // fade all buttons in id's set, then darken active one
  d3.selectAll('#' + id + ' button').style('opacity', null);
  document.activeElement.style.opacity = 1;
}

function searchClick (id) {
  let panel = d3.select('#' + id);
  panel.classed('active', !panel.classed('active'));
}

function switchView (section, show) {

  // show/hide search button
  if (show === 'chart') {
    $('#' + section + '-search').show();
  } else if (show === 'table') {
    $('#' + section + '-search').hide();
  }

  const radioVal = $("input[name='category']:checked").val();
  if (section === 'investment') { // for unknown reasons, other programmers duplicated visibility controls for the two other areas
    if (show === 'chart') {
      $('#investment-sunburst-viz').show();
      $('#investment-table--grants').hide();
      $('#investment-table--contracts').hide();
      $('#investment-table--research').hide();
    } else if (show === 'table') {
      $('#investment-sunburst-viz').hide();
      if (radioVal == 'contracts') {
        $('#investment-table--contracts').show();
        $('#investment-table--research').hide();
        $('#investment-table--grants').hide();
      } else if (radioVal == 'grants') {
        $('#investment-table--grants').show();
        $('#investment-table--contracts').hide();
        $('#investment-table--research').hide();
      } else if (radioVal == 'research') {
        $('#investment-table--grants').hide();
        $('#investment-table--contracts').hide();
        $('#investment-table--research').show();
      }
    }
  }
}
