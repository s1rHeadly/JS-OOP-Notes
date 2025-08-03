(function () {
  "use strict";

  // create the constructior object using a capital letter
  const Person = function (firstName, birthYear) {
    // this is bound to the object
    this.firstName = firstName;
    this.birthYear = birthYear;

    // NEVER DO THIS WHEN WE WANT TO CREATE FUNCTIONS ?/ METHODS => use protptypes
    // this.calcAge = function () {
    //   const date = new Date();
    //   return date.getFullYear() - birthYear;
    // };
  };

  const david = new Person("David", 1978);
  console.log({ david });
  console.log(david instanceof Person); // is the david object an instance of the Person object

  console.log("has property=> ", david.hasOwnProperty("firstName"));
  console.log("has property=> ", david.hasOwnProperty("vehicle"));

  //* ==========================================================
  //* Prototypes => creating methods / functions in the object
  //* ==========================================================

  console.log(Person.prototype);

  // create the method using prototype and do whatever you want inside it
  // in the console, open up the object and you can see this under the constructor
  Person.prototype.calcAge = function () {
    const date = new Date();
    return date.getFullYear() - this.birthYear;
  };

  // console.log(david.calcAge()); // 47
  // console.log(Person.prototype); // calcAge();
  // console.log(david.__proto__); //  calcAge(); // shows the contructor prototype

  //? The correct way to add methods to objects via prototype only!
  // add another prototype method and cecked
  Person.prototype.vehicle = function (boolean) {
    return !boolean
      ? `${this.firstName} does not own a car`
      : `${this.firstName} owns a car`;
  };

  const alison = new Person("Alison", 1980);
  console.log({ alison });
  alison.vehicle(false); // we can get the true or false value from somwhere else and pass it in
  console.log(alison.vehicle()); // Alison does not own a car (we called the method on the alison object)

  //? The correct way to add methods to objects via Property

  // Add the param to the Person object
  const NextPerson = function (firstName, birthYear, ownsCar) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.ownsCar = ownsCar;
  };
  // proto based on results coming from the params of the nextPerson Object
  NextPerson.prototype.vehicle = function () {
    return !this.ownsCar
      ? `${this.firstName} does not own a car`
      : `${this.firstName} owns a car`;
  };

  const gary = new NextPerson("Gary", 1980, true);
  console.log({ gary });
  console.log(gary.vehicle()); //evoke the function to get whatever is in the function
})();
