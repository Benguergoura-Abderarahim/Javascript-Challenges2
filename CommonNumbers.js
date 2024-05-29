let arrayA = [];
let arrayB = [];
let commonNumbers = [];
function getCommons(commonNumber) {
  for (i = 0; i < 15; i++) {
    arrayA.push(Math.floor(Math.random() * 101));
    arrayB.push(Math.floor(Math.random() * 101));
  }
  console.log("This is the first array of numbers:", arrayA);
  console.log("This is the second array of numbers:", arrayB);

  commonNumber = arrayA.filter((number) => arrayB.includes(number)); //take a number from arrayA & check if it's included in arrayB (used as a filter)
  return commonNumber;
}

console.log(
  "This is the array of common numbers of the previous arrays: ",
  getCommons(commonNumbers)
);
