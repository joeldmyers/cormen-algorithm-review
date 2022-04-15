export const mergeSort = (nums: number[]): number[] => {
  // base case
  if (nums.length === 1) {
    return nums;
  }

  // divide & conquer
  const [unsortedLeftNums, unsortedRightNums] = splitArrayInTwo(nums);

  const sortedLeftNums = mergeSort(unsortedLeftNums);

  const sortedRightNums = mergeSort(unsortedRightNums);

  // merge

  return mergeSortedArrays(sortedLeftNums, sortedRightNums);
};

const splitArrayInTwo = (arr: number[]): [number[], number[]] => {
  const midIndex = Math.floor(arr.length / 2);

  const leftSide = arr.slice(0, midIndex);

  const rightSide = arr.slice(midIndex, arr.length);

  return [leftSide, rightSide];
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
