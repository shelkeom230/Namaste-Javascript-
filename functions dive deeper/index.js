a(); // works fine
// function statement aka function declaration
function a() {
  console.log("a called");
}
// function expression
var b = function () {
  console.log("b called");
};
b(); // gives ref error as b is undefined here

// Anonymous functions --> witout name functions
// function (){

// }

// named function expression
var b = function xyz() {
  console.log(xyz);
};
b();

// diff between parameters & args
/* 
function func(param1,param2,...){
    // body 
}
func(args1,args2,...);
params are the identifiers that we use while defining the values taken by the function 
args are the actual values that are passed while calling the function, these values get copied to params or formal args 
In short, when we call the function, we pass actual args whereas they are get copied to formal args when function gets executed 
*/

// first class functions
// we can pass a function as a args to another function
// ability to use functions as values and can be passed as args to another function or return a function from another function is called as first class functions

function omkar() {}
var c = function (param1) {
  return function xyz() {};
};
console.log(c());

// First Class Citizens --> same as first class functions

// Arrow functions --> introducted in ES6 2015
