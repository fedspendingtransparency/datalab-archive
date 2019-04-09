import { select, selectAll, event } from 'd3-selection';
import SwipeListener from 'swipe-listener';

const d3 = { select, selectAll, event },
    config = {
        anecdoteClass: 'anecdote',
        anecdoteActiveClass: 'anectode--active',
        controlsClass: 'anecdote__controls',
        triggerClass: 'anecdote__trigger',
        navClass: 'anecdote__nav-control',
        navButtonClass: 'anecdote__nav-button',
        closeButtonClass: 'anecdote__close',
        closeButtonIconClass: 'fas fa-times',
        contentsClass: 'anecdote__contents',
        contentsClassActive: 'anecdote__contents--active',
        dotsClass: 'anecdote__dots',
        dotsContainerClass: 'anecdote__dots--container',
        dotClass: 'anecdote__dot',
        dotClassActive: 'anecdote__dot--active',
        dotTextClass: 'anecdote__dots--text',
        infoIcon: {
            class: 'anecdote__icon',
            src: 'assets/icons/anecdote.svg',
            alt: 'anecdote icon'
        },
        linkCtaContainerClass: 'anecdote__cta--container',
        linkButtonContainerClass: 'anecdote__link--button-container',
        linkButtonIconClass: 'anecdote__link--button-icon',
        linkButtonClass: 'link-button anecdote__link--button',
        linkButtonText: '',
        panesClass: 'anecdote__panes',
        paneClass: 'anecdote__pane',
        paneClassActive: 'anecdote__pane--active'
    };

let desiredAnecdoteProperties = {};

function addCloseIcon(anecdote) {
    const button = anecdote.select(`.${config.controlsClass}`)
        .append('button')
        .classed(config.closeButtonClass, true)
        .on('click', toggleVisibility)

    button.append('i')
        .classed(config.closeButtonIconClass, true);
}

function toggleVisibility() {
    const anecdote = d3.select(this.closest(`.${config.anecdoteClass}`));

    anecdote.classed(config.anecdoteActiveClass, !anecdote.classed(config.anecdoteActiveClass));
}

function setActiveDot(anecdote, index) {
    const dots = anecdote.selectAll(`.${config.dotClass}`);

    dots.classed(config.dotClassActive, false);

    dots.filter((d, i) => i === index).classed(config.dotClassActive, true);

    updateDotText(anecdote, index);
}

function updateDotText(anecdote, i) {
    const dotLength = anecdote.selectAll(`.${config.paneClass}`).size(),
        dotText = anecdote.select(`.${config.dotTextClass}`);

    dotText.html(`${i + 1} of ${dotLength}`);
}

function buildDots(anecdote) {
    const dotLength = anecdote.selectAll(`.${config.paneClass}`).size(),
        dotContainer = anecdote.select(`.${config.contentsClass}`).insert('div').classed(config.dotsContainerClass, true),
        dots = dotContainer.append('div').classed(config.dotsClass, true),
        dotArray = new Array(dotLength);

    dots.selectAll(`.${config.dotClass}`)
        .data(dotArray)
        .enter()
        .append('button')
        .classed(config.dotClass, true)
        .on('click', function (d, i) {
            showPane(anecdote, i);
        });

    dotContainer.append('div')
        .classed(config.dotTextClass, true);

    setActiveDot(anecdote, 0);
}

function showPane(anecdote, index) {
    const panes = anecdote.selectAll(`.${config.paneClass}`).classed(config.paneClassActive, false);

    anecdote.attr('data-current', index);

    panes.filter((d, i) => { return i === index }).classed(config.paneClassActive, true);

    setActiveDot(anecdote, index);
}

<<<<<<< HEAD
function addKeyboardNavigation() {
=======
function addPaneNavigation(anecdote) {
    // Add keyboard navigation (left/right keys).
>>>>>>> 688759cd... Added mobile swiping on anecdotes.
    window.addEventListener("keydown", function (e) {
        let navigateDir = '';
        switch (e.key) {
            case 'Right':
            case 'ArrowRight':
                navigateDir = 'next';
                break;
            case 'Left':
            case 'ArrowLeft':
                navigateDir = 'previous';
                break;
        }
        if (navigateDir) {
            const anecdoteClass = desiredAnecdoteProperties.anecdoteClass || config.anecdoteClass;

            function findAnecdote(el) {
                if (el.nodeName === 'SECTION' && el.className === anecdoteClass) {
                    const anecdote = d3.select(el);
                    performSlideMovement(anecdote);
                    return true;
                }
                return false;
            }

            function performSlideMovement(anecdote) {
                anecdote.node().focus();
                if (navigateDir === 'next') {
                    moveToAdjacentSlide(anecdote, true);
                } else {
                    moveToAdjacentSlide(anecdote, false);
                }
            }

            const pathEls = e.path;
            let curPath = null;
            if (pathEls) {
                for (let i = 0, il = pathEls.length; i < il; i++) {
                    curPath = pathEls[i];
                    if (findAnecdote(curPath) === true) {
                        return;
                    }
                }
            } else {
                let curNode = e.target;
                if (curNode && findAnecdote(curNode) === false) {
                    while (curNode.parentNode) {
                        curNode = curNode.parentNode;
                        if (findAnecdote(curNode) === true) {
                            return;
                        }
                    }
                }
            }
        }
<<<<<<< HEAD
=======

        prev = (navigateDir === 'previous');

        activeAnecdotes.each(function () {
            advancePane(d3.select(this), prev);
        })
>>>>>>> 688759cd... Added mobile swiping on anecdotes.
    });

    // Add mobile navigation (swipe left/right).
    const anecdoteEl = anecdote.node(),
        listener = SwipeListener(anecdoteEl);

    anecdoteEl.addEventListener('swipe', function(e){
        const activeAnecdotes = d3.selectAll(`.${config.anecdoteActiveClass}`),
            swipeDirection = e.detail.directions;

        let prev;
        if(swipeDirection.left){
            prev = 'previous';
        } else if(!swipeDirection.right){
            return; // Ignore up or down swipes.
        }

        activeAnecdotes.each(function () {
            advancePane(d3.select(this), prev);
        })
    });
}

function setWidthForPanes(anecdote) {
    const count = anecdote.selectAll(`.${config.paneClass}`).size();

    anecdote.select(`.${config.panesClass}`).style('width', `${100 * count}%`)
}

function initNav(anecdote) {
    const buttons = anecdote.selectAll(`.${config.navClass}`).append('button').classed(config.navButtonClass, true),
        icons = buttons.append('i');

    icons.each(function (d, i) {
        const faClass = (i === 0) ? 'fa-angle-left' : 'fa-angle-right';

<<<<<<< HEAD
        d3.select(this).classed(`fas fa-2x ${faClass}`, true);
    })
=======
        d3.select(this).classed(`fas fa-lg ${faClass}`, true);
    });
>>>>>>> 688759cd... Added mobile swiping on anecdotes.

    buttons.each(function (d, i) {
        const button = d3.select(this),
            prev = (i === 0) ? true : null;

        button.on('click', d => advancePane(anecdote, prev))
    })
}

function initPanes(anecdote) {
    const panes = anecdote.selectAll(`.${config.paneClass}`);

    panes.on('click', function (d, i) {
        const paneCount = anecdote.selectAll(`.${config.paneClass}`).size(),
            src = event.srcElement ? event.srcElement : event.target;

        if (src && src.nodeName === 'A') {
            return;
        }

        i += 1;

        if (i === paneCount) {
            i = 0;
        }

        showPane(anecdote, i);
    });
}

function raiseLinkButton(anecdote) {
    anecdote.select('.anecdote__cta').raise();
}

function advancePane(anecdote, prev) {
    const current = Number(anecdote.attr('data-current')),
        size = anecdote.selectAll(`.${config.paneClass}`).size();

    let newPage = prev ? current - 1 : current + 1;

    if (newPage === size) {
        newPage = 0;
    }

    if (newPage < 0) {
        newPage = size - 1;
    }

    showPane(anecdote, newPage);
}

function buildAnecdote() {
    const anecdote = d3.select(this);
    setWidthForPanes(anecdote);
    addCloseIcon(anecdote);
    showPane(anecdote, 0);
    buildDots(anecdote);
    initNav(anecdote);
    raiseLinkButton(anecdote);
    initPanes(anecdote);
    addPaneNavigation(anecdote);
}

export function anecdoteInit() {
    d3.selectAll(`.${config.anecdoteClass}`).each(buildAnecdote);
    // addKeyboardNavigation();
    d3.selectAll(`button.${config.triggerClass}`).on('click', toggleVisibility);
<<<<<<< HEAD
=======

    shiftLinksIntoFocus();
>>>>>>> 688759cd... Added mobile swiping on anecdotes.
}

anecdoteInit();