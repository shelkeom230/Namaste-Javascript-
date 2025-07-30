/* 
Promise API 

defn --> A promise is an object which represents the eventual completion or failure or an async operation along with it's result value.

Tupes of Promise API 
1. Promise.all() --> this will wait for all the promises to get settled and then returns result

-- if any one of them fails, then it immediately returns the error and does not wait for other promises to be settled.

2. Promise.allSettled --> it is not good to immediately return an error if any one of the promise fails even without waiting for others to be resolved. 

-- so allSettled() waits for others to be resolved even though the first one which was settled got rejected (throws error) and returns overall result as an array of response at last.

3. Promise.race() --> returns the result of promise which is settled first

-- if does not waits for others if the first settled promise is rejected (error) and immediately returns error message.

4. Promise.any() --> it returns the result of first fulfilled (success) promise 

-- if all of them are rejected, then at last, it returns an array containing errors for all of the promises called as aggregated error.
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 got success.");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve("P2 got success.");
    // reject(new Error("P2 got failed."));
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setInterval(() => {
    // resolve("P3 got success.");
    reject(new Error("P3 got failed."));
  }, 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    // always catch your errors before browser catches
    console.error(err.message);
  });

/* 
output --> after 3sc 
["p1 got success","p2 got success","p3 got success"]
*/
