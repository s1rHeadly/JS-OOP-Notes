/**
 * Getters - can access properties
 * Setters - can change (mutate) properties
 *
 * getters and setters are a clean way to control how properties are accessed and updated on an object.
 *
 */

/*
  Example with a basic object
  We can have an object with poperties and values, but also getters and setters that can create new properties and values etc

*/

// const person = {
//   firstName: 'John',
//   lastName: 'Smith',
//   dob: 1978
// }

// Now how do we get this persons age? we can use a getter

const person = {
  firstName: "John",
  lastName: "Smith",
  dob: 1978,

  // here we create the getter INSIDE the object (as part of the object)
  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.dob; // returns an age of 47
  },

  // but lets say he filled out the dob wrong and his age is 35, not 47 as we had calculated
  // we create the setter
  set age(newAge) {
    //setters always need a param!
    const currentYear = new Date().getFullYear();
    this.dob = currentYear - newAge;
  },

  // ANOTHER EXAMPLE = SET A FULLNAME PROPERTY (PERSON.FULLNAME)
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    // name is what we have as a param which is david mchale (person.fullName = "David Mchale")
    let [first, last] = name.split(" "); // convert to an array
    this.firstName = first; // reassign value to firstName
    this.lastName = last; //  reassign value to lastName
  },
};
// => call the getter
console.log(person.age); // then we can access the setter from OUTSIDE of the function
// => then set the setter value param
person.age = 35; // use the new age given
// => now preview the object again
console.log(person); // now the dob has been updated to 1995

console.log(person.fullName);

console.log("test before");
person.fullName = "David Mchale";
console.log("test after");

console.log(person);
