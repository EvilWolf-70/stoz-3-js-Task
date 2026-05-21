const colorBtns = [
  { name: "Red", color: "red" },
  { name: "Blue", color: "blue" },
  { name: "Green", color: "green" },
  { name: "Yellow", color: "yellow" },
  { name: "Purple", color: "purple" }
];

const STORAGE_KEY = "rageTrackerData";

let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  totalClicks: 0,
  clicks: {},
  history: []
};



const buttonGrid = document.getElementById("buttonGrid");
const totalClicks = document.getElementById("totalClicks");
const mostClicked = document.getElementById("mostClicked");
const historyList = document.getElementById("historyList");
const resetBtn = document.getElementById("resetBtn");


// TO create a dynamic buttons 

colorBtns.forEach((item) => {

  console.log(data.clicks[item.name])


  if (!data.clicks[item.name]) {
    data.clicks[item.name] = 0;
  }

  const btn = document.createElement("button");

  btn.classList.add("color-btn");

  btn.style.background = item.color;

  updateButtonText(btn, item.name);

  btn.addEventListener("click", () => {

    data.totalClicks++;
    data.clicks[item.name]++;

    // current time
    const time = new Date().toLocaleTimeString();

    // add history
    data.history.unshift(
      {
        itemName : item.name,
        itemTime : time
        // ${item.name} clicked at ${time}
      }
    );

    saveData();

    updateUI();

    updateButtonText(btn, item.name);

  });

  buttonGrid.appendChild(btn);

});


// BUTTON TEXT
function updateButtonText(button, name) {

  button.innerHTML = `
    <div> ${name}</div>
    <div> Count: ${data.clicks[name]}</div>
  `;
}


function updateUI() {

  totalClicks.textContent = data.totalClicks;

  let max = 0;
  let maxButton = "None";

  for (let key in data.clicks) {

    if (data.clicks[key] > max) {
      max = data.clicks[key];
      maxButton = key;
    }
  }

  mostClicked.textContent = maxButton;

  // HISTORY
  historyList.innerHTML = "";

  data.history.forEach((item) => {
    const li = document.createElement("li");
    li.style.color = item.itemName;
    li.textContent = `${item.itemName} clicket at ${item.itemTime}`;

    historyList.appendChild(li);

  });

}


// SAVE LOCAL STORAGE
function saveData() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}


// RESET BUTTON
resetBtn.addEventListener("click", () => {

  localStorage.removeItem(STORAGE_KEY);

  data = {
    totalClicks: 0,
    clicks: {},
    history: []
  };

  colorBtns.forEach((item) => {
    data.clicks[item.name] = 0;
  });

  location.reload(); //reload the page
  saveData();

});


updateUI();