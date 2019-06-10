/*
  --------------------------------------------------------------------------------------------------------------------
*   Local declarations
*--------------------------------------------------------------------------------------------------------------------
*/
const bubbleChartContainer = document.getElementById('agency-bubbleChart');
const color = ['#C98D7E','#D18787','#A097D6','#A38FCA','#C9BB7F','#B7C97E','#C99E7F','#C9AC7F','#7EC9C1',
    '#7FC994','#C57EC8','#80B1C9','#C6C97F', '#C9AC7F', '#7FC9A3', '#A38FCA','#C9BB7F','#B7C97E','#C99E7F','#C9AC7F','#7EC9C1',
    '#7FC994','#C57EC8', '#C98D7E','#D18787','#A097D6','#A38FCA','#C9BB7F','#B7C97E','#C99E7F','#C9AC7F','#7EC9C1',
    '#7FC994','#C57EC8','#80B1C9','#C6C97F', '#C9AC7F', '#7FC9A3', '#A38FCA','#C9BB7F','#B7C97E','#C99E7F','#C9AC7F','#7EC9C1',
    '#7FC994','#C57EC8'];

const bTableBtn = $('#bubble-table-trigger');
const bTableContainer = $('#bubbleTableContainer');
const bChartContainer = $('#bubbleChartContainer');
const bChartBtn = $('#bubble-chart-trigger');


let node, circle, focus, view, bubbleSvg, recipient, root;
const widthPercentage = .7;
let maxHeight = document.getElementById("agency-investments__content").clientHeight;
let calculatedWidth = window.innerWidth * widthPercentage;
let bubbleWidth = calculatedWidth < maxHeight ? calculatedWidth : maxHeight;
const margin = 20;
let diameter = bubbleWidth;
let _chartState;

const pack = d3.layout.pack()
    .padding(2)
    .size([diameter - margin, diameter - margin])
    .value(function(d) {
        if(d.size > 0) {
            return d.size;
        }
    });
/*
  --------------------------------------------------------------------------------------------------------------------
*   functions
*--------------------------------------------------------------------------------------------------------------------
*/

function setChartState (d) {
    _chartState = d;
}

function getChartState () {
    return _chartState;
}

/* Set color for sub-agency circles */
function circleFill (d) {
    if (d['color']) {
        return d.color;
    }
};

/* Store the current state */

/* Calculate text font size for bubbles before and after zoom */
function calculateTextFontSize (d) {
    let radius = 0;
    let multiplier = 0;


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
        // the multiplier should change here depending on how zoomed it
        // console.log(calculatedWidth / d.r);
        // console.log(d.r / calculatedWidth);
        // if(d.parent) {
        //     console.log(d.r/d.parent.r);
        // } else {
        //     console.log("no parent");
        // }

        //calculate the font size and store it in object for future
        d.fontsize = multiplier * radius / d.computed + "px";
        return d.fontsize;
    }
};

function drawBubbleChart(root) {
    const targetWidth = bubbleWidth;
    
    bubble.chartHeight = targetWidth;

    focus = root;
    nodes = pack.nodes(root);

    bubbleSvg = d3.select(bubbleChartContainer).append("svg")
        .attr("id", "chart")
        .attr("width", targetWidth)
        .attr("height", bubble.chartHeight)
        .append("g")
        .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

    circle = bubbleSvg.selectAll("circle")
        .data(nodes)
        .enter().append("circle")
        .attr("class", function(d) {
            return d.parent ? d.children ? "node" : "node--leaf" : "node--root";
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
        })
        .on("mouseover", function(d) {
            handleMouseOver(d);
        })
        .on("mouseout", handleMouseOut);

    circle.append("svg:title")
        .text(function(d) {
            return d.name;
        })

    bubbleSvg.selectAll("text")
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

    node = bubbleSvg.selectAll("circle,text");

}

function handleMouseOver(d) {
    const circleName = "circle." + d.name;
    const circleEl = bubbleSvg.select(circleName);

    if (d.parent && d.parent.name !== "flare") {
        window.tooltipModule.draw("#tooltip", d.name, {
            "Total Contribution": numeral(d.size).format('$0,0.00')
        });
    }
}

function handleMouseOut() {
    window.tooltipModule.remove("#tooltip");
}

// Zoom into a specific circle
function zoom(d) {
    const focus0 = focus;
    focus = d;

    setChartState(d);

    handleMouseOut();

    if (!d.parent || d.parent.name === "flare") {
        const transition = d3.transition()
            .duration(d3.event && d3.event.altKey ? 7500 : 750)
            .tween("zoom", function(d) {
                var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
                return function(t) {
                    zoomTo(i(t));
                };
            });

        transition.selectAll(".node--root")
            .style("fill-opacity", function() {
                return focus.name === "flare" ? 1 : 0;
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
function createBubbleTable(data) {
    d3.csv("/data-lab-data/CU_bubble_chart_table.csv", function(err, data) {
        if (err) {
            return err;
        }
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
            deferRender: true,
            scrollCollapse: true,
            scroller: true
        });
    });
};

/*
--------------------------------------------------------------------------------------------------------------------
*   Event Handlers
*--------------------------------------------------------------------------------------------------------------------
*/

bChartBtn.click(function(){
    bTableContainer.hide(); // show
    bChartContainer.show(); // hide bubble chart
});

// table button toggle click
bTableBtn.click(function(){
    bTableContainer.show(); // show
    bChartContainer.hide(); // hide bubble chart
});

// Redraw based on the new size whenever the browser window is resized.
window.addEventListener("resize", function() {
    // put this in a set time out
    $("#agency-bubbleChart").empty();
    if (root) {
        maxHeight = document.getElementById("agency-investments__content").clientHeight;
        calculatedWidth = window.innerWidth * widthPercentage;
        diameter = bubbleWidth = calculatedWidth < maxHeight ? calculatedWidth : maxHeight;
        drawBubbleChart(root);
        // check the state here and replay
        const chartState = getChartState();

        if(chartState) {
            zoom(chartState);
        } else {
            zoomTo([root.x, root.y, root.r * 2 + margin]);
        }

    }
});

/*
--------------------------------------------------------------------------------------------------------------------
*   Main Method
*--------------------------------------------------------------------------------------------------------------------
*/
d3.csv("/data-lab-data/CU_bubble_chart.csv", function(err, data) {
    if (err) { return err; }

    root = transformData(data);

    drawBubbleChart(root);

    d3.select(bubbleChartContainer)
        .on("click", function() {
            zoom(root);
        });

    zoomTo([root.x, root.y, root.r * 2 + margin]);

    createBubbleTable(data); // has to match csv columns!

    if (!bubble.setSearchData) {
      console.warn('bubble method not available')
    } else {
      bubble.setSearchData(root);
      bubble.zoom = zoom;
    }

});

/*
-----------------------------------------------------------------------------------------------------------------
* Function to Transform Data (needs to be refactored)
*----------------------------------------------------------------------------------------------------------------
 */

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
