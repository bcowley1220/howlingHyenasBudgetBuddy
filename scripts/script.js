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
function handleSubmit(event) {
  event.preventDefault();
  console.log("I am working");
  foodList.add(event.target[0].value, event.target[1].value);
}

// !Assignment Area
let budgetList = new List();
let foodList = new List();
let enterList = new List();
let clothList = new List();
let billList = new List();

let foodForm = document.getElementById("foodForm");

// !Event Listeners
foodForm.addEventListener("submit", handleSubmit);

console.log(foodList);
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
