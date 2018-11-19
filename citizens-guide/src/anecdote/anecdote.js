import {select, selectAll} from 'd3-selection';


const d3 = {select, selectAll},
    closeButtonClass = 'info-box__close';
let dotLength = 0;

function addCloseIcon(anecdote) {
    const closeButton = anecdote.insert('button').classed(closeButtonClass, true).lower(),
        closeIcon = closeButton.append('i').classed('fas fa-times', true);
}

function setActiveDot(anecdote, index){
    const dotContainer = anecdote.selectAll('.anecdote__dot');
    const activeDotClass = 'anecdote__dot--active';
    dotContainer.classed(activeDotClass, false);
    dotContainer.filter((d,i) => i === index).classed(activeDotClass,true);
}

function updateDotText(anecdote, dotLength, i){
    const dotText = anecdote.select('.anecdote__dots--text');
    dotText.html(`${i} of ${dotLength}`);
}

function buildDots(anecdote){
    dotLength = anecdote.selectAll('.anecdote__pane').size();
    const dotContainer = anecdote.select('.anecdote__contents').insert('div', '.anecdote__cta').classed('anecdote__dots--container', true);
    const dots = dotContainer.append('div').classed('anecdote__dots', true);
    const dotArray = new Array(dotLength);
    dots.selectAll('.anecdote__dot')
        .data(dotArray)
        .enter()
        .append('div')
        .classed('anecdote__dot', true)
        .on('click', function(d,i){
            setActiveDot(anecdote, i);
            showPane(anecdote, i);
            updateDotText(anecdote, dotLength, i + 1);
        });
    dotContainer.append('div')
        .classed('anecdote__dots--text', true);
}

function setPaneHeight(anecdote) {
    const panes = anecdote.selectAll('.anecdote__pane');
    let maxPaneHeight = 0;
    let paneHeightStr = '';

    panes.each(function () {
        const myHeight = this.getBoundingClientRect().height;
        maxPaneHeight = (myHeight > maxPaneHeight) ? myHeight : maxPaneHeight;
    });

    paneHeightStr = Math.ceil(maxPaneHeight) + 'px';

    anecdote.select('.anecdote__panes')
        .attr('style', `height: ${paneHeightStr}`);
}

function showPane(anecdote, index){
    const panes = anecdote.selectAll('.anecdote__pane');
    const activePaneClass = 'anecdote__pane--active';


    panes.classed(activePaneClass, false);
    panes.filter((d, i) => {return i === index}).classed(activePaneClass, true);
}

function toggleContent(anecdote){
  const anecdoteContents = anecdote.select('.anecdote__contents');
  const activeInd = anecdoteContents.classed('anecdote__content--active');
  anecdoteContents.classed('anecdote__content--active', !activeInd);
  if(!activeInd) {
      setPaneHeight(anecdote);
      anecdote.select('.' + closeButtonClass)
          .on('click', function () {
              toggleContent(anecdote);
          });
  }
}

function buildTrigger(anecdote){
    const button = anecdote.append("button").classed('link-button',true).text("What does this mean to me?");
    button.lower();
    button.on("click", function(){
        toggleContent(anecdote);
    });
}

function wrapContents(anecdote){
    const html = anecdote.node().innerHTML;
    let content;

    anecdote.selectAll('*').remove();
    content = anecdote.append("div").classed("anecdote__contents", true);
    content.html(html);
}

function buildAnecdote(){
    const anecdote = d3.select(this);
    addCloseIcon(anecdote);
    wrapContents(anecdote);
    buildTrigger(anecdote);
    showPane(anecdote, 0);
    buildDots(anecdote);
    setActiveDot(anecdote, 0);
    updateDotText(anecdote, dotLength, 1)
}

function init(){
    d3.selectAll('.anecdote').each(buildAnecdote);
}

init();