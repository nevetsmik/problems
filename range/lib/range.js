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

export const range = (start, end) => {
  let result = [];

  if (start >= end) {
    return [start];
  } else {
    result.push(start);
    result = result.concat(range(start + 1, end));
  }
  return result;
};
