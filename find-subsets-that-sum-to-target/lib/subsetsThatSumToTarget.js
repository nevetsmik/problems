/*
Given an array of numbers and a target number, find the subsets that equal the
target.

https://codefights.com/interview-practice/task/uJvihuafm7PRDPCsL
*/
//
// export const subsetsThatSumToTarget = (
//   nums,
//   target,
//   index = 0,
//   currentCombo = []
// ) => {
//   let result = [];
//
//   if (target === 0) {
//     result.push(currentCombo);
//     return result;
//   }
//
//   for (let i = index; i < nums.length; i++) {
//     let num = nums[i];
//     if (target - num >= 0 && !currentCombo.includes(num)) {
//       result = result.concat(
//         subsetsThatSumToTarget(nums, target - num, i, currentCombo.concat(num))
//       );
//     }
//   }
//
//   return result;
// };

export const subsetsThatSumToTarget = (
  nums,
  target,
  index = 0,
  currentSubset = [],
  finalHash = {},
  finalArray = []
) => {
  if (nums.length === 0) {
    return [[]];
  }

  if (target === 0) {
    if (!finalHash.hasOwnProperty([currentSubset.slice()])) {
      finalHash[currentSubset.slice()] = true;
      finalArray.push(currentSubset.slice());
      return;
    }
  }

  for (let i = index; i < nums.length; i++) {
    let num = nums[i];
    if (target - num >= 0) {
      currentSubset.push(num);
      subsetsThatSumToTarget(
        nums,
        target - num,
        i + 1,
        currentSubset,
        finalHash,
        finalArray
      );
      currentSubset.pop();
    }
  }

  return finalArray;
};
