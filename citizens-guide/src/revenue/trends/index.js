import { select, selectAll } from 'd3-selection';
import { establishContainer, isMobileDevice } from '../../utils';
import { trendData } from './trendData';
import { trendDesktop } from '../../components/trends/chart';
import colors from '../../globalSass/colors.scss';
import { trendMobile } from '../../components/trendsMobile';
import { manualThresholds } from './manualThresholds';

const d3 = { select, selectAll },
    data = trendData(),
    accessibilityAttrs = {
        title: '2018 Federal Revenue Trends over Time',
        desc: 'Individual income taxes have increased over the past five years from $1.4 trillion in 2014 to $1.7 trillion in 2018. Social Security and Medicare taxes have also increased from $960 billion in 2014 to $1.1 trillion in 2018. Corporate income taxes have decreased from $320 billion in 2014 to $205 billion in 2018.'
    },
    config = {
        chapter: 'revenue',
        baseColor: colors.revenuePrimary,
        secondaryColor: colors.colorPrimaryDarker,
        subcategoryThresholds: manualThresholds
    }

let container;

function sortByLatestYear(a, b) {
    return b.values[b.values.length - 1].amount - a.values[a.values.length - 1].amount;
}

function init() {
    if (isMobileDevice()) {
        container = d3.select('#viz').append('div').classed('trend-mobile', true)
        trendMobile(data.sort(sortByLatestYear), container, config);
    } else {
        container = establishContainer(930, null, accessibilityAttrs);
        trendDesktop(data, container, config);
    }
}

init();
