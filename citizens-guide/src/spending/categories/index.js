import { select, selectAll } from 'd3-selection';
import { indexByYear } from './data';
import { simplifyNumber, fractionToPercent } from '../../utils';

const d3 = { select, selectAll },
    data = indexByYear(2017),
    budgetFunction = d3.select('main').append('div'),
    agency = d3.select('main').append('div');

budgetFunction.append('h3').text('Budget Function');
agency.append('h3').text('Agency');

budgetFunction.append('ul')
    .selectAll('li')
    .data(Object.keys(data.function).map(k => data.function[k]).sort((a, b) => b.amount - a.amount))
    .enter()
    .append('li')
    .text(function (d) {
        return d.name + ' - ' + simplifyNumber(d.amount) + ' (' + fractionToPercent(d.percent) + ')';
    })

agency.append('ul')
    .selectAll('li')
    .data(Object.keys(data.agency).map(k => data.agency[k]).sort((a, b) => b.amount - a.amount))
    .enter()
    .append('li')
    .text(function (d) {
        return d.name + ' - ' + simplifyNumber(d.amount) + ' (' + fractionToPercent(d.percent) + ')';
    })



