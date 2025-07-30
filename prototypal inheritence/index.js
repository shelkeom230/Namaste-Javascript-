// inheritence is totally different in js than classical inheritence
// one object trying to access the properties of other objects, just it is like that only.

let arr = ["akshay", "aditya"];
// now , arr has access to all of the applicable methods and properties just by putting . in console

// same is in the case of object
let object = {
  name: "Akshay",
  city: "Deharadun",
  getIntro: function () {
    console.log(`${this.name} from ${this.city}`);
  },
};

/*
function fun() {

}
  */
// function are somewhat objects in js

/*
whenever you create anything in js,
js engine attaches these properties and methods bind together in an object to your object and that's why, you can get access to all of these things.
*/

let object2 = {
  name: "Aditya",
};

// never do this in daily coding
object2.__proto__ = object; //now, you can access object's properties and methods inside object2 as object2 prototype now contains object as well

// in short, object2 is inheriting properties of object
