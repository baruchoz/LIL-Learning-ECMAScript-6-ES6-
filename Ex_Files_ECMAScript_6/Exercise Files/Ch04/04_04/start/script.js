// for/of can be used to loop over iterable objects like arrays, strings, maps, and sets.

// Iterating over a string
for (let letter of "JavaScript") {
  console.log(letter);
}

// Iterating over an array
// Done using arrays
// let topics = ["JavaScript", "Node", "Css"];

// for (let topic of topics) {
//   console.log(topic);
// }

//  Iterating over an array using Map()
let topics = new Map();

topics.set("HTML", "/topic/html");
topics.set("CSS", "/topic/css");
topics.set("JavaScript", "/topic/javascript");

console.log("Basic Iteration:");
for (let topic of topics) {
  console.log(topic);
}

// .keys() - Returns the keys of the map
console.log("Iteration of keys:");
for (let topic of topics.keys()) {
  console.log(topic);
}

// .values() - Returns the values of the map (the route in this instance)
console.log("Iteration of values:");
for (let route of topics.values()) {
  console.log(`The course description can be found at ${route}`);
}

// .entries()- Returns the key-value pairs of the map
console.log("Iteration of key-value pairs:");
for (let topic of topics.entries()) {
  console.log(topic);
}
