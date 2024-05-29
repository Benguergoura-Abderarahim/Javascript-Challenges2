let even = [];
let numbers = [];
function getEven(even) {
  for (i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 101));
  }
  console.log("This is the array of numbers :", numbers);
  for (number of numbers) {
    if (number % 2 === 0) {
      even.push(number);
    }
  }
  return even;
}

console.log(
  "This is the array of even numbers from the previous array: ",
  getEven(even)
);
