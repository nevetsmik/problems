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

export const whichAppearsTwice = (array) => {
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
  let seriesSum = (maxNum * (maxNum + 1)) / 2;
  let arraySum = array.reduce((accum, num) => {
    return accum + num;
  });
  return arraySum - seriesSum;
};
