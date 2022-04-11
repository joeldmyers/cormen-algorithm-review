import { insertionSort } from "../insertion-sort";

test("insertion sort", () => {
  const unsortedNums = [5, 2, 4, 3, 1];

  expect(insertionSort(unsortedNums)).toEqual([1, 2, 3, 4, 5]);
});

test("insertion sort", () => {
  const unsortedNums = [5, 2, 4, 6, 1, 3];

  expect(insertionSort(unsortedNums)).toEqual([1, 2, 3, 4, 5, 6]);
});
