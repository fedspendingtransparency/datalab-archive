import { createLayers } from "./createLayers";
import { startLegendAnimation } from './legend';
import { setChartWidth } from './widthManager';
import { establishContainer, translator } from '../../utils';
import colors from '../../globalSass/colors.scss';
import { setDotsPerRow } from "./dotConstants";
import { layersInit, resetLayers } from "./manageLayers";
import DebtData from '../../../../assets/ffg/data/explore_federal_debt.csv';
import { findAmountInCsv } from '../../../src/utils';
import Mapping from '../../../../_data/object_mapping.yml';

const config = {
    anecdoteName: 'anecdote-debt.svg',
    debtAmount: findAmountInCsv('federal debt', DebtData), 
    gdpAmount: findAmountInCsv('gdp', DebtData), 
    deficitAmount: Math.abs(findAmountInCsv('federal deficit', DebtData)), 
    gdpPercent: findAmountInCsv('federal debt percent of gdp', DebtData) * 100, 
    deficitColor: colors.colorDeficitPrimary,
    debtColor: colors.colorDebtPrimary,
    accessibilityAttrs : {
        default: {
            title: '2019 Federal Debt',
            desc: 'The image illustrates the federal government’s debt at the end of 2019 using dots, and each dot is equal to a billion dollars. There are 22,700 dots.'
        },
        deficit : {
            title: '2019 Federal Debt and Deficit',
            desc: 'The change in federal debt each year is heavily influenced by the deficit or surplus that year. When there is not enough revenue to pay for spending the government borrows money to make up the difference. When there is excess revenue in a given year, the majority of those funds are used to pay down the federal debt. The $984 billion deficit contributed to the $1.2 trillion increase in debt from $21.5 trillion at the end of 2018 to $22.7 trillion by the end of 2019.'
        },
        gdp : {
            title: '2019 Federal Debt and GDP',
            desc: 'When the federal government experiences a deficit, the majority of funding for the deficit comes from taking on more debt. The $984 billion deficit contributed to the $1.2 trillion increase in debt from $21.5 trillion at the end of 2018 to $22.7 trillion by the end of 2019.'
        }
    }
};

let mainContainer, debounce, previousWidth;

function setMainContainer() {
    mainContainer = establishContainer(900, null, config.accessibilityAttrs.default)
        .append('g')
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

    setTimeout(function() {
        layersInit(config);
    }, 4500);
})();

function resizeChart() {
    setChartWidth();
    setDotsPerRow();
    resetLayers();
    config.mainContainer.selectAll('*').remove();
    createLayers(config);
    layersInit(config);
}

window.addEventListener('resize', function () {
    if (debounce) {
        clearTimeout(debounce);
    }

    if(previousWidth === window.innerWidth){
        return;
    }

    previousWidth = window.innerWidth;

    debounce = setTimeout(resizeChart, 100);
});
