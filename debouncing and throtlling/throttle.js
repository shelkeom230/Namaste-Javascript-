// not a great way of handling event
const expensive = () => {
  console.log("Expensive", new Date().toLocaleTimeString());
};

function throttle(fn, limit) {
  // add a flag as a closure
  let flag = true;

  // call function only if flag is true , otherwise ignore the calls.

  // returns a function
  return function () {
    if (flag) {
      // get the context and the args
      let context = this,
        args = arguments;

      // call the function
      fn.apply(context, arguments);

      // set the flag to false to avoid calls in between the delay
      flag = false;

      setTimeout(() => {
        // set the flag to true once delay is over
        flag = true;
      }, limit);
    }
  };
}
let limit = 500;
const betterFunction = throttle(expensive, limit); // limit is the delay here

// add an event listener
window.addEventListener("resize", betterFunction);
