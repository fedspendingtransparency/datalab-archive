/*
  --------------------------------------------------------------------------------------------------------------------
*   Local Declarations
*--------------------------------------------------------------------------------------------------------------------
*/
const contractsGraphBar = document.getElementById('totalInvestments_graph_Contracts');
const grantsGraphBar = document.getElementById('totalInvestments_graph_Grants');
const studentAidGraphBar = document.getElementById('totalInvestments_graph_StudentAid');
const totalinvestmentBar = document.getElementById('totalInvesmentDollarAmount');

const contractsSpan = document.getElementById('totalInvestments_breakdown_contracts_total');
const grantsSpan = document.getElementById('totalInvestments_breakdown_grants_total');
const studentaidSpan = document.getElementById('totalInvestments_breakdown_studentAid_total');

/**
 * JS Event Handling for Scrolling!
 */
document.addEventListener('aos:in', function (data) {
    console.log('aos in!' + data);
    setTimeout(function () {
        $('.Rectangle-3').hide();
    }, 3000);
});

/*
purpose: utility to return 0 if a number cannot be parsed
 or the parsed float number
*/
const float = num => {
    return (parseFloat(num) > 0 ? parseFloat(num) : 0);
};

Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

/*
 --------------------------------------------------------------------------------------------------------------------
*   Main Method
*--------------------------------------------------------------------------------------------------------------------
*/
d3.csv("/data-lab-data/EDU_v2_base_data.csv", (eduCsv) => {    //read in education data to data files

    let totalContracts = float(eduCsv.reduce((a, b) => {     //caluculate total contract money given to all universities sum(contracts recived)
        return a + float(b.contracts_received);
    }, 0)
        .toFixed(2));                                        // 2 decimal places

    let totalGrants = float(eduCsv.reduce((a, b) => {     //caluculate total grants money  sum(grants_received + research_grants_received)
        return a + float(b.grants_received) + float(b.research_grants_received);
    }, 0)
        .toFixed(2));

    let totalStudentAid = float(eduCsv.reduce((a, b) => {     //caluculate total grants money  sum(grants_received + research_grants_received)
        return a +
            float(b.subsidized17) +
            float(b.unsubsidized17) +
            float(b.parent17) +
            float(b.grad_plus17) +
            float(b.grants17) +
            float(b.perkins17) +
            float(b.FSEOG17) +
            float(b.FWS17);

    }, 0)
        .toFixed(2));



    let totalInvestment = totalContracts + totalGrants + totalStudentAid;

    let contractSpendingPercent = parseInt(((totalContracts / totalInvestment) * 100));
    let grantsSpendingPercent = parseInt(((totalGrants / totalInvestment) * 100));
    let studentAidSpendingPercent = parseInt(((totalStudentAid / totalInvestment) * 100));

    //console.log('aid spending');
    //console.log(totalStudentAid);
    //console.log('grant spending' + totalGrants);
    //console.log('percents:' + "Contracts" + contractSpendingPercent + "\n" + "Grants" + grantsSpendingPercent + "\n"
    //   + "Aid" + studentAidSpendingPercent);

    //updatin bar graph to reflect percentages
    contractsGraphBar.style.width = `${contractSpendingPercent}%`;
    grantsGraphBar.style.width = `${grantsSpendingPercent}%`;
    studentAidGraphBar.style.width = `${studentAidSpendingPercent}%`;

    totalinvestmentBar.innerHTML = `$${totalInvestment.formatMoney(2)}`;

    /** 
     * Continuing where he left off...
     */
    contractsSpan.innerHTML = `$${totalContracts.formatMoney(2)}`;
    grantsSpan.innerHTML = `$${totalGrants.formatMoney(2)}`;
    studentaidSpan.innerHTML = `$${totalStudentAid.formatMoney(2)}`; 

});


