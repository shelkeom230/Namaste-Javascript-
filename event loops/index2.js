console.log("event start");
document.getElementById("btn").addEventListener("click", function cb() {
  console.log("callback for button clicked");
});
console.log("event end");

// *******************************
console.log("Start 2 tasks");

setTimeout(function cbT() {
  console.log("CB settimeout");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});

// 1 million lines of code here
console.log("ended 2 tasks");

/* 
what can come inside micro task queue --> All the callback functions through promises will go there 

all other callback functions goes to callback queue 

Other names of callback queue 
1. Task Queue

Note that event loop first executes all the functions inside microtask queue and then only it peaks functions from the callback queue 

e.g) if Microtask queue has 10 functions and callback queue has only 1 function, then also first 10 fuctions from the microtask queue will be executed then the single function from the callback queue will be executed 

suppose, functions in the microtask queue calls another similar kind of functions recursively for long time, then, in this case the callback queue functions suffer from starvation problem
*/
