---
---

const absWidth = 1024;
const absHeight = 575;
const margin = {
    top: 100,
    right: 50,
    bottom: 15,
    left: 100
};
let la;
let map1Centered;
let map2Centered;
const formatNumber = d3.format('$,.0f');
const OtherformatNumber = d3.format(',.0f');
const panel2Width = absWidth - margin.left - margin.right;
const panel2Height = absHeight - margin.top - margin.bottom;
const matrixWidth = (absWidth / 1.85) - margin.left - margin.right;
const mapWidth = panel2Width - matrixWidth - margin.left - margin.right - 45;
const mapHeight = panel2Height / 3;
const infoWidth = panel2Width - matrixWidth - margin.left - margin.right;
const infoHeight = panel2Height / 3;


d3.json('/data-lab-data/2019_coc_grantee_areas_v2.json', (us) => {
    d3.csv('/data-lab-data/2019statecfdafunding.csv', (cfdaState) => {
        d3.csv('/data-lab-data/2019CoCCFDAfunding_v3.csv', (barChrt) => {
            d3.csv('/data-lab-data/State_crosswalk.csv', (state) => {
                d3.csv('/data-lab-data/cfda_acronyms.csv', (acr) => {
                    d3.csv('/data-lab-data/panel_2_table_and_counts_v6.csv', (tableData) => {
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

                        la = us.features.filter((d) => d.properties.coc_number === 'CA-600');
                        map2Centered = la[0];

                        function getDollarValue(d) {
                            for (let i = 0; i < tableData.length; i++) {
                                if (d.properties.coc_number === tableData[i].coc_number) {
                                    return formatNumber(tableData[i].amount);
                                }
                            }
                            return 0;
                        }

                        function getCFDAValue(d) {
                            return `<p style="border-bottom:1px solid #898C90; font-size: 18px; margin:0; padding-bottom:15px"><b style="color:#555555">` +
                                `${d.program_title}</b> [CFDA No. ${d.cfda_number}]</p><br>` +
                                `<p style="color: #0071BC; margin: 0; font-size: 20px; padding:0">Federal Funding: ${formatNumber(d.fed_funding)}</p><br>` +
                                `<p style="font-size: 16px; margin-top:0; padding-top:0; margin-bottom:0; font-style: italic">` +
                                `Click to visit the program website</p>`;
                        }

                        const mapTitle = d3.select('#p2_1_title')
                            .append('div')
                            .attr('padding', '50px 0 0 0')
                            .attr('class', 'legend-header');

                        const p21MapSvg = d3.select('#panel_map')
                            .append('svg')
                            .attr('id', 'p2_1_map')
                            .attr('width', '95%')
                            .attr('height', '350px');

                        const contactPanel = d3.select('#CoCcontact')
                            .attr('width', infoWidth + margin.left + margin.right)
                            .attr('height', infoHeight + margin.top + margin.bottom);

                        const cocPanel = d3.select('#panel_coc')
                            .attr('height', infoHeight + margin.top + margin.bottom)
                            .attr('width', '95%');

                        const p2MatrixSvg = d3.select('#panel_matrix').append('svg')
                            .attr('width', '100%')
                            .attr('height', mapHeight + margin.top + margin.bottom + 40);

                        function p2TipHTML(d) {
                            return `<p style="border-bottom:1px solid #898C90; font-size: 18px; margin:0; `
                                + `padding-bottom:15px; color: #555555; font-weight: bold">`
                                + `${d.properties.coc_number}: ${d.properties.COCNAME}</p><br>` +
                                `<p style="color: #0071BC; margin: 0; font-size: 20px">Federal Funding: ${getDollarValue(d)}</p><br>` +
                                `<p style="font-size: 16px; margin-top:0; padding-top:0; margin-bottom:0; font-style: italic"> Double click to zoom in/out</p>`;
                        }

                        const p2Tip = d3.tip()
                            .attr('class', 'homeless-analysis d3-tip')
                            .style('background', '#ffffff')
                            .style('color', '#333')
                            .style('border', 'solid 1px #BFBCBC')
                            .style('padding', '25px')
                            .style('width', '300px')
                            .html((d) => p2TipHTML(d));

                        const p23BarTip = d3.tip()
                            .attr('class', 'homeless-analysis d3-tip')
                            .style('background', '#ffffff')
                            .style('color', '#333')
                            .style('border', 'solid 1px #BFBCBC')
                            .style('padding', '25px')
                            .style('width', '300px')
                            .offset([-10, 0])
                            .html((d) => getCFDAValue(d));


                        const p21Projection = d3.geo.albersUsa()
                            .translate([mapWidth / 0.9, mapHeight / 0.9]) // translate to center of screen
                            .scale([575]); // scale things down so see entire US

                        // Define path generator
                        const p21Path = d3.geo.path() // path generator that will convert GeoJSON to SVG paths
                            .projection(p21Projection); // tell path generator to use albersUsa projection

                        const m = p21MapSvg.append('g');

                        p21MapSvg.append('circle').attr('id', 'tipfollowscursor_2');
                        p21MapSvg.call(p2Tip);

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

                        function barClick(d) {
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
                                        return ('#EEEEFF');
                                    }
                                    else if (tableData[i].total_homeless <= 200) {
                                        return ('#E1E1F4');
                                    }
                                    else if (tableData[i].total_homeless <= 300) {
                                        return ('#D6D6EA');
                                    }
                                    else if (tableData[i].total_homeless <= 500) {
                                        return ('#D0D0F0');
                                    }
                                    else if (tableData[i].total_homeless <= 700) {
                                        return ('#B8B8D1');
                                    }
                                    else if (tableData[i].total_homeless <= 1000) {
                                        return ('#ACACC6');
                                    }
                                    else if (tableData[i].total_homeless <= 1500) {
                                        return ('#9E9EBA');
                                    }
                                    else if (tableData[i].total_homeless <= 2000) {
                                        return ('#9595AD');
                                    }
                                    else if (tableData[i].total_homeless <= 2500) {
                                        return ('#8888A5');
                                    }
                                    else if (tableData[i].total_homeless <= 3000) {
                                        return ('#7F7FA0');
                                    }
                                    else if (tableData[i].total_homeless <= 3500) {
                                        return ('#72729B');
                                    }
                                    else if (tableData[i].total_homeless <= 4000) {
                                        return ('#656593');
                                    }
                                    else if (tableData[i].total_homeless <= 5000) {
                                        return ('#5E5D91');
                                    }
                                    else if (tableData[i].total_homeless <= 6000) {
                                        return ('#534E89');
                                    }
                                    else if (tableData[i].total_homeless <= 7000) {
                                        return ('#4D4484');
                                    }
                                    else if (tableData[i].total_homeless <= 8000) {
                                        return ('#45387A');
                                    }
                                    else if (tableData[i].total_homeless <= 12000) {
                                        return ('#392870');
                                    }
                                    else if (tableData[i].total_homeless <= 80000) {
                                        return ('#311C66');
                                    }

                                    return ('#FFAD29');
                                }
                            }
                            return '#000000';
                        }

                        function getValue(d) {
                            for (let i = 0; i < tableData.length; i++) {
                                if (d.properties.coc_number === tableData[i].coc_number) {
                                    return OtherformatNumber(tableData[i].total_homeless);
                                }
                            }
                            return 0;
                        }

                        function getSheltered(d) {
                            for (let i = 0; i < tableData.length; i++) {
                                if (d.properties.coc_number === tableData[i].coc_number) {
                                    return OtherformatNumber(tableData[i].sheltered_homeless);
                                }
                            }
                            return 0;
                        }

                        function getUnsheltered(d) {
                            for (let i = 0; i < tableData.length; i++) {
                                if (d.properties.coc_number === tableData[i].coc_number) {
                                    return OtherformatNumber(tableData[i].unsheltered_homeless);
                                }
                            }
                            return 0;
                        }

                        function getState(d) {
                            for (let i = 0; i < tableData.length; i++) {
                                if (d.properties.STUSAB === state[i].Abbrv) {
                                    return state[i].State;
                                }
                            }

                            return '';
                        }

                        function getProgram(d) {
                            for (let i = 0; i < barChrt.length; i++) {
                                if (acr[i] && d.cfda_number === acr[i].cfda_number) {
                                    return acr[i].acronym;
                                }
                            }

                            return '';
                        }

                        function filterCfdaAmount(x) {
                            return x.fed_funding > 0;
                        }

                        function BarChart(d) {
                            $('#panel_info').empty();
                            d3.select('#panel_matrix > svg').remove();
                            d3.select('#p2_cfda_legend_title').remove();
                            d3.select('#p2_2_cfda_legend').remove();

                            d3.select('#p2_2_legend_title')
                                .append('div')
                                .attr('padding', '0 0 10px 0')
                                .attr('id', 'p2_2_cfda_legend_title')
                                .attr('class', 'h5')
                                .style('text-align', 'center')
                                .attr('id', 'p2_cfda_legend_title')
                                .attr('class', 'legend-header')
                                .html(`<h5>Federal Programs Serving ${d.properties.coc_number}</h5>`);

                            const p23MatrixSvg = d3.select('#panel_matrix').append('svg')
                                .attr('width', '100%')
                                .attr('height', mapHeight + margin.top + margin.bottom + 140)
                                .attr('transform', `translate(${0},${10})`);
                            p23MatrixSvg.call(p23BarTip);

                            function filterCocNumBarChart(barChart) {
                                return barChart.coc_number === d.properties.coc_number;
                            }

                            const initial = barChrt.filter(filterCocNumBarChart);
                            const initialBar = initial.filter(filterCfdaAmount);

                            const axisMargin = 5;
                            const xWidth = document.getElementById("panel_matrix").offsetWidth - 50;
                            const barHeight = 20;
                            const barPadding = 5;
                            let labelWidth = 0;

                            const max = d3.max(initialBar, (d1) => d1.fed_funding);

                            const bar = p23MatrixSvg.selectAll('g')
                                .data(initialBar)
                                .enter()
                                .append('g');

                            bar.attr('class', 'bar')
                                .attr('cx', 0)
                                .style('fill', (d2) => {
                                    if (d2.category === 'Housing') {
                                        return '#324D5C';
                                    }
                                    else if (d2.category === 'Health') {
                                        return '#F0CA4D';
                                    }
                                    else if (d2.category === 'Education') {
                                        return '#2A5DA8';
                                    }
                                    else if (d2.category === 'Support Services') {
                                        return '#E37B40';
                                    }
                                    else if (d2.category === 'Employment') {
                                        return '#F53855';
                                    }
                                    return "#FFF";
                                })
                                .attr('transform', (d4, i) => `translate(5,${i * (barHeight + barPadding)})`)
                                .on('mouseover', p23BarTip.show)
                                .on('mouseout', p23BarTip.hide)
                                .on('click', barClick);

                            bar.append('text')
                                .attr('class', 'label')
                                .attr('x', 0)
                                .attr('y', barHeight / 2)
                                .attr('dy', '.35em') // vertical align middle
                                .text((t) => getProgram(t))
                                .each(() => {
                                    labelWidth = 75;
                                });

                            const scale = d3.scale.linear()
                                .domain([0, max])
                                .range([0, xWidth - labelWidth]);

                            const p2XAxis = d3.svg.axis()
                                .scale(scale)
                                .tickSize(-p2MatrixSvg[0][0].attributes[1].nodeValue + axisMargin)
                                .tickFormat((d5) => formatNumber(d5));

                            bar.append('rect')
                                .attr('transform', `translate(${labelWidth},0)`)
                                .attr('margin-left', 5)
                                .attr('height', barHeight)
                                .attr('width', (d6) => scale(d6.fed_funding));

                            p23MatrixSvg.insert('g', ':first-child')
                                .attr('class', 'axisHorizontal')
                                .attr('transform', `translate(${80},${235})`)
                                .call(p2XAxis)
                                .selectAll('text')
                                .attr('y', 10)
                                .attr('x', 0)
                                .attr('dy', '.35em')
                                .attr('transform', 'rotate(-35)')
                                .style('font-size', '12')
                                .style('text-anchor', 'end');
                        }

                        /**
                         * @return {string}
                         */
                        function MakeCoCTable(d7) {
                            d3.selectAll('#p2_quad3_title').remove();

                            d3.select('#p2_3_title')
                                .append('div')
                                .attr('width', '100%')
                                .attr('id', 'p2_quad3_title')
                                .style('class', 'legend-header')
                                .html(`<h5>${d7.properties.coc_number} Homeless Counts</h5>`);

                            for (let i = 0; i < tableData.length; i++) {
                                if (tableData[i].coc_number === d7.properties.coc_number) {
                                    const tabDat = tableData[i];

                                    return `<table><tr><th></th><th class="table-heading">Individuals</th><th class="table-heading">Families</th><th class="table-heading">Total</th></tr><tr><td class="table-heading">Sheltered</td><td>${OtherformatNumber(tabDat.sheltered_total_homeless_individuals)}</td><td>${OtherformatNumber(tabDat.sheltered_total_homeless_people_in_families)}</td><td>${OtherformatNumber(tabDat.sheltered_homeless)}</td></tr><tr><td class="table-heading">Unsheltered</td><td>${OtherformatNumber(tabDat.unsheltered_homeless_individuals)}</td><td>${OtherformatNumber(tabDat.unsheltered_homeless_people_in_families)}</td><td>${OtherformatNumber(tabDat.unsheltered_homeless)}</td></tr><tr><td class="table-heading">Total</td><td>${OtherformatNumber(tabDat.homeless_individuals)}</td><td>${OtherformatNumber(tabDat.homeless_people_in_families)}</td><td>${OtherformatNumber(tabDat.total_homeless)}</td></tr></table><div class="item"><div class="header">Chronically Homeless:</div><div class="value">${OtherformatNumber(tabDat.chronically_homeless)}</div></div><div class="item"><div class="header">Homeless Veterans:</div><div class="value">${OtherformatNumber(tabDat.homeless_veterans)}</div></div><div class="item"><div class="header">Average number of days in Emergency Shelters, Safe Havens, or Transitional Housing:</div><div class="value">${OtherformatNumber(tabDat.es_sh_th_avg_days)}</div></div><h3 class="h3-header item">Number of people who return to homelessness within:</h3><div class="item"><div class="header">6 months</div><div class="value">${OtherformatNumber(tabDat.total_persons_returns_in_6_mths)}</div></div><div class="item"><div class="header">12 months</div><div class="value">${OtherformatNumber(tabDat.total_persons_returns_in_12_mths_should_include_the_6_month_cohort)}</div></div><div class="item"><div class="header">24 months</div><div class="value">${OtherformatNumber(tabDat.total_persons_returns_in_24_mths_should_include_both_the_6_and_12_month_cohort)}</div></div><br/><div class="item"><div class="header">Percentage of people who exit to permanent housing</div><div class="value">${tabDat.percent_with_successful_es_th_sh_ph_rrh_exit}</div></div><div class="item"><div class="header">Percentage of those who retain their permanent housing status</div><div class="value">${tabDat.percent_with_successful_ph_retention_or_exit}</div></div>`;
                                }
                            }
                        }

                        function createCoCTable(d8) {
                            $('#panel_coc').empty();
                            cocPanel.append('div')
                                .attr('id', 'coc_info')
                                .attr('height', infoHeight + margin.top + margin.bottom)
                                .attr('width', '100%')
                                .html(MakeCoCTable(d8));
                        }

                        function makeMapTitle(d9) {
                            return mapTitle.html(`<h5>${d9.properties.coc_number}: ${d9.properties.COCNAME}</h5>`);
                        }

                        function StateBarChart(d) {
                            d3.select('#panel_info > svg').remove();
                            d3.select('#p2_4_cfda_legend_title').remove();
                            d3.select('#p2_4_cfda_legend').remove();

                            const cfdaLegend22 = d3.select('#p2_2_legend')
                                .append('div')
                                .attr('width', '100%')
                                .attr('height', '30px')
                                .attr('id', 'p2_2_cfda_legend');

                            const cfdaLegend = d3.select('#p2_4_legend')
                                .append('div')
                                .attr('width', '100%')
                                .attr('height', '30px')
                                .attr('id', 'p2_4_cfda_legend');

                            const cfdaColor = ['#324D5C', '#2A5DA8', '#F53855', '#E37B40', '#F0CA4D', '#06984E'];

                            const cfdaLegendKeyValues = ['Housing', 'Education', 'Employment', 'Support Services', 'Health', 'Food'];

                            for (let i = 0; i < cfdaLegendKeyValues.length; i++) {
                                const k = cfdaLegend22.append('div')
                                    .attr('id', 'p2_2_legend_key');

                                k.append('div')
                                    .attr('id', 'p2_2_key')
                                    .style('position', 'relative')
                                    .append('svg')
                                    .attr('height', '40px')
                                    .attr('width', '40px')
                                    .append('circle')
                                    .attr('cx', 7)
                                    .attr('cy', 7)
                                    .attr('r', 7)
                                    .attr('height', 20)
                                    .attr('width', 20)
                                    .style('fill', () => cfdaColor[i]);

                                k.append('div')
                                    .attr('id', 'p2_2_key_value')
                                    .style('position', 'relative')
                                    .style('color', 'blue')
                                    .html(`<p>${cfdaLegendKeyValues[i]}</p>`);


                                const l = cfdaLegend.append('div')
                                    .attr('id', 'p2_4_legend_key');

                                l.append('div')
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
                                    .style('fill', () => cfdaColor[i]);

                                l.append('div')
                                    .attr('id', 'p2_4_key_value')
                                    .style('position', 'relative')
                                    .style('color', 'blue')
                                    .html(`<p>${cfdaLegendKeyValues[i]}</p>`);
                            }

                            d3.select('#p2_4_legend_title')
                                .append('div')
                                .attr('id', 'p2_4_cfda_legend_title')
                                .attr('class', 'legend-header')
                                .html(`<h5>Federal Programs Serving ${getState(d)}</h5>`);

                            const p24MatrixSvg = d3.select('#panel_info').append('svg')
                                .attr('width', '100%')
                                .attr('height', mapHeight + margin.top + margin.bottom + 140)
                                .attr('transform', `translate(${0},${10})`);

                            p24MatrixSvg.call(p23BarTip);

                            function filterStateBarChart(cfdaStateData) {
                                return cfdaStateData.pop_state_code === d.properties.STUSAB;
                            }

                            const initial = cfdaState.filter(filterStateBarChart);
                            const initialBar = initial.filter(filterCfdaAmount);

                            const axisMargin = 5;
                            const xWidth = document.getElementById("panel_matrix").offsetWidth - 50;
                            const barHeight = 20;
                            const barPadding = 5;
                            let labelWidth = 0;

                            const max = d3.max(initialBar, (da) => da.fed_funding);

                            const bar = p24MatrixSvg.selectAll('g')
                                .data(initialBar)
                                .enter()
                                .append('g');

                            bar.attr('class', 'bar')
                                .attr('cx', 0)
                                .style('fill', (db) => {
                                    if (db.category === 'Housing') {
                                        return '#324D5C';
                                    }
                                    else if (db.category === 'Health') {
                                        return '#F0CA4D';
                                    }
                                    else if (db.category === 'Education') {
                                        return '#2A5DA8';
                                    }
                                    else if (db.category === 'Support Services') {
                                        return '#E37B40';
                                    }
                                    else if (db.category === 'Employment') {
                                        return '#F53855';
                                    }
                                    else if (db.category === 'Food') {
                                        return '#06984E';
                                    }
                                    return '#000000';
                                })
                                .attr('transform', (db, i) => `translate(5,${i * (barHeight + barPadding)})`)
                                .on('mouseover', p23BarTip.show)
                                .on('mouseout', p23BarTip.hide)
                                .on('click', barClick);

                            bar.append('text')
                                .attr('class', 'label')
                                .attr('x', 0)
                                .attr('y', barHeight / 2)
                                .attr('dy', '.35em') // vertical align middle
                                .text((dc) => getProgram(dc))
                                .each(() => {
                                    labelWidth = 75;
                                });

                            const scale = d3.scale.linear()
                                .domain([0, max])
                                .range([0, xWidth - labelWidth]);

                            const p2XAxis = d3.svg.axis()
                                .scale(scale)
                                .tickSize((-p2MatrixSvg[0][0].attributes[1].nodeValue + axisMargin) - 50)
                                .tickFormat((dg) => formatNumber(dg));

                            bar.append('rect')
                                .attr('transform', `translate(${labelWidth},0)`)
                                .attr('margin-left', 5)
                                .attr('height', barHeight)
                                .attr('width', (de) => scale(de.fed_funding));

                            p24MatrixSvg.insert('g', ':first-child')
                                .attr('class', 'axisHorizontal2')
                                .attr('transform', `translate(${80},${325})`)
                                .call(p2XAxis)
                                .selectAll('text')
                                .attr('y', 10)
                                .attr('x', 0)
                                .attr('dy', '.35em')
                                .attr('transform', 'rotate(-35)')
                                .style('font-size', '12')
                                .style('text-anchor', 'end');
                        }

                        function makeContactTable(df) {
                            return `<h4 style="margin-bottom:0">${df.properties.COCNAME}</h4><br>` +
                                `<p><b>Contact information for the Continuum of Care program</b>` +
                                `<br>${df.properties.CONTACT_TY}<br>` +
                                `Name: ${df.properties.FIRST_NAME} ${df.properties.LAST_NAME}<br>` +
                                `Email: ${df.properties.EMAIL_ADDR}<br>` +
                                `Phone: ${df.properties.PRIMARY_PH}</p>`;
                        }

                        function createContact(d) {
                            $('#contact_panel').empty();
                            $('#contact_info').remove();

                            contactPanel.append('div')
                                .attr('id', 'contact_info')
                                .attr("height", infoHeight)
                                .attr("width", infoWidth)
                                .html(makeContactTable(d));
                        }

                        function p21ClickedP1(d) {
                            let k;
                            const centroid = p21Path.centroid(d);
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
                            map2Centered = d;

                            m.selectAll('p2_1_path')
                                .classed('active', map2Centered && d === map2Centered);

                            m.transition()
                                .duration(750)
                                .attr('transform', `translate(${mapWidth / 1.35},${mapHeight / 1.1})scale(${k})translate(${-x},${-y})`)
                                .style('stroke-width', `${0.15 / k}px`);
                        }

                        function p2GetColor(d) {
                            for (let i = 0; i < tableData.length; i++) {
                                if (d.properties.coc_number === tableData[i].coc_number) {
                                    if (tableData[i].amount <= 500000) { return ('#BEF399'); }
                                    else if (tableData[i].amount <= 1500000) { return ('#B0EC9A'); }
                                    else if (tableData[i].amount <= 2500000) { return ('#A3E59B'); }
                                    else if (tableData[i].amount <= 5000000) { return ('#96DD9B'); }
                                    else if (tableData[i].amount <= 7500000) { return ('#8AD59C'); }
                                    else if (tableData[i].amount <= 10000000) { return ('#80CE9C'); }
                                    else if (tableData[i].amount <= 20000000) { return ('#76C69C'); }
                                    else if (tableData[i].amount <= 30000000) { return ('#6DBD9B'); }
                                    else if (tableData[i].amount <= 40000000) { return ('#66B59A'); }
                                    else if (tableData[i].amount <= 50000000) { return ('#5FAD98'); }
                                    else if (tableData[i].amount <= 60000000) { return ('#5AA496'); }
                                    else if (tableData[i].amount <= 70000000) { return ('#569C93'); }
                                    else if (tableData[i].amount <= 80000000) { return ('#529490'); }
                                    else if (tableData[i].amount <= 90000000) { return ('#508B8C'); }
                                    else if (tableData[i].amount <= 100000000) { return ('#4E8387'); }
                                    else if (tableData[i].amount <= 150000000) { return ('#465261'); }
                                    else if (tableData[i].amount <= 200000000) { return ('#3E3C4A'); }
                                }
                            }
                            return ('#291C24');
                        }

                        function p21Clicked(d) {
                            let x;
                            let y;
                            let k;

                            if (d && map2Centered !== d) {
                                const centroid = p21Path.centroid(d);
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
                                map2Centered = d;
                            }
                            else {
                                x = mapWidth / 1.35;
                                y = mapHeight / 1.1;
                                k = 1;
                                map2Centered = null;
                            }

                            m.selectAll('p2_1_path')
                                .classed('active', map2Centered && d === map2Centered);

                            m.transition()
                                .duration(750)
                                .attr('transform', `translate(${mapWidth / 1.35},${mapHeight / 1.1})scale(${k})translate(${-x},${-y})`)
                                .style('stroke-width', `${0.15 / k}px`);
                        }

                        function GenMap() {
                            d3.select('#container').append('div').attr('id', 'viz_container');

                            const width = 1000;
                            const height = 600;
                            // let centered = null;

                            // D3 Projection
                            const projection = d3.geo.albersUsa()
                                .translate([width / 2, height / 2]) // translate to center of screen
                                .scale([1200]); // scale things down so see entire US ---1455

                            // Define path generator
                            const path = d3.geo.path() // path generator that will convert GeoJSON to SVG paths
                                .projection(projection); // tell path generator to use albersUsa projection

                            d3.select('#viz_container')
                                .append('div')
                                .attr('id', 'map_container')
                                .attr('width', width)
                                .attr('height', height);

                            const mapSvg = d3.select('#map_container')
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
                                .html((d) => `<p style="border-bottom:1px solid #898C90; font-size: 18px; margin:0;`
                                    + ` padding-bottom:15px; font-weight: bold; color:#555555">`
                                    + `${d.properties.coc_number}: ${d.properties.COCNAME}</p><br>` +
                                    `<p style="color: #0071BC; margin: 0; padding-bottom:0; font-size: 20px; line-height: 22px">`
                                    + `Total Homeless: ${getValue(d)}</p><br>` +
                                    `<ul style="list-style-type: circle; margin:0; padding:0 0 0 15px">` +
                                    `<li style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px; padding:0">`
                                    + `Sheltered Homeless: ${getSheltered(d)}</li>` +
                                    `<li style="font-size: 14px; font-weight: normal; margin:0; line-height: 16px; padding:0">`
                                    + `Unsheltered Homeless: ${getUnsheltered(d)}</li></ul><br>` +
                                    `<p style="font-size: 16px; margin-top:0; padding-top:0; margin-bottom:0; font-style: italic">`
                                    + ` Double click to zoom in/zoom out</p>`);

                            mapSvg.append('circle').attr('id', 'tipfollowscursor_1');
                            mapSvg.call(tip);

                            const g = mapSvg.append('g')
                                .attr('class', 'counties')
                                .selectAll('path')
                                .data(us.features)
                                .enter()
                                .append('path')
                                .attr('class', 'coc')
                                .attr('data-coc', (d) => d.properties.coc_number)
                                .attr('data-state', (d) => d.properties.state)
                                .attr('data-name', (d) => d.properties.name)
                                .attr('d', path);

                            function clicked(d) {
                                let x;
                                let y;
                                let k;

                                window.Analytics.event({
                                    category: 'Homelessness Analysis - Panel 1 - Double Click CoC',
                                    action: `${d.properties.coc_number} - ${d.properties.COCNAME}`
                                });

                                if (d && map1Centered !== d) {
                                    const centroid = path.centroid(d);
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
                                    map1Centered = d;
                                }
                                else {
                                    x = width / 2;
                                    y = height / 2;
                                    k = 1;
                                    map1Centered = null;
                                }

                                g.selectAll('path')
                                    .classed('active', map1Centered && d === map1Centered);

                                g.transition()
                                    .duration(750)
                                    .attr('transform', `translate(${width / 2},${height / 2})scale(${k})translate(${-x},${-y})`)
                                    .style('stroke-width', `${0.25 / k}px`);
                            }


                            g.on('mouseover', (d) => {
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
                                    makeMapTitle(d);
                                    StateBarChart(d);
                                    createContact(d);
                                    p21ClickedP1(d);
                                })
                                .style('fill', getColor);
                        }

                        function GenTable() {
                            const columnNames = ['CoC Number', 'CoC Name', 'Total Homeless', 'Sheltered Homeless',
                                'Unsheltered Homeless', 'Chronically Homeless', 'Homeless Veterans', 'Homeless Individuals',
                                'Homeless People in Families', 'Homeless Unaccompanied Youth (Under 25)'];

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

                            const w1 = $('#container').width();
                            const h1 = $('#container').height();
                            // d3.select('#container')
                            //     .attr('height', '100%')
                            //     .attr('width', '100%');

                            d3.select('#container')
                                .append('div')
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

                            const table = d3.select('#table_container')
                                .append('table')
                                .attr('id', 'tab');

                            table.append('thead').append('tr');

                            const headers = table.select('tr').selectAll('th')
                                .data(columnNames)
                                .enter()
                                .append('th')
                                .text((d) => d);

                            let rows;
                            let rowEntries;
                            let rowEntriesNoAnchor;
                            let rowEntriesWithAnchor;

                            // draw table body with rows
                            table.append('tbody');

                            // data bind
                            rows = table.select('tbody').selectAll('tr')
                                .data(tableData, (d) => d.coc_number);

                            // enter the rows
                            rows.enter()
                                .append('tr');

                            // enter td's in each row
                            rowEntries = rows.selectAll('td')
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
                            rowEntriesNoAnchor = rowEntries.filter((d) => (/https?:\/\//.test(d) === false));
                            rowEntriesNoAnchor.text((d) => d);

                            // draw row entries with anchor
                            rowEntriesWithAnchor = rowEntries.filter((d) => (/https?:\/\//.test(d) === true));
                            rowEntriesWithAnchor
                                .append('a')
                                .attr('href', (d) => d)
                                .attr('target', '_blank')
                                .text((d) => d);

                            /**  search functionality **/
                            d3.select('#search')
                                .on('keyup', () => { // filter according to key pressed
                                    let searchedData = tableData;
                                    const text = this.value.trim();

                                    let searchResults = searchedData.map((r) => {
                                        const regex = new RegExp(`^${text}`, 'i');
                                        if (regex.test(r.coc_name)) { // if there are any results
                                            return regex.exec(r.coc_name)[0]; // return them to searchResults
                                        }
                                        return '';
                                    });

                                    // filter blank entries from searchResults
                                    searchResults = searchResults.filter((r) => r !== undefined);

                                    // filter dataset with searchResults
                                    searchedData = searchResults.map((r) => tableData.filter((p) => p.coc_name.indexOf(r) !== -1));

                                    // flatten array
                                    searchedData = [].concat.apply([], searchedData);

                                    // data bind with new data
                                    rows = table.select('tbody').selectAll('tr')
                                        .data(searchedData, (d) => d.coc_number)
                                        .attr('class', 'panel_1_table');

                                    // enter the rows
                                    rows.enter()
                                        .append('tr');

                                    // enter td's in each row
                                    rowEntries = rows.selectAll('td')
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
                                    rowEntriesNoAnchor = rowEntries.filter((d) => (/https?:\/\//.test(d) === false));
                                    rowEntriesNoAnchor.text((d) => d);

                                    // draw row entries with anchor
                                    rowEntriesWithAnchor = rowEntries.filter((d) => (/https?:\/\//.test(d) === true));
                                    rowEntriesWithAnchor
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
                                    clicks.coc_number += 1;
                                    if (clicks.coc_number % 2 === 0) {
                                        rows.sort((a, b) => a.coc_number.localeCompare(b.coc_number));
                                    }
                                    else if (clicks.coc_number % 2 !== 0) {
                                        rows.sort((a, b) => b.coc_number.localeCompare(a.coc_number));
                                    }
                                }

                                if (d === 'CoC Name') {
                                    clicks.coc_name += 1;
                                    if (clicks.coc_name % 2 === 0) {
                                        rows.sort((a, b) => a.coc_name.localeCompare(b.coc_name));
                                    }
                                    else if (clicks.coc_name % 2 !== 0) {
                                        rows.sort((a, b) => b.coc_name.localeCompare(a.coc_name));
                                    }
                                }

                                if (d === 'Total Homeless') {
                                    clicks.total_homeless += 1;

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
                                    clicks.chronically_homeless += 1;
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
                                            return 0;
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
                                            return 0;
                                        });
                                    }
                                }
                                if (d === 'Sheltered Homeless') {
                                    clicks.sheltered_homeless += 1;
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
                                            return 0;
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
                                            return 0;
                                        });
                                    }
                                }
                                if (d === 'Unsheltered Homeless') {
                                    clicks.unsheltered_homeless += 1;
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
                                            return 0;
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
                                            return 0;
                                        });
                                    }
                                }
                                if (d === 'Homeless Veterans') {
                                    clicks.homeless_veterans += 1;
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
                                            return 0;
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
                                            return 0;
                                        });
                                    }
                                }
                                if (d === 'Homeless Individuals') {
                                    clicks.homeless_individuals += 1;
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
                                            return 0;
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
                                            return 0;
                                        });
                                    }
                                }
                                if (d === 'Homeless People in Families') {
                                    clicks.homeless_people_in_families += 1;
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
                                            return 0;
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
                                            return 0;
                                        });
                                    }
                                }
                                if (d === 'Homeless Unaccompanied Youth (Under 25)') {
                                    clicks.homeless_unaccompanied_youth += 1;
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
                                            return 0;
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
                                            return 0;
                                        });
                                    }
                                }
                            }); // end of click listeners

                            // Scrollable body, frozen headers
                            document.getElementById('table_container').addEventListener('scroll', () => {
                                const translate = `translate(0,${this.scrollTop}px)`;
                                this.querySelector('thead').style.transform = translate;
                            });
                        } // end of GenTable()

                        function GenPanelTwo() {
                            p21MapSvg.call(p2Tip);

                            // // Initialize Panel 2 info
                            const xyz = map2Centered;

                            BarChart(xyz);
                            StateBarChart(xyz);
                            createContact(xyz);
                            createCoCTable(xyz);
                            makeMapTitle(xyz);
                            p21ClickedP1(xyz);
                            //     }
                            // }

                            m.selectAll('p2_1_path')
                                .data(us.features)
                                .enter().append('path')
                                .attr('d', p21Path)
                                .attr('id', 'counties_mini')
                                .attr('data-coc', (d) => d.properties.coc_number)
                                .attr('data-state', (d) => d.properties.state)
                                .attr('data-name', (d) => d.properties.name)
                                .attr('d', p21Path)
                                .on('dblclick', (d) => p21Clicked(d))
                                .on('click', (d) => {
                                    window.Analytics.event({
                                        category: 'Homelessness Analysis - Panel 2 - Click Bar Chart',
                                        action: `${d.properties.coc_number} - ${d.properties.COCNAME}`
                                    });
                                    BarChart(d);
                                    StateBarChart(d);
                                    createCoCTable(d);
                                    makeMapTitle(d);
                                    createContact(d);
                                })
                                .style('fill', p2GetColor)
                                .on('mouseover', (d) => {
                                    const target = d3.select('#tipfollowscursor_2')
                                        .attr('cx', d3.event.offsetX)
                                        .attr('cy', d3.event.offsetY - 30)
                                        .node();
                                    p2Tip.show(d, target);
                                })
                                .on('mouseout', p2Tip.hide);
                        } // end of GenPanelTwo

                        // Initialize visualization
                        GenMap();
                        GenPanelTwo();

                        function mapIconFunction() {
                            d3.selectAll('#viz_container').remove();
                            d3.selectAll('#counties_mini').remove();
                            GenMap();
                            GenPanelTwo();
                        }

                        function tableIconFunction() {
                            d3.selectAll('#viz_container').remove();
                            d3.selectAll('#counties_mini').remove();
                            GenTable();
                            GenPanelTwo();
                        }

                        const mapIcon = d3.select('#homeless-action-map');
                        mapIcon.on('click', mapIconFunction);

                        const tableIcon = d3.select('#homeless-action-table');
                        tableIcon.on('click', tableIconFunction);

                        function infographicYeah() {

                            var modal = d3.select("#panel3InstructionsModal > div > div.modal-body > div.modal-body-content")
                                .append("div")
                                .attr("id", "p3Modal")

                            modal.append('img')
                                .attr('class', 'picture')
                                .attr('src', '/images/homelessness/region_guide_full.jpg')
                                .style("display", "block")
                                .style("max-width", "480px")
                                .style("max-height", "500px")
                                .style("width", "auto")
                                .style("height", "auto");

                            const w = $('#panel_3b').width();
                            const h = 340;
                            const clusterColors = ["#E8751A","#280C60","#365608", "#2F1868","#372C7A", "#4D4D8C", "#587C13", "#5E5E96", "#789E25","#E55C01"];

                            let root;

                            const treemap = d3.layout.treemap()
                                .round(false)
                                .size([w, h])
                                .sticky(true)
                                .sort((a, b) => a.value - b.value)
                                .value((d) => d.total_homeless);
                            // .value((d) => d.total_homeless);

                            const svg = d3.select("#tree").append("div")
                                .attr("class", "chart")
                                .append("svg:svg")
                                .attr("height", `${h}`)
                                .attr("viewBox", `0 0 ${w} ${h}`)
                                .append("svg:g")
                                .attr("transform", "translate(.5,.5)");

                            d3.json('/data-lab-data/homeless_cluster_v3.json', (treeData) => {
                                d3.csv('/data-lab-data/cluster_data_panel_3_v2.csv', (cluster) => {
                                    d3.csv('/data-lab-data/cluster_data_svg_v3.csv', (inforgraphicData) => {
                                        d3.csv('/data-lab-data/homelessness_alt_text_panel3_2019.csv', (altText) => {
                                            const percentFormat = d3.format(",.1%");

                                            cluster.forEach((d) => {
                                                d.rent_pct_income = +d.rent_pct_income;
                                                d.amount = +d.amount;
                                                d.density = +d.density;
                                                d.estimated_pop_2018 = +d.estimated_pop_2018;
                                                d.homeless_individuals = +d.homeless_individuals;
                                                d.homeless_people_in_families = +d.homeless_people_in_families;
                                                d.land_area = +d.land_area;
                                                d.total_homeless = +d.total_homeless;
                                                d.unsheltered_homeless = +d.unsheltered_homeless;
                                                d.weighted_estimate_median_gross_rent = +d.weighted_estimate_median_gross_rent;
                                                d.weighted_income = +d.weighted_income;
                                                d.Total_Year_Round_Beds = +d.Total_Year_Round_Beds;
                                                d.CoC_program_funding = +d.CoC_program_funding;
                                                d.Other_program_funding = +d.Other_program_funding;
                                                d.Total_funding = +d.Total_funding;
                                            });

                                            root = treeData;
                                            const nodes = treemap.nodes(root).filter((d) => !d.children);
                                            const w2 = $('#panel_3b').width();
                                            const h2 = $('#panel_3b').height();

                                            d3.select('#infographic').attr('height', h2).attr('width', w2)
                                                .append('div')
                                                .attr('id', 'picture');

                                            d3.select("#cocTab").append("div").attr("class", "cocTable");

                                            function makeInfographic(d) {
                                                d3.selectAll('.homeless-fact-cluster img').remove();
                                                const svgPath = "/images/homelessness/clusters/Cluster-" + d;
                                                const clusterAltText = altText.filter(item => item.cluster.indexOf(d) > -1);
                                                const selectedInforgraphicItem = inforgraphicData.filter(item => item.cluster_final === d);
                                                d3.select('#cluster-beds #count-img-container').append('img').attr('src', svgPath + '/Bed.svg').attr('alt', clusterAltText[0].beds);
                                                d3.select('#cluster-circles').append('img').attr('src', svgPath + '/Circles.svg').attr('alt', clusterAltText[0].funding);
                                                d3.select('#cluster-rent').append('img').attr('src', svgPath + '/Rent.svg').attr('alt', clusterAltText[0].rent);
                                                d3.selectAll('.cluster-people').append('img').attr('src', svgPath + '/People.svg').attr('alt', clusterAltText[0].homelessness);
                                                d3.selectAll('.cluster-population').append('img').attr('src', svgPath + '/Total-Population.svg').attr('alt', clusterAltText[0].total_population);
                                                d3.select('#cluster-land-area').append('img').attr('src', svgPath + '/Land-Area.svg').attr('alt', clusterAltText[0].land_area);
                                                d3.select('#cluster-income').append('img').attr('src', svgPath + '/Income.svg').attr('alt', clusterAltText[0].income);
                                                d3.select('#cluster-key').append('img').attr('src', svgPath + '/Key.svg').attr('alt', '');
                                                d3.selectAll('.cluster-density').append('img').attr('src', svgPath + '/Density.svg').attr('alt', clusterAltText[0].density);
                                                d3.select('#cluster-rent-as-income').append('img').attr('src', svgPath + '/Rent-as-Income.svg').attr('alt', clusterAltText[0].rent_as_income);
                                                d3.select('#cluster-number').text(d);d3.select('#cluster-beds-count').text(OtherformatNumber(selectedInforgraphicItem[0].total_beds));
                                                d3.selectAll('.cluster-people-count').text(OtherformatNumber(selectedInforgraphicItem[0].total_homeless));
                                                d3.select('#cluster-circles h2').style('color', clusterColors[d - 1]);
                                            }

                                            function makeCoCTableTitle(d) {
                                                const textColor = clusterColors[d.cluster_final - 1];
                                                return `<p class="cocTabTitleCluster" style=color:white;background:${textColor}>Cluster ${d.cluster_final}: </p>` +
                                                    `<p class="cocTabTitleCity">${d.coc_name}</p>`;
                                            }

                                            function makeCoCTableFund(d) {
                                                return `<table class="FundingTable"><tr><th class="fundingTitle">`
                                                    + `FEDERAL FUNDING FOR THE CONTINUUM OF CARE PROGRAM:</th></tr>` +
                                                    `<tr><td class="fundingAmount">${formatNumber(d.CoC_program_funding)}</td></tr>` +
                                                    `<tr><th class="fundingTitle">FEDERAL FUNDING FOR OTHER HOMELESSNESS PROGRAMS:</th></tr>` +
                                                    `<tr><td class="fundingAmount">${formatNumber(d.Other_program_funding)}</td></tr></table>`;
                                            }

                                            function makeCoCTableInfoCol1(d) {
                                                return '<table class="InfoTable">' +
                                                    '<tr><th class="fundingTitle">POPULATION OF HOMELESS:</th></tr>' +
                                                    `<tr><td class="infoAmount">${OtherformatNumber(d.total_homeless)}</td></tr>` +
                                                    `<tr><th class="fundingTitle">HOMELESS THAT ARE IN FAMILIES:</th></tr>` +
                                                    `<tr><td class="infoAmount">${OtherformatNumber(d.homeless_people_in_families)}</td></tr>` +
                                                    `<tr><th class="fundingTitle">HOMELESS THAT ARE INDIVIDUALS:</th></tr>` +
                                                    `<tr><td class="infoAmount">${OtherformatNumber(d.homeless_individuals)}</td></tr>` +
                                                    `<tr><th class="fundingTitle">TOTAL SHELTERED AND PERMANENT BEDS AVAILABLE:</th></tr>` +
                                                    `<tr><td class="infoAmount">${OtherformatNumber(d.Total_Year_Round_Beds)}</td></tr></table>`;
                                            }

                                            function makeCoCTableInfoCol2(d) {
                                                return '<table class="InfoTable">' +
                                                    '<tr><th class="fundingTitle">POPULATION DENSITY: PPL. PER SQ. MI.</th></tr>' +
                                                    `<tr><td class="infoAmount">${OtherformatNumber(d.density)}</td></tr>` +
                                                    `<tr><th class="fundingTitle">INCOME AVG. FOR LOWEST 20% OF POP.:</th></tr>` +
                                                    `<tr><td class="infoAmount">${formatNumber(d.weighted_income)}</td></tr>` +
                                                    `<tr><th class="fundingTitle">RENT: MEDIAN GROSS</th></tr>` +
                                                    `<tr><td class="infoAmount">${formatNumber(d.weighted_estimate_median_gross_rent)}</td></tr>` +
                                                    `<tr><th class="fundingTitle">RENT AS A PERCENT OF INCOME:</th></tr>` +
                                                    `<tr><td class="infoAmount">${percentFormat(d.rent_pct_income)}</td></tr></table>`;
                                            }

                                            function makeCoCTableInfoCol3(d) {
                                                return '<table class="InfoTable">' +
                                                    '<tr><th class="fundingTitle">LAND AREA: PER SQ. MILES</th></tr>' +
                                                    `<tr><td class="infoAmount">${OtherformatNumber(d.land_area)}</td></tr></table>`;
                                            }

                                            function makeCoCTable(d) {
                                                d3.select(".cocTab")
                                                    .insert("div", ":first-child")
                                                    .attr("class", "cocTabTitle")
                                                    .html(makeCoCTableTitle(d));
                                            }

                                            function makeFundingTable(d) {
                                                d3.select(".cocTable")
                                                    .append("div")
                                                    .attr("class", "cocTabFund")
                                                    .html(makeCoCTableFund(d));
                                            }

                                            function makeInfoTableCol1(d) {
                                                d3.select(".cocTable")
                                                    .append("div")
                                                    .attr("class", "cocTabInfo")
                                                    .html(makeCoCTableInfoCol1(d));
                                            }

                                            function makeInfoTableCol2(d) {
                                                d3.select(".cocTable")
                                                    .append("div")
                                                    .attr("class", "cocTabInfo")
                                                    .html(makeCoCTableInfoCol2(d));
                                            }

                                            function makeInfoTableCol3(d) {
                                                d3.select(".cocTable")
                                                    .append("div")
                                                    .attr("class", "cocTabInfo")
                                                    .html(makeCoCTableInfoCol3(d));
                                            }

                                            function CreateCoCTable(d) {
                                                d3.selectAll(".cocTabInfo").remove();
                                                d3.selectAll(".cocTabFund").remove();
                                                d3.selectAll(".cocTabTitle").remove();

                                                makeCoCTable(d);
                                                makeFundingTable(d);
                                                makeInfoTableCol1(d);
                                                makeInfoTableCol2(d);
                                                makeInfoTableCol3(d);
                                            }

                                            function makeCocTile(d) {
                                                return `<p class="CocTileTitle">${d.coc_name}</p>`;
                                            }

                                            function makeSelectionPanel(d) {
                                                d3.select('.tablinks').remove();

                                                d3.select('#tab').append("g")
                                                    .attr('class', 'tablinks')
                                                    .selectAll('button')
                                                    .data(d)
                                                    .enter()
                                                    .append('button')
                                                    .attr("class", "cocButton")
                                                    .attr('position', 'relative')
                                                    .on('click', (dA) => CreateCoCTable(dA))
                                                    .append('div')
                                                    .attr('class', 'header')
                                                    .attr('background-color', "#E8EAF5")
                                                    .html((dB) => makeCocTile(dB));

                                                $(".tablinks > .cocButton").first().addClass("active");

                                                $(".tablinks > .cocButton").click(function () {
                                                    $(".tablinks > .cocButton").removeClass("active");
                                                    $(this).addClass("active");
                                                });
                                            }

                                            const cell = svg.selectAll("g")
                                                .data(nodes)
                                                .enter().append("svg:g")
                                                .classed("cell", true)
                                                .attr("transform", (d) => `translate(${d.x},${d.y})`)
                                                .classed('active', (d) => d.group === '10')
                                                .on("click", (d) => {
                                                    const group = d.group;
                                                    const current = cluster.filter((dC) => (dC.cluster_final === group));
                                                    makeInfographic(d.group);
                                                    CreateCoCTable(current[0]);
                                                    makeSelectionPanel(current);
                                                });



                                            cell.append("svg:rect")
                                                .classed("rect", true)
                                                .attr("z-index", "99")
                                                .attr("width", (d) => d.dx - 1)
                                                .attr("height", (d) => d.dy - 1)
                                                .style("fill", (d) => clusterColors[d.group - 1]);

                                            cell.append("svg:text")
                                                .attr("x", (d) => d.dx / 2)
                                                .attr("y", (d) => d.dy / 2)
                                                .attr("dy", ".35em")
                                                .attr("text-anchor", "middle")
                                                .text((d) => d.name)
                                                .style('font-size', '40px')
                                                .style('font-weight', 'lighter')
                                                .style("opacity", '1');

                                            $(".cell").click(function () {
                                                $(".cell").removeClass("active");
                                                $(this).addClass("active");
                                            });

                                            function initializeCoCTable() {
                                                const initTable = cluster.filter((d) => (d.cluster_final === "10"));
                                                makeCoCTable(initTable[0]);
                                                makeFundingTable(initTable[0]);
                                                makeInfoTableCol1(initTable[0]);
                                                makeInfoTableCol2(initTable[0]);
                                                makeInfoTableCol3(initTable[0]);
                                            }

                                            initializeCoCTable();


                                            function initializeCoCSelection() {
                                                const initSelection = cluster.filter((d) => (d.cluster_final === "10"));
                                                initSelection.sort((a, b) => b.total_homeless - a.total_homeless);
                                                makeSelectionPanel(initSelection);
                                            }

                                            function initializeInfographic() {
                                                const initInfographic = cluster.filter((d) => (d.cluster_final === '10'));
                                                makeInfographic(initInfographic[0].cluster_final);
                                            }

                                            initializeCoCSelection();
                                            initializeInfographic();
                                        });
                                    });
                                });
                            });
                        }

                        infographicYeah();

                        function change() {
                            d3.selectAll('#viz_container').remove();
                            d3.selectAll('#counties_mini').remove();
                            d3.select('#imagebox').remove();
                            d3.selectAll('.panel').remove();
                            d3.selectAll('.chart').remove();
                            d3.selectAll(".cocTabInfo").remove();
                            d3.selectAll(".cocTabFund").remove();
                            d3.selectAll(".cocTabTitle").remove();

                            GenMap();
                            GenPanelTwo();
                            infographicYeah();
                        }

                        d3.selectAll("#button1").on("click", change);

                    });
                });
            });
        });
    });
});

