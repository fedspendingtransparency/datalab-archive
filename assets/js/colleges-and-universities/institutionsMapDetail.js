---
---

(function () {
  const detailContainer = d3.select('#map-detail').append('section').classed('map-detail', true),
        tables = {},
        detailData = {},
        tableControl = [
	  'rhp',
          'funding',
          'investments',
          'agencies'
        ], // for controlling the order of positioning tables
        activeClass = 'map-detail--active';

  const instrumentTypeMock = [
    { key: 'Contracts', value: 1000000 },
    { key: 'Grants', value: 1000000 }
  ];

  let agencyName, done = 0;

  function sortDetail(a, b) {
    return b.value - a.value;
  }

  function getTotal(funding) {
    return funding.reduce((acc, row) => {
      return acc + row.value;
    }, 0);
  }

  function activateDetail(data) {
    if (done != 3) { return; } //don't allow this feature unless all 3 CSVs are in memory
    
    detailContainer.classed(activeClass, true);

    agencyName.text(data.Recipient);

    doRHP(data.Recipient); // filter by school

    updateTable('funding', instrumentTypeMock);

    if (!detailData[data.Recipient]) {
      console.warn(`no data for ${data.Recipient}`);
      updateTable('investments', []);
      updateTable('institutions', []);
      updateTable('rhp', []);
    } else {
      updateTable('investments', detailData[data.Recipient].investments.sort(sortDetail));
      updateTable('agencies', detailData[data.Recipient].agencies.sort(sortDetail));
      doRHP(data.Recipient); // filter by school
//      updateTable('rhp', detailData[data.Recipient].rhp.sort(sortDetail));
   }

  }

  function doRHP(schoolName) {
    d3.csv("../../data-lab-data/CU/rhp.csv", function (data) {
      let matched = data.filter(function(ele){
	return schoolName === ele.Recipient;
      });

      tables['rhp'].selectAll('tr.map-detail__data-row').remove();
      tables['rhp'].selectAll('tr.map-detail__data-row')
	.data(matched)
	.enter()
	.append('tr')
	.classed('map-detail__data-row', true)
	.each(createRHPRow);

    });
  };

  function createRHPRow(d) {

    const row = d3.select(this);
    console.log(row);

    row.append('td').text('Type of Institution');
    row.append('td').text(d.INST_TYPE_1 + "/" + d.INST_TYPE_2);

    d3.selectAll('tr.map-detail__data-row').append('tr')
      .classed('map-detail__data-row', true);

    row.append('td').text('Awards Received');
    row.append('td').text(d.awards_received);

    d3.selectAll('tr.map-detail__data-row').append('tr')
      .classed('map-detail__data-row', true);

    row.append('td').text('Total $ Received');
    row.append('td').text(formatCurrency(d.Total_Federal_Investment));

  }

  function placeCloseButton() {
    detailContainer.append('button')
      .classed('map-detail__close', true)
      .on('click', () => {
        detailContainer.classed(activeClass, false);
      })
      .append('span')
      .html('&times;');
  }

  // function createRHPRow(d) {
  //   const row = d3.select(this);
  //   row.append('td').text('Type of Institution');
  //   row.append('td').text(d.INST_TYPE_1 + "/" + d.INST_TYPE_2);

  //   row.append('td').text('Awards Received');
  //   row.append('td').text(d.total_awards);

  //   row.append('td').text('Total $ Received');
  //   row.append('td').text(d.Total_Federal_Investment);
  // }

  // function updateRHPTable(id, rows) {
  //   console.log(rows);
  //   tables[id].selectAll('tr.map-detail__data-row').remove();

  //   tables[id].selectAll('tr.map-detail__data-row')
  //     .data(rows)
  //     .enter()
  //     .append('tr')
  //     .classed('map-detail__data-row', true)
  //     .each(createRHPRow);
  // }

  function createTableRow(d) {
    const row = d3.select(this);
    row.append('td').text(d.key);
    row.append('td').text(formatCurrency(d.value));
  }

  function updateTable(id, rows) {
    tables[id].selectAll('tr.map-detail__data-row').remove();

    tables[id].selectAll('tr.map-detail__data-row')
      .data(rows)
      .enter()
      .append('tr')
      .classed('map-detail__data-row', true)
      .each(createTableRow);
  }

  // function rhpTable(rows) {
  //   tables['rhp'].selectAll('tr.map-detail__data-row').remove();

  //   tables['rhp'].selectAll('tr.map-detail__data-row')
  //     .data(rows)
  //     .enter()
  //     .append('tr')
  //     .classed('map-detail__data-row', true)
  //     .each(createTableRow);

  // }

  function placeTables() {
    tableControl.forEach(c => {
      tables[c] = detailContainer.append('table')
        .classed('map-detail__table', true);
    });

//    tables.rhp.append('tr');

    tables.funding.append('tr');
    tables.funding.select('tr').append('th').text('Funding Instrument Type').attr('colspan', 2);

    tables.agencies.append('tr');
    tables.agencies.select('tr').append('th').text('Funding Agencies (Top 5)');
    tables.agencies.select('tr').append('th').text('Total Investment');

    tables.investments.append('tr');
    tables.investments.select('tr').append('th').text('Investment Categories (Top 5)');
    tables.investments.select('tr').append('th').text('Total Investment');
  }


  function indexData(row) {

     if (this == 'rhp') {

       row.source = row.Recipient;
       row.target = row.Recipient;
//       row.target = 
//       console.log(row);
       row.value = [{INST_TYPE_1: row.INST_TYPE_1},
      		       {INST_Type_2: row.INST_TYPE_2},
      		       {Total_Federal_Investment: formatCurrency(row.Total_Federal_Investment)},
      		       {contracts: Number(row.contracts)},
      		       {grants: Number(row.grants)},
      		       {student_aid: Number(row.student_aid)},
      		       {total_awards: Number(row.total_awards)},
      		      ];
    }

    detailData[row.source] = detailData[row.source] || {};
    detailData[row.source][this] = detailData[row.source][this] || [];

    detailData[row.source][this].push({ key: row.target, value: Number(row.value) });
//    detailData[row.source]['rhp'].push({ key: row.Recipient, value: row.value }); // for rhp
  }
  

  function preloadData() {
    d3.csv("../../data-lab-data/CU/rhp.csv", function (data) {
      data.forEach(indexData, 'rhp');
      done += 1;
    });

    d3.csv("../../data-lab-data/CU/top5InvestmentsPerSchool_v3.csv", function (data) {
      data.forEach(indexData, 'investments');

      done += 1;
    });

    d3.csv("../../data-lab-data/CU/top5AgenciesPerSchool_v3.csv", function (data) {
      data.forEach(indexData, 'agencies');

      done += 1;
    });
  }

  function init() {
    preloadData();
    placeCloseButton();

    detailContainer.append('span').classed('map-detail__agency-label', true).text('Institution');
    agencyName = detailContainer.append('span').classed('map-detail__agency-name', true);

    placeTables();

    instmap.activateDetail = activateDetail;
  }

  init();
})();
