import { answers } from './script.js';
export const checkRowsArr = [];
export const checkGridArr = [];
export const checkColumnsArr = [];
export function checkGrid(matrix) {
  let z, z1, z2;
  for (let i = 0; i < matrix.length; i++) {
    checkRowsArr.splice(0, z);
    checkColumnsArr.splice(0, z1);
    for (let j = 0; j < matrix[i].length; j++) {
      checkRowsArr.push(matrix[i][j]);
      checkGridArr.push(matrix[i][j]);
      checkColumnsArr.push(matrix[j][i]);
      z = checkRowsArr.length;
      z1 = checkGridArr.length;
      z2 = checkColumnsArr.length;
    }
    const x = new Set(checkRowsArr);
    const y = new Set(checkGridArr);
    const g = new Set(checkColumnsArr);

    if (x.size != z || y.size != z1 || g.size != z2) {
      answers.push(false);
    }
  }
}
