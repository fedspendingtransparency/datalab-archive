import { select, selectAll } from 'd3-selection';
import { simplifyNumber } from '../../utils';

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
        percentChange = Number.parseFloat((Math.abs(difference/begin) * 100)).toFixed(1);

    let changeIcon;

    summary.append('span').classed('trend-row__summary-years', true).text('2014-2018: ')
    summary.append('span').classed('trend-row__summary-amounts', true).text(`${simplifyNumber(begin)} - ${simplifyNumber(end)} `)
    changeIcon = summary.append('i').classed('fas trend-row__summary-icon', true);
    summary.append('span').classed('trend-row__summary-change', true).text(`${percentChange}%`);

    if (difference > 0 ) {
        changeIcon.classed('fa-arrow-circle-down', true)
    } else if (difference < 0) {
        changeIcon.classed('fa-arrow-circle-up', true)
    } else {
        changeIcon.remove();
    }

    console.log(d)
}

function buildRow(d) {
    const row = d3.select(this);

    let button;

    row.append('h3')
        .classed('trend-row__heading', true)
        .text(d.name);
    
    buildSummary(row, d);

    button = row.append('button')
        .classed('trend-row__chart-toggle', true)

    button.append('span')
        .classed('trend-row__chart-toggle-text', true)
        .text('view chart ')

    button.append('i').classed('fas fa-chart-line', true);
}

export function trendMobile(data, container) {
    container.selectAll('.trend-row')
        .data(data)
        .enter()
        .append('div')
        .classed('trend-row', true)
        .each(buildRow)
}