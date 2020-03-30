// Define UI VARS
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Loads All event Listener
loadEventListeners();

// Loads All event Listener
function loadEventListeners() {
  // ! ADDING TASK
  form.addEventListener("submit", addTask);
  // ! DELETING TASK
  taskList.addEventListener("click", removeTask);
  // ! CLEARING TASK
  clearBtn.addEventListener("click", clearTask);
  // ! FILTER TASK
  filter.addEventListener("keyup", filterTask);
}

//  Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }
  const li = document.createElement("li");

  li.className = "collection-item";

  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement("a");

  link.className = "delete-item secondary-content";

  link.innerHTML = '<i class = "fa fa-remove"></i>';

  li.appendChild(link);

  taskList.appendChild(li);

  e.preventDefault();
}
//  Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you Sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
// Clearing task
function clearTask() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
// Filtering Task
function filterTask(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
