/* 
create some kind sort of similar structure for a hotel booking company's website 

api you need to write 
bookHotel, proceedToPayment, showBookingSumarry,updateWalletBalance 

you have to create a promise chain 

*/
const hotelNames = ["taj", "oberio", "grand mehefil"];

bookHotel(hotelNames) // it returns a promise object
  // proceed for payment now
  .then(function cb(bookingId) {
    console.log("booking id received: ", bookingId);
    return proceedToPayment(bookingId);
  })
  .then(function cb(transId) {
    console.log("Transaction id received: ", transId);
    return updateBookingHistory(transId);
  })
  .catch(function (err) {
    console.log("error during booking or payment.");

    console.log(err.message);
  })
  .then(function cb(transId) {
    console.log("Trans Id for summary: ", transId);

    return showBookingSumarry(transId);
  })
  .then(function cb(transId) {
    console.log(summary);

    return updateWalletBalance(summary.transId);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function cb() {
    console.log("Thanks for using InstaHotelBooking service...");
  });
// bookHotel promise function
function bookHotel(hotelNames) {
  const pr = new Promise(function (resolve, reject) {
    // if no hotel names , return an error
    if (!hotelNames || hotelNames.length === 0) {
      const error = new Error("no hotel selected to book");
      reject(error);
    } else {
      console.log("booking your favourite hotel...");

      setTimeout(() => {
        const bookingId = "bk12345";
        console.log("hotel booked successfully. Booking Id: ", bookingId);
        resolve(bookingId);
      }, 3000);
    }
  });
  return pr;
}

// make payment
function proceedToPayment(bookingId) {
  const pr = new Promise(function (resolve, reject) {
    console.log("initiating your payment request....");

    if (!bookingId) {
      // invalid bookingId
      reject("bookingId is required.");
    } else {
      // make payment

      setTimeout(() => {
        console.log("waiting for payment to be done...");
        const transId = "transupi12345";
        console.log("payment done successfully. Trans Id: ", transId);
        resolve(transId);
      }, 3000);
    }
  });
  return pr;
}

// update this booking to booking history
function updateBookingHistory(transId) {
  const pr = new Promise(function (resolve, reject) {
    if (!transId) {
      reject("invalid transId for history update");
    } else {
      // update booking history
      console.log("updating your booking history...");

      setTimeout(() => {
        console.log("history updated successfully for transaction: ", transId);
        resolve(transId);
      }, 4000);
    }
  });
  return pr;
}

// show booking summary/details
function showBookingSumarry(transId) {
  const pr = new Promise(function (resolve, reject) {
    if (!transId) {
      reject(new Error("Transaction ID is required to show summary."));
    } else {
      setTimeout(() => {
        const summary = `Here is your booking summary for transaction ${transId}: Hotel booked, Payment successful.`;
        console.log("Fetching booking summary...");
        resolve({ summary: summary, transId: transId });
      }, 2000);
    }
  });
  return pr;
}

// update your wallet balance
function updateWalletBalance(transId) {
  const pr = new Promise(function (resolve, reject) {
    if (!transId) {
      reject(new Error("Transaction ID is required to update wallet balance."));
    } else {
      setTimeout(() => {
        console.log("Updating wallet balance...");
        resolve("Wallet updated successfully.");
      }, 2000);
    }
  });
  return pr;
}
