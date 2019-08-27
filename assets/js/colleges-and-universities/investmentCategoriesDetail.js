---
---

(function () {
    const detailContainer = d3.select('#categories-detail')
	  .attr('style', 'position:relative')
	  .append('section')
	  .classed('bubble-detail', true)
    ;
    
    const tables = {},
	  detailData = {},
	  types = [],
	  tableControl = [
              'total',
              'agencies',
              'institutions',
	  ], // for controlling the order of positioning tables
	  activeClass = 'bubble-detail--active';

    let categoryName, cfda, dataFilesLoaded = 0;

    function sortDetail(a, b) {
	return b.value - a.value;
    }

    function activateDetail(data) {
	if (dataFilesLoaded != 2) return;
	if (data.depth !== 2) {
            detailContainer.classed(activeClass, false);
	} else {

            const lookup = data.name.toLowerCase();
            let radioValue;

            d3.selectAll('#categories input').each(function () {
		const radio = d3.select(this);

		if (radio.property('checked')) {
		    radioValue = radio.attr('value');
		}
            });

            detailContainer.classed(activeClass, true);

            categoryName.text(data.parent.name);
            cfda.text(data.name);

            updateTable('total', [{ key: 'Total $ of Funding', value: data.value }]);

            radioValue = radioValue.replace(/s$/, '');

            if (radioValue == 'grant') {
		if (!detailData[lookup][radioValue]) {
		    if (radioValue == 'grant') {
			radioValue = 'research';
		    }
		    updateTable('agencies', detailData[lookup][radioValue].agencies.sort(sortDetail));
		    updateTable('institutions', detailData[lookup][radioValue].institutions.sort(sortDetail));
		} else {
		    updateTable('agencies', detailData[lookup][radioValue].agencies.sort(sortDetail));
		    updateTable('institutions', detailData[lookup][radioValue].institutions.sort(sortDetail));
		}
            } else {
		if (!detailData[lookup][radioValue]) {
		    console.warn(`no data for ${data.name} (${radioValue})`);
		    updateTable('agencies', []);
		    updateTable('institutions', []);
		} else {
		    updateTable('agencies', detailData[lookup][radioValue].agencies.sort(sortDetail));
		    updateTable('institutions', detailData[lookup][radioValue].institutions.sort(sortDetail));
		}
            }
	}
    }

    function placeCloseButton() {
	detailContainer.append('button')
            .classed('bubble-detail__close', true)
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
	tables[id].selectAll('tr.bubble-detail__data-row').remove();

	tables[id].selectAll('tr.bubble-detail__data-row')
            .data(rows)
            .enter()
            .append('tr')
            .classed('bubble-detail__data-row', true)
            .each(createTableRow);
    }

    function placeTables() {
	tableControl.forEach(c => {
            tables[c] = detailContainer.append('table')
		.classed('bubble-detail__table', true);
	});

	tables.agencies.append('tr');
	tables.agencies.select('tr').append('th').text('Funding Agencies (Top 5)');
	tables.agencies.select('tr').append('th').text('Total Investment');

	tables.institutions.append('tr');
	tables.institutions.select('tr').append('th').text('Institution (Top 5)');
	tables.institutions.select('tr').append('th').text('Total Investment');
    }

    function indexData(row) {
	const source = row.source.toLowerCase();

	if (types.indexOf(row.type) === -1) { types.push(row.type); }

	detailData[source] = detailData[source] || {};
	detailData[source][row.type] = detailData[source][row.type] || {};
	detailData[source][row.type][this] = detailData[source][row.type][this] || [];

	detailData[source][row.type][this].push({ key: row.target, value: Number(row.value) });
    }

    function preloadData() {
	// top 5 institutions per investment type
	d3.csv("/data-lab-data/CU/updated_CU_data/top5InstitutionsPerInvestmentType_v2.csv", function (data) {
            data.forEach(indexData, 'institutions');

            dataFilesLoaded += 1;
	});

	d3.csv("/data-lab-data/CU/updated_CU_data/top5AgenciesPerInvestmentType_v2.csv", function (data) {
	    // top 5 agencies per investment type
            data.forEach(indexData, 'agencies');

            dataFilesLoaded += 1;
	});
    }

    function isMobile() {
	const threshold = 450;

	return (window.innerWidth <= threshold);
    }

    function disableMobile() {
	return;
    }

    function init() {
	if (isMobile()) {
            // disable for mobile
            sunburst.activateDetail = disableMobile;
            return;
	};

	preloadData();
	placeCloseButton();

	detailContainer.append('span').classed('bubble-detail__agency-label', true).text('Category');
	categoryName = detailContainer.append('span').classed('bubble-detail__agency-name', true);

	detailContainer.append('span').classed('bubble-detail__agency-label', true).text('Sub-Category');
	cfda = detailContainer.append('span').classed('bubble-detail__agency-name', true);

	placeTables();

	sunburst.activateDetail = activateDetail;
    }

    init();
})();
