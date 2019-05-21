// add those back for IE 11 support
//---
//---

const mapContainer = document.getElementById('collegesMap');
const sectFourTableContainer = document.getElementById('sectionFourtableContainerDiv');

// const publicCheck = document.getElementById('publicCheck');
// const privateCheck = document.getElementById('privateCheck');
// const fourYearCheck = document.getElementById('fourYearCheck');
// const twoYearCheck = document.getElementById('twoYearcheck');

const sectionFourtableBtn = document.getElementById('sectionFourTableBtn');
const sectionFourmapBtn = document.getElementById('sectionFourMapBtn');

//import mapboxConfig from '../colleges-and-universities/util/constants';

function formatMoney(n, c, d, t) {
  var c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
      j = (j = i.length) > 3 ? j % 3 : 0;

  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

function createMapbox() {
  mapboxgl.accessToken = 'pk.eyJ1IjoidXNhc3BlbmRpbmciLCJhIjoiY2l6ZnZjcmh0MDBtbDMybWt6NDR4cjR6ZSJ9.zsCqjJgrMDOA-i1RcCvGvg';
  var map = new mapboxgl.Map({
    container: 'collegesMap', // container id
    style: 'mapbox://styles/usaspending/cjvduv2b7fwlc1fnv9iyihkqo', // stylesheet location
    center: [-80.59179687498357, 40.66995747013945], // usa
    zoom: 3 // starting zoom (3 default)
  });

  // Add zoom and rotation controls to the map.
  let zoomCtrl = new mapboxgl.NavigationControl();
  map.addControl(zoomCtrl, 'top-left'); // put in top left for now? could change?

  // Create a popup, but don't add it to the map yet.
  let tooltip = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });

  // filter overlay section //
  let filterEl = $('#feature-filter');
  let listingEl = $('#feature-listing-ul');
  let resetBtn = $('#feature-reset');
  let rightPanel = $('#inst-panel');

  function renderAllSchools() {
    $.getJSON('../../data-lab-data/CU_features_min.geojson', function(data) { 
      let geoandname = data.features.map(ele => ({ coord: ele.geometry, name: ele.properties.Recipient, fedInvest: ele.properties.Total_Federal_Investment,
						   instType: ele.properties.INST_TYPE_1, yearType: ele.properties.INST_TYPE_2}));
      geoandname.forEach(function(ele) {
	let listitem = document.createElement('li');
	listitem.textContent = ele.name;
	listitem.addEventListener('click', function() {
	  let matched = geoandname.filter(ele => {
	    return this.textContent === ele.name;
	  });
	  let tooltipHtml = `<h2> ${matched[0].name}</h2> Amount Invested: ${matched[0].fedInvest} <br> ${matched[0].instType} <br> ${matched[0].yearType}`;
	  console.log(matched);
	  map.easeTo({
	    center: matched[0].coord.coordinates,
	    zoom: 12
	  });
	  tooltip.setLngLat(matched[0].coord.coordinates)
	    .setHTML(tooltipHtml)
	    .addTo(map);
	});
	listingEl.append(listitem);
      });
    });
  }

  // reset button click
  // resets map to beginning state and renders all schools in list again
  $(resetBtn).click(function() {
    tooltip.remove();
    map.flyTo({
      center: [-80.59179687498357, 40.66995747013945], // usa
      zoom: 3 // starting zoom...
    });
    $(filterEl).val(''); // clear value in input
    $(listingEl).empty(); // clear list as well
    renderAllSchools();
  });

  // handle input filter..
  $(filterEl).keyup(function(){

    var input, filter, ul, li, i, txtValue;
    input = document.getElementById('feature-filter');
    filter = input.value.toUpperCase();
    ul = document.getElementById("feature-listing-ul");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      txtValue = li[i].innerHTML;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
    	li[i].style.display = "";
      } else {
    	li[i].style.display = "none";
      }
    }
  });

  // when the map first loads all resources!
  map.on('load', function() {
    $.getJSON('../../data-lab-data/CU_features_min.geojson', function(data) {

      renderAllSchools(); // populate sidebar with list of all schools

      map.addSource('schools', {
	type: 'geojson',
	data: data,
	cluster: true,
	clusterMaxZoom: 7,
	clusterRadius: 75 // 50 is default look into tweaking this
      });


      map.addLayer({
	id: 'clusters',
	type: 'circle',
	source: 'schools',
	filter: ['has', 'point_count'],
	paint: {
	  // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
	  // with three steps to implement three types of circles:
	  //   * Blue, 20px circles when point count is less than 100
	  //   * Yellow, 30px circles when point count is between 100 and 750
	  //   * Pink, 40px circles when point count is greater than or equal to 750
	  "circle-stroke-color": '#ddd',
	  "circle-color": [
	    "step",
	    ["get", "point_count"],
	    "#881E3D",
	    100,
	    "#881E3D",
	    750,
	    "#881E3D"
	  ],
	  "circle-radius": [
	    "step",
	    ["get", "point_count"],
	    20,
	    100,
	    30,
	    750,
	    40
	  ]
	}
      });

      map.setPaintProperty('clusters', 'circle-opacity', .4); // set opactiy to 40%

      map.addLayer({
	id: "cluster-count",
	type: "symbol",
	source: "schools",
	filter: ["has", "point_count"],
	layout: {
	  "text-field": "{point_count_abbreviated}",
	  "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
	  "text-size": 11
	}
      });

      map.addLayer({
	id: "unclustered-point",
	type: "circle",
	source: "schools",
	filter: ["!", ["has", "point_count"]],
	paint: {
	  "circle-color": "#881E3D",
	  "circle-radius": 5,
	  "circle-stroke-width": 1,
	  "circle-stroke-color": "#ddd"
	}
      });

      map.setPaintProperty('unclustered-point', 'circle-opacity', .4); // opacity of individual schools

      map.on('click', 'clusters', function (e) {
	const cluster = map.queryRenderedFeatures(e.point, { layers: ["clusters"] });
	const coordinates = cluster[0].geometry.coordinates;
	flyIntoCluster(map, coordinates);
      });

      map.on('mouseenter', 'clusters', function () {
	map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', 'clusters', function () {
	map.getCanvas().style.cursor = '';
      });

      function flyIntoCluster(map, coordinates) {
	const maxZoom = 5; 

	map.flyTo({
	  // These options control the ending camera position: centered at
	  // the target, at zoom level 16, and north up.
	  center: coordinates,
	  zoom: maxZoom,
	  bearing: 0,

	  // These options control the flight curve, making it move
	  // slowly and zoom out almost completely before starting
	  // to pan.
	  speed: 1, // make the flying slow
	  curve: 1, // change the speed at which it zooms out
	});
      }

      map.on('mouseenter', 'unclustered-point', function(e) {
	// Change the cursor style as a UI indicator.
	map.getCanvas().style.cursor = 'pointer';
	
	let coordinates = e.features[0].geometry.coordinates.slice();
	let schoolName = e.features[0].properties.Recipient;
	let schoolInvestment = e.features[0].properties.Total_Federal_Investment;
	//	schoolInvestment.formatMoney(2); // convert
	let instType = e.features[0].properties.INST_TYPE_1;
	let yearType = e.features[0].properties.INST_TYPE_2;

	let html = `<h2> ${schoolName} </h2> Amount Invested: ${schoolInvestment} <br> ${instType} <br> ${yearType}`;

	// Ensure that if the map is zoomed out such that multiple
	// copies of the feature are visible, the popup appears
	// over the copy being pointed to.
	while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
	  coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
	}
	
	// Populate the popup and set its coordinates
	// based on the feature found.
	tooltip.setLngLat(coordinates)
	  .setHTML(html)
	  .addTo(map);
      });

      map.on('mouseleave', 'unclustered-point', function() {
	map.getCanvas().style.cursor = '';
	tooltip.remove();
      });

      map.on('click', 'schools', function(e) {
	let features = map.queryRenderedFeatures(e.point, { layers: ['clusters']});
	let clusterId = features[0].properties.cluster_id;
	map.getSource('schools').getClusterExpansionZoom(clusterId, function(err, zoom){
	  if (err) return;
	  map.easeTo({
	    center: features[0].geometry.coordinates,
	    zoom: zoom
	  });
	});
      });

      // click for righthand panel
      map.on('click', 'unclustered-point', function(e){
	$(rightPanel).css('display', 'block');
	createRightPanel(e);
      });

      function createRightPanel(e) {
	let data = e.features[0].properties;
	console.log(data);
	$(rightPanel).empty();
	$(rightPanel).append('<div id="inst-panel-close"><i class="fa fa-window-close" aria-hidden="true"></i></div>');
	$('#inst-panel-close').click(function(){
	  $(rightPanel).css('display', 'none');
	});
	$(rightPanel).append(`<h2 class='inst-panel-header'> ${data.Recipient} </h2>`);
	$(rightPanel).append('<hr>');
	// append everything to the panel. just read from "data"
	// this is messy and could easily be improved on.. just list out all fields for now..
	$(rightPanel).append(`<section id="inst-panel-section"><p class="inst-panel-subtext">Inst Type: ${data.INST_TYPE_1}, ${data.INST_TYPE_2}</p> <br> 
<p class="inst-panel-subtext">State: ${data.State}</p> <br> <p class="inst-panel-subtext">County: ${data.COUNTY}</p> <br> <p class="inst-panel-subtext">Total Students: ${data.Total}</p> <br> <p class="inst-panel-subtext">Contract $ Received: ${data.contracts_received}</p> <br> <p class="inst-panel-subtext">Grant $ Received: ${data.grants_received}</p> <br> <p class="inst-panel-subtext">Research Grant $ Received: ${data.research_grants_received}</p> <br> <hr> <p class="inst-panel-subtext">Total Federal Investment: ${data.Total_Federal_Investment}</p>
</section>`);
      }

      


    }); // end getjson (get map function)

  });
};





// function createSectFourTable(container, columns) {
//   d3.csv('../data-lab-data/EDU_v2_base_data.csv', function(err, data) {

//     if (err) { return err; }

//     /**
//      * Table START
//      */
//     let sortAscending = true;
//     let table = d3.select(container).append('table')
//     //        .attr('class', '')
//         .attr('id', 'sectFourTable'); // id given to table for Datatables.js

//     let titles = ['Recipient', 'State', 'Total Students', 'Total Federal Investment'];

//     let rows = table.append('tbody')
//         .selectAll('tr')
//         .data(data).enter()
//         .append('tr')
//         .on('click', function (d) {
// 	  // secondary table view
// 	  //          createSecondaryTableView(d.name, ['Type', 'Awarded Amount', '% of Total']); // going to pass in the row value and columns we want
//         });


//     let headers = table.append('thead').append('tr')
//         .selectAll('th')
//         .data(titles).enter()
//         .append('th')
//         .text(function (d) {
//           return d;
//         });
//     // .on('click', function (d) {
//     //   headers.attr('class', 'header');

//     //   if (sortAscending) {
//     //     rows.sort(function (a, b) { return b[d] < a[d]; });
//     //     sortAscending = false;
//     //     this.className = 'aes';
//     //   } else {
//     //     rows.sort(function (a, b) { return b[d] > a[d]; });
//     //     sortAscending = true;
//     //     this.className = 'des';
//     //   }
//     // });


//     rows.selectAll('td')
//       .data(function (row) {
//         return columns.map(function (column) {
//           return { column: column, value: row[column] };
//         });
//       }).enter()
//       .append('td')
//       .classed('name', function (d) {
//         return d.column == 'Recipient';
//       })
//       .classed('percentage', function (d) {
//         return d.column == 'State';
//       })
//       .classed('total', function (d) {
//         return d.column == 'Total';
//       })
//       .text(function (d) {
//         return d.value;
//       })
//       .attr('data-th', function (d) {
//         return d.name;
//       });


//     // datatable start
//     let dTable = $('#sectFourTable').dataTable();
//   });
// };

/*
  --------------------------------------------------------------------------------------------------------------------
  *   Main Method
  *--------------------------------------------------------------------------------------------------------------------
  */

$(document).ready(function(){
  //  drawMap(mapContainer); // section 4 USA map
  //  createSectFourTable(sectFourTableContainer, ['Recipient', 'State', 'Total', 'Total_Federal_Investment']);
  //  inputSearch();
  createMapbox();
});


/*
  --------------------------------------------------------------------------------------------------------------------
  *   Main Method
  *--------------------------------------------------------------------------------------------------------------------
  */

//drawMap(mapContainer);
