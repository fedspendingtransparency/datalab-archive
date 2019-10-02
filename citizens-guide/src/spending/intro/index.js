import {initChart} from './init';
import colors from '../../globalSass/colors.scss';
import SpendingData from '../../../../assets/ffg/data/federal_spending_gdp.csv';
import { findAmountInCsv } from '../../../src/utils';
import Mapping from "../../../../_data/object_mapping.yml";

(function init(){
    const config = {
        anecdoteName: 'anecdote-spending.svg',
        comparisonAmount: findAmountInCsv('federal revenue', SpendingData), 
        compareString: 'revenue',
        gdpAmount: findAmountInCsv('gdp', SpendingData), 
        gdpPercent: findAmountInCsv('federal spending percent of gdp', SpendingData) * 100, 
        sectionAmount: findAmountInCsv('federal spending', SpendingData), 
        comparisonColor: colors.revenuePrimary,
        sectionColor: colors.colorSpendingPrimary,
        accessibilityAttrs : {
            default: {
                title: `${Mapping.current_fy.value} Federal Spending`,
                desc: `The image illustrates federal spending in ${Mapping.current_fy.value} using dots, and each dot is equal to ${Mapping.dot_represents.value}. There are ${Mapping.dot_number_spending.value} dots.`
            },
            gdp : {
                title: `${Mapping.current_fy.value} Federal Spending and GDP`,
                desc: `The image illustrates federal revenue in ${Mapping.current_fy.value} using dots, and each dot is equal to ${Mapping.dot_represents.value}. There are ${Mapping.dot_number_revenue.value} dots. That means there are 800 more spending dots than revenue dots, representing the deficit for ${Mapping.current_fy.value}, roughly $800 billion ($779B).`
            },
            revenue : {
                title: `${Mapping.current_fy.value} Federal Spending and Revenue`,
                desc: `The U.S. economy, as measured by gross domestic product, produced ${Mapping.current_fy_gdp.value} worth of goods and services. In ${Mapping.current_fy.value}, federal spending was equivalent to ${Mapping.spending_percent_gdp.value} of gross domestic product.`
            }
        }
    };
    initChart(config);
})();
