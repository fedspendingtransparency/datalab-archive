import { select, selectAll } from 'd3-selection';
import { simplifyNumber, fractionToPercent } from '../../utils';

const d3 = { select, selectAll },
    negativeContainer = d3.select('#negative');

export function displayNegatives(data) {
    negativeContainer.selectAll('*').remove();

    negativeContainer.append('h3').text('Negative Amounts')
    
    negativeContainer.append('ul')
    .selectAll('li')
    .data(data)
    .enter()
    .append('li')
    .text(function (d) {
        return d.activity + ': ' + simplifyNumber(d.amount);
    })
}