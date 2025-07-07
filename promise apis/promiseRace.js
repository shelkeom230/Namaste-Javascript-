/* 
Promise.race() --> it will give your result of first settled promise no matter it is resolved or rejected.
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 got resolved.");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 got rejected.");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 got resolved.");
  }, 2000);
});
Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
