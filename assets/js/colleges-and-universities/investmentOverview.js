//const contractsGraphBar = $('#contracts-bar');
//const grantsGraphBar = $('#grants-bar');
//const studentAidGraphBar = $('#studentAid-bar');
//const totalInvestmetnBar = $('#totalInvestment');

const contracts = document.getElementById('contracts-bar');
const grants = document.getElementById('grants-bar');
const aid = document.getElementById('studentAid-bar');
const totalinvestment = document.getElementById('investment-bar');


const float = num => {                                          
    return (parseFloat(num) > 0 ? parseFloat(num) : 0);
};

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

// Reading data
d3.csv("/data-lab-data/EDU_v4_base_data.csv", (eduCsv) => {    //read in education data to data files
  let totalContracts = 10467392637;
  let totalGrants = 40819465556;
  let totalStudentAid = 98262303519;
  // let totalContracts = float(eduCsv.reduce((a, b) => {     //caluculate total contract money given to all universities sum(contracts recived)
  //   return a + float(b.contracts_received);
  // },0)
	// 		     .toFixed(2));                                        // 2 decimal places

  // let totalGrants = float(eduCsv.reduce((a, b) => {     //caluculate total grants money  sum(grants_received + research_grants_received)
  //   return a + float(b.grants_received) + float(b.research_grants_received);
  // },0)
	// 		  .toFixed(2));

  // let totalStudentAid = float(eduCsv.reduce((a, b) => {     //caluculate total grants money  sum(grants_received + research_grants_received)
  //   return a + 
  //     float(b.subsidized18) + 
  //     float(b.unsubsidized18) +
  //     float(b.parent18) +
  //     float(b.grad_plus18) + 
  //     float(b.grants18) //+ 
  //     // float(b.perkins18) + 
  //     // float(b.FSEOG18) + 
  //     // float(b.FWS18);
    
  // },0).toFixed(2));
  
  let totalInvestment = totalContracts + totalGrants + totalStudentAid;
  let contractSpendingPercent =  parseInt(((totalContracts/totalInvestment)*100));
  let grantsSpendingPercent = parseInt(((totalGrants/totalInvestment)*100));
  let studentAidSpendingPercent = parseInt(((totalStudentAid/totalInvestment)*100));

  //updatin bar graph to reflect percentages
  contracts.style.width = `${contractSpendingPercent}%`;
  contracts.style.height = '59px';
  contracts.style.backgroundColor = '#925003';
  grants.style.width = `${grantsSpendingPercent}%`;
  grants.style.height = '59px';
  grants.style.backgroundColor = '#004C40';
  aid.style.width = `${studentAidSpendingPercent}%`;
  aid.style.height = '59px';
  aid.style.backgroundColor = '#0A2F5A';

//  totalinvestment.innerHTML = `$${totalInvestment.formatMoney(2)}`;

});


