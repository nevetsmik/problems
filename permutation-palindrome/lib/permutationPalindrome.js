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

export const permutationPalindrome = (string) => {
  // Count number of letters in the string
  let stringLength = string.length;

  // Count the occurrence of each letter using an object
  let letterCount = countLetterOccurrence(string);

  // Only have at most 1 odd value
  return allEvenValuesExceptOne(letterCount);
};

export const countLetterOccurrence = (string) => {
  let letterCount = {};
  string.split('').forEach((ltr) => {
    letterCount[ltr] = letterCount[ltr] || 0;
    letterCount[ltr]++;
  });
  return letterCount;
};

export const allEvenValuesExceptOne = (obj) => {
  let oddCount = 0;
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount < 2;
};
