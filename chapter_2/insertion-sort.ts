/**
 * Insertion Sort sorts in place
 */
export const insertionSort = (numbers: number[]): number[] => {
  // skip numbers[0] since this is "sorted"; start at index 1.

  for (
    let pointerDividingSortedFromUnsorted = 1;
    pointerDividingSortedFromUnsorted < numbers.length;
    pointerDividingSortedFromUnsorted++
  ) {
    // insert currentNum into the sorted sequence to the left
    const currentNumber = numbers[pointerDividingSortedFromUnsorted];

    // let's look one to the left of the current number
    let indexOfCurrentSortedItemWeAreLookingAt =
      pointerDividingSortedFromUnsorted - 1;

    while (
      indexOfCurrentSortedItemWeAreLookingAt >= 0 &&
      currentNumber <= numbers[indexOfCurrentSortedItemWeAreLookingAt]
    ) {
      /**
       * this condition starts from just to the left of the pointer dividing the sorted from the unsorted.
       * It only continues (does anything) if
       * the number in the sorted array we are looking at is greater than
       * the number we are pulling over from the unsorted numbers
       * if the current number is greater than or equal to the sorted number we are examining,
       * we leave it where it is (to the right)
       * if it's less than, we swap it with the one to the left of it and move over one and go again.
       */

      numbers[indexOfCurrentSortedItemWeAreLookingAt + 1] =
        numbers[indexOfCurrentSortedItemWeAreLookingAt];
      indexOfCurrentSortedItemWeAreLookingAt--;
      numbers[indexOfCurrentSortedItemWeAreLookingAt + 1] = currentNumber;
    }
  }

  // this should now be sorted.
  return numbers;
};
