import { initChart } from '../../spending/intro/init';
import colors from '../../globalSass/colors.scss';
import ChartData from '../../../../assets/ffg/data/federal_revenue_gdp.csv';

export default function findAmountInCsv(str) {
    let amount;
    
    ChartData.every(row => {
        if (row.category != str) {
            return true
        } else {
            amount = row.amount;
            return false
        }
    })
 
    console.log('amount', amount);
    return amount;
} 

(function init(){
    const config = {
        anecdoteName: 'anecdote.svg',
        comparisonAmount: findAmountInCsv('federal spending'),
        compareString: 'spending',
        gdpAmount: findAmountInCsv('gdp'), //'gdp'
        gdpPercent: findAmountInCsv('federal revenue percent of gdp') * 100, // 'federal revenue percent of gdp'
        sectionAmount: findAmountInCsv('federal revenue'), // 'federal revenue'
        comparisonColor: colors.colorSpendingPrimary,
        sectionColor: colors.revenuePrimary,
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
