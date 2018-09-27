import { select } from 'd3-selection';
import { tourButton } from '../tourButton/tourButton';
import { transition } from 'd3-transition';
import './intro.scss';

const d3 = { select },
    main = document.getElementsByTagName("main")[0];

tourButton(main, 'gdp.html', 'Income and GDP', true);
