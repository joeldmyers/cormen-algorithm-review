import { mergeSort } from "../merge-sort";

test("merge sort", () => {
  const unsortedNums = [5, 2, 4, 6, 1, 3];

  expect(mergeSort(unsortedNums)).toEqual([1, 2, 3, 4, 5, 6]);
});
