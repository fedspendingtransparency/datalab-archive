import { initChart } from '../../spending/intro/init';
import colors from '../../colors.scss';

(function init(){
    const config = {
        comparisonAmount: 4100000000000,
        compareString: 'spending',
        gdpAmount: 19600000000000,
        gdpPercent: 17,
        sectionAmount: 3300000000000,
        comparisonColor: colors.colorSpendingPrimary,
        sectionColor: colors.colorPrimary
    };
    initChart(config);
})();