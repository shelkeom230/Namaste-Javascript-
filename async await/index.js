/* 
async --> it is a keyword used to make a function asynchronous in behaviour.

-- an async function always returns a Promise

-- if you are returning something kind sort of not a promise, then also, it will wrap that stuff inside a promise and then return it.
*/
// a new Promise
const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved pr1");
  }, 20000);
});

const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved pr2");
  }, 40000);
});
// creating an async function
async function getData() {
  //   return "Namaste Js";
  return pr1; // returning a promise
}

const dataPromise = getData(); // always returns a promise

// console.log(dataPromise); // print promise object

// dataPromise.then((res) => console.log(res));

// HOW WE USED TO HANDLE PROMISE WITHOUT ASYNC AWAIT BEFORE ?

// -- we just used to attach a callback function inside another normal function to that promise and log the result there

async function getData2() {
  // js does not waits for this promise to be settled (either resolved or rejected.)
  pr.then((res) => {
    console.log(res);
  });
  console.log("Namaste javascript.");
}

// getData2();

// how we can handle it with async await

async function handleData3() {
  console.log("Hello World"); // will be quickly printed.

  // await can only be used inside an async function, 10 sec
  const val1 = await pr1; // returns promise settled value and not another promise

  //   -- js engine is waaiting for the promise to be resolved & it will only go to line 48 once promise is resolved.

  console.log("Namaste Javascript 1");
  console.log(val1);

  //   5 sec
  const val2 = await pr2;

  console.log("Namaste Javascript 2");
  console.log(val2);

  // js engine will wait for both of the 2 promises to get resolved and after that it will print the output at one time in sequence.
}

// get your github account data using async await
const GITHUB_URL = "https://api.github.com/users/shelkeom230";

async function getUserData() {
  try {
    // fetch the stram from the url
    const data = await fetch(GITHUB_URL);

    // convert it into json
    const jsonResponse = await data.json();

    // show the result.
    console.log(jsonResponse);
  } catch (error) {
    console.log(error);
  }
}

// handleData3();
getUserData();
