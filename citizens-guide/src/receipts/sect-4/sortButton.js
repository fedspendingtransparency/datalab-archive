import './sortButton.scss';
import { establishContainer } from '../../utils';
import { refreshData, setSortFunction } from './chart';
import { select } from 'd3-selection';
import { addCaretIcon } from './iconGenerators';

const d3 = { select }

let parentDiv, incomeButton;
const sortOptions = [
    {
        label: 'Income',
        dataField: 'income_usd'
    },
    {
        label: 'GDP',
        dataField: 'income_gdp'
    }
];

function addSortButtons(){
    let svg;
    for(let i = 0, il = sortOptions.length; i < il; i++){
        let curButton;
        function addButton(sortOption){
            curButton = parentDiv.append('button')
            .classed('sort-button',true)
            .on('click',function(event){
                const obj = d3.select(this);
                let sortDirection = 'desc';
                if(!obj.select('svg').empty()){
                    if(obj.classed('up')){
                        obj.classed('up',false).classed('down',true);
                        svg = obj.select('svg');
                        addCaretIcon(svg, 'down');
                    } else {
                        obj.classed('down',false).classed('up',true);
                        svg = obj.select('svg');
                        addCaretIcon(svg, 'up');
                        sortDirection = 'asc';
                    }
                } else {
                    parentDiv.selectAll('svg').remove();
                            svg = obj.append('svg')
                            .attr('width', 20)
                            .attr('height', 20);

                            addCaretIcon(svg);
                }
                
                setSortFunction(
                    createSort(sortOption.dataField, sortDirection)
                );
                
                refreshData();
            });
            curButton.node().innerText = sortOptions[i].label;
        }
        addButton(sortOptions[i]);
        if(i === 0){
            incomeButton = curButton;
        }
    }
}

function createSort(sortField, sortDirection){
    if(sortDirection === 'asc'){
        return function(a,b){
            return a[sortField] - b[sortField];
        }
    }
    return function(a,b){
        return b[sortField] - a[sortField]
    }
}

export function setDefaultSort(){
    setSortFunction(
        createSort(sortOptions[0].dataField, 'desc')
    );

    const svg = incomeButton.append('svg')
        .attr('width', 20)
        .attr('height', 20);

        addCaretIcon(svg);
}

export function initSortButtons(){
    const svg = establishContainer();

    parentDiv = document.createElement('div');

    svg.node().parentNode.insertBefore(parentDiv, svg.node());

    parentDiv = d3.select(parentDiv).classed('sort-button__div', true);
    addSortButtons();
    setDefaultSort();
}