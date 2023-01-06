// initialising variables
var empName = "";
let input;
let hoursWorked = 0;
let rateOfPay = 0;
let rateOfTax = 0;

let grossPay = 0;
let taxPaid = 0;
let netPay = 0;


document.getElementById("btnCalculate").addEventListener("click", function()
{  
    input = document.getElementById("empName").value;
    empName = input;
    input = document.getElementById("hoursWorked").value;
    hoursWorked = Number(input);
    input = document.getElementById("rateOfPay").value;
    rateOfPay = Number(input);
    input = document.getElementById("rateOfTax").value;
    rateOfTax = Number(input);

    return empName, hoursWorked, rateOfPay, rateOfTax;
});

document.getElementById("btnOutput").addEventListener("click", function()
{  
    grossPay = hoursWorked * rateOfPay;
    taxPaid = grossPay * (rateOfTax / 100);
    netPay = (grossPay - taxPaid);



    alert(`Employee: ${empName} \nGross Pay: ${grossPay} \nTax Paid: ${taxPaid} \nNet Pay: ${netPay}`);
    console.log(`Wages calculated for: ${empName}`);
});