/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix1) {
  function addOnetoSurrounding(rowIndex, colIndex, fieldZ, originalField) {
    const field = fieldZ;
    for (let i = rowIndex - 1; i <= rowIndex + 1; i++) {
      for (let j = colIndex - 1; j <= colIndex + 1; j++) {
        if (i >= 0 && i < field.length) {
          if (j >= 0 && j < field[0].length) {
            if (!originalField[i][j]) {
              field[i][j]++;
            } else {
              field[rowIndex][colIndex] = 1;
            }
          }
        }
      }
    }

    return field;
  }
  const matrix = matrix1.map((row) => row.map((el) => 0 + el));
  const temp = JSON.stringify(matrix);
  let m2 = JSON.parse(temp).map((row) => row.map(() => 0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        m2 = addOnetoSurrounding(i, j, m2, matrix);
      }
    }
  }

  return m2;
}

module.exports = minesweeper;
