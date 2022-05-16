type MaxSubarrayResult = {
  low: number;
  high: number;
  sum: number;
};

/**
 * Input: price of a stock for each day
 * Output: you can buy one time and sell one time, and want to maximize profit.
 * You want to get the subarray that results in the max profit.
 *
 * Approach:
 * First, transform the problem a bit. We want to find a sequence of days over which
 * the net change from first day to last is max.
 *
 * So we transform it, so that we have a new array where the change on day i
 * is the difference between prices after day i - 1 and after day i.
 *
 * Then we divide it into two subarrays of as equal size as possible.
 * Then the max subarray must be either entirely in left subarray, entirely in right, or crossing the midpoint.
 */

export const findMaximumSubarray = (
  nums: number[],
  low: number,
  high: number
): MaxSubarrayResult => {
  // base case where array is of length 1:
  if (low === high) {
    return { low, high, sum: nums[low] };
  }

  let mid = Math.floor((low + high) / 2);

  const leftResult = findMaximumSubarray(nums, low, mid);
  const rightResult = findMaximumSubarray(nums, mid + 1, high);
  const crossingResult = findMaxCrossingSubarray(nums, low, mid, high);

  if (
    leftResult.sum >= rightResult.sum &&
    leftResult.sum >= crossingResult.totalMaxSum
  ) {
    return { low: leftResult.low, high: leftResult.high, sum: leftResult.sum };
  } else if (
    rightResult.sum >= leftResult.sum &&
    rightResult.sum >= crossingResult.totalMaxSum
  ) {
    return {
      low: rightResult.low,
      high: rightResult.high,
      sum: rightResult.sum,
    };
  } else {
    return {
      low: crossingResult.maxLeftIndex,
      high: crossingResult.maxRightIndex,
      sum: crossingResult.totalMaxSum,
    };
  }
};

type MaxCrossingSubArrayResult = {
  maxLeftIndex: number;
  maxRightIndex: number;
  totalMaxSum: number;
};

// this taks O (n) time.
const findMaxCrossingSubarray = (
  nums: number[],
  low: number,
  mid: number,
  high: number
): MaxCrossingSubArrayResult => {
  let leftSum = Number.NEGATIVE_INFINITY;
  let rightSum = Number.NEGATIVE_INFINITY;
  let sum = 0;
  let maxLeftIndex;

  for (let i = mid; i >= low; i--) {
    sum = sum + nums[i];
    if (sum > leftSum) {
      leftSum = sum;
      maxLeftIndex = i;
    }
  }

  sum = 0;
  let maxRightIndex;

  for (let j = mid + 1; j <= high; j++) {
    sum = sum + nums[j];
    if (sum > rightSum) {
      rightSum = sum;
      maxRightIndex = j;
    }
  }

  const totalMaxSum = leftSum + rightSum;
  return { maxLeftIndex, maxRightIndex, totalMaxSum };
};
