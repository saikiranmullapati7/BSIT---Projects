// 10.	Electricity Bill Generator

// Create a function that calculates electricity bill based on slab rates. 
// Apply surcharge if bill exceeds certain amount. Return detailed bill calculation.

// Topics to use: If-else ladder, arithmetic operators, functions, variables.


function calculateBill(units) {
    let bill = 0;
    let breakdown = [];

    if (units > 300) {
        bill += 100 * 1.5;
        breakdown.push("0-100 units x ₹1.5 = ₹150");
        bill += 100 * 2.5;
        breakdown.push("101-200 units x ₹2.5 = ₹250");
        bill += 100 * 4;
        breakdown.push("201-300 units x ₹4 = ₹400");
        bill += (units - 300) * 6;
        breakdown.push(`${units - 300} units x ₹6 = ₹${(units-300)*6}`);
    }else if(units > 200) {
        bill += 100*1.5 + 100*2.5 + (units-200)*4;
        breakdown.push("Slab 1+2 + extra@₹4");
    }else if(units > 100) {
        bill += 100*1.5 + (units-100)*2.5;
        breakdown.push(`Slab 1 + extra @₹2.5`);
    }else {
        bill += units * 1.5;
        breakdown.push(`${units} units x ₹1.5`);
    }
    
    let surcharge = 0;
    if (bill > 500) {
        surcharge = bill * 0.15;
    }
    return {units, bill, surcharge, total: bill + surcharge, breakdown};
}

console.log(calculateBill(375));