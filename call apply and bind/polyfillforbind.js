const name = {
  firstName: "omkar",
  lastName: "shelke",
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      hometown +
      " " +
      state +
      " " +
      country
  );
};

let printMyName = printName.bind(name, "amravati", "maharashtra"); // returns a function to call it later
printMyName("india");

// implemeting our own version of bind()

Function.prototype.myBind = function (...args) {
  // we need to return the function as bind returns a function to be called latter by you

  // this keyword has access to the method on which you have called myBind
  let obj = this;

  // access all args to the function
  params = args.slice(1); //remove the first argument and get all rest

  // state we will get here.
  return function (...args2) {
    // use spread operator with list syntax to pass everything at once.
    obj.apply(args[0], [...params, ...args2]); // first args from the array of arguments.
  };
};
let printMyName2 = printName.myBind(name, "amravati");
printMyName2("maharashtra", "India");
