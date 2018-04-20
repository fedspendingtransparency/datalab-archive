

d3.json('/data-lab-data/2017_CoC_Grantee_Areas_2.json', (us) => {
    d3.csv('/data-lab-data/2017statecfdafunding.csv', (cfdaState) => {
        d3.csv('/data-lab-data/CFDACOCAward.csv', (barChrt) => {
            d3.csv('/data-lab-data/State_crosswalk.csv', (state) => {
                d3.csv('/data-lab-data/cfda_acronyms.csv', (acr) => {
                    d3.csv('/data-lab-data/coc_pop_value.csv', (tableData) => {
                        function change() {
                            d3.selectAll('#viz_container').remove();
                            d3.selectAll('#legend').remove();
                            d3.selectAll('#legend_title').remove();
                            d3.selectAll('#legend_subtitle').remove();
                            d3.selectAll('#counties_mini').remove();
                            d3.select('#imagebox').remove();
                            d3.selectAll('.panel').remove();
                            d3.selectAll('.chart').remove();
                            d3.selectAll(".cocTabInfo").remove();
                            d3.selectAll(".cocTabFund").remove();
                            d3.selectAll(".cocTabTitle").remove();
                            // d3.selectAll("").remove();

                            GenMap();
                            GenPanelTwo();
                            infographic_yeah();
                        }

                        d3.selectAll("#button1").on("click", change);

                        d3.select('#container2_1').append('div').attr('id', 'p2_1_title');
                        d3.select('#container2_1').append('div').attr('id', 'p2_1').style('top', '150px');
                        d3.select('#container2_2').append('div').attr('id', 'p2_2_legend_title');
                        d3.select('#container2_2').append('div').attr('id', 'p2_2_legend');
                        d3.select('#container2_2').append('div').attr('id', 'p2_2');
                        d3.select('#container2_3').append('div').attr('id', 'p2_3_title');
                        d3.select('#container2_3').append('div').attr('id', 'p2_3');
                        d3.select('#container2_4').append('div').attr('id', 'p2_4_legend_title');
                        d3.select('#container2_4').append('div').attr('id', 'p2_4_legend');
                        d3.select('#container2_4').append('div').attr('id', 'p2_4');
                        d3.select('#CoCcontact').append('div').attr('id', 'p2_5');
                        d3.select('#p2_1').append('div').attr('id', 'panel_map');
                        d3.select('#p2_2').append('div').attr('id', 'panel_matrix');
                        d3.select('#p2_3').append('div').attr('id', 'panel_coc');
                        d3.select('#p2_4').append('div').attr('id', 'panel_info');
                        d3.select('#p2_5').append('div').attr('id', 'panel_contact');

                        const abs_width = 1024;
                        const abs_height = 575;
                        const margin = {
                            top: 100,
                            right: 50,
                            bottom: 15,
                            left: 100
                        };
                        const panel_2_width = abs_width - margin.left - margin.right;
                        const panel_2_height = abs_height - margin.top - margin.bottom;
                        const matrix_width = abs_width / 1.85 - margin.left - margin.right;
                        const matrix_height = abs_height - margin.top - margin.bottom;
                        const map_width = panel_2_width - matrix_width - margin.left - margin.right - 45;
                        const map_height = panel_2_height / 3;
                        const info_width = panel_2_width - matrix_width - margin.left - margin.right;
                        const info_height = panel_2_height / 3;

                        const map_title = d3.select('#p2_1_title')
                            .append('div')
                            .attr('padding', '50px 0 0 0')
                            .attr('class', 'legend-header');

                        const p2_1_map_svg = d3.select('#panel_map')
                            .append('svg')
                            .attr('id', 'p2_1_map')
                            .attr('width', '95%')
                            .attr('height', '350px');

                        const info_panel = d3.select('#panel_info')
                            .attr('width', '100%')
                            .attr('height', info_height + margin.top + margin.bottom - 20);

                        const contact_panel = d3.select('#CoCcontact')
                            .attr('width', info_width + margin.left + margin.right)
                            .attr('height', info_height + margin.top + margin.bottom);

                        const coc_panel = d3.select('#panel_coc')
                            .attr('height', info_height + margin.top + margin.bottom)
                            .attr('width', '95%');

                        const p2_matrix_svg = d3.select('#panel_matrix').append('svg')
                            .attr('width', '100%')
                            .attr('height', map_height + margin.top + margin.bottom + 40);

                        const p2_tip = d3.tip()
                            .attr('class', 'homeless-analysis d3-tip')
                            .style('background', '#ffffff')
                            .style('color', '#333')
                            .style('border', 'solid 1px #BFBCBC')
                            .style('padding', '25px')
                            .style('width', '300px')
                            .html((d) => `<p style="border-bottom:1px solid #898C90; font-size: 18px; margin:0; padding-bottom:15px; color: #555555; font-weight: bold">${d.properties.coc_number}: ${d.properties.COCNAME}</p>` + `<br>` +
                  `<p style="color: #0071BC; margin: 0; font-size: 20px">Federal Funding: ${getDollarValue(d)}</p><br>` +
                  `<p style="font-size: 16px; margin-top:0; padding-top:0; margin-bottom:0; font-style: italic"> Double click to zoom in/out</p>`
                            );

                        const p2_3_bar_tip = d3.tip()
                            .attr('class', 'homeless-analysis d3-tip')
                            .style('background', '#ffffff')
                            .style('color', '#333')
                            .style('border', 'solid 1px #BFBCBC')
                            .style('padding', '25px')
                            .style('width', '300px')
                            .offset([-10, 0])
                            .html((d) => getCFDA_value(d));


                        const p2_1_projection = d3.geo.albersUsa()
                            .translate([map_width / 0.9, map_height / 0.9]) // translate to center of screen
                            .scale([575]); // scale things down so see entire US

                        // Define path generator
                        const p2_1_path = d3.geo.path() // path generator that will convert GeoJSON to SVG paths
                            .projection(p2_1_projection); // tell path generator to use albersUsa projection

                        const m = p2_1_map_svg.append('g');

                        p2_1_map_svg.append('circle').attr('id', 'tipfollowscursor_2');
                        p2_1_map_svg.call(p2_tip);

                        barChrt.forEach((d) => {
                            d.fed_funding = +d.fed_funding;
                        });

                        cfdaState.forEach((d) => {
                            d.fed_funding = +d.fed_funding;
                        });

                        cfdaState.sort((a, b) => b.fed_funding - a.fed_funding);

                        tableData.forEach((d) => {
                            d.total_homeless = +d.total_homeless;
                            d.chronically_homeless = +d.chronically_homeless;
                            d.sheltered_homeless = +d.sheltered_homeless;
                            d.unsheltered_homeless = +d.unsheltered_homeless;
                            d.homeless_individuals = +d.homeless_individuals;
                            d.homeless_veterans = +d.homeless_veterans;
                            d.homeless_people_in_families = +d.homeless_people_in_families;
                            d.homeless_unaccompanied_youth = +d.homeless_unaccompanied_youth;
                            d.amount = +d.amount;
                        });

                        barChrt = barChrt.sort((x, y) => d3.descending(x.fed_funding, y.fed_funding));

                        // Initialize visualization
                        GenMap();
                        GenPanelTwo();

                        const map_icon = d3.select('#homeless-action-map');
                        map_icon.on('click', map_icon_function);

                        const table_icon = d3.select('#homeless-action-table');
                        table_icon.on('click', table_icon_function);

                        function map_icon_function() {
                            d3.selectAll('#viz_container').remove();
                            d3.selectAll('legend_subtitle').remove();
                            d3.selectAll('#counties_mini').remove();

                            GenMap();
                            GenPanelTwo();
                        }

                        function table_icon_function() {
                            d3.selectAll('#viz_container').remove();
                            d3.selectAll('#legend').remove();
                            d3.selectAll('#legend_title').remove();
                            d3.selectAll('#legend_subtitle').remove();
                            d3.selectAll('#counties_mini').remove();

                            GenTable();
                            GenPanelTwo();
                        }

                        // **************************************************************

                        const formatNumber = d3.format('$,.0f');
                        const OtherformatNumber = d3.format(',');
                        // const P3_formatNumber = d3.format(',.0f');

                        function bar_click(d) {
                            window.Analytics.event({
                                category: 'Homelessness Analysis - Panel 2 - Click Bar Chart',
                                action: d.CFDA_website
                            });

                            window.open(d.CFDA_website);
                        }

                        function getColor(d) {
                            for (let i = 0; i < tableData.length; i++) {
                                if (d.properties.coc_number === tableData[i].coc_number) {
                                    if (tableData[i].total_homeless <= 0) {
                                        return ('#C9CBC8');
                                    }
                                    else if (tableData[i].total_homeless <= 200) {
                                        return ('#E9ECEA');
                                    }
                                    else if (tableData[i].total_homeless <= 300) {
                                        return ('#E1E5E3');
                                    }
                                    else if (tableData[i].total_homeless <= 500) {
                                        return ('#D9DEDB');
                                    }
                                    else if (tableData[i].total_homeless <= 700) {
                                        return ('#D1D7D4');
                                    }
                                    else if (tableData[i].total_homeless <= 1000) {
                                        return ('#C9D0CD');
                                    }
                                    else if (tableData[i].total_homeless <= 1500) {
                                        return ('#C1C9C5');
                                    }
                                    else if (tableData[i].total_homeless <= 2000) {
                                        return ('#B9C2BE');
                                    }
                                    else if (tableData[i].total_homeless <= 2500) {
                                        return ('#A8B4AF');
                                    }
                                    else if (tableData[i].total_homeless <= 3000) {
                                        return ('#98A6A0');
                                    }
                                    else if (tableData[i].total_homeless <= 3500) {
                                        return ('#889892');
                                    }
                                    else if (tableData[i].total_homeless <= 4000) {
                                        return ('#778A83');
                                    }
                                    else if (tableData[i].total_homeless <= 5000) {
                                        return ('#677C74');
                                    }
                                    else if (tableData[i].total_homeless <= 6000) {
                                        return ('#576E65');
                                    }
                                    else if (tableData[i].total_homeless <= 7000) {
                                        return ('#476057');
                                    }
                                    else if (tableData[i].total_homeless <= 8000) {
                                        return ('#365248');
                                    }
                                    else if (tableData[i].total_homeless <= 12000) {
                                        return ('#1E3D32');
                                    }
                                    else if (tableData[i].total_homeless <= 77000) {
                                        return ('#06281C');
                                    }

                                    return ('#F2B400');
                                }
                            }
                        }

                        function getValue(d) {
                            for (let i = 0; i < tableData.length; i++) {
                                if (d.properties.coc_number === tableData[i].coc_number) {
                                    return OtherformatNumber(tableData[i].total_homeless);
                                }
                            }
                        }

                        function getSheltered(d) {
                            for (let i = 0; i < tableData.length; i++) {
                                if (d.properties.coc_number === tableData[i].coc_number) {
                                    return OtherformatNumber(tableData[i].sheltered_homeless);
                                }
                            }
                        }

                        function getUnsheltered(d) {
                            for (let i = 0; i < tableData.length; i++) {
                                if (d.properties.coc_number === tableData[i].coc_number) {
                                    return OtherformatNumber(tableData[i].unsheltered_homeless);
                                }
                            }
                        }

                        function getVets(d) {
                            for (let i = 0; i < tableData.length; i++) {
                                if (d.properties.coc_number === tableData[i].coc_number) {
                                    return OtherformatNumber(tableData[i].homeless_veterans);
                                }
                            }
                        }

                        function getDollarValue(d) {
                            for (let i = 0; i < tableData.length; i++) {
                                if (d.properties.coc_number === tableData[i].coc_number) {
                                    return formatNumber(tableData[i].amount);
                                }
                            }
                        }

                        function getCFDA_value(d) {
                            return `<p style="border-bottom:1px solid #898C90; font-size: 18px; margin:0; padding-bottom:15px"><b style="color:#555555">${d.program_title}</b> [CFDA No. ${d.cfda_number}]` + `</p><br>` +
                `<p style="color: #0071BC; margin: 0; font-size: 20px; padding:0">Federal Funding: ${formatNumber(d.fed_funding)}</p><br>` +
                `<p style="font-size: 16px; margin-top:0; padding-top:0; margin-bottom:0; font-style: italic">Click to visit the program website</p>`;
                        }

                        function getState(d) {
                            for (let i = 0; i < tableData.length; i++) {
                                if (d.properties.STUSAB === state[i].Abbrv) {
                                    return state[i].State;
                                }
                            }
                        }

                        function getProgram(d) {
                            for (let i = 0; i < barChrt.length; i++) {
                                if (d.cfda_number === acr[i].cfda_number) {
                                    return acr[i].acronym;
                                }
                            }
                        }
                        //*************************************************************

                        function GenMap() {
                            d3.select('#container').append('div').attr('id', 'legend_title');
                            d3.select('#container').append('div').attr('id', 'legend_subtitle');
                            d3.select('#container').append('div').attr('id', 'viz_container');
                            d3.select('#container').append('div').attr('id', 'legend');

                            const width = 1000;
                            const height = 600;
                            let centered = null;
                            
                            // D3 Projection
                            const projection = d3.geo.albersUsa()
                                .translate([width / 2, height / 2]) // translate to center of screen
                                .scale([1200]); // scale things down so see entire US ---1455

                            // Define path generator
                            const path = d3.geo.path() // path generator that will convert GeoJSON to SVG paths
                                .projection(projection); // tell path generator to use albersUsa projection

                            const div = d3.select('#viz_container')
                                .append('div')
                                .attr('id', 'map_container')
                                .attr('width', width)
                                .attr('height', height);

                            const map_svg = d3.select('#map_container')
                                .append('svg')
                                .attr('id', 'svg')
                                .attr('width', '100%')
                                .attr('height', '575px')
                                .attr('viewBox', '0 0 950 575')
                                .attr('preserveAspectRatio', 'xMidYMid meet');

                            const tip = d3.tip()
                                .attr('class', 'homeless-analysis d3-tip')
                                .style('background', '#ffffff')
                                .style('color', '#333')
                                .style('border', 'solid 1px #BFBCBC')
                                .style('padding', '25px')
                                .style('width', '300px')
                                .offset([-10, -10])
                                .html((d) => `<p style="border-bottom:1px solid #898C90; font-size: 18px; margin:0; padding-bottom:15px; font-weight: bold; color:#555555">${d.properties.coc_number}: ${d.properties.COCNAME}</p>` + `<br>` +
                    `<p style="color: #0071BC; margin: 0; padding-bottom:0; font-size: 20px; line-height: 22px">Total Homeless: ${getValue(d)}</p><br>` +
                    `<ul style="list-style-type: circle; margin:0; padding:0 0 0 15px">` +
                    `<li style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px; padding:0">Sheltered Homeless: ${getSheltered(d)}</li>` +
                    `<li style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px; padding:0">Unsheltered Homeless: ${getUnsheltered(d)}</li></ul><br>` +
                    `<p style="font-size: 16px; margin-top:0; padding-top:0; margin-bottom:0; font-style: italic"> Double click to zoom in/zoom out</p>`);

                            map_svg.append('circle').attr('id', 'tipfollowscursor_1');
                            map_svg.call(tip);

                            const g = map_svg.append('g')
                                .attr('class', 'counties')
                                .selectAll('path')
                                .data(us.features)
                                .enter()
                                .append('path')
                                .attr('class', 'coc')
                                .attr('data-coc', (d) => d.properties.coc_number)
                                .attr('data-state', (d) => d.properties.state)
                                .attr('data-name', (d) => d.properties.name)
                                .attr('d', path)
                                .on('mouseover', (d) => {
                                    const target = d3.select('#tipfollowscursor_1')
                                        .attr('cx', d3.event.offsetX)
                                        .attr('cy', d3.event.offsetY - 30)
                                        .node();
                                    tip.show(d, target);
                                })
                                .on('mouseout', tip.hide)
                                .on('dblclick', clicked)
                                .on("click", (d) => {
                                    BarChart(d);
                                    createCoCTable(d);
                                    Make_Map_Title(d);
                                    StateBarChart(d);
                                    createContact(d);
                                    p2_1_clicked_p1(d);
                                })
                                .style('fill', getColor);

                                function clicked(d) {
                                    var x, y, k;

                                    window.Analytics.event({
                                        category: 'Homelessness Analysis - Panel 1 - Double Click CoC',
                                        action: d.properties.coc_number + " - " + d.properties.COCNAME
                                    });
                                    
                                    if (d && centered !== d) {
                                      var centroid = path.centroid(d)
                                      x = centroid[0]
                                      y = centroid[1]
                                      
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
                        } // end of GenMap()

                        function GenTable() {
                            const column_names = ['CoC Number', 'CoC Name', 'Total Homeless', 'Sheltered Homeless', 'Unsheltered Homeless', 'Chronically Homeless', 'Homeless Veterans', 'Homeless Individuals', 'Homeless People in Families', 'Homeless Unaccompanied Youth (Under 25)'];

                            const clicks = {
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
                                .style('margin', '0 0 10px -70px')
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
                                .style('color', '#000');

                            d3.select('#viz_container').append('div')
                                .attr('id', 'table_container');

                            const table = d3.select('#table_container').append('table').attr('id', 'tab');
                            table.append('thead').append('tr');

                            const headers = table.select('tr').selectAll('th')
                                .data(column_names)
                                .enter()
                                .append('th')
                                .text((d) => d);

                            let rows;
                            let row_entries;
                            let row_entries_no_anchor;
                            let row_entries_with_anchor;

                            // draw table body with rows
                            table.append('tbody');

                            // data bind
                            rows = table.select('tbody').selectAll('tr')
                                .data(tableData, (d) => d.coc_number);

                            // enter the rows
                            rows.enter()
                                .append('tr');

                            // enter td's in each row
                            row_entries = rows.selectAll('td')
                                .data((d) => {
                                    const arr = [];
                                    for (const k in d) {
                                        if (d.hasOwnProperty(k)) {
                                            arr.push(d[k]);
                                        }
                                    }
                                    return [arr[0], arr[1], arr[2], arr[3], arr[4], arr[7], arr[8], arr[5], arr[6], arr[9]];
                                })
                                .enter()
                                .append('td');

                            // draw row entries with no anchor
                            row_entries_no_anchor = row_entries.filter((d) => (/https?:\/\//.test(d) === false));
                            row_entries_no_anchor.text((d) => d);

                            // draw row entries with anchor
                            row_entries_with_anchor = row_entries.filter((d) => (/https?:\/\//.test(d) === true));
                            row_entries_with_anchor
                                .append('a')
                                .attr('href', (d) => d)
                                .attr('target', '_blank')
                                .text((d) => d);

                            /**  search functionality **/
                            d3.select('#search')
                                .on('keyup', function () { // filter according to key pressed
                                    let searched_data = tableData;
                                    const text = this.value.trim();

                                    let searchResults = searched_data.map((r) => {
                                        const regex = new RegExp(`^${text}`, 'i');
                                        if (regex.test(r.coc_name)) { // if there are any results
                                            return regex.exec(r.coc_name)[0]; // return them to searchResults
                                        }
                                    });

                                    // filter blank entries from searchResults
                                    searchResults = searchResults.filter((r) => r != undefined);

                                    // filter dataset with searchResults
                                    searched_data = searchResults.map((r) => tableData.filter((p) => p.coc_name.indexOf(r) != -1));

                                    // flatten array
                                    searched_data = [].concat.apply([], searched_data);

                                    // data bind with new data
                                    rows = table.select('tbody').selectAll('tr')
                                        .data(searched_data, (d) => d.coc_number)
                                        .attr('class', 'panel_1_table');

                                    // enter the rows
                                    rows.enter()
                                        .append('tr');

                                    // enter td's in each row
                                    row_entries = rows.selectAll('td')
                                        .data((d) => {
                                            const arr = [];
                                            for (const k in d) {
                                                if (d.hasOwnProperty(k)) {
                                                    arr.push(d[k]);
                                                }
                                            }
                                            return [arr[0], arr[1], arr[2], arr[3], arr[4], arr[7], arr[8], arr[5], arr[6], arr[9]];
                                        })
                                        .enter()
                                        .append('td');

                                    // draw row entries with no anchor
                                    row_entries_no_anchor = row_entries.filter((d) => (/https?:\/\//.test(d) === false));
                                    row_entries_no_anchor.text((d) => d);

                                    // draw row entries with anchor
                                    row_entries_with_anchor = row_entries.filter((d) => (/https?:\/\//.test(d) === true));
                                    row_entries_with_anchor
                                        .append('a')
                                        .attr('href', (d) => d)
                                        .attr('target', '_blank')
                                        .text((d) => d);

                                    // exit
                                    rows.exit().remove();
                                });

                            /**  sort functionality **/
                            headers.on('click', (d) => {
                                if (d === 'CoC Number') {
                                    clicks.coc_number++;
                                    if (clicks.coc_number % 2 === 0) {
                                        rows.sort((a, b) => a.coc_number.localeCompare(b.coc_number));
                                    }
                                    else
                                    if (clicks.coc_number % 2 !== 0) {
                                        rows.sort((a, b) => b.coc_number.localeCompare(a.coc_number));
                                    }
                                }

                                if (d === 'CoC Name') {
                                    clicks.coc_name++;
                                    if (clicks.coc_name % 2 === 0) {
                                        rows.sort((a, b) => a.coc_name.localeCompare(b.coc_name));
                                    }
                                    else
                                    if (clicks.coc_name % 2 !== 0) {
                                        rows.sort((a, b) => b.coc_name.localeCompare(a.coc_name));
                                    }
                                }

                                if (d === 'Total Homeless') {
                                    clicks.total_homeless++;

                                    if (clicks.total_homeless % 2 === 0) {
                                        // sort ascending: numerically
                                        rows.sort((a, b) => {
                                            if (+a.total_homeless < +b.total_homeless) {
                                                return -1;
                                            }
                                            else if (+a.total_homeless > +b.total_homeless) {
                                                return 1;
                                            }
                                            return 0;
                                        });
                                        // odd number of clicks
                                    }
                                    else if (clicks.total_homeless % 2 !== 0) {
                                        // sort descending: numerically
                                        rows.sort((a, b) => {
                                            if (+b.total_homeless > +a.total_homeless) {
                                                return 1;
                                            }
                                            else if (+b.total_homeless < +a.total_homeless) {
                                                return -1;
                                            }
                                            return 0;
                                        });
                                    }
                                }

                                if (d === 'Chronically Homeless') {
                                    clicks.chronically_homeless++;
                                    // even number of clicks
                                    if (clicks.chronically_homeless % 2 === 0) {
                                        // sort ascending: alphabetically
                                        rows.sort((a, b) => {
                                            if (a.chronically_homeless < b.chronically_homeless) {
                                                return -1;
                                            }
                                            else if (a.chronically_homeless > b.chronically_homeless) {
                                                return 1;
                                            }
                                        });
                                        // odd number of clicks
                                    }
                                    else if (clicks.chronically_homeless % 2 !== 0) {
                                        // sort descending: alphabetically
                                        rows.sort((a, b) => {
                                            if (a.chronically_homeless < b.chronically_homeless) {
                                                return 1;
                                            }
                                            else if (a.chronically_homeless > b.chronically_homeless) {
                                                return -1;
                                            }
                                        });
                                    }
                                }
                                if (d === 'Sheltered Homeless') {
                                    clicks.sheltered_homeless++;
                                    // even number of clicks
                                    if (clicks.sheltered_homeless % 2 === 0) {
                                        // sort ascending: numerically
                                        rows.sort((a, b) => {
                                            if (+a.sheltered_homeless < +b.sheltered_homeless) {
                                                return -1;
                                            }
                                            else if (+a.sheltered_homeless > +b.sheltered_homeless) {
                                                return 1;
                                            }
                                        });
                                        // odd number of clicks
                                    }
                                    else if (clicks.sheltered_homeless % 2 !== 0) {
                                        // sort descending: numerically
                                        rows.sort((a, b) => {
                                            if (+a.sheltered_homeless < +b.sheltered_homeless) {
                                                return 1;
                                            }
                                            else if (+a.sheltered_homeless > +b.sheltered_homeless) {
                                                return -1;
                                            }
                                        });
                                    }
                                }
                                if (d === 'Unsheltered Homeless') {
                                    clicks.unsheltered_homeless++;
                                    // even number of clicks
                                    if (clicks.unsheltered_homeless % 2 === 0) {
                                        // sort ascending: numerically
                                        rows.sort((a, b) => {
                                            if (+a.unsheltered_homeless < +b.unsheltered_homeless) {
                                                return -1;
                                            }
                                            else if (+a.unsheltered_homeless > +b.unsheltered_homeless) {
                                                return 1;
                                            }
                                        });
                                        // odd number of clicks
                                    }
                                    else if (clicks.unsheltered_homeless % 2 !== 0) {
                                        // sort descending: numerically
                                        rows.sort((a, b) => {
                                            if (+a.unsheltered_homeless < +b.unsheltered_homeless) {
                                                return 1;
                                            }
                                            else if (+a.unsheltered_homeless > +b.unsheltered_homeless) {
                                                return -1;
                                            }
                                        });
                                    }
                                }
                                if (d === 'Homeless Veterans') {
                                    clicks.homeless_veterans++;
                                    // even number of clicks
                                    if (clicks.homeless_veterans % 2 === 0) {
                                        // sort ascending: numerically
                                        rows.sort((a, b) => {
                                            if (+a.homeless_veterans < +b.homeless_veterans) {
                                                return -1;
                                            }
                                            else if (+a.homeless_veterans > +b.homeless_veterans) {
                                                return 1;
                                            }
                                        });
                                        // odd number of clicks
                                    }
                                    else if (clicks.homeless_veterans % 2 !== 0) {
                                        // sort descending: numerically
                                        rows.sort((a, b) => {
                                            if (+a.homeless_veterans < +b.homeless_veterans) {
                                                return 1;
                                            }
                                            else if (+a.homeless_veterans > +b.homeless_veterans) {
                                                return -1;
                                            }
                                        });
                                    }
                                }
                                if (d === 'Homeless Individuals') {
                                    clicks.homeless_individuals++;
                                    // even number of clicks
                                    if (clicks.homeless_individuals % 2 === 0) {
                                        // sort ascending: numerically
                                        rows.sort((a, b) => {
                                            if (+a.homeless_individuals < +b.homeless_individuals) {
                                                return -1;
                                            }
                                            else if (+a.homeless_individuals > +b.homeless_individuals) {
                                                return 1;
                                            }
                                        });
                                        // odd number of clicks
                                    }
                                    else if (clicks.homeless_individuals % 2 !== 0) {
                                        // sort descending: numerically
                                        rows.sort((a, b) => {
                                            if (+a.homeless_individuals < +b.homeless_individuals) {
                                                return 1;
                                            }
                                            else if (+a.homeless_individuals > +b.homeless_individuals) {
                                                return -1;
                                            }
                                        });
                                    }
                                }
                                if (d === 'Homeless People in Families') {
                                    clicks.homeless_people_in_families++;
                                    // even number of clicks
                                    if (clicks.homeless_people_in_families % 2 === 0) {
                                        // sort ascending: numerically
                                        rows.sort((a, b) => {
                                            if (+a.homeless_people_in_families < +b.homeless_people_in_families) {
                                                return -1;
                                            }
                                            else if (+a.homeless_people_in_families > +b.homeless_people_in_families) {
                                                return 1;
                                            }
                                        });
                                        // odd number of clicks
                                    }
                                    else if (clicks.homeless_people_in_families % 2 !== 0) {
                                        // sort descending: numerically
                                        rows.sort((a, b) => {
                                            if (+a.homeless_people_in_families < +b.homeless_people_in_families) {
                                                return 1;
                                            }
                                            else if (+a.homeless_people_in_families > +b.homeless_people_in_families) {
                                                return -1;
                                            }
                                        });
                                    }
                                }
                                if (d === 'Homeless Unaccompanied Youth (Under 25)') {
                                    clicks.homeless_unaccompanied_youth++;
                                    // even number of clicks
                                    if (clicks.homeless_unaccompanied_youth % 2 === 0) {
                                        // sort ascending: numerically
                                        rows.sort((a, b) => {
                                            if (+a.homeless_unaccompanied_youth < +b.homeless_unaccompanied_youth) {
                                                return -1;
                                            }
                                            else if (+a.homeless_unaccompanied_youth > +b.homeless_unaccompanied_youth) {
                                                return 1;
                                            }
                                        });
                                        // odd number of clicks
                                    }
                                    else if (clicks.homeless_unaccompanied_youth % 2 !== 0) {
                                        // sort descending: numerically
                                        rows.sort((a, b) => {
                                            if (+a.homeless_unaccompanied_youth < +b.homeless_unaccompanied_youth) {
                                                return 1;
                                            }
                                            else if (+a.homeless_unaccompanied_youth > +b.homeless_unaccompanied_youth) {
                                                return -1;
                                            }
                                        });
                                    }
                                }
                            }); // end of click listeners

                            // Scrollable body, frozen headers
                            document.getElementById('table_container').addEventListener('scroll', function () {
                                const translate = `translate(0,${this.scrollTop}px)`;
                                this.querySelector('thead').style.transform = translate;
                            });
                        } // end of GenTable()

                        function GenPanelTwo() {
                            p2_1_map_svg.call(p2_tip);

                            // Initialize Panel 2 info
                            for (let y = 0; y < us.features.length; y++) {
                                if (us.features[y].properties.coc_number === 'CA-600') {
                                    const la = us.features[y];
                                    BarChart(la);
                                    StateBarChart(la);
                                    createContact(la);
                                    createCoCTable(la);
                                    Make_Map_Title(la);
                                    p2_1_clicked_p1(la);
                                }
                            }

                            // MAP
                            const centered = null;

                            // var OnMouseOver = 'BarChart; tip.show'

                            m.selectAll('p2_1_path')
                                .data(us.features)
                                .enter().append('path')
                                .attr('d', p2_1_path)
                                .attr('id', 'counties_mini')
                                .attr('data-coc', (d) => d.properties.coc_number)
                                .attr('data-state', (d) => d.properties.state)
                                .attr('data-name', (d) => d.properties.name)
                                .attr('d', p2_1_path)
                                .on('click', (d) => {
                                    window.Analytics.event({
                                        category: 'Homelessness Analysis - Panel 2 - Click Bar Chart',
                                        action: d.properties.coc_number + " - " + d.properties.COCNAME
                                    });

                                    BarChart(d);
                                    StateBarChart(d);
                                    createCoCTable(d);
                                    Make_Map_Title(d);
                                    createContact(d);
                                })
                                .style('fill', p2_getColor)
                                .on('dblclick', p2_1_clicked)
                                .on('mouseover', (d) => {
                                    const target = d3.select('#tipfollowscursor_2')
                                        .attr('cx', d3.event.offsetX)
                                        .attr('cy', d3.event.offsetY - 30)
                                        .node();
                                    p2_tip.show(d, target);
                                })
                                .on('mouseout', p2_tip.hide);

                            function p2_getColor(d) {
                                for (let i = 0; i < tableData.length; i++) {
                                    if (d.properties.coc_number === tableData[i].coc_number) {
                                        if (tableData[i].amount <= 500000) {
                                            return ('#BEF399');
                                        }
                                        else if (tableData[i].amount <= 1500000) {
                                            return ('#B0EC9A');
                                        }
                                        else if (tableData[i].amount <= 2500000) {
                                            return ('#A3E59B');
                                        }
                                        else if (tableData[i].amount <= 5000000) {
                                            return ('#96DD9B');
                                        }
                                        else if (tableData[i].amount <= 7500000) {
                                            return ('#8AD59C');
                                        }
                                        else if (tableData[i].amount <= 10000000) {
                                            return ('#80CE9C');
                                        }
                                        else if (tableData[i].amount <= 20000000) {
                                            return ('#76C69C');
                                        }
                                        else if (tableData[i].amount <= 30000000) {
                                            return ('#6DBD9B');
                                        }
                                        else if (tableData[i].amount <= 40000000) {
                                            return ('#66B59A');
                                        }
                                        else if (tableData[i].amount <= 50000000) {
                                            return ('#5FAD98');
                                        }
                                        else if (tableData[i].amount <= 60000000) {
                                            return ('#5AA496');
                                        }
                                        else if (tableData[i].amount <= 70000000) {
                                            return ('#569C93');
                                        }
                                        else if (tableData[i].amount <= 80000000) {
                                            return ('#529490');
                                        }
                                        else if (tableData[i].amount <= 90000000) {
                                            return ('#508B8C');
                                        }
                                        else if (tableData[i].amount <= 100000000) {
                                            return ('#4E8387');
                                        }
                                        else if (tableData[i].amount <= 150000000) {
                                            return ('#465261');
                                        }
                                        else if (tableData[i].amount <= 200000000) {
                                            return ('#3E3C4A');
                                        }

                                        return ('#291C24');
                                    }
                                }
                            }
                        } // end of GenPanelTwo
                        function p2_1_clicked(d) {
                            let x;
                            let y;
                            let k;

                            if (d && centered !== d) {
                                const centroid = p2_1_path.centroid(d);
                                x = centroid[0];
                                y = centroid[1];

                                if (d.properties.COCNAME === 'Hawaii Balance of State CoC') {
                                    k = 6.0;
                                }
                                else if (d.properties.COCNAME === 'Alaska Balance of State CoC') {
                                    k = 4.0;
                                }
                                else if (d.properties.COCNAME === 'Maine Balance of State CoC') {
                                    k = 5.0;
                                }
                                else if (d.properties.Shape__Are <= 0.4) {
                                    k = 17.0;
                                }
                                else if (d.properties.Shape__Are > 0.4 && d.properties.Shape__Are <= 1) {
                                    k = 14.0;
                                }
                                else if (d.properties.Shape__Are > 1 && d.properties.Shape__Are <= 5) {
                                    k = 12.0;
                                }
                                else if (d.properties.Shape__Are > 5 && d.properties.Shape__Are <= 17) {
                                    k = 6.0;
                                }
                                else if (d.properties.Shape__Are > 17 && d.properties.Shape__Are <= 55) {
                                    k = 3.0;
                                }
                                else {
                                    k = 2.0;
                                }
                                centered = d;
                            }
                            else {
                                x = map_width / 1.35;
                                y = map_height / 1.1;
                                k = 1;
                                centered = null;
                            }

                            m.selectAll('p2_1_path')
                                .classed('active', centered && ((d) => d === centered));

                            m.transition()
                                .duration(750)
                                .attr('transform', `translate(${map_width / 1.35},${map_height / 1.1})scale(${k})translate(${-x},${-y})`)
                                .style('stroke-width', `${0.15 / k}px`);
                        }

                        function p2_1_clicked_p1(d) {
                            let k;
                            const centroid = p2_1_path.centroid(d);
                            const x = centroid[0];
                            const y = centroid[1];

                            if (d.properties.COCNAME === 'Hawaii Balance of State CoC') {
                                k = 6.0;
                            }
                            else if (d.properties.COCNAME === 'Alaska Balance of State CoC') {
                                k = 4.0;
                            }
                            else if (d.properties.COCNAME === 'Maine Balance of State CoC') {
                                k = 5.0;
                            }
                            else if (d.properties.Shape__Are <= 0.4) {
                                k = 17.0;
                            }
                            else if (d.properties.Shape__Are > 0.4 && d.properties.Shape__Are <= 1) {
                                k = 14.0;
                            }
                            else if (d.properties.Shape__Are > 1 && d.properties.Shape__Are <= 5) {
                                k = 12.0;
                            }
                            else if (d.properties.Shape__Are > 5 && d.properties.Shape__Are <= 17) {
                                k = 6.0;
                            }
                            else if (d.properties.Shape__Are > 17 && d.properties.Shape__Are <= 55) {
                                k = 3.0;
                            }
                            else {
                                k = 2.0;
                            }
                            centered = d;


                            m.selectAll('p2_1_path')
                                .classed('active', centered && ((d) => d === centered));

                            m.transition()
                                .duration(750)
                                .attr('transform', `translate(${map_width / 1.35},${map_height / 1.1})scale(${k})translate(${-x},${-y})`)
                                .style('stroke-width', `${0.15 / k}px`);
                        }

                        function createCoCTable(d) {
                            $('#panel_coc').empty();
                            coc_panel.append('div')
                                .attr('id', 'coc_info')
                                .attr('height', info_height + margin.top + margin.bottom)
                                .attr('width', '100%')
                                .html(Make_CoC_Table(d));
                        }

                        function filter_cfdaAmount(x) {
                            return x.fed_funding > 0;
                        }

                        function Make_CoC_Table(d) {
                            d3.selectAll('#p2_quad3_title').remove();
                            const quad3_title = d3.select('#p2_3_title')
                                .append('div')
                                .attr('width', '100%')
                                .attr('id', 'p2_quad3_title')
                                .style('class', 'legend-header')
                                .html(`<h5>${d.properties.coc_number} Homeless Counts</h5>`);

                            const OtherformatNumber = d3.format(',');

                            for (let i = 0; i < tableData.length; i++) {
                                if (tableData[i].coc_number === d.properties.coc_number) {
                                    const tab_dat = tableData[i];

                                    return `${'<table><tr><td class="panel_text">' + 'Homeless Individuals ' + '</td><td class="panel_text2">'}${OtherformatNumber(tab_dat.homeless_individuals)}</td></tr>` +
                    `<tr><td class="panel_text" style="border-bottom:1pt solid black">` + `Homeless People in Families ` + `</td><td class="panel_text2"  style="border-bottom:1pt solid black">${OtherformatNumber(tab_dat.homeless_people_in_families)}</td></tr>` +
                    `<tr><td class="panel_text">` + `Total Homeless` + `</td><td class="panel_text2">${OtherformatNumber(tab_dat.total_homeless)}</td></tr>` + `</table>` +


                    `<table><tr><td class="panel_text">` + `Sheltered Homeless ` + `</td><td class="panel_text2">${OtherformatNumber(tab_dat.sheltered_homeless)}</td></tr>` +
                    `<tr><td class="panel_text" style="border-bottom:1pt solid black">` + `Unsheltered Homeless ` + `</td><td class="panel_text2" style="border-bottom:1pt solid black">${OtherformatNumber(tab_dat.unsheltered_homeless)}</td></tr>` +
                    `<tr><td class="panel_text">` + `Total Homeless` + `</td><td class="panel_text2">${OtherformatNumber(tab_dat.total_homeless)}</td></tr>` + `</table>` +

                    `<table style="margin-bottom:0"><tr><td class="panel_text">` + `Chronically Homeless ` + `</td><td class="panel_text2">${OtherformatNumber(tab_dat.chronically_homeless)}</td></tr>` +
                    `<tr><td class="panel_text">` + `Homeless Veterans ` + `</td><td class="panel_text2">${OtherformatNumber(tab_dat.homeless_veterans)}</td></tr>` + `</table>`;
                                }
                            }
                        }

                        function Make_Map_Title(d) {
                            return map_title.html(`<h5>${d.properties.coc_number}: ${d.properties.COCNAME}</h5>`);
                        }


                        function BarChart(d) {
                            $('#panel_info').empty();
                            d3.select('#panel_matrix > svg').remove();
                            d3.select('#p2_cfda_legend_title').remove();
                            d3.select('#p2_2_cfda_legend').remove();

                            const cfda_legend_title = d3.select('#p2_2_legend_title')
                                .append('div')
                                .attr('padding', '0 0 10px 0')
                                .attr('id', 'p2_2_cfda_legend_title')
                                .attr('class', 'h5')
                                .style('text-align', 'center')
                                .attr('id', 'p2_cfda_legend_title')
                                .attr('class', 'legend-header')
                                .html(`<h5>Federal Programs Serving ${d.properties.coc_number}</h5>`);

                            const p2_3_matrix_svg = d3.select('#panel_matrix').append('svg')
                                .attr('width', '100%')
                                .attr('height', map_height + margin.top + margin.bottom + 140)
                                .attr('transform', `translate(${0},${10})`);
                            p2_3_matrix_svg.call(p2_3_bar_tip);

                            function filter_cocNum_barChart(bar_chrt) {
                                return bar_chrt.coc_number === d.properties.coc_number;
                            }

                            const initial = barChrt.filter(filter_cocNum_barChart);
                            const initial_bar = initial.filter(filter_cfdaAmount);
                            const formatNumber = d3.format('$,');
                            const OtherformatNumber = d3.format(',');

                            const axisMargin = 5;
                            const x_width = document.getElementById("panel_matrix").offsetWidth - 50;
                            const barHeight = 20;
                            const barPadding = 5;
                            let bar;
                            let p2_xAxis;
                            let labelWidth = 0;

                            max = d3.max(initial_bar, (d) => d.fed_funding);

                            bar = p2_3_matrix_svg.selectAll('g')
                                .data(initial_bar)
                                .enter()
                                .append('g');

                            bar.attr('class', 'bar')
                                .attr('cx', 0)
                                .style('fill', (d) => {
                                    if (d.category === 'Housing') {
                                        return '#324D5C';
                                    }
                                    else if (d.category === 'Health') {
                                        return '#F0CA4D';
                                    }
                                    else if (d.category === 'Education') {
                                        return '#2A5DA8';
                                    }
                                    else if (d.category === 'Support Services') {
                                        return '#E37B40';
                                    }
                                    else if (d.category === 'Employment') {
                                        return '#F53855';
                                    }
                                    return "#FFF";
                                })
                                .attr('transform', (d, i) => `translate(5,${i * (barHeight + barPadding)})`)
                                .on('mouseover', p2_3_bar_tip.show)
                                .on('mouseout', p2_3_bar_tip.hide)
                                .on('click', bar_click);

                            bar.append('text')
                                .attr('class', 'label')
                                .attr('x', 0)
                                .attr('y', barHeight / 2)
                                .attr('dy', '.35em') // vertical align middle
                                .text((d) => getProgram(d))
                                .each(() => {
                                    labelWidth = 75;
                                });

                            const scale = d3.scale.linear()
                                .domain([0, max])
                                .range([0, x_width - labelWidth]);

                            p2_xAxis = d3.svg.axis()
                                .scale(scale)
                                .tickSize(-p2_matrix_svg[0][0].attributes[1].nodeValue + axisMargin)
                                .tickFormat((d) => formatNumber(d));

                            yAxis = d3.svg.axis()
                                .orient('left');

                            bar.append('rect')
                                .attr('transform', `translate(${labelWidth},0)`)
                                .attr('margin-left', 5)
                                .attr('height', barHeight)
                                .attr('width', (d) => scale(d.fed_funding));

                            p2_3_matrix_svg.insert('g', ':first-child')
                                .attr('class', 'axisHorizontal')
                                .attr('transform', `translate(${80},${235})`)
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
                            d3.select('#panel_info > svg').remove();
                            d3.select('#p2_4_cfda_legend_title').remove();
                            d3.select('#p2_4_cfda_legend').remove();

                            const cfda_legend_2_2 = d3.select('#p2_2_legend')
                                .append('div')
                                .attr('width', '100%')
                                .attr('height', '30px')
                                .attr('id', 'p2_2_cfda_legend');

                            const cfda_legend = d3.select('#p2_4_legend')
                                .append('div')
                                .attr('width', '100%')
                                .attr('height', '30px')
                                .attr('id', 'p2_4_cfda_legend');

                            const cfda_color = ['#324D5C', '#2A5DA8', '#F53855', '#E37B40', '#F0CA4D'];

                            const cfda_legend_key_values = ['Housing', 'Education', 'Employment', 'Support Services', 'Health'];

                            for (var i = 0; i < 5; i++) {
                                const k = cfda_legend_2_2.append('div')
                                    .attr('id', 'p2_2_legend_key');

                                const cfda_key_2_2 = k.append('div')
                                    .attr('id', 'p2_2_key')
                                    .style('position', 'relative')
                                    .append('svg')
                                    .attr('height', '40px')
                                    .attr('width', '53px')
                                    .append('circle')
                                    .attr('cx', 7)
                                    .attr('cy', 7)
                                    .attr('r', 7)
                                    .attr('height', 20)
                                    .attr('width', 20)
                                    .style('fill', (d) => cfda_color[i]);

                                k.append('div')
                                    .attr('id', 'p2_2_key_value')
                                    .style('position', 'relative')
                                    .style('color', 'blue')
                                    .html(`<p>${cfda_legend_key_values[i]}</p>`);


                                const l = cfda_legend.append('div')
                                    .attr('id', 'p2_4_legend_key');

                                const cfda_key = l.append('div')
                                    .attr('id', 'p2_4_key')
                                    .style('position', 'relative')
                                    .append('svg')
                                    .attr('height', '40px')
                                    .attr('width', '53px')
                                    .append('circle')
                                    .attr('cx', 7)
                                    .attr('cy', 7)
                                    .attr('r', 7)
                                    .attr('height', 20)
                                    .attr('width', 20)
                                    .style('fill', (d) => cfda_color[i]);

                                l.append('div')
                                    .attr('id', 'p2_4_key_value')
                                    .style('position', 'relative')
                                    .style('color', 'blue')
                                    .html(`<p>${cfda_legend_key_values[i]}</p>`);
                            }

                            const cfda_legend_title = d3.select('#p2_4_legend_title')
                                .append('div')
                                .attr('id', 'p2_4_cfda_legend_title')
                                .attr('class', 'legend-header')
                                .html(`<h5>Federal Programs Serving ${getState(d)}</h5>`);

                            const p2_4_matrix_svg = d3.select('#panel_info').append('svg')
                                .attr('width', '100%')
                                .attr('height', map_height + margin.top + margin.bottom + 140)
                                .attr('transform', `translate(${0},${10})`);

                            p2_4_matrix_svg.call(p2_3_bar_tip);

                            function filter_state_barChart(cfda_state) {
                                return cfda_state.State_code === d.properties.STUSAB;
                            }

                            const initial = cfdaState.filter(filter_state_barChart);
                            const initial_bar = initial.filter(filter_cfdaAmount);
                            const formatNumber = d3.format('$,');

                            const axisMargin = 5;
                            let x_width = document.getElementById("panel_matrix").offsetWidth - 50;
                            const barHeight = 20;
                            const barPadding = 5;
                            let bar;
                            let scale;
                            let p2_xAxis;
                            let labelWidth = 0;

                            max = d3.max(initial_bar, (d) => d.fed_funding);

                            bar = p2_4_matrix_svg.selectAll('g')
                                .data(initial_bar)
                                .enter()
                                .append('g');

                            bar.attr('class', 'bar')
                                .attr('cx', 0)
                                .style('fill', (d) => {
                                    if (d.category === 'Housing') {
                                        return '#324D5C';
                                    }
                                    else if (d.category === 'Health') {
                                        return '#F0CA4D';
                                    }
                                    else if (d.category === 'Education') {
                                        return '#2A5DA8';
                                    }
                                    else if (d.category === 'Support Services') {
                                        return '#E37B40';
                                    }
                                    else if (d.category === 'Employment') {
                                        return '#F53855';
                                    }
                                })
                                .attr('transform', (d, i) => `translate(5,${i * (barHeight + barPadding)})`)
                                .on('mouseover', p2_3_bar_tip.show)
                                .on('mouseout', p2_3_bar_tip.hide)
                                .on('click', bar_click);

                            bar.append('text')
                                .attr('class', 'label')
                                .attr('x', 0)
                                .attr('y', barHeight / 2)
                                .attr('dy', '.35em') // vertical align middle
                                .text((d) => getProgram(d))
                                .each(() => {
                                    labelWidth = 75;
                                });

                            scale = d3.scale.linear()
                                .domain([0, max])
                                .range([0, x_width - labelWidth]);

                            p2_xAxis = d3.svg.axis()
                                .scale(scale)
                                .tickSize(-p2_matrix_svg[0][0].attributes[1].nodeValue + axisMargin - 50)
                                .tickFormat((d) => formatNumber(d));

                            yAxis = d3.svg.axis()
                                .orient('left')
                                .tickSize(0, 400);

                            bar.append('rect')
                                .attr('transform', `translate(${labelWidth},0)`)
                                .attr('margin-left', 5)
                                .attr('height', barHeight)
                                .attr('width', (d) => scale(d.fed_funding));

                            p2_4_matrix_svg.insert('g', ':first-child')
                                .attr('class', 'axisHorizontal2')
                                .attr('transform', `translate(${80},${325})`)
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
                            $('#contact_panel').empty();
                            $('#contact_info').remove();

                            contact_panel.append('div')
                                .attr('id', 'contact_info')
                                .attr("height", info_height)
                                .attr("width", info_width)
                                .html(Make_Contact_Table(d));
                        }

                        function Make_Contact_Table(d) {
                            return `<h4 style="margin-bottom:0">${d.properties.COCNAME}</h4>` + `<br>` +
                            `<p>` + `<b>Contact information for the Continuum of Care program</b>` + 
                            `<br>${d.properties.CONTACT_TY}<br>` +
                            `Name: ${d.properties.FIRST_NAME} ${d.properties.LAST_NAME}<br>` +
                            `Email: ${d.properties.EMAIL_ADDR}<br>` +
                            `Phone: ${d.properties.PRIMARY_PH}</p>`;
                        }
                    });
                });
            });
        });
    });
});


function infographic_yeah() {
    let w = $('#panel_3b').width(),
        h = $('#panel_3b').height() * 0.33,
        x = d3.scale.linear().range([0, w]),
        y = d3.scale.linear().range([0, h]),
        color = d3.scale.ordinal().range(['#380a6d','#4f0887','#68095f','#8c007c',
            '#773884','#072f6b','#0a47a0','#166ed8','#064c12','#547f01','#93bc20']),
        root,
        node;

    const treemap = d3.layout.treemap()
        .round(false)
        .size([w, h])
        .sticky(true)
        .sort((a,b) => { return a.value - b.value; })
        .value(function(d) { return d.total_homeless; });
        // .value((d) => d.total_homeless);

    const svg = d3.select("#tree").append("div")
        .attr("class", "chart")
        .style("width", `${w}px`)
        .style("height", `${h}px`)
        .append("svg:svg")
        .attr("width", w)
        .attr("height", h)
        .append("svg:g")
        .attr("transform", "translate(.5,.5)");

    d3.json('/data-lab-data/homeless_cluster_v2.json', (tree_data) => {
        d3.csv('/data-lab-data/cluster_data_v2.csv', (cluster) => {
            const formatNumber = d3.format('$,.0f');
            const OtherformatNumber = d3.format(',.0f');
            const percentFormat = d3.format(",.1%");	

            cluster.forEach((d) => {
                d.rent_pct_income = +d.rent_pct_income;
                d.amount = +d.amount;
                d.density = +d.density;
                d.estimated_pop_2016 = +d.estimated_pop_2016;
                d.homeless_individuals = +d.homeless_individuals;
                d.homeless_people_in_families = +d.homeless_people_in_families;
                d.land_area = +d.land_area;
                d.total_homeless = +d.total_homeless;
                d.unsheltered_homeless = +d.unsheltered_homeless;
                d.weighted_estimate_median_gross_rent = +d.weighted_estimate_median_gross_rent;
                d.weighted_income = +d.weighted_income;
                d.Property_crime_rate = +d.Property_crime_rate;
                d.Total_Year_Round_Beds = +d.Total_Year_Round_Beds;
                d.CoC_program_funding = +d.CoC_program_funding;
                d.Other_program_funding = +d.Other_program_funding;
                d.Total_funding = +d.Total_funding;
            });

            node = root = tree_data;

            const nodes = treemap.nodes(root)
                .filter((d) => !d.children);

            const cell = svg.selectAll("g")
                .data(nodes)
                .enter().append("svg:g")
                .attr("class", "cell")
                .attr("transform", (d) => `translate(${d.x},${d.y})`)
                .on("click", (d) => {
                    let group = d.group
                    makeInfographic(d.group);
                    const current = cluster.filter((d) => (d.cluster_final===group));
                    CreateCoCTable(current[0]);
                    makeSelectionPanel(current);
                });

            cell.append("svg:rect")
                .attr("class","rect")
                .attr("z-index","99")
                .attr("width", (d) => d.dx - 1)
                .attr("height", (d) => d.dy - 1)
                .style("fill", (d) => color(d.group));

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
                  return d.name;
                })
                .style('font-size', '40px')
                .style('font-weight','lighter')
                .style("opacity", function(d) {
                  d.w = this.getComputedTextLength();
                  return d.dx > d.w ? 1 : 0;
                });
            
            $(".cell ").first().addClass("active");

            $(".cell").click(function(){
                $(".cell").removeClass("active");
                $(this).addClass("active");
                console.log(this)
            });
          
            const cocTable = d3.select("#cocTab").append("div").attr("class","cocTable");

            function makeCoCTableTitle(d){
                let textColor = color(d.cluster_final);
                return `<p class="cocTabTitleCluster" style=color:${textColor}>Cluster ` + d.cluster + ': </p>' +
                '<p class="cocTabTitleCity">' + d.coc_name + '</p>';
            }

            function makeCoCTableFund(d){
                return '<table class="FundingTable"><tr><th class="fundingTitle">FEDERAL FUNDING FOR THE CONTINUUM OF CARE PROGRAM:</th></tr>'+
                '<tr><td class="fundingAmount">' + formatNumber(d.CoC_program_funding) + '</td></tr>' + 
                '<tr><th class="fundingTitle">FEDERAL FUNDING FOR OTHER HOMELESSNESS PROGRAMS:</th></tr>'+
                '<tr><td class="fundingAmount">' + formatNumber(d.Other_program_funding) + '</td></tr></table>';
            }

            function makeCoCTableInfoCol1(d){
                return '<table class="InfoTable">' + 
                '<tr><th class="fundingTitle">POPULATION OF HOMELESS:</th></tr>'+
                '<tr><td class="infoAmount">' + OtherformatNumber(d.total_homeless) + '</td></tr>' + 
                '<tr><th class="fundingTitle">HOMELESS THAT ARE IN FAMILIES:</th></tr>'+
                '<tr><td class="infoAmount">' + OtherformatNumber(d.homeless_people_in_families) + '</td></tr>' +
                '<tr><th class="fundingTitle">HOMELESS THAT ARE INDIVIDUALS:</th></tr>'+
                '<tr><td class="infoAmount">' + OtherformatNumber(d.homeless_individuals) + '</td></tr>' + 
                '<tr><th class="fundingTitle">BEDS AVAILABLE:</th></tr>'+
                '<tr><td class="infoAmount">' + OtherformatNumber(d.Total_Year_Round_Beds) + '</td></tr></table>';
            }

            function makeCoCTableInfoCol2(d){
                return '<table class="InfoTable">' + 
                '<tr><th class="fundingTitle">POPULATION DENSITY: PPL. PER SQ. MI.</th></tr>'+
                '<tr><td class="infoAmount">' + OtherformatNumber(d.density) + '</td></tr>' + 
                '<tr><th class="fundingTitle">INCOME AVG. FOR LOWEST 20% OF POP.:</th></tr>'+
                '<tr><td class="infoAmount">' + formatNumber(d.weighted_income) + '</td></tr>' +
                '<tr><th class="fundingTitle">RENT: MEDIAN GROSS</th></tr>'+
                '<tr><td class="infoAmount">' + formatNumber(d.weighted_estimate_median_gross_rent) + '</td></tr>' + 
                '<tr><th class="fundingTitle">RENT AS A PERCENT OF INCOME:</th></tr>'+
                '<tr><td class="infoAmount">' + percentFormat(d.rent_pct_income) + '</td></tr></table>';
            }

            function makeCoCTableInfoCol3(d){
                return '<table class="InfoTable">' + 
                '<tr><th class="fundingTitle">LAND AREA: PER SQ. MILES</th></tr>'+
                '<tr><td class="infoAmount">' + OtherformatNumber(d.land_area) + '</td></tr>' + 
                '<tr><th class="fundingTitle">PROPERTY CRIME RATE: PER 100K</th></tr>'+
                '<tr><td class="infoAmount">' + OtherformatNumber(d.Property_crime_rate) + '</td></tr></table>';
            }

            function makeCoCTable(d){
                const cocTabTitle = d3.select(".cocTable")
                .append("div")
                .attr("class","cocTabTitle")
                .html(makeCoCTableTitle(d));
            }

            function makeFundingTable(d){
                const cocTabFund = d3.select(".cocTable")
                .append("div")
                .attr("class","cocTabFund")
                .html(makeCoCTableFund(d))
            }

            function makeInfoTableCol1(d){
                const cocTabFund = d3.select(".cocTable")
                .append("div")
                .attr("class","cocTabInfo")
                .html(makeCoCTableInfoCol1(d))
            }

            function makeInfoTableCol2(d){
                const cocTabFund = d3.select(".cocTable")
                .append("div")
                .attr("class","cocTabInfo")
                .html(makeCoCTableInfoCol2(d))
            }

            function makeInfoTableCol3(d){
                const cocTabFund = d3.select(".cocTable")
                .append("div")
                .attr("class","cocTabInfo")
                .html(makeCoCTableInfoCol3(d))
            }

            function initializeCoCTable(){
                const initTable = cluster.filter((d) => (d.cluster_final==="1a"));
                makeCoCTable(initTable[0]);
                makeFundingTable(initTable[0]);
                makeInfoTableCol1(initTable[0]);
                makeInfoTableCol2(initTable[0]);
                makeInfoTableCol3(initTable[0]);
            }    

            initializeCoCTable();

            function CreateCoCTable(d){
                d3.selectAll(".cocTabInfo").remove();
                d3.selectAll(".cocTabFund").remove();
                d3.selectAll(".cocTabTitle").remove();
            
                makeCoCTable(d);
                makeFundingTable(d);
                makeInfoTableCol1(d);
                makeInfoTableCol2(d);
                makeInfoTableCol3(d);
            }    

            initializeCoCSelection();

            function initializeCoCSelection() {
                const initSelection = cluster.filter((d) => (d.cluster_final==="1a"));
                initSelection.sort((a,b) => { return b.total_homeless - a.total_homeless; })
                makeSelectionPanel(initSelection);
            }

            function makeCocTile(d){
                return `<p class="CocTileTitle">${d.coc_name}</p>`
            }

            function makeSelectionPanel(d) {
                d3.select('.tablinks').remove();
                
                d3.select('#tab').append("g")
                    .attr('class', 'tablinks')
                    .selectAll('button')
                    .data(d)
                    .enter()
                    .append('button')
                    .attr("class","cocButton")
                    .attr('position', 'relative')
                    .on('click', d => CreateCoCTable(d))
                    .append('div')
                    .attr('class', 'header')
                    .attr('background-color', "#E8EAF5")
                    .html((d) => makeCocTile(d));
                    
                    $(".tablinks > .cocButton").first().addClass("active");

                    $(".tablinks > .cocButton").click(function(){
                        $(".tablinks > .cocButton").removeClass("active");
                        $(this).addClass("active");
                    });
            }
            
            // Initialize Infographic
            let w2 = $('#panel_3b').width();
            let h2 = $('#panel_3b').height();

            d3.select('#infographic').attr('height', h2).attr('width', w2)
                .append('div')
                .attr('id', 'picture')
                .attr('height', h2)
                .attr('height', w2);

            initialize_infographic();

            function initialize_infographic() {
                const init_infographic = cluster.filter((d) => (d.cluster_final==='1a'))
                makeInfographic(init_infographic[0].cluster_final);
            }

            function makeInfographic(d) {
                d3.select('#imagebox').remove();

                d3.select('#picture')
                    .append('svg')
                    .attr('id', 'imagebox')
                    .attr('height', h2)
                    .attr('width', w2)
                    .append('svg:image')
                    .attr('width', w2)
                    .attr('height', h2)
                    .attr('xlink:href', get_Infographic(d));
            }

            function get_Infographic(d) {
                if (d === "1a") {
                    return ('/images/homelessness/cluserV2_1a.jpg');
                }
                else if (d === "2a") {
                    return ('/images/homelessness/cluserV2_2a.jpg');
                }
                else if (d === "2b") {
                    return ('/images/homelessness/cluserV2_2b.jpg');
                }
                else if (d === "2c") {
                    return ('/images/homelessness/cluserV2_2c.jpg');
                }
                else if (d === "3a") {
                    return ('/images/homelessness/cluserV2_3a.jpg');
                }
                else if (d === "4a") {
                    return ('/images/homelessness/cluserV2_4a.jpg');
                }
                else if (d === "4b") {
                    return ('/images/homelessness/cluserV2_4b.jpg');
                }
                else if (d === "4c") {
                    return ('/images/homelessness/cluserV2_4c.jpg');
                }
                else if (d === "5a") {
                    return ('/images/homelessness/cluserV2_5a.jpg');
                }
                else if (d === "5b") {
                    return ('/images/homelessness/cluserV2_5b.jpg');
                }
                else if (d === "5c") {
                    return ('/images/homelessness/cluserV2_5c.jpg');
                }
            }
        });
    });
}

infographic_yeah();
