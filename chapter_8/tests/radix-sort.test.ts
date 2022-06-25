import { getDigit, radixSort } from "../radix-sort";

test("get digit", () => {
  expect(getDigit(12345, 0)).toEqual(5);
  expect(getDigit(12345, 4)).toEqual(1);
  expect(getDigit(12345, 5)).toEqual(0);
});

test("radix sort", () => {
  const unsortedNums = [5, 2, 4, 6, 1, 3];

  expect(radixSort(unsortedNums)).toEqual([1, 2, 3, 4, 5, 6]);
});
