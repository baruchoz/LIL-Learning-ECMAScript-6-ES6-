class Vehicle {
  constructor(description, wheels) {
    this.description = description;
    this.wheels = wheels;
  }
  describeYourself() {
    console.log(
      `I am a ${this.description} 
        with ${this.wheels} wheels.`
    );
  }
}

let coolSkiVan = new Vehicle("cool ski van", 4);

console.log(coolSkiVan);
coolSkiVan.describeYourself();

// Extending the class ( in python its called class inheritance)
class SemiTruck extends Vehicle {
  constructor() {
    // pass the values though the super() function
    super("semi truck", 18);
  }
}

let groceryStoreSemi = new SemiTruck();
groceryStoreSemi.describeYourself();
