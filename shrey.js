console.log("Shrey");

// 1) given a string, reverse each word in the sentence.
// ex-> How are you -> woH era uoy

function reversedStringinArray(str) {
  let words = str.split(" ");
  const newWords = words.map((word) => {
    return word.split("").reverse().join("");
  });

  return newWords.join(" ");
}

//   console.log(reversedStringinArray("we are good"));
//   console.log(reversedStringinArray("Agam Sahu"));

//2) How to check if an object is an array or not?

// function checkArray(elem) {
//   return Array.isArray(elem);
// }
// console.log(checkArray([]));
// console.log(checkArray({}));
// console.log(checkArray(1));
// console.log(checkArray("A"));

// 3) How to empty an array in JS?

// const arr = [1, 2, 3, 4];
// console.log(arr.length);
// console.log(arr);
// arr.length = 0;
// console.log(arr.length);
// console.log(arr);

//4) How would you check if a number is an integer?

// function checkInteger(num) {
//   return Number.isInteger(num);
// }
// console.log(checkInteger(1.3));
// console.log(checkInteger("Agam"));
// console.log(checkInteger("0.89"));
// console.log(checkInteger(78));

// function checkInteger(num) {
//   if (num % 1 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkInteger(1.3));
// console.log(checkInteger("Agam"));
// console.log(checkInteger(0.89));
// console.log(checkInteger(78));
// console.log(checkInteger(1.0));

//5) duplicate([1,2,3,4,5]) => duplicate[1,2,3,4,5,1,2,3,4,5]
// => [1,2,3,4,5,6]

function duplicate(arr) {
  return arr.concat(arr);
}
// console.log(duplicate([1, 2, 3, 4, 5]));

//6) Write a function which reverse the number.

// function reverseNumber(num) {
//   const x = +num.toString().split("").reverse().join("");
//   return x;
// }

//Now using while loop

function reverseNumber(num) {
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}

// console.log(reverseNumber(1234));
// console.log(reverseNumber(167));
// console.log(reverseNumber(421));

// rev - 432
// rem- 3
//num= 12

//7) Write a JS function that checks whether a passed string is palindrome or not

//Madam, Mom, Radar

function stringPalChecker(str) {
  let reversed = str.split("").reverse().join("");
  return reversed === str ? true : false;
}
// console.log(stringPalChecker("loop"));
// console.log(stringPalChecker("madam"));
// console.log(stringPalChecker("agam"));

//8) Write a JS function that returns a passed string with letters in alphabetiacl order.

function stringAlphabeticalOrder(str) {
  return str.toLowerCase().split("").sort().join("");
}

// console.log(stringAlphabeticalOrder("Agam"));
// console.log(stringAlphabeticalOrder("John"));
// console.log(stringAlphabeticalOrder("Umbrella"));

// 9) WAP that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function Capitilize(str) {
  let words = str.split(" ");
  const newString = words.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  });
  return newString.join(" ");
}
//  console.log(Capitilize("hi agam kaise ho"));
//  console.log(Capitilize("tum pagal ho"));
// // Capitilize("hi agam kaise ho")

// 10) function which accepts an arguement and returns the type

function typeTeller(arg) {
  return typeof arg;
}

// console.log(typeTeller(1));
// console.log(typeTeller("agam"));
// console.log(typeTeller(true));
// console.log(typeTeller([]));
// console.log(typeTeller({}));
// console.log(typeTeller(null));
// console.log(typeTeller(function () {}));

// 12) Loop an array and all members of it?

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

//13) In an array of numbers and strings, only add those members which are not strings.

// const arr = ["agam", "yu", 45, 90, true, undefined, "gho", null, 100];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     sum += arr[i];
//   }
// }
// console.log(sum);

//14 loop an array of objects and remove all objects which dont have gender's value male.

var arr = [
  { name: "Agam", gender: "male" },
  { name: "kiran", gender: "female" },
  { name: "jyoti", gender: "no gender" },
  { name: "hitesh", gender: "male" },
  { name: "rani", gender: "female" },
];

// let newArray= arr.filter(item => item.gender === "male")
// console.log(newArray);

// let males=[]

// for(let i=0;i< arr.length;i++){
//     if(arr[i].gender === "male"){
//         males.push(arr[i])
//     }
// }
// console.log(males);

//15) Function to clone an Array

// function cloneArray(arr) {
//   return [...arr];
// }
// let newArray = cloneArray([1, 2, 3, 4,69]);
// console.log(newArray);

// function clonedArray(arr) {
//   let newArr = [];
//   arr.forEach((elem) => {
//     newArr.push(elem);
//   });
//   return newArr;
// }

// let oldArr = [6, 88, 80, 3, 23];

// let modifiedArr = clonedArray(oldArr);
// modifiedArr.pop()
// console.log(modifiedArr);
// console.log(oldArr);


//20) program to compute the union of two arrays

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

function union(arr1, arr2) {
  let newArray= arr1.concat(arr2)
  newArray= [... new Set(newArray)]
  return newArray
}

const unionArr = union(arr1, arr2);
console.log(unionArr);