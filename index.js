function calcSum(x, y) {
  return x + y;
}

// const calcSum = function (x, y) {
//     return x + y;
// }

// function withCallBack(xyz) {
//   console.log("hello world!");
//   xyz();
// }

// function sayBye() {
//   console.log("Bye bye world!");
// }

// withCallBack(sayBye);

// withCallBack(function () {
//   console.log("Bye Bye!");
// });

// [1, 2, 3].forEach((e) => {
//   console.log(e * 10);
// });

//IIFE
// (function () {
//   console.log("I dont need to be called, i call myself!");
// })();

// const button = document.getElementById("button");
// button.addEventListener("click", () => {
//   console.log("clicked");
// });

// setTimeout(() => {
//   console.log("after 5 sec");
// }, 5000);

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (number) {
//   console.log(number * 2);
// });

// function divideNumbers(a, b, onSuccess, onError) {
//   if (b !== 0) {
//     onSuccess(a / b);
//   } else {
//     onError("Division by zero is not allowed");
//   }
// }

// divideNumbers(
//   10,
//   0,
//   function (result) {
//     console.log("Division result:", result);
//   },
//   function (error) {
//     console.log("Error:", error);
//   }
// );

// function eatDinner(xyz) {
//     console.log('Eating the dinner!');
//     xyz();
//   }

//   function eatDessert() {
//     console.log('Eating the dessert!');
//   }

//   eatDinner(eatDessert); // <== When passing a function as an argument, do not use ()

//   // Eating the dinner!
//   // Eating the dessert!

// function putShirt() {
//   console.log("Putting on the shirt.");
// }

// function putSocks() {
//   console.log("Putting on the socks.");
// }

// function putPants() {
//   console.log("Putting on the pants.");
// }

// function putShoes() {
//   console.log("Putting on the shoes.");
// }

// function getReadyForWork(callback1, callback2, callback3, callback4) {
//   callback1();
//   callback2();
//   callback3();
//   callback4();
//   console.log("I'm ready to go to work!!!");
// }

// getReadyForWork(putShoes, putSocks, putPants, putShirt);

// [1,2,3].forEach(function(e) {})

// function printName(name, anonFunc) {
//   anonFunc(name);
// }

// printName("sandra", function (name) {
//   console.log(name[0].toUpperCase() + name.slice(1));
// });

// function getLength(str, anonFunc) {
//   anonFunc(str);
// }

// getLength("aleksandra", function (str) {
//   console.log(`${str} has ${str.length} letters.`);
// });

// => aleksandra has 10 letters.

// getLength("nick", function (str) {
//   console.log(`${str} has ${str.length} letters.`);
// });
// => nick has 4 letters.

// document.addEventListener("click", function () {})

// const isOnline = false;
// if (isOnline) return "online";

// const sumNumbers = (a, b) => {
//   console.log(a, b);
//   return a + b;
// };

// const sumNumbers = (a, b) => a + b;
// console.log(greetUser("omar"));
// function greetUser(user) {
//   return user.toUpperCase();
// }
// const greetUser = (user) => user.toUpperCase();
// console.log(sumNumbers(2, 2));

// function printSomething(a,b,c,d,e) {
//   console.log(arguments);
//   return a + b+c + d + e;
// }

// function printSomething() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   // console.log();
//   return sum;
// }

// console.log(printSomething(1, 2, 3, 4, 5));

// function sumArr (arrOfNumbers) {
//     for (let i = 0; i < arrOfNumbers.length; i++) {
//         sum += arrOfNumbers[i];
//       }
// }

// sumArr([1,2,3,4])
// [1,2,3,4].reduce()
// [1,2,3,4].map()
// [1,2,3,4].filter()

// const numbers = 1;
// const updatedNumbers = numbers.map(function (element, index, array) {
//   return element * 10;
// });

// const numbers = [1, 2, 3, 4];
// const updatedNumbers = numbers.map(function (element, index, array) {
//   return element * 10;
// });

// const updatedNumbers = [];
// numbers.forEach(function (element, index, array) {
//   updatedNumbers.push(element * 10);
// });

// console.log(numbers, updatedNumbers);

// Array.prototype.customForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// [1, 2, 3, 4].customForEach((e) => console.log(e * 10));

// const students = [
//   { name: "Alice", grade: 95 },
//   { name: "Bob", grade: 80 },
//   { name: "Charlie", grade: 90 },
//   { name: "Dave", grade: 75 },
// ];

// const updatedStudentsGrade = students.map((e) => {
//   e.grade += 5;
//   return e;
// });
// console.log(JSON.stringify(updatedStudentsGrade));

// let sumOfGrades = 0;
// students.forEach((student) => {
//   sumOfGrades += student.grade;
// });
// console.log(sumOfGrades);

// let grade = 0;
// students.map((student) => {
//   grade += student.grade;
// });

// console.log(grade);

// const sumGrades = students.reduce((acc, ele) => {
//   return acc + ele.grade;
// });
// console.log(sumGrades);

// const numbers = [2, 4, 6, 8];
// const total = numbers.reduce(function (accumulator, currentValue) {
//   console.log(
//     "accumulator is: ",
//     accumulator,
//     "and current value is: ",
//     currentValue
//   );
//   return accumulator + currentValue;
// });

// console.log("total is: ", total);

// const numbers = [12, 9, 1, 8];
// const total = numbers.reduce((accumulator, currentValue, i) => {
//   console.log(i, accumulator, currentValue);
//   return accumulator + currentValue;
// }, 23);

// console.log("total is: ", total);

// let result = 23;
// for (let i = 0; i < numbers.length; i++) {
//   result += numbers[i];
// }

// const people = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "Omar", age: 18 },
//   { name: "Joy", age: 18 },
// ];

// const groupedPeople = people.reduce((acc, curr) => {
//   const key = curr.age;
//   if (!acc[key]) {
//     acc[key] = [];
//   }
//   acc[key].push(curr);
//   return acc;
// }, {});

// console.log(groupedPeople);

// const words = ["This", "is", "one", "big", "string"];
// const bigString = words.reduce((sum, word) => sum + word);
// console.log(bigString);

// const numbers = [1, 2, 3, 4, 5];
// const arrOfNumbers = [
//   { name: "Bob", age: 30 },
//   { name: "Sarah", age: 29 },
// ];

// const sum = arrOfNumbers.reduce(function (acc, curr) {
//   console.log(acc);
//   return acc + curr.age;
// }, 0);
// const sum = numbers.reduce(function (acc, curr) {
//   console.log(acc);
//   return acc + curr;
// });

// console.log(sum);

// const menu = [
//   { name: "Carrots", calories: 150 },
//   { name: "Steak", calories: 350 },
//   { name: "Broccoli", calories: 120 },
//   { name: "Chicken", calories: 250 },
//   { name: "Pizza", calories: 520 },
// ];

// const avgCalories = menu.reduce(function (sum, food) {
//   return sum + food.calories;
// }, 0);
// console.log(avgCalories / menu.length);

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Smartphone", price: 800 },
//   { name: "Smartphone", price: 900 },
//   { name: "Headphones", price: 100 },
//   { name: "Tablet", price: 500 },
// ];

// const filteredProducts = products.filter((element) => {
//   return element.price < 600;
// });
// const filteredProducts = products.filter((element) => {
//   return element.name !== "Smartphone";
// });

// console.log(filteredProducts);

// const fruits = ["apple", "banana", "cherry", "grape", "orange"];
// const filteredFruits = fruits.filter((fruit) => {
//   return fruit.includes("a");
// });
// console.log(filteredFruits);

// const people = [
//   { name: "Candice", age: 25 },
//   { name: "Tammy", age: 30 },
//   { name: "Allen", age: 20 },
//   { name: "Nettie", age: 21 },
//   { name: "Stuart", age: 17 },
//   { name: "Bill", age: 19 },
// ];

// const filteredPeople = people.filter((person) => {
//   return person.age >= 21;
// });
// console.log(filteredPeople);

// const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18, 111111];
// // numbers.sort();
// numbers.sort((a, b) => {
//   return b - a;
// });
// console.log(numbers);

// const words = [
//   "Hello",
//   "Goodbye",
//   "AA",
//   "First",
//   "A",
//   "a",
//   "Second",
//   "b",
//   "Third",
// ];
// // const arr = [{ name: "Sarah" }, { name: "Bob" }, { name: "Xavier" }];
// // const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18, 111111];

// const sortedWords = words.sort((a, b) => b.localeCompare(b));
// console.log(sortedWords);

// const arr = [{ name: "Sarah" }, { name: "Bob" }, { name: "Xavier" }];

// const sortedArr = arr.sort((a, b) => {
//   return b.name.localeCompare(a.name);
// });

// console.log(sortedArr);

// const words = [
//   "Hello",
//   "Goodbye",
//   "AA",
//   "First",
//   "A",
//   "a",
//   "Second",
//   "b",
//   "Third",
// ];

// const sortedWords = words.sort((a, b) => {
//   return a.localeCompare(b);
// });

// console.log(sortedWords);

// const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18, 111111];
// const sortedNumbers = numbers.sort((a, b) => {
//   return a - b;
// });
// console.log(sortedNumbers);

// const arr = [{ name: "Sarah" }, { name: "Bob" }, { name: "Xavier" }];
// const sortedArr = arr.sort((first, second) => {
//   return first.name.localeCompare(second.name);
// });
// console.log(sortedArr);

const arr = [1, 2, 3, 4, 5];
const reversedArr = arr.slice().reverse();
console.log(reversedArr);
console.log(arr);
