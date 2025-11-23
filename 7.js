const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const merged = [...arr1, ...arr2];
console.log(merged);
const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20)); 
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

// Multi-level destructuring
const { name, address: { city, pin } } = user;

console.log(name); // Alice
console.log(city); // Bangalore
console.log(pin);  // 560001        // 30 // [1, 2, 3, 4, 5]