import { section1_1 } from './section1-1';
import { section1_2 } from './section1-2';
// import { section1_3 } from './section1-3';
import { section2_1 } from './section2-1';
import { section2_2 } from './section2-2';

let steps = [section1_2, section2_1],
    counter = 0,
    max = 5,
    debounce;

function proceed() {
    const next = steps.shift();
    let subSteps;

    if (!next) {
        return;
    }

    subSteps = next();

    if (Array.isArray(subSteps)) {
        steps = subSteps.concat(steps);
        subSteps = undefined;
    }
}

function onWheel(){
    if (debounce) {
        clearTimeout(debounce);
    }
    
    debounce = setTimeout(proceed, 300)
}

section1_1();

// window.addEventListener('wheel', onWheel);
window.addEventListener('click', proceed);

setTimeout(proceed, 100)
setTimeout(proceed, 400)


