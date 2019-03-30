import { select, selectAll } from 'd3-selection';
import { simplifyNumber } from '../../utils';
import { initScale, drawChart } from './chart';

const d3 = { select, selectAll };

function getValueByYear(values, year) {
    let response;

    values.every(r => {
        if (r.year === year) {
            response = r.amount;
            return false;
        }

        return true;
    })

    return response;
}

function buildSummary(row, d) {
    const summary = row.append('div').classed('trend-row__summary', true),
        begin = getValueByYear(d.values, 2014),
        end = getValueByYear(d.values, 2018),
        difference = begin - end,
        percentChange = Number.parseFloat((Math.abs(difference / begin) * 100)).toFixed(1);

    let changeIcon;

    summary.append('span').classed('trend-row__summary-years trend-mobile__year', true).text('2014-2018: ')
    summary.append('span').classed('trend-row__summary-amounts trend-mobile__amount', true).text(`${simplifyNumber(begin)} - ${simplifyNumber(end)} `)
    changeIcon = summary.append('i').classed('fas trend-row__summary-icon', true);
    summary.append('span').classed('trend-row__summary-change', true).text(`${percentChange}%`);

    if (difference > 0) {
        changeIcon.classed('fa-arrow-circle-down', true)
    } else if (difference < 0) {
        changeIcon.classed('fa-arrow-circle-up', true)
    } else {
        changeIcon.remove();
    }
}

function placeDataDetail(d) {
    const row = d3.select(this);

    row.append('span')
        .classed('trend-mobile__year', true)
        .text(d.year + ': ');

    row.append('span')
        .classed('trend-mobile__amount', true)
        .text(simplifyNumber(d.amount))
}

function insertChart(row, d, config) {
    const chartRow = row.append('div').classed('chart-row', true),
        dataBox = chartRow.append('div').classed('chart-row__data', true),
        chartBox = chartRow.append('div').classed('chart-row__chart', true);

    dataBox.selectAll('p')
        .data(d)
        .enter()
        .append('p')
        .classed('chart-row__data-line', true)
        .each(placeDataDetail);

    drawChart(chartBox, d, config);
}

function buildRow(d, dom, config) {
    const row = d3.select(dom);

    let button;

    row.append('h3')
        .classed('trend-row__heading', true)
        .text(d.name);

    buildSummary(row, d);
    insertChart(row, d.values, config);

    button = row.append('button')
        .classed('trend-row__chart-toggle', true)

    button.append('span')
        .classed('trend-row__chart-toggle-text', true)
        .text('view chart ')

    button.append('i').classed('fas fa-chart-line', true);
}

export function trendMobile(data, container, config) {
    initScale(data, container);

    container.selectAll('.trend-row')
        .data(data)
        .enter()
        .append('div')
        .classed('trend-row', true)
        .each(function(d) {
            buildRow(d, this, config);
        })
}