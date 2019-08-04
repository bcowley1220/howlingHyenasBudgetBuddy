// !Class Section
class List {
  constructor() {
    this.list = [];
  }
  add(name, price) {
    let newItem = new Item(name, price);
    this.list.push(newItem);
  }
  totalAdd(food, entertainment, clothing, bill) {
    let newTotalItem = new FourItem(food, entertainment, clothing, bill);
    this.list.push(newTotalItem);
  }
}

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class FourItem {
  constructor(food, entertainment, clothing, bill) {
    this.food = Number(food);
    this.entertainment = Number(entertainment);
    this.clothing = Number(clothing);
    this.bill = Number(bill);
    this.total = this.food + this.entertainment + this.clothing + this.bill;
  }
}

function display(list, location) {
  document.querySelector(location).innerHTML = "";
  for (let item of list) {
    const div = document.createElement("div");
    // div.classList.add();
    div.innerHTML = `
      <p> ${item.name} $${item.price}</p>
      `;
    document.querySelector(location).append(div);
  }
}
// !Handling Functions

function onFormSubmit(event) {
  event.preventDefault();
  if (event.target[2].value === "bill") {
    billList.add(event.target[0].value, event.target[1].value);
    display(billList.list, "#itemBill");
  } else if (event.target[2].value === "clothing") {
    clothList.add(event.target[0].value, event.target[1].value);
    display(clothList.list, "#itemCloth");
  } else if (event.target[2].value === "food") {
    foodList.add(event.target[0].value, event.target[1].value);
    display(foodList.list, "#itemFood");
  } else if (event.target[2].value === "entertainment") {
    enterList.add(event.target[0].value, event.target[1].value);
    display(enterList.list, "#itemEnt");
  } else if (event.target[4].value === "budget") {
    console.log("I am cardForm");
    budgetList.totalAdd(
      event.target[0].value,
      event.target[1].value,
      event.target[2].value,
      event.target[3].value
    );
    console.log(budgetList);
    // display(budgetList.total, "#totalBudget");
  }
}
// !This function, on click of the right target, will change the
// !visibility of the matching card.
function onNavClick(event) {
  event.preventDefault();
  console.log("nav button has been clicked");
  if (event.currentTarget.value === "foodNav") {
    foodCard.style.visibility = "visible";
  } else if (event.currentTarget.value === "entNav") {
    entCard.style.visibility = "visible";
  } else if (event.target.value === "cloNav") {
    cloCard.style.visibility = "visible";
  } else if (event.target.value === "billNav") {
    billCard.style.visibility = "visible";
  } else if (event.target.value === "menuButton") {
    let allCards = document.querySelectorAll(".bigCard");
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].style.visibility = "hidden";
    }
    menuCard.style.visibility = "visible";
  }
}

// !Visibility Functions

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// !List Assignment
let budgetList = new List();
let foodList = new List();
let enterList = new List();
let clothList = new List();
let billList = new List();

// !querySelector variables
//Form Section
let foodForm = document.querySelector("#foodForm");
let entForm = document.querySelector("#entForm");
let clothForm = document.querySelector("#clothForm");
let billForm = document.querySelector("#billForm");
let cardForm = document.querySelector("#cardForm");

//Card Section
let menuCard = document.querySelector("#menuCard");
let foodCard = document.querySelector("#foodCard");
let entCard = document.querySelector("#entCard");
let cloCard = document.querySelector("#cloCard");
let billCard = document.querySelector("#billCard");
let budgetFormCard = document.querySelector("#budgetFormCard");
//Nav Card Section
let menuNav = document.querySelector("#menuNav");
let foodNav = document.querySelector("#foodNav");
let entNav = document.querySelector("#entNav");
let cloNav = document.querySelector("#cloNav");
let billNav = document.querySelector("#billNav");

// !Event Listeners
//Form Submit Block
foodForm.addEventListener("submit", onFormSubmit);
entForm.addEventListener("submit", onFormSubmit);
clothForm.addEventListener("submit", onFormSubmit);
billForm.addEventListener("submit", onFormSubmit);
cardForm.addEventListener("submit", onFormSubmit);

//Nav Click Block
// document.querySelector("#menuCard").addEventListener("click", onNavClick);
foodNav.addEventListener("click", onNavClick);
entNav.addEventListener("click", onNavClick);
cloNav.addEventListener("click", onNavClick);
billNav.addEventListener("click", onNavClick);
menuNav.addEventListener("click", onNavClick);

// budgetFormCard.addEventListener("click", onNavClick);
