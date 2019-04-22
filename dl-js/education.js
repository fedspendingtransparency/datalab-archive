---
---

// Width and height of map
const width = document.getElementById("container").offsetWidth;
const height = 800;
let centered;

// D3 Projection
const projection = d3.geo.albersUsa()
    .translate([width / 2, height / 2])
    .scale([1800]);

// Define path generator
const path = d3.geo.path() // path generator that will convert GeoJSON to SVG paths
    .projection(projection); // tell path generator to use albersUsa projection


// Create SVG element and append map to the SVG
const svg = d3.select("#container")
    .append("svg")
    .attr("class", "map")
    .attr("width", width)
    .attr("height", height);

// Append Div for tooltip to SVG
d3.select("#container")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// Load in my states data!
d3.json("/data-lab-data/us-states.json", (json) => { // Load GeoJSON data and merge with states data
    d3.csv("/data-lab-data/school_data_v2.csv", (data) => {
        d3.csv("/data-lab-data/University_names.csv", (univ) => {
            d3.select("#button1 > input").on("click", reset);

            data.forEach((d) => {
                d.LATITUDE = +d.LATITUDE;
                d.LONGITUDE = +d.LONGITUDE;
                d.Fed_Funding_Amt = +d.Fed_Funding_Amt;
            });

            const formatNumber = d3.format('$,.0f');

            const tip = d3.tip()
                .attr('class', 'education d3-tip')
                .style('background', '#ffffff')
                .style('color', '#333')
                .style('border', 'solid 1px #BFBCBC')
                .style('padding', '25px')
                .style('width', '300px')
                .offset([-10, 0])
                .html((d) => EduToolTip(d));

            svg.call(tip);

            function EduToolTip(d) {
                return `<p style="border-bottom:1px solid #898C90; font-size: 16px; margin:0; padding-bottom:15px"><b style="color:#555555">${d.Recipient}</p>` +
          `<p style="font-size: 10px; margin-top:0; padding-top:0; margin-bottom:0">${d.INST_TYPE}</p>` +
          `<p style="color: #0071BC; margin: 0; font-size: 14px; padding:0">Federal Funding: ${formatNumber(d.Fed_Funding_Amt)}</p>` +
          `<p style="font-size: 10px; margin-top:0; padding-top:0; margin-bottom:0; font-style: italic">Click to visit the institution details page</p>`;
            }


            function GenMap(json, data) {
                d3.selectAll("circle").remove();
                d3.selectAll("path").remove();

                const g = svg.append("g");

                // Bind the data to the SVG and create one path per GeoJSON feature
                g.selectAll("path")
                    .data(json.features)
                    .enter()
                    .append("path")
                    .attr("d", path)
                    .attr("class", "parent")
                    .on("click", clicked)
                    .style("stroke", "#fff")
                    .style("stroke-width", "1")
                    .style("fill", "#414b57");

                const formatNumber = d3.format("$,f");
                // Map the cities I have lived in!

                const dot = g.selectAll("circle")
                    .data(data);

                dot.enter()
                    .append("circle")
                    .attr("cx", (d) => projection([d.LONGITUDE, d.LATITUDE])[0])
                    .attr("cy", (d) => projection([d.LONGITUDE, d.LATITUDE])[1])
                    .attr("r", (d) => ((Math.sqrt(d.Fed_Funding_Amt) * 0.0003) >= 2 ? (Math.sqrt(d.Fed_Funding_Amt) * 0.0003) : 2))
                    .style("fill", "#0086c8")
                    .style("opacity", 0.6)
                    .style("stroke", "#000")
                    .style("stroke-width", 0.5)
                    .style("transition", "opacity 0.3s")
                    .on("mouseover", function (d, i) {
                        tip.show(d);
                        const el = d3.select(this);
                        el.style("stroke", "#000").style("stroke-width", 3);
                    })
                    .on("mouseout", function (d, i) {
                        tip.hide(d);
                        d3.select(this)
                            .style("stroke-width", 0.75)
                            .style("stroke", "#000");
                    });


                function clicked(d) {
                    let x;
                    let y;
                    let k;


                    if (d && centered !== d) {
                        const centroid = path.centroid(d);
                        x = centroid[0];
                        y = centroid[1];

                        if (d.properties.NAME === "Florida") {
                            k = 5.0;
                        }
                        else if (d.properties.NAME === "Michigan") {
                            k = 5.5;
                        }
                        else if (d.properties.NAME === "Idaho") {
                            k = 3.25;
                        }
                        else if (d.properties.NAME === "Alaska") {
                            k = 5.0;
                        }
                        else if (d.properties.NAME === "Hawaii") {
                            k = 7.0;
                        }
                        else if (path.area(d) <= 900) {
                            k = 11.0;
                        }
                        else if (path.area(d) > 900 && path.area(d) <= 3000) {
                            k = 9.0;
                        }
                        else if (path.area(d) > 3000 && path.area(d) <= 4000) {
                            k = 8.0;
                        }
                        else if (path.area(d) > 4000 && path.area(d) <= 5000) {
                            k = 6.5;
                        }
                        else if (path.area(d) > 5000 && path.area(d) <= 7000) {
                            k = 6.0;
                        }
                        else if (path.area(d) > 7000 && path.area(d) <= 8000) {
                            k = 5.0;
                        }
                        else if (path.area(d) > 8000 && path.area(d) <= 10000) {
                            k = 4.0;
                        }
                        else if (path.area(d) > 10000 && path.area(d) <= 13500) {
                            k = 3.5;
                        }
                        else {
                            k = 2.75;
                        }
                        centered = d;
                    }
                    else {
                        x = width / 2;
                        y = height / 2;
                        k = 1;
                        centered = null;
                    }

                    g.selectAll("path")
                        .classed("active", centered && ((d) => d === centered));

                    g.transition()
                        .duration(750)
                        .attr("transform", `translate(${width / 2},${height / 2})scale(${k})translate(${-x},${-y})`)
                        .style("stroke-width", `${1.5 / k}px`);
                }
            }

            function reset() {
                GenMap(json, data);
            }

            $(document).on('click', '#textbox', (e) => {
                e.stopPropagation();
            });
            $('#select').click((e) => {
                e.stopPropagation();
            });

            const select = document.getElementById("select");
            for (let i = 0; i < univ.length; i++) {
                const opt = univ[i].name;
                const el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                select.appendChild(el);
            }

            jQuery.fn.filterByText = function (textbox, selectSingleMatch) {
                return this.each(function () {
                    const select = this;
                    const options = [];
                    $(select).find('option').each(function () {
                        options.push({
                            value: $(this).val(),
                            text: $(this).text()
                        });
                    });
                    $(select).data('options', options);
                    $(textbox).bind('change keyup', function () {
                        const options = $(select).empty().data('options');
                        const search = $(this).val().trim();
                        const regex = new RegExp(search, "gi");

                        $.each(options, (i) => {
                            const option = options[i];
                            if (option.text.match(regex) !== null) {
                                $(select).append(
                                    $('<option>').text(option.text).val(option.value)
                                );
                            }
                        });
                        if (selectSingleMatch === true && $(select).children().length === 1) {
                            $(select).children().get(0).selected = true;
                        }
                    });
                });
            };
            let nameSelection = null;

            GenMap(json, data);

            $("input:checkbox").on("click", (e) => {
                const checkedVals = $('.box:checkbox:checked').map(function () {
                    return this.value;
                }).get();

                updateMap(json, data, checkedVals);
            });

            $(() => {
                $('#select').filterByText($('#textbox'), false);
                $("#select").change(() => {
                    nameSelection = $("#select").val();

                    const selectedData = [];
                    if (nameSelection === null) {
                        GenMap(json, data);
                    }
                    else {
                        for (let i = 0; i < data.length; i++) {
                            if (nameSelection === data[i].Recipient) {
                                selectedData[0] = data[i];
                            }
                        }
                        GenMap(json, selectedData);
                    }
                });
            });

            function updateMap(json, data, checkedVals) {
                let newData = [];
                if (checkedVals.length === 4) {
                    GenMap(json, data);
                }
                else if (checkedVals[0] === "public" && checkedVals[1] === "private" && checkedVals[2] === "2yr") {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].INST_TYPE === "Public, 2-year" || data[i].INST_TYPE === "Private not-for-profit, 2-year") {
                            newData = newData.concat(data[i]);
                        }
                    }
                    GenMap(json, newData);
                }
                else if (checkedVals[0] === "public" && checkedVals[1] === "private" && checkedVals[2] === "4yr") {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].INST_TYPE === "Public, 4-year or above" || data[i].INST_TYPE === "Private not-for-profit, 4-year or above") {
                            newData = newData.concat(data[i]);
                        }
                    }
                    GenMap(json, newData);
                }
                else if (checkedVals[0] === "public" && checkedVals[1] === "2yr") {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].INST_TYPE === "Public, 2-year") {
                            newData = newData.concat(data[i]);
                        }
                    }
                    GenMap(json, newData);
                }
                else if (checkedVals[0] === "private" && checkedVals[1] === "2yr") {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].INST_TYPE === "Private not-for-profit, 2-year") {
                            newData = newData.concat(data[i]);
                        }
                    }
                    GenMap(json, newData);
                }
                else if (checkedVals[0] === "public" && checkedVals[1] === "4yr") {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].INST_TYPE === "Public, 4-year or above") {
                            newData = newData.concat(data[i]);
                        }
                    }
                    GenMap(json, newData);
                }
                else if (checkedVals[0] === "private" && checkedVals[1] === "4yr") {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].INST_TYPE === "Private not-for-profit, 4-year or above") {
                            newData = newData.concat(data[i]);
                        }
                    }
                    GenMap(json, newData);
                }
                else if (checkedVals[0] === "public") {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].INST_TYPE === "Public, 4-year or above" || data[i].INST_TYPE === "Public, 2-year") {
                            newData = newData.concat(data[i]);
                        }
                    }
                    GenMap(json, newData);
                }
                else if (checkedVals[0] === "private") {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].INST_TYPE === "Private not-for-profit, 4-year or above" || data[i].INST_TYPE === "Private not-for-profit, 2-year") {
                            newData = newData.concat(data[i]);
                        }
                    }
                    GenMap(json, newData);
                }
                else if (checkedVals[0] === "2yr") {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].INST_TYPE === "Public, 2-year" || data[i].INST_TYPE === "Private not-for-profit, 2-year") {
                            newData = newData.concat(data[i]);
                        }
                    }
                    GenMap(json, newData);
                }
                else if (checkedVals[0] === "4yr") {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].INST_TYPE === "Private not-for-profit, 4-year or above" || data[i].INST_TYPE === "Public, 4-year or above") {
                            newData = newData.concat(data[i]);
                        }
                    }
                    GenMap(json, newData);
                }
            }
        });
    });
});
