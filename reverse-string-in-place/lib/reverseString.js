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

export const reverseString = (string) => {
  // Convert string to array of charaters
  let chars = string.split('');
  // Length of the chars array
  let charsLength = chars.length;

  // Midpoint of the array, even or odd
  let midpoint = Math.floor(chars.length / 2);

  // Iterate through the half the array
  for (let i = 0; i < midpoint; i++) {
    // Swap the values in the array
    [chars[i], chars[charsLength - i - 1]] = [chars[charsLength - i - 1], chars[i]];
  }

  // Join char array before returning the reversed string
  return chars.join('');
};
