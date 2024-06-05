// const matrix = [
//   [3, 4, 5, 6],
//   [7, 8, 9, 11],
//   [14, 16, 17, 20],
//   [33, 54, 58, 99],
// ];

//search(matrix, 9);

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

//Ex 1 Binary search em um array 2d

const matrix = [
  [3, 4, 5, 6],
  [7, 8, 9, 11],
  [14, 16, 17, 20],
  [33, 54, 58, 99],
];

//searchRoll(matrix, 8);
//Retorna a possivel linha onde esta o alvo
//const possibleRow = searchRoll(matrix, 9);
function searchRoll(matrix: number[][], target: number) {
  let start = 0;
  let end = matrix.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (matrix[mid][0] == target) {
      console.log(`VALOR ENCONTRADO EM ROW (${mid}) COLUNA (0)`);
      return mid;
    } else if (matrix[mid][0] < target) {
      start = mid + 1;
    } else if (matrix[mid][0] > target) {
      end = mid - 1;
    }
  }

  console.log(`POTENCIAL ROW: ${end}`);
  return end;
}

//searchOverRoll(matrix, possibleRow, 9);

function searchOverRoll(matrix: number[][], row: number, target: number) {
  const targetRow = matrix[row];
  let start = 0;
  let end = targetRow.length;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (targetRow[mid] == target) {
      console.log(`VALUE FOUND ON ROW (${row}) | COL (${mid})`);
      return mid;
    } else if (targetRow[mid] < target) {
      start = mid + 1;
    } else if (targetRow[mid] > target) {
      end = mid - 1;
    }
  }

  console.log(`VALUE NOT FOUND`);
}

//EX 2

const matrix2 = [
  [3, 4, 5, 6],
  [7, 8, 9, 11],
  [14, 16, 17, 20],
  [33, 54, 58, 99],
];

binarySearch3(matrix2, 100);
function binarySearch3(matrix: number[][], target: number) {
  let row = 0;
  let col = matrix.length - 1;

  while (row < matrix.length && col >= 0) {
    //const mid = Math.floor((row+col)/2)
    console.log(" ");
    console.log(`CURRENT ROW ${row} - CURRENT COL ${col}`);
    if (matrix[row][col] == target) {
      console.log(`ITEM ENCONTRADO EM ROW (${row}) | COL (${col})`);
      return;
    } else if (matrix[row][col] < target) {
      row++;
    } else if (matrix[row][col] > target) {
      col--;
    }
    console.log(" ");
  }

  console.log("final");
}
