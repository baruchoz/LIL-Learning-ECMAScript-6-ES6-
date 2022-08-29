// one possible reason to use a symbol is if you want to capture a unique identifier and associate that with an object, make it a symbol and you'll never get into naming conflicts.

const id = Symbol();

const courseInfo = {
  title: "JavaScript",
  topics: ["strings", "arrays", "objects"],
  id: "js-course",
};

courseInfo[id] = 42781;
console.log(courseInfo);
