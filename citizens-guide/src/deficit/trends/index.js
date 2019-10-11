import initTabs from '../../components/tabs/tabs';

const tabContainer = '#surplusComponent',
    config = {
        accessibilityAttributes: {
            title: '2019 Federal Deficit Trends over Time',
            desc: 'In 2000 and 2001 the federal government experienced surpluses of $237 billion and $127 billion respectively. Since 2001, the federal government has not had another surplus. While the annual deficit did not exceed $500 billion from 2002 to 2008, the annual deficit increased substantially in response to the Great Recession with annual deficits exceeding $1 trillion from 2009 to 2012. The annual deficit declined from 2012 to 2015, falling below the $500 billion mark in 2015. Since then, however, the annual deficit has grown each year to $984 billion in 2019.'
        },
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