import { countingSort } from "../counting-sort";

test("counting sort", () => {
  const unsortedNums = [5, 2, 4, 6, 1, 3];

  expect(countingSort(unsortedNums, 6)).toEqual([1, 2, 3, 4, 5, 6]);
});
