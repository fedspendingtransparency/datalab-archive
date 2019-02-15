import initTabs from '../../components/tabs/tabs';

const tabContainer = document.getElementById('surplusComponent'),
    config = {
        tabs: [
            {
                name: 'Surplus',
                selector: '.deficit--surplus__surplus'
            },
            {
                name: 'Balance Budget',
                selector: '.deficit--surplus__balanced'
            },
            {
                name: 'Deficit',
                selector: '.deficit--surplus__deficit'
            }],
        selectedTabIdx : 0
    };

initTabs(tabContainer, config);