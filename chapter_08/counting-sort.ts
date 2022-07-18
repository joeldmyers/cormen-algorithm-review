/**
 * Counting sort assumes each of n inputs is integer in the range 0 to maxNumInArray, for some integer maxNumInArray.
 * It determines, for each input element x, the number of elements less than x.
 */

export const countingSort = (arrayToSort: number[], maxNumInArray: number) => {
  let sortedOutput = [];
  let tempCounterStorage = [];
  for (let i = 0; i <= maxNumInArray; i++) {
    tempCounterStorage[i] = 0;
  }

  for (let j = 0; j < arrayToSort.length; j++) {
    tempCounterStorage[arrayToSort[j]] = tempCounterStorage[arrayToSort[j]] + 1;
    sortedOutput[j] = 0;
  }

  for (let i = 0; i <= maxNumInArray; i++) {
    tempCounterStorage[i] =
      tempCounterStorage[i] + (tempCounterStorage[i - 1] || 0);
  }
  // tempCounterStorage[i] now contains number of elements less than or equal to i

  for (let j = arrayToSort.length - 1; j >= 0; j--) {
    sortedOutput[tempCounterStorage[arrayToSort[j]] - 1] = arrayToSort[j];
    tempCounterStorage[arrayToSort[j]] = tempCounterStorage[arrayToSort[j]] - 1;
  }

  return sortedOutput;
};
