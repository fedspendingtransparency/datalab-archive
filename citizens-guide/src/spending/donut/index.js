import { select, selectAll } from 'd3-selection';
import './categories.scss';
import { byYear } from '../data-spending';
import { drawChart } from './chart';
import { establishContainer } from '../../utils';

const d3 = { select, selectAll },
    data = byYear(2017);

let type;

function initChart(_type, filteredData) {
    const chartData = filteredData || data[_type];
    
    type = _type;

    d3.selectAll('#viz').selectAll('*').remove();
    drawChart(chartData, type);
}

function sortCards(by) {
    if (by === 'name') {
        data[type].sort((a, b) => {
            if (b.activity < a.activity) {
                return 1;
            }

            if (b.activity > a.activity) {
                return -1;
            }

            return 0;
        })
    } else {
        data[type].sort((a, b) => {
            return b.amount - a.amount
        })
    }

    d3.selectAll('section.category')
        .each(function (d) {
            d3.select(this).attr('style', 'order:' + data[type].indexOf(d));
        })
}

d3.select('#select-budget-function')
    .on('click', function () {
        initChart('function');
    })

d3.select('#select-agency')
    .on('click', function () {
        initChart('agency');
    })

d3.select('#sort-amount')
    .on('click', function () {
        sortCards('amount');
    })

d3.select('#sort-name')
    .on('click', function () {
        sortCards('name');
    })


d3.select('#filter-by-name')
    .on('input', function () {
        const v = this.value.toLowerCase(),
            filtered = data[type].filter(r => {
                return (r.activity.toLowerCase().indexOf(v) !== -1);
            })

        initChart(type, filtered)
    })

initChart('function')