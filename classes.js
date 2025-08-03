(function () {
  "use strict";

  /**
   * --Previous Consructor Object--
    const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    };

     --Previous Consrtuctor Method --
    Person.prototype.calcAge = function () {
    const date = new Date();
    return date.getFullYear() - this.birthYear;
    };

    // create new instance of the constructor 
    const david = new Person("David", 1978);
    // call the calcAge constructor Method
    david.calcAge();
  */
})();
