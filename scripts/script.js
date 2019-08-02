// !Class Section
class List {
    constructor() {
        this.list = [];
    }
    add(name, price) {
        let newItem = new Item(name, price);
        this.list.push(newItem);
    }
    removeLast() {
        this.list.pop();
    }
    reset() {
        this.list = [];
    }
}

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

function display(list, location) {
    document.querySelector(location).innerHTML = "";
    for (let item of list) {
        const div = document.createElement("div");
        // div.classList.add();
        div.innerHTML = `
      <p>Item: ${item.name}</p><p>Price: ${item.price}</p>
      `;
        document.querySelector(location).append(div);
    }
}
// !Handling Functions
function foodFormHandle(event) {
    event.preventDefault();
    console.log("I am working");
    foodList.add(event.target[0].value, event.target[1].value);
    display(foodList.list, "#itemFood");
}
// undoes each submit on each category card - Claire made this
function foodUndoHandle(event) {
    event.preventDefault();
    console.log("reset!");
    foodList.removeLast();
    display(foodList.list, "#itemFood");
}
function entUndoHandle(event) {
    event.preventDefault();
    console.log("reset!");
    enterList.removeLast();
    display(enterList.list, "#itemEnt");
}
function clothUndoHandle(event) {
    event.preventDefault();
    console.log("reset!");
    clothList.removeLast();
    display(clothList.list, "#itemCloth");
}
function billUndoHandle(event) {
    event.preventDefault();
    console.log("reset!");
    clothList.removeLast();
    display(billList.list, "#itemBill");
}

// resets budget from initial budget form - Claire made this

function budgetResetHandle(event) {
    event.preventDefault();
    console.log("reset!");
    foodList.reset();
    display(foodList.list, "#itemFood");
    enterList.reset();
    display(enterList.list, "#itemEnt");
    clothList.reset();
    display(clothList.list, "#itemCloth");
    billList.reset();
    display(billList.list, "#itemBill");
}





function entFormHandle(event) {
    event.preventDefault();
    console.log("I am working");
    enterList.add(event.target[0].value, event.target[1].value);
    display(enterList.list, "#itemEnt");
}
function clothFormHandle(event) {
    event.preventDefault();
    console.log("I am working");
    clothList.add(event.target[0].value, event.target[1].value);
    display(clothList.list, "#itemCloth");
}
function billFormHandle(event) {
    event.preventDefault();
    console.log("I am working");
    billList.add(event.target[0].value, event.target[1].value);
    display(billList.list, "#itemBill");
}

// !List Assisnment
let budgetList = new List();
let foodList = new List();
let enterList = new List();
let clothList = new List();
let billList = new List();

// !querySelector variables
let budgetForm = document.querySelector("#budgetForm");
let foodForm = document.querySelector("#foodForm");
let entForm = document.querySelector("#entForm");
let clothForm = document.querySelector("#clothForm");
let billForm = document.querySelector("#billForm");

// !Event Listeners
foodForm.addEventListener("submit", foodFormHandle);
entForm.addEventListener("submit", entFormHandle);
clothForm.addEventListener("submit", clothFormHandle);
billForm.addEventListener("submit", billFormHandle);

//!Event Listeners for undo last item on each category card - Claire made
foodForm.addEventListener("reset", foodUndoHandle);
entForm.addEventListener("reset", entUndoHandle);
clothForm.addEventListener("reset", clothUndoHandle);
billForm.addEventListener("reset", billUndoHandle);

//Event Listener for reset all on budget form page only - Claire made
budgetForm.addEventListener("reset", budgetResetHandle);

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




