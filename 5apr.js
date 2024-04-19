// "use strict"
// console.log("Hi there");

//

// bar();  //error

// var bar = () => {
//   console.log("i am function bar");
// };

//

// function getMultipleValues(){
//     return 10;
//     return 20;
// }

// const result= getMultipleValues()
// console.log(result);

//

// function* getMultipleValues(){
//     yield 10;
//     yield 20;
// }

// const result= getMultipleValues()
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next());

//

const person = {
  name: "Ram",
  age: 30,
};

// const output= Object.entries(person)

// console.log(output);

// const getObjectEnteries = (obj) => {
//   const objKeys = Object.keys(person);
//   //   console.log(objKeys);

//   const result = objKeys.map((key) => {
//     // console.log(obj[key]);
//     return [key, obj[key]];
//   });
//   return result;
// };

// console.log(getObjectEnteries(person));

//
// Closure question

var num = 10;
// () => {
//   console.log(num); //undefined
//   var num = 20;
//   console.log(num); //20
// };

// function multiply(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }
// console.log(multiply(2)(3)(4));

//
// let count = 0;

// (function printCount() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count);  //1
//   }
//   console.log(count); //0
// })();

//
// (function immediateA(a) {
//   return (function immediateB(b) {
//     console.log(a);
//   })(1);
// })(0);

//India TV

// let name = "Devid";
// let me = {
//   name: "Anna",

//   thisInArrow: () => {
//     console.log("My name is :: " + this.name);
//   },

//   thisInRegular() {
//     console.log("My name is " + this.name);
//   },
// };
// me.thisInArrow();
// me.thisInRegular();

//India TV Closed

//Interview Series started

//

//    function foo(a, ...rest, c){
// console.log(a, rest, c);   //error
//    }
//    foo(1,2,3,4,5)

//

// var x = 20;
// function foo() {
//   console.log(x); //undefined
//   var x = 10;
// }
// foo()

//
// console.log(username); //error
// const username="Agam"

// console.log(name); //error
// const name="AgamSahu"

//

// setTimeout(()=>{
//     console.log("Timeout");
// },0)
// Promise.resolve().then(()=> console.log("Promise"))
// console.log("end");

// end, promise, timeout

// async function foo() {
//   return "Hello world";
// }

// async function printResult() {
//   const res = await foo();
//   console.log(res);
// }

// printResult()

// const result = foo();

// result.then((res)=> console.log(res))

// console.log(result);

//  https://jsonplaceholder.typicode.com/users

// const fetchAPI = async () => {
//   const url = "https://jsonplaceholder.typicode.com/users";

//   try {
//     let firstAwait = await fetch(url);
//     let response = await firstAwait.json();
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchAPI();

//Interview 2

// console.log(a);
// console.log(b);
// var a=b=5

// console.log(a);
// var a=5

//

// var a = 5;
// console.log(a++); //5
// console.log(a); //6

// function foo(){
// console.log(this.name);
// }

// const foo = () => {
//   console.log(this.name);
// };

// const foo = function () {
//   console.log(this.name);
//   const bar = () => {
//     console.log(this.name);
//   };
//   bar();
// };

// foo.call({ name: "john" });
// foo()

// const user = {
//   id: 123,
//   name: "John Doe",
//   age: 28,
//   address: {
//     city: "Mumbai",
//     state: "Maharastra",
//   },
// };

//Interview3

// var x = 20;

// function foo() {
//   console.log(x);
//   // var x=10
// }
// foo();

// // console.log(x);

// function foo() {
//   var x=10
// }
// foo();

// // console.log(x); // x is not defined
// console.log(typeof x); // undefined

// function foo() {
//   x = 10;
//   console.log(x);
// }
// foo();

//

// let d=50
// console.log(d);
// d()

// foo()
// console.log(foo);
// var foo=20
// function foo(){
//   console.log('calling foo');
// }
// console.log(foo);
// foo()

//

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i)
//   }
//   console.log("Namaste Javascript");
// }
// x();

// async function foo() {
//   return "Hello world";
// }

// async function myFuntion() {
//   const result = await foo();
//   console.log(result);
// }

// myFuntion();

// console.log([1,2] == [1,2]);

// const user1 = {
//   name: "John",
//   age: 25,
//   address: {
//     city: "Mumbai",
//     state: "MH",
//   },
// };

// const user2 = user1;

// user2.name = "Ramesh";
// user2.address.city = "Pune";

// console.log(user1);
// console.log(user2);

//

// const user1 = {
//   name: "John",
//   age: 25,
//   address: {
//     city: "Mumbai",
//     state: "MH",
//   },
// };

// const user2 = { ...user1, address: { ...user1.address } };

// user2.name = "Ramesh";
// user2.address.city = "Pune";

// console.log(user1);
// console.log(user2);

//

// const user1 = {
//   name: "John",
//   age: 25,
//   address: {
//     city: "Mumbai",
//     state: "MH",
//   },
// };

// const user2 = structuredClone(user1)

// user2.name = "Ramesh";
// user2.address.city = "Pune";

// console.log(user1);
// console.log(user2);

//

// function abc(){
//   console.log("hiiiiii");
//   // return "helo"
//   // return {
//   //   class:"ten"
//   // }
//   return [4,6,7]
// }

// const result= new abc()
// // result.xyx="santosh"
// // console.log(result);
// console.log(result);

// console.log([1,2] === [1,2]);

// console.log({} == {});

//
// const numbers = [0, 1, 2, 3, 4, 5];

// const newArray = numbers.filter((x) => x < 3).map((y) => y + 5);

// console.log(newArray);

const str = "hi i am agam";

const newString = str
  .split(" ")
  .map((x) => x[0].toUpperCase() + x.slice(1))
  .join(" ");

// for(let i=0 ;i< newString.length; i++){

// }

// console.log(newString);

// for(let val of str){
//   console.log(val);
// }

//

// function outer() {
//   function inner() {
//     console.log(x);
//   }
//   const x = 5;
//   return inner;
// }
// const inner = outer();
// inner();

// console.log(typeof null);
// console.log(typeof undefined);

// const numbers=[0,1,2,3,4,5]
// // numbers.push(6)
// numbers.shift(6)
// // numbers.unshift(7)
// console.log(numbers);

// const user1 = {
//   name: "John",
//   age: 25,
//   address: {
//     city: "Mumbai",
//     state: "MH",
//   },
// };

// const user2 = JSON.parse(JSON.stringify(user1))

// user2.name = "Ramesh";
// user2.address.city = "Pune";

// console.log(user1);
// console.log(user2);

//

// {
//   let a=1;
//   let b=2
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);

// let username="my name is agam"
// const newStr=username.replace(/\s/g,'')
// console.log(newStr);

//

// function foo(){
//    console.log("heilo");
//   return "Hello"
// }
// const result= foo()
// console.log(result);

// const arr=[1,2,3,4,5,6]
// let sum=0
// for(let i=0; i< arr.length;i++){
// sum+=arr[i]
// }
// console.log(sum);

// let obj1= {name:"Sonu"}
// let obj2= {name:"Sonu"}

// console.log(obj1 === obj2);

// const numbers=[0,10,20,30,40,50]

// let newArr= numbers.map((x)=> x/2)

// console.log(newArr);

// let filteredArray= numbers.filter((el)=> el <30)

// console.log(filteredArray);

//
// function abc(){
//   console.log("hi");
// }
// const value=new abc()

// console.log(value);

//

// var x=20

// function foo(){
//   console.log(x); //20
//    x=10
// }
// foo()
// console.log(x); //10

//
// function foo(){
//   console.log(x);
//    x=10
// }
// foo()
// console.log(x);

// console.log('5'+3);
// console.log('5'-3);

// console.log(typeof ("5" + 3));
// console.log(typeof ("5" - 3));

// console.log("2" + 3 * 4); //212

// console.log(typeof NaN); //Number, i was wrong

// console.log(NaN === NaN); //false

// const outer = () => {
//   let a = 1;
//   const inner = () => {
//     console.log(a);
//     a++;
//   };
//   return inner;
// };
// let c= outer();
// c()
// c()
// c()

// const arr=[1,2,3,4,5]

// let a= arr[arr.length-1]
// let b= arr[0]

// arr[0]=a
// arr[arr.length-1]=b

// console.log(arr);

//array desctrucing

// const arr = [1, 2, 3, 4, 5];
//   [(arr[0], arr[arr.length - 1])] = [
//   arr[arr.length - 1],
//   arr[0],
// ];

// console.log(arr);

// let data={ name:"Agam"}
// console.log(delete data.name);

let data = "true";

console.log(!data);
