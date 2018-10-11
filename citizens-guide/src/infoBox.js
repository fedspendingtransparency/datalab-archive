import { select, selectAll } from 'd3-selection';

const d3 = { select, selectAll },
    infoBoxClass = '.info-box',
    triggerClass = '.info-box-trigger',
    triggerClassActive = 'info-box-trigger--active',
    closeButtonClass = 'info-box__close',
    activeClass = 'info-box--active';

function addCloseIcon() {
    const box = d3.select(this),
        closeButton = box.append('button'),
        closeIcon = closeButton.append('i');

    closeButton.lower();

    closeButton.attr('class', closeButtonClass);
    closeIcon.attr('class', 'fas fa-times');
}

function closeBox(trigger, box) {
    box.classed(activeClass, null);
    trigger.classed(triggerClassActive, null);
}

export function triggerInfoBox() {
    const trigger = d3.select(this),
        id = trigger.attr('data-box-id'),
        box = d3.select('#' + id),
        innerWidth = window.innerWidth,
        coords = trigger.node().getBoundingClientRect();

    let x = coords.left-10;

    if (x > innerWidth - 300) {
        x = innerWidth - 300
    }

    box.classed(activeClass, true);
    trigger.classed(triggerClassActive, true);

    box.attr('style', `top:${coords.top-15+window.pageYOffset}px;left:${x}px`);

    box.select('.' + closeButtonClass)
        .on('click', null)
        .on('click', function(){
            closeBox(trigger, box)
        });
}

(function init() {
    d3.selectAll(infoBoxClass).each(addCloseIcon);    

    d3.selectAll(triggerClass)
        .on('click', triggerInfoBox)

})();