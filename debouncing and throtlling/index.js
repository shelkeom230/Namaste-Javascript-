// a counter to distinguish events
let counter = 0;

// problem here is that
// this function is making a function call every time i press a new char from my keyboard which can crash our server
const getData = () => {
  console.log("Fetching data...", counter++);
};

// so now, we need some sort of a functio which calls the api only after i type some meaningful search query, so we will set a dealy and after that delay only, we will make a call

const debounce = function (fn, delay) {
  let timer;
  return function () {
    // clear the timer
    clearTimeout(timer);
    // call the function when delay exceeds
    timer = setTimeout(() => {
      let context = this,
        args = arguments;
      getData.apply(context, arguments);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);
