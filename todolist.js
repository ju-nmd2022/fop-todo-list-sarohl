const button = document.getElementById("taskButton");
const taskField = document.getElementById("myInput");
const jd = document.getElementById("listForTasks");
// const taskField = myInput.value;
let newArray = [];

button.addEventListener("click", function () {
  addTask();
});

function addTask() {
  let inputField = document.getElementById("myInput");
  const tasks = inputField.value;
  newArray.push(task);

  localStorage.setItem("tasks", JSON.stringify(newArray));
  console.log(localStorage.getItem("tasks"));
}

if (localStorage.getItem("tasks") !== null) {
  newArray = JSON.parse(localStorage.getItem("tasks"));
  console.log(newArray);
}
