// write a generic function to calculate area, circumference and diameter of circles whose radius are available in an array radius

// logic functoins
const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};

// just another implementation of map function, it is kind of like a polyfill for map
Array.prototype.calculate = function (logic) {
  output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i])); // call function logic for the value at index i in the array radius
  }
  return output;
};
radius = [3, 2, 1, 4];

console.log("aera: ", radius.calculate(area));
console.log("circumference: ", radius.calculate(circumference));
console.log("diameter: ", radius.calculate(diameter));

console.log("using map function: ", radius.map(area));
