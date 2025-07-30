let a = 10;
// let a=20 //cannot do this - syntax error, duplicates variables
console.log(a);
var b = 100;
var b = 200; // it is possible in var

// ************************
// const behaves very much similar to let but it behaves even more stricter than let here

let age;

age = 21; // you can do this, assignment after declaration

const x = 20;

// x=2000 assignment to constant is not allowed as their value is locked once it is assinged

/* 
let is more stricter than var 
you cannot redeclare variables with same name using let but same thing can be done using var 
*/
