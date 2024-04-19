console.log("hi");
//How to execute a piece of code repeatedly after some fix time?

//
const element = document.getElementById("myElement");
element.style.setProperty("color", "blue");
// console.log(element);

// Array of numbers
// const numbers = [1, 2, 3, 4, 5];

// const newArr = [];

// const num = numbers.forEach((ele) => {
//   ele = ele * 7;
//   newArr.push(ele);
//   console.log(ele);
// });

// console.log(num);
// console.log(newArr);

// //

// const newElement = document.createElement("h1");
// newElement.textContent = "i am new paragraph by agam";
// document.body.appendChild(newElement)

// document.body.removeChild(newElement)

//Keyboard events -> keyDown, keyUp, keyPress

// document.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     console.log("Enter key pressed");
//   }
// });

//

// const jsonData = '{"name": "Happy", "age": 40}';
// const parsedData = JSON.parse(jsonData);
// console.log(parsedData.name);

// console.log(window.location.href);

// copy of array

// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray=originalArray.slice(2)
// // const copiedArray=[...originalArray]

// originalArray.push(19)

// console.log(copiedArray);
// console.log(originalArray);

// //bracket notation []
// var str = 'Hello';

// console.log(str[2]);
// console.log(str.charAt(4));

// check if a string contains a specific substring?

// var str = "Hello, World"; // The original string
// var substring = "world"; // The substring to search for

// //includes

// let isPresent = str.includes(substring);
// console.log(isPresent);

// //indexOf

// let isPresent2 = str.indexOf(substring) > 0;
// console.log(isPresent2);

// //regular expression

// let isPresent3 = str.search();
// console.log(isPresent3);

//Closure

// function createCounter(){
//     let count =0

//     return function (){
//         count++
//         console.log(count);
//     }
// }

// const closure1= createCounter()
// closure1()
// closure1()
// closure1()

// console.log("-------------");

// const closure2= createCounter()
// closure2()
// closure2()

//
const inputField = document.getElementById("myInput");
// console.log(myInput);

inputField.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  // console.log(event.target.value)
  console.log(inputValue.length);

  if (inputValue.length < 3) {
    console.log("input must be 3 characeters long");
  } else {
    console.log("Input is valid");
  }
});

//Paginantion

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const itemsPerPage=10
// const pageNumber=2

// const startIndex=(pageNumber-1)*itemsPerPage

// console.log(startIndex);

// const paginatedData= data.slice(startIndex, startIndex+itemsPerPage)

// console.log(data);
// console.log(paginatedData);

//Drag and drop

// const draggableElement = document.getElementById("dragElement");
// draggableElement.addEventListener("dragstart", (event) => {
//     console.log(event.target);
// //   event.dataTransfer.setData("text/plain", event.target.id);
// });

//
const data = ["My", "Name", "Is", "Happy", "Yippee", "Agam", "Sahu"];
const searchTerm = "pp";

const filteredData = data.filter((x) => {
  return x.includes(searchTerm);
});

// console.log(filteredData);

//Live search with the help of API

// const input = document.getElementById("searchInput");

// input.addEventListener("input", (event) => {
//   const searchText = event.target.value;
//   console.log(searchText);
//   fetch(`/search/suggestions?query=${searchText}`)
//     .then((response) => response.json())
//     .then((data) => {
//       // Display search suggestions to the user
//     });
// });

//Date in real time

function updateDateTime() {
  const dateTime = document.getElementById("dateTime");
  const now = new Date();
  //   console.log(now);

  const formattedDate = `${now.getFullYear()} - ${(
    now.getMonth() + 1
  ).toString()}- ${now.getDate().toString()}
  ${now.getHours().toString()} : ${now.getMinutes().toString()} : ${now
    .getSeconds()
    .toString()}
  `;
  dateTime.textContent = formattedDate;
}

setInterval(updateDateTime, 1000);

//Implement toggle switch

// var toggleBtn = document.getElementById("themeToggle");
// const body = document.body;
// toggleBtn.addEventListener("click", function (e) {
//   body.classList.toggle("dark-mode");
// });


//Infinite scroll event

loadMoreContent()

function loadMoreContent(){
  //  fetch("/load-more-content").then((response)=> response.text())
}

//thersold point

const thersold= 200

//Event listener for scroll event

window.addEventListener("scroll", ()=>{
const scrollPosition= window.scrollY;
console.log(scrollPosition);

})
