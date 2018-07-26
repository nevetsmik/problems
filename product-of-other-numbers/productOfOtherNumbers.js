/*
For each index given an array of numbers, calculcate the product of all the
other numbers except the value in the current index.
*/

export const productOfOtherNumbers = array => {
  let result = [];
  let product = 1;
  // Iterate through the array from the left side
  for (let i = 0; i < array.length; i++) {
    // At every index, multiply the existing value (if applicable)
    // in the returning array
    result[i] = product;
    // Update the product to be the old product * the current value
    product *= array[i];
  }

  // Iterate through the array from the right side
  product = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    // At every index, multiple the existing value (if applicable)
    // in the returning array
    result[i] *= product;
    // Update the product to be the old product * the current value
    product *= array[i];
  }

  return result;
};

// naive solution
// export const productOfOtherNumbers = array => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     result[i] = 1;
//   }
//
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (i !== j) {
//         result[i] *= array[j];
//       }
//     }
//   }
//
//   return result;
// }
