const matrix = [
  [3, 4, 5, 6],
  [7, 8, 9, 11],
  [14, 16, 17, 20],
  [33, 54, 58, 99],
];

search(matrix, 9);

function search(matrix: number[][], target: number) {
  let row = 0;
  let col = matrix.length - 1;

  while (row < matrix.length && col >= 0) {
    console.log("----------");
    console.log(`ROW: ${row} | COL ${col} | VALUE (${matrix[row][col]})`);
    if (matrix[row][col] == target) {
      console.log([row, col]);
      return [row, col];
    } else if (matrix[row][col] < target) {
      row++;
    } else if (matrix[row][col] > target) {
      col--;
    }
    console.log(`ROW: ${row} | COL ${col} `);
    console.log("----------");
  }

  console.log("not found");
  return [-1, -1];
}
