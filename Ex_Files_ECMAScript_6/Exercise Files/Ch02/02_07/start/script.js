let books = new Set();
books.add("Pride and Prejudice");
books.add("War and Peace").add("Oliver Twist");
books.add("Pride and Prejudice");

console.log(books);
console.log(books.size);

books.delete("Oliver Twist");

//  Cannot use map on Sets
// books.map(function (item) {
//   console.log(item);
// });

books.forEach(function (item) {
  console.log(item);
});

console.log("has Oliver Twist", books.has("Oliver Twist"));
