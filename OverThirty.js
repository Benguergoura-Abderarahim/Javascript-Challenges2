let person = [
  { name: "Rahim", age: 32, email: "rahim0@gmail.com" },
  { name: "Karim", age: 24, email: "karim@gmail.com" },
  { name: "Amel", age: 19, email: "amel@gmail.com" },
  { name: "Reda", age: 45, email: "reda@gmail.com" },
  { name: "Wissam", age: 13, email: "wissam@gmail.com" },
];
console.log("This is the dataset(object) of peoples : ", person);

// Filter by age > 30
function isOverThiry(people) {
  return people.filter((person) => person.age > 30);
}

let overThiry = isOverThiry(person);

console.log("Info of peoples over 30: ", overThiry);
