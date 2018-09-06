import './sortButton.scss';
import { establishContainer } from '../../utils';
import { refreshData, setSortFunction } from './chart';
import { select } from 'd3-selection';
import { addCaretIcon, adjustCaretIcon } from './iconGenerators';

const d3 = { select }

let parentDiv, incomeButton;
const sortOptions = [
    {
        label: 'Income',
        dataField: 'receipts'
    },
    {
        label: 'GDP',
        dataField: 'receipts_gdp'
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
                        adjustCaretIcon(svg, 'down');
                    } else {
                        obj.classed('down',false).classed('up',true);
                        svg = obj.select('svg');
                        adjustCaretIcon(svg, 'up');
                        sortDirection = 'asc';
                    }
                } else {
                    parentDiv.selectAll('svg').remove();
                            svg = obj.append('svg')
                            .attr('width', 20)
                            .attr('height', 20);

                            addCaretIcon(svg);
                }
                setSortFunction(function(a,b){
                    if(sortDirection === 'asc'){
                        return a[sortOption.dataField] - b[sortOption.dataField];
                    }
                    return b[sortOption.dataField] - a[sortOption.dataField];
                });
                
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

export function setDefaultSort(){
    setSortFunction(function(a,b){
        return b[sortOptions[0].dataField] - a[sortOptions[0].dataField];
    });

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