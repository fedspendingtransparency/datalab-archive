import { select, selectAll } from 'd3-selection';
import { establishContainer, isMobileDevice } from '../../utils';
import { trendData } from './trendData';
import { showHideInit } from './showHideCategories';
import { setThreshold } from "./setThreshold";
import { trendDesktop } from '../../components/trends/chart';
import { manualThresholds } from './manualThresholds';
import { trendMobile } from '../../components/trendsMobile';
import colors from '../../globalSass/colors.scss';
import CategoryData from '../../../../assets/ffg/data/federal_spending_trends.csv';
import Mapping from "../../../../_data/object_mapping.yml";

// get all the fiscal years in this csv, make a set, so we only have unique values
// this gets attached to the config object, which gets passed to the d3 functions
const fySet = new Set(CategoryData.map( function(c) { return c.fiscal_year }));
// make an array from that set, and filter out any undefined values
const fyArray = Array.from(fySet).filter(function(value, i, arr) {
    return value;
});
fyArray.sort();

const d3 = { select, selectAll },
    accessibilityAttrs = {
        title: '2019 Federal Spending Trends by Category and Agency over Time',
        desc: 'Federal spending has increased steadily over the past five years. Annual spending was $3.69 trillion, $3.85 trillion, $3.98 trillion $4.11 trillion, and $4.4 trillion for the years 2015 to 2019 respectively.'
    },
    selectBudgetFunction = d3.select('#select-budget-function'),
    selectAgency = d3.select('#select-agency'),
    data = showHideInit(setData('category'), renderChart);

let svg;

function init() {
    d3.select("#spending-chart-toggle").attr('data-active', 'category');
}

init();
renderChart(data);
changeDataTypeClickFunctions();

function sortByLatestYear(a, b) {
    return b.values[b.values.length - 1].amount - a.values[a.values.length - 1].amount;
}

function setData(type) {
    return trendData(type).sort(sortByLatestYear);
}

function renderChart(data) {
    const zoomThreshold = setThreshold(data),
        config = {
            chapter: 'spending',
            baseColor: colors.colorSpendingPrimary,
            secondaryColor: '#00766C',
            zoomThreshold,
            subcategoryThresholds: manualThresholds,
            fiscalYearArray: fyArray
        };

    let container;

    if (isMobileDevice()) {
        container = d3.select('#viz');
        container.selectAll('*').remove();
        container.append('div').classed('trend-mobile', true);
        trendMobile(data, container, config);
    } else {
        svg = svg || establishContainer(930, null, accessibilityAttrs);
        svg.selectAll('*').remove();
        container = establishContainer(930, null, accessibilityAttrs);
        trendDesktop(data, svg, config);
    }
}

function changeDataTypeClickFunctions() {
    d3.select('#toggle-spending-data-type')
        .on('click', function () {
            let dataType;
            const dataController = d3.select("#spending-chart-toggle"),
                curData = dataController.attr('data-active');

            if (curData === 'category' || curData === 'function') {
                dataType = 'agency';
                changeDataType(dataType);
            } else {
                dataType = 'category';
                changeDataType(dataType);
            } 
        });

    d3.selectAll('.toggle-component__label')
        .on('click', function () {
            const textValue = d3.select(this).text(),
                type = (textValue === 'Agency') ? 'agency' : 'category';

            changeDataType(type);
        })
}

function changeDataType(dataType) {
    const dataController = d3.select("#spending-chart-toggle");
    const data = showHideInit(setData(dataType));
    dataController.attr('data-active', dataType);
    renderChart(data);
}
