import { createLayers } from "./createLayers";
import { startLegendAnimation } from './legend';
import { setChartWidth } from './widthManager';
import { establishContainer, translator } from '../../utils';
import colors from '../../globalSass/colors.scss';
import { setDotsPerRow } from "./dotConstants";
import { layersInit, resetLayers } from "./manageLayers";
import DebtData from '../../../../assets/ffg/data/explore_federal_debt.csv';

function findAmountInCsv(str) {
        let amount;
        
        DebtData.every(row => {
            if (row.category != str) {
                return true
            } else {
                amount = row.amount;
                return false
            }
        })
     
        return amount;
    } 

const config = {
    anecdoteName: 'anecdote-debt.svg',
    debtAmount: findAmountInCsv('federal debt'), 
    gdpAmount: findAmountInCsv('gdp'), 
    deficitAmount: Math.abs(findAmountInCsv('federal deficit')), 
    gdpPercent: findAmountInCsv('federal debt percent of gdp') * 100, 
    deficitColor: colors.colorDeficitPrimary,
    debtColor: colors.colorDebtPrimary,
    accessibilityAttrs : {
        default: {
            title: '2018 Federal Debt',
            desc: 'The image illustrates the federal government’s debt at the end of 2018 using dots, and each dot is equal to a billion dollars. There are 21,500 dots.'
        },
        deficit : {
            title: '2018 Federal Debt and Deficit',
            desc: 'The change in federal debt each year is heavily influenced by the deficit or surplus that year. When there is not enough revenue to pay for spending the government borrows money to make up the difference. When there is excess revenue in a given year, the majority of those funds are used to pay down the federal debt. The $779 billion deficit contributed to the $1.3 trillion increase in debt from $20.2 trillion at the end of 2017 to $21.5 trillion by the end of 2018.'
        },
        gdp : {
            title: '2018 Federal Debt and GDP',
            desc: 'When the federal government experiences a deficit, the majority of funding for the deficit comes from taking on more debt. The $779 billion deficit contributed to the $1.3 trillion increase in debt from $20.2 trillion at the end of 2017to $21.5 trillion by the end of 2018.'
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
