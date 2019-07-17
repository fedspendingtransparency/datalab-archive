---
---

const contracts = document.getElementById('contracts-bar');
const grants = document.getElementById('grants-bar');
const aid = document.getElementById('studentAid-bar');
const totalinvestment = document.getElementById('investment-bar');

let totalContracts = 10467392637;
let totalGrants = 40819465556;
let totalStudentAid = 98262303519;

let totalInvestment = totalContracts + totalGrants + totalStudentAid;
let contractSpendingPercent =  parseInt(((totalContracts/totalInvestment)*100));
let grantsSpendingPercent = parseInt(((totalGrants/totalInvestment)*100));
let studentAidSpendingPercent = parseInt(((totalStudentAid/totalInvestment)*100));

//updatin bar graph to reflect percentages
contracts.style.width = `${contractSpendingPercent}%`;
contracts.style.height = '59px';
contracts.style.backgroundColor = '#925003';
contracts.style.marginRight = '3px';
grants.style.width = `${grantsSpendingPercent}%`;
grants.style.height = '59px';
grants.style.backgroundColor = '#004C40';
grants.style.marginRight = '5px';
aid.style.width = `${studentAidSpendingPercent}%`;
aid.style.height = '59px';
aid.style.backgroundColor = '#0A2F5A';
aid.style.marginRight = '5px';





