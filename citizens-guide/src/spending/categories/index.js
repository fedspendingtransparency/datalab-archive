import { init, initChart } from './init';


let debounce;

init();

window.addEventListener('resize', function () {
    if (debounce) {
        clearTimeout(debounce);
    }

    debounce = setTimeout(initChart, 100);
});
