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

  //* ========== ========== ========== ========== ========== ========== ==========
  //* Classes (refer to the basic constructor above to convert a constructor to a class)
  //* ========== ========== ========== ========== ========== ========== ==========

  // 1. create the class declaration

  /**
   *  class Person {
        constuctor(params) {

        } //end of the contructor


       // methods go here
  } // end of the class
  */

  // Creating the Person Contructor function as a Class

  class Person {
    constructor(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    } //close constructor

    calcAge() {
      // you can use the prototype method too outside of the class if you want but lets stick with the new method
      const date = new Date();
      return date.getFullYear() - this.birthYear;
    } // close method
  } // close class

  const Ammi = new Person("Ami", 1978);
  console.log(Ammi);
  console.log(Ammi.__proto__);
  console.log(Ammi.__proto__ === Person.prototype);
  console.log(Ammi.calcAge());

  /**
   * Things to bare in mind
   * 1. classes are NOT hoisted
   * 2. Classes are first class citizens
   * 3. Classes are executed in strict mode by default
   */
})();
