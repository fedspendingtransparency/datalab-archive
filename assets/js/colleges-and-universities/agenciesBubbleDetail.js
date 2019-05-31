(function () {
    const detailContainer = d3.select('#bubble-detail').append('section').classed('bubble-detail', true),
        tables = {},
        tableControl = [
            'total',
            'funding',
            'investments',
            'institutions'
        ], // for controlling the order of positioning tables
        activeClass = 'bubble-detail--active';

    const investmentMock = [
        { key: 'Category 1', value: 1000000 },
        { key: 'Category 2', value: 1000000 },
        { key: 'Category 3', value: 1000000 },
        { key: 'Category 4', value: 1000000 },
        { key: 'Category 5', value: 1000000 }
    ],
        institutionMock = [
            { key: 'Institution 1', value: 1000000 },
            { key: 'Institution 2', value: 1000000 },
            { key: 'Institution 3', value: 1000000 },
            { key: 'Institution 4', value: 1000000 },
            { key: 'Institution 5', value: 1000000 }
        ],
        instrumentTypeMock = [
            { key: 'Contracts', value: 1000000 },
            { key: 'Grants', value: 1000000 }
        ]

    let agencyName, subAgencyName, totalNumberOfAwards;

    function formatCurrency(n) {
        return '$' + d3.format(",")(n);
    }

    function activateDetail(data) {
        detailContainer.classed(activeClass, true);

        agencyName.text(data.parent.name)
        subAgencyName.text(data.name)

        updateTable('total', [{key: 'Total $ of Awards', value: data.value}]);
        updateTable('funding', instrumentTypeMock);
        updateTable('investments', investmentMock);
        updateTable('institutions', institutionMock);
    }

    function placeCloseButton() {
        detailContainer.append('button')
            .classed('bubble-detail__close', true)
            .text('close')
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
        tables.funding.select('tr').append('th').text('Funding Instrument Type');

        tables.investments.append('tr');
        tables.investments.select('tr').append('th').text('Investment Categories (Top 5)');
        tables.investments.select('tr').append('th').text('Total Investment');

        tables.institutions.append('tr');
        tables.institutions.select('tr').append('th').text('Institutions (Top 5)');
        tables.institutions.select('tr').append('th').text('Total Investment');
    }

    function init() {
        placeCloseButton();

        detailContainer.append('span').classed('bubble-detail__agency-label', true).text('Agency');
        agencyName = detailContainer.append('span').classed('bubble-detail__agency-name', true);

        detailContainer.append('span').classed('bubble-detail__agency-label', true).text('Sub-Agency');
        subAgencyName = detailContainer.append('span').classed('bubble-detail__agency-name', true);

        placeTables();

        bubble.activateDetail = activateDetail
    }

    init()
})()