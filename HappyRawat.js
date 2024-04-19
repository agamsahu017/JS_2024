// console.log("All the best");

// Dataset

// const element= document.querySelector("div")
// const id=element.id
// const info=element.dataset
// const info2=element.dataset.info
// console.log(id);
// console.log(info);
// console.log(info2);

//

// let str1= "Hello"
// let str2= "World"

// const result= str1.concat(" ",str2)
// console.log(result);

//
//substring - extract a part of the string

// const part= result.substring(2,7)
// console.log(part);

//Spread operator example

// const array = [1, 2, 3];
// console.log(...array);

// const copiedArray = [...array];
// copiedArray[4] = 69;
// console.log(array);
// console.log(copiedArray);
// console.log(copiedArray[3]);
// console.log(array);
// console.log(copiedArray);

//Merging an array

// const array2 = [4, 5];
// const mergedArray = [...array, ...array2];
// console.log(mergedArray);

//Passing multiple arguements to a function

// function sum(a, b, c, d, e, f) {
//   console.log(a + b + c + d + e);
// }
// sum(...mergedArray);

//Rest opertor

// display(1,2,3,4,5)

// function display(a,b, ...rest){
// console.log(a);
// console.log(b);
// console.log(rest);
// console.log(rest[2]);
// }

//indexOf

// let a= array.indexOf(34)
// console.log(a);

//slice

// const array = ["a", "b", "c", "d", "e"];

// // let e=array.slice(1,3)
// let e=array.slice(2)
// console.log(e);

// let array1 = [1, 2];
// // Using push() -> retutn array length and modifies the original array
// const len= array1.push(3,7,4,5)
// console.log(array1);
// console.log(len);

// let array2 = [5, 6];
// // Using concat() ->original array not modified
// let newArr=array2.concat(90,67,69,45)
// console.log(array2);
// console.log(newArr);

// Using pop() ->Original Array Modifed
// let arr1 = [1, 2, 3, 4];

// let popped= arr1.pop()

// console.log(popped);
// console.log(arr1);

// Using shift()
// let arr2 = [1, 2, 3, 4];

// let shifted= arr2.shift()

// console.log(shifted);
// console.log(arr2);

// let letters = ['a', 'b', 'c'];
// // Add 'x' and 'y' at index 1

// let newArr=letters.splice(1,0,'x','y')

// console.log(newArr);
// console.log(letters);

// // Removes 1 element starting from index 1

// letters.splice(1,1)
// console.log(letters);

// // Replaces the element at index 2 with 'q'

// letters.splice(2,1,'q')
// console.log(letters);

// Using forEach()
let arr2 = [1, 2, 3, 4, 5];

// for..of loop

// for (let val of arr2) {
//   console.log(val);
//   if (val === 2) {
//     break;
//   }
// }

// arr2.forEach((v)=>{
//     console.log(v);
//     if(v === 2){
//         // break
//         // continue
//     }
// })

// arr2.forEach((item)=> console.log(item*3))

//for of loop

// for (let val of arr2) {
//   console.log(val);
// }

const myArr = [];
const newArr = arr2.forEach((x) => {
  // console.log(x*2);
  myArr.push(x * 3);
});

// console.log(arr2);
// console.log(newArr);
// console.log(myArr);

// // Example array
// const fruits = ['apple', 'banana', 'orange'];

// const [firstFruit, secondFruit, thirdFruit, fourthFruit]= fruits
// console.log(firstFruit);
// console.log(secondFruit);
// console.log(thirdFruit);
// console.log(fourthFruit);

//array like objects - arguements, string, HTML collection

// sum(1, 2, 3,5,7,8,9);

// function sum(){
//     console.log(arguments);
//     console.log(arguments.length);
//     console.log(arguments[1]);
// }

// // Accessing HTML collection
// var boxes = document.getElementsByClassName('box');
// // Accessing elements in HTML collection using index
// console.log(boxes[0]);
// // Accessing length property of HTML collection
// console.log(boxes.length);

// Example array-like object
var arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
// const newArr1= Array.from(arrayLike)
// console.log(newArr1);

// Using spread syntax (...)
// var array2 = [...arrayLike];
// console.log(array2);

// const newArr2= [...arrayLike]
// console.log(newArr2);

// Using Array.prototype.slice.call()
// var array3 = Array.prototype.slice.call(arrayLike);
// console.log(array3);

//break

// for (let index = 0; index < 10; index++) {
//    if(index === 6){
//     break;
//    }
//     // console.log(index);
// }

// continue

// for (let index = 0; index < 10; index++) {
//     if(index === 6){
//      continue;
//     }
//      console.log(index);
//  }

//For in loop

// const person = {
//   name: "Happy",
//   role: "Developer",
// };

//using forEach

// Object.values(person).forEach((val)=> console.log(val))

// for( let key in person)
// {
//     console.log(person[key]);
// }

//Named function expression

// var sum= function add(a,b){
//     return a+b
// }
// console.log(sum(3,5));

//Cb function

// let a = 3;
// let b = 6;

// function add(x, y) {
//   return x + y;
// }

// function subtract(x, y) {
//   return x - y;
// }

// function multiple(x, y) {
//     return x * y;
//   }

// // const sumResult = add(a, b);
// // const diffResult = subtract(a, b);

// // console.log(sumResult);
// // console.log(diffResult);

// function display(x, y, operation){
//       const res= operation(x,y)
//       console.log(res);
// }
// display(a,b,add)
// display(a,b,subtract)
// display(a,b,multiple)

//Higer order function

// function hof(func) {
//   func();
// }
// hof(sayHello);

// function sayHello() {
//   console.log("i am dead");
// }

//2

// function createAdder(number) {
//   return function (val) {
//     return val + number;
//   };
// }

// const res = createAdder(10);
// console.log(res(5));

//Impure function

// let total = 0;

// function addToTotal(val) {
//   total += val;
//   console.log(total);
// }

// addToTotal(6)
// addToTotal(6)

//Currying

// Regular function that takes two arguments
// and returns their product

// function multiply(a, b) {
//   return a * b;
// }

// function curriedMultiply(a) {
//   return function (b) {
//     return a * b;
//   };
// }

// const double = curriedMultiply(2);
// console.log(double(8));
// const triple = curriedMultiply(3);
// console.log(triple(9));

//call, apply and bind

// Defining a function that uses the "this" context and an argument
function sayHello(message) {
  console.log(`${message}, ${this.name}!`);
}
// const person1 = { name: "Happy" };

// sayHello.call(person1, "Good morning")
// sayHello.apply(person1, ["Good evening"])
// const newFn=sayHello.bind(person1)
// newFn("Night dear")

// var multilineStr = `
// This is a
// multiline string.
// `;
// console.log(multilineStr);

// var str = "Interview";
// // Creates a new string
// str = str + " Happy";

// console.log(str);

// DOM

// // textContent property used to assign plain text to element
// var element1 = document.getElementById("myElement1");
// element1.textContent = "<strong>Happy</strong>";

// // innerHTML property, the browser interprets the content
// // as HTML and renders it accordingly
// var element2 = document.getElementById("myElement2");
// element2.innerHTML = "<strong>Happy</strong>";

// //3
// var element = document.getElementById("myElement");
// element.setAttribute("data-info", "Test Val Agam");

// element.removeAttribute("data-info");

// element.style.setProperty("color", "blue");
// element.style.setProperty("font-size", "22px");

// //classList.add()

// element.classList.add("myClass")
// // element.classList.remove("myClass")
// element.classList.toggle("myClass")

// const newElement=document.createElement("h1")
// newElement.textContent="i am good"
// document.body.appendChild(newElement)

// //cloneNode()

// const existingElement= document.getElementById("parentElement")

// var newText= document.createTextNode("yo man")

// existingElement.appendChild(newText)
// const copiedElement=existingElement.cloneNode(true)
// copiedElement.innerHTML="<h1>i am here and where are you??</h1>"
// document.body.appendChild(copiedElement)
// console.log(copiedElement);

//Object

//ways to craete an object
//Object literal
//Object constructor

var person = new Object();
person.name = "Reena";
person.age = 34;
person.profile = "House Wife";
// console.log(person);

//bracket notation

// var propertyName="name"

// console.log(person[propertyName]);

//Object.create()

// var myPerson={
//   name:"",
//   age:0,
//   profile:""
// }

// var man=  Object.create(myPerson)
// console.log(man);
// man.name="Arnima Sahu"
// man.age=78
// man.profile="developer"
// console.log(man);

//Object iterate

// Object.keys(person).forEach((prop)=>{
//   console.log(prop+" : "+ person[prop]);
// })

// console.log("-----------------------");

// Object.values(person).forEach((val)=>{
//   console.log(val);
// })

//in operator

// console.log("name" in person);
// console.log("gender" in person);

// console.log(person.hasOwnProperty("name"));
// console.log(person.hasOwnProperty("gender"));

//comparing with undefined

// console.log(person.name !== undefined);
// console.log(person.gender);
// console.log(person.gender === undefined);

//Deep copy and shallow copy

// Original object

// const user1 = {
//   name: "John",
//   age: 25,
//   address: {
//     city: "Mumbai",
//     state: "MH",
//   },
// };

// // const user2 = {...user1}
// // const user2 = Object.assign({}, user1)
// const user2 = structuredClone(user1)

// user2.name = "Ramesh";
// user2.address.city = "Pune";

// console.log(user1);
// console.log(user2);

// Set can be used to remove
// duplicate values from arrays
// let myArr1 = [1, 4, 3, 4, 5, 7, 8, 2, 1, 4, 7, 9];

// let newVal = new Set(myArr1);

// console.log(newVal);

// // let newArr1 = [...newVal];
//  let newArr1 = Array.from(newVal);

// console.log(newArr1);

//Events

// var button = document.getElementById("myButton");
// console.log(button);
// button.addEventListener("click", handleClick);

//Event handler/cb func

// function handleClick(event) {
//   console.log(event);
//   console.log(event.type);
//   console.log(event.target);
//   console.log(event.target.textContent);
// }

//Event delegation

// var parentList = document.getElementById("myList");

// parentList.addEventListener("click", handleItemClick);

// function handleItemClick(event) {
//   console.log(event.target.textContent);
// }

//Event bubbling

// // Get the reference of elements
// var outer = document.getElementById("outer");
// var inner = document.getElementById("inner");
// var button = document.getElementById("myButton");

// button.addEventListener("click", btnHandler);

// function btnHandler(event) {
//   console.log(this.id);
//   this.disabled = true;
// }

// // Attach event handlers with elements
// outer.addEventListener("click", handleBubbling);
// inner.addEventListener("click", handleBubbling);
// button.addEventListener("click", handleBubbling);

// function handleBubbling(event){
//  console.log(this.id)
// window.alert(this.id)
// // event.stopPropagation()
// }

//Event Capturing

// Get the reference of elements
// var outer = document.getElementById("outer");
// var inner = document.getElementById("inner");
// var button = document.getElementById("myButton");

// // Attach event handlers with elements
// outer.addEventListener("click", handleBubbling, true);
// inner.addEventListener("click", handleBubbling, true);
// button.addEventListener("click", handleBubbling, true);

// function handleBubbling(event) {
//   console.log(this.id);
//   window.alert(this.id);
//   event.stopPropagation();
// }

// link = document.getElementById("myLink");
// link.addEventListener("click", linkHandler);

// function linkHandler(e) {
//   e.preventDefault();
//   console.log("hi there");
// }

//Closures

// Lexical Scope

// function outerScope(){
//   const outerVariable="Outer Scope ag"
//   function innerScope(){
//     console.log(outerVariable);
//   }
//    innerScope()
// }
// outerScope()

//Closures - A closure is a combination of function and lexical environment
//They are used to modify the data or variables safely

// function outerScope(){
//   const outerVariable="Outer Scope ag closure"
//   function innerScope(){
//     console.log(outerVariable);
//   }
//    return innerScope
// }
//  const closure= outerScope()
//  closure()

//

// function createCounter(){
//   let count=0;
//   return function (){
//     count++;
//     console.log(count);
//   }
// }
// let closure1= createCounter()
// closure1()
// closure1()
// closure1()

// console.log("-----------------");

// let closure2= createCounter()
// closure2()
// closure2()
// closure1()

// closure1=null
// closure2=null
// // closure1()
// closure2()

//Regular function

// function regularFunction(){
//   let count=0
//   count++
//   console.log(count);
// }
// regularFunction()
// regularFunction()
// regularFunction()

// // Creating a cookie
// document.cookie = "cookieName=cookieValue";
// document.cookie = "Name=AgamSahu";
// // Reading cookies
// const cookies = document.cookie;
// console.log(cookies);
// // Reading a specific cookie
// function getCookie(cookieName) {
//  const cookies = document.cookie.split("; ");
//  for (let i = 0; i < cookies.length; i++) {
//   const cookie = cookies[i].split("=");
// if (cookie[0] === cookieName) {
//   return cookie[1];
//  }
//  }
// return "";
//   }
// const cookieValue = getCookie("Name");
//   console.log(cookieValue);

//Classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return this.name + " " + this.age;
  }
}

// var person1= new Person("agam", 34)
// var person2= new Person("Ravi", 31)

// console.log(person1);
// console.log(person1.age);
// console.log(person2.sayHello());

// Constructor fn

// function PersonX(name, age){
//    this.name=name
//    this.age=age
//    this.info = function() {
//     return this.name + "----- " + this.age;
//   };
// }
// var person3= new PersonX("ankesh", 61)
// var person4= new PersonX("anjali", 60)

// console.log(person3);
// console.log(person3.name);
// console.log(person4);
// console.log(person4.age);
// console.log(person4.info());

//Prototypal inheritance

// const vechicle={
//   type:"car",
//   drive(){
//     console.log("i am drving");
//   }
// }

// console.log(vechicle);

// //creating a child object using Object.create()

// const bmw= Object.create(vechicle)

// console.log(bmw);
// console.log(bmw.type);
// bmw.drive()

// let x = 10;
// let y = 67;
// let code = "console.log(x + y);";
// let z = eval(code);
// console.log(z);

//Akshay Saini

// console.log(a); // ReferenceError: Cannot access 'a' before initialization

// console.log(b); // prints undefined as expected
// let a = 10;
// console.log(a); // 10
// var b = 15;
// console.log(window.a); // undefined
// console.log(window.b); // 15

//Closure

// function x() {
//   var i = 1;
//   setTimeout(function() {
//       console.log(i);
//   }, 3000);
//   console.log("Namaste Javascript");
// }
// x();

//

// function x() {
//   for(let i = 1; i<=5; i++){
//       setTimeout(function() {
//       console.log(i);
//       }, i*1000);
//       }
//       console.log("Namaste Javascript");
//   }
//   x();

//

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log("Namaste Javascript");
// }
// x();

//

// function outer() {
//   var a = 10;
//   function inner() {
//       console.log(a);
//   } // inner forms a closure with outer
//   return inner;
// }
// outer()();

//

// function outer() {
//   function inner() {
//       console.log(a);
//   }
//   var a = 10;
//   return inner;
// }
// outer()()

//

// function outer() {
//   let a = 10;
//   function inner() {
//       console.log(a);
//   }
//   return inner;
// }
// outer()();

//
// function outer(str) {
//   let a = 10;
//   function inner() {
//       console.log(a, str);
//   }
//   return inner;
// }
// outer("Hello There")();

//

// function outest() {
//   var c = 20;
//   function outer(str) {
//       let a = 10;
//       function inner() {
//           console.log(a, c, str);
//       }
//       return inner;
//   }
//   return outer;
// }
// outest()("Hello There")();

//
// function outest() {
//   var c = 20;
//   function outer(str) {
//       let a = 10;
//       function inner() {
//           console.log(a, c, str);
//       }
//       return inner;
//   }
//   return outer;
// }
// let a = 100;
// outest()("Hello There")();

// without closures
// var count = 0;
// function increment(){
//   count++;
//   console.log(count);
// }
// increment()
// increment()
// increment()
// count=9
// increment()

//

// (with closures) -> put everything into a function

// function counter() {
//   var count = 0;
//   function increment(){
//     count++;
//   }
// }
// console.log(count);

//

//(increment with function using closure) true function
function counter() {
  var count = 0;
  return function increment() {
    count++;
    console.log(count);
  };
}
// var counter1 = counter(); //counter function has closure with count var.
// counter1(); // increments counter
// counter1(); // increments counter
// counter1(); // increments counter

// console.log("----------------------------");

// var counter2 = counter();
// counter2();
// counter2();
// counter2();

//

// function a() {
//   var x = 0;
//   return function b() {
//     console.log(x);
//   }
// }

// var y = a(); // y is a copy of b()
// y();

// Once a() is called, its element x should be garbage collected ideally. But fun b has closure over var x. So mem of x cannot be freed. Like this if more closures formed, it becomes an issue. To tacke this, JS engines like v8 and Chrome have smart garbage collection mechanisms. Say we have var x = 0, z = 10 in above code. When console log happens, x is printed as 0 but z is removed automatically.

// a(); // "Hello A"
// // b(); // TypeError
// function a() {
//   console.log("Hello A");
// }
// var b = function() {
//   console.log("Hello B");
// }
// Why? During mem creation phase a is created in memory and function assigned to a. But b is created like a variable (b:undefined) and until code reaches the function()  part, it is still undefined. So it cannot be called.

// var b = function(param1, param2) { // labels/identifiers are parameters
//   console.log("b called");
// }
// b(arg1, arg2); // arguments - values passed inside function call

//

// var b = function(param1) {
//   console.log(param1); // prints " f() {} "
// }
// b(function(){});

//
// var b = function(param1) {
//   console.log(param1);
// }
// function xyz(){
// }
// b(xyz); //

//

// var b = function(param1) {
//   return function() {
//   }
// }
// console.log(b());

//

// setTimeout(function () {
//   console.log("timer");
// }, 5000);
// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });
// // x y timer

// //

// // Another Example of callback
// function printStr(str, cb) {
//   setTimeout(() => {
//       console.log(str);
//       cb();
//   }, Math.floor(Math.random() * 100) + 1)
// }
// function printAll() {
//   printStr("A", () => {
//       printStr("B", () => {
//           printStr("C", () => {})
//       })
//   })
// }
// printAll() // A B C // in order

// //

// document.getElementById("clickMe").addEventListener("click", function xyz(){ //when event click occurs, this callback function (xyz) is called into callstack
//   console.log("Button clicked");
// });

// //

// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function xyz(){
//     console.log("Button clicked", ++count);
// });

// count=19

// function attachEventList() {  //creating new function for closure
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function xyz(){
//   console.log("Button clicked", ++count);  //now callback function forms closure with outer scope(count)
// });
// }
// attachEventList();

//Improve promise using promise constructor

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //Generate a randon number

//     const randomNumber = Math.floor(Math.random() * 10);

//     console.log(randomNumber);

//     if (randomNumber > 5) {
//       resolve("Success! Random Number " + randomNumber);
//     } else {
//       reject("Error : sorry wrong number ", +randomNumber);
//     }
//   }, 2000);
// });

// console.log(myPromise);

// myPromise.then(data => console.log("s "+data)).catch( err => console.log("e "+err))

// Promise.all() method is used to handle multiple promises concurrently.
// const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "Hello Agam"));
// const promise2 = new Promise((reject) => setTimeout(reject, 2000, "World"));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 100, "Happy"));

// // Promise.all takes an array of promises as input and returns a new promise.
// Promise.race([promise1, promise2, promise3])
//  .then((results) => {
//    console.log(results); // Output: ['Hello', 'World', 'Happy']
//  })
//  .catch((error) => {
//   console.error("Error:", error);
//  });

//
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     // asynchronous operation
//     setTimeout(() => {
//       resolve("data reterievd")
//     }, 2000);
//   });
// }

// // console.log(fetchData())

// //using promises

// fetchData()
//   .then((data) => console.log(data))
//   .catch((err) => console.log("=======", err));

// //Using async await

// async function doSomethingAsync() {
//   try {
//     console.log("agam 1");
//     const result =  fetchData();
//     console.log("----", result);
//     console.log("i am agam 2");
//     console.log("i am agam 3");
//     const result2 = await fetchData();
//     console.log("*******", result2);
//     console.log("i am agam 4");
//     console.log("i am agam 5");
//   } catch (error) {
//     console.log("????????????",error);
//   }
// }
// doSomethingAsync();

// Async Await

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Running");
//     }, ms);
//   });
// }

// async function greet() {
//   console.log("Starting...");
//   delay(2000);
//   console.log("Not blocked");
//   const result = await delay(1000);
//   console.log(result);
//   console.log("Blocked");
// }
// greet();

//starting
//promise
//not blocked
//=-----------------
//running
//blocked

//async without await

// async without await
// async function doSomething() {
//    console.log("Inside the async");
//   //  return "Done";
//   }
//   const result = doSomething();
//   console.log(result);

//   // await without async
// function performAsyncTask() {
//    console.log("Starting...");
 
//    try {
//  // Not possible
// //  await delay(1000); 
//    console.log("Test");
//    } catch (error) {
//    console.error(error.message);
//    }
//   }
  