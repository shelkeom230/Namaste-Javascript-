/* 
whatever comes into call stack, it gets executed immediately without any wait, i.e it does not have a timer like thing 

Remember , Time, Tide and js does not waits for anything 

Then, what if we want some code to run after a delay of 5 sec ??

A browser is the most remarkable invention in the history of mankind 

A browser has timer, window object functions, server data, local and session storage, console for displaying output, location access and ability to fetch data from a url 

in order to access all of these, we make use of WEB API's 

some of the WEB API's 
1. setTimeout() --> for timer
2. DOM API --> for accessing DOM objects 
3. fetch() --> access url data 
4. LocalStorage --> store in browser 
5. console --> print something 
6. Location --> get access to user location 

NOTE --> These are all not part of js, they are part of your browser or your js engine for the sake 
 */

console.log("start"); // calls console API
setTimeout(function cb() {
  // calls setTimeout service of browser
  console.log("callback"); // calls console API
}, 5000); // set a timer of 5 sec
console.log("end"); // calls console API

/*
As we know, we can't put that callback function directly inside the call stack

So, we make use of something called as a callback queue and event loop 

As soon as the delay of callback function is completed, it gets enqueued in the callback queue 

Event loop continuously checks the callback queue and if it has a callback function , it transfers it to the call stack for execution only when the call stack is emtpy
*/

/*
console.log("start event");
document.getElementById("btn").addEventListener("click", function cb() {
  console.log("callback for button clicked");
});
console.log("end event");

*/
