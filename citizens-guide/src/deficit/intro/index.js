import colors from '../../colors.scss';
import { compareDeficit } from './compareDeficit';
import { compareDebt } from './compareDebt';
import { initDeficitDots } from './deficitDots';

(function init(){
    const config = {
        revenueAmount: 3300000000000,
        spendingAmount: 4100000000000,
        debtBalance: 20800000000000,
        deficitAmount: 779000000000,
        compareString: 'revenue',
        revenueColor: colors.colorPrimary,
        spendingColor: colors.colorSpendingPrimary,
        deficitColor: colors.colorDeficitPrimary
    };

    initDeficitDots(config);
    compareDeficit(config);
    compareDebt(config);
})();
