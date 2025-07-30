// this works fine but not a good way due to lot of closures and function returns.
let sum = function (a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
};

// we can use recursion here

let sum2 = function (a) {
  return function (b) {
    if (b) {
      return sum2(a + b);
    }
    return a;
  };
};

// using ES6 arrow functions syntax
let sum3 = (a) => {
  return (b) => {
    return b ? sum(a + b) : a;
  };
};

// using single line with arrow functions
let sum4 = (a) => (b) => b ? sum(a + b) : a;

let suma = sum(1);
let sumb = suma(2);
let sumc = sumb(3);
let sumd = sumc(4);
console.log(sumd);

console.log(sum2(1)(2)(3)(4)());
