console.log("-----------BASIC-----------------");

// Comments
// This is a single-line comment

/*          

No pueden ir animadas dentro de un comentario de múltiples líneas

This is a multi-line comment
that spans multiple lines.

*/

console.log("----------------------------");

// Undefined Variables
let firstName = "John";
let lastName = "Doe";
console.log("Full Name:", firstName + " " + lastName);
console.log("----------------------------");

// null Values
let middleName = null;
console.log("Middle Name:", middleName);
console.log("----------------------------");

// Booleans
let isStudent = true;
console.log("Is Student:", isStudent);
console.log("----------------------------");

// Numbers
let age = 25;
let height = 5.9;
console.log("Age:", age);
console.log("Height:", height);
console.log("----------------------------");

// Strings
let greeting = "Hello, World!";
console.log(greeting);

console.log("----------------------------");

// Basic Operations
let sum = age + 5;
let fullGreeting = greeting + " My name is " + firstName + ".";
console.log("Sum of Age + 5:", sum);
console.log(fullGreeting);
console.log("----------------------------");

// Comments
// This is a single-line comment

/*          
This is a multi-line comment
that spans multiple lines.
*/

// Checking Types

console.log("Type of firstName:", typeof firstName);
console.log("Type of age:", typeof age);
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of middleName:", typeof middleName);
console.log("Type of undefined variable:", typeof someUndefinedVar);
console.log("----------------------------");

// varaibles with let and const
let city = "New York";
const country = "USA";
console.log("City:", city);
console.log("Country:", country);
// country = "Canada"; // This will throw an error because 'country' is a constant

// Variables can also be declaring in one line separated by comma, however
// I recommend to use a seperate line to make code more readble
let name = "Asabeneh",
  job = "teacher",
  live = "Finland";
console.log(name, job, live);
console.log("----------------------------");

// Variable Reassignment
let score = 10;
console.log("Initial Score:", score);
score = 20;
console.log("Updated Score:", score);
console.log("----------------------------");

// Basic Arithmetic Operations
