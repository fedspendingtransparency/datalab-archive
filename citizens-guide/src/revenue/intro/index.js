import { initChart } from '../../spending/intro/init';
import colors from '../../colors.scss';

(function init(){
    const config = {
        comparisonAmount: 4100000000000,
        compareString: 'spending',
        gdpAmount: 20700000000000,
        gdpPercent: 16,
        sectionAmount: 3300000000000,
        comparisonColor: colors.colorSpendingPrimary,
        sectionColor: colors.colorPrimary,
        accessibilityAttrs : {
            title: 'Graph representing 2018 US Federal Revenue',
            desc: '2018 US federal revenue graph with comparison to 2018 federal spending and U.S. GDP. All graphs are visualized by dots where each dot represents 1 billion USD'
        }
    };
    initChart(config);
})();