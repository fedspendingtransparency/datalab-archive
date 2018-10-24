/*
  --------------------------------------------------------------------------------------------------------------------
  *   declarations
  *--------------------------------------------------------------------------------------------------------------------
  */
const graphContainer = document.getElementById('categoriesChartContainer');
const panelBack = document.getElementById('categories_panel_back_btn');
const panel = document.getElementById('categoriesPanel');
const panelChartContainer = document.getElementById('investmentCategories_panel_chart');
const pageTurnRt = document.getElementById('cat_rt_pg_turn');
const pageTurnLt = document.getElementById('cat_lt_pg_turn');
const pageSize = 10;

var currPage = 1;
var categoriesData;

/*
  --------------------------------------------------------------------------------------------------------------------
  *   functions
  *--------------------------------------------------------------------------------------------------------------------
  */
const categoriesSpendingFormat = (num) => {

  // Nine Zeroes for Billions
  return Math.abs(Number(num)) >= 1.0e+9

    ? `$${round((Math.abs(Number(num)) / 1.0e+9), 1)} Billion`
  // Six Zeroes for Millions 
    : round((Math.abs(Number(num)) >= 1.0e+6), 1)
  
    ? `$${round((Math.abs(Number(num)) / 1.0e+6), 1)} Million`
  // Three Zeroes for Thousands
    : round((Math.abs(Number(num)) >= 1.0e+3), 1)
  
    ? `$${round((Math.abs(Number(num)) / 1.0e+3), 1)} Thousand`
  
    : Math.abs(Number(num));

};

/*
  purpose: given an array, page siz , and number
  this function returns a subset array of the given page number
*/
const paginate = (array, page_size, page_number) => {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
};

/*
  purpose: rounds a number to a given percentage
*/
const round = (value, precision) => {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

/*
  purporse : hide given element
*/
const hideElement = (element) => {
  element.style.minWidth = '0px';
  $(element).animate({width: 'toggle'});
};

var pscs = {};

d3.json("/data-lab-data/pscskv.json", function(data) {
  pscs = data;
});

/*
  purporse : creates graph for infomation passed 
  and append the graph to the passed in element
*/
const drawGraph = (container, nodeData, size, clickable) => {
  let svgIcon = pscs[nodeData.name];

  let nodeDiv = document.createElement("div");
  nodeDiv.style.cursor = 'pointer';

  var svg = d3.select(nodeDiv)
      .append("svg")
      .style("width", `${size.width}px`)
      .style("height", `${size.height}px`)
      .append("g");

  svg.append("g")
    .attr("class", "slices");
  svg.append("g")
    .attr("class", "labels");
  svg.append("g")
    .attr("class", "lines");

  svg.append("svg:image")
    .attr('x', -25)
    .attr('y', -55)
    .attr('width', 50)
    .attr('height', 50)
    .attr("xlink:href", "/images/psc-svgs/" + svgIcon);

  if (clickable) {

    nodeDiv.className = 'categoriesParent';

    nodeDiv.onclick = () => {
      if(panel.style.display === 'none' || panel.style.display === "") {
        
        while (panelChartContainer.firstChild) {
          panelChartContainer.removeChild(panelChartContainer.firstChild);
        }

        drawGraph(panelChartContainer, nodeData, {height:300, width:300}, false);
        panel.style.minWidth = '350px';
        panel.style.display = 'inline-block';
      }
    };
  }

  var width = size.width,
      height = size.height,
      radius = Math.min(width, height) / 2;

  var pie = d3.layout.pie()
      .sort(null)
      .value(function (d) {
        return d.value;
      });

  //set Inner and out arc redius of the donut chart
  var arc = d3.svg.arc()
      .outerRadius(radius * 0.85)
      .innerRadius(radius * 0.75  );

  svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var key = function (d) { return d.data.label; };

  var color = d3.scale.ordinal()
      .domain(["", " "])
      .range(["#C3DBB5", "#F6F6F6"]);

  change([
    { label:"", value:nodeData.percentage },
    { label:" ", value: 1-nodeData.percentage }
  ]);

  function change(data) {

    /*------- PIE SLICES -------*/
    var slice = svg.select(".slices").selectAll("path.slice")
        .data(pie(data), key);

    slice.enter()
      .insert("path")
      .style("fill", function (d) { return color(d.data.label); })
      .attr("class", "slice");

    slice
      .transition().duration(1000)
      .attrTween("d", function (d) {
        this._current = this._current || d;
        var interpolate = d3.interpolate(this._current, d);
        this._current = interpolate(0);
        return function (t) {
          return arc(interpolate(t));
        };
      });

    slice.exit()
      .remove();

    /*---------- Legend ----------------------*/
    let legendRectSize=20;
    let legendSpacing=7;
    let legendHeight=legendRectSize+legendSpacing;

    var legend=svg.selectAll('.legend')
        .data(data)
        .enter()
        .append('g')
        .attr({
          class:'legend',
          transform:function(d,i){
            //Just a calculation for x & y position
            return 'translate(-80,' + ((i*legendHeight)+10) + ')';
          }
        });

    legend.append('text')
      .attr({
        x:30,
        y:15
      })
      .text(d => {
        return (d.label === "" ? `${categoriesSpendingFormat(nodeData.total)}` 
                : (nodeData.percentage*100 >= 0.1 ? `${round(nodeData.percentage*100,1)}%` : '0.1% >' ));
      })
      .attr("class", d => {
        return (d.label === "" ? 'catDollarClass' : 'catPercentageClass');
      })
      .attr("x", d => {
        return (d.label === "" ? '20' : '55');
      });

  };

  let title = document.createElement('p');
  title.innerText = nodeData.name;
  
  nodeDiv.appendChild(title);  

  container.appendChild(nodeDiv);
};

/*
  purpose: take a page direction and moves the categories to the new page
*/
const turrnPage = (turnDirection) => {

  currPage = currPage + turnDirection;    //updated current page

  clearCharts(graphContainer);          //clear all charts before appending next page

  paginate(categoriesData, pageSize, currPage)        //redraw graphs
    .forEach( n => { drawGraph(graphContainer, n, {height:200, width:200}, true); });  

};

/*
  purpose clear all chart from categories contanier
*/
const clearCharts = (container) => {
  
  let children = [];

  container.childNodes.forEach(child => {
    if (child.className === 'categoriesParent') {
      //container.removeChild(child)
      children.push(child);
    }
  });

  children.forEach(child => {
    container.removeChild(child);
  });
};

/*
  --------------------------------------------------------------------------------------------------------------------
  *   EVENT LISTENERS
  *--------------------------------------------------------------------------------------------------------------------
  */
panelBack.onclick = () => { hideElement(panel) };

pageTurnRt.onclick = () => { turrnPage(1) };

pageTurnLt.onclick = () => { turrnPage(-1) };



/*
  --------------------------------------------------------------------------------------------------------------------
  *   Main Method
  *--------------------------------------------------------------------------------------------------------------------
  */
d3.csv("/data-lab-data/Edu_PSC.csv", (data) => {    //read in education data to data files

  categoriesData = data.reduce((a, b) => {     //reduce data to categories data sum(obligation) of each parent
    
    if (! (a.reduce((accumBool, node) => { 
      if(b.parent_name === node.name) { 
        node.total += parseFloat(b.obligation);
        accumBool = true;
      }  
      return accumBool;
    }, false))){
      a.push({
        name: b.parent_name,
        total: parseFloat(b.obligation),
        abbrv: b.parent

      });
    } 
    
    a[0].total += parseFloat(b.obligation);             //add on to total
    return a;
  },[{total:0}]);

  var total = categoriesData[0].total;

  categoriesData.shift();

  categoriesData.forEach(n  => {n.percentage = (n.total / total)});
  categoriesData.sort((a, b) => { return b.percentage - a.percentage});
  
  paginate(categoriesData, pageSize, currPage)
    .forEach( n => { drawGraph(graphContainer, n, {height:200, width:200}, true); });             //draw donut chart in charts container

});
