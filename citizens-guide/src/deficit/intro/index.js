import colors from '../../colors.scss';
import { compareDeficit } from './compareDeficit';
import { compareDebt } from './compareDebt';
import { initDeficitDots } from './deficitDots';
import { startLegendAnimation } from './legend';
import { setChartWidth } from './widthManager';
import { establishContainer, translator } from '../../utils';

const config = {
    revenueAmount: 3300000000000,
    spendingAmount: 4100000000000,
    debtBalance: 20800000000000,
    reportedDeficitAmount: 779000000000,
    compareString: 'revenue',
    revenueColor: colors.colorPrimary,
    spendingColor: colors.colorSpendingPrimary,
    deficitColor: colors.colorDeficitPrimary
};

config.deficitAmount = config.spendingAmount - config.revenueAmount; // the math needs to be precise for the chart to work - no rounding

let mainContainer;

function compareRevenueSpending() {
    initDeficitDots(config);
    compareDeficit(config);    
}

function setMainContainer() {
    mainContainer = establishContainer().append('g')
        .attr('transform', translator(0, 35))
        .classed('main', true);

    config.mainContainer = mainContainer;
}

(function init() {
    setChartWidth();
    setMainContainer();

    startLegendAnimation(config, compareRevenueSpending);

    return;

    compareDebt(config);
})();
