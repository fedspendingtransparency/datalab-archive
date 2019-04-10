import { initChart } from '../../spending/intro/init';
import colors from '../../colors.scss';
import '../../introFactBox';

(function init(){
    const config = {
        anecdoteName: 'anecdote.svg',
        comparisonAmount: 4100000000000,
        compareString: 'spending',
        gdpAmount: 20700000000000,
        gdpPercent: 16,
        sectionAmount: 3300000000000,
        comparisonColor: colors.colorSpendingPrimary,
        sectionColor: colors.colorPrimary,
        accessibilityAttrs : {
            default: {
                title: '2018 Federal Revenue',
                desc: 'The image illustrates federal revenue in 2018 using dots, and each dot is equal to a billion dollars. There are 3,300 dots.'
            },
            gdp : {
                title: '2018 Federal Revenue and GDP',
                desc: 'The U.S. economy, as measured by gross domestic product, produced $20.7 trillion worth of goods and services. In 2018, federal revenue was equivalent to 16% of gross domestic product.'
            },
            spending : {
                title: '2018 Federal Revenue and Spending',
                desc: 'The image illustrates federal spending in 2018 using dots, and each dot is equal to a billion dollars. There are 4,100 dots. That means there are 800 more spending dots than revenue dots, representing the deficit for 2018, roughly $800 billion ($779B).'
            }
        }
    };
    initChart(config);
})();