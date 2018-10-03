import { selectAll } from 'd3-selection';

const d3 = { selectAll },
    tour = location.search.indexOf('tour') !== -1,
    factBox = d3.selectAll('.fact-box');