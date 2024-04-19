console.log("Hi DS");

//// Ques 1 - Palindrome Number

const isPalindrome = (x) => {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};

const res = isPalindrome(-121);
console.log(res);

/*
The time complexity of this function is O(n), where n is the number of digits in the input number x. This is because the function needs to convert the number to a string, split it into individual characters, reverse the characters, and then join them back together to compare with the original number.

The space complexity is also O(n) because the function creates a new array to store the individual characters of the string representation of the number.
*/

//Fibonacci Number
// F(0) =0, F(1)=1
// F(n) = F(n-1)+F(n-2) for n>1
// Input n=3 ==> 2

const fibonacci = (n) => {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  console.log(arr[5]);
};
fibonacci(9);

/*
The time complexity of this function is O(n) because it iterates through the loop n times to calculate the Fibonacci number at index n. The space complexity is also O(n) because it creates an array of size n+1 to store the Fibonacci numbers.
*/

//using recursion

const fibUsingRecursion = (n) =>
  n <= 1 ? n : fibUsingRecursion(n - 1) + fibUsingRecursion(n - 2);

console.log(fibUsingRecursion(10));

/** 
 The time complexity of the Fibonacci function implemented using recursion is O(2^n), where n is the input parameter. This is because for each call to the function, two recursive calls are made until the base case is reached. As a result, the number of function calls grows exponentially with the input value n.

The space complexity of the Fibonacci function is also O(n) because the function calls are stored on the call stack until the base case is reached. This means that the space required grows linearly with the input value n.

Overall, the recursive implementation of the Fibonacci function has exponential time complexity and linear space complexity. This can lead to performance issues for large input values due to the high number of function calls and memory usage.
 * 
 * 
*/

//Valid Anagram

function isAnagram(s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
}

console.log(isAnagram("rty", "tar"));

/*
The time complexity of this function is O(n log n), where n is the length of the input strings s and t. This is because the function involves sorting the characters of both strings, which has a time complexity of O(n log n) for each string.

The space complexity of this function is O(n), where n is the length of the input strings s and t. This is because the function creates new arrays to store the sorted characters of both strings, which can potentially be as large as the input strings themselves.

*/

//Valid Anagram using Objects

const isAnagramObj = (s, t) => {
  if (s.length !== t.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i <= s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

console.log(isAnagramObj("anagram", "nagaramd"));

/*

The time complexity of this function is O(n), where n is the length of the input strings s and t. This is because the function iterates through both strings once to create the frequency objects obj1 and obj2, and then iterates through one of the objects to compare the frequencies.

The space complexity is also O(n), as the function creates two objects obj1 and obj2 to store the frequencies of characters in the input strings. The space complexity could be considered O(1) if we assume a fixed set of characters in the input strings, but in general, it is O(n) to account for all possible characters.


*/

//Two sum using double for loop

const twoSum = (arr, target) => {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};

/**
The time complexity of this brute force solution is O(n^2) because we have two nested loops that iterate through the array of length n. The space complexity is O(1) because we are not using any extra space that grows with the input size. 

This solution is not very efficient for large input sizes because of its quadratic time complexity. It is better to use a more optimized approach like using a hash map to reduce the time complexity to O(n) and improve the overall performance 


 */

console.log(twoSum([2, 7, 11, 15], 9));

//Two Sum using JS Objects

const twoSumObject = (nums, target) => {
  var obj = {};
  for (let i = 0; i < nums.lenth; i++) {
    var n = nums[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      return (obj[n] = i);
    }
  }
};

console.log(twoSumObject([2, 7, 11, 15], 26));

//truncate the string

function truncateTheString(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength) + "........";
  } else {
    return str;
  }
}
console.log(truncateTheString("i am doing good, what about you?", 9));

//hamming distance

function hammingDistance(x, y) {
  if (x.length !== y.length) return false;
  let distance = 0;
  for (let i = 0; i <= x.length; i++) {
    if (x[i] !== y[i]) {
      distance++;
    }
  }
  return distance;
}
console.log(hammingDistance("hello", "hello"));

//Two Sum using objects

// const nums = ;

const twoSumObj = (nums, target) => {
  var obj = {};
  for (let i = 0; i <= nums.length; i++) {
    var n = nums[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};

console.log(twoSumObj([2, 7, 11, 15], 26));

/*
The time complexity of this solution is O(n), where n is the number of elements in the input array nums. This is because we iterate through the array once, and for each element, we perform constant time operations (hash table lookups and assignments).

The space complexity is also O(n) because we are using a hash table (object) to store the indices of the elements we have seen so far. In the worst-case scenario, we might need to store all n elements in the hash table.

Overall, this solution is efficient in terms of time complexity and space complexity, making it a good approach for finding the indices of two numbers that add up to a target in an array.

*/

// Ques 1 - Second Largest Number

// Input: [12, 35, 1, 10, 34, 1, 12, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

// function secondLargest(arr){

// const uniqueArray= Array.from(new Set(arr)) // to create a new SET , time complexity O(n)

// // console.log(uniqueArray);

// uniqueArray.sort((a,b)=>  b-a)  // O(nlogn)

// // console.log(uniqueArray);

// if(uniqueArray.length>=2)
// {
//   return uniqueArray[1]
// }else{
//   return -1
// }

// }

/*
The time complexity of this function is O(n log n) due to the sorting operation performed on the uniqueArray. The space complexity is O(n) because we are creating a new array (uniqueArray) to store the unique elements of the input array.

The sorting operation is the main factor contributing to the time complexity, as it has a time complexity of O(n log n) for sorting n elements. The space complexity is determined by the size of the uniqueArray, which can potentially be the same size as the input array if all elements are unique.

*/

//second largest

function secondLargest(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargest([12, 35, 1, 10, 34, 1, 12, 1]));
console.log(secondLargest([10, 5, 10]));
console.log("-------------------------------------------------------");

/*
The time complexity of this optimized function is O(n) because it iterates through the array once to find the largest and second largest elements. The space complexity is O(1) because it only uses a constant amount of extra space regardless of the size of the input array.
*/

//Recusrsion

function gotoLunch(person) {
  if (person === 5) return true;
  console.log(person);
  return gotoLunch(person + 1);
}
console.log("Outcome: ", gotoLunch(1));

///////

// Loops vs Recursion

function multiply(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

console.log(multiply([1, 2, 3, 4]));

//using recursion, the factorial

function multiply(arr) {
  if (arr.length <= 0) {
    return 1;
  } else {
    return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
  }
}
console.log(multiply([1, 2, 3, 4]));

//Factorial of n

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

//Range of numbers

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) return [];
  const numbers = rangeOfNumbers(startNum, endNum - 1);
  numbers.push(endNum);
  return numbers;
}

console.log(rangeOfNumbers(1, 5));
