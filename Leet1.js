function createHelloWorld(){
  return function(){
    return "hello agam"
  }
}

console.log(createHelloWorld()())
---------------

let a=[1,2]
let b=[3,4]

let c=[...a, ...b]
console.log(c)

-----------------------

function createCounter(){
  let value=0
  
  function increment(){
   return ++value
  }
  
  return {
    increment:increment
  }
}

const counter1= createCounter()
const counter2= createCounter()
console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter2.increment())

---------------------

const c=10;

function sum(a, b){
  console.log(a+b+c)
}
sum(4,5)

-------------------

var createHelloWorld= function(){
  return function(){
  return  "Hello world"
  }
}
var x= createHelloWorld()
console.log(x())

---------------------

var createHelloWorld = function(){
  return function(){
  return  "Hello world"
  }()
}

var x = createHelloWorld()
console.log(x)
