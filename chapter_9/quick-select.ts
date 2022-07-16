const findKthLargestElement = (nums: number[], k: number): number => {
  const swap = (i: number, j: number) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  };

  const partitionHelper = (randomIndex: number, start: number, end: number) => {
    let pivotTracker = start;
    let pivotValue = nums[pivotTracker];

    for (let i = start + 1; i < end; i++) {
      if (nums[i] < pivotValue) {
        pivotTracker++;
        swap(i, pivotTracker);
      }
    }

    swap(start, pivotTracker);
    return pivotTracker;
  };

  // main algorithm

  const finalIndex = nums.length - k;
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    // random pivot
    const randomPivot = Math.floor(Math.random() * (end - start + 1) + start);

    const pivotIndex = partitionHelper(randomPivot, start, end);

    // if we landed on the right one, return it.
    if (pivotIndex === finalIndex) return nums[finalIndex];

    if (pivotIndex < finalIndex) {
      // just look on the right half.
      start = pivotIndex + 1;
    } else {
      end = pivotIndex - 1;
    }
  }

  return -1;
};
