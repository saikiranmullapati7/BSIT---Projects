//5. replace()

let str = "Hello World";

console.log(str.replace("World", "JS"));
 // Hello JS
 
//6. includes()

str.includes("Java"); // true
 
console.log(str.includes());

// 7. startsWith() / endsWith()

let pgm = "JavaScript";

console.log(pgm.startsWith("Java"));
console.log(pgm.endsWith("Script"));

console.log(pgm.indexOf("Script"));

// 9. split()
 
// Converts string → array

let sk = "Sai, Kiran, Mullapati";
console.log(sk.split(","));

//  String Concatenation

let Name = "Sai kiran";
let SName = "Mullapati";

let Fullname = Name + " " + SName;

console.log(Fullname);