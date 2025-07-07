// print 1 to 5 with delay of 1 to 5 along with namaste js
function x() {
  for (let i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("Namaste Javascript");
}
x();
/* 
 output --> 
 namaste js 
 6
 6
 6
 6
 6
 to do with var only, you have to somehow create a new copy of i everytime the function runs, so enclose it in a new function and call it with current value of i 

 reason --> js does not waits for anything, when the timer of 1000 is set, js executes i++ until it hits 1000 ms and by that time your i value is 6, now it executes call back function and hence prints value 6
 */
