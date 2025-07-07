function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();

/*
Use cases of Closures: 
1. module design pattern 
2. currying
3. function like once which runs atmost once 
4. memoize 
5. maintaining state in async world
6. setTimeouts
7. iterators 
and many more....
*/
