console.log("hi stack ");
// Basic Stack Implementation

class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack is already empty, cann't perform pop";
    }
    return this.stack.pop();
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is already empty, cann't perfoem peek";
    }
    return this.stack[this.size() - 1];
  }
  size() {
    return this.stack.length;
  }

  printStack() {
    //Homework
  }
}

const stack = new Stack();

stack.push(90);
stack.push(96);
stack.push(130);

// // console.log(stack.peek());
// console.log(stack.size());
// console.log(stack.pop());
// console.log(stack.peek());  //96

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.size());
// console.log(stack.isEmpty());
// stack.push(130)
// console.log(stack.isEmpty());

// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue" => [the,sky,is,blue]
// [] => [the,sky,is,blue] => blue is sky the

const reverseWords = (s) => {
  splitS = s.split(" ");
  const stack = [];

  for (let i of splitS) {
    stack.push(i);
  }
  console.log(stack);

  let finalS = "";

  while (stack.length) {
    const current = stack.pop();

    if (current) {
      finalS += " " + current;
    }
  }
  return finalS.trim();
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));

// The time complexity of this function is O(n) where n is the number of characters in the input string s. This is because we split the input string into an array of words, iterate over each word to push it onto a stack, and then pop each word from the stack to construct the final reversed string. All of these operations are linear in time complexity.

// The space complexity of this function is also O(n) where n is the number of characters in the input string s. This is because we are splitting the input string into an array of words, pushing each word onto a stack, and then constructing the final reversed string. All of these operations require additional space proportional to the size of the input string.

console.log("Queue ---------------------------------------");

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  isEmpty() {
    return this.size() === 0;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty , cann't perform dequeue";
    }
    return this.queue.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty , cann't perform front";
    }
    return this.queue[0];
  }
  size() {
    return this.queue.length;
  }

  printQueue() {
    let queueString = "";
    for (let i = 0; i < this.size(); i++) {
      queueString += this.queue[i] + ", ";
    }
    console.log("printQueue :", queueString);
  }
}

const myQueue = new Queue

myQueue.enqueue(45)
myQueue.enqueue(250)
myQueue.enqueue(12)

console.log(myQueue.printQueue());

myQueue.dequeue()
// console.log(myQueue.printQueue());
console.log(myQueue.front());
console.log(myQueue.size());
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue.size());
console.log(myQueue.front());
console.log(myQueue.dequeue());