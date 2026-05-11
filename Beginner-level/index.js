
// <!---------------------------Task-1 pdf BEGINNER LEVEL ------------------------------>

// Task 01 — Declare and Log Variables
// Declare 3 variables using var, let, and const. Assign your name, age, and city. Print all three to the
// console.
// Hint: Use console.log() for each variable.
// var uname = 'jayaprakash'
// let age = 25
// const city = 'palacode'
// console.log(uname, age, city )

// Task 02 — Fix the Variable Name
// Which of these are valid variable names? Fix the invalid ones:
// 5star, _score, first name, $price, class
// Hint: Variable names can start with a letter, _ or $. No spaces allowed.


// Task 03 — Greet with Variable
// Create a variable called greeting and assign it 'Hello'. Then reassign it to 'Good Morning'. Log both values.
// Hint: Use let since you need to reassign.
// let greeting = 'hello';
// console.log(greeting);
// greeting ='Good Morning'
// console.log(greeting);

// Task 04 — Identify Data Types
// For each value below, write what typeof returns:
// 'Hello', 42, true, null, undefined, [1,2,3]
// Hint: Try typeof null — it surprises beginners!

//solution -->

// let values =null;
// console.log( typeof values)


// Task 05 — Null vs Undefined
// Create a variable box and assign null. Create another variable undef without assigning anything. Log both
// and their types.
// Hint: One is intentional emptiness, one is uninitialized.

//solution -->

// let box = null;
// let undef ;

// console.log( typeof box, typeof undef)


// Task 06 — Create an Object
// Create a car object with properties: name, color, and model. Log the entire object.
// Hint: Use curly braces {} and key:value pairs.

// const car ={
//     Cname : "Audi",
//     color : "MoonBlue",
//     Model : "4Audi"
// }
// console.log(car);


// Task 07 — Access Object Properties
// Using the car object from Task 6, log only the name and color using dot notation.

// console.log(car.Cname, car.color)

// Task 08 — Create an Array
// Create an array called myArr with 5 items: a string, a number, a boolean, null, and undefined. Log it.
// Hint: Arrays use [] and items are comma-separated.

// const myArr = ['items', 34, true, null, undefined]
// console.log(myArr);


// Task 09 — String to Number
// Convert the string '42' to a number using Number(). Then log the result and its type.

// let str = '42'
// console.log(typeof str)
// str =Number(str);
// console.log(typeof str)

// Task 10 — Number to String
// Convert the number 100 to a string using String(). Confirm with typeof.
// Hint: String(100) returns '100'.
// str = String(str)
// console.log( typeof str)



// Task 11 — parseInt vs parseFloat
// Use parseInt and parseFloat on '99.99'. Log both results. What is the difference?
// Hint: parseInt cuts the decimal part.

// let num = 99.99;
// num = parseFloat(num)
// console.log(num);


// Task 12 — Basic Math Operations
// Create two variables num1 = 80 and num2 = 30. Perform +, -, *, /, and % on them. Log each result.
// Hint: % gives the remainder (80 % 30 = 20).

// const num1 = parseInt(prompt('enter the Num1'))
// const num2 = parseInt(prompt('Enter the Num2'))
// const operation = prompt('Enter the Math Operations: + , - , / , * , %')

// let result ;
// switch(operation){
//     case "+":
//        result = num1 + num2;
//        break;
     
//     case "-":
//        result = num1 - num2;
//        break;
//        case "*":
//        result = num1 * num2;
//        break;
//        case "/":
//        result = num1 / num2;
//        break;
//        case "%":
//        result = num1 % num2;
//        break;

//        default:
//         result = "No Operation"
// }


// console.log(result);
// Task 13 — Use Math.round
// Round the following numbers: 4.4, 4.5, 4.6. Log each result using Math.round().
// Hint: .5 rounds up!

// let num = 4.6

// num = Math.round(num);

// console.log(num)



// Task 14 — Math.min and Math.max Find the minimum and maximum from: 10, 5, 88, 3, 47, 62. Use Math.min() and Math.max().


// let minValue = Math.min(10, 5, 88, 3, 47, 62);
// let maxValue = Math.max(10, 5, 88, 3, 47, 62);

// console.log(minValue);
// console.log(maxValue);


// Task 15 — Random Number
// Generate a random whole number between 1 and 10 using Math.random() and Math.floor().


// const randomNum = Math.floor((Math.random() * 7 ) + 1);
// console.log(randomNum)




// <!---------------------------Task-2 pdf BEGINNER LEVEL ------------------------------>


// Task 01 — Concatenate firstName and lastName
// Create two variables firstName and lastName. Concatenate them with a space in between using the +
// operator. Log the result.


const firstName = "Jayaprakakash"
const lastName = "Thimmappan"

const result = firstName + " " + lastName
console.log(result)


// Task 02 — Append to a string
// Create a variable val = 'John'. Using +=, append ' Doe' to it. Log the final value.


let val = 'John'
val += 'doe'
console.log(val)

// Task 03 — Find string length
// Create a variable word = 'JavaScript'. Log its length using .length. What number do you get?
let word = 'JavaScript'
console.log(word.length)


// Task 04 — Change case
// Create a variable city = 'chennai'. Log it in UPPERCASE. Then create country = 'INDIA' and log it in
// lowercase.

let city = 'chennai'
let country = 'INDIA'

console.log(city.toUpperCase(), country.toLowerCase())

// Task 05 — Access characters
// Create a string language = 'Python'. Log the first and last characters using index numbers.
let language = 'Python'

console.log(language[0]) // first character
console.log(language[language.length-1]); //character


// Task 06 — Slice a string
// Create fruit = 'Mango'. Slice out just 'ang' using .slice(). Log the result.


let fruit = 'Mango'
console.log(fruit.slice(1,4))


// Task 07 — Split a sentence
// Create sentence = 'I love JavaScript'. Use .split(' ') to split it into an array of words. Log the array.


let sentence = 'I love JavaScript'
console.log(sentence.split(" "))


// Task 08 — Replace a wordCreate str = 'I love Python'. Replace 'Python' with 'JavaScript' using .replace(). Log the result.

let str = 'I love Python'
str = str.replace('Python', 'JavaScript')
console.log(str)

// Task 09 — Build an HTML sentence
// Create name='Ali', age=22, city='Mumbai'. Build this sentence using a template literal:
// My name is Ali, I am 22 years old and I live in Mumbai.

let uname='Ali'
let  uage=22
let ucity ='Mumbai'

let htmlResult = ` My name is ${uname}, I am ${uage} years old and I live in ${ucity}`
console.log(htmlResult)


// Task 10 — Spot the difference
// Write the same sentence twice — once using + concatenation and once using a template literal. Log both.
// Which is easier to read?

// Using + concatenation


console.log("My name is " + uname + " and I am " + uage + " years old.");

// Using template literal
console.log(`My name is ${uname} and I am ${uage} years old.`); // easy way to write the code Html


// Task 11 — Create and log an array
// Create an array called colors with 5 color names. Log the full array, its length, and the 3rd item.

let colors = ['orange', 'black', 'white', 'red', 'violet']
console.log( colors,  colors.length, colors[2])


// Task 12 — Check if it is an array
// Create a variable data = [10, 20, 30]. Use Array.isArray() to check if it is an array. Log the result.

let data = 11;
console.log(Array.isArray(data))



// Task 13 — Add and remove items
// Start with fruits = ['Apple','Banana']. Add 'Mango' to the end using push(). Add 'Grape' to the front using
// unshift(). Log after each step

let fruits = ['Apple','Banana']

fruits.push("Mango")
fruits.unshift("Grape")
console.log(fruits)


// Task 14 — Remove from both ends
// Start with numbers = [1, 2, 3, 4, 5]. Remove from the end using pop(). Remove from the front using shift().
// Log after each removal.

let numbers = [1, 2, 3, 4, 5]

numbers.pop()
numbers.shift()
console.log(numbers)


// Task 15 — Reverse an array
// Create arr = [1, 2, 3, 4, 5]. Reverse it using .reverse(). Log the result.


let arr = [1, 2, 3, 4, 5]

arr.reverse()
console.log(arr)