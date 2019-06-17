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

    console.log(detailData);

    agencyName.text(data.Recipient);

    updateTable('rhp', [{ key: 'Type of Institution', value: data.value }]);
    updateTable('rhp', [{ key: 'Total $ of Awards', value: data.value} ]);

//    updateTable('total', [{ key: 'Total $ of Awards', value: data.value }]);
    updateTable('funding', instrumentTypeMock);

    if (!detailData[data.Recipient]) {
      console.warn(`no data for ${data.Recipient}`);
      updateTable('investments', []);
      updateTable('institutions', []);
      updateTable('rhp', []);
    } else {
      updateTable('investments', detailData[data.Recipient].investments.sort(sortDetail));
      updateTable('agencies', detailData[data.Recipient].agencies.sort(sortDetail));
//      updateTable('rhp', detailData[data.Recipient].rhp.sort(sortDetail));
    }

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

  function placeTables() {
    tableControl.forEach(c => {
      tables[c] = detailContainer.append('table')
        .classed('map-detail__table', true);
    });

    tables.rhp.append('tr');

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

    // if (this == 'rhp') {
    //   //      console.log(row);
    //   row.rhpName = row.Recipient;
    //   row.rhpValue = [{INST_TYPE_1: row.INST_TYPE_1},
    // 		   {INST_Type_2: row.INST_TYPE_2},
    // 		   {Total_Federal_Investment: row.Total_Federal_Investment},
    // 		   {contracts: row.contracts},
    // 		   {grants: row.grants},
    // 		   {student_aid: row.student_aid},
    // 		   {total_awards: row.total_awards},
    // 		  ];

    //   if (row.target === 'contract') {
    //     row.target = 'Contracts';
    //   }

    //   if (row.target === 'grant') {
    //     row.target = 'Grants';
    //   }
    // }

    detailData[row.source] = detailData[row.source] || {};
    detailData[row.source][this] = detailData[row.source][this] || [];

    detailData[row.source][this].push({ key: row.target, value: Number(row.value) });
//    detailData[row.source][this].push({ key: row.rhpName, value: row.rhpValue }); // for rhp
  }
  

  function preloadData() {
    d3.csv("../../data-lab-data/rhp.csv", function (data) {
      data.forEach(indexData, 'rhp');
      done += 1;
    });

    d3.csv("../../data-lab-data/top5InvestmentsPerSchool.csv", function (data) {
      data.forEach(indexData, 'investments');

      done += 1;
    });

    d3.csv("../../data-lab-data/top5AgenciesPerSchool.csv", function (data) {
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
