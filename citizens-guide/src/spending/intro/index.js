import {initChart} from './init';
import colors from '../../globalSass/colors.scss';
import ChartData from '../../../../assets/ffg/data/federal_spending_gdp.csv';
import findAmountInCsv from '../../revenue/intro/index';

console.log('ChartData', ChartData);

(function init(){
    const config = {
        anecdoteName: 'anecdote-spending.svg',
        // comparisonAmount: SpendingData[1].amount, // 'federal revenue'
        comparisonAmount: findAmountInCsv('federal revenue'), // 'federal revenue'
        compareString: 'revenue',
        gdpAmount: findAmountInCsv('gdp'), // 'gdp'
        gdpPercent: findAmountInCsv('federal spending percent of gdp') * 100, // ''federal spending percent'
        sectionAmount: findAmountInCsv('federal spending'), // 'federal spending'
        comparisonColor: colors.colorPrimary,
        sectionColor: colors.colorSpendingPrimary,
        accessibilityAttrs : {
            default: {
                title: '2018 Federal Spending',
                desc: 'The image illustrates federal spending in 2018 using dots, and each dot is equal to a billion dollars. There are 4,100 dots.'
            },
            gdp : {
                title: '2018 Federal Spending and GDP',
                desc: 'The image illustrates federal revenue in 2018 using dots, and each dot is equal to a billion dollars. There are 3,300 dots. That means there are 800 more spending dots than revenue dots, representing the deficit for 2018, roughly $800 billion ($779B).'
            },
            revenue : {
                title: '2018 Federal Spending and Revenue',
                desc: 'The U.S. economy, as measured by gross domestic product, produced $20.7 trillion worth of goods and services. In 2018, federal spending was equivalent to 20% of gross domestic product.'
            }
        }
    };
    initChart(config);
})();
