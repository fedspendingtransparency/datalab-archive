import { select } from 'd3-selection';
import { establishContainer, translator, getElementBox } from '../../utils';
import { trendView } from './chart';
import colors from '../../colors.scss';

const d3 = { select },
    svg = establishContainer(),
    h = 600,
    zoomThresholds = {
        'Department of Agriculture': 8500000000,
        'Department of Commerce': 1800000000,
        'Department of Education': 5000000000,
        'Department of Energy': 2000000000,
        'Department of Defense - Military Programs': 80000000000,
        'Department of Health and Human Services': 40000000000,
        'Department of Homeland Security': 8000000000,
        'Department of Justice': 5000000000,
        'Department of Labor': 5000000000,
        'Department of State': 5000000000,
        'Department of the Treasury': 50000000000,
        'Department of Transportation': 5000000000,
        'Department of Veterans Affairs': 5000000000,
        'Education, Training, Employment, and Social Services","Education, Training, Employment, and Social Services': 20000000000,
        'Employment and General Retirement': 7000000000,
        'Excise Taxes': 1000000000,
        'Judicial Branch': 1000000000,
        'Legislative Branch': 200000000,
        'National Defense': 60000000000,
        'Health': 10000000000,
        'National Aeronautics and Space Administration': 1,
        'Net Interest': 50000000000,
        'Office of Personnel Management': 4000000000,
        'Social Security Administration': 100000000000,
        'Transportation': 25000000000,
        'Unemployment Insurance': 30000000,
        'Veterans Benefits and Services': 20000000000
    };

let pane,
    callout,
    chartContainer,
    container;

function buildDString(yPos, _height) {

    const radius = 6,
        triangle = { height: 15, width: 18 },
        width = 530,
        defaultHeight = h + 100,
        height = (_height > defaultHeight) ? _height : defaultHeight,
        leg = height - yPos;

    return `M 0,${radius}
        q 0,-${radius} ${radius},-${radius} 
        l ${width},0
        q ${radius},0 ${radius},${radius}
        l 0,${height}
        q 0,${radius} -${radius},${radius}
        l -${width},0
        q -${radius},0 -${radius},-${radius}
        l 0,-${leg}
        l -${triangle.width},-${triangle.height}
        l ${triangle.width},-${triangle.height}
        Z`;
}

function modifyRect(sourceY, height) {
    const dString = buildDString(sourceY, height);

    if (callout) {
        callout.transition()
            .duration(500)
            .attr('d', dString)
            .ease();
    } else {
        callout = container.append('path')
            .attr('stroke', '#ddd')
            .attr('stroke-width', 1)
            .attr('fill', 'white')
            .attr('d', dString)
            .attr('filter', 'url(#drop1)')

        callout.lower()
    }
}

function init(d, sourceY, containerTranslate) {
    const config = {
        height: h,
        noDrilldown: true
    };
    
    let title;

    container.selectAll('.detail-pane-title')
        .remove();

    title = container.append('text')
        .classed('detail-pane-title', true)
        .attr('fill', colors.textColorHeading)
        .text(d.name)
        .attr('font-size', 20)
        .attr('font-weight', 600)        
        .attr('x', 20)
        .attr('y', 30);

    title.append('tspan')
        .text('View and analyze subcategory level trends')
        .attr('font-size', 14)
        .attr('font-weight', 300)
        .attr('x', 20)
        .attr('dy', 18);

    config.zoomThreshold = zoomThresholds[d.officialName];

    if (!config.zoomThreshold) {
        config.noZoom = true;
    }

    trendView(d.subcategories, chartContainer, config, containerTranslate);

    chartContainer.transition()
        .duration(300)
        .attr('opacity', 1)

    modifyRect(Math.round(sourceY), 750);
}

export function destroyDetailPane() {
    if (!chartContainer) {
        return;
    }

    chartContainer.transition()
        .duration(300)
        .attr('opacity', 0)
        .on('end', function () {
            if (container) {
                container.remove();
            }
            container = null;
            callout = null;
        })
}

export function showDetail(data, sourceY) {
    // Since the transform on the original <g> changes and has a 1 second delay, this messes with calculations later on.
    // So, we'll capture the final translate value and pass this along to be captured properly by the functions that follow.
    const containerTranslate = 640;
    if (container) {
        chartContainer.transition()
            .duration(300)
            .attr('opacity', 0)
            .on('end', function () {
                chartContainer.selectAll('*').remove();
                init(data, sourceY, containerTranslate);
            })
    } else {
        container = svg.append('g')
            .attr('transform', translator(400, 5))
            .attr('opacity', 0);
            
        container.transition()
            .duration(1000)
            .attr('transform', translator(containerTranslate, 5))
            .attr('opacity', 1);
                        
        chartContainer = container.append('g').attr('opacity', 0).attr('transform', translator(10, 40));

        init(data, sourceY, containerTranslate);
    }
}