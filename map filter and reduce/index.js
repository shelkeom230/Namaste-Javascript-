// map function -->. apply some logic over a range of values
const arr = [5, 1, 3, 2, 6];

let doublefunc = function (x) {
  return x * 2;
};
// Double --> [10,2,6,4,12]
const double = arr.map((ele) => ele * 2);
// Triple --> [15,3,9,6,18]

const triple = arr.map((ele) => ele * 3);
// Binary --> [101,001,011,010,110]

const binary = arr.map((ele) => ele.toString(2));

console.log("double: ", double);
console.log("triple: ", triple);
console.log("binary: ", binary);

// filter --> apply conditional logic to series of values

// filter odd values
function isOdd(x) {
  return x % 2 != 0;
}
const oddvalues = arr.filter(isOdd);
console.log(oddvalues);

// filter even values
const evenValues = arr.filter((ele) => ele % 2 == 0);
console.log(evenValues);

// filter all values greater than 4
const greaterThan4 = arr.filter((ele) => ele > 4);
console.log(greaterThan4);

//reduce --> you have to return a single value result for a series of values, transform your input to single value

// find sum / max or any other aggreage function to apply
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
//findSum(arr);

function findMax(arr) {
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    console.log(max);
  }
}

// findMax(arr);

const totalSum = arr.reduce(function (acc, ele) {
  acc += ele;
  return acc;
}, 0);
console.log(totalSum);

const maxElement = arr.reduce(function (max, ele) {
  if (ele > max) {
    max = ele;
  }
  return max;
}, 0);
console.log(maxElement);
