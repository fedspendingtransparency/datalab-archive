import {initChart} from './init';
import colors from '../../colors.scss';

(function init(){
    const config = {
        comparisonAmount: 3300000000000,
        compareString: 'revenue',
        gdpAmount: 20700000000000,
        gdpPercent: 20,
        sectionAmount: 4100000000000,
        comparisonColor: colors.colorPrimary,
        sectionColor: colors.colorSpendingPrimary
    };
    initChart(config);
})();
