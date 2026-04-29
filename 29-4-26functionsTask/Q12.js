// 12.	Console Based Employee Management System 

// Create a menu-driven program that repeatedly shows options such as salary calculation, attendance status, 
// bonus calculation, and performance report. User selects an option and the program executes the corresponding function until exit is chosen.

// Topics to use: Loops (while / do-while), functions, switch or if-else, control flow, variables.



function calcSalary(basic){
    const hra = basic * 0.2;
    const da = basic * 0.1;
    return { basic, hra, da, gross: basic + hra + da};
}

function attendanceStatus(present, total) {
    const pct = (present/total) *100;

    let status;

    if (pct >= 90) {
        status = "Excellent";
    }else if(pct >= 75) {
        status = "Good";
    }else if(pct >= 60) {
        status = "Average";
    }else {
        status = "Poor";
    }

    return {pct: pct.toFixed(2), status};
}


function calcBonus(salary, rating) {
    let rate;

    switch(true) {
        case rating >= 9:
            rate = 0.20;
            break;
        case rating >= 7:
            rate = 0.15;
            break;
        case rating >= 5:
            rate = 0.10;
            break;
        default:
            rate = 0;
    }
    return (salary * rating).toFixed(2);

}

console.log(calcSalary(50000));
console.log(attendanceStatus(26, 30));
console.log(calcBonus(150000,9))