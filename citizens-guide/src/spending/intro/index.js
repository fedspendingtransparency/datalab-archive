import {initChart} from './init';
import colors from '../../colors.scss';

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
            title: 'Graph representing 2018 US Federal Spending',
            desc: '2018 US federal spending graph with comparison to 2018 federal revenue and U.S. GDP. All graphs are visualized by dots where each dot represents 1 billion USD'
        }
    };
    initChart(config);
})();
