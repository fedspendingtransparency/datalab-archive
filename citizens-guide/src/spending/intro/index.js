import {initChart} from './init';
import colors from '../../colors.scss';
import '../../introFactBox';

(function init(){
    const config = {
        anecdoteName: 'anecdote-spending.svg',
        comparisonAmount: 3300000000000,
        compareString: 'revenue',
        gdpAmount: 20700000000000,
        gdpPercent: 20,
        sectionAmount: 4100000000000,
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
