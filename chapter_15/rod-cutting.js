/**
 * takes in a rod of n inches and a table of prices.
 *
 * Minor note: the textbook starts with j and then uses i; I found this confusing, as it goes against
 * conventions I'm used to, so I reversed it.
 */

const getMaxOfRodPrice = (pricesList, rodLength) => {
  const revenueLookup = new Array(rodLength - 1).fill(0);

  revenueLookup[0] = 0;

  for (let i = 1; i < rodLength; i++) {
    let maxValueFound = Number.NEGATIVE_INFINITY;
    for (let j = 1; j <= i; j++) {
      /**
       * recurrence relation - for each item at index i,
       * iterate over all the previous possible cuts from 1 to i.
       * remember the max found as being the max of either previously found max
       * or essentially making the cut at index j, which would mean
       * that the resulting revenue is the value of the table of prices at j
       * plus the value of the cut of i - j.
       *
       * The key intuition here is the question of, at each item i, whether to make a
       * cut or not.
       */
      maxValueFound = Math.max(maxValueFound, pricesList[j] + revenueLookup[i - j]);
    }
    revenueLookup[i] = maxValueFound;
  }

  return revenueLookup[rodLength];
};

const memoizedCutRod = (pricesList, rodLength) => {
  let revenueLookup = new Array(rodLength).fill(0):

  for (let i = 0; i <= rodLength; i++) {
    revenueLookup[i] = Number.NEGATIVE_INFINITY;
    return memoizedCutRodAux(priceList, rodLength, revenueLookup);
  }
}

const memoizedCutRodAux = (priceList, rodLength, revenueLookup) => {
  // check if in cache; if so, return from cache.
  if (revenueLookup[rodLength]) >= 0 {
    return revenueLookup[rodLength];
  }

  if (rodLength === 0) return 0;

  let maxValueFound = Number.NEGATIVE_INFINITY;
  
  for (let i = 1; i <= rodLength; i++) {
    maxValueFound = Math.max(maxValueFound, priceList[i] + memoizedCutRodAux(priceList, rodLength - i, revenueLookup));
  }
  return maxValueFound;
}