/*********
Export an object that contains multiple functions

const scratch = {
  fn1: function(){},
  fn2: function(){}
};

export { scratch };
**********/


/*********
Export multiple functions all at once

const fn1 = function(){};
const fn2 = function(){};

export { fn1, fn2 };
**********/


/*********
Export functions as you write them

export const fn1 = function(){};
export const fn2 = function(){};
**********/

export const coinSum = (amountLeft, denominations) => {
  if (amountLeft === 0) { return 1; }
  let result = 0;

  // Iterate through the denominations
  for (let i = 0; i < denominations.length; i++) {
    if (amountLeft < denominations[i]) { continue; }
    // Subtract current coin from amount left
    let remainder = amountLeft - denominations[i];
    result += coinSum(remainder, denominations.slice(i));
    // Recurse as long as result is greater than 0
    // If difference is not greater than 0, then...
      // Continue, i.e., move on to next coin
  }

  return result;
};

// coinSum(52, [25, 10, 5, 1])
// coinSum(27, [25, 10, 5, 1])
// coinSum(2, [25, 10, 5, 1])
  // coinSum(2, [x25, 10, 5, 1])
  // coinSum(2, [x25, x10, 5, 1])
  // coinSum(2, [x25, x10, x5, 1])
    // coinSum(1, [x25, x10, x5, 1])
    // coinSum(0, [x25, x10, x5, 1])
