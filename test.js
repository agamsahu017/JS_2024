try {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");

  let dataAPI = await response.json();

  console.log(dataAPI);
} catch (error) {
  console.log("test......... ",error);
}
