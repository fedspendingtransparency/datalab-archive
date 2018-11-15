import {select, selectAll} from 'd3-selection';


const d3 = {select, selectAll};

function toggleContent(anecdote){
  const anecdotePanes = anecdote.select('anecdote__panes');
  const anecdoteContents = anecdote.select('.anecdote__contents');
  const activeInd = anecdoteContents.classed('anecdote__content--active');
  anecdotePanes.classed('anecdote__pane', !activeInd);
  anecdoteContents.classed('anecdote__content--active', !activeInd);
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
    let anecdotePane;
    let content;

    anecdote.selectAll('*').remove();
    anecdotePane = anecdote.append("div").classed("anecdote__panes", true);
    content = anecdotePane.append("div").classed("anecdote__contents", true);
    content.html(html);
}

function buildAnecdote(){
    const anecdote = d3.select(this);
    wrapContents(anecdote);
    buildTrigger(anecdote);
}

function init(){
    d3.selectAll('.anecdote').each(buildAnecdote);
}

init();