const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask() {
  if (inputBox.value == "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    // create text node and assign it to the li element
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    //Adding the Delete symbol at the end of the input list
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveTask();
}
// Function to Check tasks from the list and delete task from the list
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveTask();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveTask();
    }
  },
  false
);

// Fuction to save data even after the web browser has been refreshed.
function saveTask() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

//Function to display data when website reloads again
function showTask() {
  listContainer.innerHTML = localStorage.getItem("tasks");
}
showTask();
