// JS has a get method and a set method
// a getter or get method gets the value of a specific property
// a setter or set method gets the value of a specific property

// Getters and setters in Objects
let attendance = {
  _list: [],
  set addName(name) {
    this._list.push(name);
  },
  get list() {
    return this._list.join(", ");
  },
};

attendance.addName = "Joanne Starr";
console.log(attendance.list);

attendance.addName = "Bill Burr";
attendance.addName = "Dave Chappelle";

console.log(attendance.list);

// Getters and setters in Classes
class Hike {
  constructor(distance, pace) {
    this.distance = distance;
    this.pace = pace;
  }
  get lengthInHours() {
    return `${this.calcLength()} hours`;
  }
  calcLength() {
    return this.distance / this.pace;
  }
}

const mtTallac = new Hike(10, 2);

console.log(mtTallac.lengthInHours);
