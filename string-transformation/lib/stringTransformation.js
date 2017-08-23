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

export const shift = (char, numPlaces) => {
  let aCharCode = 'a'.charCodeAt(0);
  let zCharCode = 'z'.charCodeAt(0);
  let newLtrCharCode = ((char.charCodeAt(0) - aCharCode + numPlaces) % 26) + aCharCode;
  return String.fromCharCode(newLtrCharCode);
};

export const stringTransformation = (str) => {
  let result = [];
  // Counting object to count freq of letters
  let ltrCount = {};
  // Iterate through the array of letters
  str.split('').forEach((ltr) => {
    // Set count of characters
    // Get count of characters
    ltrCount[ltr] = ltrCount[ltr] || 0;
    // Get shifted letter
    let ltrAfterShift = shift(ltr, ltrCount[ltr]);
    // Add shifted letter to result
    result.push(ltrAfterShift);
    // Increment count of character
    ltrCount[ltr] += 1;
  });
  return result.join('');
};
