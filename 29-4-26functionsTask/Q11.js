// 11.	Employee Performance Appraisal System 

// Develop logic to evaluate employee performance based on projects completed, attendance percentage, and manager rating. 
// Calculate performance score, determine promotion eligibility, assign performance category, and calculate bonus if applicable. 
// Display a full performance report.


// Topics to use: Functions, multiple condition checks, arithmetic calculations, variables, control flow.

function appraise(name, projects, attendance, rating) {
    const projScore = (projects/ 10) * 40;
    const attenScore = (attendance/ 100) * 30;
    const rtgScore = (rating/10) * 30;
    const score = projScore + attenScore + rtgScore;

    let category, promoted, bonus = 0;

    if (score >= 85) {
        category = "Outstanding";
        promoted = true;
        bonus = 20;
    }else if(score >= 70) {
        category = "Excellent";
        promoted = true;
        bonus = 15;
    }else if(score >= 55) {
        category = "Good";
        promoted = false;
        bonus = 10;
    }else if(score >= 40) {
        category = "Average";
        promoted = false;
        bonus = 0;
    }else{
        category = "Needs improvement";
        promoted = false;
        bonus = 0;
    }

    return {name, score: score.toFixed(1), category, promoted, bonus};
}

console.log(appraise("Sai", 19,20, 9));