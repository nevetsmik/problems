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

export const findPairSums = (start, end, targetSum) => {
  let nums = {};
  let array = createArray(start, end);
  let pairs = [];

  for (let i = 0; i < array.length; i++) {
    nums[array[i]] = array[i];
  }

  for (let i = 0; i <= Math.floor(array.length / 2); i++) {
    pairs.push([array[i], nums[targetSum - array[i]]]);
  }

  return pairs;
};

// export const findPairSums = (start, end, targetSum) => {
//   let pairs = [];
//   let nums = createArray(start, end);
//
//   nums.forEach((num, idx) => {
//     if (idx < Math.floor((end - start) / 2) + 1) {
//       let bIdx = bSearch(nums, targetSum - num);
//       if (bIdx !== null) {
//         pairs.push([num, nums[bIdx]].sort());
//       }
//     }
//   });
//
//   return pairs;
// };

const createArray = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

export const bSearch = (array, target, start, end) => {
  start = start || 0;
  end = end || array.length - 1;

  while (start <= end) {
    let midpoint = Math.floor((end - start + 1) / 2) + start;

    if (array[midpoint] === target) {
      return midpoint;
    }

    if (target < array[midpoint]) {
      end = midpoint - 1;
    }

    if (target > array[midpoint]) {
      start = midpoint + 1;
    }
  }
  return null;
};

export const bSearchR = (array, target) => {
  if (array.length < 1) {
    return null;
  }

  let midpoint = Math.floor(array.length / 2);

  if (array[midpoint] === target) {
    return midpoint;
  }

  if (target < array[midpoint]) {
    return bSearchR(array.slice(0, midpoint), target);
  } else {
    let result = bSearchR(array.slice(midpoint + 1), target);
    return result !== null ? result + midpoint + 1 : null;
  }
};
