import { findMaximumSubarray } from "../maximum-subarray";

it("finds the maximum subarray", () => {
  const priceChangeData = [
    13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7,
  ];

  const expectedResult = { low: 7, high: 10, sum: 43 };

  expect(
    findMaximumSubarray(priceChangeData, 0, priceChangeData.length - 1)
  ).toEqual(expectedResult);
});
