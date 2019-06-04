(function () {
    const detailContainer = d3.select('#categories-detail').attr('style','position:relative').append('section').classed('bubble-detail', true),
        tables = {},
        detailData = {},
        tableControl = [
            'total',
            'agencies',
            'institutions',
        ], // for controlling the order of positioning tables
        activeClass = 'bubble-detail--active';

    const instrumentTypeMock = [
        { key: 'Contracts', value: 1000000 },
        { key: 'Grants', value: 1000000 }
    ]

    let categoryName, cfda, done = 0;

    function formatCurrency(n) {
        return '$' + d3.format(",")(n);
    }

    function sortDetail(a, b) {
        return b.value - a.value;
    }

    function activateDetail(data) {
        const lookup = data.parent.name.toLowerCase();

        if (data.depth !== 2) { return } //only activate for level 2
        
        if (done != 2) { return } //don't allow this feature unless both CSVs are in memory
        
        detailContainer.classed(activeClass, true);
        
        categoryName.text(data.parent.name)
        cfda.text(data.name)
        
        updateTable('total', [{ key: 'Total $ of Funding', value: data.value }]);
        
        if (!detailData[lookup]) {
            console.warn(`no data for ${data.name}`);
            updateTable('agencies', []);
            updateTable('institutions', []);
        } else {
            updateTable('agencies', detailData[lookup].agencies.sort(sortDetail));
            updateTable('institutions', detailData[lookup].institutions.sort(sortDetail));
        }
        
        return;
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

        tables.agencies.append('tr');
        tables.agencies.select('tr').append('th').text('Funding Agencies (Top 5)');
        tables.agencies.select('tr').append('th').text('Total Investment');

        tables.institutions.append('tr');
        tables.institutions.select('tr').append('th').text('Institution (Top 5)');
        tables.institutions.select('tr').append('th').text('Total Investment');
    }

    function indexData(row, a, b, c) {
        const source = row.source.toLowerCase();
        
        detailData[source] = detailData[source] || {};
        detailData[source][this] = detailData[source][this] || [];

        detailData[source][this].push({ key: row.target, value: Number(row.value) });
    }

    function preloadData() {
        d3.csv("/data-lab-data/CU/top5InstitutionsPerInvestmentType.csv", function (data) {
            data.forEach(indexData, 'institutions');

            done += 1;
        });

        d3.csv("/data-lab-data/CU/top5AgenciesPerInvestmentType.csv", function (data) {
            data.forEach(indexData, 'agencies');

            done += 1;
        })
    }

    function init() {
        preloadData();
        placeCloseButton();

        detailContainer.append('span').classed('bubble-detail__agency-label', true).text('Category');
        categoryName = detailContainer.append('span').classed('bubble-detail__agency-name', true);

        detailContainer.append('span').classed('bubble-detail__agency-label', true).text('CFDA');
        cfda = detailContainer.append('span').classed('bubble-detail__agency-name', true);

        placeTables();

        sunburst.activateDetail = activateDetail;
    }

    init()
})()