let course = new Map();

course.set("react", { desription: "ui" });
course.set("jest", { desription: "testing" });

console.log(course);
console.log(course.react);
console.log(course.get("react"));

// Maps always return the object in order that they were created
let details = new Map([
  [new Date(), "today"],
  [2, { javascript: ["js", "node", "react"] }],
  ["items", [1, 2]],
]);

console.log(details);
console.log(details.size);

details.forEach(function (item) {
  console.log(item);
});
