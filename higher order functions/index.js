function x() {
  // callback function
  console.log("x");
}

function y(x) {
  // y is higher order function which takes x as an callback function
  x();
}
// calculate area of circle with 4 radius given in array radius

const radius = [3, 1, 2, 4];

const calculateArea = function (r) {
  area = [];
  for (let i = 0; i < radius.length; i++) {
    area.push(Math.PI * radius[i] * radius[i]);
  }
  return area;
};

const calculateCircumference = function (r) {
  output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * r[i]);
  }
  return output;
};

calculateDiameter = function (r) {
  result = [];
  for (let i = 0; i < radius.length; i++) {
    result.push(2 * r[i]);
  }
  return result;
};
console.log(calculateArea(radius));
console.log(calculateCircumference(radius));
console.log(calculateDiameter(radius));

// here we are voilating the DRY principle, we are repeating the code many times
