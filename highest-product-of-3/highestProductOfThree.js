/*
Find the highest product of three numbers from an array of unsorted numbers.
*/

export const highestProductOfThree = array => {
  if (array.length < 3) {
    return null;
  }

  let highest3 = array[0] * array[1] * array[2];
  let highest2 = array[0] * array[1];
  let highest = array[0];
  let lowest = array[1];

  for (let i = 2; i < array.length; i++) {
    let current = array[i];
    let current3 = highest2 * current;

    if (current3 > highest3) {
      highest3 = current3;
    }

    let current2 = Math.max(highest * current, lowest * current);

    if (current2 > highest2) {
      highest2 = current2;
    }

    if (current > highest) {
      highest = current;
    }

    if (current < lowest) {
      lowest = current;
    }
  }

  return highest3;
};

//
// O(n log n)
//
// export const highestProductOfThree = (array) => {
//   // [ 2, 3, 5, 6, 8, 9]
//   // [ -99, -44, 5, 6, 8, 9]
//
//   let sortedArray = sortArray(array);
//
//   const secondToLast = sortedArray.length - 2;
//   const thirdToLast = sortedArray.length - 3;
//
//   return (sortedArray.slice(-1) * Math.max(sortedArray[0] * sortedArray[1], sortedArray[secondToLast] * sortedArray[thirdToLast]));
// };
//
// const sortArray = (array) => {
//   let copy = array.slice();
//   return copy.sort((a, b) => {
//     return a - b;
//   });
// };

//
// O(2^n + n + n * n) - brute force
//
// export const highestProductOfThree = array => {
//   const subsetsOfThree = subsets(array).filter((subsets) => {
//     return subsets.length === 3;
//   });
//
//   let hightestProduct = 1;
//   subsetsOfThree.forEach((subset) => {
//     const product = subset.reduce((accum, curr) => {
//       return accum * curr;
//     }, 1);
//     hightestProduct = Math.max(hightestProduct, product);
//   });
//   return hightestProduct;
// };
//
// export const subsets = (array) => {
//   // [1, 2, 3] = [], [1], [2], [3], [1, 3], [1, 2], [2, 3], [1, 2, 3]
//   // [1, 2] => [], [1], [2], [1, 2]
//   // [1, 2] + [3] => [3], [1, 3], [2, 3], [1, 2, 3]
//
//   if (array.length === 0) { return [[]]; }
//
//   let last = array[array.length - 1];
//   let withoutLast = subsets(array.slice(0, -1));
//
//   let withLast = withoutLast.map((sub) => {
//     return sub.concat([last]  );
//   });
//
//   return withoutLast.concat(withLast);
// };
