import { select, selectAll } from 'd3-selection';
import { receiptsConstants } from '../receipts-utils';
import { getDataByYear } from './data';
import { initSankey, destroySankey } from "../../components/sankey/init";
import { init as initBarGraph, initChart } from "../../spending/categories/init";
import colors from '../../globalSass/colors.scss';
import '../../infoBox';
import Mapping from "../../../../_data/object_mapping.yml";

const config = {
    data: [],
    containerClass: receiptsConstants.shaderContainerClass,
    sectionColor: colors.colorPrimaryDarker,
    accessibilityAttrs: {
        title: '2019 Federal Revenue Categories',
        desc: 'The federal government collected $1.7 trillion in individual income taxes in 2019. That represented 49.6% of all federal revenue for the year. Social Security and Medicare taxes added another $1.2 trillion (or 34%) of total federal revenue. Corporate income taxes were the third largest source of revenue for the federal government in 2019 with $2.3 billion collected. Miscellaneous revenue, excise taxes, unemployment insurance, customs duties, estate and gift taxes, and other retirement taxes contributed the remaining $322 billion of federal revenue for 2019.'
    }
},
    data = getDataByYear(Mapping.current_fy.value),
    d3 = { select, selectAll },
    viz = d3.select('#viz');

let isDesktopInd = false,
    debounce,
    resizeBarGraphDebounce,
    mainSvg;

function init() {
    config.data = JSON.parse(JSON.stringify(data));
    if (window.innerWidth >= 1200) {
        isDesktopInd = true;
        initSankey(config);
    } else {
        initBarGraph(config);
    }
}

window.addEventListener('resize', function () {
    const defaultTimeout = 100;
    if (debounce) {
        clearTimeout(debounce);
    }

    let actualTimeout = defaultTimeout;

    if (window.innerWidth < 1200 && isDesktopInd) {
        actualTimeout = 0;
    } else if (window.innerWidth >= 1200 && !isDesktopInd) {
        actualTimeout = 0;
    }

    debounce = setTimeout(function () {
        config.data = JSON.parse(JSON.stringify(data));
        if (window.innerWidth < 1200) {
            if (isDesktopInd) {
                isDesktopInd = false;
                d3.select('#viz svg').html(null);
                destroySankey();
                initBarGraph(config);
            } else {
                if (resizeBarGraphDebounce) {
                    clearTimeout(resizeBarGraphDebounce);
                }
                resizeBarGraphDebounce = setTimeout(initChart, 100);
            }
        } else {
            if (!isDesktopInd) {
                isDesktopInd = true;
                d3.select('#viz svg').html(null);
                initSankey(config);
            }
        }
    }, actualTimeout);
});

init();
