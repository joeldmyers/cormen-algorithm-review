import { quickSort } from "../quick-sort";

test("quick sort", () => {
  const unsortedNums = [5, 2, 4, 6, 1, 3];

  expect(quickSort(unsortedNums)).toEqual([1, 2, 3, 4, 5, 6]);
});
