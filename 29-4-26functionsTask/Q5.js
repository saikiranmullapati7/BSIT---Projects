// 5.	Password Strength Checker

// Create a function that evaluates password strength. Check for minimum length, 
// uppercase letters, numbers, and special characters. Based on rules, classify password as Weak, Medium, or Strong.

// Topics to use: Loops, conditionals, logical operators, functions, string checks.


function checkPasswordStrength(password) {
    let hasMinLength = password.length >= 8;
    let hasUppercase = false;
    let hasNumber = false;
    let hasSpecial = false;

    let specialChars = "!@#$%^&*()_+-=[]{};':\",./<>?";

    for(let i = 0; i < password.length; i++) {
        let char = password[i];

        if(char >= "A" && char <= "Z") {
            hasUppercase = true;
        }
        if(char >= "0" && char <= "9") {
            hasNumber = true;
        }
        if(specialChars.includes(char)) {
            hasSpecial = true;
        }
    }
    let score = 0;
    if(hasMinLength) score++;
    if(hasUppercase) score++;
    if(hasNumber) score++;
    if(hasSpecial) score++;

    let strength = "";
    if (score <= 2) {
        strength = "Weak";
    }else if(score === 3) {
        strength = "Medium";
    }else{
        strength = "Strong";
    }
    console.log("Password    :" + password);
    console.log("Length OK   :" + hasMinLength);
    console.log("Uppercase   :" + hasUppercase);
    console.log("Number      :" + hasNumber);
    console.log("Special     :" + hasSpecial);
    console.log("strength    :" + strength);
    console.log("----------------------------")
}

checkPasswordStrength("Si");
checkPasswordStrength("S@i");
checkPasswordStrength("S@ikiran123");
