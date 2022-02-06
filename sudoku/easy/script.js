import { addRandom } from './addRandom.js';
import { checkGrid, checkRowsArr, checkGridArr, checkColumnsArr } from './checkFunctionsRandom.js';
import { start, pause, reset } from '../general/stopwatch.js';
export let answers = [];
export let check = document.querySelector('.check');
let div = document.querySelectorAll('.board>div');
export let startGamebtn = document.querySelector('.change');
let matrix = [];
let arr = [];

for (let i = 0; i < div.length; i++) {
  div[i].classList.add(i + 1);
}
////emptying
startGamebtn.addEventListener('click', () => {
  for (let i = 0; i < div.length; i++) {
    div[i].innerHTML = '';
  }
});

startGamebtn.addEventListener('click', addRandom);

function split(arr, len) {
  let i, n;
  (i = 0), (n = arr.length);
  while (i < n) {
    matrix.push(arr.slice(i, (i += len)));
  }
  return matrix;
}

check.addEventListener('click', () => {
  for (let i = 0; i <= 8; i++) {
    arr.push(parseInt(div[i].innerHTML));
  }
  split(arr, 3);
});

check.addEventListener('click', () => {
  checkGrid(matrix);
});

startGamebtn.addEventListener('click', () => {
  matrix.length = 0;
  arr.length = 0;
  checkColumnsArr.length = 0;
  checkRowsArr.length = 0;
  checkGridArr.length = 0;
  answers.length = 0;
});
startGamebtn.addEventListener('click', reset);
startGamebtn.addEventListener('click', start);
check.addEventListener('click', pause);
