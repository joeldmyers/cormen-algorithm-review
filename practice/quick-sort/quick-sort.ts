const pivotHelper = (array: number[], start: number, end: number): number => {
  const swap = (index1: number, index2: number): void => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  };

  let pivotTracker = start;

  for (let i = start + 1; i <= end; i++) {
    if (array[i] < array[start]) {
      pivotTracker++;
      swap(pivotTracker, i);
    }
  }
  swap(start, pivotTracker);
  return pivotTracker;
};

export const quickSort = (
  array: number[],
  start = 0,
  end = array.length - 1
): number[] => {
  if (start < end) {
    const pivotLocation = pivotHelper(array, start, end);
    array = quickSort(array, start, pivotLocation - 1);
    array = quickSort(array, pivotLocation + 1, end);
  }
  return array;
};
