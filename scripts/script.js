class List {
  constructor() {
    this.list = [];
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
  myTotal.add(event.target[0], event.target[1]);
}

// !Assignment Area
let form = document.querySelector("form");

let myTotal = new List();

// !Event Listeners
form.addEventListener("submit", handleSubmit);

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
