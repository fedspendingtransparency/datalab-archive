---
---
(function () {
    const detailContainer = d3.select('#map-detail').append('section').classed('map-detail', true),
          tables = {},
          detailData = {},
          activeClass = 'map-detail--active';

    let agencyName, agencyType, dataFilesLoaded = 0;

    function sortDetail(a, b) {
	return b.value - a.value;
    }

    function getTotal(funding) {
	return funding.reduce((acc, row) => {
	    return acc + row.value;
	}, 0);
    }

    function activateDetail(data) {
	if (dataFilesLoaded != 3) { //don't do unless all 3 CSVs are completely loaded
	    return;
	}
	
	agencyName.text(data.Recipient);
	agencyType.text(data.INST_TYPE_1 + data.INST_TYPE_2);
	
	if (!detailData[data.Recipient]) {
	    console.warn(`no data for ${data.Recipient}`);
	    updateTable('rhp', []);
	    updateTable('funding', []);
	    updateTable('investments', []);
	    updateTable('agencies', []);
	} else {
	    detailContainer.classed(activeClass, true);

	    const rhpDetails = detailData[data.Recipient]['rhp'];

	    updateTable('rhp', [
		//   {key: 'Type of Institution', value: rhpDetails.INST_TYPE_1 + rhpDetails.INST_TYPE_2},
		//   {key: 'Awards Received', value: rhpDetails.total_awards},
		{key: 'Total $ Received', value: formatCurrency(rhpDetails.Total_Federal_Investment)}
	    ]);

	    const fundingRows = [];
	    if (rhpDetails.contracts) {
		fundingRows.push({key: 'Contracts', value: formatCurrency(rhpDetails.contracts)});
	    }
	    if (rhpDetails.grants) {
		fundingRows.push({key: 'Grants', value: formatCurrency(rhpDetails.grants)});
	    }
	    if (data.research_grants_received) {
		fundingRows.push({key: '&emsp;Grants (Research)', value: formatCurrency(data.research_grants_received)});
	    }
	    if (rhpDetails.student_aid) {
		fundingRows.push({key: 'Student Aid ', value: formatCurrency(rhpDetails.student_aid)});
	    }
	    updateTable('funding', fundingRows);

	    if (detailData[data.Recipient].investments) {
		updateTable('investments', detailData[data.Recipient].investments.sort(sortDetail));
	    } else {
		updateTable('investments', '');
	    }
	    
	    if (detailData[data.Recipient].agencies) {
		updateTable('agencies', detailData[data.Recipient].agencies.sort(sortDetail));
	    } else {
		updateTable('agencies', '');
	    }
	}
    }

    function placeCloseButton() {
	detailContainer.append('button')
	    .classed('map-detail__close', true)
	    .on('click', () => {
		detailContainer.classed(activeClass, false);
	    })
	    .append('span')
	    .html('&times;')
	;
    }

    function createTableRow(d) {
	const row = d3.select(this);
	row.append('td').html(d.key);
	row.append('td').text(d.value);
    }

    function updateTable(id, rows) {
	tables[id].selectAll('tr.map-detail__data-row').remove();
	tables[id].selectAll('tr.map-detail__data-row')
	    .data(rows)
	    .enter()
	    .append('tr')
	    .classed('map-detail__data-row', true)
	    .each(createTableRow)
	;
    }

    function placeTables() {
	const tableControl = ['rhp', 'funding', 'investments', 'agencies']; // for controlling the order of positioning tables

	tableControl.forEach(c => {
	    tables[c] = detailContainer.append('table').classed('map-detail__table', true);
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
	const institution = row.Recipient || row.source;
	detailData[institution] = detailData[institution] || {};
	detailData[institution][this] = detailData[institution][this] || [];
	
	if (this === 'rhp') {
	    detailData[institution][this] = {
		'INST_TYPE_1': row.INST_TYPE_1,
		'INST_TYPE_2': row.INST_TYPE_2,
		'Total_Federal_Investment': row.Total_Federal_Investment,
		'contracts': row.contracts,
		'grants': row.grants,
		'student_aid': row.student_aid,
		'total_awards': row.total_awards
	    };

	} else {
	    detailData[row.source][this].push({ key: row.target, value: formatCurrency(row.value) });
	}
    }
    
    function preloadData() {
	// this used to be "rhp.csv in data-lab-data/CU/"
	d3.csv("data-lab-data/CU/updated_CU_data/instutions_table_view_data_v3.csv", function (data) {
	    data.forEach(indexData, 'rhp');
	    dataFilesLoaded += 1;
	});

	d3.csv("data-lab-data/CU/updated_CU_data/top5InvestmentsPerSchool_v2.csv", function (data) {
	    // investments per school
	    data.forEach(indexData, 'investments');
	    dataFilesLoaded += 1;
	});

	d3.csv("data-lab-data/CU/updated_CU_data/top5AgenciesPerSchool_v2.csv", function (data) {
	    // top 5 agencies per school
	    data.forEach(indexData, 'agencies');
	    dataFilesLoaded += 1;
	});
    }

    function init() {
	preloadData();
	placeCloseButton();

	detailContainer.append('span').classed('map-detail__agency-label', true).text('Institution');
	agencyName = detailContainer.append('span').classed('map-detail__agency-name', true);
	agencyType = detailContainer.append('span').classed('map-detail__agency-label', true);

	placeTables();

	instmap.activateDetail = activateDetail;
    }

    init();
})();
