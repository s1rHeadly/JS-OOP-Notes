(function () {
  "use strict";

  ///////////////////////////////////////
  // Coding Challenge #1

  /* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

  const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
  };

  Car.prototype.accelerate = function () {
    this.speed = this.speed + 10;
    console.log(`Accelerating to ${this.speed} km/ph`);
  };

  Car.prototype.brake = function () {
    this.speed = this.speed - 5;
    console.log(`Braking to ${this.speed} km/ph`);
  };

  Car.prototype.enforceSpeedLimit = function () {
    const limit = 80; //limiter = decalre here than as a param as we dont need a param since we adjusting the speed
    if (this.speed > limit) {
      this.speed = limit;
    }
    console.log(`Resetting to ${this.speed} km/ph`);
  };

  const Bmw = new Car("BMW", 120);
  console.log(Bmw);
  Bmw.accelerate();
  Bmw.accelerate();
  Bmw.brake();
  Bmw.brake();

  const Mercedes = new Car("Mercedes", 190);
  console.log(Mercedes);
  Mercedes.accelerate();
  Mercedes.accelerate();
  Mercedes.brake();
  Mercedes.brake();
  console.log(Mercedes);
  Mercedes.enforceSpeedLimit();
  console.log(Mercedes);
})();
