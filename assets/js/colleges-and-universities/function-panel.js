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

  let radioVal =$("input[name='category']:checked").val();
  console.log(radioVal);

  if (section === 'investment') {
    if (show === 'chart') {
      $('#investment-sunburst').show();
      $('#investment-table--grants').hide();
      $('#investment-table--contracts').hide();
    } else if (show === 'table') {
      $('#investment-sunburst').hide();
      if (radioVal == 'contracts') {
	console.log('show contracts table');
	$('#investment-table--contracts').show();
	$('#investment-table--grants').hide();
      } else if (radioVal == 'grants') {
	console.log('show grants table');
	$('#investment-table--grants').show();
	$('#investment-table--contracts').hide();
      } else {
	$('#investment-table--grants').show();
	$('#investment-table--contracts').hide();
      }
    }
  }
}
