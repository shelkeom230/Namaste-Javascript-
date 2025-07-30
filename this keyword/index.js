"use strict";

// this keyword in global space

console.log(this); // global object --> window in case of browser.

// this inside function
function x() {
  // value depends on strict and non strict mode
  console.log(this);
}
x(); // window object
// in strict mode --> it is undefined

// this keyword in non-strict mode --> (this substitution)

// if the value of this keyword is undefined or null, this keyword will be replaced by global object in non-strict mode only.

// value of this keyword depends on how the function is called
window.x(); // now it is window object again.

// this inside an object's method

const student = {
  name: "Akshay",

  // this x is a method of an object obj
  printName: function () {
    console.log(this.name); // Akshay

    // console.log(this); // obj object
    // console.log(this.a); //as this points to object obj, this.a points to the value of property a i.e 10
  },
};

// again, the value of this depends on how this function is called.
student.printName(); // here the value is simply the object where this is called.

const student2 = {
  name: "Deepika",
};

// use call to override this keyword to point to the student2 object
student.printName.call(student2);

// it interally calls like --> console.log(student2.name); here.

// this keyword inside arrow function
// arrow functions does not have their own this keyword
// they retain the value of enclosing lexical context's this value.

const obj = {
  a: 10,

  x: () => {
    console.log(this); // prints value of it's enclosing lexical context this value. , here window object.
  },
};

obj.x();

// this keyword inside an arrow function which is inside another function
const obj2 = {
  a: 20,

  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj2.x(); // prints obj2
// as we know, this keyword inside a method belonging to an object has access to object itself, so if you add an arrow function inside that and prints this , then as we know, in case of arrow functoins, it gets the value of this keyword from it's enclosing lexical context which is function x here and it's' this value is simply the object itself.

/* this keyword inside DOM 

  <button onclick="alert(this)">click me</button>

  the value of this keyword inside a dom element is the value of that dom element on which the listener is placed.
*/
