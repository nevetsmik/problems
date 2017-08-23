let queue = [];
let operand1 = null;
let operand2 = null;
let operation = null;
let display = '';

let operations = ['+', '-', '*', '/', '='];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

window.onload = evt => {
  let calc = document.getElementById('calculator');
  calc.addEventListener('click', (event) => {
    let input = event.target.textContent;
    if (numbers.includes(input)) {
      queue.push(input);
      displayToScreen(queue.join(''));
    } else if (operations.includes(input)) {
      if (operand1 === null) {
        operand1 = queue.join('');
        operation = input;
      } else {
        operand2 = queue.join('');
        operand1 = doOperations(operand1, operand2, operation);
        operation = input;
      }
      queue = [];
      displayToScreen(operand1);
    }
  });
};

function displayToScreen(str) {
  // Clear what is there
  // Display what is in display
  let displayEl = document.getElementById('display');
  displayEl.innerHTML = str;
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function doOperations(x, y, operator) {
  if (operator === '+') {
    return add(x, y);
  }

  if (operator === '-') {
    return subtract(x, y);
  }

  if (operator === '*') {
    return subtract(x, y);
  }

  if (operator === '/') {
    return subtract(x, y);
  }
  operation = null;
}
