export const mergeSort = (array: number[]): number[] => {
  if (array.length <= 1) return array;

  const [array1, array2] = splitArrayInTwo(array);
  const mergedArray1 = mergeSort(array1);
  const mergedArray2 = mergeSort(array2);
  return mergeTwoSortedArrays(mergedArray1, mergedArray2);
};

const splitArrayInTwo = (array: number[]): [number[], number[]] => {
  const mid = Math.floor(array.length / 2);

  return [array.slice(0, mid), array.slice(mid, array.length)];
};

const mergeTwoSortedArrays = (array1: number[], array2: number[]): number[] => {
  let pointer1 = 0;
  let pointer2 = 0;
  let result = [];

  while (pointer1 < array1.length && pointer2 < array2.length) {
    if (array1[pointer1] <= array2[pointer2]) {
      result.push(array1[pointer1]);
      pointer1++;
    } else {
      result.push(array2[pointer2]);
      pointer2++;
    }
  }

  return [
    ...result,
    ...array1.slice(pointer1, array1.length),
    ...array2.slice(pointer2, array2.length),
  ];
};
