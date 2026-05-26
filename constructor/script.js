function Car (brand, model){
    this.brand = brand,
    this.model =model

    this.getCarName = function (){
       return this.brand  + " " + this.model
    }

}

const car1 = new Car("Toyota", "Camry");

const car2 = new Car("Audi", "007")

console.log(car1.getCarName())
console.log(typeof car1)
console.log(car2.getCarName())
console.log(typeof car2)

console.log('----------Compare primitive string vs new String().')

let str1 = "Audi";
let str2 = new String("Audi");

console.log(str1 == str2);   // true
console.log(str1 === str2);  // false


console.log('----------Compare primitive number vs new Number().')
let num1 = 17;
let num2 = new Number(17);

console.log(num1 == num2);   // true
console.log(num1 === num2);  



console.log('---------------Create arrays using [] and new Array().')

let arr1 = [];
let arr2 = new Array();
console.log(arr1 == arr2);   // false
console.log(arr1 === arr2);  // false

Array.prototype.getLastElement = function(){
    return this[this.length-1]
}

const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.getLastElement());



const colors = new Array("Red", "Blue", "Green");

console.log(colors);

console.log('-------------- Create objects using {} and new Object().')
const obj1 = {};
const obj2 = new Object();

console.log(typeof obj1); // object
console.log(typeof obj2); // object



console.log(this) // window

function globel(){
    console.log(this)
}
globel(); //window



function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}

const std1 = new Student("Jay", 33, "A")
const std2 = new Student("Roy", 35, "A+")
const std3 = new Student("Mathew", 40, "B")

console.log(std1)
console.log(std2)
console.log(std3)

Student.prototype.getResult = function (){
    return this.name + " got grade " + this.grade;
}

console.log(std1.getResult())
console.log(std2.getResult())
console.log(std3.getResult())





console.log(fruits.getLastElement())



String.prototype.toReverse = function (){
    return this.split('').reverse().join('');
}

const string1 = "Baby";

console.log(string1.toReverse())



