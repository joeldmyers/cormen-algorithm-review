const longestCommonSubsequence = function (text1, text2) {
  let dpGrid = [];

  for (let i = 0; i <= text1.length; i++) {
    dpGrid.push(new Array(text2.length + 1).fill(0));
  }

  for (let i = 1; i < dpGrid.length; i++) {
    for (let j = 1; j < dpGrid[0].length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dpGrid[i][j] = dpGrid[i - 1][j - 1] + 1;
      } else {
        dpGrid[i][j] = Math.max(dpGrid[i - 1][j], dpGrid[i][j - 1]);
      }
    }
  }

  return dpGrid[text1.length][text2.length];
};
