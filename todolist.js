const button = document.getElementById(taskButton);
const taskField = myInput.value;
let newArray = [];

addButton.addAdventListner("click", function () {
  myInput;
});

function addTask() {
  let inputField = document.getElementById("myInput");
  const taskField = inputField.value;
  newArray.push(taskField);

  newArray.push(taskField);
  localStorage.taskField = JSON.stringify(newArray);
}

if (localStorage.taskField) {
  localStorage.taskField = JSON.stringify(newArray);
  newArray = JSON.parse(localStorage.taskField);
}
