/*
Given an array of 0s followed by a series of 1s. Find the position of the first 1.

Example: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1] should equal 4.
*/

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
