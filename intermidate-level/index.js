// Task 01 — camelCase Naming Practice
// Rewrite these variable names in camelCase: first_name, last_name, phone_number, home_address,
// birth_year. Then assign dummy values to each.


let firstName = "Rocky"
let lastName = "Bhai";
let phoneNumber = 7999;
let homeAddress = "xx village, xx district";
let birthYear = '04-04-2004'


// Task 02 — const vs let Decision
// Declare 5 variables. For each, decide whether const or let is correct and explain why:
// pi value, user's current score, today's date string, app name, loop counter.

const piValue = 3.14159;
let currentScore = 0;
const todaysDate = "2026-05-11";
const appName = "myGYM";
let loopCounter = 0;

// Task 03 — Object with Method
// Add a start() method to the car object that logs 'Engine started!'. Call the method after creation.

const car ={
    start: function (){
        console.log('Engine Started');
    }
}
car.start();


// Task 04 — Type Coercion Experiment
// Run these and explain what you get:
// Number(true), Number(false), Number(null), Number('hello'), Number([1,2,3])

console.log(Number(true),Number(false),  Number(null), Number('hello'), Number([1,2,3]) )

// Task 05 — NaN Detection
// Try Number('5 + 5'). What do you get? Use isNaN() to check if a value is NaN. Log both.

console.log(Number('5+5'))
console.log(isNaN(Number('5 + 5')))


// Task 06 — By Value vs By Reference
// Prove by value: Create a = 10, b = a. Change b to 20. Log a and b — are they different?
// Prove by reference: Create obj1 = {name:'Jagan'}, obj2 = obj1. Change obj2.name. Log both objects.

let a = 10
let b;
b= a;

console.log(a, b)

let  obj1 = {name:'Jagan'}
let obj2;
obj2 = obj1;
console.log(obj2.name)


// Task 07 — Math.abs and Math.sqrt
// Find the absolute value of -75 and the square root of 144. Log both with a label.


let neg = -75;
let root = 144
console.log(Math.abs(neg), Math.sqrt(root))

// Task 08 — Math.ceil and Math.floor
// Apply Math.ceil and Math.floor to: 3.1, 3.9, -3.1, -3.9. Log all 8 results.

console.log(Math.ceil(3.1))
console.log(Math.ceil(3.9))
console.log(Math.ceil(-3.1))
console.log(Math.ceil(-3.9))
console.log(Math.floor(3.1))
console.log(Math.floor(3.9))
console.log(Math.floor(-3.1))
console.log(Math.floor(-3.9))

// Task 09 — Random Range Formula
// Write a formula to generate a random number between 50 and 100. Run it 5 times and log each result.
let min = 50;
let max = 100;

for(let i =1 ; i<=5; i++){

let formulas = Math.floor(Math.random() * (max - min +1)) + min;

console.log(formulas)
}

// Task 10 — Array of Objects
// Create an array called students with 3 objects. Each object should have name and grade properties. Log
// the full array.


const students =[
    {
        sname : 'Anil',
        grade : 'B'
    },
    {
        sname : 'kumar',
        grade : 'A'
    },
    {
        sname : 'jhon',
        grade : 'c'
    }

]

console.log(students)


// Task 11 — Multiple Object Properties
// Create a person object with at least 6 properties (name, age, city, job, hobby, isStudent). Log it and also
// log each property separately.

const person ={
    sname : "Anil",
    age : 34,
    city : "Maharastra",
    job: "Software developer",
    hobby : "Trending Developement",
    isStudent : true
}

console.log(
    person.sname,
    person.age,
    person.city,
    person.job,
    person.hobby,
    person.isStudent
)


// Task 12 — Const with Object Mutation
// Declare const user = {name:'Jagan'}. Try changing user.name to 'Javid'. Does it work? Why?Now try reassigning user = {name:'Javid'}. What happens?

const user = {name:'Jagan'}

user.name = 'javid'

// user = {name:'Javid'}

// console.log(user)


// Task 13 — String Conversion Edge Cases
// Convert to string and log: 0, false, null, undefined, [], {}. What do you notice?

console.log(String(0));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));
console.log(String([]));
console.log(String({}));

// Task 14 — Chained Math Operations
// Calculate: ((100 + 50) * 2 - 30) / 5. Then verify using Math.round() on the result.

let Calculate = ((100 + 50) * 2 - 30) / 5
console.log(Math.floor(Calculate))


// Task 15 — typeof All Types
// Create one variable for each primitive type and one array and one object. Log typeof for each. Make a
// table of your results.

let userName = "Rocky";         
let age = 25;                    // Number
let isStudent = true;            // Boolean
let emptyValue = null;           // Null
let notAssigned;                 // Undefined
let uniqueId = Symbol("id");     // Symbol
let bigNumber = 123456789n;      // BigInt

let colors = ["red", "blue"];    // Array
let user1 = { name: "Rocky" };    // Object


console.log(typeof userName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof emptyValue);
console.log(typeof notAssigned);
console.log(typeof uniqueId);
console.log(typeof bigNumber);
console.log(typeof colors);
console.log(typeof user);