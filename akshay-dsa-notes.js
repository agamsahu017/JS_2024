<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      /* Sum of Two Integers*/
      /*Write a Program that defines a function to calculate the sum of two integers and prints the result. Call this function by passing two integer values.
       */
      function sum(a, b) {
        const sum = a + b;
        console.log("The sum is ", sum);
      }
      sum(6, 7);

      /*Write a function that takes an integer and returns its square. Call this function and prints the result. Square(x) is a function that computes the square of a number. It returns the result instead of printing it.
       */
      function Square(x) {
        return x * x;
      }
      const square = Square(4);
      console.log("Sqaure is ", square);
      /*
Write a program that accepts a number (age) and checks whether the person is eligible to vote. A person is eligible if their age is 18 or more.
*/

      let age = 17;

      if (age >= 18) {
        console.log("Eligible to Vote");
      } else {
        console.log("Not eligible to Vote");
      }

      /*

      Write a function that accepts a number and checks whether it is Even or Odd. If the number is divisble by 2, it’s an Even number. Otherwise, it’s an Odd number. Test the function with inputs 18 and 5.
      */
      function checkEvenOrOdd(x) {
        if (x % 2 === 0) {
          console.log("Number is even");
        } else {
          console.log("Number is odd");
        }
      }
      checkEvenOrOdd(5);
      checkEvenOrOdd(8);

      /*
      Write a program to print all even numbers from an array.
      */

      //   const arr = [10, 3, 5, 2, 7, 6, 9];

      //   for (let i = 0; i < arr.length; i++) {
      //     if (arr[i] % 2 === 0) {
      //       console.log(arr[i]);
      //     }
      //   }
      /*
Write a function that returns the number of negative numbers in an array.
*/

      //   function countNegativeNumbers(arr2) {
      //     let count = 0;
      //     for (let i = 0; i < arr2.length; i++) {
      //       if (arr2[i] < 0) {
      //         count++;
      //       }
      //     }
      //     return count;
      //   }
      //   let arr2 = [2, -6, 4, 8, 1, -9];
      //   let result = countNegativeNumbers(arr2);
      //   console.log("countNegativeNumbers ", result);

      /*
      Write a function that returns the smallest number in an array.
      */

      //   function findSmallest(arr3) {
      //     let smallest = Infinity;
      //     for (let i = 0; i < arr3.length; i++) {
      //       if (arr3[i] < smallest) {
      //         smallest = arr3[i];
      //       }
      //     }
      //     return smallest;
      //   }

      //   let arr3 = [2, -6, 4, 8, 1, -9];
      //   let result3 = findSmallest(arr3);
      //   console.log("Result smallest:", result3); // Output: -9

      /*
      Write a function that returns the largest number in an array.
      */

      //   function findLargest(arr) {
      //     let largest = -Infinity;
      //     for (let i = 0; i < arr.length; i++) {
      //       if (arr[i] > largest) {
      //         largest = arr[i];
      //       }
      //     }
      //     return largest;
      //   }

      //   let arr = [2, -6, 4, 8, 1, -9];
      //   let result = findLargest(arr);
      //   console.log("Result: largest", result); // Output: 8

      /*
// Write a function that searches for an element in an array and returns its index. Return -1 if the element is not present.
*/

      let arr4 = [1, 2, 3, 4, 20, 10, 20, 50];

      function searchElement(arr, element) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === element) {
            return i;
          }
        }
        return -1
      }

      console.log("search ele ", searchElement(arr4, 19));
    </script>
  </body>
</html>
