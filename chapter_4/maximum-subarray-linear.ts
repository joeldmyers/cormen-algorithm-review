import { MaxSubarrayResult } from "./maximum-subarray";

export const findMaxSubarrayLinear = (nums: number[]): MaxSubarrayResult => {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;
  let leftPointer = 0,
    rightPointer;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      leftPointer = i;
    } else {
      currentSum = currentSum + nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      rightPointer = i;
    }
  }

  return { low: leftPointer, high: rightPointer, sum: maxSum };
};
