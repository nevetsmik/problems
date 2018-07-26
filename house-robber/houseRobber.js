/*
You are a professional robber planning to rob houses along a street. Each house has a certain
amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent
houses have security system connected and it will automatically contact the police if two adjacent
houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the
maximum amount of money you can rob tonight without alerting the police.

https://leetcode.com/problems/house-robber/description/
*/

export const houseRobber = houses => {
  let dp = [0, 0];
  for (let i = 0; i < houses.length; i++) {
    dp.push(0);
  }

  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i - 2]);
  }

  return dp[dp.length - 1];
};
