// 2.	Attendance Tracker System

// Develop a function that calculates attendance percentage based on total working days and days present. 
// Based on percentage, assign a status such as Excellent, Good, Warning, or Not Eligible. Return both percentage and final status.

// Topics to use: Functions, conditional statements, arithmetic operators, variables.


function calculateAttendence(totalworkingdays, dayspercentage) {
    let percentage = (dayspercentage/totalworkingdays) * 100;
    percentage = parseFloat(percentage.toFixed(2));

    let status;
    if(percentage >= 90) {
        status = "Excellent";
    } else if (percentage >= 75){
        status = "Good";
    } else if(percentage >= 60) {
        status = "Warning";
    }else {
        status = "Not Eligible";
    }

    return {percentage, status};
}
console.log(calculateAttendence(100, 85));
console.log(calculateAttendence(100, 75));
console.log(calculateAttendence(100, 55));
console.log(calculateAttendence(100, 45));
console.log(calculateAttendence(100, 60));