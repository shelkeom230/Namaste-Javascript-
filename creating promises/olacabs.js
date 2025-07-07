// Declare globalBookingId in a scope accessible throughout the Promise chain
let globalBookingId;

const locations = ["amravati", "nagpur", "dhule"];

// Start the cab booking process
bookCab(locations)
  .then(function (bookingId) {
    // Store the bookingId for later use in the chain
    globalBookingId = bookingId;
    console.log("Booking done. Booking ID: ", bookingId);
    // Proceed to make payment with the bookingId
    return makePayment(bookingId);
  })
  .then(function (transId) {
    console.log("Payment done. Transaction ID: ", transId);
    // Update booking history with the transaction ID
    return updateBookingHistory(transId);
  })
  .then(function (transId) {
    console.log("Booking history updated successfully for transId: ", transId);
    // Show booking details using both globalBookingId and transId
    return showBookingDetails(globalBookingId, transId);
  })
  .then(function (transId) {
    // Update wallet balance with the transaction ID
    return updateWalletBalance(transId);
  })
  .catch(function (err) {
    // Catch any error that occurs in the entire Promise chain
    console.error(
      "An error occurred during the cab booking process:",
      err.message
    );
  })
  .finally(function () {
    // This block will always execute, regardless of success or failure
    console.log("Thanks for using Ola... !");
  });

function bookCab(locations) {
  return new Promise(function (resolve, reject) {
    if (!locations || locations.length === 0) {
      // Reject with an Error object for better debugging
      reject(new Error("please choose a boarding location for the cab."));
    } else {
      console.log("Please wait, we are reserving your cab...");

      setTimeout(() => {
        console.log("Cab booked successfully!");
        const bookingId = "cb12345"; // Simulate a generated booking ID
        resolve(bookingId);
      }, 3000); // Simulate network delay
    }
  });
}

// makePayment --> make payment with bookingId given
function makePayment(bookingId) {
  return new Promise(function (resolve, reject) {
    if (!bookingId) {
      reject(new Error("Booking ID is required for making payment."));
    } else {
      console.log("Completing your payment...");

      setTimeout(() => {
        console.log("Payment done successfully!");
        const transId = "tr12345"; // Simulate a generated transaction ID
        resolve(transId);
      }, 3000); // Simulate network delay
    }
  });
}

// updateBookingHistory --> add a new booking instance to user account for given transId
function updateBookingHistory(transId) {
  return new Promise(function (resolve, reject) {
    // Corrected validation: ensure transId is a string and includes "tr"
    if (typeof transId !== "string" || !transId.includes("tr")) {
      reject(
        new Error(
          "Invalid transaction ID. Please provide a correct transaction ID."
        )
      );
    } else {
      console.log("Updating your booking history...");

      setTimeout(() => {
        console.log(
          "Booking history updated successfully!. Transaction ID: ",
          transId
        );
        resolve(transId);
      }, 3000); // Simulate network delay
    }
  });
}

// showBookingDetails --> show summary of booking details
function showBookingDetails(bookingId, transId) {
  return new Promise(function (resolve, reject) {
    if (!transId || !bookingId) {
      reject(new Error("Booking or transaction data is incomplete."));
    } else {
      console.log("Generating your booking details...");

      setTimeout(() => {
        console.log(
          `Booking details: BookingId: ${bookingId}, TransactionId: ${transId}`
        );
        resolve(transId);
      }, 3000); // Simulate network delay
    }
  });
}

// updateWalletBalance --> update your wallet balance after current transaction
function updateWalletBalance(transId) {
  return new Promise(function (resolve, reject) {
    if (!transId) {
      reject(
        new Error("Transaction ID is required for updating wallet balance.")
      );
    } else {
      console.log("Updating your wallet balance...");

      // Corrected: Changed setInterval to setTimeout for a one-time update
      setTimeout(() => {
        console.log(
          "Wallet balance updated successfully for transId: ",
          transId
        );
        resolve(transId);
      }, 3000); // Simulate network delay
    }
  });
}
