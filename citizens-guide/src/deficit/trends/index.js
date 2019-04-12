import initTabs from '../../components/tabs/tabs';

const tabContainer = '#surplusComponent',
    config = {
        tabs: [
            {
                name: 'Surplus',
                selector: '.deficit--surplus__surplus'
            },
            {
                name: 'Balanced Budget',
                selector: '.deficit--surplus__balanced'
            },
            {
                name: 'Deficit',
                selector: '.deficit--surplus__deficit'
            }],
        selectedTabIdx : 0
    };

initTabs(tabContainer, config);