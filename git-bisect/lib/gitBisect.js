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

//
// Iterative
//
// export const gitBisect = array => {
//   let left = 0;
//   let right = array.length - 1;
//
//   while (left <= right) {
//     let midpoint = Math.floor((right - left + 1) / 2) + left;
//
//     if (array[midpoint] < 1) {
//       // search right
//       left = midpoint + 1;
//     } else if (array[midpoint] === 1) {
//       if (array[midpoint - 1] === 0) {
//         return midpoint;
//       } else {
//         // search left
//         right = midpoint - 1;
//       }
//     }
//   }
//
//   return null;
// };


//
// Recursive
//
// export const gitBisect = (array, left, right) => {
//   left = left || 0;
//   right = right || array.length - 1;
//
//   if (left > right) {
//     return null;
//   }
//
//   let midpoint = Math.floor((right - left + 1) / 2) + left;
//
//   if (array[midpoint] < 1) {
//     return gitBisect(array, midpoint + 1, right);
//   } else if (array[midpoint] === 1) {
//     if (array[midpoint - 1] === 0) {
//       return midpoint;
//     } else {
//       return gitBisect(array, left, midpoint - 1);
//     }
//   }
// };
