/*
You need to climb a staircase that has n steps, and you decide to get some extra
exercise by jumping up the steps. You can cover at most k steps in a single jump.
Return all the possible sequences of jumps that you could take to climb the
staircase, sorted.

https://codefights.com/interview-practice/task/cAXEnPyzknC5zgd7x
*/

export const climbingStairs = (n, k) => {
  let result = [];
  climbingStairsR(n, k, [], result);
  return result;
};

export const climbingStairsR = (n, k, str, result) => {
  if (n === 0) {
    result.push(str);
  } else {
    for (let i = 1; i <= k; i++) {
      if (n - i >= 0) {
        climbingStairsR(n - i, k, str.concat(i), result);
      }
    }
  }
};
