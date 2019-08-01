// !Class Section
class List {
  constructor() {
    this.list = [];
  }
  add(name, price) {
    let newItem = new Item(name, price);
    this.list.push(newItem);
  }
}

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// !Handling Functions
function foodFormHandle(event) {
  event.preventDefault();
  console.log("I am working");
  foodList.add(event.target[0].value, event.target[1].value);
}
function entFormHandle(event) {
  event.preventDefault();
  console.log("I am working");
  enterList.add(event.target[0].value, event.target[1].value);
}
function clothFormHandle(event) {
  event.preventDefault();
  console.log("I am working");
  clothList.add(event.target[0].value, event.target[1].value);
}
function billFormHandle(event) {
  event.preventDefault();
  console.log("I am working");
  billList.add(event.target[0].value, event.target[1].value);
}

// !List Assisnment
let budgetList = new List();
let foodList = new List();
let enterList = new List();
let clothList = new List();
let billList = new List();

// !querySelector variables
let foodForm = document.querySelector("#foodForm");
let entForm = document.querySelector("#entForm");
let clothForm = document.querySelector("#clothForm");
let billForm = document.querySelector("#billForm");

// !Event Listeners
foodForm.addEventListener("submit", foodFormHandle);
entForm.addEventListener("submit", entFormHandle);
clothForm.addEventListener("submit", clothFormHandle);
billForm.addEventListener("submit", billFormHandle);

// function revealPurple(event){
//   console.log('I have been clicked.')
//   purple.style.visibility = "visible";
// }

// function hidePurple(event){
//   console.log('I have been click purple');
//   purple.style.visibility = "hidden";
// }

// let purple = document.getElementById('purple');
// let but1 = document.querySelector('.button1');

// button1.addEventListener('click', revealPurple);
// purple.addEventListener('click', hidePurple);
