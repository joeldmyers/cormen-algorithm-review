export const partitionArray = (
  array: number[],
  p: number,
  r: number
): number => {
  // this pivots around a number. It returns the index of a pivot.
  // it is pivoting around the last element

  const pivot = array[r]; // this is called X in the textbook.

  // this is the tracker to determine where to swap at the end.
  // we start by moving everything less than pivot to the right of pivot.
  // then at the end we swap the pivot with the last item less than.
  // so we know everything less than that is on the left side then.
  let i = p - 1;

  for (let j = p; j < r; j++) {
    if (array[j] <= pivot) {
      i++;
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const temp = array[i + 1];
  array[i + 1] = array[r];
  array[r] = temp;
  return i + 1;
};

export const quickSort = (
  array: number[],
  p: number = 0,
  r: number = array.length - 1
): number[] => {
  if (p < r) {
    const q = partitionArray(array, p, r);
    array = quickSort(array, p, q - 1);
    array = quickSort(array, q + 1, r);
  }

  return array;
};
