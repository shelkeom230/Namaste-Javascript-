/* 
promise.allSettled() --> wait till the end and then display result of all
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 got resolved.");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve(new Error("P2 got resolved."));
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  reject("P3 got rejected.");
});

// safest option among all as it waits for everything to get settled
Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res); // it returns as object with 2 keys status and value
  })
  .catch((err) => console.error(err));
