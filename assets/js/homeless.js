// GenMap begins on line 312
// GenTable begins on line 523
// GenPanelTwo begins on line 964
//
//
// Spinner loading controls

var opts = {
  lines: 9, // The number of lines to draw
  length: 16, // The length of each line
  width: 6.5, // The line thickness
  radius: 14, // The radius of the inner circle
  color: '#EE3124', // #rgb or #rrggbb or array of colors
  speed: 1.9, // Rounds per second
  trail: 40, // Afterglow percentage
  className: 'spinner' // The CSS class to assign to the spinner
}

var target_panel1 = document.getElementById('container');
var target_panel2 = document.getElementById('container2_1');
var target_panel3 = document.getElementById('container2_2');
var target_panel4 = document.getElementById('container2_3');
var target_panel5 = document.getElementById('container2_4');
//var target_panel3 = document.getElementById('container3');

var spinner_panel1 = new Spinner(opts).spin(target_panel1);
var spinner_panel2 = new Spinner(opts).spin(target_panel2);
var spinner_panel3 = new Spinner(opts).spin(target_panel3);
var spinner_panel4 = new Spinner(opts).spin(target_panel4);
var spinner_panel5 = new Spinner(opts).spin(target_panel5);
//var spinner_panel3 = new Spinner(opts).spin(target_panel3);

d3.json('/data-lab-data/2017_CoC_Grantee_Areas_2.json', function(us) {
  d3.csv('/data-lab-data/2017statecfdafunding.csv', function(cfda_state) {
    d3.csv('/data-lab-data/CFDACOCAward.csv', function(bar_chrt) {
      d3.csv('/data-lab-data/State_crosswalk.csv', function(state) {
        d3.csv('/data-lab-data/cfda_acronyms.csv', function(acr) {
          d3.csv('/data-lab-data/coc_pop_value.csv', function(table_data) {


            d3.selectAll("#button1").on("click", change);

            function change() {
              d3.selectAll('#viz_container').remove()
              d3.selectAll('#legend').remove()
              d3.selectAll('#legend_title').remove()
              d3.selectAll('#legend_subtitle').remove()
              d3.selectAll('#counties_mini').remove()

              GenMap()
              GenPanelTwo()
            }


            console.log('CoC US: ', us);
            console.log('CFDA State: ', cfda_state);
            //console.log('data: ', data);
            console.log('bar_chrt: ', bar_chrt);
            console.log('state: ', state);
            //console.log('scatter_data: ', scatter_data);
            console.log('table_data: ', table_data);

            d3.select('#container2_1').append('div').attr('id', 'p2_1_title')
            d3.select('#container2_1').append('div').attr('id', 'p2_1').style('top', '150px')
            d3.select('#container2_2').append('div').attr('id', 'p2_2_legend_title')
            /*d3.select('#container2_2').append('div').attr('id', 'p2_2_legend')*/
            d3.select('#container2_2').append('div').attr('id', 'p2_2')
            d3.select('#container2_3').append('div').attr('id', 'p2_3_title')
            d3.select('#container2_3').append('div').attr('id', 'p2_3')
            d3.select('#container2_2').append('div').attr('id', 'p2_4_legend')
            d3.select('#container2_2').append('div').attr('id', 'p2_4_legend_title')
            d3.select('#container2_4').append('div').attr('id', 'p2_4')
            d3.select('#CoCcontact').append('div').attr('id', 'p2_5')
            d3.select('#p2_1').append('div').attr('id', 'panel_map')
            d3.select('#p2_2').append('div').attr('id', 'panel_matrix')
            d3.select('#p2_3').append('div').attr('id', 'panel_coc')
            d3.select('#p2_4').append('div').attr('id', 'panel_info')
            d3.select('#p2_5').append('div').attr('id', 'panel_contact')


            var abs_width = 1024,
              abs_height = 575,
              margin = {
                top: 100,
                right: 50,
                bottom: 15,
                left: 100
              },
              panel_2_width = abs_width - margin.left - margin.right,
              panel_2_height = abs_height - margin.top - margin.bottom,
              matrix_width = abs_width / 1.85 - margin.left - margin.right,
              matrix_height = abs_height - margin.top - margin.bottom,
              map_width = panel_2_width - matrix_width - margin.left - margin.right - 45,
              map_height = panel_2_height / 3,
              info_width = panel_2_width - matrix_width - margin.left - margin.right,
              info_height = panel_2_height / 3,
              centered = null;

            var map_title = d3.select('#p2_1_title')
              .append('div')
              .attr('padding', '50px 0 0 0')
              .attr('class', 'p2_1_title')
              .style('text-align', 'center');

            var p2_1_map_svg = d3.select('#panel_map')
              .append('svg')
              .attr('id', 'p2_1_map')
              .attr('width', '100%') //map_width + margin.left + margin.right + 40)
              .attr('height', '350px') //map_height + margin.top + margin.bottom + 25);



            var info_panel = d3.select('#panel_info')
              .attr('width', '100%') //info_width + margin.left + margin.right)
              .attr('height', info_height + margin.top + margin.bottom - 20);

            var contact_panel = d3.select('#CoCcontact')
              .attr('width', info_width + margin.left + margin.right)
              .attr('height', info_height + margin.top + margin.bottom);

            var coc_panel = d3.select('#panel_coc')
              .attr('height', info_height + margin.top + margin.bottom)
              .attr('width', '100%');

            var p2_matrix_svg = d3.select('#panel_matrix').append('svg')
              /*.attr('width', matrix_width + margin.left + margin.right)
              .attr('height', matrix_height + margin.top + margin.bottom)*/
              .attr('width', '100%') //map_width + margin.left + margin.right + 50)
              .attr('height', map_height + margin.top + margin.bottom + 40)
              .style('margin-left', -margin.left / 2.5 + 'px')
              .attr('transform', 'translate(' + 40 + ',' + 10 + ')');

            var p2_tip = d3.tip()
              .attr('class', 'homeless-analysis d3-tip')
              .style('background', '#ffffff')
              .style('color', '#333')
              .style('border', 'solid 1px #BFBCBC')
              .style('padding', '25px')
              .style('width', '300px')
              .html(function(d) {
                return '<p style="border-bottom:1px solid #898C90; font-size: 18px; margin:0; padding-bottom:15px"><b style="color: #555555">' + d.properties.coc_number + ': ' + d.properties.COCNAME + '</b></p>' + '<br>' +
                  '<p style="color: #0071BC; margin: 0; font-size: 20px">Federal Funding: ' + getDollarValue(d) + '</p><br>' +
                  '<p style="font-size: 16px; margin-top:0; padding-top:0; margin-bottom:0; font-style: italic"> Double click to zoom in/orient</p>'
                /*+
                                '<ul style="list-style-type: circle; margin:0; padding:0 0 0 15px">'+
                                  '<li style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px">Total Homeless: ' + getValue(d) + '</li>' +
                                  '<li style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px">Sheltered Homeless: ' + getSheltered(d) + '</li>' +
                                  '<li style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px">Unsheltered Homeless: ' + getUnsheltered(d) + '</li>' +
                                  '<li style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px">Homeless Veterans: ' + getVets(d) + '</li>'+
                                '</ul>'*/
                ;
              });


            /*  .html(function(d) {
                return '<p style="border-bottom:1px solid #898C90; font-size: 18px; margin:0; padding-bottom:15px"><b>' + d.properties.coc_number + ': ' + d.properties.COCNAME + '</p>' + '<br>' +
                  '<p style="color: #0071BC; margin: 0; font-size: 20px">Total Homeless: ' + getValue(d) + '</p><br>' +
                  '<ul style="list-style-type: circle; margin:0; padding:0 0 0 15px">'+
                  '<li style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px">Sheltered Homeless: ' + getSheltered(d) + '</li>' +
                  '<li style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px">Unsheltered Homeless: ' + getUnsheltered(d) + '</li></ul>';
              })*/
            var p2_3_bar_tip = d3.tip()
              .attr('class', 'homeless-analysis d3-tip')
              .style('background', '#ffffff')
              .style('color', '#333')
              .style('border', 'solid 1px #BFBCBC')
              .style('padding', '25px')
              .style('width', '400px')
              .offset([-10, 0])
              .html(function(d) {
                return getCFDA_value(d);
              });


            var p2_1_projection = d3.geo.albersUsa()
              .translate([map_width / .9, map_height / .9]) // translate to center of screen
              .scale([575]); // scale things down so see entire US

            // Define path generator
            var p2_1_path = d3.geo.path() // path generator that will convert GeoJSON to SVG paths
              .projection(p2_1_projection); // tell path generator to use albersUsa projection

            var m = p2_1_map_svg.append('g');

            p2_1_map_svg.append('circle').attr('id', 'tipfollowscursor_2');
            p2_1_map_svg.call(p2_tip);

            bar_chrt.forEach(function(d) {
              d.fed_funding = +d.fed_funding;
            });

            cfda_state.forEach(function(d) {
              d.fed_funding = +d.fed_funding;
            });

            cfda_state.sort(function(a, b) {
              return b.fed_funding - a.fed_funding
            })

            table_data.forEach(function(d) {
              d.total_homeless = +d.total_homeless
              d.chronically_homeless = +d.chronically_homeless
              d.sheltered_homeless = +d.sheltered_homeless
              d.unsheltered_homeless = +d.unsheltered_homeless
              d.homeless_individuals = +d.homeless_individuals
              d.homeless_veterans = +d.homeless_veterans
              d.homeless_people_in_families = +d.homeless_people_in_families
              d.homeless_unaccompanied_youth = +d.homeless_unaccompanied_youth
              d.amount = +d.amount
            });

            bar_chrt = bar_chrt.sort(function(x, y) {
              return d3.descending(x.fed_funding, y.fed_funding);
            });

            // Initialize visualization
            GenMap()
            GenPanelTwo()

            var map_icon = d3.select('#homeless-action-map');
            map_icon.on('click', map_icon_function)

            var table_icon = d3.select('#homeless-action-table');
            table_icon.on('click', table_icon_function)

            function map_icon_function() {
              d3.selectAll('#viz_container').remove()
              d3.selectAll('legend_subtitle').remove()
              d3.selectAll('#counties_mini').remove()

              GenMap()
              GenPanelTwo()
            }

            function table_icon_function() {
              d3.selectAll('#viz_container').remove()
              d3.selectAll('#legend').remove()
              d3.selectAll('#legend_title').remove()
              d3.selectAll('#legend_subtitle').remove()
              d3.selectAll('#counties_mini').remove()

              GenTable()
              GenPanelTwo()
            }

            // **************************************************************

            var formatNumber = d3.format('$,.0f');
            var OtherformatNumber = d3.format(',');
            var P3_formatNumber = d3.format(',');

            function bar_click(d) {
              console.log("bar_click d: ", d);
              window.open(d.CFDA_website)
            }

            function getColor(d) {
              for (var i = 0; i < table_data.length; i++) {
                if (d.properties.coc_number === table_data[i].coc_number) {
                  if (table_data[i].total_homeless <= 0) {
                    return ('#C9CBC8')
                    /*} else if (table_data[i].total_homeless <= 100) {
                      return ('#F1F3F2');*/
                  } else if (table_data[i].total_homeless <= 200) {
                    return ('#E9ECEA');
                  } else if (table_data[i].total_homeless <= 300) {
                    return ('#E1E5E3');
                  } else if (table_data[i].total_homeless <= 500) {
                    return ('#D9DEDB');
                  } else if (table_data[i].total_homeless <= 700) {
                    return ('#D1D7D4');
                  } else if (table_data[i].total_homeless <= 1000) {
                    return ('#C9D0CD');
                  } else if (table_data[i].total_homeless <= 1500) {
                    return ('#C1C9C5');
                  } else if (table_data[i].total_homeless <= 2000) {
                    return ('#B9C2BE');
                  } else if (table_data[i].total_homeless <= 2500) {
                    return ('#A8B4AF');
                  } else if (table_data[i].total_homeless <= 3000) {
                    return ('#98A6A0');
                  } else if (table_data[i].total_homeless <= 3500) {
                    return ('#889892');
                  } else if (table_data[i].total_homeless <= 4000) {
                    return ('#778A83');
                  } else if (table_data[i].total_homeless <= 5000) {
                    return ('#677C74');
                  } else if (table_data[i].total_homeless <= 6000) {
                    return ('#576E65');
                  } else if (table_data[i].total_homeless <= 7000) {
                    return ('#476057');
                  } else if (table_data[i].total_homeless <= 8000) {
                    return ('#365248');
                  } else if (table_data[i].total_homeless <= 12000) {
                    return ('#1E3D32');
                  } else if (table_data[i].total_homeless <= 77000) {
                    return ('#06281C');
                  } else {
                    return ('#F2B400')
                  }
                }
              }
            }

            function getValue(d) {
              for (var i = 0; i < table_data.length; i++) {
                if (d.properties.coc_number === table_data[i].coc_number) {
                  return OtherformatNumber(table_data[i].total_homeless);
                }
              }
            }

            function getSheltered(d) {
              for (var i = 0; i < table_data.length; i++) {
                if (d.properties.coc_number === table_data[i].coc_number) {
                  return OtherformatNumber(table_data[i].sheltered_homeless);
                }
              }
            }

            function getUnsheltered(d) {
              for (var i = 0; i < table_data.length; i++) {
                if (d.properties.coc_number === table_data[i].coc_number) {
                  return OtherformatNumber(table_data[i].unsheltered_homeless);
                }
              }
            }

            function getVets(d) {
              for (var i = 0; i < table_data.length; i++) {
                if (d.properties.coc_number === table_data[i].coc_number) {
                  return OtherformatNumber(table_data[i].homeless_veterans);
                }
              }
            }

            function getDollarValue(d) {
              for (var i = 0; i < table_data.length; i++) {
                if (d.properties.coc_number === table_data[i].coc_number) {
                  return formatNumber(table_data[i].amount);
                }
              }
            }

            function getCFDA_value(d) {
              //console.log('CFDA value: ',d);
              return '<p style="border-bottom:1px solid #898C90; font-size: 18px; margin:0; padding-bottom:15px"><b style="color:#555555">' + d.program_title + '</b> [CFDA No. ' + d.cfda_number + ']' + '</p><br>' +
                '<p style="font-size: 16px; margin-top:0; padding-top:0; margin-bottom:0">Agency: ' + d.agency + '</p><br>' +
                '<p style="color: #0071BC; margin: 0; font-size: 20px; padding:0">Federal Funding: ' + formatNumber(d.fed_funding) + '</p><br>' +
                '<p style="font-size: 16px; margin-top:0; padding-top:0; margin-bottom:0; font-style: italic">Click to visit the program website</p>';
            }

            function getState(d) {
              for (var i = 0; i < table_data.length; i++) {
                if (d.properties.STUSAB === state[i].Abbrv) {
                  return state[i].State;
                }
              }
            }

            function getProgram(d) {
              for (var i = 0; i < bar_chrt.length; i++) {
                if (d.cfda_number === acr[i].cfda_number) {
                  return acr[i].acronym
                }
              }
            }
            //*************************************************************

            function GenMap() {
              spinner_panel1.stop();

              d3.select('#container').append('div').attr('id', 'legend_title');
              d3.select('#container').append('div').attr('id', 'legend_subtitle')
              d3.select('#container').append('div').attr('id', 'viz_container');
              d3.select('#container').append('div').attr('id', 'legend');

              var width = 1000,
                height = 600,
                centered = null;

              // D3 Projection
              var projection = d3.geo.albersUsa()
                .translate([width / 2, height / 2]) // translate to center of screen
                .scale([1200]); // scale things down so see entire US ---1455

              // Define path generator
              var path = d3.geo.path() // path generator that will convert GeoJSON to SVG paths
                .projection(projection); // tell path generator to use albersUsa projection

              var div = d3.select('#viz_container')
                .append('div')
                .attr('id', 'map_container')
                .attr('width', width)
                .attr('height', height);

              var map_svg = d3.select('#map_container')
                .append('svg')
                .attr('id', 'svg')
                .attr('width', '950px')
                .attr('height', '575px');

              var tip = d3.tip()
                .attr('class', 'homeless-analysis d3-tip')
                .style('background', '#ffffff')
                .style('color', '#333')
                .style('border', 'solid 1px #BFBCBC')
                .style('padding', '25px')
                .style('width', '300px')
                .offset([-10, -10])
                .html(function(d) {
                  return '<p style="border-bottom:1px solid #898C90; font-size: 18px; margin:0; padding-bottom:15px"><b style="color:#555555">' + d.properties.coc_number + ': ' + d.properties.COCNAME + '</p>' + '<br>' +
                    /*'<hr style="height: 1px; color: #BFBCBC">'*/
                    '<p style="color: #0071BC; margin: 0; padding-bottom:0; font-size: 20px; line-height: 22px">Total Homeless: ' + getValue(d) + '</p><br>' +
                    '<ul style="list-style-type: circle; margin:0; padding:0 0 0 15px">' +
                    '<li style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px">Sheltered Homeless: ' + getSheltered(d) + '</li>' +
                    '<li style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px">Unsheltered Homeless: ' + getUnsheltered(d) + '</li></ul><br>' +
                    '<p style="font-size: 16px; margin-top:0; padding-top:0; margin-bottom:0; font-style: italic"> Double click to zoom in/orient</p>';
                })

              map_svg.append('circle').attr('id', 'tipfollowscursor_1');
              map_svg.call(tip);

              var g = map_svg.append('g')
                .attr('class', 'counties')
                .selectAll('path')
                .data(us.features)
                .enter().append('path')
                .attr('class', 'coc')
                .attr('data-coc', function(d) {
                  return d.properties.coc_number;
                })
                .attr('data-state', function(d) {
                  return d.properties.state;
                })
                .attr('data-name', function(d) {
                  return d.properties.name;
                })
                .attr('d', path)
                .on('mouseover', function(d) {
                  var target = d3.select('#tipfollowscursor_1')
                    .attr('cx', d3.event.offsetX)
                    .attr('cy', d3.event.offsetY - 30)
                    .node();
                  tip.show(d, target);
                })
                .on('mouseout', tip.hide)
                .on('dblclick', clicked)
                .on("click", function(d) {
                  BarChart(d);
                  createCoCTable(d);
                  Make_Map_Title(d)
                  StateBarChart(d);
                  createContact(d)
                  //createCFDATableHover(d);
                  p2_1_clicked_p1(d);
                })
                .style('fill', getColor);

              function clicked(d) {
                var x, y, k;

                //console.log('Panel 1 clicked, d: ',d);
                if (d && centered !== d) {
                  var centroid = path.centroid(d)
                  x = centroid[0]
                  y = centroid[1]
                  console.log('clicked d: ', d);
                  console.log('clicked centroid: ', centroid);
                  console.log('clicked area: ', d.properties.Shape__Are);
                  if (d.properties.COCNAME == 'Hawaii Balance of State CoC') {
                    k = 6.0
                  } else if (d.properties.COCNAME == 'Alaska Balance of State CoC') {
                    k = 4.0
                  } else if (d.properties.COCNAME == 'Maine Balance of State CoC') {
                    k = 5.0
                  } else if (d.properties.Shape__Are <= .4) {
                    k = 17.0
                  } else if (d.properties.Shape__Are > .4 && d.properties.Shape__Are <= 1) {
                    k = 14.0
                  } else if (d.properties.Shape__Are > 1 && d.properties.Shape__Are <= 5) {
                    k = 12.0
                  } else if (d.properties.Shape__Are > 5 && d.properties.Shape__Are <= 17) {
                    k = 6.0
                  } else if (d.properties.Shape__Are > 17 && d.properties.Shape__Are <= 55) {
                    k = 3.0
                  } else {
                    k = 2.0
                  };
                  centered = d;

                } else {
                  x = width / 2;
                  y = height / 2;
                  k = 1;
                  centered = null;

                }

                g.selectAll('path')
                  .classed('active', centered && function(d) {
                    return d === centered;
                  });

                g.transition()
                  .duration(750)
                  .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')')
                  .style('stroke-width', .25 / k + 'px');
              }
            } //end of GenMap()

            function GenTable() {

              ////console.log('table data: ', table_data)

              var column_names = ['CoC Number', 'CoC Name', 'Total Homeless', 'Sheltered Homeless', 'Unsheltered Homeless', 'Chronically Homeless', 'Homeless Veterans', 'Homeless Individuals', 'Homeless People in Families', 'Homeless Unaccompanied Youth (Under 25)'];

              var clicks = {
                coc_number: 0,
                coc_name: 0,
                total_homeless: 0,
                chronically_homeless: 0,
                sheltered_homeless: 0,
                unsheltered_homeless: 0,
                homeless_veterans: 0,
                homeless_individuals: 0,
                homeless_people_in_families: 0,
                homeless_unaccompanied_youth: 0
              };

              d3.select('#container')
                .attr('height', '100%')
                .attr('width', '100%');

              d3.select('#container').append('div')
                .attr('id', 'viz_container');

              d3.select('#viz_container').append('div')
                .attr('class', 'SearchBar')
                .append('p')
                .attr('class', 'SearchBar')
                .style('margin-bottom', '10px')
                .text('Search By CoC Name:');

              d3.select('.SearchBar')
                .append('input')
                .attr('class', 'SearchBar')
                .attr('id', 'search')
                .attr('type', 'text')
                .attr('placeholder', 'Search...')
                .style('font-family', 'inherit')
                .style('margin-bottom', '10px')
                .style('font-size', '16')
                .style('color','#000');

              d3.select('#viz_container').append('div')
                .attr('id', 'table_container')
                .style('margin-top', '10px');

              var table = d3.select('#table_container').append('table').attr('id', 'tab');
              table.append('thead').append('tr');

              var headers = table.select('tr').selectAll('th')
                .data(column_names)
                .enter()
                .append('th')
                .text(function(d) {
                  return d;
                });

              var rows, row_entries, row_entries_no_anchor, row_entries_with_anchor;

              // draw table body with rows
              table.append('tbody')

              // data bind
              rows = table.select('tbody').selectAll('tr')
                .data(table_data, function(d) {
                  return d.coc_number;
                });

              // enter the rows
              rows.enter()
                .append('tr')

              // enter td's in each row
              row_entries = rows.selectAll('td')
                .data(function(d) {
                  var arr = [];
                  for (var k in d) {
                    if (d.hasOwnProperty(k)) {
                      arr.push(d[k]);
                    }
                  }
                  return [arr[0], arr[1], arr[2], arr[3], arr[4], arr[7], arr[8], arr[5], arr[6], arr[9]];
                })
                .enter()
                .append('td')

              // draw row entries with no anchor
              row_entries_no_anchor = row_entries.filter(function(d) {
                return (/https?:\/\//.test(d) == false)
              })
              row_entries_no_anchor.text(function(d) {
                return d;
              })

              // draw row entries with anchor
              row_entries_with_anchor = row_entries.filter(function(d) {
                return (/https?:\/\//.test(d) == true)
              })
              row_entries_with_anchor
                .append('a')
                .attr('href', function(d) {
                  return d;
                })
                .attr('target', '_blank')
                .text(function(d) {
                  return d;
                })

              /**  search functionality **/
              d3.select('#search')
                .on('keyup', function() { // filter according to key pressed
                  var searched_data = table_data,
                    text = this.value.trim();

                  var searchResults = searched_data.map(function(r) {
                    var regex = new RegExp('^' + text, 'i');
                    if (regex.test(r.coc_name)) { // if there are any results
                      return regex.exec(r.coc_name)[0]; // return them to searchResults
                    }
                  })

                  // filter blank entries from searchResults
                  searchResults = searchResults.filter(function(r) {
                    return r != undefined;
                  })

                  // filter dataset with searchResults
                  searched_data = searchResults.map(function(r) {
                    return table_data.filter(function(p) {
                      return p.coc_name.indexOf(r) != -1;
                    })
                  })

                  // flatten array
                  searched_data = [].concat.apply([], searched_data)

                  // data bind with new data
                  rows = table.select('tbody').selectAll('tr')
                    .data(searched_data, function(d) {
                      return d.coc_number;
                    })
                    .attr('class', 'panel_1_table');

                  // enter the rows
                  rows.enter()
                    .append('tr');

                  // enter td's in each row
                  row_entries = rows.selectAll('td')
                    .data(function(d) {
                      var arr = [];
                      for (var k in d) {
                        if (d.hasOwnProperty(k)) {
                          arr.push(d[k]);
                        }
                      }
                      return [arr[0], arr[1], arr[2], arr[3], arr[4], arr[7], arr[8], arr[5], arr[6], arr[9]];
                    })
                    .enter()
                    .append('td')

                  // draw row entries with no anchor
                  row_entries_no_anchor = row_entries.filter(function(d) {
                    return (/https?:\/\//.test(d) == false)
                  })
                  row_entries_no_anchor.text(function(d) {
                    return d;
                  })

                  // draw row entries with anchor
                  row_entries_with_anchor = row_entries.filter(function(d) {
                    return (/https?:\/\//.test(d) == true)
                  })
                  row_entries_with_anchor
                    .append('a')
                    .attr('href', function(d) {
                      return d;
                    })
                    .attr('target', '_blank')
                    .text(function(d) {
                      return d;
                    })

                  // exit
                  rows.exit().remove();
                })

              /**  sort functionality **/
              headers.on('click', function(d) {
                if (d == 'CoC Number') {
                  clicks.coc_number++
                    if (clicks.coc_number % 2 == 0) {
                      rows.sort(function(a, b) {
                        return a.coc_number.localeCompare(b.coc_number);
                      })
                    } else
                  if (clicks.coc_number % 2 !== 0) {
                    rows.sort(function(a, b) {
                      return b.coc_number.localeCompare(a.coc_number);
                    })
                  }
                }

                if (d == 'CoC Name') {
                  clicks.coc_name++
                    if (clicks.coc_name % 2 == 0) {
                      rows.sort(function(a, b) {
                        return a.coc_name.localeCompare(b.coc_name);
                      })
                    } else
                  if (clicks.coc_name % 2 !== 0) {
                    rows.sort(function(a, b) {
                      return b.coc_name.localeCompare(a.coc_name);
                    })
                  }
                }

                if (d == 'Total Homeless') {
                  clicks.total_homeless++;
                  //console.log('rows.total_homeless: ', rows.total_homeless)
                  if (clicks.total_homeless % 2 == 0) {
                    // sort ascending: numerically
                    rows.sort(function(a, b) {
                      if (+a.total_homeless < +b.total_homeless) {
                        return -1;
                      } else if (+a.total_homeless > +b.total_homeless) {
                        return 1;
                      } else {
                        return 0;
                      }
                    });
                    // odd number of clicks
                  } else if (clicks.total_homeless % 2 !== 0) {
                    // sort descending: numerically
                    rows.sort(function(a, b) {
                      if (+b.total_homeless > +a.total_homeless) {
                        return 1;
                      } else if (+b.total_homeless < +a.total_homeless) {
                        return -1;
                      } else {
                        return 0;
                      }
                    });
                  }
                }

                if (d == 'Chronically Homeless') {
                  clicks.chronically_homeless++;
                  // even number of clicks
                  if (clicks.chronically_homeless % 2 == 0) {
                    // sort ascending: alphabetically
                    rows.sort(function(a, b) {
                      if (a.chronically_homeless < b.chronically_homeless) {
                        return -1;
                      } else if (a.chronically_homeless > b.chronically_homeless) {
                        return 1;
                      }
                    });
                    // odd number of clicks
                  } else if (clicks.chronically_homeless % 2 !== 0) {
                    // sort descending: alphabetically
                    rows.sort(function(a, b) {
                      if (a.chronically_homeless < b.chronically_homeless) {
                        return 1;
                      } else if (a.chronically_homeless > b.chronically_homeless) {
                        return -1;
                      }
                    });
                  }
                }
                if (d == 'Sheltered Homeless') {
                  clicks.sheltered_homeless++;
                  // even number of clicks
                  if (clicks.sheltered_homeless % 2 == 0) {
                    // sort ascending: numerically
                    rows.sort(function(a, b) {
                      if (+a.sheltered_homeless < +b.sheltered_homeless) {
                        return -1;
                      } else if (+a.sheltered_homeless > +b.sheltered_homeless) {
                        return 1;
                      }
                    });
                    // odd number of clicks
                  } else if (clicks.sheltered_homeless % 2 !== 0) {
                    // sort descending: numerically
                    rows.sort(function(a, b) {
                      if (+a.sheltered_homeless < +b.sheltered_homeless) {
                        return 1;
                      } else if (+a.sheltered_homeless > +b.sheltered_homeless) {
                        return -1;
                      }
                    });
                  }
                }
                if (d == 'Unsheltered Homeless') {
                  clicks.unsheltered_homeless++;
                  // even number of clicks
                  if (clicks.unsheltered_homeless % 2 == 0) {
                    // sort ascending: numerically
                    rows.sort(function(a, b) {
                      if (+a.unsheltered_homeless < +b.unsheltered_homeless) {
                        return -1;
                      } else if (+a.unsheltered_homeless > +b.unsheltered_homeless) {
                        return 1;
                      }
                    });
                    // odd number of clicks
                  } else if (clicks.unsheltered_homeless % 2 !== 0) {
                    // sort descending: numerically
                    rows.sort(function(a, b) {
                      if (+a.unsheltered_homeless < +b.unsheltered_homeless) {
                        return 1;
                      } else if (+a.unsheltered_homeless > +b.unsheltered_homeless) {
                        return -1;
                      }
                    });
                  }
                }
                if (d == 'Homeless Veterans') {
                  clicks.homeless_veterans++;
                  // even number of clicks
                  if (clicks.homeless_veterans % 2 == 0) {
                    // sort ascending: numerically
                    rows.sort(function(a, b) {
                      if (+a.homeless_veterans < +b.homeless_veterans) {
                        return -1;
                      } else if (+a.homeless_veterans > +b.homeless_veterans) {
                        return 1;
                      }
                    });
                    // odd number of clicks
                  } else if (clicks.homeless_veterans % 2 !== 0) {
                    // sort descending: numerically
                    rows.sort(function(a, b) {
                      if (+a.homeless_veterans < +b.homeless_veterans) {
                        return 1;
                      } else if (+a.homeless_veterans > +b.homeless_veterans) {
                        return -1;
                      }
                    });
                  }
                }
                if (d == 'Homeless Individuals') {
                  clicks.homeless_individuals++;
                  // even number of clicks
                  if (clicks.homeless_individuals % 2 == 0) {
                    // sort ascending: numerically
                    rows.sort(function(a, b) {
                      if (+a.homeless_individuals < +b.homeless_individuals) {
                        return -1;
                      } else if (+a.homeless_individuals > +b.homeless_individuals) {
                        return 1;
                      }
                    });
                    // odd number of clicks
                  } else if (clicks.homeless_individuals % 2 !== 0) {
                    // sort descending: numerically
                    rows.sort(function(a, b) {
                      if (+a.homeless_individuals < +b.homeless_individuals) {
                        return 1;
                      } else if (+a.homeless_individuals > +b.homeless_individuals) {
                        return -1;
                      }
                    });
                  }
                }
                if (d == 'Homeless People in Families') {
                  clicks.homeless_people_in_families++;
                  // even number of clicks
                  if (clicks.homeless_people_in_families % 2 == 0) {
                    // sort ascending: numerically
                    rows.sort(function(a, b) {
                      if (+a.homeless_people_in_families < +b.homeless_people_in_families) {
                        return -1;
                      } else if (+a.homeless_people_in_families > +b.homeless_people_in_families) {
                        return 1;
                      }
                    });
                    // odd number of clicks
                  } else if (clicks.homeless_people_in_families % 2 !== 0) {
                    // sort descending: numerically
                    rows.sort(function(a, b) {
                      if (+a.homeless_people_in_families < +b.homeless_people_in_families) {
                        return 1;
                      } else if (+a.homeless_people_in_families > +b.homeless_people_in_families) {
                        return -1;
                      }
                    });
                  }
                }
                if (d == 'Homeless Unaccompanied Youth (Under 25)') {
                  clicks.homeless_unaccompanied_youth++;
                  // even number of clicks
                  if (clicks.homeless_unaccompanied_youth % 2 == 0) {
                    // sort ascending: numerically
                    rows.sort(function(a, b) {
                      if (+a.homeless_unaccompanied_youth < +b.homeless_unaccompanied_youth) {
                        return -1;
                      } else if (+a.homeless_unaccompanied_youth > +b.homeless_unaccompanied_youth) {
                        return 1;
                      }
                    });
                    // odd number of clicks
                  } else if (clicks.homeless_unaccompanied_youth % 2 !== 0) {
                    // sort descending: numerically
                    rows.sort(function(a, b) {
                      if (+a.homeless_unaccompanied_youth < +b.homeless_unaccompanied_youth) {
                        return 1;
                      } else if (+a.homeless_unaccompanied_youth > +b.homeless_unaccompanied_youth) {
                        return -1;
                      }
                    });
                  }
                }
              }) // end of click listeners

              //Scrollable body, frozen headers
              document.getElementById('table_container').addEventListener('scroll', function() {
                console.log("SCROLL!!!! ", this)
                var translate = 'translate(0,' + this.scrollTop + 'px)';
                this.querySelector('thead').style.transform = translate;
              });

            } // end of GenTable()

            function GenPanelTwo() {

              spinner_panel2.stop();
              spinner_panel3.stop();
              spinner_panel4.stop();
              spinner_panel5.stop();

              p2_1_map_svg.call(p2_tip)

              // Initialize Panel 2 info
              for (var y = 0; y < us.features.length; y++) {
                if (us.features[y].properties.coc_number == 'CA-600') {
                  var la = us.features[y];
                  BarChart(la);
                  StateBarChart(la);
                  createContact(la);
                  createCoCTable(la);
                  Make_Map_Title(la)
                  p2_1_clicked_p1(la)
                }
              }

              //MAP
              var centered = null;

              //var OnMouseOver = 'BarChart; tip.show'

              m.selectAll('p2_1_path')
                .data(us.features)
                .enter().append('path')
                .attr('d', p2_1_path)
                .attr('id', 'counties_mini')
                .attr('data-coc', function(d) {
                  return d.properties.coc_number;
                })
                .attr('data-state', function(d) {
                  return d.properties.state;
                })
                .attr('data-name', function(d) {
                  return d.properties.name;
                })
                .attr('d', p2_1_path)
                .on('click', function(d) {
                  BarChart(d);
                  StateBarChart(d);
                  createCoCTable(d);
                  Make_Map_Title(d)
                  createContact(d);
                })
                .style('fill', p2_getColor)
                .on('dblclick', p2_1_clicked)
                .on('mouseover', function(d) {
                  var target = d3.select('#tipfollowscursor_2')
                    .attr('cx', d3.event.offsetX)
                    .attr('cy', d3.event.offsetY - 30)
                    .node();
                  p2_tip.show(d, target);
                })
                .on('mouseout', p2_tip.hide);

              function p2_getColor(d) {
                for (var i = 0; i < table_data.length; i++) {
                  if (d.properties.coc_number === table_data[i].coc_number) {
                    if (table_data[i].amount <= 500000) {
                      return ('#BEF399');
                    } else if (table_data[i].amount <= 1500000) {
                      return ('#B0EC9A');
                    } else if (table_data[i].amount <= 2500000) {
                      return ('#A3E59B');
                    } else if (table_data[i].amount <= 5000000) {
                      return ('#96DD9B');
                    } else if (table_data[i].amount <= 7500000) {
                      return ('#8AD59C');
                    } else if (table_data[i].amount <= 10000000) {
                      return ('#80CE9C');
                    } else if (table_data[i].amount <= 20000000) {
                      return ('#76C69C');
                    } else if (table_data[i].amount <= 30000000) {
                      return ('#6DBD9B');
                    } else if (table_data[i].amount <= 40000000) {
                      return ('#66B59A');
                    } else if (table_data[i].amount <= 50000000) {
                      return ('#5FAD98');
                    } else if (table_data[i].amount <= 60000000) {
                      return ('#5AA496');
                    } else if (table_data[i].amount <= 70000000) {
                      return ('#569C93');
                    } else if (table_data[i].amount <= 80000000) {
                      return ('#529490');
                    } else if (table_data[i].amount <= 90000000) {
                      return ('#508B8C');
                    } else if (table_data[i].amount <= 100000000) {
                      return ('#4E8387');
                    } else if (table_data[i].amount <= 150000000) {
                      return ('#465261');
                    } else if (table_data[i].amount <= 200000000) {
                      return ('#3E3C4A');
                    } else {
                      return ('#291C24')
                    }
                  }
                }
              }
            } // end of GenPanelTwo
            function p2_1_clicked(d) {
              var x, y, k;

              if (d && centered !== d) {
                var centroid = p2_1_path.centroid(d)
                x = centroid[0]
                y = centroid[1]
                console.log('clicked d: ', d);
                console.log('clicked centroid: ', centroid);
                console.log('clicked area: ', d.properties.Shape__Are);
                if (d.properties.COCNAME == 'Hawaii Balance of State CoC') {
                  k = 6.0
                } else if (d.properties.COCNAME == 'Alaska Balance of State CoC') {
                  k = 4.0
                } else if (d.properties.COCNAME == 'Maine Balance of State CoC') {
                  k = 5.0
                } else if (d.properties.Shape__Are <= .4) {
                  k = 17.0
                } else if (d.properties.Shape__Are > .4 && d.properties.Shape__Are <= 1) {
                  k = 14.0
                } else if (d.properties.Shape__Are > 1 && d.properties.Shape__Are <= 5) {
                  k = 12.0
                } else if (d.properties.Shape__Are > 5 && d.properties.Shape__Are <= 17) {
                  k = 6.0
                } else if (d.properties.Shape__Are > 17 && d.properties.Shape__Are <= 55) {
                  k = 3.0
                } else {
                  k = 2.0
                };
                centered = d;

              } else {
                x = map_width / 1.35;
                y = map_height / 1.1;
                k = 1;
                centered = null;

              }

              m.selectAll('p2_1_path')
                .classed('active', centered && function(d) {
                  return d === centered;
                });

              m.transition()
                .duration(750)
                .attr('transform', 'translate(' + map_width / 1.35 + ',' + map_height / 1.1 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')')
                .style('stroke-width', .15 / k + 'px');
            }

            function p2_1_clicked_p1(d) {
              var x, y, k;
              var centroid = p2_1_path.centroid(d)
              x = centroid[0]
              y = centroid[1]
              console.log('clicked d: ', d);
              console.log('clicked centroid: ', centroid);
              console.log('clicked area: ', d.properties.Shape__Are);
              if (d.properties.COCNAME == 'Hawaii Balance of State CoC') {
                k = 6.0
              } else if (d.properties.COCNAME == 'Alaska Balance of State CoC') {
                k = 4.0
              } else if (d.properties.COCNAME == 'Maine Balance of State CoC') {
                k = 5.0
              } else if (d.properties.Shape__Are <= .4) {
                k = 17.0
              } else if (d.properties.Shape__Are > .4 && d.properties.Shape__Are <= 1) {
                k = 14.0
              } else if (d.properties.Shape__Are > 1 && d.properties.Shape__Are <= 5) {
                k = 12.0
              } else if (d.properties.Shape__Are > 5 && d.properties.Shape__Are <= 17) {
                k = 6.0
              } else if (d.properties.Shape__Are > 17 && d.properties.Shape__Are <= 55) {
                k = 3.0
              } else {
                k = 2.0
              };
              centered = d;



              m.selectAll('p2_1_path')
                .classed('active', centered && function(d) {
                  return d === centered;
                });

              m.transition()
                .duration(750)
                .attr('transform', 'translate(' + map_width / 1.35 + ',' + map_height / 1.1 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')')
                .style('stroke-width', .15 / k + 'px');
            }

            function createCoCTable(d) {
              $('#panel_coc').empty();
              coc_panel.append('div')
                .attr('id', 'coc_info')
                .attr('height', info_height + margin.top + margin.bottom)
                .attr('width', '100%')
                .html(Make_CoC_Table(d))
            }

            function filter_cfdaAmount(x) {
              return x.fed_funding > 0;
            }

            function Make_CoC_Table(d) {
              d3.selectAll('#p2_quad3_title').remove();
              var quad3_title = d3.select('#p2_3_title')
                .append('div')
                .attr('width', '100%')
                .attr('min-height', '50px')
                .attr('padding', '0 0 0 50px')
                .attr('id', 'p2_quad3_title')
                .style('text-align', 'center')
                .html('<p style="color:#333; font-size: 18px"><b>' + d.properties.coc_number + ' Homeless Counts</b></p>');

              var OtherformatNumber = d3.format(',');
              console.log('Make CoC Table d: ', d);
              console.log("table_data: ", table_data);
              for (var i = 0; i < table_data.length; i++) {
                if (table_data[i].coc_number === d.properties.coc_number) {
                  var tab_dat = table_data[i];
                  console.log('tab_dat: ', tab_dat);
                  return '<table><tr><td class="panel_text">' + 'Homeless Individuals ' + '</td><td class="panel_text2">' + OtherformatNumber(tab_dat.homeless_individuals) + '</td></tr>' +
                    '<tr><td class="panel_text" style="border-bottom:1pt solid black">' + 'Homeless People in Families ' + '</td><td class="panel_text2"  style="border-bottom:1pt solid black">' + OtherformatNumber(tab_dat.homeless_people_in_families) + '</td></tr>' +
                    '<tr><td class="panel_text">' + 'Total Homeless' + '</td><td class="panel_text2">' + OtherformatNumber(tab_dat.total_homeless) + '</td></tr>' + '</table>' +


                    '<table><tr><td class="panel_text">' + 'Sheltered Homeless ' + '</td><td class="panel_text2">' + OtherformatNumber(tab_dat.sheltered_homeless) + '</td></tr>' +
                    '<tr><td class="panel_text" style="border-bottom:1pt solid black">' + 'Unsheltered Homeless ' + '</td><td class="panel_text2" style="border-bottom:1pt solid black">' + OtherformatNumber(tab_dat.unsheltered_homeless) + '</td></tr>' +
                    '<tr><td class="panel_text">' + 'Total Homeless' + '</td><td class="panel_text2">' + OtherformatNumber(tab_dat.total_homeless) + '</td></tr>' + '</table>' +

                    '<table style="margin-bottom:0"><tr><td class="panel_text">' + 'Chronically Homeless ' + '</td><td class="panel_text2">' + OtherformatNumber(tab_dat.chronically_homeless) + '</td></tr>' +
                    '<tr><td class="panel_text">' + 'Homeless Veterans ' + '</td><td class="panel_text2">' + OtherformatNumber(tab_dat.homeless_veterans) + '</td></tr>' + '</table>'

                }
              }
            }

            function Make_Map_Title(d) {
              return map_title.html('<h1 class="panel_title">' + d.properties.coc_number + ': ' + d.properties.COCNAME + '</h1>')
            }


            function BarChart(d) {

              $('#panel_info').empty();
              d3.select('#panel_matrix > svg').remove()
              d3.select('#p2_cfda_legend_title').remove()
              /*d3.select('#p2_cfda_legend').remove()*/

              var cfda_legend_title = d3.select('#p2_2_legend_title')
                .append('div')
                //.attr('width', '500px')
                .attr('min-height', '75px')
                .attr('padding', '0 0 0 0')
                .attr('id', 'p2_cfda_legend_title')
                .style('text-align', 'center')
                .html('<p style="color: #333; font-size: 18px;"><b>Federal Programs Serving ' + d.properties.coc_number + '</b></p>');

              var p2_3_matrix_svg = d3.select('#panel_matrix').append('svg')
                /*.attr('width', matrix_width + margin.left + margin.right)
                .attr('height', matrix_height + margin.top + margin.bottom)*/
                .attr('width', '100%')
                .attr('height', map_height + margin.top + margin.bottom + 40)
                .style('margin-left', -margin.left / 2.5 + 'px')
                .attr('transform', 'translate(' + 40 + ',' + 10 + ')');

              p2_3_matrix_svg.call(p2_3_bar_tip);

              function filter_cocNum_barChart(bar_chrt) {
                return bar_chrt.coc_number == d.properties.coc_number;
              }

              var initial = bar_chrt.filter(filter_cocNum_barChart);
              var initial_bar = initial.filter(filter_cfdaAmount);
              var formatNumber = d3.format('$,');
              var OtherformatNumber = d3.format(',');

              var axisMargin = 5,
                x_width = 470,
                barHeight = 18,
                barPadding = 5,
                bar, scale, p2_xAxis, labelWidth = 0;

              max = d3.max(initial_bar, function(d) {
                return d.fed_funding;
              });

              bar = p2_3_matrix_svg.selectAll('g')
                .data(initial_bar)
                .enter()
                .append('g');

              bar.attr('class', 'bar')
                .attr('cx', 0)
                .style('fill', function(d) {
                  if (d.category == 'Housing') {
                    return '#324D5C'
                  }
                  /*else if (d.category == 'Food') {
                                   return '#A5636E'
                                 }*/
                  else if (d.category == 'Health') {
                    return '#F0CA4D'
                  } else if (d.category == 'Education') {
                    return '#2A5DA8'
                  } else if (d.category == 'Support Services') {
                    return '#E37B40'
                  } else if (d.category == 'Employment') {
                    return '#F53855'
                  }
                })
                .attr('transform', function(d, i) {
                  return 'translate(50,' + (i * (barHeight + barPadding)) + ')';
                })
                .on('mouseover', p2_3_bar_tip.show)
                .on('mouseout', p2_3_bar_tip.hide)
                .on('click', bar_click);

              bar.append('text')
                .attr('class', 'label')
                .attr('x', -40)
                .attr('y', barHeight / 2)
                .attr('dy', '.35em') //vertical align middle
                .text(function(d) {
                  return getProgram(d);
                }).each(function() {
                  labelWidth = 30;
                });

              scale = d3.scale.linear()
                .domain([0, max])
                .range([0, x_width - labelWidth]);

              p2_xAxis = d3.svg.axis()
                //.orient('bottom')
                .scale(scale)
                .tickSize(-p2_matrix_svg[0][0].attributes[1].nodeValue + axisMargin)
                .tickFormat(function(d) {
                  return formatNumber(d);
                });

              yAxis = d3.svg.axis()
                .orient('left');

              bar.append('rect')
                .attr('transform', 'translate(' + labelWidth + ',0)')
                .attr('margin-left', 5)
                //.attr('rx','30')
                .attr('height', barHeight)
                .attr('width', function(d) {
                  return scale(d.fed_funding);
                });

              p2_3_matrix_svg.insert('g', ':first-child')
                .attr('class', 'axisHorizontal')
                .attr('transform', 'translate(' + 80 + ',' + 235 + ')')
                .call(p2_xAxis)
                .selectAll('text')
                .attr('y', 10)
                .attr('x', 0)
                .attr('dy', '.35em')
                .attr('transform', 'rotate(-35)')
                .style('font-size', '12')
                .style('text-anchor', 'end');
            }



            function StateBarChart(d) {
              console.log('State bar chart d: ', d);
              d3.select('#panel_info > svg').remove()
              d3.select('#p2_4_cfda_legend_title').remove()
              d3.select('#p2_4_cfda_legend').remove()


              var cfda_legend = d3.select('#p2_4_legend')
                .append('div')
                .attr('width', '100%')
                .attr('height', '75px')
                .attr('padding', '50px 0 0 50px')
                .attr('id', 'p2_4_cfda_legend');

              var cfda_color = ['#324D5C', '#2A5DA8', '#F53855', '#E37B40', '#F0CA4D'];

              var cfda_legend_key_values = ['Housing', 'Education', 'Employment', 'Support Services', 'Health'];

              for (var i = 0; i < 5; i++) {

                var l = cfda_legend.append('div')
                  .attr('id', 'p2_2_legend_key');

                var cfda_key = l.append('div')
                  .attr('id', 'p2_2_key')
                  .style('position', 'relative')
                  .append('svg')
                  .attr('height', '40px')
                  .attr('width', '53px')
                  .append('rect')
                  .attr('x', 7)
                  .attr('y', 7)
                  .attr('height', 20)
                  .attr('width', 20)
                  .style('fill', function(d) {
                    return cfda_color[i];
                  });

                l.append('div')
                  .attr('id', 'p2_2_key_value')
                  .style('position', 'relative')
                  .style('color', 'blue')
                  .html('<p>' + cfda_legend_key_values[i] + '</p>');
              }

              var cfda_legend_title = d3.select('#p2_4_legend_title')
                .append('div')
                .attr('width', '100%')
                .attr('height', '75px')
                .attr('padding', '40px 0 0 40px')
                .attr('id', 'p2_4_cfda_legend_title')
                .html('<p style="color:#333; font-size:18px; text-align: center"><b>Federal Programs Serving ' + getState(d) + '*</b></p>');

              var p2_4_matrix_svg = d3.select('#panel_info').append('svg')
                /*.attr('width', matrix_width + margin.left + margin.right)
                .attr('height', matrix_height + margin.top + margin.bottom)*/
                .attr('width', '100%')
                .attr('height', map_height + margin.top + margin.bottom + 140)
                .style('margin-left', -margin.left / 2.5 - 12 + 'px')
                .attr('transform', 'translate(' + 40 + ',' + 10 + ')');

              p2_4_matrix_svg.call(p2_3_bar_tip);

              function filter_state_barChart(cfda_state) {
                return cfda_state.State_code == d.properties.STUSAB;
              }

              var initial = cfda_state.filter(filter_state_barChart);
              var initial_bar = initial.filter(filter_cfdaAmount);
              var formatNumber = d3.format('$,');

              console.log('state bar initial_bar: ', initial)
              var axisMargin = 5,
                x_width = 470,
                barHeight = 18,
                barPadding = 5,
                bar, scale, p2_xAxis, labelWidth = 0;

              max = d3.max(initial_bar, function(d) {
                return d.fed_funding;
              });

              bar = p2_4_matrix_svg.selectAll('g')
                .data(initial_bar)
                .enter()
                .append('g');

              bar.attr('class', 'bar')
                .attr('cx', 0)
                .style('fill', function(d) {
                  if (d.category == 'Housing') {
                    return '#324D5C'
                  }
                  /*else if (d.category == 'Food') {
                                   return '#A5636E'
                                 }*/
                  else if (d.category == 'Health') {
                    return '#F0CA4D'
                  } else if (d.category == 'Education') {
                    return '#2A5DA8'
                  } else if (d.category == 'Support Services') {
                    return '#E37B40'
                  } else if (d.category == 'Employment') {
                    return '#F53855'
                  }
                })
                .attr('transform', function(d, i) {
                  return 'translate(50,' + (i * (barHeight + barPadding)) + ')';
                })
                .on('mouseover', p2_3_bar_tip.show)
                .on('mouseout', p2_3_bar_tip.hide)
                .on('click', bar_click);

              bar.append('text')
                .attr('class', 'label')
                .attr('x', -40)
                .attr('y', barHeight / 2)
                .attr('dy', '.35em') //vertical align middle
                .text(function(d) {
                  return getProgram(d);
                }).each(function() {
                  labelWidth = 30;
                });

              scale = d3.scale.linear()
                .domain([0, max])
                .range([0, x_width - labelWidth]);

              p2_xAxis = d3.svg.axis()
                //.orient('bottom')
                .scale(scale)
                .tickSize(-p2_matrix_svg[0][0].attributes[1].nodeValue + axisMargin - 50)
                .tickFormat(function(d) {
                  return formatNumber(d);
                });

              yAxis = d3.svg.axis()
                .orient('left')
                .tickSize(0, 400);

              bar.append('rect')
                .attr('transform', 'translate(' + labelWidth + ',0)')
                .attr('margin-left', 5)
                //.attr('rx','30')
                .attr('height', barHeight)
                .attr('width', function(d) {
                  return scale(d.fed_funding);
                });

              p2_4_matrix_svg.insert('g', ':first-child')
                .attr('class', 'axisHorizontal2')
                .attr('transform', 'translate(' + 80 + ',' + 250 + ')')
                .call(p2_xAxis)
                .selectAll('text')
                .attr('y', 10)
                .attr('x', 0)
                .attr('dy', '.35em')
                .attr('transform', 'rotate(-35)')
                .style('font-size', '12')
                .style('text-anchor', 'end');
            }

            function createContact(d) {
              console.log('Create_Contact d: ', d);
              $('#contact_panel').empty();
              $('#contact_info').remove();

              contact_panel.append('div')
                .attr('id', 'contact_info')
                .attr("height", info_height)
                .attr("width", info_width)
                .html(Make_Contact_Table(d))
            }

            function Make_Contact_Table(d) {
              console.log('Make_Contact_Table d: ', d);
              return '<h6 style="margin-bottom:0">' + d.properties.COCNAME + '</h6>' + '<br>' +
                '<p>' + '<b>Contact information for the Continuum of Care program</b>' + '<br>' +
                d.properties.CONTACT_TY + '<br>' +
                'Name: ' + d.properties.FIRST_NAME + ' ' + d.properties.LAST_NAME + '<br>' +
                'Email: ' + d.properties.EMAIL_ADDR + '<br>' +
                'Phone: ' + d.properties.PRIMARY_PH + '</p>';
            }

          })
        })
      })
    })
  })
})

var w = $('#panel_3b').width(),
  h = $('#panel_3b').height() * .33,
  x = d3.scale.linear().range([0, w]),
  y = d3.scale.linear().range([0, h]),
  color = d3.scale.ordinal().range(['#A1B3BF','#37071F','#EE4D99','#9C81C4','#172450','#6D94DF','#4F63AC',
           '#91B9FF','#C4704B','#972666','#CB6C94']),
  root,
  node;

var treemap = d3.layout.treemap()
  .round(false)
  .size([w, h])
  .sticky(true)
  //    .value(function(d) { return d["好き度"]; });
  .value(function(d) {
    return d.total_homeless;
  });

var svg = d3.select("#tree").append("div")
  .attr("class", "chart")
  .style("width", w + "px")
  .style("height", h + "px")
  .append("svg:svg")
  .attr("width", w)
  .attr("height", h)
  .append("svg:g")
  .attr("transform", "translate(.5,.5)");

//d3.json("kinoko_takenoko.json", function(data) {
d3.json('/data-lab-data/homeless_cluster.json', function(tree_data) {
  d3.csv('/data-lab-data/cluster_data.csv', function(cluster) {

    var formatNumber = d3.format('$,.0f');
    var OtherformatNumber = d3.format(',');
    var P3_formatNumber = d3.format(',');


    console.log('cluster: ',cluster)
    cluster.forEach(function(d) {
      d.amount = +d.amount
      d.days_below_32 = +d.days_below_32
      d.density = +d.density
      d.estimated_pop_2016 = +d.estimated_pop_2016
      d.homeless_individuals = +d.homeless_individuals
      d.homeless_people_in_families = +d.homeless_people_in_families
      d.land_area = +d.land_area
      d.sheltered_homeless = +d.sheltered_homeless
      d.total_homeless = +d.total_homeless
      d.unsheltered_homeless = +d.unsheltered_homeless
      d.weighted_alcohol_dependence_or_abuse = +d.weighted_alcohol_dependence_or_abuse
      d.weighted_drug_use = +d.weighted_drug_use
      d.weighted_estimate_median_gross_rent = +d.weighted_estimate_median_gross_rent
      d.weighted_income = +d.weighted_income
      d.weighted_mental_illness = +d.weighted_mental_illness
      d.Property_crime_rate = +d.Property_crime_rate
      d.Total_Year_Round_Beds = +d.Total_Year_Round_Beds
      });

    node = root = tree_data;
    console.log(tree_data);
    var nodes = treemap.nodes(root)
      .filter(function(d) {
        return !d.children;
      });

    var cell = svg.selectAll("g")
      .data(nodes)
      .enter().append("svg:g")
      .attr("class", "cell")
      .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      })
      .on("click", function(d) {
        return zoom(node == d.parent ? root : d.parent);
      });

    cell.append("svg:rect")
      .attr("width", function(d) {
        return d.dx - 1;
      })
      .attr("height", function(d) {
        return d.dy - 1;
      })
      .style("fill", function(d) {
        return color(d.parent.group);
      });

    cell.append("svg:text")
      .attr("x", function(d) {
        return d.dx / 2;
      })
      .attr("y", function(d) {
        return d.dy / 2;
      })
      .attr("dy", ".35em")
      .attr("text-anchor", "middle")
      .text(function(d) {
        return d.coc_name;
      })
      .style('font-size', '8px')
      .style("opacity", function(d) {
        d.w = this.getComputedTextLength();
        return d.dx > d.w ? 1 : 0;
      });

    d3.select('.chart').on("click", function() {
      zoom(root);
    });

    d3.select("select").on("change", function() {
      //treemap.value(this.value == "size" ? size : count).nodes(root);
      treemap.value((this.value == "total_homeless") ? total_homeless : (this.value == "sheltered_homeless") ? sheltered_homeless : (this.value == "unsheltered_homeless") ? ground : unsheltered_homeless).nodes(root);
      zoom(node);
    })
    // Initialize accordion
    d3.select('#panel_3c').append('div').attr('id', 'accordion');
    initialize_accordion();

    function initialize_accordion(){
      var init_accordion = tree_data.children[0].children;
      console.log("init accordion: ", init_accordion[0]);

      for (var i = 0; i < init_accordion.length; i++) {
        makeAccordion(init_accordion[i]);
      }
    }
    function makeAccordion(d) {
      d3.select('#accordion')
        .append('div')
        .attr('class', 'panel')
        .attr('position', 'relative')
        .append('div')
        .attr('class', 'header')
        .attr('background-color', "#E8EAF5")
        .html('<p id="head">' + d.coc_name + '</p3>')
        .append('div')
        .attr('class', 'body')
        .html(get_CFDA(d));
    }

    // Initialize Infographic
    var w2 = $('#panel_3b').width(),
        h2 = $('#panel_3b').height() * .66;

    d3.select('#infographic').attr('height', h2).attr('width', w2)
      .append('div')
      .attr('id', 'picture')
      .attr('height', h2)
      .attr('height', w2);

    initialize_infographic();

    function initialize_infographic(){
      var init_infographic = tree_data.children[0].group;
      console.log("init infographic: ", init_infographic);

        makeInfographic(init_infographic);
    }

    function makeInfographic(d) {
      d3.select('#imagebox').remove()

      d3.select('#picture')
        .append('svg')
        .attr('id','imagebox')
        .attr('height', h2)
        .attr('width', w2)
          .append('svg:image')
          .attr('height', h2)
          .attr('width', w2)
          .attr('xlink:href', get_Infographic(d));
    }

    function initAccordion(accordionElem) {

      //when panel is clicked, handlePanelClick is called.

      function handlePanelClick(event) {
        showPanel(event.currentTarget);
      }

      //Hide currentPanel and show new panel.

      function showPanel(panel) {
        //Hide current one. First time it will be null.
        var expandedPanel = accordionElem.querySelector(".active");
        if (expandedPanel) {
          expandedPanel.classList.remove("active");
        }

        //Show new one
        panel.classList.add("active");

      }

      var allPanelElems = accordionElem.querySelectorAll(".panel");
      for (var i = 0, len = allPanelElems.length; i < len; i++) {
        allPanelElems[i].addEventListener("click", handlePanelClick);
      }

      //By Default Show first panel
      showPanel(allPanelElems[0])

    }

    initAccordion(document.getElementById("accordion"));




    function zoom(d) {

      d3.selectAll('.panel').remove()
      console.log('zoom d: ', d)

      if(d.depth === 0){
          console.log("IN ZOOM OUT!!!!! ")
          initialize_accordion()
          initialize_infographic();
      }else{
        var accordion = d.children
        console.log('zoom d accordion: ', accordion)
        for (var i = 0; i < accordion.length; i++) {
          makeAccordion(accordion[i]);
        }
        makeInfographic(d.group)
      }

      initAccordion(document.getElementById("accordion"));

      var kx = w / d.dx,
        ky = h / d.dy;
      x.domain([d.x, d.x + d.dx]);
      y.domain([d.y, d.y + d.dy]);

      var t = svg.selectAll("g.cell").transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .attr("transform", function(d) {
          return "translate(" + x(d.x) + "," + y(d.y) + ")";
        });

      t.select("rect")
        .attr("width", function(d) {
          return kx * d.dx - 1;
        })
        .attr("height", function(d) {
          return ky * d.dy - 1;
        })

      t.select("text")
        .attr("x", function(d) {
          return kx * d.dx / 2;
        })
        .attr("y", function(d) {
          return ky * d.dy / 2;
        })
        .style("opacity", function(d) {
          return kx * d.dx > d.w ? 1 : 0;
        });

      node = d;
      d3.event.stopPropagation();
    }

    function get_CFDA(d){
      console.log('get_CFDA: ',d)

      function filter_cocNum_barChart(cluster) {
        return cluster.coc_number == d.coc_number;
      }

      var dat = cluster.filter(filter_cocNum_barChart)[0];
      console.log('get CFDA dat: ',dat)

      return(
        '<p id="txt">Total funding: ' + '</p><p id="txt2">'+ formatNumber(dat.amount) + '</p>' +
        '<br/><p id="txt">Total homeless population: ' + '</p><p id="txt2">' + OtherformatNumber(dat.total_homeless) + '</p>' +
        '<br/><p id="txt">Area in square miles: ' + '</p><p id="txt2">' + P3_formatNumber(dat.land_area) + '</p>' +
        '<br/><p id="txt">Population density: ' + '</p><p id="txt2">' + P3_formatNumber(dat.density) + ' people per square mile</p>' +
        '<br/><p id="txt">Median montly gross rent: ' + '</p><p id="txt2">' + formatNumber(dat.weighted_estimate_median_gross_rent) + '</p>' +
        '<br/><p id="txt">Avg income for the 20th percentile: ' + '</p><p id="txt2">' + formatNumber(dat.weighted_income) + '</p>' +
        '<br/><p id="txt">Avg number of days below freezing: ' + '</p><p id="txt2">' + P3_formatNumber(dat.days_below_32) + '</p>' +
        '<br/><p id="txt">Property crime (incidents per 100k people): ' + '</p><p id="txt2">' + P3_formatNumber(dat.Property_crime_rate) + '</p>' +
        '<br/><p id="txt">Prevalence rate of serious mental illness: ' + '</p><p id="txt2">' + P3_formatNumber(dat.weighted_mental_illness) + '%</p>' +
        '<br/><p id="txt">Prevalence rate of drug abuse: ' + '</p><p id="txt2">' + P3_formatNumber(dat.weighted_drug_use) + '%</p>' +
        '<br/><p id="txt">Prevalence rate of alcohol dependece or abuse: ' + '</p><p id="txt2">' + P3_formatNumber(dat.weighted_alcohol_dependence_or_abuse) + '%</p>'
      )
    }
  function get_Infographic(d){
    console.log('get_Infographic: ',d)
         if (d == "1a") {
           return('/images/homelessness/Group1.png')
         } else if (d == "2a"){
           return('/images/homelessness/Group2.png')
         } else if (d == "2b"){
          return ('/images/homelessness/Group3.png')
         } else if (d == "2c"){
          return ('/images/homelessness/Group8.png')
         } else if (d == "3a"){
           return('/images/homelessness/Group9.png')
         } else if (d == "4a"){
          return ('/images/homelessness/Group4.png')
         } else if (d == "4b"){
           return ('/images/homelessness/Group5.png')
         } else if (d == "4c"){
           return ('/images/homelessness/Group6.png')
         } else if(d == "5a"){
         return ('/images/homelessness/Group7.png')
         } else if (d == "5b"){
          return ('/images/homelessness/Group8.png')
         } else if (d =="5c"){
          return ('/images/homelessness/Group9.png')
         }
       }

     })
  });
