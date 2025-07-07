function x() {
  var i = 1;
  setTimeout(() => {
    console.log(i);
  }, 1000); // hold this block for 1 sec
  console.log("Namaste Javascript"); // this will be printed first and then i
}
x();

/*
js creates a closure when function is called, and it has access to value of i , so it first goes forward by maintaining a timer and prints Namaste Js and when timer is hit, it puts the function into execution stack and executes it  
*/
