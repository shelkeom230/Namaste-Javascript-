function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();

/*
scope - where you can access a particular variable or a function inside a program 

2 questions --> what is the scope of this variable 
can i access this variable inside the scope of this function 

scope is directly dependant on the lexical environment 
*/
