import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { chartWidth } from "./widthManager";
import { dotConstants, dotsPerRow } from "./dotConstants";
import { translator } from '../../utils';

const stateManager = {},
    layers = {},
    duration = 500,
    idMap = {
        gdp: '#gdp-facts',
        revenue: '#revenue-facts'
    },
    sectionActive = 'facts__section--active',
    buttonActive = 'facts__trigger--active',
    d3 = { select, selectAll, transition };

let gdpHeight, originalHeight;

function setLayerOpacity(id, active) {
    layers[id].transition()
        .duration(duration)
        .attr('opacity', function () {
            return active ? 1 : 0;
        });
}

function handleGdpLayer(reset) {
    const x = reset ? 0 : chartWidth * 0.5 - (chartWidth * 0.6 / 2),
        scale = reset ? 1 : 0.6,
        stepTwoOpacity = reset ? 0 : 1,
        mainContainer = d3.select('.main-container');

    if (reset && !mainContainer.classed('gdp-active', !reset)) {
        return;
    }

    mainContainer.classed('gdp-active', !reset);
    
    mainContainer.transition()
        .duration(2000)
        .attr('transform', translator(x, 30) +  ' scale(' + scale + ')')
        .ease();

    d3.selectAll('.gdp-step-two').transition()
        .delay(1000)
        .duration(1500)
        .attr('opacity', stepTwoOpacity)
        .ease();
}

function toggleFacts() {
    const button = d3.select(this),
        desktop = (document.documentElement.clientWidth > 959),
        id = button.attr('data-trigger-id'),
        targetSection = d3.select(idMap[id]),
        wasPreviouslyActive = button.classed(buttonActive);

    d3.selectAll('.facts__trigger').classed(buttonActive, null);
    d3.selectAll('.facts__section').classed(sectionActive, null);

    setLayerOpacity(Object.keys(layers).filter(k => k != id)[0]);

    if (wasPreviouslyActive) {
        setLayerOpacity(id)
    } else {
        button.classed(buttonActive, true);
        targetSection.classed(sectionActive, true);
        setLayerOpacity(id, true);
    }

    resizeSvg((id === 'gdp' && !wasPreviouslyActive));

    if (id === 'gdp' && !wasPreviouslyActive && desktop) {
        handleGdpLayer();
    } else if (desktop) {
        handleGdpLayer(true);
    }
 }

function resizeSvg(gdp) {
    const h = gdp ? gdpHeight : originalHeight;

    d3.select('svg.main').transition()
        .duration(500)
        .attr('height', h + 50);
}

export function generateOverlay(count, container, className) {
    const rows = Math.floor(count / dotsPerRow),
        remainder = count % dotsPerRow,
        spacing = dotConstants.offset.y - (dotConstants.radius * 2),
        mainRectHeight = (rows * dotConstants.offset.y) - spacing / 2,
        secondaryRectHeight = (dotConstants.radius * 2) + spacing / 2,
        overlayHeight = mainRectHeight + secondaryRectHeight,
        rectColor = '#ccc';

    let overlayLayer = container.append('g')
        .attr('data-rect-height', overlayHeight)
        .classed(className, true);

    overlayLayer.attr('opacity', 0);

    overlayLayer.append('rect')
        .attr('width', dotsPerRow * dotConstants.offset.x)
        .attr('height', mainRectHeight)
        .attr('fill', rectColor)
        .attr('opacity', 0.8);

    overlayLayer.append('rect')
        .attr('width', remainder * dotConstants.offset.x)
        .attr('y', mainRectHeight)
        .attr('height', secondaryRectHeight)
        .attr('fill', rectColor)
        .attr('opacity', 0.8)

    return overlayLayer;
}

export function registerLayer(id, layer, n) {
    layers[id] = layer;

    if (n) {
        gdpHeight = n * 0.6;
    } else if (!originalHeight) {
        originalHeight = d3.select('g.spending-dots').node().getBoundingClientRect().height;
    }
}

export function resetForResize() {
    d3.selectAll('.sidebar').classed('sidebar--hidden', true);
    Object.keys(layers).forEach(setLayerOpacity);
    d3.selectAll('.facts__trigger').classed(buttonActive, null);
    d3.selectAll('.facts__section').classed(sectionActive, null);
}

export function revealCompare() {
    setTimeout(() => {
        d3.selectAll('.sidebar')
            .classed('sidebar--hidden', null);
    }, 500)
}

d3.selectAll('.facts__trigger').on('click', toggleFacts);