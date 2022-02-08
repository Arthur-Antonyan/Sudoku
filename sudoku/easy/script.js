import { addRandom } from '../general/addRandom.js';
import { checkGrid, checkRowsArr, checkGridArr, checkColumnsArr } from './checkFunctionsRandom.js';
import { start, pause, reset } from '../general/stopwatch.js';

export let answers = [];
export let check = document.querySelector('.check');
export let startGamebtn = document.querySelector('.change');
let div = document.querySelectorAll('.board>div');
let matrix = [];
let arr = [];

const emotyDiv = () => {
  for (let i = 0; i < div.length; i++) {
    div[i].innerHTML = '';
  }
};
startGamebtn.addEventListener('click', emotyDiv);

startGamebtn.addEventListener('click', () => {
  addRandom(div);
});

function split(arr, len) {
  let i, n;
  (i = 0), (n = arr.length);
  while (i < n) {
    matrix.push(arr.slice(i, (i += len)));
  }
  return matrix;
}
const nestedArrLength = 8;
check.addEventListener('click', () => {
  for (let i = 0; i <= nestedArrLength; i++) {
    arr.push(parseInt(div[i].innerHTML));
  }
  split(arr, 3);
});

check.addEventListener('click', () => {
  checkGrid(matrix);
});

const nullify = () => {
  matrix.length = 0;
  arr.length = 0;
  checkColumnsArr.length = 0;
  checkRowsArr.length = 0;
  checkGridArr.length = 0;
  answers.length = 0;
};

startGamebtn.addEventListener('click', nullify);
startGamebtn.addEventListener('click', reset);
startGamebtn.addEventListener('click', start);
check.addEventListener('click', pause);
