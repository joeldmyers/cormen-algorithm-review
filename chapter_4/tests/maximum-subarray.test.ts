import { findMaximumSubarray } from "../maximum-subarray";
import { maxSubarrayBruteForce } from "../maximum-subarray-brute-force";

it("finds the maximum subarray", () => {
  const priceChangeData = [
    13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7,
  ];

  const expectedResult = { low: 7, high: 10, sum: 43 };

  expect(
    findMaximumSubarray(priceChangeData, 0, priceChangeData.length - 1)
  ).toEqual(expectedResult);
});

it("finds the maximum subarray using brute force", () => {
  const priceChangeData = [
    13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7,
  ];

  const expectedResult = { low: 7, high: 10, sum: 43 };

  expect(maxSubarrayBruteForce(priceChangeData)).toEqual(expectedResult);
});
