// 6.	Store two numbers in variables and swap their values using a temporary third variable. Print values before and after swapping.

let a  = 520;
let b = 1314;

console.log("before swaping: ");
console.log("a= ", a);
console.log("b= ", b);

let temp = a;
a = b;
b = temp;

console.log("\nAfter swaping: ");
console.log("a= ", a);
console.log("b= ", b);