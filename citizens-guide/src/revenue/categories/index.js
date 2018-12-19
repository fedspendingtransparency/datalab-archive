import { select, selectAll } from 'd3-selection';
import { receiptsConstants } from '../receipts-utils';
import { getDataByYear } from './data';
import {initSankey, destroySankey} from "../../components/sankey/init";
import {drawChart} from "../../spending/categories/bar/chart";
import {init as initBarGraph, initChart} from "../../spending/categories/init";
import colors from '../../colors.scss';
import '../header.scss';
import '../../infoBox';

const config = {
    data: getDataByYear(2017),
    containerClass : receiptsConstants.shaderContainerClass,
    sectionColor: colors.colorPrimaryDarker
},
    d3 = {select, selectAll},
    viz = d3.select('#viz');

let isDesktopInd = false,
    debounce,
    resizeBarGraphDebounce,
    mainSvg;

function init() {
    if(window.innerWidth >= 1200){
        isDesktopInd = true;
        initSankey(config);
    } else {
        initBarGraph(config);
    }
}

window.addEventListener('resize', function(){
    const defaultTimeout = 100;
    if (debounce) {
        clearTimeout(debounce);
    }

    let actualTimeout = defaultTimeout;

    if(window.innerWidth < 1200 && isDesktopInd) {
        actualTimeout = 0;
    } else if(window.innerWidth >= 1200 && !isDesktopInd){
        actualTimeout = 0;
    }

    debounce = setTimeout(function(){
        if(window.innerWidth < 1200){
            if(isDesktopInd){
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
            if(!isDesktopInd){
                isDesktopInd = true;
                d3.select('#viz svg').html(null);
                initSankey(config);
            }
        }
    }, actualTimeout);
});

init();