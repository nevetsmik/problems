/*
Find the first duplicate in an array.

O(n) time complexity and O(1) additional space complexity

Given an array a that contains only numbers in the range from 1 to a.length,
find the first duplicate number for which the second occurrence has the minimal
index. In other words, if there are more than 1 duplicated numbers, return
the number for which the second occurrence has a smaller index than the
second occurrence of the other number does. If there are no such elements,
return -1.

For a = [2, 3, 3, 1, 5, 2], the output should be firstDuplicate(a) = 3.
There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has
a smaller index than than second occurrence of 2 does, so the answer is 3.
*/

export const firstDuplicate = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[Math.abs(array[i]) - 1] < 0) {
      // console.log('array: ', array);
      return Math.abs(array[i]);
    }
    array[Math.abs(array[i]) - 1] *= -1;
  }
  return -1;
};

// export const firstDuplicate = (array) => {
//   let countingObj = {};
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     countingObj[array[i]] = countingObj[array[i]] || 0;
//     countingObj[array[i]] += 1;
//     if (countingObj[array[i]] > 1) {
//       result[array[i]] = i;
//     }
//   }
//
//   let min;
//   let minIndexOfSecondOccurence;
//   for (let i = 0; i < result.length; i++) {
//     if (min === undefined || result[i] < min) {
//       min = result[i];
//       minIndexOfSecondOccurence = i;
//     }
//   }
//
//   return minIndexOfSecondOccurence;
// };
