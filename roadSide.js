// console.log(myCount);
// console.log(userName);

// let myCount = 10;
// var userName = "agam";

// The following variables are defined in the global scope
// const num1 = 20;
// const num2 = 3;
// const name = "Chamakh";

// This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // 60

// A nested function example
// function getScore() {
//   const num1 = 2;
//   const num2 = 3;

//   function add() {
//     return `${name} scored ${num1 + num2}`;
//   }

//   return add();
// }

// console.log(getScore()); // "Chamakh scored 5"

//Params vs arguements

// function multiply(...num) {
//   console.log(num[0] * num[1]);
// }

// var arr = [8, 7];

// multiply(...arr);

//arguments keywords in function

// function x() {
//   console.log(arguments);
// }
// x(3, 5, 6, 78);

// const arrowX = () => {
//   console.log(arguments);
// };
// arrowX(3, 5, 6, 78);

//Create a fn

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

// function multiplyByTwo(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] = obj[key] * 2;
//     }
//   }
//   return obj;
// }

// console.log(multiplyByTwo(nums));

// console.log([..."Lydia"]);

// let person = {
//   name: "John",
//   age: 30,
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     country: "USA",
//   },
//   contacts: {
//     email: "john@example.com",
//     phone: "123-456-7890",
//   },
// };

// const {
//   address: { city },
// } = person;

// console.log(city);

// function getItems(fruitList, favoriteFruit, ...args) {
//   return [...fruitList, ...args, favoriteFruit];
// }

// console.log(getItems(["banana", "apple"], "pear", "orange"));

// const user = {
//   name: "Jen",
//   age: 26,
// };

// const objClone= Object.assign({}, user)
// const objClone = JSON.parse(JSON.stringify(user));
// const objClone = { ...user };
// const objClone = {...user};
// objClone.name = "agam";
// console.log(user);
// console.log(objClone);

//Map, filter and reduce

// let students = [
//   { name: "Piyush", rollNumber: 31, marks: 80 },
//   { name: "Jenny", rollNumber: 15, marks: 69 },
//   { name: "Kausal", rollNumber: 16, marks: 35 },
//   { name: "Dilpreet", rollNumber: 7, marks: 55 },
// ];

// const output = students
//   .map((x) => {
//     if (x.marks < 60) {
//       x.marks += 20;
//     }
//     return x;
//   })
//   .filter((y) => y.marks > 60)
//   .reduce((acc, currentValue) => {
//     return acc + currentValue.marks;
//   }, 0);

// console.log(output);

// //

// // console.log({a:1} == {a:1});
// // console.log({a:1} === {a:1});

// let person = { name: 'Lydia' };
// const members = [person];
// person.name = null;

// console.log(members);

//

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);

// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//       name: 'John',
//       age: 50
//     };

//     return person;
// }

// const personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1); // -> ?
// console.log(personObj2); // -> ?

this.a = 5;

// console.log(this.a); //undefined

// function myFunction() {
//   console.log(this.a)
// }
// myFunction(); // window object

// const myFun=()=> {
//   console.log(this.a)
// }
// myFun(); // window object

// class User{
//   constructor(n,a){
//     this.name=n
//     this.age=a
//   }

//   getName(){
//     console.log("my name is "+ this.name+ " age is "+this.age);
//   }

// }

// const user= new User("Agam",31)

// user.getName()

// const user = {
//   firstName: 'Piyush!',
//   getName() {
//     const firstName = 'Jen!';
//     return this.firstName;
//   }
// };
// console.log(user.getName()); // What is logged?  Piyush

//

// function makeUser() {
//   return {
//     name: "John",
//     ref(){
//    return   this
//     }
//   };
// }

// let user = makeUser();

// console.log(user.ref().name)

// const user = {
//   name: "Piyush Agarwal!",
//   logMessage() {
//     console.log(this.name);
//   },
// };
// setTimeout(function(){
//   user.logMessage()
// }, 1000);

// var length = 4;
// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   },
// };
// object.method(callback);

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// console.log(user.ref().name); // What's the result?

// const user = {
//   name: "Piyush Agarwal!",
//   logMessage() {
//     console.log(this.name);
//   },
// };
// setTimeout(function () {
//   user.logMessage();
// }, 1000);

// const user = {
//   name: "Piyush",
//   greet() {
//     return `Hello, ${this.name}!`;
//   },
//    z(){
//     farewell= () => {
//       return `Goodbye, ${this.name}!`;
//     }
//     farewell()
//   }

// };
// console.log(user.greet());
// console.log(user.z());

//Create a calculator

let calculator = {
  // ... your code ...
  read() {
    this.a = +prompt("a= ", 0);
    this.b = +prompt("b= ", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

//
// var length = 4;
// function callback() {
//   console.log(this);
// }

// const object = {
//   length: 5,
//   method(fn) {
//     fn();
//   },
// };
// object.method(callback);

// const calc={
//   total:0,

//   add(a){
//     this.total+=a
//     return this
//   },
//   multiply(a){
//     this.total*=a
//     return this
//   },
//   subtract(a){
//     this.total-=a
//     return this
//   }

// }
// const result = calc.add(10).multiply(5).subtract(30).add(10)
// console.log(result)

//Callbacks

console.log("start");

// function importantAction(userName, cb) {
//   setTimeout(() => {
//     cb(`Subscribe to ${userName}`);
//   }, 2500);
// }

// function likeTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`Like the ${video} video`);
//   }, 0);
// }

// function shareTheVideo(video, cb) {
//   setTimeout(() => {
//     cb(`Like the ${video} video`);
//   }, 0);
// }

// const message = importantAction("Agam Sahu", function (message) {
//   console.log(message);
//   likeTheVideo("JavaScript interview Question", function (action) {
//     console.log(action);
//     shareTheVideo("please share", function(v){
//       console.log(v);
//     })
//   });
// });

//Promises

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = false;
//     if (result) resolve("subscribed to agam sahu");
//     else reject(new Error("something went wrongs"));
//   }, 2000);
// });

// console.log(sub);

// sub.then((res)=> console.log(res)).catch((err)=> console.log(err))

// const sub= Promise.resolve("Subscribed to agam sahu je")
// const sub = Promise.reject(new Error("i am bad person"));

// console.log(sub);

// sub
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.log("404..", err);
//   });

// console.log("stop");

//Promise

function importantAction(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${userName}`);
    }, 1500);
  });
}

function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like the ${video} video`);
    }, 2200);
  });
}

function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`share the ${video} video`);
    }, 3000);
  });
}

// importantAction("Reena Gupta")
//   .then((res) => {
//     console.log(res);
//     likeTheVideo(" agam video").then((res) => {
//       console.log(res);
//       shareTheVideo(" agam video").then((res) => console.log(res));
//     });
//   })
//   .catch((err) => console.log(err));

// importantAction("Reena Gupta")
//   .then((res) => {
//     console.log(res);
//     return likeTheVideo("new video please like");
//   })
//   .then((res) => {
//     console.log(res);
//     return shareTheVideo("please share the video");
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log("457 ", err));

/*
importantAction("Reena Gupta")
likeTheVideo("new video please like")
shareTheVideo("please share the video")
*/

// console.log(Promise.all([
//   importantAction("Reena Gupta"),
//   likeTheVideo("new video please like"),
//   shareTheVideo("please share the video"),
// ]));

// Promise.all([
//   importantAction("Reena Gupta"),
//   likeTheVideo("new video please like"),
//   shareTheVideo("please share the video"),
// ]).then(res => console.log(res)).catch(err => console.log("Error : ",err))

// Promise.race([
//   importantAction("Reena Gupta"),
//   likeTheVideo("new video please like"),
//   shareTheVideo("please share the video"),
// ]).then(res => console.log(res)).catch(err => console.log("Error : ",err))

// Promise.any([
//   importantAction("Reena Gupta"),
//   likeTheVideo("new video please like"),
//   shareTheVideo("please share the video"),
// ]).then(res => console.log(res)).catch(err => console.log("Error : ",err))

//Async Await

// const result = async () => {
//   try {
//     const message1 = await importantAction("Reena Gupta");
//     const message2 = await likeTheVideo("new video please like");
//     const message3 = await shareTheVideo("please share the video");
//     console.log({ message1, message2, message3 });
//   } catch (error) {
//     console.log("Promises failed :", error);
//   }
// };

// result();

//Promise

// const firstPromise = new Promise((resolve, reject) => {
//   resolve("First");
// });

// const secondPromise = new Promise((resolve, reject) => {
//   resolve(firstPromise);
// });

// secondPromise
//   .then((res) => {
//     return res;
//   })
//   .then((res) => console.log(res));

//Rewrite the code using Async Await

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }
// loadJson("https://jsonplaceholder.typicode.com/todos").catch((err) =>
//   console.log(err)
// );
// console.log("stop");

// async function loadJson(url){
//   let response= await fetch(url)
//   if(response.status == 200){
//     let json = await response.json()
//     return json
//   }else{
//     throw new Error(response.status);
//   }

// }

//Call, Apply and Bind

// var obj = { name: "Piyush" };
// function sayHello(day, status) {
//   return "Hello " + this.name + " today is " + day + " and feel "+ status;
// }

// // console.log(sayHello());
// // console.log(sayHello.call(obj, "tuesday", "good"));
// // console.log(sayHello.apply(obj, ["tuesday", "good"]));

// const bindFunc= sayHello.bind(obj)

// console.log(bindFunc("monday", "bad"));
// console.log(bindFunc("friday", "average"));

// const person = { name: 'Piyush' };

// function sayHi(age) {
//   return `${this.name} is ${age} years`;
// }

// console.log(sayHi.call(person, 24));  //person is 24
// console.log(sayHi.bind(person, 24));  //
// console.log(sayHi.bind(person, 24)());  //

// const age = 10;
// var person = {
//   name: "Piyush",
//   age: 20,
//   getAge: function () {
//     return this.age;
//   },
// };

// var person2 = { age: 24 };
// // person.getAge.call(person2); // show with apply and bind as well

// console.log(person.getAge()); //20
// console.log(person.getAge.call(person2)); //24
// console.log(person.getAge.apply(person2)); //24
// console.log(person.getAge.bind(person2)()); //24

//

// var status = '😎';

// setTimeout(() => {
//   const status = '😍';

//   const data = {
//     status: '🥑',
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus());  //avacado
//   console.log(data.getStatus.call(this));
// }, 0);

//

// const animals = [
//   { species: "Lion", name: "King" },
//   { species: "Whale", name: "Queen" },
// ];

// function printAnimals(i) {
//   this.print = function () {
//     console.log("#" + i + " " + this.species + ": " + this.name);
//   };
//   this.print();
// }

// // printAnimals();
// // printAnimals.call(animals)

// for (let index = 0; index < animals.length; index++) {
//   printAnimals.call(animals[index], index);
// }

//Append an array

// const array = ["a", "b"];
// const elements = [0, 1, 2];

// // const newArr= array.concat(elements)
// // console.log(newArr);

// // array.push(19);
// // array.push(...elements);

// array.push.apply(array, [0, 1, 2]);

// console.log(array);

// const numbers = [5, 6, 2, 3, 7];

// console.log(Math.max.apply(null, numbers));
// console.log(Math.min.apply(null, numbers));

// function f() {
//   console.log(this); // ?
// }

// let user = {
//   g: f.bind(null)
// };

// user.g();

//Bind chaining

// function f() {
//   console.log(this.name);
// }

// f = f.bind({ name: "John" }).bind({ name: "Ann" });

// f()

//Fix the code

// function checkPassword(success, failed) {
//   let password = prompt("Password?", "");
//   if (password == "RoadSide coder") success();
//   else failed();
// }

// let user = {
//   name: "Agam Sahu",
//   loginSuccessfull() {
//     console.log(`${this.name} logged in`);
//   },
//   loginFailed() {
//     console.log(`${this.name} failed to logged in`);
//   },
// };

// checkPassword(user.loginSuccessfull.bind(user), user.loginFailed.bind(user));

//

// function checkPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "RoadSide coder") ok();
//   else fail();
// }

// let user = {
//   name: "Agam Sahu",
//   login(result) {
//     console.log(this.name + (result ? " login successful" : " login failed"));
//   },
// };

// checkPassword(user.login.bind(user,true), user.login.bind(user, false));

// Explicit Binding with Arrow Function

// const age=10;

// var person={
//   name:'Piyush',
//   age:20,
//   getAgeArrow:()=> console.log(this.age),
//   getAge: function(){
//     console.log(this.age);
//   },
// }

// var person2={ age:24}

// person.getAge.call(person2)
// person.getAgeArrow.call(person2)

//Closure

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // 1
//   }
//   console.log(count); // 0
// })();

//
// var addSix = createBase(6);
// addSix(10);// returns 16
// addSix(21);// returns 27

// function createBase(x){
//   return function (y){
//     return x+y
//   }
// }
// var addSix = createBase(6);
// console.log(addSix(10));// returns 16
// console.log(addSix(21));// returns 27

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }

//   console.log(a[index]);
// }

// console.time("6");
// find(6); // this takes 37ms
// console.timeEnd("6");
// console.time("12");
// find(12); // this takes 135ms
// console.timeEnd("12");

// console.log("-----------------------------");

// function find() {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }

//   return function (index) {
//     console.log(a[index]);
//   };
// }
// const closure= find()

// console.time("6");
// closure(6); // this takes 37ms
// console.timeEnd("6");
// console.time("12");
// closure(12); // this takes 135ms
// console.timeEnd("12");

//currying

// function f(a){
//   return function (b){
//     return `${a} ${b}`
//   }
// }
//  console.log(f(5)(6));

//
// Convert sum(2,6,1) to sum(2)(6)(1)

//  function sum(a){
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
//   }
//  }
//  console.log( sum(2)(6)(1));

// evaluate("sum")(2)(4) ⇒ 2+4 = 6

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === "sum") return a + b;
//       else if (operation === "multiply") return a * b;
//       else if (operation === "divide") return a / b;
//       else if (operation === "substract") return a - b;
//       else return "Invalid operation"
//     };
//   };
// }

// const sum= evaluate("sum")
// const multiply= evaluate("multiply")
// console.log(sum(2)(4));
// console.log(multiply(2)(4));
// console.log(multiply(9)(8));

// Infinite Currying
// sum(1)(2)(3)...(n)

// function sum(a) {
//   return function (b) {
//     if (b) return sum(a + b);
//     return a;
//   };
// }

// console.log(sum(1)(2)(3)(4)(5)());

//Currying vs Partial application

// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// const add = sum(10);

// console.log(add(2, 3));
// console.log(add(6, 7));

// //or

// console.log(sum(7)(2, 3));

// //Manipuate the DOM

// function updateElementText(id) {
//   return function (content) {
//     document.querySelector("#" + id).textContent = content;
//   };
// }
// let updateHeader = updateElementText("heading");

// // updateHeader("subscribe to agam's channel")
// updateHeader("i am not good enough");

const btn = document.querySelector(".Increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let pressedCount = 0;
let triggerCount = 0;

// const myDebounce = (cb, d) => {
//   let timer;

//   return function (...args) {
//     if(timer) clearTimeout(timer)
//     timer = setTimeout(
//       () => {
//         cb(...args);
//       },
//       d
//     );
//   };
// };

const myThrottle = (cb, d) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

// const debouncedCount = myDebounce(() => {
//   count.innerHTML = triggerCount;
//   triggerCount++;
// }, 800);

// const debouncedCount = _.debounce(() => {
//   count.innerHTML = triggerCount;
//   triggerCount++;
// }, 800);

// const throttledCount = _.throttle(() => {
//   count.innerHTML = triggerCount;
//   triggerCount++;
// }, 800);

const throttledCount = myThrottle(() => {
  count.innerHTML = triggerCount;
  triggerCount++;
}, 800);

btn.addEventListener("click", function () {
  btnPress.innerHTML = pressedCount;
  // debouncedCount();
  pressedCount++;
  throttledCount();
});
