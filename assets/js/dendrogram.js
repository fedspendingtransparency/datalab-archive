---
---

function CreateDendro(newData){

  // console.log("before: ",newData);

  newData.forEach((d) => {
    d.Obligation = +d.Obligation;
    d.Unobligated = +d.Unobligated;
  });

  const root = { name: 'Federal Agencies', children: [] };
  const levels = ['Agency', 'Subagency'];

  let maxLabelLength = 0;
  // Misc. variables
  let nodeIterator = 0;
  const duration = 750;

  // size of the diagram
  const viewerWidth = document.body.clientWidth;
  const viewerHeight = 800;

  let svgGroup;

  function zoom() {
    svgGroup.attr('transform', `translate(${d3.event.translate})scale(1)`);
  }

  // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
  const zoomListener = d3.behavior.zoom().scaleExtent([1, 1]).on('zoom', zoom);

  // define the baseSvg, attaching a class for styling and the zoomListener
  const baseSvg = d3.select('#tree-container').append('svg')
        .attr('width', viewerWidth)
        .attr('height', viewerHeight)
        .attr("viewBox", `0 0 ${viewerWidth} ${viewerHeight}`)
        .attr('id', 'svg-dendrogram')
        .attr('class', 'overlay')
        .call(zoomListener);

  // Append a group which holds all nodes and which the zoom Listener can act upon.
  svgGroup = baseSvg.append('g');

  newData.forEach((d) => {
    // Keep this as a reference to the current level
    let depthCursor = root.children;
    // Go down one level at a time
    levels.forEach((property, depth) => {
      // Look to see if a branch has already been created
      let index;
      depthCursor.forEach((child, i) => {
        if (d[property] === child.name) index = i;
      });
      // Add a branch if it isn't there
      if (isNaN(index)) {
        depthCursor.push({ name: d[property], children: [] });
        index = depthCursor.length - 1;
      }
      // Now reference the new child array as we go deeper into the tree
      depthCursor = depthCursor[index].children;
      // This is a leaf, so add the last element to the specified branch
      if (depth === levels.length - 1) {
        depthCursor.push({
          name: d.Title, size: d.Obligation, unob: d.Unobligated, id: d.federal_account_code, date: d.reporting_period_end
        });
      }
    });
  });

  function centerRootNode(source) {
    const scale = zoomListener.scale();
    const x = (-source.y0 * scale) + (viewerWidth / 4);
    const y = (-source.x0 * scale) + (viewerHeight / 2);
    d3.select('g').transition()
      .duration(duration)
      .attr('transform', `translate(${x},${y})scale(${scale})`);
    zoomListener.scale(scale);
    zoomListener.translate([x, y]);
    resetToCenter();
  }

  let tree = d3.layout.tree()
      .size([viewerHeight, viewerWidth]);

  // define a d3 diagonal projection for use by the node paths later on.
  const diagonal = d3.svg.diagonal()
        .projection((d) => [d.y, d.x]);

  // Toggle children.
  function toggle(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    }
    else {
      d.children = d._children;
      d._children = null;
    }
  }

  function toggleAll(d) {
    if (d.children) {
      d.children.forEach(toggleAll);
      toggle(d);
    }
  }

  function update(source) {
    // Compute the new height, function counts total children of root node and sets tree height accordingly.
    // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
    // This makes the layout more consistent.
    const levelWidth = [1];
    const childCount = (level, n) => {
      if (n.children && n.children.length > 0) {
        if (levelWidth.length <= level + 1) levelWidth.push(0);

        levelWidth[level + 1] += n.children.length;
        n.children.forEach((d) => {
          childCount(level + 1, d);
        });
      }
    };
    childCount(0, root);
    const newHeight = d3.max(levelWidth) * 26; // 26 pixels per line
    tree = tree.size([newHeight, viewerWidth]);

    // Compute the new tree layout.
    const nodes = tree.nodes(root).reverse();
    const links = tree.links(nodes);

    // Set widths between levels based on maxLabelLength.
    nodes.forEach((d) => {
      d.y = (d.depth * (maxLabelLength * 2.5)); // maxLabelLength * 10px
      // alternatively to keep a fixed scale one can set a fixed depth per level
      // Normalize for fixed-depth by commenting out below line
      // d.y = (d.depth * 500); //500px per level.
    });

    // Update the nodes
    const node = svgGroup
          .selectAll('g.node')
          .data(nodes, (d) => {
            if (d.id) return d.id;
            nodeIterator += 1;
            d.id = nodeIterator;
            return d.id;
          });

    const formatNumber = d3.format('$,.0f');

    function sumUp(object) {
      let total = 0;
      object._children.forEach((d) => {
        d._children.forEach((dd) => {
          if(isNaN(dd.size)){
            total += 0; 
          } else{
            total += dd.size;
          }
        });
      });
      return formatNumber(total);
    }

    function sumUpLvl2(object) {
      let total = 0;
      object._children.forEach((d) => {
        if(isNaN(d.size)){
          total += 0; 
        } else{
          total += d.size;
        }
      });
      return formatNumber(total);
    }

    function sumUpUnob(object) {
      let total = 0;
      object._children.forEach((d) => {
        d._children.forEach((dd) => {
          if(isNaN(dd.unob)){
            total += 0; 
          } else{
            total += dd.unob;
          }
        });
      });
      return formatNumber(total);
    }

    function sumUpLvl2Unob(object) {
      let total = 0;
      object._children.forEach((d) => {
        if(isNaN(d.unob)){
          total += 0; 
        } else{
          total += d.unob;
        }
      });
      return formatNumber(total);
    }

    function handleMouseOver(d) {
      console.log('d: ',d);
      if (d.depth === 3) {
        window.tooltipModule.draw("#tooltip", d.name, {
          "Total Obligations": formatNumber(d.size),
          "Unobligated Balance": formatNumber(d.unob)
        }, ["Click to visit federal account page", "Federal account page contains FY17-FY19 data"]);
      }
      if (d.depth === 2) {
        window.tooltipModule.draw("#tooltip", `${d.name}, ${d.parent.name}`, {
          "Total Obligations": sumUpLvl2(d),
          "Unobligated Balance": sumUpLvl2Unob(d)
        }, ["Click to view federal accounts"]);
      }
      if (d.depth === 1) {
        window.tooltipModule.draw("#tooltip", d.name, {
          "Total Obligations": sumUp(d),
          "Unobligated Balance": sumUpUnob(d)
        }, ["Click to view agencies"]);
      }
      if (d.depth === 0) {
        window.tooltipModule.draw("#tooltip", "FY17 Federal Agencies");
      }
    }
    function handleMouseOut() {
      window.tooltipModule.remove("#tooltip");
    }
    function handleMouseMove() {
      window.tooltipModule.move("#tooltip");
    }

    // Enter any new nodes at the parent's previous position.
    const nodeEnter = node.enter().append('g')
          .attr('class', 'node')
          .attr('transform', () => `translate(${source.y0},${source.x0})`) // eslint-disable-next-line no-use-before-define
          .on('click', click)
          .on('mouseover', (d) => handleMouseOver(d))
          .on('mouseout', handleMouseOut)
          .on('mousemove', handleMouseMove);

    nodeEnter.append('circle')
      .attr('class', 'nodeCircle')
      .attr('r', 0)
      .style('fill', (d) => (d._children ? 'lightsteelblue' : '#fff'));

    nodeEnter.append('text')
      .attr('x', (d) => (d.children || d._children ? -10 : 10))
      .attr('dy', '.35em')
      .attr('class', 'nodeText')
      .attr('text-anchor', 'start')
      .text((d) => d.name)
      .style('fill-opacity', 0);

    // Update the text to reflect whether node has children or not.
    node.select('text')
      .attr('x', (d) => (d.children || d._children ? -10 : 10))
      .attr('text-anchor', (d) => (d.children || d._children ? 'end' : 'start'))
      .attr('alignment-baseline', (d) => (d.children || d._children ? 'baseline' : 'baseline'))
      .style('font-weight', '900')
      .text((d) =>
            (d.children || d._children ? d.name : d.name)
           );

    // Change the circle fill depending on whether it has children and is collapsed
    node.select('circle.nodeCircle')
      .attr('r', 4.5)
      .style('fill', (d) => (d._children ? 'lightsteelblue' : '#fff'));

    // Transition nodes to their new position.
    const nodeUpdate = node.transition()
          .duration(duration)
          .attr('transform', (d) => `translate(${d.y},${d.x})`);

    // Fade the text in
    nodeUpdate.select('text')
      .style('fill-opacity', 1);

    // Transition exiting nodes to the parent's new position.
    const nodeExit = node.exit().transition()
          .duration(duration)
          .attr('transform', () => `translate(${source.y},${source.x})`)
          .remove();

    nodeExit.select('circle')
      .attr('r', 0);

    nodeExit.select('text')
      .style('fill-opacity', 0);

    // Update the links¦
    const link = svgGroup.selectAll('path.link')
          .data(links, (d) => d.target.id);

    // Enter any new links at the parent's previous position.
    link.enter().insert('path', 'g')
      .attr('class', 'link')
      .attr('d', () => {
        const o = {
          x: source.x0,
          y: source.y0
        };
        return diagonal({
          source: o,
          target: o
        });
      });

    // Transition links to their new position.
    link.transition()
      .duration(duration)
      .attr('d', diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
      .duration(duration)
      .attr('d', () => {
        const o = {
          x: source.x,
          y: source.y
        };
        return diagonal({
          source: o,
          target: o
        });
      })
      .remove();

    // Stash the old positions for transition.
    nodes.forEach((d) => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  function change() {
    zoomListener.scale(1);
    toggleAll(root);
    toggle(root);
    update(root);
    centerRootNode(root);
    zoomListener.scale(1);
  }

  d3.select('#button1').on('click', change);

  // A recursive helper function for performing some setup by walking through all nodes
  function visit(parent, visitFn, childrenFn) {
    if (!parent) return;

    visitFn(parent);

    const children = childrenFn(parent);
    if (children) {
      const count = children.length;
      for (let i = 0; i < count; i++) {
        visit(children[i], visitFn, childrenFn);
      }
    }
  }

  // Call visit function to establish maxLabelLength
  visit(root, (d) => {
    maxLabelLength = Math.max(d.name.length, maxLabelLength);
  }, (d) => (d.children && d.children.length > 0 ? d.children : null));

  // sort the tree according to the node names & numerically for obligation amounts
  function sortTree() {
    tree.sort((a, b) => {
      if (a.depth === 3 && b.depth === 3) {
        return b.size - a.size;
      }
      else if (a.depth < 3 && b.depth < 3) {
        return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
      }
      return 0;
    });
  }

  // Sort the tree initially incase the JSON isn't in a sorted order.
  sortTree();

  function expand(d) {
    if (d._children) {
      d.children = d._children;
      d.children.forEach(expand);
      d._children = null;
    }
  }

  // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.
  function centerNode(source) {
    if (source.depth === 2) {
      const scale = zoomListener.scale();
      let x = -source.y0;
      let y = -source.x0;
      x = (x * scale) + (viewerWidth / 4.2);
      y = (y * scale) + (viewerHeight / 2);
      d3.select('g').transition()
        .duration(duration)
        .attr('transform', `translate(${x},${y})scale(${scale})`);
      zoomListener.scale(scale);
      zoomListener.translate([x, y]);
    }
    else {
      const scale = zoomListener.scale();
      let x = -source.y0;
      let y = -source.x0;
      x = (x * scale) + (viewerWidth / 3);
      y = (y * scale) + (viewerHeight / 2);
      d3.select('g').transition()
        .duration(duration)
        .attr('transform', `translate(${x},${y})scale(${scale})`);
      zoomListener.scale(scale);
      zoomListener.translate([x, y]);
    }
  }

  // Toggle children function

  function toggleChildren(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    }
    else if (d._children) {
      d.children = d._children;
      d._children = null;
    }
    return d;
  }

  function getLink(d) {
    const baseUrl = ('https://beta.usaspending.gov/#/federal_account/');
    const acctNum = (d.id);
    window.open(baseUrl + acctNum);
  }

  // Toggle children on click.
  function click(d) {
    if (d.depth === 1 && d._children === null) {
      d = toggleChildren(d);
      update(d);
      centerNode(d);
    }
    else if (d.depth === 3) {
      update(d);
      getLink(d);
    }
    else if (d.depth === 2) {
      d = toggleChildren(d);
      update(d);
      centerNode(d);
    }
    else if (d.depth === 1 && d._children !== null && d._children.length === 1) {
      d._children.forEach(expand);
      d = toggleChildren(d);
      update(d);
      centerNode(d.children[0]);
    }
    else {
      d = toggleChildren(d);
      update(d);
      centerNode(d);
    }

    window.Analytics.event({
      category: 'Federal Account Explorer - Click Node',
      action: d.name
    });

    resetToCenter();
  }

  root.x0 = viewerHeight / 2;
  root.y0 = 0;

  // Layout the tree initially and center on the root node.
  toggleAll(root);
  toggle(root);
  update(root);
  centerRootNode(root);

  function resetToCenter() {
    var theSvg = document.getElementById("svg-dendrogram");

    theSvg.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true, clientX: 1, clientY: 1, view: window }));
    theSvg.dispatchEvent(new MouseEvent("mousemove", { bubbles: true, cancelable: true, clientX: 2, clientY: 2, view: window }));
    theSvg.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true, clientX: 2, clientY: 2, view: window }));
  }
}

d3.csv('/data-lab-data/accounts_obligations_link_update_FY17.csv', (dendroData17) =>{
  d3.csv('/data-lab-data/accounts_obligations_link_update_FY18.csv', (dendroData18) =>{
    d3.csv('/data-lab-data/accounts_obligations_link_update_FY19Q3.csv', (dendroData19) =>{
      console.log(dendroData19);

      CreateDendro(dendroData19.filter((d) => d.reporting_period_end === '2018-12-31'));

      $(document).ready(() => {
        let data = [];
        $("input[type='radio']").change(() => {
          const FiscalYear = $('input[name="FiscalYear"]:checked').val();
          // console.log('Fiscal Year: ',FiscalYear);
          if (FiscalYear === 'fy17') {
            // console.log('2017 selected')
            d3.selectAll('#svg-dendrogram').remove();
            const Quarter = $('input[name="Quarter"]:checked').val();
            if (Quarter == '12-31'){
              const viewerWidth = document.body.clientWidth;
              const viewerHeight = 300;
              d3.select('#tree-container').append('html')
                .attr('width', viewerWidth)
                .attr('height', viewerHeight)
                .attr("viewBox", `0 0 ${viewerWidth} ${viewerHeight}`)
                .attr('id', 'svg-dendrogram')
                .attr('class', 'overlay')
                .html("<h1>Sorry, our current schema didn't exist for FY17 Q1</h1>");
            }else if (Quarter == '03-31'){
              // console.log('FY17 Q2 selected')
              data = dendroData17.filter((d) => d.reporting_period_end == '2017-03-31');
              CreateDendro(data);
            }else if (Quarter == '06-30'){
              // console.log('FY17 Q3 selected')
              data = dendroData17.filter((d) => d.reporting_period_end == '2017-06-30');
              CreateDendro(data);
            }else {
              // console.log('FY17 Q4 selected')
              data = dendroData17.filter((d) => d.reporting_period_end == '2017-09-30');
              CreateDendro(data);
            }
          }else if (FiscalYear === 'fy18'){
            // console.log('2018 selected')
            d3.selectAll('#svg-dendrogram').remove();
            const Quarter = $('input[name="Quarter"]:checked').val();
            if (Quarter == '12-31'){
              // console.log('FY18 Q1 selected')
              data = dendroData18.filter((d) => d.reporting_period_end == '2017-12-31');
              CreateDendro(data);
            }else if (Quarter == '03-31'){
              // console.log('FY18 Q2 selected')
              data = dendroData18.filter((d) => d.reporting_period_end == '2018-03-31');
              CreateDendro(data);
            }else if (Quarter == '06-30'){
              // console.log('FY18 Q3 selected')
              data = dendroData18.filter((d) => d.reporting_period_end == '2018-06-30');
              CreateDendro(data);
            }else {
              // console.log('FY18 Q4 selected')
              data = dendroData18.filter((d) => d.reporting_period_end == '2018-06-30');
              CreateDendro(data);
            }             
          }else if (FiscalYear === 'fy19'){
            d3.selectAll('#svg-dendrogram').remove();
            const Quarter = $('input[name="Quarter"]:checked').val();
            if (Quarter == '12-31'){
              // console.log('FY19 Q1 selected')
              data = dendroData19.filter((d) => d.reporting_period_end == '2018-12-31');
              CreateDendro(data);
            } else if (Quarter == '03-31') {
	      // FY19Q2 Selected
	      data = dendroData19.filter((d) => d.reporting_period_end == '2019-03-31');
	      CreateDendro(data);
	    } else if (Quarter == '06-30') {
	      // FY19Q3 Selected
	      data = dendroData19.filter((d) => d.reporting_period_end == '2019-06-30');
	      CreateDendro(data);
	    } else {
              const viewerWidth = document.body.clientWidth;
              const viewerHeight = 300;
              d3.select('#tree-container').append('html')
                .attr('width', viewerWidth)
                .attr('height', viewerHeight)
                .attr("viewBox", `0 0 ${viewerWidth} ${viewerHeight}`)
                .attr('id', 'svg-dendrogram')
                .attr('class', 'overlay')
                .html('<h1>We will update the Federal Account Explorer as soon as data is available</h1>');   
            }
          }
        });
      });
    });
  });
});
