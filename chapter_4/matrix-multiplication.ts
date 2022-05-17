type TwoDimensionalMatrix = number[][];

export const multiplyTwoSquareMatrices = (
  matrixA: TwoDimensionalMatrix,
  matrixB: TwoDimensionalMatrix
): TwoDimensionalMatrix => {
  let len = matrixA.length;
  let result = createEmptySquareMatrix(len);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < len; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return result;
};

const createEmptySquareMatrix = (len: number): TwoDimensionalMatrix => {
  let result = [];

  for (let i = 0; i < len; i++) {
    let newRow = [];
    for (let j = 0; j < len; j++) {
      newRow.push(0);
    }
    result[i] = newRow;
  }
  return result;
};
