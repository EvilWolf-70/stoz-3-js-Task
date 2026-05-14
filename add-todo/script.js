const form = document.getElementById("task-form");
const clrBtn = document.getElementById("btn-clear");
const inputValue = document.getElementById("task");
const ul = document.querySelector(".collection");
// console.log(collections)

const delBtns = document.querySelectorAll(".delete-item");
clrBtn.addEventListener("click", removeLists);

//remove list

ul.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.parentElement.classList.contains("delete-item") ){
    e.target.parentElement.parentElement.remove();
  }
});
// delBtns.forEach((del) => {
//   del.addEventListener("click", () => {
//     del.parentElement.remove();
//   });
// });
// removeall function
function removeLists() {
  const lists = document.querySelectorAll(".collection-item");
  lists.forEach((list) => {
    list.remove();
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputValue.value.trim() === "") {
    alert("enter Please");
    return;
  }
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
  //  console.log(inputValue.value);

  inputValue.value = "";
});
