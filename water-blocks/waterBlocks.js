/*
Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it is able to trap after raining.

Example: waterBlocks([5, 3, 4, 3, 2, 4]) === 4

[5, 3, 4, 3, 2, 4] // 4
*
* *  *
**** *
******
******

[1, 3, 5, 3, 4, 3, 2, 4] // 4
  *
  * *  *
 ***** *
 *******
********

waterBlocks([2, 0, 2]) === 2;
waterBlocks([3, 0, 0, 2, 0, 4]) === 10;
waterBlocks([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) === 6;

*/

export const waterBlocks = array => {
  let start = 0;
  let end = array.length - 1;
  let maxLeft = array[0];
  let maxRight = array[array.length - 1];
  let count = 0;

  while (start < end) {
    // If I know that there is a greater height somewhere on my right, then I capture water between
    // the maximum on my left and my start position
    if (maxLeft < maxRight) {
      start++;
      if (array[start] < maxLeft) {
        count += maxLeft - array[start];
      }
      maxLeft = Math.max(maxLeft, array[start]);
    } else {
      // There is a greater height somewhere on my left, so then I can capture water between the
      // maximum on my right and my end position
      end--;
      if (array[end] < maxRight) {
        count += maxRight - array[end];
      }
      maxRight = Math.max(maxRight, array[end]);
    }
  }
  return count;
};
