// we can call a method with our parameters and let it behave differently

let multiply = (a, b) => {
  // let a=2; this will happen here.
  console.log(a * b);
};

// use currying using bind method
let multiplyByTwo = multiply.bind(this, 2); // that 2 will be preset to variable a in multiply method
multiplyByTwo(10);

let multiplyByThree = multiply.bind(this, 3); // that 3 will be preset to varible a in multiply method.
multiplyByThree(10);
// console.log(multiply(2, 3));

// using callback methods
let findPower = function (a) {
  return function (b) {
    console.log(a ** b);
  };
};

// now use callback
let power1 = findPower(2);
power1(3);

let power2 = findPower(2);
power2(4);
