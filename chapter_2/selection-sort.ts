/**
 * Selection sort looks for the lowest number and adds that to the left, then it goes one over and repeates
 * until it's done.
 */
export const selectionSort = (nums: number[]): number[] => {
  for (let i = 0; i < nums.length; i++) {
    let minNum = nums[i];
    let minNumIndex = i;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < minNum) {
        minNum = nums[j];
        minNumIndex = j;
      }
    }

    if (i !== minNumIndex) {
      // swap
      const temp = nums[i];
      nums[i] = nums[minNumIndex];
      nums[minNumIndex] = temp;
    }
  }

  return nums;
};
