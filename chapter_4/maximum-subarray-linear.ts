import { MaxSubarrayResult } from "./maximum-subarray";

// note, this is also known as Kadane's algorithm
export const findMaxSubarrayLinear = (nums: number[]): MaxSubarrayResult => {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;
  let leftPointer = 0,
    rightPointer;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      // start over at current spot because this single item is now
      // the largest subarray so far.
      currentSum = nums[i];
      leftPointer = i;
    } else {
      currentSum = currentSum + nums[i];
    }

    if (currentSum > maxSum) {
      // this is now the max
      maxSum = currentSum;
      rightPointer = i;
    }
  }

  return { low: leftPointer, high: rightPointer, sum: maxSum };
};
