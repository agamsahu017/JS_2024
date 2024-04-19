console.log("hi agam");

// const cities = ["NY", "LA", "TX"];

// // const newArray = cities.map((city) => city.toLowerCase());

// // console.log(newArray);
// // console.log(cities);

// const myArr = [];
// const newArrayForEach = cities.forEach((city) => {
//   myArr.push(city.toLowerCase());
// });

// console.log(newArrayForEach);
// console.log(myArr);

// var person = {
//   name: "abhishek",
//   age: 30,
//   address: "street 10",
//   phone: 8888888888,
// };

// // var anotherPerson = person;
// // anotherPerson.name = "jack";
// // console.log(person.name);
// // console.log(anotherPerson.name);

// // const newName = {};

// // newName = somethingElse;

// // console.log(somethingElse);

// const anotherPerson2 = { ...person };
// anotherPerson2.name = "jack";
// console.log(person.name);
// console.log(anotherPerson2.name);

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`the prop is ${property} and the value is ${object[property]}`);
// }

// // const numbers = [25, 30, 35, 40, 45];

// // const total = numbers.reduce((acc, current) => {
// //   return acc + current;
// // }, 0);

// // console.log(total);

// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((el) => el > 10);
// console.log(found);

// const foundIndex = array1.findIndex((el) => el > 10);
// console.log(foundIndex);

// const resSome = array1.some((el) => el > 10);
// console.log(resSome);

// const resEvery = array1.every((el) => el < 100);
// console.log(resEvery);

// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1);
// console.log(arr1.flat());

// const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2);
// console.log(arr2.flat(2));

// const nestedArrays = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(nestedArrays);

// console.log(nestedArrays.flatMap((x) => x.map((y) => y * 3)));

// const arr5 = [1, 2, [3], [4, 5], 6, []];
// const flattened = arr5.flatMap((num) => num);
// console.log(flattened);

// const arr = ["March", "Jan", "Feb", "Dec"];
// console.log(arr.sort());

// //closure

// function makeFn() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }
// const myFunc = makeFn();
// myFunc();

// //IIFE

// (function () {
//   console.log("I am insde the IIFE");
// })();

// //Call Apply Bind

// let nameObj = {
//   name: "Tony",
// };

// let PrintName = {
//   name: "steve",
//   sayHi: function () {
//     console.log(this.name);
//   },
// };

// let bFn = PrintName.sayHi.bind(nameObj);
// bFn();

// //Date and Time

// var d = new Date();

// console.log(d);

// // var d = new Date(2019, 11, 24, 10, 33, 30, 0);

// // console.log(d);

// // console.log(d.getDay());
// // console.log(d.getDate());
// // console.log(d.getMonth());
// // console.log(d.getFullYear());
// // console.log(d.getTime());
// // console.log(d.toUTCString());
// // console.log(d.toISOString());

// // function double(x) {
// //   return x * 2;
// // }
// // setTimeout(() => {
// //   console.log(double(4));
// // }, 1000);

// // De-structuring Arrays

// const nums = [1, 2, 4];

// const [a, b, c, u] = nums;

// console.log(b);

// //De-structure Objects

// // var person = {
// //   firstName : "abhishek",
// //   age :30 ,
// //   phone:8888888888
// //   }

// //   const {firstName, age, ph}= person

// //   console.log(firstName);
// //   console.log(age);
// //   console.log(ph);

// // const numbers = [4, 5, 100, 0, 1];
// // console.log(Math.max(...numbers));

// // let max = function(...nums){
// //   console.log(nums);
// //   }
// //   max(1,2,4,5)

// //   var person = {
// //     name: 'Jack',
// //     age: 34
// //     }

// //     console.log(person.job || 'unemployed');
// //     console.log(person.name && person.job && 'unemployed');

// // var name = "abhishek";
// // var age = 39 ;
// // var phone = 8888888888

// // var person = {
// //   name ,
// //   age ,
// //   phone
// //   }

// //   console.log(person.age);

// var person = {
//   name: "abhishek",
//   age: 30,
//   address: "street 10",
//   phone: 8888888888,
// };

// console.log(Object.entries(person));

// //SET

// let set = new Set();

// set.add(1);
// set.add(7);
// set.add(1);
// set.add(5);
// set.add(7);

// console.log(set);
// set.delete(5);
// set.clear();
// console.log(set.size);

// let data = Array.from(set);
// console.log(data);

// //Closure

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2));
// console.log(add10(2));

// //Modular IIFE

// let sum = (function (a, b) {
//   return a + b;
// })(8, 29);

// console.log(sum);

// //Top level await

// let response = await fetch("https://jsonplaceholder.typicode.com/todos");

// let dataAPI = await response.json();

// console.log(dataAPI);

//---------------------------------------------------------------------------

// String Literals : Style 2 (template)

// let title="Mr"
// let name="Agam"

// let sentence= `we welcome ${title} ${name} to M-tec`
// console.log(sentence);
// console.log(name[1]);

//Immutability of String

// let word="Hello"

// console.log(word[2]);
// word[3]="z"
// word[4]="s"
// console.log(word);

//Split function

// let words = "hello world"
// console.log(words.split(" "));
// console.log(words.split());
// console.log(words.split("e"));
// console.log(words.split(""));
// console.log(words.split("l"));
// console.log(words.split("o"));

// //Modulus operator

// let x = 9 % 5 //4
// let y = -12 % 5   //2
// let z = 1 % -2  //1
// let a = 5.5 % 2 //
// let b = -4 % 2
// let c = NaN % 2

//Concat function

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const children = arr1.concat(arr2);

// console.log(children);
// console.log(arr1);

//While Loop

// var array = [1,2,3];
// var index = 0;

// while(index< array.length){
//     console.log(array[index]);
//     index++
// }

// let i = 0;
// while (i < 6) {
//   if (i === 3) {
//     break;
//   }
//   i++;
// }
// console.log(i);

// function myFunc(){
//   console.log("hii....");
// }
// myFunc()
// console.log(myFunc.length);
// console.log(myFunc.name);

// const cities = ["NY","LA","TX"];
// const loweCased=[]

// // cities

// const newCity= cities.forEach(x =>{
//   newData=x.toLowerCase()
//   loweCased.push(newData)

// })
// console.log(newCity);
// console.log(loweCased);

// const object = { a: 1, b: 2, c: 3 };

// for(key in object){
//   console.log("the property is "+key+" and the val is "+object[key]);
// }

// let words=["cat", "dog", "horse"]
// console.log(words.join());
// console.log(words);

//Reduce function

// const numbers = [25,30,35,40,45];

// const sum= reduce((acc, currentvalue, currentIndex, arr),initialValue)

// const sum= numbers.reduce((acc, currentValue)=>{
//   return acc+currentValue
// },0)
// console.log(sum);

//Rest Parameters

// let max = function (...nums) {
//   // function body
//   console.log(nums[3]);
// };

// max(1, 2);

//Short -circuit

// var person = {
//   name: 'Jack',
//   age: 34
//   }
//   console.log(person.job || 'unemployed');
//   console.log(person.job && 'unemployed');

//short hand object literals

// var name = "abhishek";
// var age = 30;
// var phone = 8888888888;

// var person = {
//   name,
//   age,
//   phone,
// };
// console.log(person);

//Object Literals : Computed keys

// var keyName = "nameofShape";

// let shape = {
//   [keyName]: "rectangle",
//   height: 100,
//   width: 100,
// };

// console.log(shape);

function double(x) {
  return x * 2;
}

setTimeout(() => {
  console.log(double(4));
}, 4000);

function greeting(arg1, arg2) {
  console.log(arg1, arg2);
}
setTimeout(greeting, 1000, "Hello", "There agam");

//

function someAction(){
  console.log("i am not good");
}

function delayedFx(){
  setTimeout(function(){
  someAction();
  }, 3000);
  return promise
  }

  delayedFx()
