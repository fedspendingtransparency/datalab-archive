import {select, selectAll, event} from 'd3-selection';

const d3 = {select, selectAll, event},
    defaultAnecdoteProperties = {
        anecdoteClass : 'anecdote',
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

function addInfoIcon(anecdote){
    let infoIconClass = defaultAnecdoteProperties.infoIcon.class,
        infoIconSrc = defaultAnecdoteProperties.infoIcon.src,
        infoIconAlt = defaultAnecdoteProperties.infoIcon.alt;
    if(desiredAnecdoteProperties.infoIcon){
        infoIconClass = desiredAnecdoteProperties.infoIcon.class || infoIconClass;
        infoIconSrc = desiredAnecdoteProperties.infoIcon.src || infoIconSrc;
        infoIconAlt = desiredAnecdoteProperties.infoIcon.alt || infoIconAlt;
    }

    const icon = anecdote.insert('div').classed(infoIconClass, true).lower()
        .attr('alt', infoIconAlt);
}

function addCloseIcon(anecdote) {
    const closeButtonClass = desiredAnecdoteProperties.closeButtonClass || defaultAnecdoteProperties.closeButtonClass,
        closeButtonIconClass = desiredAnecdoteProperties.closeButtonIconClass || defaultAnecdoteProperties.closeButtonIconClass;

    const closeButton = anecdote.insert('button').classed(closeButtonClass, true).lower(),
        closeIcon = closeButton.append('i').classed(closeButtonIconClass, true);
}

function updateSlide(anecdote, i){
    setActiveDot(anecdote, i);
    showPane(anecdote, i);
    updateDotText(anecdote, i + 1)
}

function setActiveDot(anecdote, index){
    const dotClass = desiredAnecdoteProperties.dotClass || defaultAnecdoteProperties.dotClass,
     dotClassActive = desiredAnecdoteProperties.dotClassActive || defaultAnecdoteProperties.dotClassActive;

    const dotContainer = anecdote.selectAll(`.${dotClass}`);
    const activeDotClass = dotClassActive;
    dotContainer.classed(activeDotClass, false);
    dotContainer.filter((d,i) => i === index).classed(activeDotClass,true);
}

function updateDotText(anecdote, i){
    const dotTextClass = desiredAnecdoteProperties.dotTextClass || defaultAnecdoteProperties.dotTextClass,
        paneClass = desiredAnecdoteProperties.paneClass || defaultAnecdoteProperties.paneClass,
        dotLength = anecdote.selectAll(`.${paneClass}`).size();

    const dotText = anecdote.select(`.${dotTextClass}`);
    dotText.html(`${i} of ${dotLength}`);
}

function buildDots(anecdote){
    const contentsClass = desiredAnecdoteProperties.contentsClass || defaultAnecdoteProperties.contentsClass,
        dotsClass = desiredAnecdoteProperties.dotsClass || defaultAnecdoteProperties.dotsClass,
        dotsContainerClass = desiredAnecdoteProperties.dotsContainerClass || defaultAnecdoteProperties.dotsContainerClass,
        dotClass = desiredAnecdoteProperties.dotClass || defaultAnecdoteProperties.dotClass,
        dotTextClass = desiredAnecdoteProperties.dotTextClass || defaultAnecdoteProperties.dotTextClass,
        linkCtaContainerClass = desiredAnecdoteProperties.linkCtaContainerClass || defaultAnecdoteProperties.linkCtaContainerClass,
        paneClass = desiredAnecdoteProperties.paneClass || defaultAnecdoteProperties.paneClass;

    const dotLength = anecdote.selectAll(`.${paneClass}`).size();
    const dotContainer = anecdote.select(`.${contentsClass}`).insert('div', `.${linkCtaContainerClass}`).classed(dotsContainerClass, true);
    const dots = dotContainer.append('div').classed(dotsClass, true);
    const dotArray = new Array(dotLength);
    dots.selectAll(`.${dotClass}`)
        .data(dotArray)
        .enter()
        .append('div')
        .classed(dotClass, true)
        .on('click', function(d,i){
            updateSlide(anecdote, i);
        });
    dotContainer.append('div')
        .classed(dotTextClass, true);
}

function buildPaneClick(anecdote){
    const paneClass = desiredAnecdoteProperties.paneClass || defaultAnecdoteProperties.paneClass,
        panesClass = desiredAnecdoteProperties.panesClass || defaultAnecdoteProperties.panesClass,
        paneClassActive = desiredAnecdoteProperties.paneClassActive || defaultAnecdoteProperties.paneClassActive;

    const paneContainer = anecdote.select(`.${panesClass}`),
        panes = paneContainer.selectAll(`.${paneClass}`),
        paneLength = panes.size();


    paneContainer.on('click', function(){
        const curTarget = event.srcElement ? event.srcElement : event.target;
        // Don't do any animations if someone clicks on a hyperlink.
        if(curTarget && curTarget.nodeName === 'A') {
            return;
        }

        let idx = 0;
        panes.each(function(d, i){
            if(d3.select(this).classed(paneClassActive)){
                idx = i + 1;
            }
        });
        if(idx >= paneLength){
            idx = 0;
        }
        updateSlide(anecdote, idx);
    });
}

function getPaneHeight(currentPane) {
    if(currentPane && currentPane.node()){
        return Math.ceil(currentPane.node().getBoundingClientRect().height);
    }
    return 0;
}

function setPaneHeight(anecdote, currentPane){
    const panesClass = desiredAnecdoteProperties.panesClass || defaultAnecdoteProperties.panesClass,
        paneHeightStr = getPaneHeight(currentPane) + 'px';

    anecdote.select(`.${panesClass}`)
        .attr('style', `height: ${paneHeightStr}`);
}

function getActivePane(anecdote){
    const paneClass = desiredAnecdoteProperties.paneClass || defaultAnecdoteProperties.paneClass,
        paneClassActive = desiredAnecdoteProperties.paneClassActive || defaultAnecdoteProperties.paneClassActive,
        activePane = anecdote.selectAll(`.${paneClass}.${paneClassActive}`);

    return activePane;
}

function showPane(anecdote, index){
    const paneClass = desiredAnecdoteProperties.paneClass || defaultAnecdoteProperties.paneClass,
        paneClassActive = desiredAnecdoteProperties.paneClassActive || defaultAnecdoteProperties.paneClassActive;

    const panes = anecdote.selectAll(`.${paneClass}`);
    panes.classed(paneClassActive, false);
    const curPane = panes.filter((d, i) => {return i === index});
    curPane.classed(paneClassActive, true);
    setPaneHeight(anecdote, curPane);
}

function toggleContent(anecdote){
  const closeButtonClass = desiredAnecdoteProperties.closeButtonClass || defaultAnecdoteProperties.closeButtonClass,
    contentsClass = desiredAnecdoteProperties.contentsClass || defaultAnecdoteProperties.contentsClass,
    contentsClassActive = desiredAnecdoteProperties.contentsClassActive || defaultAnecdoteProperties.contentsClassActive;

  const anecdoteContents = anecdote.select(`.${contentsClass}`);
  const activeInd = anecdoteContents.classed(contentsClassActive);
  anecdoteContents.classed(contentsClassActive, !activeInd);
  if(!activeInd) {
      const activePane = getActivePane(anecdote);
      setPaneHeight(anecdote, activePane);
      buildPaneClick(anecdote);
      anecdote.select('.' + closeButtonClass)
          .on('click', function () {
              toggleContent(anecdote);
          });
  }
}

function buildTrigger(anecdote){
    const linkButtonContainerClass = desiredAnecdoteProperties.linkButtonContainerClass || defaultAnecdoteProperties.linkButtonContainerClass,
        linkButtonIconClass = desiredAnecdoteProperties.linkButtonIconClass || defaultAnecdoteProperties.linkButtonIconClass,
        linkButtonClass = desiredAnecdoteProperties.linkButtonClass || defaultAnecdoteProperties.linkButtonClass;
    let linkButtonText = desiredAnecdoteProperties.linkButtonText || defaultAnecdoteProperties.linkButtonText;

    if(!linkButtonText){
        const existingButtonTextDiv = anecdote.select('.anecdote__button--text');
        if(existingButtonTextDiv._groups[0][0]){
            linkButtonText = existingButtonTextDiv.text();
        }
    }

    const anecdoteButtonSection = anecdote.append('div').classed(linkButtonContainerClass,true),
        anecdoteIconSection = anecdoteButtonSection.append('div').classed(linkButtonIconClass,true),
        button = anecdoteButtonSection.append("button").classed(linkButtonClass,true).text(linkButtonText);
    anecdoteButtonSection.lower();
    anecdoteButtonSection.on("click", function(){
        toggleContent(anecdote);
    });
}

function wrapContents(anecdote){
    const contentsClass = desiredAnecdoteProperties.contentsClass || defaultAnecdoteProperties.contentsClass;
    const html = anecdote.node().innerHTML;
    let content;

    anecdote.selectAll('*').remove();
    content = anecdote.append("div").classed(contentsClass, true);
    content.html(html);
}

function buildAnecdote(){
    const anecdote = d3.select(this);
    addInfoIcon(anecdote);
    addCloseIcon(anecdote);
    wrapContents(anecdote);
    buildTrigger(anecdote);
    showPane(anecdote, 0);
    buildDots(anecdote);
    setActiveDot(anecdote, 0);
    updateDotText(anecdote, 1);
}

export function anecdoteInit(_desiredAnecdoteProperties){
    if(_desiredAnecdoteProperties){
        desiredAnecdoteProperties = _desiredAnecdoteProperties;
    }

    const anecdoteClass = desiredAnecdoteProperties.anecdoteClass || defaultAnecdoteProperties.anecdoteClass;
    d3.selectAll(`.${anecdoteClass}`).each(buildAnecdote);
}

anecdoteInit();