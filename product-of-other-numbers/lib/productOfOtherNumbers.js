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

export const productOfOtherNumbers = (array) => {
  let result = [];
  let product = 1;
  // Iterate through the array from the left side
  for (let i = 0; i < array.length; i++) {
    // At every index, multiple the existing value (if applicable)
    // in the returning array
    result[i] = product;
    // Update the product to be the old product * the current value
    product *= array[i];
  }

  // Iterate through the array from the right side
  product = 1;
  for (let i = array.length - 1; i >=0 ; i--) {
    // At every index, multiple the existing value (if applicable)
    // in the returning array
    result[i] *= product;
    // Update the product to be the old product * the current value
    product *= array[i];
  }

  return result;
};
