const getLeftChildIndex = (i: number) => 2 * i;

const getRightChildIndex = (i: number) => 2 * i + 1;

/**
 * This runs in O log n time (also O of h) and is the key to maintaining the max heap property.
 * This lets the value at array[i] "float down" if it's less than its children, to
 * make sure that it obeys the rules of max heap.
 * p. 154.
 */
export const maxHeapify = (
  array: number[],
  i: number,
  heapLength: number = array.length
) => {
  const leftChildIndex = getLeftChildIndex(i);
  const rightChildIndex = getRightChildIndex(i);

  let largest;

  if (leftChildIndex <= heapLength && array[leftChildIndex] > array[i]) {
    largest = leftChildIndex;
  } else {
    largest = i;
  }

  if (rightChildIndex <= heapLength && array[rightChildIndex] > array[i]) {
    largest = rightChildIndex;
  }

  if (largest !== i) {
    // exchange array[i] with array[largest].
    const temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;

    maxHeapify(array, largest);
  }
};

/**
 * All the elements in the subarray A[(n/2+1)] are all leaves of the tree, so each is a 1-element heap to begin with.
 * So we start at the middle and work back to the beginning.
 */

export const buildMaxHeap = (array: number[]) => {
  for (let i = array.length / 2; i >= 0; i--) {
    maxHeapify(array, i);
  }

  return array;
};

export const heapSort = (array: number[]): number[] => {
  const maxHeapArray = buildMaxHeap(array);
  let maxHeapLength = maxHeapArray.length;

  for (let i = maxHeapArray.length; i >= 1; i--) {
    maxHeapify(maxHeapArray, 1, maxHeapLength--);
  }

  return maxHeapArray;
};
