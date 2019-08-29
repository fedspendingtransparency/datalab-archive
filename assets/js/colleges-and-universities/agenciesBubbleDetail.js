---
---

(function () {
    const detailContainer = d3.select('#bubble-detail').append('section').classed('bubble-detail', true),
          tables = {},
          detailData = {},
          tableControl = [
              'total',
              'funding',
              'investments',
              'institutions'
          ], // for controlling the order of positioning tables
          activeClass = 'bubble-detail--active';

    let agencyName, subAgencyName, done = 0;

    function isMobile() {
        const threshold = 949;

        return (window.innerWidth <= threshold);
    }

    function sortDetail(a, b) {
        return b.value - a.value;
    }

    function fundingSort(a, b) {
        if (a.key === 'Contracts') {
            return -1;
        }

        return 0;
    }

    function getTotal(funding) {
        return formatCurrency(funding);
    }

    function activateDetail(data) {
        if (done != 3) { return } //don't allow this feature unless all CSVs are in memory

        detailContainer.classed(activeClass, true);

        agencyName.text(data.parent.name);
        subAgencyName.text(data.name);

        if (!detailData[data.name]) {
            console.warn(`no data for ${data.name}`);
            updateTable('total', [{ key: 'Total $ of Awards', value: '-' }]);
            updateTable('funding', []);
            updateTable('investments', []);
            updateTable('institutions', []);
        } else {
            updateTable('total', [{ key: 'Total $ of Awards', value: data.size }]);
            updateTable('funding', detailData[data.name].funding.sort(fundingSort));
            updateTable('investments', detailData[data.name].investments.sort(sortDetail));
            updateTable('institutions', detailData[data.name].institutions.sort(sortDetail));
        }

    }

    function placeCloseButton() {
        detailContainer.append('button')
            .classed('bubble-detail__close', true)
            .on('click', () => {
                detailContainer.classed(activeClass, false)
            })
            .append('span')
            .html('&times;')
        ;
    }

    function createTableRow(d) {
        const row = d3.select(this);

        row.append('td').text(d.key)
        row.append('td').text(formatCurrency(d.value))
    }

    function updateTable(id, rows) {
        tables[id].selectAll('tr.bubble-detail__data-row').remove();

        tables[id].selectAll('tr.bubble-detail__data-row')
            .data(rows)
            .enter()
            .append('tr')
            .classed('bubble-detail__data-row', true)
            .each(createTableRow)
    }

    function placeTables() {
        tableControl.forEach(c => {
            tables[c] = detailContainer.append('table')
                .classed('bubble-detail__table', true)
        })

        tables.funding.append('tr');
        tables.funding.select('tr').append('th').text('Funding Instrument Type').attr('colspan', 2)

        tables.investments.append('tr');
        tables.investments.select('tr').append('th').text('Investment Categories (Top 5)');
        tables.investments.select('tr').append('th').text('Total Investment');

        tables.institutions.append('tr');
        tables.institutions.select('tr').append('th').text('Institutions (Top 5)');
        tables.institutions.select('tr').append('th').text('Total Investment');
    }


    function indexData(row) {
        if (this == 'funding') {
            // for funding data
            row.source = row.subagency;
            row.target = row.type;
            row.value = row.obligation;

            if (row.target === 'contract') {
                row.target = 'Contracts';
            }

            if (row.target === 'grant') {
                row.target = 'Grants';
            }
        }
        
        detailData[row.source] = detailData[row.source] || {};
        detailData[row.source][this] = detailData[row.source][this] || [];

        detailData[row.source][this].push({ key: row.target, value: Number(row.value) });
    }

    function preloadData() {
	// top 5 inst per agency
        d3.csv("/data-lab-data/CU/updated_CU_data/top5InstitutionsPerAgency_v2.csv", function (data) {
            data.forEach(indexData, 'institutions');
            done += 1;
        });

        d3.csv("/data-lab-data/CU/updated_CU_data/top5InvestmentsPerAgency_v2.csv", function (data) {
	    // top 5 investments per agency..
            data.forEach(indexData, 'investments');
            done += 1;
        });

        d3.csv("/data-lab-data/CU/updated_CU_data/Agencies_RHP_summary_v2.csv", function (data) {
	    // agencies rhp summary!
            data.forEach(indexData, 'funding');
            done += 1;
        });
    }

    function disableMobile() {
        return;
    }

    function init() {
        if (isMobile()) {
            // disable for mobile
            bubble.activateDetail = disableMobile;
            return;
        };
        
        preloadData();
        placeCloseButton();

        detailContainer.append('span').classed('bubble-detail__agency-label', true).text('Agency');
        agencyName = detailContainer.append('span').classed('bubble-detail__agency-name', true);

        detailContainer.append('span').classed('bubble-detail__agency-label', true).text('Sub-Agency');
        subAgencyName = detailContainer.append('span').classed('bubble-detail__agency-name', true);

        placeTables();

        bubble.activateDetail = activateDetail;
    }

    init();
})();
