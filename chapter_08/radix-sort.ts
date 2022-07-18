/**
 *
 * This returns the digit in the number at the given position
 * getDigit(12345, 0) returns 5
 * getDigit(12345, 4) returns 1
 */
export const getDigit = (number: number, position: number): number => {
  return parseInt(number.toString().split("").reverse()[position]) || 0;
};

export const getNumberOfDigits = (number: number) => number.toString().length;

export const mostDigits = (array: number[]): number => {
  let mostDigits = 0;

  for (let num of array) {
    const numDigits = getNumberOfDigits(num);
    mostDigits = Math.max(mostDigits, numDigits);
  }

  return mostDigits;
};

export const radixSort = (nums: number[]): number[] => {
  let maxDigitCount = mostDigits(nums);

  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets: number[][] = [[], [], [], [], [], [], [], [], [], []];

    for (let num of nums) {
      const digit = getDigit(num, i);
      digitBuckets[digit].push(num);
    }

    nums = ([] as number[]).concat(...digitBuckets);
  }

  return nums;
};
