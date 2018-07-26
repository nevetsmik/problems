/*
Find a local minimum in an array of numbers. A local min is where a value in an
array is between greater values on both sides.
*/

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

  if (
    (midpoint === left && array[midpoint] < array[midpoint + 1]) ||
    (midpoint === right && array[midpoint] < array[midpoint - 1]) ||
    (array[midpoint] < array[midpoint + 1] &&
      array[midpoint] < array[midpoint - 1])
  ) {
    return midpoint;
  }

  if (array[midpoint] > array[midpoint - 1]) {
    return localMin(array, left, midpoint - 1);
  }

  if (array[midpoint] > array[midpoint + 1]) {
    return localMin(array, midpoint + 1, right);
  }
};
