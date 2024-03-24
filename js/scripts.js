

// 1. Array and List Operations:

// Declare an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Find the sum of all elements
const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
console.log("Sum of numbers:", sum); // Output: 15

// Find the minimum and maximum values
const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);
console.log("Minimum value:", minValue); // Output: 1
console.log("Maximum value:", maxValue); // Output: 5

// Filter even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even numbers:", evenNumbers); // Output: [2, 4]

// Declare a list of names
const names = ["Alice", "Bob", "Charlie", "David"];

// Find a specific name
const index = names.indexOf("Bob");
console.log("Bob's index:", index); // Output: 1 (index starts at 0)

// Remove a name
const removedName = names.splice(2, 1)[0]; // Remove "Charlie"
console.log("Removed name:", removedName);
console.log("Names after removal:", names); // Output: ["Alice", "Bob", "David"]

// Reverse the list
names.reverse();
console.log("Reversed names:", names); // Output: ["David", "Bob", "Alice"]

// 2 Function with Arguments and Return Values:

function createGreeting(name) {
  return `Hello, ${name}!`;
}

const greeting = createGreeting("Alice");
console.log(greeting); // Output: Hello, Alice!


// 3. Conditional Statements:

const age = 25;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

const isStudent = true;
const studentStatus = isStudent ? "Student" : "Not a student";
console.log("Student status:", studentStatus);


// 4. Loops:

for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}

let j = 0;
while (j < 3) {
  console.log("Looping...");
  j++;
}


// 5. Object Example:

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  }
};

person.greet(); // Output: Hello, my name is John Doe.
