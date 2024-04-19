const fs = require("fs");
console.log("start");

(function lib() {
  function first() {
    setImmediate(() => console.log("Immediate"));
    setTimeout(() => console.log("timer1"), 100);
    console.log("first");
    second();
  }

  function second() {
    console.log("second");
    third();
  }

  function third() {
    process.nextTick(() => console.log("tick"));
    console.log("third");
    setTimeout(() => console.log("timer2"), 0);
    // console.trace();
  }
  //   first();

  fs.readFile("./shortest.js", first);
})(); // IIFE

console.log("end");

///

console.log("Start");
setTimeout(function cb() {
console.log("Callback");
}, 0);
console.log("End");
// Even though timer = 0s, the cb() has to go through the queue. Registers calback in webapi's env , moves to callback queue, and execute once callstack is empty.
// O/p - Start End Callback
// This method of putting timer = 0, can be used to defer a less imp function by a little so the more important function(here printing "End") can take place