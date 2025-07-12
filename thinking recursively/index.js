let user = {
  name: "omkar",
  address: {
    personal: {
      city: "amravati",
      area: "sainagar",
    },
    office: {
      city: "pune",
      area: {
        landmark: "Tech Hub",
        state: "maharashtra",
      },
    },
  },
};

let finalObject = {};
let magic = (object, parent) => {
  for (let key in object) {
    // if key is an object
    if (typeof object[key] === "object") {
      // call magic recursively
      magic(object[key], `${parent}_${key}`);
    } else {
      // add an entry to finalObject
      finalObject[`${parent}_${key}`] = object[key];
    }
  }
  return finalObject;
};

console.log(magic(user, "user"));
