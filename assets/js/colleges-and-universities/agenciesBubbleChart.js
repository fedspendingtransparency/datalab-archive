/*
  --------------------------------------------------------------------------------------------------------------------
*   Local declarations
*--------------------------------------------------------------------------------------------------------------------
*/
const bubbleChartContainer = document.getElementById('bubbleChartContainer');
const color = ['#C98D7E','#D18787','#A097D6','#A38FCA','#C9BB7F','#B7C97E','#C99E7F','#C9AC7F','#7EC9C1',
    '#7FC994','#C57EC8','#80B1C9','#C6C97F', '#C9AC7F', '#7FC9A3', '#A38FCA','#C9BB7F','#B7C97E','#C99E7F','#C9AC7F','#7EC9C1',
    '#7FC994','#C57EC8', '#C98D7E','#D18787','#A097D6','#A38FCA','#C9BB7F','#B7C97E','#C99E7F','#C9AC7F','#7EC9C1',
    '#7FC994','#C57EC8','#80B1C9','#C6C97F', '#C9AC7F', '#7FC9A3', '#A38FCA','#C9BB7F','#B7C97E','#C99E7F','#C9AC7F','#7EC9C1',
    '#7FC994','#C57EC8'];

const bTableBtn = $('#bubble-table-trigger');
const bTableContainer = $('#bubbleTableContainer');
const bChartContainer = $('#bubbleChartContainer');
const bChartBtn = $('#bubble-chart-trigger');

/*
  --------------------------------------------------------------------------------------------------------------------
*   functions
*--------------------------------------------------------------------------------------------------------------------
*/

let node, circle, focus, view;
const margin = 20,
    diameter = 700;

const circleFill = function(d) {
    if (d['color']) {
        return d.color;
    } else if (d.parent && d.parent.name === "flare") {
        return '#f3f3f3';
    } else {
        return '#f8f8f8';
    }
};

const calculateTextFontSize = function(d) {
    var id = d3.select(this).text();
    var radius = 0;
    var multiplier = 0;


    if (d.fontsize){
        //if fontsize is already calculated use that.
        return d.fontsize;
    }

    if (!d.computed) {
        //if computed not present get & store the getComputedTextLength() of the text field
        d.computed = this.getComputedTextLength();
    }

    if(d.computed != 0){
        //if computed is not 0 then get the visual radius of DOM
        //if radius present in DOM use that
        radius = d.r ? d.r : 0;
        multiplier = d.depth === 2 ? 60 : 30;

        //calculate the font size and store it in object for future
        d.fontsize = multiplier * radius / d.computed + "px";
        return d.fontsize;
    }
};

const pack = d3.layout.pack()
    .padding(2)
    .size([diameter - margin, diameter - margin])
    .value(function(d) {
        if(d.size > 0) {
            return d.size;
        }
    })


function drawBubbleChart(root) {
    const width = 700;
    const height = 700;

    const aspect = width / height;
    const targetWidth = width;
    
    bubble.chartHeight = targetWidth / aspect;

    focus = root;
    nodes = pack.nodes(root);

    const svg = d3.select(bubbleChartContainer).append("svg")
        .attr("id", "chart")
        .attr("width", targetWidth)
        .attr("height", bubble.chartHeight)
        .append("g")
        .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

    circle = svg.selectAll("circle")
        .data(nodes)
        .enter().append("circle")
        .attr("class", function(d) {
            return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root";
        })
        .attr("class", function(d) {
            return d.name;
        })
        .style("fill", circleFill)
        .attr("r", function(d) {
            if (d.r > 0) {
                return d.r;
            }
        })
        .attr("id", function(d) {
            return d.name;
        })
        .on("click", function(d) {
            if (focus !== d) zoom(d), d3.event.stopPropagation();
        });

    circle.append("svg:title")
        .text(function(d) {
            return d.name;
        })

    svg.selectAll("text")
        .data(nodes)
        .enter().append("text")
        .attr("font-family", "Source Sans Pro")
        .attr("class", "label")
        .style("fill-opacity", function(d) {
            return d.parent === root ? 1 : 0;
        })
        .style("display", function(d) {
            return d.parent === root ? null : "none";
        })
        .text(function(d) {
            return d.name;
        })
        .style("font-size", calculateTextFontSize)
        .attr("text-anchor", "middle")
        .on("click", function(d) {
            if (focus !== d) zoom(d), d3.event.stopPropagation();
        });

    node = svg.selectAll("circle,text");

}

function transformData(data) {
    let result = _.groupBy(data, 'agency');
    var i = 0;
    let tempRoot = {
        "name": "flare",
        "children": []
    };

    // Re-structure data
    for(agency in result) {
        result[agency] = _.groupBy(result[agency], 'subagency');

        tempRoot.children.push({"name": agency, "children": []});

        for(subagency in result[agency]) {
            result[agency][subagency] = _.groupBy(result[agency][subagency], 'Recipient');

            tempRoot.children[i].children.push({"name": subagency, "children": [], "color": null, "size": 0});

            var rsum;
            for (recipient in result[agency][subagency]) {
                rsum = 0;
                // start calculating size
                for (var r = 0; r < result[agency][subagency][recipient].length; r++) {
                    rsum += parseInt(result[agency][subagency][recipient][r].obligation);
                }

                for (var j = 0; j < tempRoot.children[i].children.length; j++) {
                    tempRoot.children[i].children[j].children.push({"name": recipient, "size": rsum});
                }
            }
        }

        i++;
    }

    recipient = result;

    // sum the subagencies obligations
    for (var i = 0; i < tempRoot.children.length; i++) {
        for (var j = 0; j < tempRoot.children[i].children.length; j++) {
            for (var k = 0; k < tempRoot.children[i].children[j].children.length; k++) {
                tempRoot.children[i].children[j].size += parseInt(tempRoot.children[i].children[j].children[k].size);
                tempRoot.children[i].children[j].children[k].name = null;

            }

            for (var k = 0; k < tempRoot.children[i].children[j].children.length; k++) {
                if(tempRoot.children[i].children[j].children[k] &&
                    !tempRoot.children[i].children[j].children[k].name) {
                    delete tempRoot.children[i].children[j].children[k];
                }
            }

            delete tempRoot.children[i].children[j].children;

        }
    }

    // add color
    for (var i = 0; i < tempRoot.children.length; i++) {
        for (var j = 0; j < tempRoot.children[i].children.length; j++) {
            tempRoot.children[i].children[j].color = color[i];
        }
    }

    return tempRoot;
}

// Zoom into a specific circle
// CALL THIS FUNCTION ON SEARCH
// Parameter is a specific node 
function zoom(d) {
    const focus0 = focus;
    focus = d;

    if (!d.parent ||d.parent.name === "flare") {
        const transition = d3.transition()
            .duration(d3.event.altKey ? 7500 : 750)
            .tween("zoom", function(d) {
                var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
                return function(t) {
                    zoomTo(i(t));
                };
            });

        transition.selectAll("text.label")
            .style("fill-opacity", function(d) {
                return d.parent === focus ? 1 : 0;
            })
            .each("start", function(d) {
                if (d.parent === focus) {
                    this.style.display = "inline";
                } else {
                    this.style.display="none";
                }
            })
            .each("end", function(d) {
                if (d.parent !== focus) {
                    this.style.display = "none";
                } else {
                    this.style.display="inline";
                }
            });

        setTimeout(function() {
            d3.selectAll("text.label").filter(function(d) {
                return d.parent === focus || this.style.display === "inline";
            }).style("font-size", calculateTextFontSize);
        }, 10);

    } else {
        bubble.activateDetail(d)
    }
}

function zoomTo(v) {
    var k = diameter / v[2];
    view = v;
    node.attr("transform", function(d) {
        return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")";
    });
    circle.attr("r", function(d) {
        return d.r * k;
    });
}


/**
   Make a table, a bubble table ;;;;
**/
function createBubbleTable() {
  d3.csv('data-lab-data/CU_bubble_chart.csv', function(err, data) {
    if (err) { return err; }

    let table = d3.select('#bubbleTableContainer').append('table')
        .attr('id', 'bubbletable');

    let titles = ['Recipient', 'Agency', 'SubAgency', 'Family', 'Type', 'Obligation'];

    let headers = table.append('thead').append('tr')
        .selectAll('th')
        .data(titles).enter()
        .append('th')
        .text(function (d) {
          return d;
        });

    // datatable start
    let dTable = $('#bubbletable').dataTable({
      data: data,
      columns: [
	{"data": 'Recipient'},
	{"data": 'agency'},
	{"data": 'family'},
	{"data": 'obligation'},
	{"data": 'subagency'},
	{"data": 'type'},
      ],
      deferRender:    true,
      scrollCollapse: true,
      scroller:       true});
  }); // end d3 function
};


bChartBtn.click(function(){
    bTableContainer.hide(); // show
    bChartContainer.show(); // hide bubble chart
});

/*
--------------------------------------------------------------------------------------------------------------------
*   Main Method
*--------------------------------------------------------------------------------------------------------------------
*/
d3.csv("/data-lab-data/CU_bubble_chart.csv", function(data) {
    let counter = 0;
    const root = transformData(data);

    drawBubbleChart(root);

    d3.select(bubbleChartContainer)
        .on("click", function() {
            zoom(root);
        });

    zoomTo([root.x, root.y, root.r * 2 + margin]);

    // table button toggle click
    bTableBtn.click(function(){
        counter++;
        bTableContainer.show(); // show
        bChartContainer.hide(); // hide bubble chart
        if (counter == 1) {
            createBubbleTable(); // has to match csv columns!
        }
    });


    createBubbleTable(); // has to match csv columns!


    if (!bubble.setSearchData) {
      console.warn('bubble method not available')
    } else {
      bubble.setSearchData(root);
      bubble.zoom = zoom;
    }

});
