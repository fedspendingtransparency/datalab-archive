import { createLayers } from "./createLayers";
import { startLegendAnimation } from './legend';
import { setChartWidth } from './widthManager';
import { establishContainer, translator } from '../../utils';
import colors from '../../globalSass/colors.scss';
import { setDotsPerRow } from "./dotConstants";
import { layersInit, resetLayers } from "./manageLayers";
import '../../matchesPolyfill';
import DeficitData from '../../../../assets/ffg/data/explore_federal_deficit.csv';
import { findAmountInCsv } from '../../../src/utils';
import Mapping from "../../../../_data/object_mapping.yml";

const config = {
    anecdoteName: 'anecdote-deficit.svg',
    revenueAmount: findAmountInCsv('federal revenue', DeficitData), 
    spendingAmount: findAmountInCsv('federal spending', DeficitData), 
    debtBalance: findAmountInCsv('federal debt', DeficitData), 
    reportedDeficitAmount: findAmountInCsv('federal deficit', DeficitData), 
    compareString: 'revenue',
    revenueColor: colors.colorPrimary,
    spendingColor: colors.colorSpendingPrimary,
    deficitColor: colors.colorDeficitPrimary,
    debtColor: colors.colorDebtPrimary,
    accessibilityAttrs: {
        default: {
            title: `${Mapping.current_fy.value} Federal Deficit`,
            desc: `The image illustrates the federal government’s deficit in ${Mapping.current_fy.value} using dots, and each dot is equal to ${Mapping.dot_represents.value}. There are ${Mapping.dot_number_deficit.value} dots.`
        },
        debt: {
            title: `${Mapping.current_fy.value} Federal Deficit and Debt`,
            desc: `When the federal government experiences a deficit, the majority of funding for the deficit comes from taking on more debt. The ${Mapping.current_fy_deficit.value} deficit contributed to the ${Mapping.added_debt.value} increase in debt from ${Mapping.compare_us_debt.value} at the end of ${Mapping.country_compare_year.value} to ${Mapping.current_fy_debt.value} by the end of ${Mapping.current_fy.value}.`
        },
        deficit: {
            title: `${Mapping.current_fy.value} Federal Deficit, Revenue, and Spending`,
            desc: `A deficit occurs when spending exceeds revenue. For ${Mapping.current_fy.value}, the ${Mapping.current_fy_spending.value} in federal spending exceeded the ${Mapping.current_fy_revenue.value} in federal revenue leading to a deficit of ${Mapping.current_fy_deficit.value}.`
        }
    }
};

let mainContainer, debounce, previousWidth;

// the math needs to be precise for the chart to work - no rounding
config.deficitAmount = config.spendingAmount - config.revenueAmount;
config.priorDebtBalance = config.debtBalance - config.deficitAmount;

function setMainContainer() {
    mainContainer = establishContainer(300, null, config.accessibilityAttrs.default).append('g')
        .classed('main', true);

    config.mainContainer = mainContainer;
}

function legendCallback() {

}

(function init() {
    setChartWidth();
    setMainContainer();
    setDotsPerRow();
    startLegendAnimation(config, legendCallback);
    createLayers(config);

    setTimeout(function () {
        layersInit(config)
    }, 4500);
})();

function resizeChart() {
    setChartWidth();
    setDotsPerRow();
    config.mainContainer.selectAll('*').remove();
    createLayers(config);
    layersInit(config);
    resetLayers();
}

window.addEventListener('resize', function () {
    if (debounce) {
        clearTimeout(debounce);
    }

    if (previousWidth === window.innerWidth) {
        return;
    }

    previousWidth = window.innerWidth;

    debounce = setTimeout(resizeChart, 100);
});
