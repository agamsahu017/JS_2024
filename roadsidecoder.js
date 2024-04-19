console.log("hi i am agam");

function sum(...numbers) {
  return numbers;
}

console.log(sum("nums", "nums2", 5, "hello"));

//
const nums = [1, 2, 3];
nums.reverse();
console.log(nums);

const unsorted = [5, 2, 10, 7, 3, 1];

const sort = unsorted.sort((a, b) => a - b);

console.log("18 ", sort);

//Strings

const jsString = new String("Subscribe to Agam Sahu!");

console.log(jsString);

const backticks = `
Subscribe to RoadsideCoder! 
Like this Video
Share this video
`;
console.log(backticks);

const str = "Subscribe to RoadsideCoder!";
console.log(str.charAt(4));
str[3] = "z";
const newString = str.replaceAll("s", "z");
console.log(str);
console.log(newString);

const toBeConverted = 788;
let newStr = String(toBeConverted);
console.log(newStr);
console.log(typeof newStr);

const newArr=str.split("e")
console.log(newArr);

const arr = ["apple", "banana"];
let arrStr = arr.join(" and ");
console.log(arrStr);
