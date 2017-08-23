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

export const permutations = (string) => {
  if (string.length <= 1) {
    return [string];
  }

  let allCharsExceptLast = string.slice(0, -1);
  let lastChar = string[string.length - 1];

  let permutationsOfAllCharsExceptLast = permutations(allCharsExceptLast);

  let perms = [];

  permutationsOfAllCharsExceptLast.forEach(function(permutationOfAllCharsExceptLast) {
      for (let position = 0; position <= allCharsExceptLast.length; position++) {
          let permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
          perms.push(permutation);
      }
  });
  return perms;
};

export const allAnagrams = function(string) {
  // Your code here.

  var uniqueOutput = {};

  (function anagram (ana, str) {
    if (str === '') { uniqueOutput[ana] = 1; }

    for (var i = 0; i < str.length; i++) {
      anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  })('', string);

  return Object.keys(uniqueOutput);
};
