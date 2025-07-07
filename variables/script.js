// console.log('connected to js');

let userName = "omkar"; //string
let firstName = "Omkar"; // we can change this
let lastName = "Shelke";
// let userIntro='My name is Omkar'
let age = 21; //number

let isHappy = true; // boolean

firstName = 100; // we can change this
let userIntro =
  "Hi, I am " +
  firstName +
  " " +
  lastName +
  " I am " +
  age +
  " years old" +
  " I always prefer to be " +
  isHappy; // string concatenation

let easyWayUserIntro = `Hi, I am ${firstName} ${lastName}. I am ${age} years old. Am i happy: ${
  isHappy ? "yes" : "no"
}`; // literal string - a string with dynamic values

let a = undefined; // similar to any datatype is in typescript

let b = null;
// undefined is a datatype but null is object

let c; // memory is allocated but value is undefined here
console.log(c); //undefined here
// *****************************

// constant values -- cannot be changed after initialisation
const pi = 3.141414;
const hours = 24;

// prefer using const when value will not be changed

// ******************************
// var -- old one, abhi use nahi hota
// let -- 2015 me aye hai

var designation = "coder";

{
  // {} denotes a block
  desg = "coder";
}

// *******************************
/* diff 
let -- block scope 
var -- function scope
*/

console.log(college); // no error, gives undefined , hoisting works here
var college = "sipna coet"; // hoisted due to memory initialization

console.log(principal); // undefined
let principal = "mankar mama"; // let variables are stored in another block
