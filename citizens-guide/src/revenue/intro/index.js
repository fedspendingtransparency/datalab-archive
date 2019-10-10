import { initChart } from '../../spending/intro/init';
import colors from '../../globalSass/colors.scss';
import revenueData from '../../../../assets/ffg/data/federal_revenue_gdp.csv';
import { findAmountInCsv } from '../../../src/utils';
import Mapping from "../../../../_data/object_mapping.yml";

(function init(){
    const config = {
        anecdoteName: 'anecdote.svg',
        comparisonAmount: findAmountInCsv('federal spending', revenueData),
        compareString: 'spending',
        gdpAmount: findAmountInCsv('gdp', revenueData), 
        gdpPercent: findAmountInCsv('federal revenue percent of gdp', revenueData) * 100, 
        sectionAmount: findAmountInCsv('federal revenue', revenueData), 
        comparisonColor: colors.colorSpendingPrimary,
        sectionColor: colors.revenuePrimary,
        accessibilityAttrs : {
            default: {
                title: '2019 Federal Revenue',
                desc: 'The image illustrates federal revenue in 2019 using dots, and each dot is equal to a billion dollars. There are 3,500 dots.'
            },
            gdp : {
                title: '2019 Federal Revenue and GDP',
                desc: `The U.S. economy, as measured by gross domestic product, produced ${Mapping.current_fy_gdp.value} worth of goods and services. In ${Mapping.current_fy.value}, federal revenue was equivalent to ${Mapping.revenue_percent_gdp.value} of gross domestic product.`
            },
            spending : {
                title: '2019 Federal Revenue and Spending',
                desc: `The image illustrates federal spending in ${Mapping.current_fy.value} using dots, and each dot is equal to ${Mapping.dot_represents.value}. There are ${Mapping.dot_number_spending.value} dots. That means there are 800 more spending dots than revenue dots, representing the deficit for ${Mapping.current_fy.value}, roughly $800 billion ($779B).`
            }
        }
    };
    initChart(config);
})();
