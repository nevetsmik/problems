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

export const stringCompressor = string => {
  let count = 1;
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      result += string[i];
      result += count;
      count = 1;
    } else {
      count += 1;
    }
  }
  return result;
};
