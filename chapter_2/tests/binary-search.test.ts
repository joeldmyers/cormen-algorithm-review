import { binarySearch } from "../binary-search";

describe("binary search", () => {
  it("gets the right index when a number exists in a sorted array", () => {
    const array = [1, 3, 5, 9, 15, 22, 25, 27, 29, 53, 55, 59, 62];

    const target = 59;

    expect(binarySearch(array, target)).toEqual(11);
  });

  it("return -1 when a number isn't found", () => {
    const array = [1, 3, 5, 9, 15, 22, 25, 27, 29, 53, 55, 59, 62];

    const target = 500;

    expect(binarySearch(array, target)).toEqual(-1);
  });
});
