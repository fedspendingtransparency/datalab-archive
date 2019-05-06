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
    style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
    center: [-103.59179687498357, 40.66995747013945], // usa
    zoom: 4 // starting zoom
  });

  let schools = []; // hold visible schools for filtering features

  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());

  // Create a popup, but don't add it to the map yet.
  let tooltip = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });

  // filter overlay section //
  let filterEl = document.getElementById('feature-filter');
  let listingEl = document.getElementById('feature-listing-ul');
  let resetBtn = document.getElementById('feature-reset');

  function renderListings(features) {
    // Clear any existing listings
    listingEl.innerHTML = '';
    if (features.length) {
      features.forEach(function(feature) {
	var prop = feature.properties;
	var item = document.createElement('li');
	item.textContent = prop.Recipient;
	item.addEventListener('mouseover', function() {
	  // Highlight corresponding feature on the map
	  tooltip.setLngLat(feature.geometry.coordinates)
	    .setText(feature.properties.Recipient)
	    .addTo(map);
	});
	item.addEventListener('mouseout', function() {
	  tooltip.remove();
	});
	item.addEventListener('click', function(){
	  console.log('clicking li element');
	  map.easeTo({
	    center: feature.geometry.coordinates
	  });
	});
	listingEl.appendChild(item);
      });
      
      // Show the filter input
      filterEl.parentNode.style.display = 'block';
    }
  }
  
  function normalize(string) {
    return string.trim().toLowerCase();
  }
  
  function getUniqueFeatures(array, comparatorProperty) {
    var existingFeatureKeys = {};
    // Because features come from tiled vector data, feature geometries may be split
    // or duplicated across tile boundaries and, as a result, features may appear
    // multiple times in query results.
    var uniqueFeatures = array.filter(function(el) {
      if (existingFeatureKeys[el.properties[comparatorProperty]]) {
	return false;
      } else {
	existingFeatureKeys[el.properties[comparatorProperty]] = true;
	return true;
      }
    });
    
    return uniqueFeatures;
  }

  // reset button click
  resetBtn.addEventListener('click', function(){
    console.log('clicky button reset');
    map.flyTo({
      center: [-103.59179687498357, 40.66995747013945], // usa
      zoom: 4 // starting zoom...
    });
  });

  map.on('render', function() {
    let features = map.queryRenderedFeatures({layers:['unclustered-point', 'clusters']});
    
    if (features) {
      let uniqueFeatures = getUniqueFeatures(features, "Recipient");
      // Populate features for the listing overlay.
      renderListings(uniqueFeatures);
      
      // Clear the input container
      filterEl.value = '';
      
      // Store the current features in sn `airports` variable to
      // later use for filtering on `keyup`.
      schools = uniqueFeatures;
    }
  });

  filterEl.addEventListener('keyup', function(e) {
    var value = normalize(e.target.value);
    
    // Filter visible features that don't match the input value.
    var filtered = schools.filter(function(feature) {
      var name = normalize(feature.properties.Recipient); // "name"
      return name.indexOf(value) > -1;
    });
    
    // Populate the sidebar with filtered results
    renderListings(filtered);
    
    // Set the filter to populate features into the layer.
    map.setFilter('unclustered-point', ['match', ['get', 'Recipient'], filtered.map(function(feature) {
      return feature.properties.Recipient;
    }), true, false]);
  });


  map.on('load', function() {
    // add geojson data
    $.getJSON('../../data-lab-data/CU_features_min.geojson', function(data) {
      //      console.log(data);
      //      renderListings([data.features.properties]); // call with empty array at first..

      map.addSource('schools', {
	type: 'geojson',
	data: data,
	cluster: true,
	clusterMaxZoom: 14,
	clusterRadius: 100 // 50 is default look into tweaking this
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
	  "circle-color": [
	    "step",
	    ["get", "point_count"],
	    "#51bbd6",
	    100,
	    "#f1f075",
	    750,
	    "#f28cb1"
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
	  "circle-color": "#11b4da",
	  "circle-radius": 4,
	  "circle-stroke-width": 1,
	  "circle-stroke-color": "#fff"
	}
      });


      map.on('mouseenter', 'unclustered-point', function(e) {
	// Change the cursor style as a UI indicator.
	map.getCanvas().style.cursor = 'pointer';
	
	let coordinates = e.features[0].geometry.coordinates.slice();
	let schoolName = e.features[0].properties.Recipient;
	let schoolInvestment = e.features[0].properties.Total_Federal_Investment;
	//	schoolInvestment.formatMoney(2); // convert
	let instType = e.features[0].properties.INST_TYPE_1;
	let yearType = e.features[0].properties.INST_TYPE_2;

	let html = `<h2> ${schoolName} </h2> <br> Amount Invested: ${schoolInvestment} <br> ${instType} <br> ${yearType}`;

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

      map.on('mouseenter', 'clusters', function () {
	map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', 'clusters', function () {
	map.getCanvas().style.cursor = '';
      });



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
