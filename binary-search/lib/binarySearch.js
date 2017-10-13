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

export const binarySearch = (array, target) => {
  // return binarySearchIter(array, target, 0, array.length - 1);
  return binarySearchRec(array, target);
};

const binarySearchIter = (array, target, start, end) => {
  while (start <= end) {
    let midpoint = Math.floor((end - start + 1) / 2) + start;

    if (target === array[midpoint]) {
      return midpoint;
    }

    if (target < array[midpoint]) {
      end = midpoint - 1;
    }

    if (target > array[midpoint]) {
      start = midpoint + 1;
    }
  }

  return null;
};

const binarySearchRec = (array, target) => {
  if (array.length < 1) {
    return null;
  }

  let midpoint = Math.floor(array.length / 2);

  if (target === array[midpoint]) {
    return midpoint;
  }

  if (target < array[midpoint]) {
    return binarySearchRec(array.slice(0, midpoint), target);
  }

  if (target > array[midpoint]) {
    let result = binarySearchRec(array.slice(midpoint + 1), target);
    if (result) {
      return result + midpoint + 1;
    } else {
      return null;
    }
  }
};
