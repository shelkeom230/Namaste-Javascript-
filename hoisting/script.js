// getName()  runs
// console.log(x);  undefined

console.log(getName); // works and gives whole function body here

var x = 5;
function getName() {
  console.log("namaste javascript");
}

// console.log(getName); whole function body

/*
Hoisting --> you can access the variables and functions even before declaring and initialising it 
*/

/*
as it is a variable, it throws error in hoisting due to the value undefined in global execution stack 

var getName = () => {
  console.log("Namaste Javascript");
};

this works fine
function getName2(){

}

as it a variable which holds a function, it also holds the value undefined and throws error in hoisting 
 
var getName3=function (){
    
}
*/
