/*
window -- global object ,in case of browser it is window  
this -- same as window at the global level 

whenever you create a global execution context a this as well as an window object is created by your js engine 

this===window is true , they point to the same object in memory 

global space -- anything which is not inside a function is in global space 

*/
var a = 10; // global space
function b() {
  // b is in global space
  var x = 10; // x is in local space of function b
}

console.log(a); //because of global space

console.log(window.a); // works fine as everything a is in  global space is attached to window and this object
console.log(this.a);

//console.log(this.x);  // error as x does not belongs to the global object, it belong to the local object of function b
