var createCounter = function(n) {
    return function() {
        return n++
    };
};

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12

-----------------------

class Counter{
  constructor(n){
    this.n=n
  }
  increment(){
    return this.n++
  }
  
}

const counter= new Counter(10)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())

------------------------------


var createCounter = function(num) {
  let init= num
  
  function incremnet(){
    return ++num
  }
    function decremnet(){
    return --num
  }
    function reset(){
    return init
  }
  return{
    incremnet,
    decremnet,
    reset
  }
};

 const counter = createCounter(5)
console.log(counter.incremnet()) // 6
console.log(counter.reset()); // 5
console.log(counter.decremnet()); 

------------------------------------

class Counter{
  constructor(num){
    this.num=num
    this.init=num
  }
   increment(){
   return  ++this.num
   }
   decrement(){
    return --this.num
   }
   reset(){
     this.num=this.init
     return this.num
   }
}

const counter= new Counter(6)
console.log(counter.increment())
console.log(counter.increment())
