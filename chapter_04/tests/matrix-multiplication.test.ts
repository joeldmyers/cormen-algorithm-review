import { multiplyTwoSquareMatrices } from "../matrix-multiplication";

// https://www.mathsisfun.com/algebra/matrix-multiplying.html
it("multiplies the matrices", () => {
  const matrixA = [
    [1, 2],
    [3, 4],
  ];

  const matrixB = [
    [5, 6],
    [7, 8],
  ];

  const expectedResult = [
    [19, 22],
    [43, 50],
  ];

  expect(multiplyTwoSquareMatrices(matrixA, matrixB)).toEqual(expectedResult);
});
