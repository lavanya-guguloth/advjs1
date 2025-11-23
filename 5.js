const username = "Lavanya";
const course = "JavaScript";

console.log(`Hello ${username}, welcome to the ${course} course!`);
const name = "Sam";
const age = 21;

const student = {
  name,   // shorthand for name: name
  age,    // shorthand for age: age
  greet() {   // shorthand for greet: function() { ... }
    console.log("Hello");
  }
};

student.greet();
const getFullName = (first, last) => `${first} ${last}`;

console.log(getFullName("Sam", "Smith")); // Sam Smith // Hello