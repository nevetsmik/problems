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

// [5, 6, 0, 1, 2, 3, 4]
// [5, 6, 0]
// [1, 2, 3, 4, 5, 6, 0]
//             [5, 6, 0]
// [3, 4, 5, 6, 0, 1, 2]
//             [0, 1, 2]
// [2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
//                   [8, 9, 0, 1]
//  

export const findRotationPoint = (array) => {
  if (array[0] === Math.min(...array)) {
    return 0;
  }

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let midpoint = Math.floor((right - left + 1)/ 2) + left;

    // If left < mid, then the left side of the array is sorted and rotation point is on the right
    if (array[left] < array[midpoint]) {
      // return search right
      left = midpoint + 1;
    } else {
      // return search left
      right = midpoint - 1;
    }

    if (array[midpoint] < array[midpoint + 1] && array[midpoint] < array[midpoint - 1]) {
      return midpoint;
    }
  }
  return right;
};
