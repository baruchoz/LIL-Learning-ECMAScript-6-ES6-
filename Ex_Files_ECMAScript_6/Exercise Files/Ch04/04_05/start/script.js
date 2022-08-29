// Create a class- first letter convention is uppercase
class Vehicle {
  // then we use the constructor() to create properties
  constructor(description, wheels) {
    this.description = description;
    this.wheels = wheels;
  }
  // We then can create functions in a class which are called methods
  describeYourself() {
    console.log(`I am a ${this.description} with ${this.wheels} wheels`);
  }
}
// Here we create an instance of the Vehicle class
let coolSkiVan = new Vehicle("cool ski van", 4);

console.log(coolSkiVan);
coolSkiVan.describeYourself();
