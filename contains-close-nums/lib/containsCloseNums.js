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

// https://codefights.com/interview-practice/task/njfXsvjRthFKmMwLC

export const containsCloseNums = (nums, k) => {
  let duplicates = {};
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    duplicates[value] = duplicates[value] || [];
    duplicates[value].push(i);
    if (duplicates[value].length > 1) {
      for (let j = 0; j < duplicates[value].length - 1; j++) {
        if (Math.abs(i - duplicates[value][j]) <= k) {
          return true;
        }
      }
    }
  }
  return false;
};
