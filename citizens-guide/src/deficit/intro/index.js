import { createLayers } from "./createLayers";
import { startLegendAnimation } from './legend';
import { setChartWidth } from './widthManager';
import { establishContainer, translator } from '../../utils';
import colors from '../../colors.scss';
import { setDotsPerRow } from "./dotConstants";
import { layersInit } from "./manageLayers";

const config = {
    anecdoteName: 'anecdote-deficit.svg',
    revenueAmount: 3300000000000,
    spendingAmount: 4100000000000,
    debtBalance: 21500000000000,
    reportedDeficitAmount: 779000000000,
    compareString: 'revenue',
    revenueColor: colors.colorPrimary,
    spendingColor: colors.colorSpendingPrimary,
    deficitColor: colors.colorDeficitPrimary,
    debtColor: colors.colorDebtPrimary,
    accessibilityAttrs : {
        default: {
            title: '2018 Federal Deficit',
            desc: 'The image illustrates the federal government’s deficit in 2018 using dots, and each dot is equal to a billion dollars. There are 779 dots.'
        },
        debt : {
            title: '2018 Federal Deficit and Debt',
            desc: 'When the federal government experiences a deficit, the majority of funding for the deficit comes from taking on more debt. The $779 billion deficit contributed to the $1.3 trillion increase in debt from $20.2 trillion at the end of 2017 to $21.5 trillion by the end of 2018.'
        },
        deficit : {
            title: '2018 Federal Deficit, Revenue, and Spending',
            desc: 'A deficit occurs when spending exceeds revenue. For 2018, the $4.1 trillion in federal spending exceeded the $3.3 trillion in federal revenue leading to a deficit of $779 billion.'
        }
    }
};

let mainContainer;

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

    setTimeout(function() {
        layersInit(config)
    }, 4500);
})();