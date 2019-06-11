---
---

(function () {
  const detailContainer = d3.select('#map-detail').append('section').classed('map-detail', true),
        tables = {},
        detailData = {},
        tableControl = [
          'total',
          'funding',
          'investments',
          'institutions'
        ], // for controlling the order of positioning tables
        activeClass = 'map-detail--active';

  const instrumentTypeMock = [
    { key: 'Contracts', value: 1000000 },
    { key: 'Grants', value: 1000000 }
  ];

  let agencyName, subAgencyName, done = 0;

  function sortDetail(a, b) {
    return b.value - a.value;
  }

  function activateDetail(data) {
    if (done != 2) { return; } //don't allow this feature unless both CSVs are in memory

    console.log(data);

    detailContainer.classed(activeClass, true);

    agencyName.text(data.Recipient);
    subAgencyName.text(data.name);
    
    updateTable('total', [{ key: 'Total $ of Awards', value: data.value }]);
    updateTable('funding', instrumentTypeMock);

    if (!detailData[data.name]) {
      console.warn(`no data for ${data.name}`);
      updateTable('investments', []);
      updateTable('institutions', []);
    } else {
      updateTable('investments', detailData[data.name].investments.sort(sortDetail));
      updateTable('institutions', detailData[data.name].institutions.sort(sortDetail));
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

    tables[id].selectAll('tr')
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

    tables.funding.append('tr');
    tables.funding.select('tr').append('th').text('Funding Instrument Type').attr('colspan', 2);

    tables.investments.append('tr');
    tables.investments.select('tr').append('th').text('Investment Categories (Top 5)');
    tables.investments.select('tr').append('th').text('Total Investment');

    tables.institutions.append('tr');
    tables.institutions.select('tr').append('th').text('Institutions (Top 5)');
    tables.institutions.select('tr').append('th').text('Total Investment');
  }


  function indexData(row) {
    detailData[row.source] = detailData[row.source] || {};
    detailData[row.source][this] = detailData[row.source][this] || [];

    detailData[row.source][this].push({ key: row.target, value: Number(row.value) });
  }

  function preloadData() {
    d3.csv("../../data-lab-data/top5InvestmentsPerSchool.csv", function (data) {
      data.forEach(indexData, 'investments');

      done += 1;
    });

    d3.csv("../../data-lab-data/top5AgenciesPerSchool.csv", function (data) {
      data.forEach(indexData, 'investments');

      done += 1;
    });
  }

  function init() {
    preloadData();
    placeCloseButton();

    detailContainer.append('span').classed('map-detail__agency-label', true).text('Institution');
    agencyName = detailContainer.append('span').classed('map-detail__agency-name', true);

    detailContainer.append('span').classed('map-detail__agency-label', true).text('Sub-Agency');
    subAgencyName = detailContainer.append('span').classed('map-detail__agency-name', true);

    placeTables();

    instmap.activateDetail = activateDetail;
  }

  init();
})();
