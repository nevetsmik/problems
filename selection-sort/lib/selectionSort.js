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

export const selectionSort = array => {
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let minIdx = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        minIdx = j;
      }
    }
    [array[i], array[minIdx]] = [array[minIdx], array[i]];
  }
  return array;
};
