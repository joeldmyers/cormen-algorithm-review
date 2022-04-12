import {
  insertionSort,
  insertionSortDecreasing,
  linearSearch,
} from "../insertion-sort";

test("insertion sort", () => {
  const unsortedNums = [5, 2, 4, 3, 1];

  expect(insertionSort(unsortedNums)).toEqual([1, 2, 3, 4, 5]);
});

test("insertion sort", () => {
  const unsortedNums = [5, 2, 4, 6, 1, 3];

  expect(insertionSort(unsortedNums)).toEqual([1, 2, 3, 4, 5, 6]);
});

test("insertion sort decreasing order", () => {
  const unsortedNums = [5, 2, 4, 3, 1];

  expect(insertionSortDecreasing(unsortedNums)).toEqual([5, 4, 3, 2, 1]);
});

test("linear search", () => {
  const arrayToSearch = [6, 3, 9, 12, 15, 21];
  const target = 21;

  expect(linearSearch(arrayToSearch, target)).toEqual(5);
});
