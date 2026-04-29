// 7.	Online Exam Result Processor

// Create a function that accepts marks of 5 subjects. Calculate total and average. 
// Assign grade based on average, but if any subject score is below 35, result must be Fail regardless of average. Display full result summary.

// Topics to use: Loops, conditionals, functions, arithmetic operations, variables.


function X_class_Result(marks) {
    const subjects = ["Telugu","Hindi","English","Maths","Science","Social"];

    let total = 0;
    let failed = false;

    for(let i = 0; i < marks.length; i++) {
        total += marks[i];
        if (marks[i] < 35) failed = true;
    }
    const average = total/marks.length;
    let grade, result;

    if(failed) {
        grade = "F";
        result = "FAIL";
    }else if( average >= 85) {
        grade = "A+"; result = "PASS";
    }else if(average >= 71) {
        grade = "A"; result = "PASS";
    }else if(average >= 56) {
        grade = "B"; result = "PASS";
    }else if(average >= 41) {
        grade = "C"; result = "PASS";
    }else{
        grade = "D"; result = "PASS";
    }
    return {subjects, marks, total,average, grade,result};
}

function displayResults() {
    const data = X_class_Result([81,79,79,83,85,69]);

    for(let i = 0; i < data.length; i++) {
        console.log(data.subjects[i] + " : " + data.marks[i]);
    }
    console.log("Total   :" + data.total);
    console.log("Average :" + data.average.toFixed(2));
    console.log("Grade   :" + data.grade);
    console.log("Result  :" + data.result);
}

displayResults();