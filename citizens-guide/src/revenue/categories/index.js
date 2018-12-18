import { select, selectAll } from 'd3-selection';
import { receiptsConstants } from '../receipts-utils';
import { getDataByYear } from './data';
import {initSankey, destroySankey} from "../../components/sankey/init";
import {drawChart} from "../../spending/categories/bar/chart";
import '../header.scss';
import './categories.scss';
import '../../infoBox';

const config = {
    data: getDataByYear(2017),
    containerClass : receiptsConstants.shaderContainerClass
},
    d3 = {select, selectAll};

let isDesktopInd = false,
    debounce;

function init() {
    if(window.innerWidth >= 1200){
        isDesktopInd = true;
        initSankey(config);
    } else {
        drawChart(config.data,'Revenue Categories');
    }
}

window.addEventListener('resize', function(){
    if (debounce) {
        clearTimeout(debounce);
    }

    debounce = setTimeout(function(){
        if(window.innerWidth < 1200){
            if(isDesktopInd){
                isDesktopInd = false;
                d3.select('#viz svg').html(null);
                destroySankey();
                drawChart(config.data,'Revenue Categories');
            }
        } else {
            if(!isDesktopInd){
                isDesktopInd = true;
                d3.select('#viz svg').html(null);
                initSankey(config);
            }
        }
    }, 100);
});

init();