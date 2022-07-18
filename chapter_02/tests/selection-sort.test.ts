import { selectionSort } from "../selection-sort";

test("Selection sort", () => {
  const unsortedNums = [5, 2, 4, 6, 1, 3];

  expect(selectionSort(unsortedNums)).toEqual([1, 2, 3, 4, 5, 6]);
});
