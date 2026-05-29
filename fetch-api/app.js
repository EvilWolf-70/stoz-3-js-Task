const API = "api.json";
const UI = document.querySelector("#load-UI");
const loadBtn = document.querySelector("#loadBtn");
let uiHTML = "";

loadBtn.addEventListener("click", fetchAPi);

function fetchAPi() {
  loadBtn.innerText = "Loading...";

  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((user) => {
        uiHTML += `
        <div class="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">

      <img
        src="${user.image}"
        alt="User"
        class="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
      />

      <h2 class="text-2xl font-bold mt-4">${user.username}</h2>

      <p class="text-gray-500">${user.email}</p>

      <p class="text-gray-600 mt-3">
       ${user.university}
      </p>

      <div class="flex justify-center gap-3 mt-5">
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Follow
        </button>

        <button class="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
          Message
        </button>
      </div>
    </div>`;
        UI.innerHTML = uiHTML;
      });
    });
  loadBtn.innerText = "Loaded";
}
