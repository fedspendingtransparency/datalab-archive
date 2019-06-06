(function () {
    const detailContainer = d3.select('#categories-detail').attr('style', 'position:relative').append('section').classed('bubble-detail', true),
        tables = {},
        detailData = {},
        types = [],
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
        if (data.depth !== 2) { return } //only activate for level 2
        if (done != 2) { return } //don't allow this feature unless both CSVs are in memory

        const lookup = data.parent.name.toLowerCase();
        let radioValue;

        d3.selectAll('#categories input').each(function () {
            const radio = d3.select(this);

            if (radio.property('checked')) {
                radioValue = radio.attr('value');
            }
        });

        detailContainer.classed(activeClass, true);

        categoryName.text(data.parent.name)
        cfda.text(data.name)

        updateTable('total', [{ key: 'Total $ of Funding', value: data.value }]);

        if (!detailData[lookup][radioValue]) {
            console.warn(`no data for ${data.name} (${radioValue})`);
            updateTable('agencies', []);
            updateTable('institutions', []);
        } else {
            updateTable('agencies', detailData[lookup][radioValue].agencies.sort(sortDetail));
            updateTable('institutions', detailData[lookup][radioValue].institutions.sort(sortDetail));
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

    function indexData(row) {
        const source = row.source.toLowerCase();

        if (types.indexOf(row.type) === -1) { types.push(row.type) }

        detailData[source] = detailData[source] || {};
        detailData[source][row.type] = detailData[source][row.type] || {};
        detailData[source][row.type][this] = detailData[source][row.type][this] || [];

        detailData[source][row.type][this].push({ key: row.target, value: Number(row.value) });
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