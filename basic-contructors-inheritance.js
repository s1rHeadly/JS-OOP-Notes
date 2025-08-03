(function () {
  "use strict";

  //* ==========================================================
  //* Prototypes => creating methods / functions in the object
  //* ==========================================================

  // create the constructior object using a capital letter
  const Person = function (firstName, birthYear) {
    // this is bound to the object
    this.firstName = firstName;
    this.birthYear = birthYear;
  };

  Person.prototype.calcAge = function () {
    const date = new Date();
    return date.getFullYear() - this.birthYear;
  };

  // new instance of the person object
  const david = new Person("David", 1978);

  // =================
  // using Prototypes
  // =================

  // console.log(david); //shows the entire object
  //console.log(david.__proto__); //shows use all the methods inside the prototype (ie calc age)

  // console.log(Person.prototype);
  // console.dir(Person.prototype.constructor); // show the Person Object itself with params and prototype methods

  //* ==========================================================
  //* Prototypes => creating custom prototype methods
  //* ==========================================================

  const fruits = ["apple", "banana", "cherry"];
  // 1. Create an Array (above)
  // 2. Console log its prototype to see its methods / console.log(fruits.__proto._proto__)
  // 4. we get filter, map etc
  // 5. this add a new method called 'last'

  Array.prototype.last = function () {
    return this[this.length - 1];
  };

  // 6. test it using fruits.last();
  console.log("new method is: ", fruits.last()); // "cherry"

  const myObj = {
    id: 1,
    name: "david",
    location: "sydney",
  };

  console.log(myObj.__proto__); // gives us the list of all the properties so we can jkust drill into them
  console.log(myObj.hasOwnProperty("id"));
  console.log(myObj.hasOwnProperty("id"));
  console.log(Object.entries(myObj));

  const domEl = document.querySelector("h1");
  console.log(domEl.__proto__);

  // when doin checks is best to use instanceOf() on arrays, objects, domElements

  if (domEl instanceof HTMLElement) {
    console.log("It’s a DOM element");
  }

  const arr = [];

  if (arr instanceof Array) {
    console.log("It’s an array");
  }
})();
