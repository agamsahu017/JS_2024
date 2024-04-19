// console.log("hi");

// // import { add } from './add.js';
// // import { subtract } from './subtract.js';
// // import { multiply } from './multiply.js';

// import multiply from "./utility.js";

// // console.log(add(2, 3)); // Output: 5
// // console.log(subtract(5, 2)); // Output: 3
// // console.log(multiply(4, 3)); // Output: 12

// // import { add, subtract } from "./math.js";

// // console.log(add(6,8));
// // console.log(subtract(6,8));
// console.log(multiply(6, 8));

// let x = 10;
// let y = 20;

// let code = "x*y";
// console.log(eval(code));

// //Dynamic imports

// import("./math.js")
//   .then((module) => {
//     const { add } = module;
//     //use the imported module
//   })
//   .catch((err) => console.log(err));

//short circuit

// var a;
// var b = null;
// var c = undefined;
// var d = 4;
// var e = 'five';

// var f = a || b || c || d || e;

// console.log(f);

//
// var x;
// var y = 'Gurseerat';
// var z = 'This will not evaluate';
// var name = x || y || z;
// console.log(name);
// Gurseerat

//
var age = 25;
function driveCar() {
  return "Driving Car";
}
var result = age > 18 && driveCar();
console.log(result);
// Driving Car

//

var age = 25;
// Using if condition
let action;
if (age > 18) {
  action = "Drive Car";
} else {
  action = "Can't Drive Car";
}
console.log(action); // Drive Car
// Short-circuiting
let greeting = (age > 18 && "Drive Car") || "Can't Drive Car";
console.log(greeting);

//
function gfg() {
  // AND short circuit
  console.log(false && true); //false
  console.log(true && true); //true
  // OR short circuit
  console.log(true || false); //true
  console.log(false || true); // true
}
gfg();

// Since first operand is false and operator
// is AND, Evaluation stops and false is
// returned.
console.log(false && true && true && false); //false

// Whole expression will be evaluated.
console.log(true && true && true); //true

//

// First operand is true and operator is ||,
// evaluation stops and true is returned.
console.log(true || false || false); //true

// Evaluation stops at the second operand(true).
console.log(false || true || true || false); //true

//Hoisting

// getName(); // Namaste Javascript
// console.log(x); // undefined
// var x = 7;
// function getName() {
//  console.log("Namaste Javascript");
// }

//
// getName(); // Namaste JavaScript
// // console.log(x); // Uncaught Reference: x is not defined.
// console.log(getName); // f getName(){ console.log("Namaste JavaScript); }
// function getName(){
//     console.log("Namaste JavaScript");
// }

//

// getName(); // Uncaught TypeError: getName is not a function
console.log(getName);
var getName = function () {
  console.log("Namaste JavaScript");
};
console.log(getName);
// The code won't execute as the first line itself throws an TypeError.

//

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// console.log(b); // prints undefined as expected
// let a = 10;
// console.log(a); // 10
// var b = 15;
// console.log(window.a); // undefined
// console.log(window.b); // 15

// let a = 10;
// let a = 100;  //this code is rejected upfront as SyntaxError. (duplicate declaration)
// ------------------
// let a = 10;
// var a = 100; // this code also rejected upfront as SyntaxError. (can't use same name in same scope)

// const b = 100;
// b = 1000;

// var n = 2;
// function square(num) {
//  var ans = num * num;
//  return ans;
// }
// var square2 = square(n);
// var square4 = square(4);
// console.log(square2); //4
// console.log(square4);  //16

// var x = 1;
// a();
// b(); // we are calling the functions before defining them. This will work properly, as seen in Hoisting.
// console.log(x); // 3

// function a() {
//   var x = 10; // localscope because of separate execution context
//   console.log(x); // 1
// }

// function b() {
//   var x = 100;
//   console.log(x); // 2
// }

//10, 100, 1

//
// var x = 10;
// console.log(x); // 10
// console.log(this.x); // 10
// console.log(window.x); // 10

//

// console.log(b); // prints undefined as expected
// let a = 10;
// console.log(a); // 10
// var b = 15;
// console.log(window.a); // undefined
// console.log(window.b); // 15

///////////////

// console.log(x); // undefined
// var x = 25;
// console.log(x); // 25
// console.log(a); // Uncaught ReferenceError: a is not defined

// CASE 1
// function a() {
//     console.log(b); // 10
//     // Instead of printing undefined it prints 10, So somehow this a function could access the variable b outside the function scope.
// }
// var b = 10;
// a();

//

// CASE 2
// function a() {
//     c();
//     function c() {
//         console.log(b); // 10
//     }
// }
// var b = 10;
// a();

//

// CASE 3
// function a() {
//     c();
//     function c() {
//         var b = 100;
//         console.log(b); // 100
//     }
// }
// var b = 10;
// a();

//

// // CASE 4
// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(b); // 10
//     }
// }
// a();
// console.log(b); // Error, Not Defined

// Global {
//     Outer {
//         Inner
//     }
// }
// Inner is surrounded by lexical scope of Outer

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// console.log(b); // prints undefined as expected
// let a = 10;
// console.log(a); // 10
// var b = 15;
// console.log(window.a); // undefined
// console.log(window.b); // 15

// let a = 10;
// var a = 100;

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     // Here let and const are hoisted in Block scope,
//     // While, var is hoisted in Global scope.
// }

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }
// console.log(a); // 10
// console.log(b); // Uncaught ReferenceError: b is not defined

// var a = 100;
// {
//     var a = 10; // same name as global var
//     let b = 20;
//     const c = 30;
//     console.log(a); // 10
//     console.log(b); // 20
//     console.log(c); // 30
// }
// console.log(a);// 10

// let b = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(b); // 20
// }
// console.log(b);  // 100

//

// const c = 100;
// function x() {
//     const c = 10;
//     console.log(c); // 10
// }
// x();
// console.log(c); // 100

// let a = 20;
// {
//     var a = 20;
// }
// Uncaught SyntaxError: Identifier 'a' has already been declared

// let a = 20;
// function x() {
//     var a = 20;
// }

//Closure
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);  // value of z is entire code of function y.

//

// function z() {
// 	var b = 900;
// 	function x() {
// 		var a=7;
// 		function y(){
// 			console.log(a,b);
// 		}
// 		y();
// 	}
// 	x();
// }
// z();    // 7 900

//

// function x() {
//     var i = 1;
//     setTimeout(function() {
//         console.log(i);
//     }, 3000);
//     console.log("Namaste Javascript");
// }
// x();
// Output:
// Namaste Javascript
// 1 // after waiting 3 seconds

// function x() {
// 	for(var i = 1; i<=5; i++){
// 		function close(i){
// 			setTimeout(function() {
// 				console.log(i);
// 				}, i*1000);
// 		}
// 		close(i)
// 		}
// 		console.log("Namaste Javascript");
// 	}
// 	x();

// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a);
//     } // inner forms a closure with outer
//     return inner;
// }
// outer()(); // 10 // over here first `()` will return inner function and then using second `()` to call inner function

// function outer() {
//     function inner() {
//         console.log(a);
//     }
//     var a = 10;
//     return inner;
// }
// outer()(); // 10

// function outer() {
//     let a = 10;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }
// outer()(); // 10

// function outer(str) {
//     let a = 10;
//     function inner() {
//         console.log(a, str);
//     }
//     return inner;
// }
// outer("Hello There")(); // 10 "Hello There"

// function outest() {
//     var c = 20;
//     function outer(str) {
//         let a = 10;
//         function inner() {
//             console.log(a, c, str);
//         }
//         return inner;
//     }
//     return outer;
// }
// outest()("Hello There")(); // 10 20 "Hello There"

//

// function outest() {
//     var c = 20;
//     function outer(str) {
//         let a = 10;
//         function inner() {
//             console.log(a, c, str);
//         }
//         return inner;
//     }
//     return outer;
// }
// let a = 100;
// outest()("Hello There")(); // 10 20 "Hello There"

// var b = function() {
// 	console.log("Hello Agam");
//   }
//   b();

// a(); // "Hello A"
// b(); // TypeError
// function a() {
//   console.log("Hello A");
// }
// var b = function() {
//   console.log("Hello B");
// }
// // Why? During mem creation phase a is created in memory and function assigned to a. But b is created like a variable (b:undefined) and until code reaches the function()  part, it is still undefined. So it cannot be called.

// var b = function xyz() {
// 	console.log("b called");
//   }
//   b(); // "b called"
//   xyz(); // Throws ReferenceError:xyz is not defined.
//   // xyz function is not created in global scope. So it can't be called.

// var b = function(param1, param2) { // labels/identifiers are parameters
// 	console.log("b called");
//   }
//   b("arg1", "arg2"); // arguments - values passed inside function call

//

// var b = function (param1) {
//   console.log(param1); // prints " f() {} "
// };
// b(function () {});

// Other way of doing the same thing:
//   var b = function(param1) {
// 	console.log(param1);
//   }
//   function xyz(){
//   }
//   b(xyz); // same thing as prev code

// we can return a function from a function:
var b = function (param1) {
  return function () {};
};
console.log(b()); //we log the entire fun within b.

// Callback Functions in JS ft. Event Listeners

//   setTimeout(function () {
//     console.log("Timer by agam");
// }, 1000) // first argument is callback function and second is timer.

console.log("495.............................");
// setTimeout(function () {
//   console.log("timer 496");
// }, 5000);
// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });
// // x y timer

// Another Example of callback
// function printStr(str, cb) {
//   setTimeout(() => {
//     console.log(str);
//     cb();
//   }, Math.floor(Math.random() * 100) + 2);
// }
// function printAll() {
//   printStr("A", () => {
//     printStr("B", () => {
//       printStr("C", () => {});
//     });
//   });
// }
// printAll(); // A B C // in order

//Event listeners

// document.getElementById("clickMe").addEventListener("click", function xyz(){ //when event click occurs, this callback function (xyz) is called into callstack
//   console.log("Button clicked");
// });

// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function xyz(){
//     console.log("Button clicked", ++count);
// });

function attachEventList() {
  //creating new function for closure
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked", ++count); //now callback function forms closure with outer scope(count)
  });
}
attachEventList();

//
// console.log("start");
// setTimeout(function cb() {
//   console.log("timer 546");
// }, 1000);
// console.log("end");
// start end timer

//Trust issues with setTimeout

// console.log("Start");
// setTimeout(function cb() {
// console.log("Callback");
// }, 1000);
// console.log("End");
// Millions of lines of code to execute

// o/p: Over here setTimeout exactly doesn't guarantee that the callback function will be called exactly after 5s. Maybe 6,7 or even 10! It all depends on callstack. Why?

// console.log("Start");
// setTimeout(function cb() {
//   console.log("Callback 564");
// }, 0);
// console.log("End");
// Even though timer = 0s, the cb() has to go through the queue. Registers calback in webapi's env , moves to callback queue, and execute once callstack is empty.
// O/p - Start End Callback
// This method of putting timer = 0, can be used to defer a less imp function by a little so the more important function(here printing "End") can take place

// Higher-Order Functions ft. Functional Programming

function x() {
  console.log("Hi 574");
}
function y(x) {
  x();
}
y(x); // Hi
// y is a higher order function
// x is a callback function

//const radius = [1, 2, 3, 4];

// const radius = [1, 2, 3, 4];

// const calculateArea = function (radius) {
//   let output = [];
//   for (let index = 0; index < radius.length; index++) {
//     output.push(Math.PI * radius[index] * radius[index]);
//   }
//   return output;
// };

// const calculateCircumference = function (radius) {
//   const output = [];
//   for (let index = 0; index < radius.length; index++) {
//     output.push(2 * Math.PI * radius[index]);
//   }
//   return output;
// };

// console.log(calculateArea(radius));
// console.log(calculateCircumference(radius));

// //We have to do using HOF

// const radiusArr = [1, 2, 3, 4];

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };

// const calculate = function (operation, radiusArr) {
//   const output = [];
//   for (let index = 0; index < radiusArr.length; index++) {
//     output.push(operation(radiusArr[index]));
//   }
//   return output;
// };
// console.log(calculate(area, radiusArr));
// console.log(calculate(circumference, radiusArr));

//map, filter and reduce

// const arr = [5, 1, 3, 2, 6];
// // Task 1: Double the array element: [10, 2, 6, 4, 12]

// function double(x) {
//   return x * 2;
// }

// const doubleArray = arr.map(double);
// console.log("638 ", doubleArray);

// // Task 2: Triple the array element

// function triple(x) {
//   return x * 3;
// }

// const tripleArray = arr.map(triple);
// console.log(tripleArray);

// //
// // Task 3: Convert array elements to binary
// function binary(x) {
//   return x.toString(2);
// }

// const binArray = arr.map(binary);
// console.log(binArray);

// //Filter function
// // filter odd values

// function isOdd(x) {
//   return x % 2 === 1;
// }

// const filteredArray = arr.filter(isOdd);
// console.log(filteredArray);

// // Calculate sum of elements of array - Non functional programming way

// function theSum(arr) {
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];
//   }
//   return sum;
// }
// console.log(theSum(arr));

// // reduce function way

// const total = arr.reduce((acc, currentElem) => {
//   return acc + currentElem;
// }, 2);
// console.log("684 ", total);

// // find max inside array: Non functional programming way:

// function findMax(arr) {
//   let max = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > max) {
//       max = arr[index];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr));

// //find max from an array using reduce function

// const output = arr.reduce((max, current) => {
//   if (current > max) {
//     max = current;
//   }
//   return max;
// });
// console.log("706 ", output);

// const users = [
//   { firstName: "Alok", lastName: "Raj", age: 23 },
//   { firstName: "Ashish", lastName: "Kumar", age: 29 },
//   { firstName: "Ankit", lastName: "Roy", age: 29 },
//   { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
// ];
// // Get array of full name : ["Alok Raj", "Ashish Kumar", ...]

// fullNameArr = users.map((elm) => elm.firstName + " " + elm.lastName);
// console.log("708 ", fullNameArr);

// // Get the count/report of how many unique people with unique age are there
// // like: {29 : 2, 75 : 1, 50 : 1}

// // First name of all people whose age is less than 30

// const result1 = users
//   .filter((user) => user.age < 30)
//   .map((user) => user.firstName);
// console.log("727 ", result1);

// //// Homework challenge: Implement the same logic using reduce

// const result2 = users.reduce((acc, curr) => {
//   if (curr.age < 30) {
//     acc.push(curr.firstName);
//   }
//   return acc
// }, []);

// console.log("738 ", result2);

//test

// console.log("Namaste");
// setTimeout(function () {
//   console.log("JavaScript");
// }, 3000);
// console.log("Season 2");
// Namaste
// Season 2
// JavaScript

// 💡 Here we are delaying the execution using callback approach of setTimeout.

const cart = ["shoes", "pants", "kurta"];
// Two steps to place a order
// 1. Create a Order
// 2. Proceed to Payment

// It could look something like this:
// api.createOrder();
// api.proceedToPayment();

// api.createOrder(cart, function () {
//   api.proceedToPayment();
// });
// // 💡 Over here `createOrder` api is first creating a order then it is responsible to call `api.proceedToPayment()` as part of callback approach.

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.updateWallet();
//     });
//   });
// });
// // 💡 Callback Hell

// api.createOrder(cart, function () {
//   api.proceedToPayment();
// });

// 💡 So over here, we are creating a order and then we are blindly trusting `createOrder` to call `proceedToPayment`.

// 💡 It is risky, as `proceedToPayment` is important part of code and we are blindly trusting `createOrder` to call it and handle it.

// 💡 When we pass a function as a callback, basically we are dependant on our parent function that it is his responsibility to run that function. This is called `inversion of control` because we are dependant on that function. What if parent function stopped working, what if it was developed by another programmer or callback runs two times or never run at all.

// 💡 In next session, we will see how we can fix such problems.
// 💡 Async programming in JavaScript exists because callback exits.

//Promises are used to handle async operations in JavaScript.

// const cart = ["shoes", "pants", "kurta"];

// Below two functions are asynchronous and dependent on each other
// const orderId = createOrder(cart);
// proceedToPayment(orderId);

// // with Callback (Before Promise)
// // Below here, it is the responsibility of createOrder function to first create the order then call the callback function
// createOrder(cart, function () {
//   proceedToPayment(orderId);
// });
// Above there is the issue of `Inversion of Control`

// In short, When createOrder get executed, it immediately returns a promise object with undefined value. then javascript will continue to execute with other lines of code. After sometime when createOrder has finished execution and orderId is ready then that will automatically be assigned to our returned promise which was earlier undefined.

// const cart = ["shoes", "pants", "kurta"];

// const promiseRef = createOrder(cart);
// this promiseRef has access to `then`

// {data: undefined}
// Initially it will be undefined so below code won't trigger
// After some time, when execution has finished and promiseRef has the data then automatically the below line will get triggered.

// promiseRef.then(function () {
//   proceedToPayment(orderId);
// });

//In Earlier solution we used to pass the function and then used to trust the function to execute the callback.

// But with promise, we are attaching a callback function to a promiseObject.

// There is difference between these words, passing a function and attaching a function

//Promise guarantee, it will callback the attached function once it has the fulfilled data. And it will call it only once. Just once.
//fetch is a web-api which is utilized to make api call and it returns a promise.

// We will be calling public github api to fetch data
const URL = "https://api.github.com/users/alok722";
const user = fetch(URL);
console.log(user);

// user.then((data)=>console.log(data))

// And this is how Promise is used.
// It guarantees that it could be resolved only once, either it could be `success` or `failure`
/**
    A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.
 */

//Promise object is a placeholder for certain period of time until we receive value from asynchronous operation.
// -> A container for a future value.

// Callback hell is ugly and hard to maintain.
// 💡 Promise fixes this issue too using `Promise Chaining`

// Callback Hell Example
/*
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInf) {
    showOrderSummary(paymentInf, function (balance) {
      updateWalletBalance(balance);
    });
  });
});
*/

// Example Below is a Promise Chaining
// createOrder(cart)
//   .then(function (orderId) {
//     proceedToPayment(orderId);
//   })
//   .then(function (paymentInf) {
//     showOrderSummary(paymentInf);
//   })
//   .then(function (balance) {
//     updateWalletBalance(balance);
//   });

  // The idea is promise/data returned from one .then become data for next .then
// So,
// createOrder(cart)
// .then(function (orderId) {
//   return proceedToPayment(orderId);
// })
// .then(function (paymentInf) {
//   return showOrderSummary(paymentInf);
// })
// .then(function (balance) {
//   return updateWalletBalance(balance);
// });

// To improve readability you can use arrow function instead of regular function

// In short we will see, "How we can create Promise" and then return it.

  // JS provides a Promise constructor through which we can create promise
  // It accepts a callback function with two parameter `resolve` & `reject`
  // const promise = new Promise(function (resolve, reject) {
  //   // What is this `resolve` and `reject`?
  //   // These are function which are passed by javascript to us in order to handle success and failure of function call.
  //   // Now we will write logic to `createOrder`
  //   /** Mock logic steps
  //    * 1. validateCart
  //    * 2. Insert in DB and get an orderId
  //    */
  //   // We are assuming in real world scenario, validateCart would be defined
  //   if (!validateCart(cart)) {
  //     // If cart not valid, reject the promise
  //     const err = new Error("Cart is not Valid");
  //     reject(err);
  //   }
  //   const orderId = "12345"; // We got this id by calling to db (Assumption)
  //   if (orderId) {
  //     // Success scenario
  //     resolve(orderId);
  //   }
  // });
  // return promise;

  //In promise chaining, whatever is returned from first .then become data for next .then and so on...

  // const cart = ["shoes", "pants", "kurta"];

// createOrder(cart)
//   .then(function (orderId) {
//     // ✅ success aka resolved promise handling
//     // 💡 we have return data or promise so that we can keep chaining the promises, here we are returning data
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     // Promise chaining
//     // 💡 we will make sure that `proceedToPayment` returns a promise too
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     // from above, `proceedToPayment` is returning a promise so we can consume using `.then`
//     console.log(paymentInfo);
//   })
//   .catch(function (err) {
//     // ⚠️ failure aka reject handling
//     console.log(err);
//   });

// Here we are creating Promise
// function createOrder(cart) {
//   const promise = new Promise(function (resolve, reject) {
//     // Assume below `validateCart` return false then the promise will be rejected
//     // And then our browser is going to throw the error.
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not Valid");
//       reject(err);
//     }
//     const orderId = "12345";
//     if (orderId) {
//       resolve(orderId);
//     }
//   });
//   return promise;
// }

function proceedToPayment(cart) {
  return new Promise(function (resolve, reject) {
    // For time being, we are simply `resolving` promise
    resolve("Payment Successful");
  });
}


// Async is a keyword that is used before a function to create a async function.

// 💡 async function always returns a promise, even if I return a simple string from below function, async keyword will wrap it under Promise and then return.
// async function getData() {
//   return "Namaste JavaScript by agam";
// }
// const dataPromise = getData();
// console.log(dataPromise); // Promise {<fulfilled>: 'Namaste JavaScript'}

// //❓How to extract data from above promise? One way is using promise .then
// dataPromise.then(res => console.log(res)); // Namaste JavaScript

//

// const p = new Promise((resolve, reject) => {
//   resolve('Promise resolved value!!');
// })

// async function getData() {
//   return p;
// }
// // In above case, since we are already returning a promise async function would simply return that instead of wrapping with a new Promise.
// const dataPromise = getData();
// console.log(dataPromise); // Promise {<fulfilled>: 'Promise resolved value!!'}
// dataPromise.then(res => console.log(res)); // Promise resolved value!!

// async and await combo is used to handle promises.

// await is a keyword that can only be used inside a async function

// const p = new Promise((resolve, reject) => {
//   resolve('Promise resolved value!!');
// })

// function getData() {
//   p.then(res => console.log(res));
// }

// getData(); 

// The rule is we have to use keyword await in front of promise.
// async function handlePromise() {
//   const val = await p;
//   console.log(val);
// }
// handlePromise(); // Promise resolved value!!

// await function() {} // Syntax error: await is only valid under async function.

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('1017 Promise resolved value p1!!');
//   }, 4000);
// })

// Let's now compare with some modification:

// 📌 Promise.then/.catch way
// function getData() {
//   // JS engine will not wait for promise to be resolved
//   p.then(res => console.log("1026 ", res));
//   console.log('1027 Hello There!');
// }

// getData(); // First `Hello There!` would be printed and then after 3 secs 'Promise resolved value!!' will be printed.
// Above happened as Javascript wait for none, so it will register this promise and take this callback function and register separately then js will move on and execute the following console and later once promise is resolved, following console will be printed.

//❓ Problem: Normally one used to get confused that JS will wait for promise to be resolved before executing following lines.

// 📌 async-wait way:
// async function handlePromise() {
//   // JS Engine will waiting for promise to resolve.
//   const val = await p;
//   console.log('1039 Hello There!');
//   console.log("1040", val);
// }
// handlePromise(); // This time `Hello There!` won't be printed immediately instead after 3 secs `Hello There!` will be printed followed by 'Promise resolved value!!'
// 💡 So basically code was waiting at `await` line to get the promise resolve before moving on to next line.

// Above is the major difference between Promise.then/.catch vs async-await

// async function handlePromise2() {
//   console.log('1048 Hi');
//   const val = await p;
//   console.log('1050 Hello There!');
//   console.log("1051",val);

//   const val2 = await p;
//   console.log('1054 Hello There! 2');
//   console.log("1055 ",val2);
// }
// handlePromise2(); 

// In above code example, will our program wait for 2 time or will it execute parallely.
//📌 `Hi` printed instantly -> now code will wait for 3 secs -> After 3 secs both promises will be resolved so ('Hello There!' 'Promise resolved value!!' 'Hello There! 2' 'Promise resolved value!!') will get printed immediately.

// Let's create one promise and then resolve two different promise.

// Let's create one promise and then resolve two different promise.
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise resolved value by p2!!');
//   }, 2000);
// })

// async function handlePromise3() {
//   console.log('1072 Hi');
//   const val = await p;
//   console.log('1074 Hello There!');
//   console.log(val);

//   const val2 = await p2;
//   console.log('1078 Hello There! 2');
//   console.log("1079 ",val2);
// }
// handlePromise3(); 
// 📌 `Hi` printed instantly -> now code will wait for 3 secs -> After 3 secs both promises will be resolved so ('Hello There!' 'Promise resolved value!!' 'Hello There! 2' 'Promise resolved value by p2!!') will get printed immediately. So even though `p2` was resolved after 2 secs it had to wait for `p` to get resolved

// Now let's reverse the order execution of promise and observe response.
// async function handlePromise4() {
//   console.log('Hi');
//   const val = await p2;
//   console.log('Hello There!');
//   console.log(val);

//   const val2 = await p;
//   console.log('Hello There! 2');
//   console.log(val2);
// }
// handlePromise4(); 
// 📌 `Hi` printed instantly -> now code will wait for 2 secs -> After 2 secs ('Hello There!' 'Promise resolved value by p2!!') will get printed and in the subsequent second i.e. after 3 secs ('Hello There! 2' 'Promise resolved value!!') will get printed

//

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise resolved value by p1!!');
//   }, 5000);
// })

// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise resolved value by p2!!');
//   }, 10000);
// })

// async function handlePromise5() {
//   console.log('Hi');
//   debugger;
//   const val = await p3;
//   console.log('Hello There!');
//   debugger;
//   console.log(val);

//   const val2 = await p4;
//   console.log('Hello There! 2');
//   debugger;
//   console.log(val2);
// }
// handlePromise5(); 
// When this function is executed, it will go line by line as JS is synchronous single threaded language. Lets observe what is happening under call-stack. Above you can see we have set the break-points.

// call stack flow -> handlePromise() is pushed -> It will log `Hi` to console -> Next it sees we have await where promise is suppose to be resolved -> So will it wait for promise to resolve and block call stack? No -> thus handlePromise() execution get suspended and moved out of call stack -> So when JS sees await keyword it suspend the execution of function till promise is resolved -> So `p` will get resolved after 5 secs so handlePromise() will be pushed to call-stack again after 5 secs. -> But this time it will start executing from where it had left. -> Now it will log 'Hello There!' and 'Promise resolved value!!' -> then it will check whether `p2` is resolved or not -> It will find since `p2` will take 10 secs to resolve so the same above process will repeat -> execution will be suspended until promise is resolved.

// 📌 Thus JS is not waiting, call stack is not getting blocked.

// Moreover in above scenario what if p1 would be taking 10 secs and p2 5 secs -> even though p2 got resolved earlier but JS is synchronous single threaded language so it will first wait for p1 to be resolved and then will immediately execute all.


// async function handlePromise6() {
//   // fetch() => Response Object which as body as Readable stream => Response.json() is also a promise which when resolved => value
//   const data = await fetch('https://api.github.com/users/alok722');
//   console.log("1138 ", data);
//   const res = await data.json();
//   console.log(res);
// };
// handlePromise6()

async function handlePromise7() {
  try {
    const data = await fedtch('https://api.github.com/users/alok722');
    const res = await data.json();
    console.log(res);
  } catch (err) {
    console.log(err)
  }
};
// handlePromise7()

handlePromise7().catch(err => console.log(err));

// In above whenever any error will occur the execution will move to catch block. One could try above with bad url which will result in error.

// Other way of handling error:
// handlePromise().catch(err => console.log(err)); // this will work as handlePromise will return error promise in case of failure.