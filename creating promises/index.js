// creating our own promise

const cart = ["pants", "shirts", "kurti"];

createOrder(cart) //returns a promise
  // console.log(promise);

  // attach a callback to promise
  .then(function cb(orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function cb(err) {
    console.log(err.message);
  })
  // now, go towards payment
  .then(function cb(orderId) {
    return proceedToPayment(orderId);
  })
  // print payment info here
  .then(function cb(paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    console.log("no matter what happens , this will definately be called.");
  });

// Producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // create order
    // validate order
    // orderId

    if (!validateCart(cart)) {
      const error = new Error("cart is not valid");
      reject(error);
    }

    // logic for createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

// proceedtoPayment promise function
function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("payment successful");
  });
}
function validateCart(cart) {
  return false;
}

/* if you wan't to handle error only for some functions, then just put it below that callback and not at the last, in this way , you can proceed further even though one of the callback fails 

e.g) you still need to first make payment successful or updating the cart has failed as it can be done latter with less priority 
*/

/* 
create some kind sort of similar structure for a hotel booking company's website 

api you need to write 
bookHotel, proceedToPayment, showBookingSumarry,updateWalletBalance 

you have to create a promise chain 

*/
