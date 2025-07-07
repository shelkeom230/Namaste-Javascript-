console.log("start");

setTimeout(() => {
  console.log("callback");
}, 5000);

console.log("end");

/* 
Output --> 
start
end 
callback 
*/

// generate 10 Millions timer here using Date

let startDate = new Date().getTime(); // get current time in ms
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}
console.log("while expires");

/* 
final Output --> 
start 
end 
while expires --> after 10 sec 
at last --> callback 
*/
