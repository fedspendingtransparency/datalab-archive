/*
  --------------------------------------------------------------------------------------------------------------------
*   declarations
*--------------------------------------------------------------------------------------------------------------------
*/
const graphContainer = document.getElementById('categoriesChartContainer');
const panelBack = document.getElementById('categories_panel_back_btn');
const panel = document.getElementById('categoriesPanel');
const panelChartContainer = document.getElementById('investmentCategories_panel_chart');


/*
purporse : hide given element
*/
const hideElement = (element) => {
    element.style.display = 'none';
}

/*
purporse : creates graph for infomation passed 
and append the graph to the passed in element
*/
const drawGraph = (container, data, size, clickable) => {

    let nodeDiv = document.createElement("div");

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

if (clickable) {
    nodeDiv.onclick = () => {
       if(panel.style.display === 'none' || panel.style.display === "") {
        
        while (panelChartContainer.firstChild) {
            panelChartContainer.removeChild(panelChartContainer.firstChild);
        }

        drawGraph(panelChartContainer, data, {height:300, width:300}, false)
           panel.style.display = 'inline-block';
       }
   }
}

   nodeDiv.style.cursor = 'pointer';


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
       { label:"", value:data.percentage },
       { label:" ", value: 1-data.percentage }
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
           })

       slice.exit()
           .remove();
   };

   let title = document.createElement('p');
   title.innerText = data.name;
   
   nodeDiv.appendChild(title);  

   container.appendChild(nodeDiv)
}

/*
  --------------------------------------------------------------------------------------------------------------------
*   EVENT LISTENERS
*--------------------------------------------------------------------------------------------------------------------
*/
panelBack.onclick = () => { hideElement(panel) };



/*
  --------------------------------------------------------------------------------------------------------------------
*   Main Method
*--------------------------------------------------------------------------------------------------------------------
*/
d3.csv("/data-lab-data/Edu_PSC.csv", (data) => {    //read in education data to data files

    var categoriesData = data.reduce((a, b) => {     //reduce data to categories data sum(obligation) of each parent
    
        if (! (a.reduce((accumBool, node) => { 
            if(b.parent_name === node.name) { 
                node.total += parseFloat(b.obligation);
                accumBool = true   
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
    },[{total:0}])

    var total = categoriesData[0].total

    categoriesData.shift();

    categoriesData.forEach(n  => {n.percentage = (n.total/total)})
    categoriesData.sort((a, b) => { return b.percentage - a.percentage})
    
drawGraph(graphContainer, categoriesData[0], {height:200, width:200}, true);              //draw donut chart in charts container

});