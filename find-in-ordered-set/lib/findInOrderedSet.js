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

export const findInOrderedSetRecursive = (array, target) => {
  let midpoint = Math.floor(array.length / 2);

  if (array[midpoint] === target) { return midpoint; }

  if (target < array[midpoint]) {
    return findInOrderedSetRecursive(array.slice(0, midpoint), target);
  }

  if (target > array[midpoint]) {
    let result = findInOrderedSetRecursive(array.slice(midpoint + 1), target);
    if (result !== null) {
      return result + midpoint + 1;
    } else {
      return null;
    }
  }
};

export const findInOrderedSetIterative = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let midpoint = Math.floor((right - left + 1) / 2) + left;

    if (target === array[midpoint]) { return midpoint; }

    if (target < array[midpoint]) {
      right = midpoint - 1;
    } else {
      left = midpoint + 1;
    }
  }

  // if (target === array[left]) { return left; }

  return null;
};
