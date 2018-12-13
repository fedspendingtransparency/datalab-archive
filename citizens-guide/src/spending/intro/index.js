import {initChart} from './init';
import colors from '../../colors.scss';

(function init(){
    const config = {
        comparisonAmount: 3300000000000,
        gdpAmount: 20700000000000,
        gdpPercent: 20,
        comparisonColor: colors.colorPrimary,
        dotColor: colors.colorSpendingPrimary
    };
    initChart(config);
})();
