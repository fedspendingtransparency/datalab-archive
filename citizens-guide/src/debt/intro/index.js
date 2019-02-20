import { createLayers } from "./createLayers";
import { startLegendAnimation } from './legend';
import { setChartWidth } from './widthManager';
import { establishContainer, translator } from '../../utils';
import colors from '../../colors.scss';
import { setDotsPerRow } from "./dotConstants";
import { layersInit } from "./manageLayers";

const config = {
    debtAmount: 21500000000000,
    gdpAmount: 19600000000000,
    deficitAmount: 779000000000,
    gdpPercent: 110,
    deficitColor: colors.colorDeficitPrimary,
    debtColor: colors.colorDebtPrimary
};

let mainContainer;

function setMainContainer() {
    mainContainer = establishContainer(900).append('g')
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