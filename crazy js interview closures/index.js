function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
let a = 100; // does not change anything here, if you comment a inside, then it will be 100
var close = outest()("omkar");
close();

// implement a counter but hide the variable count using closures , i.e data abstraction

function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

/* 
var counter1 = counter();
counter1(); // 1
counter1(); // 2
counter1(); // 3

var counter2 = counter();
counter2();
*/

// implement an increment as well as decrement counter using one functoin by keeping count variable hidden
function Counter() {
  var count = 0;

  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

Counter1 = new Counter(); // due to constructor
// count=0
Counter1.incrementCounter(); // 1
Counter1.incrementCounter(); // 2
Counter1.decrementCounter(); // 1
Counter1.decrementCounter(); // 1

/* 
disadvantages of closures 
1. consumes more memory if we create a lot of closures 
2. if not handled properly, it can lead to memory leaks 
*/

// garbage collector --> frees up the unutilised memory

function aa() {
  var x = 10,
    z = 100;
  return function b() {
    console.log(x);
  };
}
var y = aa();
y();
