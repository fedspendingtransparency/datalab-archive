//define 

//set page variables to local variables
const contractsGranphBar = document.getElementById('totalInvestments_graph_Contracts');
const grantsGraphBar = document.getElementById('totalInvestments_graph_Grants');
const studentAidGraphBar = document.getElementById('totalInvestments_graph_StudentAid');
const totalinvestmentPar = document.getElementById('totalInvesmentDollarAmount');

/*
purpose: utility to return 0 if a number cannot be parsed
*/
const float = num => {                                          
    return (parseFloat(num) > 0 ? parseFloat(num) : 0);
}

Number.prototype.formatMoney = function(c, d, t){
    var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };


d3.csv("/data-lab-data/EDU_v2_base_data.csv", (eduCsv) => {    //read in education data to data files

    var totalContracts = float(eduCsv.reduce((a, b) => {     //caluculate total contract money given to all universities sum(contracts recived)
        return a + float(b.contracts_received);
    },0)
    .toFixed(2));                                        // 2 decimal places

    var totalGrants = float(eduCsv.reduce((a, b) => {     //caluculate total grants money  sum(grants_received + research_grants_received)
        return a + float(b.grants_received) + float(b.research_grants_received);
    },0)
    .toFixed(2));

    var totalStudentAid = float(eduCsv.reduce((a, b) => {     //caluculate total grants money  sum(grants_received + research_grants_received)
        return a + 
        float(b.subsidized17) + 
        float(b.unsubsidized17) +
        float(b.parent17) +
        float(b.grad_plus17) + 
        float(b.grants17) + 
        float(b.perkins17) + 
        float(b.FSEOG17) + 
        float(b.FWS17);
      
    },0)
    .toFixed(2));

    var totalInvestment = totalContracts + totalGrants + totalStudentAid;

    var contractSpendingPercent =  parseInt(((totalContracts/totalInvestment)*100));
    var grantsSpendingPercent = parseInt(((totalGrants/totalInvestment)*100));
    var studentAidSpendingPercent = parseInt(((totalStudentAid/totalInvestment)*100));

    contractsGranphBar.style.width = `${contractSpendingPercent}%`;
    grantsGraphBar.style.width = `${grantsSpendingPercent}%`;
    studentAidGraphBar.style.width = `${studentAidSpendingPercent}%`;

    totalinvestmentPar.innerHTML = `$${totalInvestment.formatMoney(2)}`;


    console.log(totalContracts)
    console.log(eduCsv);
});


