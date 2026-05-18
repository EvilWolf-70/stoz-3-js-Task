const form = document.getElementById("task-form");
const clrBtn = document.getElementById("btn-clear");
const inputValue = document.getElementById("task");
const ul = document.querySelector(".collection");
const filterInput = document.getElementById("search");

// console.log(collections)

//remove list

// delBtns.forEach((del) => {
//   del.addEventListener("click", () => {
//     del.parentElement.remove();
//   });
// });
// removeall function

// form.addEventListener("submit", (e) => {});

function loadEventListeners() {
  document.addEventListener("DOMContentLoaded", getLocal);
  form.addEventListener("submit", addTasks);
  clrBtn.addEventListener("click", removeLists);
  ul.addEventListener("click", removeTask);
  filterInput.addEventListener("input", filterItems);
}

function getLocal() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let icon = `<i class="fa fa-remove"></i>`;
    a.setAttribute("href", "#");
    a.classList = "delete-item secondary-content";
    li.classList = "collection-item";
    a.innerHTML = icon;
    li.textContent = task;
    li.appendChild(a);
    ul.appendChild(li);
  });
}


function addTasks(e) {
  e.preventDefault();
  if (inputValue.value.trim() === "") {
    alert("enter Please");
  } else {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let icon = `<i class="fa fa-remove"></i>`;
    a.setAttribute("href", "#");
    a.classList = "delete-item secondary-content";
    li.classList = "collection-item";
    a.innerHTML = icon;
    li.textContent = inputValue.value;
    li.appendChild(a);
    ul.appendChild(li);
    setLocalInTask(inputValue.value);
    inputValue.value = "";
  }
}


function setLocalInTask(value) {
  let tasks;
  // =  localStorage.getItem('task')
  // console.log(tasks);
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(tasks);
  }

  tasks.push(value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(tasks);
}

function removeLists() {

  ul.innerHTML = "";
  localStorage.removeItem('tasks')
}
function removeTask(e) {
  e.preventDefault();
  let text;
  if (e.target.parentElement.classList.contains("delete-item")) {
    text = e.target.parentElement.parentElement.textContent;
    console.log(text);
    e.target.parentElement.parentElement.remove();
  }
  removeTaskLocal(text);
}

function removeTaskLocal(text) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((task, idx) => {
    if (text === task) {
      tasks.splice(idx, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function filterItems(e) {
  let items = document.querySelectorAll(".collection-item");

  let value = e.target.value.toLowerCase();
  // let items = document.querySelectorAll(".collection-item");
  items.forEach((item) => {
    let val = item.textContent.toLowerCase();
    if (val.includes(value)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  // console.log(ul.children)
  // console.log(e.target.value);
}

loadEventListeners();
