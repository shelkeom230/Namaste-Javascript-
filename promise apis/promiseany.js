/* 
Promise.any() --> waait for the first promise to get resolved/fullfilled/success , once it is , return it.

-- if all of them fails, return an array of all errors at last as the response.
*/

const p1 = new Promise((resolve, reject) => {
  setInterval(() => {
    // resolve("P1 got resolved.");
    reject("P1 got rejected.");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setInterval(() => {
    reject("P2 got rejected.");
    // resolve("P2 got resolved.");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setInterval(() => {
    // resolve("P3 got resolved.");
    reject("P3 got rejected.");
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err); // get error message
    console.log(err.errors); // get array of error responses.
  });

// AggregateError --> all promises were reject in any()
