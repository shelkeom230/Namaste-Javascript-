/* 
execution order of an ecom website purhcase 
1. place/create order 
2. then proceed to payment 
3. then show your order summary 
4. at last, update your wallet 
*/

// this type of callback hells are too much tough to manage
// this code structure is known as pyramid of doom
const cart = ["paints", "shirts", "shoes"];
api.createOrder(cart, function () {
  api.proceedToPayment(function cb() {
    api.showOrdersSummary(function cb() {
      api.updateWallet();
    });
  });
});

/* 
SUMMARY 

1. importance of callbacks 
-- entire async js is dependant on callbacks 

2. issues with callbacks 
2.1 callback hell 
--> it makes our code very messy and difficult to track, update and understand 

2.2 inversion of control 
--> we pass a very important feature function as a callback to some another function and we are not depeant on that function to execute our callback function which may or may not work perfect every time leading to the brutal downtime of our very important service like payment placement etc.
*/
