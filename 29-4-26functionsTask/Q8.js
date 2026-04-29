// 8.	Parking Fee Calculator

// Design a function that calculates parking charges based on number of hours parked. 
// Different hourly rates apply for different time ranges. Calculate total fee using step-based pricing logic.

// Topics to use: Conditional logic, arithmetic operations, functions, control flow.


function calculateParkingFee(hours) {
    let fee = 0;
    let breakdown = "";

    if(hours <= 0){
        return "Invalid hours"
    }else if(hours <= 2) {
        fee = hours * 20;
        breakdown = `${hours} hr(s) x $20`;
    }else if(hours <= 5) {
        fee = 2 * 20 +(hours - 2) * 15;
        breakdown = `2 hr x $20 + ${hours - 2} hr x $15`;
    }else if(hours <= 12) {
        fee = 2 * 20 + 3 * 15 + (hours - 5) * 10;
        breakdown = `2hrx$20 + 3hrx$15 + ${hours - 5} hrx$10`;
    }else{
        fee = 2*20 + 3*15 + 7*10 + (hours - 12) *8;
        breakdown = `Flat 12hr + ${hours - 12} hrx$8`;
    }
    return { hours, fee, breakdown};
}
console.log(calculateParkingFee(20));