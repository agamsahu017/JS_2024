// console.log("hi")

// // var x = 10;
// // console.log(x); // 10
// // console.log(this.x); // 10
// // console.log(window.x); // 10
// // console.log(this === window);

// console.log(x); // undefined
// var x = 25;
// console.log(x); // 25
// console.log(a); // Uncaught ReferenceError: a is not defined

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// console.log(b); // prints undefined as expected
// let a = 10;
// console.log(a); // 10
// var b = 15;
// console.log(window.a); // undefined
// console.log(window.b); // 15
// console.log(this.a); // undefined
// console.log(this.b); // 15
// console.log(window.c); // undefined
// console.log(this.c); // undefined

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
// console.log(a); // 10, instead of the 100 we were expecting. So block "a" modified val of global "a" as well. In console, only b and c are in block space. a initially is in global space(a = 100), and when a = 10 line is run, a is not created in block space, but replaces 100 with 10 in global space itself.

// let b = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(b); // 20
// }
// console.log(b); // 100, Both b's are in separate spaces (one in Block(20) and one in Script(another arbitrary mem space)(100)). Same is also true for *const* declarations.

// const c = 170;
// function x() {
//   const c = 105;
//   console.log(c); // 10
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

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);  // value of z is entire code of function y.

// function z() {
//     var b = 900;
//     function x() {
//         var a=7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();    // 7 900

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

///

// setTimeout(function () {
//     console.log("timer");
//   }, 5000);
//   function x(y) {
//     console.log("x");
//     y();
//   }
//   x(function y() {
//     console.log("y");
//   });
//   // x y timer

// Another Example of callback
// function printStr(str, cb) {
//   setTimeout(() => {
//     console.log(str);
//     cb();
//   }, Math.floor(Math.random() * 100) + 1);
// }
// function printAll() {
//   printStr("A", () => {
//     printStr("B", () => {
//       printStr("C", () => {});
//     });
//   });
// }
// printAll(); // A B C // in order

// function attachEventList() {  //creating new function for closure
//     let count = 0;
//     document.getElementById("clickMe").addEventListener("click", function xyz(){
//     console.log("Button clicked agam", ++count);  //now callback function forms closure with outer scope(count)
// });
// }
// attachEventList();

// Q: Print 1 after 1 sec, 2 after 2 sec till 5 : Tricky interview question

// function x() {
//   for (var i = 0; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i)
//   }
//   console.log("Namaste AGAM");
// }
// x();

function outest() {
    var c = 20;
    function outer(str) {
        // let a = 10;
        function inner() {
            console.log(a, c, str);
        }
        return inner;
    }
    return outer;
}
let a = 100;
outest()("Hello There")(); // 10 20 "Hello There"
