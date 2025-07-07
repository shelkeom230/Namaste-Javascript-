const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "omkar", lastName: "shelke", age: 20 },
  { firstName: "brother", lastName: "dahiwade", age: 22 },
];

// find out list of full name of all these users
const allUsersName = users.map((user) => user.firstName + " " + user.lastName);
// console.log(allUsersName); // ["akshay saini","omkar shelke","brother dahiwade"]

// get an object which gives frequency of each age in the users array depicting how many users are of the same age
// {26:1, 20:1,22:1}
// we have to use reduce

const ageMap = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    // age present in acc
    acc[curr.age] = ++acc[curr.age];
  } else {
    // age not present in acc
    acc[curr.age] = 1;
  }
  return acc;
}, {}); // at last pass, initial value is passed which an empty object in this case
console.log(ageMap);

// filter --> find out firstName of all users whose age is less than 25
const userFirstNames = users
  .filter((user) => user.age < 25)
  .map((user) => user.firstName); // chaining

// console.log(userFirstNames);

// do the same task using reduce
const userFirstNames2 = users.reduce((acc, user) => {
  if (user.age < 25) {
    // if age less than 25
    acc.push(user.firstName); // add his firstName to acc
  }
  return acc; // return the answer;
}, []);

// console.log(userFirstNames2);

// another very pro way
const userFirstNames3 = users.reduce((acc, user) => {
  return user.age < 25 ? [...acc, user.firstName] : acc;
}, []);
console.log(userFirstNames3);
