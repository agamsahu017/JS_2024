console.log("happy");

//Q1. Write a function that returns the reverse of a string?

// function reverseString(str){
//   return str.split("").reverse().join("")
// }

// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(reverseString("Interview, Happy")); // Output: "yppaH ,weivretnI"  yppaH ,weivretnI

//Q2. Write a function that returns the longest word in the sentence.

// function findLongestWord(str) {
//   let words = str.split(" ");

//   let longest = "";
//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// }

// Find the Longest Word
// console.log(findLongestWord("I love coding in JavaScript SharanpurDIstrict"));

// Q3. Write a function to remove duplicate elements from an array.

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// function removeDuplicates(arr) {
//   const uniqueElements = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueElements.indexOf(arr[i]) === -1) {
//         uniqueElements.push(arr[i])
//     }
//   }
//   return uniqueElements
// }

// // Remove Duplicates from an Array
// console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 6]));

//Q4 Write a function that checks whether two strings are anagrams or not?

// function areAnagrams(str1, str2){
//    const sortedString1 = str1.split("").sort().join("")
//    const sortedString2 = str2.split("").sort().join("")
//    return sortedString1 === sortedString2
// }

// // Check for Anagrams
// console.log(areAnagrams("listen", "silenty"));

//Q5 Write a function that returns the number of vowels in a string.

// function countVowels(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// // Count the Vowels
// console.log(countVowels("Agam Sahu"));

//Q6. Write a function to find the largest number in an array.

// function findLargestNumber(arr) {
//   let largestNumber = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largestNumber) {
//       largestNumber = arr[i];
//     }
//   }
//   return largestNumber;
// }
// // Find largest Number
// console.log(findLargestNumber([2, 4, 6, 9, 3, 89, 78]));

//Q7 Write a function to check if a given number is prime or not?

// function isPrime(num) {
//   for (let i = 2; i <= num / 2; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// A prime number is only divisible by 1 and itself.
// console.log(isPrime(7)); // Output: true
// console.log(isPrime(10)); // Output: false

//Q8 Write a function to calculate the factorial of a number.

// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   }
//   let factorial = 1;

//   for (let i = 1; i <= num; i++) {
//     factorial *= i;
//   }
//   return factorial;
// }

// // Calculate the factorial of a number
// console.log(factorial(7)); //1*2*3*4*5

// //Q9 Write a program to remove all whitespace characters from a string.

// function removeWhitespace(str) {
//   //use reqular expression

//   return str.replace(/\s/g, "-");
// }
// const inputString = " Interview, Happy  and Aga   m Sa    h u ";
// console.log(removeWhitespace(inputString));

//Q10 Write a function to find the average of an array of numbers.

// function findAverage(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let average = sum / arr.length;
//   return average;
// }

// // Average of an array
// console.log(findAverage([1, 2, 3, 4, 5]));

//Q11. Write a function to sort an array of numbers in ascending order.

// function sortArrayAscending(arr) {
//   return arr.sort((a, b) => b - a);
// }

// // Sort an array without for loop
// const numbers = [10, 1, 20, 2, 5];
// console.log(sortArrayAscending(numbers));

//Q12 Write a function to check if a given array is sorted in ascending order or not.

// function isSorted(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if(arr[i-1]> arr[i]){
//         return false
//     }
//   }
//   return true
// }

// // Check whether array is sorted or not
// console.log(isSorted([1, 2, 3, 4, 5]));

//Q13 Write a function to merge two arrays into a single sorted array.

// const array1 = [10, 3, 5,7];
// const array2 = [2,20, 6, 8];

// function mergeSortedArray(arr1, arr2){
// let mergedArray= arr1.concat(arr2)
//  mergedArray.sort((a,b)=> a-b)

// return mergedArray
// }
// console.log(mergeSortedArray(array1, array2));

//Q14 Write a function to remove a specific element from an array.

// function removeElement(arr, target){
//   return arr.filter( x=> x !== target)
// }

// // Remove specific element without using for loop
// console.log(removeElement([1, 2, 3, 2, 4], 2));

//Q15 Write a function to find the second largest element in an array.

// function findSecondLargest(arr) {
//   let newArr = [...new Set(arr)];
//   newArr.sort((a,b)=> b-a)
//   return newArr[1];
// }

// const numbers = [5, 10, 2, 8, 3, 5, 10, 8, 2];
// console.log(findSecondLargest(numbers));

//Q 16 Reverse the words of a sentence

function reverseWords(str) {
  let newStr = str.split(" ");
  newStr.reverse();

  return newStr.join(" ");
}
console.log(reverseWords("hello world Agam How are you?"));
// Output: "world hello"

//Q 17 Write a function to find the intersection of two arrays.

function findIntersection(arr1, arr2) {
  let set = new Set(arr1);

  let intersection = arr2.filter((elem) => {
    return set.has(elem);
  });

  return intersection;
}

// Intersection of two arrays without using for loop
console.log(findIntersection([1, 2, 3, 4], [2, 3, 5, 6]));

//Q18 Write a function to calculate the Fibonacci sequence up to a given number.

function fibonacciSeries(n) {
  let fibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci
}

var n = 10;
console.log(fibonacciSeries(n));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
