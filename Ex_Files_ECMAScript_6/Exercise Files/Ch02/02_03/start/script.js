function print(firstName) {
  console.log(`Hello ${firstName}`);
}

function createEmail(firstName, price) {
  let shipping = 5.95;
  console.log(`Hi ${firstName}! Thanks for your purchase!
    Total: $${price}
    Shipping: $${shipping}
    Grand Total: $${shipping + price}
  `);
}

print("baruch");
createEmail("Joe", 200);
