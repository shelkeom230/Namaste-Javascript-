const cart = ["shoes", "pants", "kurti"];

// createOrder adds a new record for the order in the DB and returns a new orderId for that order

// proceedToPayment takes in that orderId and generates a new payment instance with the partciular orderId and total amount payable

/*
createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});

*/
/* 
here, passing proceedToPayment() as a callback is very risky take 

as you don't have access to that createOrder function which someone else has written and you are passing the entire control of your payment to createOrder as a callback and thinking that it will call that function afterwards when it gets orderId


it may happen that payment is called 2 times or it is never called at all 

so, it is a very bad practice to rely on someone else logic to do our work which is done here 
*/

// we can solve this issue with Promises

// const promise = createOrder(cart);

// {data: undefined}
/* when js executes line 22, this createOrder api will return us a promise

Promise is nothing but an emtpy object with some data value in it {data: } and it will hold whatever that createOrder api will reutrn to us 

createOrder is an async operation , so when it gets called it returns a promise first with undefined value and we don't know when this api will complete executing 

once it completes it's execution it returns us orderDetails() which are automatically filled inside our promise object.
*/

/* {data: orderDetails}
promise.then(function (orderId) {
  proceedToPayment(orderId);
});
*/

/* 
what happens when the createOrder api returns a promise which has all orderDetails(),

now, we register a callback function on that promise using then which gets the orderId from the promise object and calls proceedPayment api with that orderid to make payment.

Now, what is the adv here in comp to callbacks 

-- note that he we have attched a callback to a promise and not passed a callback to some another naive function 

-- callback is called only when your promise returns orderDetails and now , you don't need to worry about trust issues like normal callbacks.
*/

const GITHUB_URL = "https://api.github.com/users/shelkeom230";

const user = fetch(GITHUB_URL); // fetch returns a promise

console.log(user);

// attach a callback
user.then(function (data) {
  console.log(data);
});
// promise objects are immutable --> so no need to take care of data security
