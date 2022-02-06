export const checkRowsArr = [];
export const checkColumnsArr = [];
export let answers = [];
export function checkGrid(matrix) {
  let z;
  let z1;
  for (let i = 0; i < matrix.length; i++) {
    checkRowsArr.splice(0, z);
    checkColumnsArr.splice(0, z1);
    for (let j = 0; j < matrix[i].length; j++) {
      if (!Number.isNaN(matrix[i][j])) {
        checkRowsArr.push(matrix[i][j]);
      }
      if (!Number.isNaN(matrix[j][i])) {
        checkColumnsArr.push(matrix[j][i]);
      }
      z = checkRowsArr.length;
      z1 = checkColumnsArr.length;
    }

    const x = new Set(checkRowsArr);
    const y = new Set(checkColumnsArr);
    if (y.size != z1 || x.size != z) {
      answers.push(false);
    }
  }
}
