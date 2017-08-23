let backStack = [];
let currentStack = [];
let forwardStack = [];

function forward() {
  // if the forward stack is not empty
  if (forwardStack.length > 0) {
    // pop the current stack and push to the back stack
    backStack.push(currentStack.pop());
    // pop the forward stack and push to the current stack
    currentStack.push(forwardStack.pop());
    render();
  }
}

function back() {
  // if the back stack is not empty
  if (backStack.length > 0) {
    // pop the current stack and push to the forward stack
    forwardStack.push(currentStack.pop());
    // pop the back stack and push to the current stack
    currentStack.push(backStack.pop());
    render();
  }
}

function go() {
  let newAddress = document.getElementById('address-bar');
  if (currentStack[currentStack.length - 1] !== newAddress.value) {
    // Clear the forwardStack
    forwardStack = [];
    // Pop the currentStack to the backStack
    if (currentStack.length > 0) {
      backStack.push(currentStack.pop());
    }
    // Push the newAddress.value to the currentStack
    currentStack.push(newAddress.value);
    render();
  }
}

function render() {
  renderBackStack();
  renderCurrentStack();
  renderForwardStack();
  // clear the address-bar
  let address = document.getElementById('address-bar');
  address.value = "";
}

function renderBackStack() {
  // get the backstack element by id
  let backStackEl = document.getElementById("backStack");
  backStackEl.innerHTML = "Back Stack";
  // iterate thru the backstack
  for (let i = backStack.length - 1 ; i >= 0; i--) {
    let p = document.createElement("p");
    p.textContent = backStack[i];
    backStackEl.appendChild(p);
  }
}

function renderCurrentStack() {
  // get the backstack element by id
  let currentStackEl = document.getElementById("currentStack");
  currentStackEl.innerHTML = "Current Stack";
  // iterate thru the backstack
  for (let i = currentStack.length - 1 ; i >= 0; i--) {
    let p = document.createElement("p");
    p.textContent = currentStack[i];
    currentStackEl.appendChild(p);
  }
}

function renderForwardStack() {
  // get the backstack element by id
  let forwardStackEl = document.getElementById("forwardStack");
  forwardStackEl.innerHTML = "Forward Stack";
  // iterate thru the forwardstack
  for (let i = forwardStack.length - 1 ; i >= 0; i--) {
    let p = document.createElement("p");
    p.textContent = forwardStack[i];
    forwardStackEl.appendChild(p);
  }
}

/*
// getElementById(name_of_id)
* document.getElementById('idName')

// innerHTML
* document.getElementById('idName').innerHTML
* set the html content
* retrieve the html content

// createElement(element)
* document.createElement("p");
* create an HTML element

// textContent
* let p = document.createElement("p")
* p.textContent = "some text"
* set the text value for an HTML element

// appendChild
* let idNameEl = document.getElementById('idName')
* let p = document.createElement("p");
* p.textContent = "some text"
* idNameEl.appendChild(p);
* append an HTML element to another

// addEventListener(eventType, cb)
* let button = document.getElementById("buttonIdName");
* button.addEventListener('click', event => {
    // do something
* })
* add a listener to an element

let calc = document.getElementById('calculator');
calc.addEventListener('click', event => {
  event.target.textContent
})

// window.onload = event => {
  // do stuff
}
*/
