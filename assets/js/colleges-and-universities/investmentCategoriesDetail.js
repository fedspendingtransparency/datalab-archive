(function () {
    const detailContainer = d3.select('#categories-detail').attr('style','position:relative').append('section').classed('bubble-detail', true),
        tables = {},
        detailData = {},
        tableControl = [
            'total',
            'funding',
            'investments',
            'institutions'
        ], // for controlling the order of positioning tables
        activeClass = 'bubble-detail--active';

    const instrumentTypeMock = [
        { key: 'Contracts', value: 1000000 },
        { key: 'Grants', value: 1000000 }
    ]

    let agencyName, subAgencyName, done = 0;

    function formatCurrency(n) {
        return '$' + d3.format(",")(n);
    }

    function sortDetail(a, b) {
        return b.value - a.value;
    }

    function activateDetail(data) {
        console.log('activate', data);
        
        if (done != 2) { return } //don't allow this feature unless both CSVs are in memory
        
        detailContainer.classed(activeClass, true);
        
        return;

        agencyName.text(data.parent.name)
        subAgencyName.text(data.name)
        
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
            .classed('bubble-detail__close', true)
            .html('&times;')
            .on('click', () => {
                detailContainer.classed(activeClass, false)
            })
    }

    function createTableRow(d) {
        const row = d3.select(this);

        row.append('td').text(d.key)
        row.append('td').text(formatCurrency(d.value))
    }

    function updateTable(id, rows) {
        tables[id].selectAll('tr.bubble-detail__data-row').remove();

        tables[id].selectAll('tr')
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

    function indexData(row, a, b, c) {
        detailData[row.source] = detailData[row.source] || {};
        detailData[row.source][this] = detailData[row.source][this] || [];

        detailData[row.source][this].push({ key: row.target, value: Number(row.value) });
    }

    function preloadData() {
        d3.csv("/data-lab-data/CU/top5InstitutionsPerAgency.csv", function (data) {
            data.forEach(indexData, 'institutions');

            done += 1;
        });

        d3.csv("/data-lab-data/CU/top5InvestmentsPerAgency.csv", function (data) {
            data.forEach(indexData, 'investments');

            done += 1;
        })
    }

    function init() {
        preloadData();
        placeCloseButton();

        detailContainer.append('span').classed('bubble-detail__agency-label', true).text('Agency');
        agencyName = detailContainer.append('span').classed('bubble-detail__agency-name', true);

        detailContainer.append('span').classed('bubble-detail__agency-label', true).text('Sub-Agency');
        subAgencyName = detailContainer.append('span').classed('bubble-detail__agency-name', true);

        placeTables();

        sunburst.activateDetail = activateDetail;
    }

    init()
})()