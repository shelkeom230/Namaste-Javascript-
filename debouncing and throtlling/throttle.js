const expensive = () => {
  console.log("Expensive");
};

function throttle(fn, limit) {
  // add a flag with the closure
  let flag = true;
  return function () {
    if (flag) {
      let context = this,
        args = arguments;
      fn.apply(context, arguments);
      flag = false;

      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}
let limit = 500;
const betterFunction = throttle(expensive, limit);

// call an event on window resize
window.addEventListener("resize", betterFunction);
