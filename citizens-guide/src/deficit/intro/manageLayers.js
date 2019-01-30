import { select, selectAll } from 'd3-selection';
import 'd3-transition';
import { layers } from './createLayers';
import { translator } from '../../utils';

const d3 = { select, selectAll },
    duration = 1000;

function revealSidebar() {
    d3.selectAll('.sidebar').classed('sidebar--hidden', null);
}

function toggleLayer() {
    const id = d3.select(this).attr('data-trigger-id');

    if (id === 'deficit') {
        subsequentRevenueSpendingCompare()
    } else {
        initialDebtCompare();
    }
}

function initialDebtCompare() {
    layers.revenue.transition()
        .duration(duration)
        .attr('opacity', 0)
        .ease();

    layers.spending.transition()
        .duration(duration)
        .attr('opacity', 0)
        .ease();

    layers.debt.select('.legend').attr('opacity', 0)

    layers.deficit.select('.legend').transition()
        .duration(duration)
        .attr('opacity', 0)
        .ease();

    layers.debt.transition()
        .delay(duration * 1.5)
        .duration(duration * 2)
        .attr('transform', translator(0, 0))
        .attr('opacity', 1)
        .on('end', function () {
            layers.debt.select('.legend').transition().duration(duration).attr('opacity', 1)
        })
        .ease();

    setTimeout(deficitTransform, duration, 'debt')
}

function deficitTransform(state) {
    const deficitDots = (state === 'debt') ? 0 : 1,
        debtDots = (state === 'debt') ? 1 : 0,
        y = (state === 'debt') ? 0 : Number(layers.deficit.attr('data-y'));

    layers.deficit.transition()
        .duration(duration)
        .attr('transform', translator(0, y));

    layers.deficitCompareDots.transition()
        .duration(duration)
        .attr('opacity', deficitDots);

    layers.debtCompareDots.transition()
        .duration(duration)
        .attr('opacity', debtDots);
}

function subsequentRevenueSpendingCompare() {
    layers.debt.transition().duration(duration).attr('opacity', 0);

    layers.revenue.transition()
        .delay(duration)
        .duration(duration)
        .attr('opacity', 1);

    layers.spending.transition()
        .delay(duration)
        .duration(duration)
        .attr('opacity', 1);

    layers.deficit.select('.legend').transition()
        .delay(duration)
        .duration(duration)
        .attr('opacity', 1);

    setTimeout(deficitTransform, duration / 2);
}

function initialRevenueSpendingCompare() {
    const step2 = duration * 1.5,
        step3 = step2 * 2,
        sidebar = step3 + duration;

    layers.revenue.transition()
        .duration(duration)
        .attr('opacity', 1);

    layers.spending.transition()
        .delay(step2)
        .duration(duration)
        .attr('opacity', 1);

    layers.spending.selectAll('rect').transition()
        .delay(step3)
        .duration(duration * 1.5)
        .attr('opacity', 0)

    layers.deficit.transition()
        .delay(step3)
        .duration(duration * 1.5)
        .attr('opacity', 1)

    setTimeout(revealSidebar, sidebar)
}

export function layersInit() {
    d3.selectAll('.facts__trigger').on('click', toggleLayer);

    initialRevenueSpendingCompare();
}