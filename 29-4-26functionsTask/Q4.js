// 4.	Username Validation System

// Write a function that checks whether a username is valid. It must have minimum 5 characters, 
// no spaces, and at least one number. If invalid, return the specific reason.

// Topics to use: Functions, loops, conditional statements, string handling, logical operators.


function userName(username) {
    if(username.length < 5) {
        return "Too short.min 5 characters";
    }
    for(let i = 0; i < username.length; i++) {
        if(username[i] === " ") {
            return "No spaces allowed.";
        }
    }
    let hasnumber = false;
    for(let i = 0; i < username.length; i++) {
        if(username[i] >= "0" && username[i] <= "9") {
            hasnumber = true;
        }
    }
    if(!hasnumber) {
        return "Must contain at least one number.";
    }
    return "User is Valid.";
}

console.log(userName("sai123"));
console.log(userName("sa1"));
console.log(userName("SAt"));
console.log(userName("mullapati7"));