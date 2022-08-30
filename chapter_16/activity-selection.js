/**
 * The problem here is say we have a set of n proposed activities that want to use a resource,
 * e.g., a lecture hall, which can only serve one activity at a time. Each activity
 * has a start time and an end time.
 * start and end times are compatible if they do not overlap.
 *
 * We want to select a maximum-size subset of mutually compatible activities.
 */
/**
 *
 * @param {number[]} startTimes
 * @param {number[]} finishTimes
 */
export const greedyActivitySelector = (startTimes, finishTimes) => {
  // start with the first one, since we have stated in the problem
  // that it's sorted by the event that finishes first.
  const result = [0];
  let indexOfMostRecentAdditionToA = 0;

  for (let i = 1; i < startTimes.length; i++) {
    if (startTimes[i] >= finishTimes[indexOfMostRecentAdditionToA]) {
      result.push(i);
      indexOfMostRecentAdditionToA = i;
    }
  }
  return result;
};
