console.log("hi dsA");

// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]

function secondLargest(arr) {
  const uniqueArray = Array.from(new Set(arr));

  uniqueArray.sort((a, b) => b - a);

  if (uniqueArray.length >= 2) {
    return uniqueArray[1];
  } else {
    return -1;
  }
}
console.log(secondLargest([10, 5, 10]));

function secondLargestOptimised(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(secondLargestOptimised([10, 5, 10]));

//Rotate Array by K

// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

function rotateArray(nums, k) {
  let size = nums.length;
  if (k > size) {
    k = k % size;
  }
  //  console.log(size-k, k);

  const rotatedArray = nums.splice(size - k, k);
  nums.unshift(...rotatedArray);
  console.log(rotatedArray);
  return nums;
}
console.log(rotateArray([-1, -100, 3, 99], 2));

/*
The time complexity of this function is O(n), where n is the number of elements in the input array nums. This is because we are using the splice method to extract the last k elements of the array, which has a time complexity of O(k), and then using the unshift method to add these elements to the beginning of the array, which also has a time complexity of O(k). Since k is at most equal to the size of the array, the overall time complexity is O(n).

The space complexity of this function is O(k), where k is the number of elements we are rotating. This is because we are creating a new array to store the rotated elements before adding them back to the original array. Since k is at most equal to the size of the array, the overall space complexity is O(n).
*/

// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

function duplicates(nums) {
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
}
console.log(duplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// The time complexity of this function is O(n) because it iterates through the entire input array once. The space complexity is O(1) because the function modifies the input array in place and does not use any additional data structures that grow with the input size.

//Two pointer Approach

function duplicatesOptimised(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j <= nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i;
}
console.log(duplicatesOptimised([1, 1, 2]));

/*
The time complexity of this optimized solution is O(n) because we are iterating through the array only once. The space complexity is O(1) because we are not using any extra space that grows with the input size, we are modifying the input array in place.
*/
// Ques 1 : Truncate the text
// Write a function called truncate that checks the length of a given string - str, and if
// it surpasses a specified maximum length, maxlength, it replaces the end of the string
// with the ellipsis character "..." so that the length matches the maximum length

// Input: str = "Subscribe to RoadsideCoder" , maxlength=9
// Output: "Subscribe…"

function truncate(str, maxlength) {
  if (str.length < maxlength) {
    return str;
  } else {
    return str.slice(0, maxlength) + "...................";
  }
}
console.time("truncate");
console.log(truncate("Subscribe to RoadsideCode", 12));
console.timeEnd("truncate");

/*
The time complexity of this function is O(1) because regardless of the length of the input string, the function will always perform the same number of operations. The space complexity is also O(1) because the amount of additional space used by the function does not depend on the size of the input string.
*/

// Ques 2 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

function isPalindrome(x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}
console.log(isPalindrome(1221));

/*
The time complexity of this function is O(n), where n is the number of digits in the input number x. This is because the function needs to convert the number to a string, split it into individual characters, reverse the characters, and then join them back together to compare with the original number.

The space complexity of this function is also O(n), as the function needs to store the reversed string representation of the input number in memory.

*/

// Ques 3 : Hamming Distance
// Given two strings x and y, return the Hamming distance between them.

// Input: x = "hello", y = "hwllr"
// Output: 2
// Explanation:
//   (hello)
//   (hwllr)
//     ↑  ↑

function hammingDistance(x, y) {
  if (x.length !== y.length) {
    throw new Error("Length must of same length");
  } else {
    let distance = 0;
    for (let i = 0; i < x.length; i++) {
      if (x[i] !== y[i]) {
        distance++;
      }
    }
    return distance;
  }
}
console.log(hammingDistance("hello", "hwllr"));

/**

The time complexity of this function is O(n), where n is the length of the input strings x and y. This is because the function iterates through each character of the strings once to compare them.

The space complexity of this function is O(1) because the amount of extra space used does not increase with the size of the input strings. Only a constant amount of space is used to store the distance variable.

 */

// Ques 4 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

function isAnagram(x, y) {
  if (x.length !== y.length) {
    throw new Error("both the strings should be of same length");
  } else {
    x = x.split("").sort().join("");
    y = y.split("").sort().join("");

    return x === y ? true : false;
  }
}
console.log(isAnagram("anagram", "nagaram"));

/**
 The time complexity of this function is O(n log n), where n is the length of the input strings x and y. This is because the function involves sorting the characters of both strings, which has a time complexity of O(n log n) for each string.

The space complexity of this function is O(n), where n is the length of the input strings x and y. This is because the function creates new arrays to store the sorted characters of the input strings, which can grow up to the length of the input strings.

Overall, the function has a time complexity of O(n log n) and a space complexity of O(n).
 */

function isAnagramOptimised(s, t) {
  if (s.length !== t.length) {
    throw new Error("both the strings should be of same length");
  } else {
    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < s.length; i++) {
      obj1[s[i]] = (obj1[s[i]] || 0) + 1;
      obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
    for (const key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
}
console.log(isAnagramOptimised("rat", "car"));

/*
The time complexity of this optimized solution is O(n), where n is the length of the input strings s and t. This is because we iterate through both strings once to create the frequency objects obj1 and obj2.

The space complexity is also O(n) because we are using two objects obj1 and obj2 to store the frequency of characters in the input strings. The space complexity could be considered O(1) if we assume a constant number of characters in the input strings.

*/

//Recursion

function goToLunch(person) {
  if (person === 5) return true;
  console.log("i am inside the func " + person);
  return goToLunch(person + 1);
}
console.log("outcome ", goToLunch(1));
/*
The time complexity of this function is O(n) where n is the input person. This is because the function recursively calls itself n times before reaching the base case where person is equal to 5.

The space complexity is also O(n) because each recursive call adds a new frame to the call stack, and the stack grows linearly with the input person.
*/

// function multiply(arr) {
//   let product=1;
//   for(let i=0; i<arr.length; i++){
//     product*=arr[i]
//   }
//   return product
// }
// console.log(multiply([1, 2, 3, 4]));

function multiply(arr) {
  if (arr.length <= 0) return 1;

  return arr[arr.length - 1] * multiply(arr.splice(0, arr.length - 1));
}
console.log(multiply([1, 2, 3, 4]));

// Ques 1 : Factorial of n
// Input:  n = 5  ----->>>>>  Output: 120

function factorial(n) {
  if (n <= 0) return 1;
  else return n * factorial(n - 1);
}
console.log(factorial(5));

/**
The time complexity of the factorial function is O(n) because the function makes n recursive calls, each reducing the input by 1 until it reaches the base case of n <= 0. The space complexity is also O(n) because the function uses space on the call stack for each recursive call, resulting in a linear increase in space usage with the input size. 
 */
/*
// Ques 2 : Create an array with range of numbers
// Input:  start=1, end=5  ----->>>>>  Output:
*/

function rangeOfNumbers(start, end) {
  //Bottom up approach
  if (start > end) {
    return [];
  } else {
    const numbers = rangeOfNumbers(start, end - 1);
    numbers.push(end);
    return numbers;
  }
}
console.log(rangeOfNumbers(1, 5));

// The time complexity of this function is O(n) because it has to iterate through each number from the start to the end in order to create the array of numbers. The space complexity is also O(n) because the function creates an array to store the range of numbers, which grows in size linearly with the input range.

// Ques 4 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ----->>>>>  Output: 2

//without recusion

var fib = function (n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};
console.log(fib(10));

/*
The time complexity of this Fibonacci function is O(n) because it iterates through the loop n times to calculate the Fibonacci number at index n. The space complexity is also O(n) because the function creates an array of size n to store the Fibonacci numbers up to index n.
*/

//Recursion

const fibRecursive = (n) => {
  if (n <= 1) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
};
console.log(fib(15));

// Ques 5 - Reverse a String
// Input: "hello"  ----->>>>>  Output: "olleh"

function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello"));

/*
// Ques 1: Implement Linear Search in JavaScript
// Write a function to search "target" in nums. If target exists, then return its index.
// Otherwise, return -1. You must write an algorithm with O(n) runtime complexity.

// Input: nums = [4,5,6,7,0,1,2], target = 0  ----->>>>>  Output:  4
// Input: nums = [4,5,6,7,0,1,2], target = 3  ----->>>>>  Output: -1
*/

function linearSearch(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([4, 5, 6, 7, 0, 1, 2], 0));
console.log(linearSearch([4, 5, 6, 7, 0, 1, 2], 3));
console.log(linearSearch([4, 5, 6, 7, 0, 1, 2], 1));

/*
The time complexity of linear search is O(n) because in the worst case scenario, the algorithm will have to iterate through all n elements in the array to find the target value. The space complexity is O(1) because the algorithm only uses a constant amount of extra space regardless of the size of the input array.
*/

//Global linear search

function globalLinearSearch(nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      result.push(i);
    }
  }
  if (result.length !== 0) {
    return result;
  } else {
    return -1;
  }
}
console.log(globalLinearSearch([4, 5, 0, 6, 7, 0, 1, 2], 6));
// console.log(linearSearch([4, 5, 6, 7, 0, 1, 2], 3));
// console.log(linearSearch([4, 5, 6, 7, 0, 1, 2], 1));

/*
The time complexity of the globalLinearSearch function is O(n) because it iterates through the entire input array of length n to search for the target element. The space complexity is also O(n) because the result array can potentially store all indices where the target element is found, which could be up to n elements in the worst case scenario.
*/
// Ques 2: Implement Binary Search in JavaScript
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// Write a function to search target in nums. If target exists, then return its index.
// Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9  ----->>>>>  Output:  4
// Input: nums = [-1,0,3,5,9,12], target = 2  ----->>>>>  Output: -1

//Binary search, more efficient than linear search

function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 69));
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 0));
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 12));

/*
The time complexity of the binary search algorithm is O(log n) because with each iteration, the search space is divided in half. This is because at each step, the algorithm either moves to the left half or the right half of the array, effectively reducing the search space by half each time.

The space complexity of the binary search algorithm is O(1) because it only uses a constant amount of extra space for variables like start, end, and middle, regardless of the size of the input array

*/

// Ques 3: Kth Missing Positive Number
// Given an array arr of positive integers sorted in a strictly increasing order,
// and an integer k. Return the kth positive integer that is missing from this array.

// Input: arr = [2,3,4,7,11], k = 5  ----->>>>>  Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...].
//              The 5th missing positive integer is 9.

// arr = [2,3,4,7,11], k = 5
// count = 4
// 11 <= 9

function findKthPositive(arr, k) {
  let count = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < k + count) {
      count++;
    }
  }
  return count + k;
}
console.log(findKthPositive([2, 3, 4, 7, 11], 6));

/*
The time complexity of this function is O(n), where n is the length of the input array arr. This is because we iterate through the array once to find the kth missing positive integer.

The space complexity is O(1) because we are using a constant amount of extra space regardless of the size of the input array.
*/

// Ques 4: Maximum Count of Positive Integer and Negative Integer
// Given an array nums sorted in non-decreasing order, return the maximum between
// the number of positive integers and the number of negative integers.

// Input: nums = [-2,-1,-1,1,2,3]  ----->>>>>  Output: 3
// Explanation: There are 3 positive integers and 3 negative integers.
//              The maximum count among them is 3.

function maximumCount(nums) {
  return Math.max(upperBound(nums), lowerBound(nums));
}

function upperBound(nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = Math.ceil((low + high) / 2);
    if (nums[mid] < 0) low = mid;
    else high = mid - 1;
  }
  return nums[0] >= 0 ? 0 : low + 1;
}
function lowerBound(nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] < 0) high = mid;
    else low = mid + 1;
  }

  return nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
}

// Ques 1: Implement Bubble Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14] ----->>>>>  Output: [10,14,14,29,37]

const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
console.log(bubbleSort([29, 10, 14, 37, 14]));

// Best Time Complexity = O(n)
// Worst Time Complexity = O(n^2)
// Average Time Complexity = O(n^2)

// Space Complexity = O(1)

/*
The time complexity of the bubble sort algorithm is O(n^2) in the worst-case scenario, where n is the number of elements in the array. This is because there are two nested loops iterating over the array elements, resulting in a quadratic time complexity.

The space complexity of the bubble sort algorithm is O(1) because it only requires a constant amount of extra space for storing temporary variables during the swapping process. The space used does not increase with the size of the input array.

*/

// Sort() Method in Javascript

const fruits = ["dragon fruit", "apple", "date", "cherry", "banana"];
console.log(fruits.sort());

const nums = [10, 5, 18, 1, 27];

const compareFunction = (a, b) => {
  return a - b;
};

console.log(nums.sort(compareFunction));


const people = [
  {name: "Piyush", age: 25},
  {name: "Suyash", age: 22},
  {name: "Raj", age: 30},
  {name: "Ishan", age: 27},
];

const compareFunctionObj = (a, b) => {
  return a.age - b.age;
};

console.log(people.sort(compareFunctionObj));
