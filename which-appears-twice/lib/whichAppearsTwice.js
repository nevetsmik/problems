/*
Write a function that returns the numbers that appear twice.
*/

export const whichAppearsTwice = array => {
  // // Use an object to count the number of occurrences of a number in an array
  // const numCount = {};
  // let numWhichAppearsTwice = null;
  //
  // array.forEach((num) => {
  //   numCount[num] = numCount[num] || 0;
  //   numCount[num] = numCount[num] + 1;
  // });
  //
  // // Find the key in the object with a value greater than 1
  // Object.keys(numCount).forEach((num) => {
  //   if (numCount[num] > 1) {
  //     numWhichAppearsTwice = num;
  //   }
  // });
  //
  // return numWhichAppearsTwice;
  let maxNum = Math.max(...array);
  let seriesSum = maxNum * (maxNum + 1) / 2;
  let arraySum = array.reduce((accum, num) => {
    return accum + num;
  });
  return arraySum - seriesSum;
};
