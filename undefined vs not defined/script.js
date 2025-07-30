console.log(x); // undefined
var x = 10;
console.log(x); // 10
// console.log(a); error,  not defined i.e it does not exist, it has not been allocated memory

/* 
undefined is not equal to empty , think of it as a placeholder which will take it's value when it is given, until that it holds undefined 
*/

var marks = 59;

if (marks === undefined) {
  console.log("marks is undefined");
} else {
  console.log("marks is not undefined");
}

// **************************

// js is loosly or weakly typed, i.e the variables does not have any datatype but the value has a datatype

var ab;
console.log(ab); // undefined
ab = 100;
console.log(ab); // 100
ab = "omkar"; // can change it
console.log(ab); // omkar

/* dont do this mistake 
ab=undefined 
console.log(ab); // as ab is already undefined so , no need to assign the same value again 
*/
