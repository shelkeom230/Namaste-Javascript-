// what is a callback function in javascript
// time, tide and js waits for none
setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
}); // y is callback function
// js is synchronous single threaded languages
// we should never block our main thread, we should always use async operations to execute tasks that takes time

function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("button clicked", ++count);
  });
}

attachEventListeners();
// when you click the button, function xyz comes into call stack, and after execution it goes out of the call stack
