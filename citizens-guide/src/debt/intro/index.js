import { createLayers } from "./createLayers";
import { startLegendAnimation } from './legend';
import { setChartWidth } from './widthManager';
import { establishContainer, translator } from '../../utils';
import colors from '../../colors.scss';
import { setDotsPerRow } from "./dotConstants";
import { layersInit } from "./manageLayers";

const config = {
    debtAmount: 21500000000000,
    gdpAmount: 20700000000000,
    deficitAmount: 779000000000,
    gdpPercent: 104,
    deficitColor: colors.colorDeficitPrimary,
    debtColor: colors.colorDebtPrimary,
    accessibilityAttrs : {
        title: 'Graph representing 2018 US Federal Debt',
        desc: '2018 US federal debt graph with comparison to 2018 federal deficit and U.S. GDP. All graphs are visualized by dots where each dot represents 1 billion USD'
    }
};

let mainContainer;

function setMainContainer() {
    mainContainer = establishContainer(900, null, config.accessibilityAttrs).append('g')
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