import { select, selectAll } from 'd3-selection';
import { establishContainer } from '../../utils';
import { trendData } from './trendData';
import { trendDesktop } from '../../components/trends/chart';
import colors from '../../colors.scss';
import { trendMobile } from '../../components/trendsMobile';

const d3 = { select, selectAll },
    data = trendData(),
    accessibilityAttrs = {
        title: '2018 Federal Revenue Trends over Time',
        desc: 'Individual income taxes have increased over the past five years from $1.4 trillion in 2014 to $1.7 trillion in 2018. Social Security and Medicare taxes have also increased from $960 billion in 2014 to $1.1 trillion in 2018. Corporate income taxes have decreased from $320 billion in 2014 to $205 billion in 2018.'
    },
    config = {
        chapter: 'revenue',
        baseColor: colors.colorPrimaryDarker,
        secondaryColor: 'rgb(74, 144, 226)'
    }

let container;    

const mobile = true;

if (mobile) {
    container = d3.select('#viz').append('div').classed('trend-mobile', true)
    trendMobile(data, container, config);
} else {
    container = establishContainer(930, null, accessibilityAttrs);
    trendDesktop(data, container, config);
}
