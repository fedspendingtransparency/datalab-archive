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
        title: 'Graph representing 2018 US Federal Deficit',
        desc: '2018 US federal deficit graph with comparison to 2018 federal revenue, spending and gross domestic product. All graphs are visualized by dots where each dot represents 1 billion USD'
    }
};

let mainContainer;

// the math needs to be precise for the chart to work - no rounding
config.deficitAmount = config.spendingAmount - config.revenueAmount;
config.priorDebtBalance = config.debtBalance - config.deficitAmount;

function setMainContainer() {
    mainContainer = establishContainer(300, null, config.accessibilityAttrs).append('g')
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

    setTimeout(layersInit, 4500);
})();