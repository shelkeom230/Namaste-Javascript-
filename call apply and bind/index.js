let name = {
  firstName: "omkar",
  lastName: "shelke",
};
let printName = function (hometown, state) {
  // here, this keyword has access to the object
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
};

// call the function to print your name
printName.call(name, "amravati", "maharashtra"); // omkar shelke

const name2 = {
  firstName: "saina",
  lastName: "nehwal",
};

// function borrowing -- using call
printName.call(name2, "hisar", "hariyana"); // saina nehwal

const name3 = {
  firstName: "lin",
  lastName: "din",
};

printName.call(name3, "bejing", "china");

// apply method -- 2nd argument is a list of args
console.log("using apply method");
printName.apply(name3, ["bejing", "china"]);

// bind method -- bind creates a new copy of the function and returns a function with the passed reference which you can call latter to get the result
console.log("using bind method");
let printMyName = printName.bind(name3, "bejing", "china");
printMyName();
