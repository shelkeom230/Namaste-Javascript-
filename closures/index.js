/*
closure --> a function bind together with it's lexical environment  

it is a combination of a function bundled together/enclosed with references to it's surroundings state (the lexical env).

i.e , a closure gives a function access to it's outer scope. 

closures are created everytime a function is created , at function creation time in js 
*/

function x() {
  let a = 7;
  function y() {
    console.log(a); // a got it's value from it's lexical parent
  }
  y();
}
x();

// another example
function init() {
  var name = "omkar"; // name is a local variable created by init
  function displayName() {
    console.log(name); // use variable declared in the parent function as it is not available in local scope
  }
  displayName();
}
init();

/* 
js functions are quite powerful than other prog languages 

1. we can assign a function to a varible 
var a=function y(){
console.log(a);
} like this 

2. we can even pass a function while calling another function 

x(funcion y(){
    console.log(a);
}); this is also valid 

3. we can also return a function from another function 

function x(){
    var a=7;
    function y(){
    console.log(a);
    }
    return y;
}
x();
*/

function xx() {
  var aa = 7;
  function yy() {
    // pro way to return function yy
    console.log(aa);
  }
  aa = 100;
  return yy; // 100
}
var z = xx();
console.log(z); // z has access to whole function yy

/* 
some 1000 lines of code here 
*/
z(); // it has access to value of aa and it prints 7 due to closure concept
// it is not ref error, undefined or null like that

/* 
reason --> when you call z(), it ultimately call xx() which in turn calls yy(), yy remembers the var a in it's parent lexical scope due to closures and it gives you the value of aa correctly as well 
*/

/* 
how to answer in an interview ? 
--> closure is the function along with it's lexical scope bundled together 

--> function along with it's lexical scope bundled together forms a closure 

these functions remembers the things even when they are not in scope 
*/

function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();
