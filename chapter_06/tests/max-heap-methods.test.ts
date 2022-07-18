import {
  heapSort,
  buildMaxHeap,
  maxHeapify,
  getLeftChildIndex,
  getRightChildIndex,
} from "../max-heap-methods";

test("get left child index", () => {
  const arrayForExample = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];

  const indexWeCareAbout = 2; // value of 10.
  const expectedLeftChildIndex = 5; // value of 9.

  expect(getLeftChildIndex(indexWeCareAbout)).toEqual(expectedLeftChildIndex);
});

test("get right child index", () => {
  const arrayForExample = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];

  const indexWeCareAbout = 2; // value of 10.
  const expectedRightChildIndex = 6; // value of 3.

  expect(getRightChildIndex(indexWeCareAbout)).toEqual(expectedRightChildIndex);
});

test("max heapify", () => {
  const firstUnsortedPass = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];
  const expectedResult = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
  expect(maxHeapify(firstUnsortedPass, 1)).toEqual(expectedResult);
});

test("build max heap builds a max heap", () => {
  const unsortedArray = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
  const expectedResult = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];
  expect(buildMaxHeap(unsortedArray)).toEqual(expectedResult);
});

test("heap sort sorts the array", () => {
  const unsortedArray = [5, 2, 4, 3, 1];
  const expectedResult = [1, 2, 3, 4, 5];
  expect(heapSort(unsortedArray)).toEqual(expectedResult);
});
