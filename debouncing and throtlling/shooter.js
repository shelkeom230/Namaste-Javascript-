const shooter = () => {
  console.log("shoot bullet", new Date().toLocaleTimeString());
};

function throttle(fn, limit) {
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
let limit = 300;
const betterFunction = throttle(shooter, limit);

document.getElementById("shootBtn").addEventListener("click", betterFunction);
