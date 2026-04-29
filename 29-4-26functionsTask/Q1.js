// 1.	Employee Salary Calculator (Payroll Logic)

//      Create a function that calculates an employee’s salary structure. 
//      The function should take basic salary as input and compute HRA (10%), PF deduction (5%), and bonus ₹2000 if salary is more than ₹50,000. 
//      Display gross salary, total deductions, and net salary clearly.

//      Topics to use: Functions, arithmetic operators, if-else conditions, variables.


function calculate_Salary(basic) {
    let HRA = basic * 0.10;
    let PF = basic * 0.05;
    let Bonus = 0;

    if(basic > 50000) {
        Bonus = 2000;
    }else {
        Bonus = 0;
    }

    let gross = basic + HRA + Bonus;
    let deductions = PF;
    let net = gross - deductions;

    console.log("=========Salary structure=========");
    console.log("Basic Salary            :", + basic);
    console.log("HRA (10%)               :", + HRA);
    console.log("Bonus                   :", + Bonus);
    console.log("PF deductions           :", + PF);
    console.log("Gross Value             :", + gross);
    console.log("Tota deductions         :", + deductions);
    console.log("Net Salary              :", + net);
}
calculate_Salary(65255);