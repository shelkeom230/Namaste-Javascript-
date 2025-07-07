/* 
how to answer what is Promise ?
-- placeholder for a certain period of time until we receive some response for an async operation


-- a container for a future value 

-- promise is an object which represents eventual completion of an async operation 
*/

const cart = ["pants", "shirts", "kurti", "shoes"];

// to ensure data flows downwards after each callback is resolved, you must return the response as a promise for further chaining
createOrder(cart)
  .then(function cb(orderId) {
    return proceedToPayment(orderId);
  })
  .then(function cb(paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function cb(paymentId) {
    return updateWalletBalance(paymentId);
  });
// we can use arrow function here instead of anonymous function
