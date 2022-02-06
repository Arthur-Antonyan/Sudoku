export let answersFilled = [];
export const checkRowsArrFilled = [];
export const checkGridArrFilled = [];
export const checkColumnsArrFilled = [];
export function checkGridFilled(matrix) {
  answersFilled.length = 0;
  let z, z1, z2;
  for (let i = 0; i < matrix.length; i++) {
    checkRowsArrFilled.splice(0, z);
    checkColumnsArrFilled.splice(0, z2);
    checkGridArrFilled.splice(0, z1);
    for (let j = 0; j < matrix[i].length; j++) {
      checkRowsArrFilled.push(matrix[i][j]);
      checkGridArrFilled.push(matrix[i][j]);
      checkColumnsArrFilled.push(matrix[j][i]);
      z = checkRowsArrFilled.length;
      z1 = checkGridArrFilled.length;
      z2 = checkColumnsArrFilled.length;
    }
    const x = new Set(checkRowsArrFilled);
    const y = new Set(checkGridArrFilled);
    const g = new Set(checkColumnsArrFilled);

    if (x.size != z || g.size != z2) {
      answersFilled.push(false);
    }
  }
}
