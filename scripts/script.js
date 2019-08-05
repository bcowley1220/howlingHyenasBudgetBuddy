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
    this.price = Number(price);
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


// !Handling Functions

function onFormSubmit(event) {
  event.preventDefault();
  if (event.target[2].value === "bill") {
    billList.add(event.target[0].value, event.target[1].value);
    budgetList.list[0].bill = budgetList.list[0].bill - event.target[1].value;
    budgetList.list[0].total = budgetList.list[0].total - event.target[1].value;
    showTotals("#billBudget", budgetList.list[0].bill);
    showTotals("#totalBudget", budgetList.list[0].total);
    display(billList.list, "#itemBill");
  } else if (event.target[2].value === "clothing") {
    clothList.add(event.target[0].value, event.target[1].value);
    budgetList.list[0].clothing =
      budgetList.list[0].clothing - event.target[1].value;
    budgetList.list[0].total = budgetList.list[0].total - event.target[1].value;
    showTotals("#totalBudget", budgetList.list[0].total);
    showTotals("#clothingBudget", budgetList.list[0].clothing);
    display(clothList.list, "#itemCloth");
  } else if (event.target[2].value === "food") {
    foodList.add(event.target[0].value, event.target[1].value);
    budgetList.list[0].food = budgetList.list[0].food - event.target[1].value;
    budgetList.list[0].total = budgetList.list[0].total - event.target[1].value;
    showTotals("#totalBudget", budgetList.list[0].total);
    showTotals("#foodBudget", budgetList.list[0].food);
    display(foodList.list, "#itemFood");
  } else if (event.target[2].value === "entertainment") {
    enterList.add(event.target[0].value, event.target[1].value);
    budgetList.list[0].entertainment =
      budgetList.list[0].entertainment - event.target[1].value;
    budgetList.list[0].total = budgetList.list[0].total - event.target[1].value;
    showTotals("#totalBudget", budgetList.list[0].total);
    showTotals("#entBudget", budgetList.list[0].entertainment);
    display(enterList.list, "#itemEnt");
    showTotals("#totalBudget", budgetList.list[0].total);
  } else if (event.target[4].value === "budget") {
    console.log("I am cardForm");
    budgetList.totalAdd(
      event.target[0].value,
      event.target[1].value,
      event.target[2].value,
      event.target[3].value
    );
    console.log(budgetList);
    showTotals("#totalBudget", budgetList.list[0].total);
    showTotals("#foodBudget", budgetList.list[0].food);
    showTotals("#entBudget", budgetList.list[0].entertainment);
    showTotals("#clothingBudget", budgetList.list[0].clothing);
    showTotals("#billBudget", budgetList.list[0].bill);
  }
  alertUser();

}

function alertUser() {
  if (budgetList.list[0].total <= 0) {
    alert("You have reached your budget!");
  }
}

function updateTotal(listPosition, pLocation) {
  for (let item = 0; item < list.length; item++) {
    let price = document.querySelector(pLocation); // current price location
    let total = document.querySelector(listPosition); //original price value from first card
  }
}
//     //increment through supplied list
//     //we want to find
//   }
// }

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
function display(list, location) {
  document.querySelector(location).innerHTML = "";
  for (let item of list) {
    const div = document.createElement("div");
    // div.classList.add();
    div.innerHTML = `
      <p> ${item.name}</p> <p id="priceCall">$${item.price}</p>
      `;
    document.querySelector(location).append(div);
  }
}
function showTotals(location, item) {
  document.querySelector(location).innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `
<p>Budget: $${item}</p>`;
  document.querySelector(location).append(div);
}

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
//RandomSelector

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

// function mathFunction(){
//   for (let i = 0; i < Array.length; i++){
//     identify price value, subtract from total
//   }
// }

// TODO
// !Math function:
// !write function that takes price value and minuses from the total
// if budgetList <= 0 alert customer
// !Alert function: if budget <= 0, then alter user

// CSS
// !Blow up the font on the display boxes for each budget to fill space or shrink box
// !Add logo to top

// TODO/WhatWeKnow For Math Function
// !All totals are String; we need them as numbers to be able to do functions
// !We are uncertain if we are accessing the information properly
// !document.querySelector("#priceCall").firstChild.nodeValue; actually gives us the value
// !Make new instance from List class and hold info from first form in it; holding it as integers instead of strings.
// !Could make new variable that holds the value of budgetList, but as ints instead of strings
// !When pull the prices out of the Array, we need to convert from string to int.
// ! console.log(parseInt(document.querySelector("#priceCall").firstChild.nodeValue)); returned an int
