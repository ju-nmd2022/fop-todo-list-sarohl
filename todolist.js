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
  saveData();
};

listOfTasks.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", listOfTasks.innerHTML);
};

const showTask = () => {
  listOfTasks.innerHTML = localStorage.getItem("data");
};
showTask();
