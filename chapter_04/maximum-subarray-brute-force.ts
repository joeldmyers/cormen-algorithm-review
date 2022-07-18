import { MaxSubarrayResult } from "./maximum-subarray";

export const findMaxSubarrayBruteForce = (
  nums: number[]
): MaxSubarrayResult => {
  let maxSum = Number.NEGATIVE_INFINITY;
  let winningLeftIndex, winningRightIndex;

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];

      if (sum > maxSum) {
        maxSum = sum;
        winningLeftIndex = i;
        winningRightIndex = j;
      }
    }
  }

  return { low: winningLeftIndex, high: winningRightIndex, sum: maxSum };
};
