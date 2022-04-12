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
    const currentlySelectedNumberToSort =
      numbers[pointerDividingSortedFromUnsorted];

    // let's look one to the left of the current number
    let indexOfCurrentSortedItemWeAreLookingAt =
      pointerDividingSortedFromUnsorted - 1;

    while (
      indexOfCurrentSortedItemWeAreLookingAt >= 0 &&
      currentlySelectedNumberToSort <=
        numbers[indexOfCurrentSortedItemWeAreLookingAt]
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
      numbers[indexOfCurrentSortedItemWeAreLookingAt + 1] =
        currentlySelectedNumberToSort;
    }
  }

  // this should now be sorted.
  return numbers;
};

/**
 * Insertion Sort sorts in place (decreasing - exercise 2.1-2)
 */
export const insertionSortDecreasing = (numbers: number[]): number[] => {
  // skip numbers[0] since this is "sorted"; start at index 1.

  for (
    let pointerDividingSortedFromUnsorted = 1;
    pointerDividingSortedFromUnsorted < numbers.length;
    pointerDividingSortedFromUnsorted++
  ) {
    // insert currentNum into the sorted sequence to the left
    const currentlySelectedNumberToSort =
      numbers[pointerDividingSortedFromUnsorted];

    // let's look one to the left of the current number
    let indexOfCurrentSortedItemWeAreLookingAt =
      pointerDividingSortedFromUnsorted - 1;

    while (
      indexOfCurrentSortedItemWeAreLookingAt >= 0 &&
      currentlySelectedNumberToSort >=
        numbers[indexOfCurrentSortedItemWeAreLookingAt]
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
      numbers[indexOfCurrentSortedItemWeAreLookingAt + 1] =
        currentlySelectedNumberToSort;
    }
  }

  // this should now be sorted.
  return numbers;
};

// exercise 2.1-3
export const linearSearch = (
  numbers: number[],
  target: number
): number | null => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    }
  }

  return null;
};
