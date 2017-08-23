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

export const maxDifference = array => {
  let maxDiff = -1;
  let maxValue = [array.length - 1];

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] < maxValue) {
      if (maxValue - array[i] > maxDiff) {
        maxDiff = maxValue - array[i];
      }
    }
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  return maxDiff;
};
