// 'use strict'
console.log("advance");

// {
//   // block scope
//   let x = 0;
//   let y = 0;
//   console.log(x); // 0
//   x = 1; // Error
// }

// {
//   // TDZ starts
//   const say = () => console.log(msg); // hi

//   let msg = "hi";
//   say();
// }

// let x = 0; // shadowed variable
// {
//   let x = 1;
//   console.log(x);
// }

// var x = 1;
// var x = 2; // valid

// console.log(y); // valid
// var y = 3;

// z = 4;
// console.log(z); // valid
// var z;

// for(let i=0;i<=5;i++){
//     setTimeout(
//       ()=>console.log(i),
//       1000)
//   } // prints 0,1,2,3,4

//   for(var i=0;i<=5;i++){
//     setTimeout(
//       ()=>console.log(i),
//       1000)
//   }

// function sayHi(){
//     console.log(this) // this will refer to window
//  }
//  sayHi()

// let name = 'john';

// function sayHi(){
//   let greet = "hi"
//   console.log(greet)
// }

// sayHi()
// console.log(name, sayHi)

// let name = 'john';

// function sayHi(){
//   let greet = "hi"
//   console.log(name)
// }

// sayHi()

// let name = 'john';

// sayHi() // valid

// function sayHi(){
//   let greet = "hi"
//   console.log(name)
// }

// sayHello() // error
// var sayHello = function(){
//    console.log(name)
// }

// let x = 1;

// {

//   console.log(window.x);
//   console.log(this.x);
//   console.log(x) // Reference error
//   let x = 2;
//   console.log(this.agam)
// }

// function createUser(name) {
//   let greeting = "Hi ";
//   function greet() {
//     return greeting + name + " is Created";
//   }
//   return greet();
// }

// console.log(createUser("john"));

// function createUser(name) {
//   let greeting = "Hi ";
//   function greet() {
//     return greeting + name + " is Created";
//   }
//   return greet; // returned just definition of function
// }

// let welcomeJohn = createUser("john");
// console.log(welcomeJohn());

// function init() {
//     let name = 'john';

//     function greet() {
//       console.log(name)
//     }
//     return greet;
//   }

//   let sayHi = init();

//   sayHi();

// function initCounter(id) {
//     let count = 0;
//     return function () {
//       count++;
//       document.getElementById(id).innerText = count;
//     };
//   }
// //   let count = 10;

//   let counter1 = initCounter('btnCount1');
//   let counter2 = initCounter('btnCount2');

// //

// function initAddString(inputId, outputId) {
//     let str = '';
//     return function () {
//       str += ' ' + document.getElementById(inputId).value;
//       document.getElementById(inputId).value = '';
//       document.getElementById(outputId).innerText = str;
//     };
//   }

//   let strAdder1 = initAddString('text1', 'text-output1');
//   let strAdder2 = initAddString('text2', 'text-output2');

////////////

// function op(operation) {
//   return function (a) {
//     return function (b) {
//       return operation === "add" ? a + b : a - b;
//     };
//   };
// }

// const add3 = op("add")(3);
// const sub3 = op("sub")(3);
// const add = op("add");

// console.log(add3(6));
// console.log(sub3(6));
// console.log(add(1)(2));

// Copying objects

// let person =  {name:'john'}
// let newPerson = Object.assign({}, person)

// let person =  {name:'john'}
// let newPerson = {...person}

// console.log(person);
// console.log(newPerson);

// let addressObject = { city: 'delhi', state: 'delhi' }

// let person = {
//   name: 'John',
//   address: addressObject
// };

// let newPerson = Object.assign({}, person)

// console.log(person);
// console.log(newPerson);

// console.log(person === newPerson);

// console.log(person.address === newPerson.address);

// let addressObject = { city: 'delhi', state: 'delhi' }

// let person = {
//   name: 'John',
//   address: addressObject
// };

// let str = JSON.stringify(person)
// let jsonObject = JSON.parse(str);

// console.log(str);
// console.log(jsonObject);

// let addressObject = { city: "delhi", state: "delhi" };

// let person = {
//   name: "John",
//   address: addressObject,
// };

// console.log(person);

// person.me = person;

// console.log(person);

// let newPerson = structuredClone(person);

// console.log(newPerson);

// function sayHi(){
//     return "hi "+ this.name; 
// }
// sayHi();// Error
// // // here this will "undefined" in Strict mode
// let obj1 = {name: 'john'}
// let obj2 = {name: 'wick'}

// // // you can add functional property

//  obj1.say = sayHi;
//  obj2.say = sayHi;
//  console.log(obj1);
//  console.log(obj2);

// console.log(obj1.say()); //  hi john
// console.log(obj2.say()); //  hi john

// let person =  {
//     name:'john',
//     sayHi: ()=> {
//       return "hi "+ this.name;
//     }
//   } 
  
//   console.log(person.sayHi());

//Function

// function sayHi(greet){
//     return greet
//  }
//  sayHi.name // name of function
//  sayHi.length // length of arguments
 
//  sayHi.count =0; // function can have properties
//  sayHi.count++;
//  sayHi.count

// console.log(sayHi("dear")); // works
// function sayHi(greet){
//    return greet
// }

// console.log(sayHello()); // Error
// let sayHello = function(){ // functional expression
//   return "Agam Sahu"
// }

//

// function Person(name){
//     this.name = name
// }

// const p = new Person('john')
// console.log(p);
// console.log(p.name);

// person = {
//     name: 'demo',
//     age: 12,
//     location: 'delhi',
//   };
  
//   function checkName(a) {
//     return this.name;
//   }
  
//   console.log(checkName());// Error 
//   console.log(checkName.call(person));
//   console.log(checkName.call(person, 1));