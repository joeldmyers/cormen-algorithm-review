export const binarySearch = (nums: number[], target: number): number => {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    const midPoint = Math.floor((rightPointer + leftPointer) / 2);
    if (nums[midPoint] === target) {
      return midPoint;
    }

    if (nums[midPoint] < target) {
      leftPointer = midPoint + 1;
    }

    if (nums[midPoint] > target) {
      rightPointer = midPoint - 1;
    }
  }

  return -1;
};
