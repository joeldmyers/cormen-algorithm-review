export const mergeSort = (nums: number[]): number[] => {
  // base case
  if (nums.length === 1) {
    return nums;
  }

  // divide & conquer
  const midIndex = Math.floor(nums.length / 2);

  const leftNums = mergeSort(nums.slice(0, midIndex));

  const rightNums = mergeSort(nums.slice(midIndex, nums.length));

  // merge

  return mergeSortedArrays(leftNums, rightNums);
};

const mergeSortedArrays = (
  sortedArray1: number[],
  sortedArray2: number[]
): number[] => {
  let newlySortedArray = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < sortedArray1.length || pointer2 < sortedArray2.length) {
    const currentItem1 = sortedArray1[pointer1];
    const currentItem2 = sortedArray2[pointer2];
    if (!currentItem1) {
      newlySortedArray.push(currentItem2);
      pointer2++;
    }

    if (!currentItem2) {
      newlySortedArray.push(currentItem1);
      pointer1++;
    }

    if (sortedArray1[pointer1] <= sortedArray2[pointer2]) {
      newlySortedArray.push(sortedArray1[pointer1]);
      pointer1++;
    }

    if (sortedArray2[pointer2] < sortedArray1[pointer1]) {
      newlySortedArray.push(sortedArray2[pointer2]);
      pointer2++;
    }
  }
  return newlySortedArray;
};
