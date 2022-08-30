import { greedyActivitySelector } from "./activity-selection";

test("greedy activity selector", () => {
  const startTimes = [1, 3, 0, 5, 3, 5, 6, 8, 8, 2, 12];
  const endTimes = [4, 5, 6, 7, 9, 9, 10, 11, 12, 14, 16];

  /**
   * Note: these are zero-indexed here; in Cormen they're 1-indexed.
   */
  expect(greedyActivitySelector(startTimes, endTimes)).toEqual([0, 3, 7, 10]);
});
