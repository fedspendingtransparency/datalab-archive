import { init, initChart } from './init';
import { byYear } from '../data-spending';


let debounce;

init();

window.addEventListener('resize', function () {
    if (debounce) {
        clearTimeout(debounce);
    }

    debounce = setTimeout(initChart, 100);
});
