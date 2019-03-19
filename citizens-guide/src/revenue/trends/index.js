import { establishContainer, initDropShadow } from '../../utils';
import { trendView } from './trendView';
import { trendData } from './trendData';

const data = trendData(),
    accessibilityAttrs = {
        title: 'Graph representing U.S. revenue trend lines for the past 5 years.',
        desc: 'U.S. revenue trend lines for the past 5 years broken down by category and further broken down at the sub-category level.'
    };

const svg = establishContainer(780, null, accessibilityAttrs);
initDropShadow();

trendView(data, svg, {
    width: 500
});