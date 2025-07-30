/* 
in js , {} represent a block 

a block groups together multiple js statement 

it is used to write multiple statements where js expects a single statement only 

block scope : 
what are the varaibles  accessible inside this block 

let and const are hoisted to some other memory area and  not a part of global scope and they are limited to their defining block i.e they are block scope 

whereas var belongs to global scope and it is accessible anywhere inside the program out of block scope as well
*/
const c = 100; // another scope (script in chrome browser)
{
  //Conditional statement
  var a = 10; // global object
  let b = 20; // block scope
  const c = 30; // block scope
  // c shadowed global c, 100 changed to 30 now

  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}
console.log(a); //10
console.log(b); // ref error
console.log(c); // ref error

/* 10 --> as a belongs to global scope and both changes are pointing to same memory location, 100 is overwritten by 10 

shadowing behaves same in function scope also 
*/

var name = "omkar";
function func() {
  var name = "devil"; // global object
  console.log(name);
}
func();
console.log(name);
