window.onload = event => {
  let number = '';
  let newNumber = '';
  let operator = '';
  let numbers = document.getElementById('numbers');
  let operators = document.getElementById('operators');
  let total = document.getElementById('total');
  numbers.addEventListener('click', (e) => {
    let clearButtons = ['C', 'AC'];
    let input = e.target.textContent;
    console.log(input);
    if (!clearButtons.includes(input)) {
      if (operator === '') {
        number += input;
        total.innerHTML = number;
      } else {
        newNumber += input;
        total.innerHTML = newNumber;
      }
    } else {
      // clear button was pressed
    }
  });

  operators.addEventListener('click', (e) => {
    operator = e.target.textContent;
    if (operator === '=') {
      total.innerHTML = parseInt(number) + parseInt(newNumber);
    }
  });
};
