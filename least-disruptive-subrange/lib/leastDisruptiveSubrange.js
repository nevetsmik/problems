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

//                0  1  2  3  4
// original =    [1, 2, 3, 4, 5]
// replacement = [3, 5, 3]
// stop iteration at <= length - replacement.length

export const leastDisruptiveSubrange = (original, replacement) => {
  let sumDifference = 0;
  let minSumDifference = null;
  let minSumDifferenceIndex = null;


  // Iterate through the original array stopping at replacement.length
  for (let i = 0; i <= original.length - replacement.length; i++) {
    // Iterate from the current index for the length of the replacement array
    for (let j = 0; j < replacement.length; j++) {
      // Sum the differences between the replacement value and original value
      sumDifference += Math.abs(replacement[j] - original[i + j]);
    }
    // If the difference summation is less than the existing difference summation
    if (minSumDifference === null || sumDifference < minSumDifference) {
      // then swap
      minSumDifference = sumDifference;
      // update position of beginning index
      minSumDifferenceIndex = i;
    }
    sumDifference = 0;
  }
  // return beginning index
  return minSumDifferenceIndex;
};
