export const getLeftChildIndex = (i: number) => 2 * i + 1;

export const getRightChildIndex = (i: number) => 2 * i + 2;

export const getParentIndex = (i: number) => Math.floor(i / 2);

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
  console.log("in max heapify", heapLength);
  const leftChildIndex = getLeftChildIndex(i);
  const rightChildIndex = getRightChildIndex(i);

  let largest;
  let result;

  if (leftChildIndex < heapLength && array[leftChildIndex] > array[i]) {
    largest = leftChildIndex;
  } else {
    largest = i;
  }

  if (rightChildIndex < heapLength && array[rightChildIndex] > array[largest]) {
    largest = rightChildIndex;
  }

  if (largest !== i) {
    const temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;

    result = maxHeapify(array, largest, heapLength);

    return result;
  } else {
    return array;
  }
};

/**
 * All the elements in the subarray A[(n/2+1)] are all leaves of the tree, so each is a 1-element heap to begin with.
 * So we start at the middle and work back to the beginning.
 */

export const buildMaxHeap = (array: number[]) => {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    maxHeapify(array, i);
  }

  return array;
};

export const heapSort = (array: number[]): number[] => {
  let maxHeapArray = buildMaxHeap(array);
  let maxHeapLength = maxHeapArray.length;

  for (let i = maxHeapArray.length - 1; i >= 1; i--) {
    const temp = maxHeapArray[i];
    maxHeapArray[i] = maxHeapArray[0];
    maxHeapArray[0] = temp;

    maxHeapLength--;
    maxHeapify(maxHeapArray, 0, maxHeapLength);
  }

  return maxHeapArray;
};

export const getHeapMaximum = (array: number[]): number => array[0];

// for priority queue. O log n runtime.
export const extractHeapMaximum = (array: number[]): number => {
  if (array.length === 0) {
    throw new Error("heap underflow");
  }

  const max = array[0];
  array[0] = array[array.length - 1];
  const newHeapLength = array.length - 1;
  maxHeapify(array, 0, newHeapLength);
  return max;
};

export const heapIncreaseKey = (
  array: number[],
  i: number,
  key: number
): void => {
  if (key < array[i]) {
    throw new Error("New key is smaller than current key");
  }

  array[i] = key;

  // since we may be violating max heap rules, we need to put this item in its correct place.
  let parentIndex = getParentIndex(i);

  while (i > 0 && array[parentIndex] < array[i]) {
    const temp = array[i];
    array[i] = array[parentIndex];
    array[parentIndex] = temp;
    i = parentIndex;
  }
};

export const maxHeapInsert = (array: number[], key: number): void => {
  array.push(Number.NEGATIVE_INFINITY);
  heapIncreaseKey(array, array.length - 1, key);
};
