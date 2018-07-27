import '../../../node_modules/normalize-css/normalize.css';
import '../sass/receipts.scss';
import { section1_1 } from './section1-1';
import { section1_2 } from './section1-2';
import { section1_3 } from './section1-3';
import { section2_1 } from './section2-1';

let steps = [section1_2, section1_3, section2_1];

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

function fastForward(){
    proceed();

    setTimeout(() => {
        if (steps.length) {
            fastForward();
        }
    }, 500)
}

section1_1();

window.addEventListener('wheel', proceed);
window.addEventListener('click', proceed);

//fastForward();

