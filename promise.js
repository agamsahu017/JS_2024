"use strict";
console.log("hi promise");


// To conclude, the Promise.all() waits for all the input promises to resolve and returns a new promise that resolves to an array containing the results of the input promises. If one of the input promises is rejected, the Promise.all() method immediately returns a promise that is rejected with an error of the first rejected promise.

// What if any of the promise gets rejected, for eg: Promise.all([p1, p2, p3]). But this time, p2 get rejected after 1 sec. Thus Promise.allSettled will still wait for all promises to get settled. So After 3 secs, it will be [val1, err, val3]

// 💡 Promise.all() -> Fail Fast
// 💡 Promise.allSettled() -> Will wait and provide accumulative result

//The name of Promise.race() implies that all the promises race against each other with a single winner, either resolved or rejected.

// Promise.race will give (val2) as output after 1sec as p2 got resolved at the earliest. Whereas if it would have been failed Promise.race would have still given output after 1 sec but this time with error.

// If in above situation what if p2 got rejected, nothing will happen as Promise.any seek for success, so the moment first success will happen that will become the result.

// But what if all promises got failed, so the returned result will be aggregated error i.e. [err1, err2, err3].

// 📌 First Scenario

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P1 Success');
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P2 Success');
//     }, 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P3 Success');
//     }, 2000);
//   });

//   Promise.all([p1, p2, p3]).then((results) => {
//     console.log(results); // ['P1 Success', 'P2 Success', 'P3 Success'] -> took 3 secs
//   });

// 📌 Second Scenario

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P1 Success');
//     }, 1000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('P2 Fail');
//     }, 4000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P3 Success');
//     }, 2000);
//   });

//   Promise.all([p1, p2, p3])
//     .then(results => console.log(results))
//     .catch(err => console.error("Error:",err)); // throws error after 1 sec i.e. 'P2 Fails'

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P1 Success');
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P2 Success');
//     }, 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('P3 Fail');
//     }, 2000);
//   });

//   Promise.allSettled([p1, p2, p3])
//     .then((results) => console.log(results))
//     .catch(err => console.error(err));

// Over here, it will wait for all promises to be either settled or rejected and then return,
/*
      [
        {status: 'fulfilled', value: 'P1 Success'},
        {status: 'fulfilled', value: 'P2 Success'},
        {status: 'rejected', reason: 'P3 Fail'}
      ]
    */

// 📌 First Scenario

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P1 Success');
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P2 Success');
//     }, 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('P3 Fail');
//     }, 2000);
//   });

//   Promise.race([p1, p2, p3])
//     .then((results) => console.log(results))
//     .catch(err => console.error(err));

//    // It will return as soon as first promise is resolved or rejected.
//    // In above example O/P: "P2 Success"

// 📌 Second Scenario

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P1 Success');
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P2 Success');
//     }, 5000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('P3 Fail');
//     }, 2000);
//   });

//   Promise.race([p1, p2, p3])
//     .then((results) => console.log(results))
//     .catch(err => console.error(err));

//After 2 secs O/P: "P3 Fail"

//
// 📌 First Scenario

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P1 Success');
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P2 Success');
//     }, 5000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('P3 Fail');
//     }, 2000);
//   });

//   Promise.any([p1, p2, p3])
//     .then((results) => console.log(results))
//     .catch(err => console.error(err));

// It will wait for first settled **success**
// In above, p3 will settled first, but since it is rejected, so it will wait further so at 3rd second it will print "P1 Success"

// 📌 Second Scenario

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('P1 Fail');
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('P2 Success');
//     }, 5000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('P3 Fail');
//     }, 2000);
//   });

//   Promise.any([p1, p2, p3])
//     .then((results) => console.log(results))
//     .catch(err => console.error(err));

// After 5 secs: 'P2 Success'

// 📌 Third Scenario

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P1 Fail");
//   }, 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P2 Fail");
//   }, 5000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P3 Fail");
//   }, 2000);
// });

// Promise.any([p1, p2, p3])
//   .then((results) => console.log(results))
//   .catch((err) => {
//     console.error(err.errors); // ['P1 Fail', 'P2 Fail', 'P3 Fail']
//   });

// Since all are rejected, so it will give "aggregate error" as output
// AggregateError: All promises were rejected
// To get AggregateError array you need to write "err.errors"

//This keyword

console.log(this); // refers to global object i.e. window in case of browser
// 💡 global object differs based on runtime environment,

function x() {
    // the below value depends on strict/non-strict mode
    console.log(this);
    // in strict mode - undefined
    // in non-strict mode - refers to global window object
}
window.x(); // global window object
// 💡 Notes:

// On the first go feels like `this` keyword in global space and inside function behaves same but in reality it's different.

// The moment you make JS run in strict mode by using: "use strict" at the top, `this` keyword inside function returns `undefined` whereas global space will still refers to global window object

// `x` key below is a method as per terminology
// const obj = {
//     a: 10,
//     x: function () {
//         console.log(this); // {a: 10, x: f()}
//         console.log(this.a); // 10
//     }
// }
// obj.x(); // value of `this` is referring to current object i.e. `obj`

// //

// const student = {
//     name: 'Alok',
//     printName: function () {
//         console.log(this.name);
//     }
// }
// student.printName(); // Alok

// const student2 = {
//     name: 'Kajal',
// }
// // student2.printName(); // throw error

// ❓ how to re-use printName method from `student` object
// student.printName.call(student2); // Kajal
// Above `call` method is taking the value of `this` keyword
// So, Inside `printName` method value of `this` is now `student2` object

// So, call, bind and apply is used to set the value of this keyword.

//Arrow function

const obj = {
    a: 10,
    x: () => {
        console.log(this); // window object
        // Above the value of `this` won't be obj anymore instead it will be enclosing lexical context i.e. window object in current scenario.
    }
}
obj.x();

const obj2 = {
    a: 10,
    x: function () {
        const y = () => {
            console.log(this);
            // Above the value of `this` will be obj2 as function y's enclosing lexical context is function `x`.
        };
        y();
    }
}
obj2.x();