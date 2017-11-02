/*
You need to climb a staircase that has n steps, and you decide to get some extra
exercise by jumping up the steps. You can cover at most k steps in a single jump.
Return all the possible sequences of jumps that you could take to climb the
staircase, sorted.

https://codefights.com/interview-practice/task/cAXEnPyzknC5zgd7x
*/

// Similar to fibonacci
// Returns number of combinations
// export const climbingStairs = (n) => {
//   if (n === 0) {
//     return 1;
//   }

//   if (n === 1) {
//     return 1;
//   }

//   if (n === 2) {
//     return 2;
//   }

//   return climbingStairs(n - 3) + climbingStairs(n - 2) + climbingStairs(n - 1);
// };

// Similar to fibonacci, memoized
// Returns number of combinations
// export const climbingStairs = (n, result = []) => {
//   if (n === 0) {
//     return 1;
//   }

//   if (n === 1) {
//     return 1;
//   }

//   if (n === 2) {
//     return 2;
//   }

//   if (result[n]) {
//     return result[n];
//   } else {
//     result[n] =
//       climbingStairs(n - 3) + climbingStairs(n - 2) + climbingStairs(n - 1);
//   }

//   return result[n];
// };

// Similar to RPS, make change, coin sum problems
// Returns number of combinations
// export const climbingStairs = (n, k) => {
//   if (n === 0) {
//     return 1;
//   }
//
//   let count = 0;
//   for (let i = 1; i <= k; i++) {
//     if (n - i >= 0) {
//       count += climbingStairs(n - i, k);
//     }
//   }
//
//   return count;
// };

// Similar to RPS, memoized
// Returns number of combinations
// export const climbingStairs = (n, k, memo = {}) => {
//   if (n === 0) {
//     return 1;
//   }

//   let count = 0;
//   for (let i = 1; i <= k; i++) {
//     if (n - i >= 0) {
//       if (!memo.hasOwnProperty(`${n} - ${i}`)) {
//         memo[`${n - i}`] = climbingStairs(n - i, k, memo);
//       }
//       count += memo[`${n - i}`];
//     }
//   }

//   return count;
// };

// Similar to RPS
// Returns actual combinations
export const climbingStairs = (n, k, currentCombo = []) => {
  let result = [];

  if (n === 0) {
    result.push(currentCombo);
    return result;
  }

  for (let i = 1; i <= k; i++) {
    if (n - i >= 0) {
      result = result.concat(climbingStairs(n - i, k, currentCombo.concat(i)));
    }
  }

  return result;
};

// climbingStairs(5, 3)
// climbingStairs(5);
