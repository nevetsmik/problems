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
//
// export const fn1 = function(){};
// export const fn2 = function(){};
// **********/
//
// export const localMin = (array) => {
//   let left = 0;
//   let right = array.length - 1;
//
//   while (left <= right) {
//     let midpoint = Math.floor((right - left + 1) / 2) + left;
//
//     if ((midpoint === 0 && array[midpoint] < array[midpoint + 1]) ||
//         (midpoint === array.length - 1 && array[midpoint] < array[midpoint - 1]) ||
//         (array[midpoint] < array[midpoint - 1] && array[midpoint] < array[midpoint + 1])
//     ) {
//       return midpoint;
//     }
//
//     if (array[midpoint] > array[midpoint + 1]) {
//       // search right
//       left = midpoint + 1;
//     } else if (array[midpoint] > array[midpoint - 1]) {
//       // search left
//       right = midpoint - 1;
//     }
//   }
//   return null;
// };

export const localMin = (array, left, right) => {
  left = left === undefined ? 0 : left;
  right = right === undefined ? array.length - 1 : right;

  let midpoint = Math.floor((right - left + 1) / 2) + left;

  if (midpoint === left && array[midpoint] < array[midpoint + 1] ||
    midpoint === right && array[midpoint] < array[midpoint - 1] ||
    array[midpoint] < array[midpoint + 1] && array[midpoint] < array[midpoint - 1]) {
    return midpoint;
  }

  if (array[midpoint] > array[midpoint - 1]) {
    return localMin(array, left, midpoint - 1);
  }

  if (array[midpoint] > array[midpoint + 1]) {
    return localMin(array, midpoint + 1, right);
  }
};
