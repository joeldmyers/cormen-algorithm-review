// Note, I renamed the variables because in the textbook they are named quite poorly.
// I erred on the side of being verbose but clear.
// I also am starting at the beginning here rather than at the end like in the textbook.

/**
 * The steps this partition helper follows:
 *
 * 1. It sets the value we are using as a pivot to be the starting index.
 * 2. (trivial note) it defines a swap method that swaps two values in an array.
 * 3. It creates a tracker index to keep track of how many items have been moved to the right
 * but in fact should be to the left of the pivot at the end.
 * 3. It iterates over all items to the right of the pivot. If they're less than the pivot,
 * it temporarily stacks them up just to the right of the pivot, and increments the tracker to know
 * where this stack ends.
 * 4. At the end, it swaps the pivot value with the last value that was less than the pivot.
 *
 * We now know that the pivot value is in its correct place; everything to the left is less, everything to the right
 * is greater.
 *
 * We can then use this recursively on the left and right sides to finish sorting.
 *
 */
export const partitionArray = (
  array: number[],
  startIndex: number,
  endIndex: number
): number => {
  const pivotValue = array[startIndex];
  let swapIndex = startIndex;

  const swap = (a: number, b: number) => {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  };

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (array[i] < pivotValue) {
      swapIndex++;
      swap(i, swapIndex);
    }
  }

  swap(startIndex, swapIndex);

  return swapIndex;
};

export const quickSort = (
  array: number[],
  startIndex: number = 0,
  endIndex: number = array.length - 1
): number[] => {
  if (startIndex < endIndex) {
    const pivotIndex = partitionArray(array, startIndex, endIndex);
    array = quickSort(array, startIndex, pivotIndex - 1);
    array = quickSort(array, pivotIndex + 1, endIndex);
  }

  return array;
};
