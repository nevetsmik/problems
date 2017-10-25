/*
Write a function to find the first duplicate value in an array.
*/

//
// O(n) time and O(n) space
//
// export const findDuplicateOptimizeForSpace = (array) => {
//   // Create duplicateArray
//   let duplicateArray = [];
//   // Iterate through the input array
//   array.forEach((el, idx) => {
//     // Store the occurrence of the value at the index
//     duplicateArray[el] = duplicateArray[el] || 0;
//     duplicateArray[el] = duplicateArray[el] + 1;
//     // If the value at the index is greater than 1, then...
//       if (duplicateArray[el] > 1) { return idx; }// Return index
//   });
//   return null;
// };

// O(n) time and O(1) space
export const findDuplicateOptimizeForSpaceBeastMode = array => {
  for (let i = 0; i < array.length; i++) {
    // Strategy:
    // Use the array position as a placeholder for counting the occurrence of values in the array
    // Iterate through the array and negate the value in the index that represents the placeholder for counting the occurrence
    // For example, [2, 3, 3, 1, 5, 2] after it's first iteration will look like:
    // [2, 3, -3, 1, 5, 2], the second will look like
    // [2, 3, -3, -1, 5, 2], the third will return 3
    if (array[Math.abs(array[i])] < 0) {
      return Math.abs(array[i]);
    }
    array[Math.abs(array[i])] *= -1;
  }

  return null;
};
