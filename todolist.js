const inputBox = document.getElementById("input-box");
const listOfTasks = document.getElementById("task-list");

const addTask = () => {
  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listOfTasks.appendChild(li);

  let span = document.createElement("span");
  span.innerHTML = "x";
  li.appendChild(span);

  inputBox.value = "";
  save();
};

const handleClickEvent = (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    save();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    save();
  }
};

listOfTasks.addEventListener("click", handleClickEvent);

function save() {
  localStorage.setItem("data", listOfTasks.innerHTML);
}

function viewTask() {
  listOfTasks.innerHTML = localStorage.getItem("data");
}
viewTask();
