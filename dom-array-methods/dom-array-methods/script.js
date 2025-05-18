const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showmillionairesBtn = document.getElementById("show-millionairesBtn");
const sort = document.getElementById("sort");
const calculatewealth = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// fetch random user and add money
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const newUser = {
    name: "${user.name.first} ${user.name.last}",
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newUser);
}

//add new obj to data arr
function addData(obj) {
  data.push(obj);
}

// update DOM
function updateDOM(providedData = data) {
  //clear main div
  main.innerHTML = "<h2><strong>person</strong>wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = "<strong>${item.name}</strong> $ {item.money}";
    main.appendChild(element);
  });
}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}
// Event listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionairesBtn.addEventListener("click", showMillionaires);
calculateWealthBtn.addEventListener("click", calculateWealth);
