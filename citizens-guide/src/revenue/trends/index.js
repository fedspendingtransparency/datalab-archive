import { select, selectAll } from 'd3-selection';
import { establishContainer, isMobileDevice } from '../../utils';
import { trendData } from './trendData';
import { trendDesktop } from '../../components/trends/chart';
import colors from '../../globalSass/colors.scss';
import { trendMobile } from '../../components/trendsMobile';
import { manualThresholds } from './manualThresholds';
import CategoryData from '../../../../assets/ffg/data/federal_revenue_trends.csv';
import Mapping from "../../../../_data/object_mapping.yml";

// get all the fiscal years in this csv, make a set, so we only have unique values
const fySet = new Set(CategoryData.map( function(c) { return c.fiscal_year }));
// make an array from that set, and filter out any undefined values
const fyArray = Array.from(fySet).filter(function(value, i, arr) {
    return value;
});
fyArray.sort();

const d3 = { select, selectAll },
    data = trendData(),
    accessibilityAttrs = {
        title: 'Federal Revenue Trends Over Time',
        desc: 'Federal revenue has increased over the past five years. Annual revenue was $3.25 trillion, $3.27 trillion, $3.31 trillion $3.33 trillion and $3.5 trillion for the years 2015 to 2019 respectively.'
    },
    config = {
        chapter: 'revenue',
        baseColor: colors.revenuePrimary,
        secondaryColor: colors.colorPrimaryDarker,
        subcategoryThresholds: manualThresholds,
        fiscalYearArray: fyArray
    };

let container;

function sortByLatestYear(a, b) {
    return b.values[b.values.length - 1].amount - a.values[a.values.length - 1].amount;
}

function init() {
    if (isMobileDevice()) {
        container = d3.select('#viz').append('div').classed('trend-mobile', true);
        trendMobile(data.sort(sortByLatestYear), container, config);
    } else {
        container = establishContainer(930, null, accessibilityAttrs);
        trendDesktop(data, container, config);
    }
}

init();
